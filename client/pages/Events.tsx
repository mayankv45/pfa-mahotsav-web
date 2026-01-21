import { Layout } from "@/components/Layout";
import { ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  name: string;
  type: "solo" | "group";
  description: string;
  rules: string[];
  materials: string[];
}

const events: Event[] = [
  {
    id: "kirigami",
    name: "Kirigami",
    type: "solo",
    description: "Japanese art of paper cutting creating intricate and delicate designs through precise folding and cutting techniques.",
    rules: [
      "Individual participation only",
      "Time limit: 120 minutes",
      "Use provided materials",
      "Original designs preferred",
    ],
    materials: ["Paper", "Scissors", "Cutting mat"],
  },
  {
    id: "comicstan",
    name: "Comicstan",
    type: "solo",
    description: "Create your own comic strip or graphic narrative showcasing your storytelling and artistic skills.",
    rules: [
      "Individual participation only",
      "Maximum 8 panels",
      "Time limit: 90 minutes",
      "Black and white or colored",
    ],
    materials: ["Paper", "Pencils", "Markers", "Erasers"],
  },
  {
    id: "scandal",
    name: "Scandal",
    type: "solo",
    description: "Photography event capturing candid moments that tell compelling stories through the lens.",
    rules: [
      "Individual participation only",
      "Digital or printed photos",
      "Original work only",
      "Minimum resolution required",
    ],
    materials: ["Camera or smartphone", "Editing software (optional)"],
  },
  {
    id: "caligraphy",
    name: "Calligraphy",
    type: "solo",
    description: "Ancient art of beautiful handwriting combining precision, creativity, and elegance in letter forms.",
    rules: [
      "Individual participation only",
      "Any script style allowed",
      "Provided text or original choice",
      "Size: A4 or larger",
    ],
    materials: ["Calligraphy pens", "Paper", "Ink"],
  },
  {
    id: "paper-vogue",
    name: "Paper in Vogue",
    type: "group",
    description: "Team-based event creating fashion designs and sculptures using paper as the primary material.",
    rules: [
      "Team of 3-5 members",
      "Time limit: 120 minutes",
      "Paper only (any type/color)",
      "Must be wearable or displayable",
    ],
    materials: ["Various papers", "Scissors", "Glue", "Tape"],
  },
  {
    id: "spot-sketch",
    name: "Spot Sketching",
    type: "group",
    description: "Real-time collaborative sketching where teams create artwork based on given prompts or live subjects.",
    rules: [
      "Team of 2-3 members",
      "Time limit: 60 minutes",
      "Prompts given at start",
      "Any medium allowed",
    ],
    materials: ["Paper", "Pencils", "Colors", "Markers"],
  },
  {
    id: "face-painting",
    name: "Face Painting",
    type: "group",
    description: "Creative body art where teams transform faces into artistic masterpieces using specialized paints.",
    rules: [
      "Team of 2-4 members",
      "Time limit: 90 minutes",
      "Use provided models",
      "Hypoallergenic paint provided",
    ],
    materials: ["Face paints", "Brushes", "Sponges", "Palette"],
  },
  {
    id: "road-painting",
    name: "Road Painting",
    type: "group",
    description: "Large-scale collaborative art on ground surfaces creating vibrant mural designs.",
    rules: [
      "Team of 4-6 members",
      "Designated area provided",
      "Design theme given",
      "Must be completed in time",
    ],
    materials: ["Chalk", "Paints", "Brushes"],
  },
  {
    id: "masquerade",
    name: "Masquerade",
    type: "group",
    description: "Create ornate masks with artistic design combining craftsmanship and creativity.",
    rules: [
      "Team of 2-3 members",
      "Time limit: 90 minutes",
      "Wearable mask required",
      "Any material allowed",
    ],
    materials: ["Masks base", "Decorative items", "Glue", "Colors"],
  },
  {
    id: "click-mania",
    name: "Click-O-Mania",
    type: "group",
    description: "Photography competition where teams capture the best shots based on given themes within time constraints.",
    rules: [
      "Team of 2-3 members",
      "Theme provided at start",
      "Time limit: 60 minutes",
      "Best 3 photos submitted",
    ],
    materials: ["Camera or smartphones", "Editing software (optional)"],
  },
];

export default function Events() {
  const [filter, setFilter] = useState<"all" | "solo" | "group">("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.type === filter
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Mahotsav Events 2026
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore all events and register to showcase your talent
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              All Events ({events.length})
            </button>
            <button
              onClick={() => setFilter("solo")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "solo"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              Solo Events ({events.filter((e) => e.type === "solo").length})
            </button>
            <button
              onClick={() => setFilter("group")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "group"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-primary"
              }`}
            >
              Group Events ({events.filter((e) => e.type === "group").length})
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "solo"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                      }`}
                    >
                      {event.type === "solo" ? "Solo" : "Group"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary/80 to-accent/80 p-6 flex items-start justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold text-primary-foreground">
                  {selectedEvent.name}
                </h2>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedEvent.type === "solo"
                      ? "bg-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-purple-200 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                  }`}
                >
                  {selectedEvent.type === "solo" ? "Solo Event" : "Group Event"}
                </span>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-primary-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  About
                </h3>
                <p className="text-muted-foreground">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Rules */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Rules & Regulations
                </h3>
                <ul className="space-y-2">
                  {selectedEvent.rules.map((rule, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary font-bold min-w-6">
                        {index + 1}.
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Materials Required
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted border border-border rounded-full text-sm text-foreground"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Past Images Placeholder */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Past Event Highlights
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-muted border-2 border-dashed border-border rounded-lg aspect-square flex flex-col items-center justify-center"
                    >
                      <ImageIcon className="w-8 h-8 text-muted-foreground/40 mb-2" />
                      <p className="text-xs text-muted-foreground">Photo {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-4 border-t border-border">
                <Link
                  to="/register"
                  onClick={() => setSelectedEvent(null)}
                  className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Register for {selectedEvent.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
