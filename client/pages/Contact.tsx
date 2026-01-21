import { Layout } from "@/components/Layout";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Instagram,
      label: "Instagram",
      username: "@pfa_subcouncil_biet",
      link: "https://www.instagram.com/pfa_subcouncil_biet?igsh=MWcxNzY3MGk1c2ZjMA==",
      color: "text-pink-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@fahbietjhs",
      link: "https://www.linkedin.com/company/fahbietjhs/",
      color: "text-blue-600",
    },
  ];

  const phoneContacts = [
    {
      name: "Devansh Varshney",
      phone: "+91 9354345260",
    },
    {
      name: "Mayank Vikram",
      phone: "+91 7355983528",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Connect with us through various channels
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Follow Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <Icon className={`w-8 h-8 ${contact.color}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground">
                          {contact.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {contact.username}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Phone Contacts */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Phone Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phoneContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {contact.phone}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-lg p-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Email Us
            </h3>
            <p className="text-lg text-muted-foreground">
              pfcouncil@biet.ac.in
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
