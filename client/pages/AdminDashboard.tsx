import { Layout } from "@/components/Layout";
import { useState, useEffect } from "react";
import { Trash2, LogOut } from "lucide-react";

interface Member {
  name: string;
  phone: string;
}

interface Registration {
  id: string;
  eventId: string;
  eventName: string;
  eventType: "solo" | "group";
  participantName: string;
  participantPhone: string;
  members?: Member[];
  registeredAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check password (default: admin123)
    if (password === process.env.REACT_APP_ADMIN_PASSWORD || password === "admin123") {
      setIsAuthenticated(true);
      setPassword("");
      fetchRegistrations();
    } else {
      setError("Invalid password");
    }
  };

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/registrations", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ADMIN_PASSWORD || "admin123"}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch registrations");
      }

      const data = await response.json();
      setRegistrations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this registration?")) {
      return;
    }

    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ADMIN_PASSWORD || "admin123"}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete registration");
      }

      setRegistrations(registrations.filter((reg) => reg.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setError("");
    setRegistrations([]);
  };

  const filteredRegistrations =
    selectedEvent === "all"
      ? registrations
      : registrations.filter((reg) => reg.eventId === selectedEvent);

  const uniqueEvents = Array.from(
    new Map(registrations.map((reg) => [reg.eventId, reg.eventName])).entries()
  );

  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Admin Dashboard
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Event Registration Management
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background min-h-screen flex items-center">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Admin Login
              </h2>

              {error && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Login
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Default password: admin123
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Total Registrations: {registrations.length}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading registrations...</p>
            </div>
          ) : registrations.length === 0 ? (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground text-lg">
                No registrations yet
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Event Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedEvent("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedEvent === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  All Events ({registrations.length})
                </button>
                {uniqueEvents.map(([eventId, eventName]) => {
                  const count = registrations.filter(
                    (reg) => reg.eventId === eventId
                  ).length;
                  return (
                    <button
                      key={eventId}
                      onClick={() => setSelectedEvent(eventId)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedEvent === eventId
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {eventName} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Registrations Table */}
              <div className="overflow-x-auto border border-border rounded-lg">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Leader/Participant
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                        Registered
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-foreground font-medium">
                          {registration.eventName}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              registration.eventType === "solo"
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                            }`}
                          >
                            {registration.eventType === "solo" ? "Solo" : "Group"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground">
                          {registration.participantName}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {registration.participantPhone}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(registration.registeredAt).toLocaleDateString()} -{" "}
                          {new Date(registration.registeredAt).toLocaleTimeString()}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleDelete(registration.id)}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-700 dark:text-red-200 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-xs font-medium">Delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Group Event Members Details */}
              {filteredRegistrations.some((reg) => reg.eventType === "group") && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">
                    Group Event Members
                  </h3>
                  <div className="space-y-4">
                    {filteredRegistrations
                      .filter((reg) => reg.eventType === "group")
                      .map((registration) => (
                        <div
                          key={registration.id}
                          className="border border-border rounded-lg p-4"
                        >
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-foreground">
                              {registration.eventName} - Team Leader:{" "}
                              {registration.participantName}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Phone: {registration.participantPhone}
                            </p>
                          </div>
                          {registration.members && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 pt-3 border-t border-border">
                              {registration.members.map((member, idx) => (
                                <div key={idx} className="text-xs text-muted-foreground">
                                  <p className="font-medium text-foreground">
                                    Member {idx + 1}: {member.name}
                                  </p>
                                  <p>Phone: {member.phone}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
