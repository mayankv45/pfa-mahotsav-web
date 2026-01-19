import { Layout } from "@/components/Layout";
import { FileText } from "lucide-react";

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Mahotsav Events
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore all events, rules, and registration details for our annual
            festival
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Events Page Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              This page will display detailed information about all Mahotsav
              events, including schedules, rules, materials, and registration
              options.
            </p>
            <div className="bg-muted p-4 rounded-lg text-left text-sm text-muted-foreground inline-block">
              <p className="font-semibold text-foreground mb-2">Content includes:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>All events organized by day</li>
                <li>Event details and descriptions</li>
                <li>Rules and regulations</li>
                <li>Materials required/provided</li>
                <li>Registration buttons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
