import { useState, useMemo } from "react";
import { X } from "lucide-react";

interface Member {
  name: string;
  email: string;
  phone: string;
  branch: string;
}

interface RegistrationFormProps {
  eventId: string;
  eventName: string;
  eventType: "solo" | "group";
  description: string;
  onClose: () => void;
  onSuccess: () => void;
}

const BRANCH_OPTIONS = ["CSE", "IT", "AI-ML", "ECE", "EE", "ME", "CE", "CHE"];

export const RegistrationForm = ({
  eventId,
  eventName,
  eventType,
  description,
  onClose,
  onSuccess,
}: RegistrationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Extract team size from description
  const teamSize = useMemo(() => {
    if (eventType === "solo") return 1;

    // Look for common patterns in description
    const patterns = [
      /(?:should consist of|consists of|team of|maximum)\s+(\d+)\s+members/i,
      /(\d+)-(\d+)\s+members/i,
    ];

    for (const pattern of patterns) {
      const match = description.match(pattern);
      if (match) {
        if (match[2]) {
          // For "2-3 members", use the higher number
          return Math.max(parseInt(match[1]), parseInt(match[2]));
        }
        return parseInt(match[1]);
      }
    }

    // Default to 4 if no pattern found
    return 4;
  }, [description, eventType]);

  // Solo event form
  const [soloParticipantName, setSoloParticipantName] = useState("");
  const [soloParticipantEmail, setSoloParticipantEmail] = useState("");
  const [soloParticipantPhone, setSoloParticipantPhone] = useState("");
  const [soloParticipantBranch, setSoloParticipantBranch] = useState("");

  // Group event form
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [leaderBranch, setLeaderBranch] = useState("");
  const [members, setMembers] = useState<Member[]>(
    Array.from({ length: teamSize - 1 }, () => ({ name: "", email: "", phone: "", branch: "" }))
  );

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ""));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleMemberChange = (index: number, field: "name" | "email" | "phone" | "branch", value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setMembers(updatedMembers);
  };

  const handleSoloSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!soloParticipantName.trim()) {
      setError("Participant name is required");
      return;
    }

    if (!validateEmail(soloParticipantEmail)) {
      setError("Valid email address is required");
      return;
    }

    if (!validatePhone(soloParticipantPhone)) {
      setError("Valid 10-digit phone number is required");
      return;
    }

    if (!soloParticipantBranch) {
      setError("Branch selection is required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          eventName,
          eventType,
          participantName: soloParticipantName,
          participantEmail: soloParticipantEmail,
          participantPhone: soloParticipantPhone,
          participantBranch: soloParticipantBranch,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!leaderName.trim()) {
      setError("Team leader name is required");
      return;
    }

    if (!validateEmail(leaderEmail)) {
      setError("Valid email address for team leader is required");
      return;
    }

    if (!validatePhone(leaderPhone)) {
      setError("Valid 10-digit phone number for team leader is required");
      return;
    }

    if (!leaderBranch) {
      setError("Branch selection is required");
      return;
    }

    for (let i = 0; i < members.length; i++) {
      if (!members[i].name.trim()) {
        setError(`Member ${i + 1} name is required`);
        return;
      }
      if (!validateEmail(members[i].email)) {
        setError(`Valid email address for member ${i + 1} is required`);
        return;
      }
      if (!validatePhone(members[i].phone)) {
        setError(`Valid 10-digit phone number for member ${i + 1} is required`);
        return;
      }
      if (!members[i].branch) {
        setError(`Branch selection for member ${i + 1} is required`);
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          eventName,
          eventType,
          participantName: leaderName,
          participantEmail: leaderEmail,
          participantPhone: leaderPhone,
          participantBranch: leaderBranch,
          members: members,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-lg p-8 max-w-md w-full text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            Registration Successful!
          </h3>
          <p className="text-muted-foreground mb-4">
            Thank you for registering for {eventName}. We look forward to seeing you!
          </p>
          <p className="text-sm text-muted-foreground">
            Redirecting you back...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary/80 to-accent/80 p-6 flex items-start justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-foreground">
              Register for {eventName}
            </h2>
            <p className="text-primary-foreground/80 text-sm mt-1">
            {eventType === "solo" ? "Solo Event" : `Group Event (${teamSize} Members)`}
          </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200 text-sm">
              {error}
            </div>
          )}

          {eventType === "solo" ? (
            <form onSubmit={handleSoloSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={soloParticipantName}
                  onChange={(e) => setSoloParticipantName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={soloParticipantEmail}
                  onChange={(e) => setSoloParticipantEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={soloParticipantPhone}
                  onChange={(e) => setSoloParticipantPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit phone number"
                  maxLength={10}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Branch
                </label>
                <select
                  value={soloParticipantBranch}
                  onChange={(e) => setSoloParticipantBranch(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your branch</option>
                  {BRANCH_OPTIONS.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleGroupSubmit} className="space-y-4">
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground">
                  Team Leader Details
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Team Leader Name
                </label>
                <input
                  type="text"
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                  placeholder="Enter team leader name"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Team Leader Email
                </label>
                <input
                  type="email"
                  value={leaderEmail}
                  onChange={(e) => setLeaderEmail(e.target.value)}
                  placeholder="Enter team leader email"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Team Leader Phone Number
                </label>
                <input
                  type="tel"
                  value={leaderPhone}
                  onChange={(e) => setLeaderPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit phone number"
                  maxLength={10}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Team Leader Branch
                </label>
                <select
                  value={leaderBranch}
                  onChange={(e) => setLeaderBranch(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select branch</option>
                  {BRANCH_OPTIONS.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="text-sm text-muted-foreground">
                  Team Members ({members.length} more {members.length === 1 ? "member" : "members"})
                </p>
              </div>

              {members.map((member, index) => (
                <div key={index} className="pt-2">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Member {index + 1}
                  </p>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) =>
                        handleMemberChange(index, "name", e.target.value)
                      }
                      placeholder={`Member ${index + 1} name`}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(index, "email", e.target.value)
                      }
                      placeholder="Email address"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <input
                      type="tel"
                      value={member.phone}
                      onChange={(e) =>
                        handleMemberChange(
                          index,
                          "phone",
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      placeholder="10-digit phone number"
                      maxLength={10}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <select
                      value={member.branch}
                      onChange={(e) =>
                        handleMemberChange(index, "branch", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option value="">Select branch</option>
                      {BRANCH_OPTIONS.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Registering..." : "Register Team"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
