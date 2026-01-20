import { Layout } from "@/components/Layout";
import { LogoSection } from "@/components/LogoSection";
import { EventCard } from "@/components/EventCard";
import { Link } from "react-router-dom";
import { Camera, Palette, Sparkles, Users } from "lucide-react";

// Sample Mahotsav Events Data
const mahotsavEvents = [
  {
    id: 1,
    name: "Portrait Photography",
    description:
      "Capture the essence of human emotions through black and white portrait photography.",
    category: "Photography" as const,
    type: "Solo" as const,
    date: "Day 1",
    time: "10:00 AM - 2:00 PM",
  },
  {
    id: 2,
    name: "Abstract Painting",
    description:
      "Express your creativity through abstract art forms and unconventional painting techniques.",
    category: "Fine Arts" as const,
    type: "Solo" as const,
    date: "Day 2",
    time: "2:00 PM - 6:00 PM",
  },
  {
    id: 3,
    name: "Photography Collage",
    description:
      "Create a collaborative photographic collage combining multiple images into one artistic piece.",
    category: "Photography" as const,
    type: "Group" as const,
    date: "Day 2",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 4,
    name: "Sculpture Workshop",
    description:
      "Craft three-dimensional art using various materials and sculptural techniques.",
    category: "Fine Arts" as const,
    type: "Group" as const,
    date: "Day 3",
    time: "1:00 PM - 5:00 PM",
  },
  {
    id: 5,
    name: "Landscape Photography",
    description:
      "Explore the beauty of nature through landscape and outdoor photography.",
    category: "Photography" as const,
    type: "Solo" as const,
    date: "Day 4",
    time: "6:00 AM - 10:00 AM",
  },
  {
    id: 6,
    name: "Mixed Media Art",
    description:
      "Combine different artistic mediums to create unique and expressive artworks.",
    category: "Fine Arts" as const,
    type: "Solo" as const,
    date: "Day 5",
    time: "3:00 PM - 7:00 PM",
  },
];

const clubHighlights = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing moments and perspectives through the lens of creativity.",
  },
  {
    icon: Palette,
    title: "Fine Arts",
    description:
      "Expressing artistic vision through painting, sculpture, and mixed media.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Nurturing creative minds and fostering artistic expression.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a vibrant community of artists and photographers.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Logo Section */}
      <LogoSection
        collegeLogo="https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F4556d7141dd5464ca3b5f6d0e6363afc?format=webp&width=800"
        clubLogo="https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F07029b41449949fa8292ae10fecbfcad?format=webp&width=800"
      />

      {/* Hero Section - Mahotsav */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent-foreground">
              Annual Event
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            MAHOTSAV 2026
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            A 4 day celebration of creativity, art, and photography featuring
            solo and group events for passionate artists and photographers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
            >
              Explore All Events
            </Link>
            <Link
              to="/register"
              className="inline-block bg-white/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              Register Now
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
                4-5
              </div>
              <p className="text-sm text-primary-foreground/80 mt-2">Days</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
                6+
              </div>
              <p className="text-sm text-primary-foreground/80 mt-2">Events</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground">
                100+
              </div>
              <p className="text-sm text-primary-foreground/80 mt-2">
                Participants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Mahotsav Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is Mahotsav?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mahotsav is our annual multi-day festival celebrating the arts and
              photography. It's a platform for students to showcase their talent,
              collaborate with peers, and push the boundaries of creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl font-bold mb-3">4-5</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Days of Celebration
              </h3>
              <p className="text-muted-foreground">
                From morning to evening, each day brings new opportunities for
                artistic expression and creative collaboration.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-accent text-4xl font-bold mb-3">6+</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Diverse Events
              </h3>
              <p className="text-muted-foreground">
                Photography, painting, sculpture, and mixed media events
                catering to both solo artists and collaborative groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Highlights Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Club
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a community dedicated to photography and fine arts,
              fostering creativity and artistic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Mahotsav Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Mahotsav Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of the exciting events happening during Mahotsav 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mahotsavEvents.slice(0, 6).map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/80 to-accent/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Showcase Your Talent?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us at Mahotsav and be part of an amazing artistic journey.
            Register now to participate in any of our exciting events!
          </p>

          <Link
            to="/register"
            className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 transform hover:scale-105 text-lg"
          >
            Register for Mahotsav
          </Link>
        </div>
      </section>
    </Layout>
  );
}
