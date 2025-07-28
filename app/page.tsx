// app/page.tsx

"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 md:px-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to the Listing App 🏡
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover and explore stunning properties around the world. Click below to view property details and reviews.
        </p>

        <Link
          href="/property/sample-property"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          Explore Property
        </Link>
      </div>
    </main>
  );
}
