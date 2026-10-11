/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Hotel,
  Car,
  Utensils,
  Shield,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Check,
  X,
} from "lucide-react";
import { toast } from "react-toastify";

export default function TourDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const packageData = {
    title: "Bali Bliss: 7 Days Days Of Love And Luxury",
    location: "Bali, Indonesia",
    duration: "7 Days / 8 Nights",
    rating: 4.8,
    reviews: 324,
    price: 799,
    originalPrice: 999,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73dd6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    ],
  };

  const highlights = [
    "Private villa accommodation with infinity pool",
    "Daily breakfast and 3 dinners included",
    "Professional tour guide throughout the trip",
    "Airport transfers and internal transportation",
    "Visit to ancient temples and cultural sites",
    "Sunset dinner cruise in Jimbaran Bay",
    "Traditional Balinese spa treatment",
    "Rice terrace trekking experience",
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Bali",
      activities: [
        "Airport pickup",
        "Check-in at luxury villa",
        "Welcome dinner",
        "Evening at leisure",
      ],
    },
    {
      day: 2,
      title: "Ubud Cultural Tour",
      activities: [
        "Visit Monkey Forest Sanctuary",
        "Explore Ubud Art Market",
        "Traditional lunch",
        "Rice terrace walk",
      ],
    },
    {
      day: 3,
      title: "Temple Hopping",
      activities: [
        "Tanah Lot Temple at sunrise",
        "Uluwatu Temple visit",
        "Kecak fire dance show",
        "Seafood dinner",
      ],
    },
    {
      day: 4,
      title: "Adventure Day",
      activities: [
        "White water rafting",
        "Jungle swing experience",
        "Waterfall visit",
        "Spa treatment",
      ],
    },
    {
      day: 5,
      title: "Beach & Relaxation",
      activities: [
        "Seminyak beach day",
        "Beach club lunch",
        "Sunset cocktails",
        "Free evening",
      ],
    },
    {
      day: 6,
      title: "Island Exploration",
      activities: [
        "Day trip to Nusa Penida",
        "Kelingking Beach visit",
        "Snorkeling session",
        "Island lunch",
      ],
    },
    {
      day: 7,
      title: "Farewell Bali",
      activities: [
        "Final breakfast",
        "Last-minute shopping",
        "Airport transfer",
        "Departure",
      ],
    },
  ];

  const inclusions = [
    "7 nights accommodation in luxury villa",
    "Daily breakfast and 3 dinners",
    "Airport transfers",
    "Private air-conditioned vehicle",
    "Professional English-speaking guide",
    "All entrance fees to attractions",
    "Traditional spa treatment",
    "Travel insurance",
  ];

  const exclusions = [
    "International flights",
    "Lunches (except specified)",
    "Personal expenses",
    "Tips and gratuities",
    "Visa fees",
    "Travel insurance upgrades",
    "Optional activities",
    "Alcoholic beverages",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % packageData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + packageData.images.length) % packageData.images.length
    );
  };

  const handleBooking = () => {
    toast.success("🎉 Booking successful!");
  };

  const handleWishlist = () => {
    toast.success("🎉 Wishlist successful!");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {packageData.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{packageData.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{packageData.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{packageData.rating}</span>
                <span className="text-gray-400">
                  ({packageData.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <img
              src={packageData.images[currentImageIndex]}
              alt={packageData.title}
              className="w-full h-96 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {packageData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              {["overview", "itinerary", "inclusions"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Package Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Hotel className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-center">
                      Luxury Accommodation
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Utensils className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-center">Meals Included</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Car className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-center">Transportation</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mb-2" />
                    <span className="text-sm text-center">Tour Guide</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Daily Itinerary</h3>
              {itinerary.map((day) => (
                <div
                  key={day.day}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-lg mb-2">
                    Day {day.day}: {day.title}
                  </h4>
                  <ul className="space-y-1">
                    {day.activities.map((activity, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-green-600">
                  ${packageData.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${packageData.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  {packageData.discount}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500">per person</p>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travelers
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleBooking}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-4"
            >
              Book Now
            </button>
            <button
              onClick={handleWishlist}
              className="w-full border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-6"
            >
              Add to Wishlist
            </button>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-sm mb-3">Need Help?</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ support@travelco.com</p>
                <p>💬 Live Chat Available</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Secure Payment & Free Cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
