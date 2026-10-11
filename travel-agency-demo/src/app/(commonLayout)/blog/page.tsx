/* eslint-disable @next/next/no-img-element */
// import React from "react";
// import DynamicHeader from "../components/DynamicHeader.jsx";

// const BlogPost = () => {
//   return (
//     <div>
//       {" "}
//       <DynamicHeader pageName={"Blog"} />
//     </div>
//   );
// };

// export default BlogPost;

import React from "react";
import { Search, Calendar, User } from "lucide-react";
import Link from "next/link";

const BlogLayout = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxhzsIZf8fMHVIWCQzAwpTpF_M7-EOmUzLg&s",
      date: "January 15, 2024",
      author: "Admin",
      title: "Including animation in your design system",
      excerpt: "Lorem ipsum dolor sit amet consectetur with blog and awesome",
      category: "Lifestyle",
    },
    {
      id: 2,
      image:
        "data:image/jpeg;base64,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",
      date: "January 16, 2024",
      author: "Admin",
      title: "Including animation in your design system",
      excerpt: "Lorem ipsum dolor sit amet consectetur with blog and awesome",
      category: "Lifestyle",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dntd4xawh/image/upload/v1753419166/uugur347st948ddsriks.jpg",
      date: "January 14, 2024",
      author: "Admin",
      title: "Including animation in your design system",
      excerpt: "Lorem ipsum dolor sit amet consectetur with blog and awesome",
      category: "Lifestyle",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbgnO1tPLfRdJpE5ag0jO9ClXYrD4Ir_lCQ&s",
      date: "January 13, 2024",
      author: "Admin",
      title: "Including animation in your design system",
      excerpt: "Lorem ipsum dolor sit amet consectetur with blog and awesome",
      category: "Lifestyle",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7yGYupdxGtsWXI5Y3goLMDBNxzyJs0gaRw&s",
      date: "January 12, 2024",
      author: "Admin",
      title: "Including animation in your design system",
      excerpt: "Lorem ipsum dolor sit amet consectetur with blog and awesome",
      category: "Lifestyle",
    },
  ];

  const categories = [
    { name: "Lifestyle", count: 5 },
    { name: "Travel", count: 3 },
    { name: "Food & Dining", count: 2 },
    { name: "Adventure", count: 4 },
  ];

  const recentPosts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6or13Tzdm2hopSWjzq5ayEDiqbFXyYPNZQ&s",
      title: "Including animation in your design system",
      date: "January 15, 2024",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYV6VPYf4kbTB6Zx_kTfGXmCyiavISzu8Jw&s",
      title: "Including animation in your design system",
      date: "January 16, 2024",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jNsfHrFQ74oR2itAIYPGR2ilkSfjc7iqtA&s",
      title: "Including animation in your design system",
      date: "January 14, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-500 cursor-pointer transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                    <Link href={`/blog/${post.id}`}>
                      <button className="text-orange-500 cursor-pointer font-medium text-sm hover:text-orange-600 transition-colors">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button className="w-10 h-10 cursor-pointer rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                1
              </button>
              <button className="w-10 h-10 rounded-full cursor-pointer bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
                2
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center text-gray-600 hover:text-orange-500 transition-colors py-1"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">
                          ({category.count})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-orange-500 cursor-pointer transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
