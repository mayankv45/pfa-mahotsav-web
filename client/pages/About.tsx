import { Layout } from "@/components/Layout";
import { ImageIcon } from "lucide-react";

export default function About() {
  const events = [
    {
      name: "Kati Patang",
      description: "Celebrated during Makar Sankranti, this traditional kite flying event brings together the community in a vibrant celebration of art and culture.",
    },
    {
      name: "Mahotsav",
      description: "Our annual flagship event celebrating photography and fine arts with competitions, workshops, and exhibitions showcasing student talent.",
    },
    {
      name: "Ravana Dahan",
      description: "A cultural event during Dussehra where the council participates in this traditional celebration with artistic contributions.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About the Club
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Learn about our mission, vision, and heritage
          </p>
        </div>
      </section>

      {/* Council Description Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Photography & Fine Arts Sub Council
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                The Photography & Fine Arts Sub Council of Bundelkhand Institute of Engineering and Technology (BIET) is known for organizing events related to photography and fine arts. Our council is dedicated to fostering creativity, artistic expression, and cultural appreciation among students.
              </p>
              <p>
                <span className="font-semibold text-foreground">Founded:</span> 2nd October
              </p>
              <p>
                We believe in providing a platform for students to showcase their talent in photography and fine arts, while promoting artistic excellence and community engagement through various events and activities throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Signature Events
          </h2>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                    {event.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {event.description}
                  </p>

                  {/* Photo Placeholder */}
                  <div className="bg-muted border-2 border-dashed border-border rounded-lg p-12 text-center">
                    <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-40" />
                    <p className="text-muted-foreground font-medium">
                      Event Photos Gallery
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Photos from past {event.name} events will be displayed here
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To foster a vibrant community of photographers and artists, providing platforms for creative expression, skill development, and artistic excellence while celebrating the diverse talents within our institution.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-display text-2xl font-bold text-accent mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be a recognized hub for artistic and photographic excellence, inspiring innovation and creativity while promoting cultural appreciation and community engagement in the realm of visual arts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
