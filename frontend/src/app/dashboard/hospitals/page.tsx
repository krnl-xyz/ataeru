'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, BadgeCheck, ChevronRight, Building2, Plus, Loader2, ShieldCheck, Shield } from 'lucide-react';
import { useAuth } from '@/app/contexts/use-auth';
import HospitalRegistrationModal from '@/components/HospitalRegistrationModal';
import { hospitalService, RegisteredHospital } from '@/lib/services/hospital';
import { toast } from 'sonner';

interface DisplayHospital extends RegisteredHospital {
  isFavorite: boolean;
  reviews?: number;
}

export default function HospitalsPage() {
  const [hospitals, setHospitals] = useState<DisplayHospital[]>([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState('');
  const [minRating, setMinRating] = useState<number | undefined>(undefined);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const isInitialLoad = useRef(true);

  // Load favorites from localStorage
  const getFavorites = useCallback((): Set<string> => {
    if (typeof window === 'undefined') return new Set();
    const favorites = localStorage.getItem('hospitalFavorites');
    return favorites ? new Set(JSON.parse(favorites)) : new Set();
  }, []);

  const saveFavorites = useCallback((favorites: Set<string>) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('hospitalFavorites', JSON.stringify(Array.from(favorites)));
  }, []);

  // Fetch hospitals from backend
  const fetchHospitals = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const favorites = getFavorites();
      const params: {
        query?: string;
        location?: string;
        specialty?: string;
        minRating?: number;
      } = {};

      // Only add search params if they have values
      if (searchTerm) params.query = searchTerm;
      if (locationFilter) params.location = locationFilter;
      if (specialty) params.specialty = specialty;
      if (minRating !== undefined) params.minRating = minRating;

      const data = await hospitalService.searchHospitals(params);

      // Add client-side properties (favorites, reviews)
      const hospitalsWithExtras: DisplayHospital[] = data.map(hospital => ({
        ...hospital,
        isFavorite: favorites.has(hospital.id),
        reviews: 0, // Can be added from backend if available
      }));

      setHospitals(hospitalsWithExtras);
    } catch (err: any) {
      console.error('Error fetching hospitals:', err);
      setError(err.message || 'Failed to load hospitals');
      toast.error('Failed to load hospitals', {
        description: err.message || 'Please try again later',
      });
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, locationFilter, specialty, minRating, getFavorites]);

  // Debounced search - refetch when filters change (with immediate load on mount)
  useEffect(() => {
    // On initial load, fetch immediately without delay
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      fetchHospitals();
      return;
    }

    // For subsequent changes, debounce the search
    const timer = setTimeout(() => {
      fetchHospitals();
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [searchTerm, locationFilter, specialty, minRating, fetchHospitals]);

  const toggleFavorite = (id: string) => {
    const favorites = getFavorites();
    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }
    saveFavorites(favorites);

    // Update local state
    setHospitals(hospitals.map(hospital =>
      hospital.id === id
        ? { ...hospital, isFavorite: !hospital.isFavorite }
        : hospital
    ));
  };

  // Client-side filter for favorites only (search/filtering is done server-side)
  const filteredHospitals = hospitals.filter(hospital => {
    if (favoriteOnly && !hospital.isFavorite) return false;
    return true;
  });

  // Get unique specialties from loaded hospitals for filter dropdown
  const allSpecialties = Array.from(
    new Set(hospitals.flatMap(hospital => hospital.specialties || []))
  ).sort();

  return (
    <div>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Fertility Clinics</h1>
        <div className="mt-3 flex gap-3 sm:mt-0 sm:ml-4">
          {user?.userType === 'MEDICAL_FACILITY' && (
            <button
              onClick={() => setIsRegistrationModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Register Hospital
            </button>
          )}
          <Link href="/dashboard/hospitals/map" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View Map
          </Link>
        </div>
      </div>

      {/* Hospital Registration Modal */}
      <HospitalRegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onSuccess={() => {
          // Refresh hospital list after successful registration
          fetchHospitals();
          toast.success('Hospital registered successfully');
        }}
      />

      {/* Filters */}
      <div className=" p-4 sm:p-6 mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or location"
              className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              placeholder="e.g., Boston, MA"
              className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <select
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            >
              <option value="">All Specialties</option>
              {allSpecialties.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="minRating" className="block text-sm font-medium text-gray-700 mb-1">
              Min Rating
            </label>
            <select
              id="minRating"
              value={minRating === undefined ? '' : minRating}
              onChange={(e) => setMinRating(e.target.value ? parseFloat(e.target.value) : undefined)}
              className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
            >
              <option value="">Any Rating</option>
              <option value="3.0">3.0+</option>
              <option value="3.5">3.5+</option>
              <option value="4.0">4.0+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <input
            id="favoriteOnly"
            type="checkbox"
            checked={favoriteOnly}
            onChange={() => setFavoriteOnly(!favoriteOnly)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="favoriteOnly" className="ml-2 block text-sm text-gray-700">
            Show Favorites Only
          </label>
        </div>
      </div>

      {/* Hospital List */}
      {isLoading ? (
        <div className="mt-6 flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="ml-3 text-gray-600">Loading hospitals...</span>
        </div>
      ) : error ? (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800 font-medium">Error loading hospitals</p>
          <p className="text-red-600 text-sm mt-2">{error}</p>
          <button
            onClick={fetchHospitals}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative h-48">
                  <Image
                    src={hospital.imageUrl || "https://via.placeholder.com/400x200?text=Hospital+Image"}
                    alt={hospital.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(hospital.id)}
                    className="absolute top-2 right-2 h-8 w-8 bg-white bg-opacity-75 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all z-10"
                  >
                    {hospital.isFavorite ? (
                      <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                    ) : (
                      <Heart className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{hospital.name}</h3>
                      <p className="text-sm text-gray-500">{hospital.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{hospital.rating.toFixed(1)}</span>
                      {hospital.reviews !== undefined && hospital.reviews > 0 && (
                        <span className="ml-1 text-sm text-gray-500">({hospital.reviews})</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties && hospital.specialties.length > 0 ? (
                        hospital.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-400">No specialties listed</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-green-600 text-sm">
                        <BadgeCheck className="h-4 w-4 mr-1" />
                        Registered
                      </div>
                      {hospital.isVerified && (
                        <div className="flex items-center text-blue-600 text-sm">
                          <ShieldCheck className="h-4 w-4 mr-1" />
                          Verified
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/dashboard/hospitals/${hospital.id}`}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-gray-400" />
              <p className="mt-4 text-gray-500 text-lg">No hospitals found matching your criteria.</p>
              {(searchTerm || locationFilter || specialty || minRating) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('');
                    setSpecialty('');
                    setMinRating(undefined);
                  }}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
