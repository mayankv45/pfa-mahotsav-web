import { Layout } from "@/components/Layout";
import { BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About the Club
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Learn about our mission, vision, and culture
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              About Section Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              This page will feature comprehensive information about the
              Photography & Fine Arts Sub Council, including our history,
              mission, values, and cultural impact on campus.
            </p>
            <div className="bg-muted p-4 rounded-lg text-left text-sm text-muted-foreground inline-block">
              <p className="font-semibold text-foreground mb-2">Content includes:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Club history and background</li>
                <li>Mission and vision statement</li>
                <li>Core values and culture</li>
                <li>Role in college community</li>
                <li>Achievements and highlights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
