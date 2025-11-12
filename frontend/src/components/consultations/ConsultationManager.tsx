'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Video, Building2, Sparkles, Plus, X, FileText, Upload, CheckCircle, AlertCircle, MapPin, User as UserIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { format, isBefore, isAfter, addMinutes, parseISO } from 'date-fns';
import { useAuth } from '@/app/contexts/use-auth';
import { useAccount } from 'wagmi';
import { hospitalService } from '@/lib/services/hospital';
import Image from 'next/image';

interface Consultation {
  id: string;
  type: 'hospital' | 'ai';
  title: string;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  hospitalId?: string;
  hospitalName?: string;
  hospitalImage?: string;
  description?: string;
  healthDataShared?: boolean;
  meetingLink?: string;
}

interface CreateConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'hospital' | 'ai';
  onSuccess: () => void;
}

function CreateConsultationModal({ isOpen, onClose, type, onSuccess }: CreateConsultationModalProps) {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [isLoadingHospitals, setIsLoadingHospitals] = useState(false);
  const [healthDataFiles, setHealthDataFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && type === 'hospital') {
      loadHospitals();
    }
  }, [isOpen, type]);

  const loadHospitals = async () => {
    setIsLoadingHospitals(true);
    try {
      const results = await hospitalService.searchHospitals({});
      setHospitals(results);
    } catch (error) {
      console.error('Error loading hospitals:', error);
      toast.error('Failed to load hospitals');
    } finally {
      setIsLoadingHospitals(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setHealthDataFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setHealthDataFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      toast.error('Please select date and time');
      return;
    }

    if (type === 'hospital' && !selectedHospital) {
      toast.error('Please select a hospital');
      return;
    }

    if (!purpose.trim()) {
      toast.error('Please enter a purpose for the consultation');
      return;
    }

    setIsSubmitting(true);
    try {
      const startDateTime = new Date(`${selectedDate}T${selectedTime}`);
      const endDateTime = addMinutes(startDateTime, parseInt(duration));

      // TODO: Call API to create consultation
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Consultation created successfully');
      onSuccess();
      onClose();
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setPurpose('');
      setDescription('');
      setHealthDataFiles([]);
    } catch (error) {
      console.error('Error creating consultation:', error);
      toast.error('Failed to create consultation');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-background-300 border border-border rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Book {type === 'hospital' ? 'Hospital' : 'AI'} Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'hospital' && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Select Hospital
              </label>
              {isLoadingHospitals ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                </div>
              ) : (
                <select
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Choose a hospital...</option>
                  {hospitals.map((hospital) => (
                    <option key={hospital.id} value={hospital.id}>
                      {hospital.name} - {hospital.location}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Time
              </label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Duration (minutes)
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Purpose <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="e.g., Initial fertility consultation, Follow-up appointment"
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Notes
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Any additional information you'd like to share..."
              rows={3}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
            />
          </div>

          {type === 'ai' && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Share Health Data (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-4">
                <input
                  type="file"
                  id="health-data-upload"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="health-data-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-400">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                  </span>
                </label>
              </div>
              {healthDataFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {healthDataFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-background-200 p-2 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-foreground truncate">
                          {file.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-background-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </span>
              ) : (
                'Book Consultation'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ConsultationManager() {
  const { user, isAuthenticated } = useAuth();
  const { address } = useAccount();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'all'>('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createModalType, setCreateModalType] = useState<'hospital' | 'ai'>('hospital');

  useEffect(() => {
    if (isAuthenticated) {
      loadConsultations();
    }
  }, [isAuthenticated]);

  const loadConsultations = async () => {
    setIsLoading(true);
    try {
      // TODO: Fetch from API
      // For now, use mock data
      const mockConsultations: Consultation[] = [
        {
          id: '1',
          type: 'hospital',
          title: 'Initial Fertility Consultation',
          startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
          endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000),
          status: 'upcoming',
          hospitalId: '1',
          hospitalName: 'Genesis Fertility Institute',
          hospitalImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
          description: 'Initial consultation to discuss fertility options',
        },
        {
          id: '2',
          type: 'ai',
          title: 'AI Health Assessment',
          startDate: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
          endDate: new Date(Date.now() + 1 * 60 * 60 * 1000 + 30 * 60 * 1000),
          status: 'upcoming',
          description: 'AI-powered health assessment and recommendations',
          healthDataShared: true,
        },
        {
          id: '3',
          type: 'hospital',
          title: 'Follow-up Appointment',
          startDate: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          endDate: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now
          status: 'ongoing',
          hospitalId: '2',
          hospitalName: 'Boston Medical Center',
          meetingLink: 'https://meet.example.com/room-123',
        },
      ];
      setConsultations(mockConsultations);
    } catch (error) {
      console.error('Error loading consultations:', error);
      toast.error('Failed to load consultations');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredConsultations = consultations.filter(consultation => {
    if (activeTab === 'upcoming') {
      return consultation.status === 'upcoming';
    }
    if (activeTab === 'ongoing') {
      return consultation.status === 'ongoing';
    }
    return true;
  });

  const getStatusBadge = (status: Consultation['status']) => {
    const styles = {
      upcoming: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      ongoing: 'bg-green-500/20 text-green-400 border-green-500/50',
      completed: 'bg-gray-500/20 text-gray-400 border-gray-500/50',
      cancelled: 'bg-red-500/20 text-red-400 border-red-500/50',
    };

    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const openCreateModal = (type: 'hospital' | 'ai') => {
    setCreateModalType(type);
    setIsCreateModalOpen(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">Please log in to view your consultations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Consultations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your hospital and AI consultant meetings
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => openCreateModal('hospital')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2 transition-opacity"
          >
            <Building2 className="w-4 h-4" />
            Book Hospital
          </button>
          <button
            onClick={() => openCreateModal('ai')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2 transition-opacity"
          >
            <Sparkles className="w-4 h-4" />
            Book AI Consultant
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mb-6">
        <nav className="flex space-x-8">
          {[
            { id: 'all', label: 'All Consultations' },
            { id: 'upcoming', label: 'Upcoming' },
            { id: 'ongoing', label: 'Ongoing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 font-medium text-sm transition-colors ${activeTab === tab.id
                ? 'text-foreground border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Consultations List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : filteredConsultations.length === 0 ? (
        <div className="bg-background-200 border border-border rounded-lg p-12 text-center">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No consultations found</h3>
          <p className="text-muted-foreground mb-6">
            {activeTab === 'all'
              ? 'Get started by booking your first consultation'
              : `No ${activeTab} consultations at the moment`}
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => openCreateModal('hospital')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Book Hospital Consultation
            </button>
            <button
              onClick={() => openCreateModal('ai')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Book AI Consultation
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 min-h-160 overflow-y-auto">
          {filteredConsultations.map((consultation) => (
            <div
              key={consultation.id}
              className="bg-background-200 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${consultation.type === 'hospital' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                    }`}>
                    {consultation.type === 'hospital' ? (
                      <Building2 className={`w-6 h-6 ${consultation.type === 'hospital' ? 'text-blue-400' : 'text-purple-400'
                        }`} />
                    ) : (
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {consultation.title}
                      </h3>
                      {getStatusBadge(consultation.status)}
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {format(consultation.startDate, 'EEEE, MMMM d, yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {format(consultation.startDate, 'h:mm a')} - {format(consultation.endDate, 'h:mm a')}
                        </span>
                      </div>
                      {consultation.hospitalName && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{consultation.hospitalName}</span>
                        </div>
                      )}
                      {consultation.description && (
                        <p className="text-foreground mt-2">{consultation.description}</p>
                      )}
                      {consultation.type === 'ai' && consultation.healthDataShared && (
                        <div className="flex items-center gap-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>Health data shared</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  {consultation.status === 'ongoing' && consultation.meetingLink && (
                    <a
                      href={consultation.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90 flex items-center gap-2 text-sm transition-opacity"
                    >
                      <Video className="w-4 h-4" />
                      Join Meeting
                    </a>
                  )}
                  {consultation.status === 'upcoming' && (
                    <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-background-300 text-sm transition-colors">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Consultation Modal */}
      <CreateConsultationModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        type={createModalType}
        onSuccess={loadConsultations}
      />
    </div>
  );
}

