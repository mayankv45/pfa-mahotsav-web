import { Layout } from "@/components/Layout";
import { ImageIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [lightboxEventType, setLightboxEventType] = useState<string | null>(null);

  const events = [
    {
      name: "Kati Patang",
      description: "Celebrated during Makar Sankranti, this traditional kite flying event brings together the community in a vibrant celebration of art and culture.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7b524ffbe3c94d28b446ac12da883e4d?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F510aa165d7544acd9dc9c02fe32f15b7?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F724cb60e5a894b3b8c38d9dbcc12e6ce?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F8ed55e73ccf847e79b5ebdae6960f5f6?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fb9d896e843f84cc0afaaa35baadff6ca?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F322ba725e1744008a63e385c328b629f?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F9498c3c72fdc444bb12931a12f44af09?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fbe7a81a65bfd42459196394dd7beded6?format=webp&width=800&height=1200",
      ],
    },
    {
      name: "Mahotsav",
      description: "Our annual flagship event celebrating photography and fine arts with competitions, workshops, and exhibitions showcasing student talent.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Ff7ed9963fa414fd5a9a60a563412fc2f?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Ff41a32a0459140508d51f83857cab9ae?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F1e549858063f40ab80b4204013f507da?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F0f503c4e0fec4fd9a0480f1d65043d2c?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F4dc67975c5d6438da017ae0447328f67?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F439550edf86b498bb2bb36c8c9ef956b?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fd51e45d9ac944994b4d8463ff2a909fa?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F0d89bdc52cf742a88a8ceaf474bfb40c?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F1ac520bea308475197530edef461b2b2?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fca5fa4b1e14143b78fd24f66bcd92ff6?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F32f11e18659443abb593dcd4065384c9?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F857f3f26572449d6bb86bb58244e3a41?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fd7367c20f765402e8cbdfce1b2c2fda1?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7ed251ea67ff4a2cb8d3f5552aa130a5?format=webp&width=800&height=1200",
      ],
    },
    {
      name: "Ravana Dahan",
      description: "A cultural event during Dussehra where the council participates in this traditional celebration with artistic contributions.",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fb31153c144d64352a6f6309a032e820b?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fbc4a75a868b04372998d893160fbeabd?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F1335eb1dae154452b9f95e9abb193e4f?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7ea71399266d4adb8bb064e4cd32dc9b?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fcf38dd99069545518fef800bbdc90445?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F997f27857e57412fb6d85ae3b25cbfa7?format=webp&width=800&height=1200",
        "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fde102c36dc96400796eaecbb2fdd6e52?format=webp&width=800&height=1200",
      ],
      video: "https://cdn.builder.io/o/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F273c61fbe51f493e849d927d778d5266?alt=media&token=aad78f95-2126-4a2d-8f7b-15cacc3f4caf&apiKey=f8fe42ee1fe741dbada340ec755b5816",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null || !lightboxEventType) return;

      const currentEvent = events.find((ev) => ev.name === lightboxEventType);
      if (!currentEvent) return;

      if (e.key === "ArrowLeft") {
        setLightboxImageIndex((prev) =>
          prev === 0 ? currentEvent.images.length - 1 : prev! - 1
        );
      } else if (e.key === "ArrowRight") {
        setLightboxImageIndex((prev) =>
          prev === currentEvent.images.length - 1 ? 0 : prev! + 1
        );
      } else if (e.key === "Escape") {
        setLightboxImageIndex(null);
        setLightboxEventType(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, lightboxEventType, events]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
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

                  {/* Photo Gallery */}
                  {event.images && event.images.length > 0 && (
                    <div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {event.images.map((image, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => {
                              setLightboxImageIndex(imgIndex);
                              setLightboxEventType(event.name);
                            }}
                            className="relative bg-muted border border-border rounded-lg overflow-hidden aspect-square hover:shadow-lg transition-all group"
                          >
                            <img
                              src={image}
                              alt={`${event.name} photo ${imgIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              draggable={false}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="text-white text-sm font-semibold">View</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Video Section */}
                  {event.video && (
                    <div className="mt-8">
                      <h4 className="font-display text-xl font-bold text-foreground mb-4">
                        Event Highlights Video
                      </h4>
                      <div className="relative w-full rounded-lg overflow-hidden border border-border bg-black aspect-video">
                        <video
                          controls
                          controlsList="nodownload"
                          className="w-full h-full"
                          poster={event.images?.[0]}
                          onContextMenu={(e) => e.preventDefault()}
                        >
                          <source src={event.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
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

      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && lightboxEventType && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setLightboxImageIndex(null);
            setLightboxEventType(null);
          }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const currentEvent = events.find(
                (ev) => ev.name === lightboxEventType
              );
              return currentEvent ? (
                <>
                  {/* Image */}
                  <img
                    src={currentEvent.images[lightboxImageIndex]}
                    alt="Zoomed event image"
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setLightboxImageIndex(null);
                      setLightboxEventType(null);
                    }}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Left Arrow */}
                  <button
                    onClick={() =>
                      setLightboxImageIndex((prev) =>
                        prev === 0
                          ? currentEvent.images.length - 1
                          : prev! - 1
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
                        prev === currentEvent.images.length - 1
                          ? 0
                          : prev! + 1
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
                    {lightboxImageIndex + 1} / {currentEvent.images.length}
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </Layout>
  );
}
