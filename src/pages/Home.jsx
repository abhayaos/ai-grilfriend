import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
<Helmet>
  <title>Buddhi Manab AI - Explore Intelligent AI Models</title>
  <meta
    name="description"
    content="Buddhi Manab AI is a modern AI platform built by Abhaya Bikram Shahi. Explore smart AI models, interact with systems, and experience next-gen intelligence."
  />
</Helmet>
      {/* HERO SECTION */}
      <div className="pt-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm">

            <p className="text-sm text-gray-500">
              🤖 Abhaya AI System • Next Generation Intelligence
            </p>

            {/* LONG HERO TITLE */}
            <h1 className="text-4xl font-semibold text-gray-900 mt-3 leading-tight">
              Explore Abhaya AI 🤖  A Modern Intelligent System Built to Learn,
              Think, and Interact Like a Human Assistant in Real Time
            </h1>

            <p className="text-gray-500 mt-5 text-sm max-w-2xl leading-relaxed">
              This platform is designed and developed by{" "}
              <span className="text-gray-900 font-medium">
                Abhaya Bikram Shahi
              </span>
              . It focuses on building self-learning AI models without relying on
              external APIs. Each system is crafted to understand user input,
              adapt responses, and improve interaction quality over time.
            </p>

            {/* CTA */}
            <div className="flex gap-3 mt-7 flex-wrap">
              <Link
                to="/models"
                className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
              >
                Explore Models
              </Link>

              <Link
                to="/train"
                className="px-5 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:bg-gray-100 transition"
              >
                Train AI (v3 Coming Soon)
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-5">

        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <h3 className="font-medium text-gray-900">🤖 AI Models</h3>
          <p className="text-sm text-gray-500 mt-2">
            Custom intelligent systems like Teenagers ko Mayalu.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <h3 className="font-medium text-gray-900">⚡ Fast & Lightweight</h3>
          <p className="text-sm text-gray-500 mt-2">
            Built with performance-focused UI and smooth experience.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5">
          <h3 className="font-medium text-gray-900">🧠 Self Learning AI</h3>
          <p className="text-sm text-gray-500 mt-2">
            Models evolve and improve based on user interaction.
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-10">
        <div className="text-center text-xs text-gray-400">
          © 2026 Abhaya AI • Built by Abhaya Bikram Shahi
        </div>
      </div>

    </div>
  );
}

export default Home;