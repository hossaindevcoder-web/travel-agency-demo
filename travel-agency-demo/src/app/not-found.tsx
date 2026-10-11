/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Construction, Home, ArrowLeft } from "lucide-react";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 text-gray-800">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6 flex justify-center">
          <Construction size={64} className="text-yellow-500" />
        </div>

        <h1 className="text-4xl font-bold mb-2">Under Construction</h1>

        <div className="h-2 w-24 bg-yellow-500 mx-auto rounded-full mb-6"></div>

        <p className="text-lg mb-6">
          We're currently building this part of our website. Thanks for your
          patience as we work to bring you new features and content!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
          If you believe this is an error, please contact our support team.
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
