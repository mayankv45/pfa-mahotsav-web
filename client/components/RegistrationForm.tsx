import { useState } from "react";
import { X } from "lucide-react";

interface Member {
  name: string;
  phone: string;
}

interface RegistrationFormProps {
  eventId: string;
  eventName: string;
  eventType: "solo" | "group";
  onClose: () => void;
  onSuccess: () => void;
}

export const RegistrationForm = ({
  eventId,
  eventName,
  eventType,
  onClose,
  onSuccess,
}: RegistrationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Solo event form
  const [soloParticipantName, setSoloParticipantName] = useState("");
  const [soloParticipantPhone, setSoloParticipantPhone] = useState("");

  // Group event form
  const [leaderName, setLeaderName] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [members, setMembers] = useState<Member[]>([
    { name: "", phone: "" },
    { name: "", phone: "" },
    { name: "", phone: "" },
  ]);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ""));
  };

  const handleMemberChange = (index: number, field: "name" | "phone", value: string) => {
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

    if (!validatePhone(soloParticipantPhone)) {
      setError("Valid 10-digit phone number is required");
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
          participantPhone: soloParticipantPhone,
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

    if (!validatePhone(leaderPhone)) {
      setError("Valid 10-digit phone number for team leader is required");
      return;
    }

    for (let i = 0; i < members.length; i++) {
      if (!members[i].name.trim()) {
        setError(`Member ${i + 1} name is required`);
        return;
      }
      if (!validatePhone(members[i].phone)) {
        setError(`Valid 10-digit phone number for member ${i + 1} is required`);
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
          participantPhone: leaderPhone,
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
              {eventType === "solo" ? "Solo Event" : "Group Event (4 Members)"}
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

              <div className="bg-muted p-4 rounded-lg my-4">
                <p className="text-sm text-muted-foreground">
                  Team Members (3 more members)
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
