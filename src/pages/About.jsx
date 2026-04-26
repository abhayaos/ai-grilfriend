import React from "react";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">
<Helmet>
  <title>About Buddhi Manab AI | Built by Abhaya Bikram Shahi</title>
  <meta
    name="description"
    content="Learn about Buddhi Manab AI, a self-developed AI system created by Abhaya Bikram Shahi focused on intelligent, human-like AI models."
  />
</Helmet>
      <div className="max-w-6xl mx-auto">

        {/* 👨‍💻 Developer HERO (TOP UNIQUE SECTION) */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">

          <div className="flex items-start justify-between flex-wrap gap-4">

            {/* Left */}
            <div>
              <p className="text-sm text-gray-500">
                👨‍💻 Founder & Developer
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-1">
                Abhaya Bikram Shahi
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                🚀 Web Developer • 🤖 AI Builder • 🎨 UI/UX Designer
              </p>
            </div>

            {/* Right Badge */}
            <div className="px-4 py-2 rounded-full bg-gray-900 text-white text-xs">
              🧠 Buddhimanab AI Creator
            </div>

          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-5 leading-relaxed">
            ⚡ Passionate about building modern AI systems, scalable web apps,
            and clean user experiences. Focused on creating real-world usable
            technology from Nepal 🇳🇵 with a vision to make AI more human-like.
          </p>

          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2 mt-5">

            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              💻 React Developer
            </span>

            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              🤖 AI Systems
            </span>

            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              🌐 Full Stack
            </span>

            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
              🎯 Startup Builder
            </span>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Vision */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900">
              🌍 Our Vision
            </h2>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Buddhimanab AI is a startup project focused on building intelligent,
              human-like AI models without relying on external APIs or wrappers.
              The goal is to create self-trained systems that can understand,
              respond, and evolve naturally with users.
            </p>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              From emotional companions like{" "}
              <span className="text-gray-900 font-medium">
                💖 Teenagers ko Mayalu
              </span>{" "}
              to future productivity models, everything is built with simplicity,
              privacy, and control in mind.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-4">

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="text-sm text-gray-900 font-medium">
                📅 Founded
              </h3>
              <p className="text-gray-500 text-sm mt-1">2026</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="text-sm text-gray-900 font-medium">
                🎯 Focus
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                AI • Web Apps • Learning Tools
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="text-sm text-gray-900 font-medium">
                🚀 Status
              </h3>
              <p className="text-green-600 text-sm mt-1">
                ● Active Development
              </p>
            </div>

          </div>

        </div>
        <div className="mt-12"></div>

      </div>
    </div>
  );
}

export default About;