import React from "react";

export default function DashboardView({
  reminders,
  activeJobsCount,
  interviewsThisWeek,
  researchCount,
  onAddJob,
  onAddResearch,
}) {
  const high = reminders.filter((r) => r.priority === "high");
  const standard = reminders.filter((r) => r.priority !== "high");

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-frog-800">
          <p className="text-sm text-gray-600">Active Applications</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{activeJobsCount}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-frog-900">
          <p className="text-sm text-gray-600">Interviews This Week</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{interviewsThisWeek}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
          <p className="text-sm text-gray-600">Research Targets</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{researchCount}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
          <p className="text-sm text-gray-600">Action Items</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{reminders.length}</p>
        </div>
      </div>

      {/* ACTION ITEMS */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-3">Today's Action Items</h2>

        {/* HIGH PRIORITY */}
        {high.length > 0 && (
          <div className="mb-5">
            <h3 className="text-md font-semibold text-red-600">🔥 High Priority</h3>
            <div className="space-y-2 mt-2">
              {high.map((r, i) => (
                <div
                  key={i}
                  className="p-3 bg-red-50 border-l-4 border-red-400 rounded"
                >
                  <div className="font-semibold">
                    {r.job?.company || r.target?.fundName}
                  </div>
                  <div className="text-sm text-gray-600">{r.message}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDARD PRIORITY */}
        {standard.length > 0 && (
          <div className="mb-3">
            <h3 className="text-md font-semibold">Standard</h3>
            <div className="space-y-2 mt-2">
              {standard.map((r, i) => (
                <div
                  key={i}
                  className="p-3 bg-gray-50 border-l-4 border-gray-300 rounded"
                >
                  <div className="font-semibold">
                    {r.job?.company || r.target?.fundName}
                  </div>
                  <div className="text-sm text-gray-600">{r.message}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={onAddJob}
            className="bg-frog-900 text-white p-3 rounded hover:bg-frog-800"
          >
            + Add New Application
          </button>

          <button
            onClick={onAddResearch}
            className="bg-purple-600 text-white p-3 rounded hover:bg-purple-500"
          >
            + Add Research Target
          </button>
        </div>
      </div>
    </div>
  );
}
