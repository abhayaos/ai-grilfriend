import React from "react";
import { Helmet } from "react-helmet-async";
function TrainAI() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
<Helmet>
  <title>Train AI (v3 Coming Soon) - Buddhi Manab AI</title>
  <meta
    name="description"
    content="Train AI feature is under development in Buddhi Manab AI. Version 3 will allow users to customize and train intelligent models easily."
  />
</Helmet>
      <div className="max-w-xl w-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">

        {/* Badge */}
        <div className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 mb-4">
          Version 3
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Train AI
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
          This feature is currently under development.  
          We are building a smarter system to let you train and customize your AI models with ease.
        </p>

        {/* Status */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Coming Soon
        </div>

        {/* Optional hint */}
        <p className="text-xs text-gray-400 mt-6">
          Buddhimanab AI • Next-gen model training system
        </p>

      </div>

    </div>
  );
}

export default TrainAI;