import React from "react";
import FrogHeader from "../components/FrogHeader";
import EmailSetupCard from "./EmailSetupCard"; // If external, otherwise keep inline as earlier

export default function DashboardView({
  frogName,
  tagline,
  stats,
  openAddJob,
  openAddResearch,
}) {
  // Prevent crash if stats missing
  stats = stats || {
    active: 0,
    interviews: 0,
    research: 0,
    actions: 0,
  };

  return (
    <div className="p-6">

      {/* HEADER (only one) */}
      <FrogHeader frogName={frogName} tagline={tagline} />

      {/* METRIC CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

        {/* Active Applications */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Active Applications
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.active}</p>
        </div>

        {/* Interviews This Week */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Interviews This Week
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.interviews}</p>
        </div>

        {/* Research Targets */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Research Targets
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.research}</p>
        </div>

        {/* Action Items */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Action Items
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.actions}</p>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-6">

        <button
          onClick={openAddJob}
          className="px-6 py-3 rounded-lg bg-frog-200 text-black font-semibold shadow hover:bg-frog-300 transition"
        >
          + Add Job Application
        </button>

        <button
          onClick={openAddResearch}
          className="px-6 py-3 rounded-lg bg-frog-200 text-black font-semibold shadow hover:bg-frog-300 transition"
        >
          + Add Research Target
        </button>

      </div>

      {/* EMAIL SETUP CARD AT BOTTOM */}
      <div className="mt-10">
        <EmailSetupCard />
      </div>

    </div>
  );
}

