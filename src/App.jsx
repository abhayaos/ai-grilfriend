import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Load saved email (UX boost)
  useEffect(() => {
    const saved = localStorage.getItem("notify_email");
    if (saved) {
      setSubscribed(true);
    }
  }, []);

  const handleNotify = () => {
    if (!email) {
      toast.error("Enter your email first 😅");
      return;
    }

    // simple email check
    if (!email.includes("@")) {
      toast.error("Invalid email bro 💀");
      return;
    }

    // save locally (fake subscription)
    localStorage.setItem("notify_email", email);

    setSubscribed(true);
    setEmail("");

    toast("We’ll notify you 🚀", {
      icon: "🔔",
      style: {
        borderRadius: "12px",
        background: "#111",
        color: "#fff",
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] flex items-center justify-center px-6">
      
      {/* TOASTER */}
      <Toaster position="top-center" />

      <div className="text-center max-w-xl w-full">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          BuddhiManab AI
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-500 text-base md:text-lg"
        >
          A calm and intelligent place for discovering AI tools.
        </motion.p>

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 inline-block px-4 py-1.5 text-sm bg-gray-200 text-gray-700 rounded-full"
        >
          Coming Soon ✨
        </motion.div>

        {/* INPUT + BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            disabled={subscribed}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 transition disabled:opacity-60"
          />

          <button
            onClick={handleNotify}
            disabled={subscribed}
            className={`px-6 py-3 rounded-xl text-white transition ${
              subscribed
                ? "bg-green-600 cursor-not-allowed"
                : "bg-[#111] hover:bg-black"
            }`}
          >
            {subscribed ? "You're on the list ✅" : "Notify Me"}
          </button>
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-3 text-sm text-gray-400"
        >
          No spam. Just early access.
        </motion.p>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12 text-xs text-gray-400"
        >
          © {new Date().getFullYear()} Buddhimani AI
        </motion.p>

      </div>
    </div>
  );
}