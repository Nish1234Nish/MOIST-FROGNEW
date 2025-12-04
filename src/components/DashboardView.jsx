import React from "react";
import FrogHeader from "../components/FrogHeader";

// -----------------------------------------------
// EMAIL SETUP CARD COMPONENT
// -----------------------------------------------
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
          (No formatting or extra fields needed.)
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

// -----------------------------------------------
// MAIN DASHBOARD VIEW COMPONENT
// -----------------------------------------------
export default function DashboardView({
  frogName,
  tagline,
  stats,
  reminders,
  interviews,
  ...props
}) {
  return (
    <div className="p-6">

      {/* Header */}
      <FrogHeader frogName={frogName} tagline={tagline} />

      {/* Email Setup Card */}
      <div className="mt-4">
        <EmailSetupCard />
      </div>

      {/* ------------------------------------------- */}
      {/* BELOW THIS IS YOUR EXISTING DASHBOARD UI     */}
      {/* KEEP ALL YOUR EXISTING CONTENT UNCHANGED     */}
      {/* ------------------------------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Example Dashboard Cards - yours may differ */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Active Applications
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.active}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Interviews This Week
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.interviews}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-frog-900">
            Pending Actions
          </h3>
          <p className="text-3xl font-bold text-frog-800">{stats.actions}</p>
        </div>
      </div>

      {/* You can leave all your other sections intact */}
    </div>
  );
}

