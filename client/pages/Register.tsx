import { Layout } from "@/components/Layout";
import { ClipboardList } from "lucide-react";

export default function Register() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Register for Mahotsav
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Sign up to participate in your favorite events
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border-2 border-dashed border-border rounded-lg p-12">
            <ClipboardList className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Registration Form Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Fill out the registration form to join us at Mahotsav 2024. Secure
              your spot for the events you're passionate about!
            </p>
            <div className="bg-muted p-4 rounded-lg text-left text-sm text-muted-foreground inline-block">
              <p className="font-semibold text-foreground mb-2">
                Registration will include:
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Personal information</li>
                <li>Event selection</li>
                <li>Group registration option</li>
                <li>Terms and conditions</li>
                <li>Confirmation email</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
