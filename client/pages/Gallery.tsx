import { Layout } from "@/components/Layout";
import { Image, ImageIcon } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const events = ["Mahotsav", "Kati Patang", "Ravana Dahan"];
  const years = [2025, 2024, 2023];

  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedEvent, setSelectedEvent] = useState("Mahotsav");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Relive the moments from our events
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Select Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:border-primary transition-colors cursor-pointer"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Select Event
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:border-primary transition-colors cursor-pointer"
              >
                {events.map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12">
            {selectedEvent} {selectedYear}
          </h2>

          {/* Image Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-muted border-2 border-dashed border-border rounded-lg aspect-square flex flex-col items-center justify-center hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <ImageIcon className="w-12 h-12 text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors mb-3" />
                <p className="text-sm text-muted-foreground">
                  Photo Placeholder {item}
                </p>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Gallery images for {selectedEvent} {selectedYear} will be displayed here. Check back after the event!
            </p>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Browse by Event
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <button
                key={event}
                onClick={() => setSelectedEvent(event)}
                className={`p-8 rounded-lg border transition-all ${
                  selectedEvent === event
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <Image className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  {event}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
