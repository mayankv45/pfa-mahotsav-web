import { Layout } from "@/components/Layout";
import { ImageIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface Event {
  id: string;
  name: string;
  type: "solo" | "group";
  description: string;
  rules: string[];
  materials: string[];
  images?: string[];
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
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F240d212fd8e34e46847342dbc8fe341e?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F91c5268436ec4d1ea41a4a739775e456?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fff4ea873f01f4cfcb52b535b932fa697?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F8156a54ffebd4fdd9840c6d0b0d22856?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F8d6ee35e7e9d4d3ea5fa03a4363e37c7?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F73e7fd19ba8c4850926e4594e3dd5ae6?format=webp&width=800&height=1200",
    ],
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
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Ffdb80a45a0c045808a9945a4e4cce090?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7fffd32d516544f686c0637d4ac6f531?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fc3d0516269d245dc91ee330ad52e880f?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7431790757884ac6bf480cdf1a6896b4?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F95837b580c0341aab4d8fe1a8379fe51?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fd414faedd8d149e7858929dd0c194cd1?format=webp&width=800&height=1200",
    ],
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
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7f14795f992047b9997cdcbc577884e1?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fc34f55cb157a4e9a91529902e7511dcc?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fef6351f931d046e18c3e60830c190ee7?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F2979faacd1cb48c29186e0154166d5a7?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F9f1238e599464cef8524589231099c23?format=webp&width=800&height=1200",
      "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F2bc736b4a44144109a0da71295a76481?format=webp&width=800&height=1200",
    ],
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
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const eventParam = searchParams.get("event");
    if (eventParam) {
      const foundEvent = events.find(
        (e) => e.name.toLowerCase().replace(/\s+/g, "-") === eventParam
      );
      if (foundEvent) {
        setSelectedEvent(foundEvent);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null || !selectedEvent?.images) return;

      if (e.key === "ArrowLeft") {
        setLightboxImageIndex((prev) =>
          prev === 0 ? selectedEvent.images!.length - 1 : prev! - 1
        );
      } else if (e.key === "ArrowRight") {
        setLightboxImageIndex((prev) =>
          prev === selectedEvent.images!.length - 1 ? 0 : prev! + 1
        );
      } else if (e.key === "Escape") {
        setLightboxImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, selectedEvent]);

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.type === filter
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
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

              {/* Past Images */}
              {selectedEvent.images && selectedEvent.images.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    Past Event Highlights
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEvent.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setLightboxImageIndex(index)}
                        className="relative bg-muted border border-border rounded-lg overflow-hidden aspect-square hover:shadow-lg transition-all group"
                      >
                        <img
                          src={image}
                          alt={`Event highlight ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="text-white text-sm font-semibold">Click to zoom</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

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

      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && selectedEvent?.images && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImageIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={selectedEvent.images[lightboxImageIndex]}
              alt="Zoomed event image"
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setLightboxImageIndex(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={() =>
                setLightboxImageIndex((prev) =>
                  prev === 0 ? selectedEvent.images!.length - 1 : prev! - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setLightboxImageIndex((prev) =>
                  prev === selectedEvent.images!.length - 1 ? 0 : prev! + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-lg text-sm">
              {lightboxImageIndex + 1} / {selectedEvent.images.length}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
