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
    description: "Put your tools aside because we have a fantastic art form that requires nothing more than paper, a knife and your imagination. Kirigami! In kirigami the paper is cut as well as being folded, resulting in a three-dimensional design that stands away from the page.",
    rules: [
      "Relevant material will be provided to you",
      "Time limit of 1 hour",
      "No restriction on theme/design",
      "All artwork is preferred to be original",
      "Model must have stable structure which holds together without glue",
      "Each participant will get 5-6 minutes to explain their artwork",
      "Judging criteria: proportion, perspective, composition, components and shading",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Paper", "Knife/Cutter", "Cutting Mat"],
  },
  {
    id: "comicstan",
    name: "Comicstan",
    type: "solo",
    description: "Have you ever read Panchtantra, Akbar Birbal, Chacha Chaudhary? Of course yes! What enjoying moments are those. Put your own thought on paper and create your own comic to enjoy that moment again.",
    rules: [
      "Relevant material will be provided to you",
      "Time limit of 1 and half hours",
      "No restriction on theme/design",
      "All artwork is preferred to be original",
      "Work that is offensive, vulgar, insensitive will not be considered",
      "Each participant will get 5-6 minutes to explain their artwork",
      "Judging criteria: creativity, uniqueness, relevance to theme and interpretation of theme",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Paper", "Pencils", "Markers", "Erasers"],
  },
  {
    id: "scandal",
    name: "Scandal",
    type: "solo",
    description: "Create scandalous & hilarious news headlines and fulfill your fantasy of becoming an editor for a day! Come and enjoy one of the funniest events!",
    rules: [
      "Relevant material will be provided to you",
      "Time limit of 1 hour",
      "No restriction on headlines",
      "All artwork is preferred to be original",
      "Participants will have to create an interesting headline using newspaper cutting",
      "Each participant will get 5-6 minutes to explain their artwork",
      "Judging criteria: work, discipline, cleanliness, interpretation",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Newspapers", "Scissors", "Glue", "Poster Board"],
  },
  {
    id: "caligraphy",
    name: "Calligraphy",
    type: "solo",
    description: "Drop those paintbrushes, set aside the canvases, and grab a pen, because it's time to unveil the true might of writing! Watch in awe as Calligraphy takes center stage, proving that with a pen in hand, the world is at our mercy. Get ready for the eloquent hilarity that's about to unfold.",
    rules: [
      "Relevant material will be provided to you",
      "Time limit of 1 hour",
      "No restriction on content",
      "Artwork is preferred to be original",
      "Each artwork must incorporate either thoughtful or humorous quotes",
      "Be consistent with the size of your letters",
      "Each participant will get 5-6 minutes to explain their artwork",
      "Judging criteria: proportion, perspective, composition, cleanliness and interpretation",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Calligraphy Pens", "Paper", "Ink"],
  },
  {
    id: "paper-vogue",
    name: "Paper in Vogue",
    type: "group",
    description: "Newspaper dresses in fashion are pretty trendy these days. In this event paper dresses are creatively made from recycled papers or newspapers. If you have a designer in you then grab your scissors, glue, and heaps of recycled newspapers, and let your imagination run wild. Whether you're a seasoned designer or a novice with a flair for the unconventional, this event promises a runway filled with innovative, eco-friendly fashion.",
    rules: [
      "Relevant material will be provided to you",
      "A team should consist of 5 members (including model)",
      "Participants can design dress of their own imagination",
      "No restriction on theme/design",
      "Each team got 5-6 minutes to explain the theme",
      "Once a team is set for an event, members will not be changed during all the group events under mahotsav",
      "Team with any indiscipline activities will be disqualified",
      "Judging criteria: dress art, interpretation, discipline, presentation",
      "Decision by judges are final and abiding",
      "For any queries you can contact event coordinator",
    ],
    materials: ["Newspapers/Recycled Paper", "Scissors", "Glue", "Tape"],
  },
  {
    id: "spot-sketch",
    name: "Spot Sketching",
    type: "group",
    description: "Artists can capture the beautiful moments and beautiful visuals by their bold strokes of colour and texture on paper by pencils. In this event an individual has to sketch what is in front of you. There will be a healthy competition between the participants to bring out the hidden talent, creativity and imagination of the participants.",
    rules: [
      "Relevant material will be provided to you",
      "A team of 5 members",
      "Duration will not be more than 1 and half hours",
      "In this event clues will be given, solve the clues and find particular spot for sketching",
      "On the spot sketch art of your own interest related to the spot",
      "Once a team is set for an event, members will not be changed during all the group events under mahotsav",
      "Judging criteria: proportion, perspective, composition, components, shading, interpretation (explanation) of theme",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Paper", "Pencils", "Colors", "Erasers"],
  },
  {
    id: "face-painting",
    name: "Face Painting",
    type: "group",
    description: "Have you ever used faces as canvas! So here is our event which can bring a story on your face through your creativity (painting), 'face painting'. Come with your fantasy, imagination, and give your faces a new story.",
    rules: [
      "Relevant material will be provided to you",
      "A team of 5 members",
      "Duration will not be more than 1 and half hours",
      "Each team got 5-6 minutes to explain the theme",
      "No restriction on theme/design",
      "Once a team is set for an event, members will not be changed during all the group events under mahotsav",
      "Team with any indiscipline activities will be disqualified",
      "Judging criteria: proportion, perspective, composition, components, shading, interpretation (explanation) of theme",
      "The decision by judges are final and abiding",
      "For any queries concern with team coordinator",
    ],
    materials: ["Face Paints", "Brushes", "Sponges", "Palette"],
  },
  {
    id: "road-painting",
    name: "Road Painting",
    type: "group",
    description: "What if the road be your canvas! Road painting is more than just a functional necessity, it is an art form that requires precision, skill and creativity. Road painting has become a highly popular and impressive method to express the artists imagination.",
    rules: [
      "Relevant material will be provided to you",
      "Team of maximum 5 members",
      "Duration will not be more than 1 hour",
      "Theme will be provided by coordinators",
      "All artwork is preferred to be original",
      "The painting will be conducted on the spot",
      "Each team got 5-6 minutes to explain the artwork",
      "Once a team is set for an event, members will not be changed during all the group events under mahotsav",
      "Judging criteria: proportion, perspective, composition, components, shading interpretation (explanation) of theme",
      "Decision by judges are final and abiding",
      "The participant with any indiscipline activities will be disqualified",
      "For any queries concern with team coordinator",
    ],
    materials: ["Chalk", "Paints", "Brushes"],
  },
  {
    id: "masquerade",
    name: "Masquerade",
    type: "group",
    description: "Masks usually represent supernatural beings, ancestors and fanciful or imagined figures. If you think there is a superhero in you then design your own mask for yourself and create a story with it to add it in your memories diary. Masquerade awaits, and with your personalized mask, you're not just attending—you're starring in the most fantastical chapter of your memories diary.",
    rules: [
      "Relevant material will be provided to you",
      "A team should consist of 3 members",
      "Time limit of 1.5 hours",
      "Each team got 5-6 minutes to explain the theme",
      "No restriction on theme/design",
      "Once a team is set for an event, members will not be changed during all the group events under mahotsav",
      "Team with any indiscipline activities will be disqualified",
      "Judging criteria: interpretation of theme, art piece, discipline of team",
      "The decision by judges are final and abiding",
      "For any queries you can contact event coordinator",
    ],
    materials: ["Mask Base", "Decorative Items", "Glue", "Colors", "Markers"],
  },
  {
    id: "click-mania",
    name: "Click-O-Mania",
    type: "group",
    description: "One Click. Infinite Stories. In a world racing by, only a few can freeze time. Step into the world of hustle, find the stillness, and capture it. No filters. No retakes. Just raw, unfiltered truth through your lens. Click not just to see—click to feel.",
    rules: [
      "All relevant details and instructions will be provided by the organizers",
      "This is a group event with 2-3 members per team",
      "The event will be conducted online on Instagram",
      "Participants must create a reel and tag the Photography and Fine Arts Sub-Council page on Instagram",
      "The participant with the best reel will be declared the winner",
      "Judging Criteria: Creativity, Uniqueness, Relevance to theme, Interpretation of theme",
      "The decision of the judges will be final and abiding",
      "Any form of indiscipline or misconduct will result in disqualification",
      "For any queries, participants may contact the team coordinator",
    ],
    materials: ["Camera or Smartphones", "Editing Software (optional)"],
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
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
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
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
                    <li key={index} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-primary font-bold min-w-6 flex-shrink-0">
                        {index + 1}.
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
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
