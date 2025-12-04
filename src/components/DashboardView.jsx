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

        function EmailSetupCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-200 mb-6">
      <h2 className="text-xl font-bold text-frog-900 mb-2">
        🐸 Moist Frog Email Setup Guide
      </h2>

      <p className="text-gray-700 mb-4">
        To enable automatic <strong>Daily Digests</strong> and
        <strong> Weekly Summaries</strong>, Moist Frog uses EmailJS.
        You'll only need to set this up <strong>once</strong>.
      </p>

      <ol className="list-decimal ml-5 text-gray-700 space-y-1 mb-4">
        <li>Create an account at <strong>EmailJS</strong>.</li>

        <li>
          Make a new <strong>Email Service</strong> (Gmail / Outlook / SMTP)
          and copy the <strong>Service ID</strong>.
        </li>

        <li>
          Create a new <strong>Email Template</strong> and paste this into the
          template body:
          <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
{`{{htmlBody}}`}
          </pre>
          (No formatting or other fields needed.)
        </li>

        <li>Save the template and copy the <strong>Template ID</strong>.</li>

        <li>
          Go to <strong>Account → API Keys</strong> and copy your
          <strong> Public Key</strong>.
        </li>

        <li>
          Enter all three values in the <strong>Settings</strong> tab along with your
          email address.
        </li>

        <li>Use <strong>Send Test Email</strong> to confirm everything works.</li>
      </ol>

      <p className="text-gray-700 italic">
        Moist Frog will now automatically send Daily Digests at
        <strong> 8 AM</strong> and Weekly Summaries every
        <strong> Monday at 8 AM</strong>. No backend required.
      </p>
    </div>
  );
}


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
