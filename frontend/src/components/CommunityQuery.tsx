import React, { useState } from 'react'
import Image from 'next/image'

const CommunityQuery = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      {/* From the Community */}
      <div className="border-t border-gray-800 pt-8 bg-[#101011] px-6 rounded-xl w-full max-w-5xl mx-auto pb-10">
        <h3 className="text-xl font-bold text-white mb-6">From the Community</h3>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {['All', 'Health NFTs', 'Hospitals', 'Fertility', 'Medical Research', 'Patient Care'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-colors ${(selectedCategory === null && category === 'All') || selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: 1,
              title: "Understanding Health NFTs: A Complete Guide",
              thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
              videoCount: 3,
              tags: ["Health NFTs", "Blockchain", "Digital Health"],
              author: "Dr. Sarah Chen",
              date: "9/27/2025",
              category: "Health NFTs"
            },
            {
              id: 2,
              title: "Hospital Management in the Digital Age",
              thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
              videoCount: 1,
              tags: ["Hospitals", "Healthcare Technology", "Management"],
              author: "Michael Rodriguez",
              date: "9/27/2025",
              category: "Hospitals"
            },
            {
              id: 3,
              title: "IVF Treatment Explained: From Start to Finish",
              thumbnail: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
              videoCount: 5,
              tags: ["Fertility", "IVF", "Reproductive Health"],
              author: "Dr. Emily Watson",
              date: "9/26/2025",
              category: "Fertility"
            },
            {
              id: 4,
              title: "How Blockchain Secures Medical Records",
              thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop",
              videoCount: 2,
              tags: ["Health NFTs", "Blockchain", "Data Security"],
              author: "James Park",
              date: "9/25/2025",
              category: "Health NFTs"
            },
            {
              id: 5,
              title: "Patient-Centered Care: Best Practices",
              thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
              videoCount: 1,
              tags: ["Patient Care", "Healthcare", "Best Practices"],
              author: "Dr. Lisa Thompson",
              date: "9/24/2025",
              category: "Patient Care"
            },
            {
              id: 6,
              title: "Surrogacy Process: A Comprehensive Overview",
              thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
              videoCount: 4,
              tags: ["Fertility", "Surrogacy", "Family Planning"],
              author: "Dr. Robert Kim",
              date: "9/23/2025",
              category: "Fertility"
            },
            {
              id: 7,
              title: "AI in Medical Diagnosis: Current Applications",
              thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
              videoCount: 3,
              tags: ["Medical Research", "AI", "Diagnostics"],
              author: "Dr. Amanda Foster",
              date: "9/22/2025",
              category: "Medical Research"
            },
            {
              id: 8,
              title: "Hospital Accreditation: What You Need to Know",
              thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
              videoCount: 1,
              tags: ["Hospitals", "Accreditation", "Quality"],
              author: "Patricia Martinez",
              date: "9/21/2025",
              category: "Hospitals"
            }
          ]
            .filter(item => !selectedCategory || item.category === selectedCategory)
            .map((item) => (
              <div
                key={item.id}
                className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-colors cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative w-full h-48 bg-gray-800 overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.videoCount} {item.videoCount === 1 ? 'video' : 'videos'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-xs px-2 py-0.5 text-gray-500">
                        +{item.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>by {item.author}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="text-white underline">
            Load More
          </button>
        </div>
      </div>
    </>
  )
}

export default CommunityQuery