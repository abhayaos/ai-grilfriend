import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function Models() {
  const model = {
    name: "Teenagers ko Mayalu",
    desc: "A friendly emotional AI companion designed for teenagers. It listens, responds softly, and helps with feelings, thoughts, and daily life conversations.",
    status: "Active",
  };

  // GitHub click handler
  const slangyGithub = () => {
    alert("LMAO")
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">
<Helmet>
  <title>AI Models - Buddhi Manab AI</title>
  <meta
    name="description"
    content="Explore all AI models inside Buddhi Manab AI including Teenagers ko Mayalu and other intelligent systems built for interaction and learning."
  />
</Helmet>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Models
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and explore your AI system
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          {/* Top Row */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              {model.name}
            </h2>

            <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
              {model.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            {model.desc}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100 my-5"></div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between">

            {/* Left info */}
            <p className="text-xs text-gray-400">
              Powered by Abhaya Bikram Shahi Mind
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-500">

              {/* Discord */}
              <a
                href="https://discord.gg/zq4AQshGV"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 transition text-xl"
              >
                <FaDiscord />
              </a>

              {/* GitHub */}
              <button
                onClick={slangyGithub}
                className="hover:text-gray-900 transition text-xl"
              >
                <FaGithub />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Models;