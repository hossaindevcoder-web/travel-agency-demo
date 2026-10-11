/* eslint-disable @next/next/no-img-element */
import { Star, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      badge: "Featured",
      badgeColor: "bg-green-500",
      discount: null,
      rating: 4.8,
      location: "Bali, Indonesia",
      duration: "7 Days / 8 Nights",
      title: "Bali Bliss: 7 Days Days Of Love And Luxury",
      price: 799,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 2,
      image:
        "https://www.obokash.com/admin/public/images/tour/Best-Dhaka-to-Malaysia-tour-package-from-bangladesh.webp",
      badge: "50% off",
      badgeColor: "bg-red-500",
      discount: "50% off",
      rating: 4.8,
      location: "Paris, France",
      duration: "7 Days / 8 Nights",
      title: "Paris Escape: 5-1n The City Of Romance",
      price: 899,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop",
      badge: "Featured",
      badgeColor: "bg-green-500",
      discount: null,
      rating: 4.8,
      location: "Tokyo, Japan",
      duration: "7 Days / 8 Nights",
      title: "Tokyo Tour: 6-Days Through Myth And History",
      price: 699,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
      badge: "Popular",
      badgeColor: "bg-orange-500",
      discount: null,
      rating: 4.8,
      location: "Dubai, UAE",
      duration: "7 Days / 8 Nights",
      title: "Dubai Dream: 5 Days Of Desert And Souks",
      price: 599,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      badge: "50% off",
      badgeColor: "bg-red-500",
      discount: "50% off",
      rating: 4.8,
      location: "Male, Maldives",
      duration: "7 Days / 8 Nights",
      title: "Maldives: 7-Days Of Sun, Sand, And Sea",
      price: 999,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=250&fit=crop",
      badge: "Featured",
      badgeColor: "bg-green-500",
      discount: null,
      rating: 4.8,
      location: "Kyoto, Japan",
      duration: "7 Days / 8 Nights",
      title: "Kyoto Bliss: 6-Days Of Higher Altitude Thrills",
      price: 899,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=250&fit=crop",
      badge: "Featured",
      badgeColor: "bg-green-500",
      discount: null,
      rating: 4.8,
      location: "Kyoto, Japan",
      duration: "7 Days / 8 Nights",
      title: "Kyoto Bliss: 6-Days Of Higher Altitude Thrills",
      price: 899,
      originalPrice: 999,
      currency: "$",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=250&fit=crop",
      badge: "Featured",
      badgeColor: "bg-green-500",
      discount: null,
      rating: 4.8,
      location: "Kyoto, Japan",
      duration: "7 Days / 8 Nights",
      title: "Kyoto Bliss: 6-Days Of Higher Altitude Thrills",
      price: 899,
      originalPrice: 999,
      currency: "$",
    },
  ];

  return (
    <div className="max-w-[1550px] mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-600 text-sm">Showing 1-6 of 12 Results</h2>
        <div className="flex items-center">
          <select className="border border-gray-300 rounded px-3 py-1 text-sm bg-white">
            <option>Rating</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Duration</option>
          </select>
        </div>
      </div>

      {/* Tour Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              {/* Badge */}
              <div
                className={`absolute top-3 left-3 ${pkg.badgeColor} text-white px-2 py-1 rounded text-xs font-medium`}
              >
                {pkg.badge}
              </div>
              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{pkg.rating}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Location and Duration */}
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{pkg.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 mb-3 text-sm leading-tight">
                {pkg.title}
              </h3>

              {/* Price and Book Button */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Start From</span>
                  <div className="flex items-center gap-1">
                    <span className="text-green-600 font-bold text-lg">
                      {pkg.currency}
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 line-through text-xs">
                      {pkg.currency}
                      {pkg.originalPrice}
                    </span>
                    <span className="text-xs text-gray-500">/ person</span>
                  </div>
                </div>
                <Link href={`/package/${pkg.id}`}>
                  <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-4 py-2 rounded text-xs font-medium transition-colors duration-200">
                    Book now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button className="w-8 h-8 rounded border border-gray-300 bg-white text-gray-400 text-sm hover:bg-gray-50">
          01
        </button>
        <button className="w-8 h-8 rounded border border-gray-300 bg-white text-gray-600 text-sm hover:bg-gray-50">
          02
        </button>
        <button className="w-8 h-8 rounded border border-gray-300 bg-white text-gray-600 text-sm hover:bg-gray-50">
          →
        </button>
      </div>
    </div>
  );
}
