/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowLeft,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BlogDetailsPage = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(24);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxhzsIZf8fMHVIWCQzAwpTpF_M7-EOmUzLg&s",
      title: "Including animation in your design system",
      date: "January 15, 2024",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dntd4xawh/image/upload/v1753419166/uugur347st948ddsriks.jpg",
      title: "Including animation in your design system",
      date: "January 16, 2024",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbgnO1tPLfRdJpE5ag0jO9ClXYrD4Ir_lCQ&s",
      title: "Including animation in your design system",
      date: "January 14, 2024",
    },
  ];

  const relatedPosts = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dntd4xawh/image/upload/v1753419166/uugur347st948ddsriks.jpg",
      title: "Best Travel Destinations for 2024",
      date: "January 20, 2024",
      excerpt: "Discover the most amazing places to visit this year",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7yGYupdxGtsWXI5Y3goLMDBNxzyJs0gaRw&s",
      title: "Adventure Travel Guide",
      date: "January 18, 2024",
      excerpt: "Everything you need to know about adventure travel",
    },
  ];

  const comments = [
    {
      id: 1,
      author: "John Smith",
      date: "January 16, 2024",
      content:
        "Great article! Really helpful information about design systems and animations.",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      author: "Sarah Johnson",
      date: "January 17, 2024",
      content:
        "I've been looking for something like this. Thanks for sharing your insights!",
      avatar:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxhzsIZf8fMHVIWCQzAwpTpF_M7-EOmUzLg&s"
                  alt="Blog post featured image"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Lifestyle
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>By Admin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>2 Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Including Animation in Your Design System: A Complete Guide
                </h1>

                {/* Social Share & Like */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
                        liked
                          ? "bg-red-500 text-white"
                          : "bg-white text-gray-600 hover:bg-red-50"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${liked ? "fill-current" : ""}`}
                      />
                      <span>{likes}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 mr-2">Share:</span>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Why Animation Matters in Design Systems
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                    <p className="text-gray-700 italic">
                      "Animation is not the art of drawings that move but the
                      art of movements that are drawn." - Norman McLaren
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Best Practices for Design System Animation
                  </h2>

                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Keep animations subtle and purposeful</li>
                    <li>Maintain consistency across all components</li>
                    <li>Consider accessibility and user preferences</li>
                    <li>Test performance on various devices</li>
                    <li>Document animation guidelines clearly</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 mr-2">Tags:</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                      Design
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                      Animation
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                      UI/UX
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                      System
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Post Navigation */}
            <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-6 mt-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span>Previous Post</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                <span>Next Post</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Comments ({comments.length})
              </h3>

              <div className="space-y-6 mb-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {comment.author}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Leave a Comment
                </h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    placeholder="Your Comment"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 hover:text-orange-500 cursor-pointer transition-colors mb-1">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
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

export default BlogDetailsPage;
