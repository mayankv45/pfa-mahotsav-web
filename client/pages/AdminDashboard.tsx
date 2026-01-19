import { Layout } from "@/components/Layout";
import { Lock } from "lucide-react";

export default function AdminDashboard() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Manage events, members, and registrations
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-12">
            <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Admin Dashboard Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              This secure admin area will provide tools to manage all aspects of
              the club, events, and Mahotsav registrations.
            </p>
            <div className="bg-muted p-4 rounded-lg text-left text-sm text-muted-foreground inline-block">
              <p className="font-semibold text-foreground mb-2">
                Admin features:
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Secure login authentication</li>
                <li>View all registrations</li>
                <li>Filter registrations by event</li>
                <li>Export data (CSV/Excel)</li>
                <li>Manage events</li>
                <li>Manage members</li>
                <li>Upload gallery images</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
