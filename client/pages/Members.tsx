import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/MemberCard";

interface Member {
  name: string;
  role: string;
  department: string;
}

interface FacultyMember {
  name: string;
  designation: string;
}

const membersByRole: Record<string, Member[]> = {
  "General Secretary": [
    { name: "Devansh Varshney", role: "General Secretary", department: "CSE" },
    {
      name: "Vaishnavi Katiyar",
      role: "General Secretary",
      department: "ECE",
    },
  ],
  "Joint Secretary": [
    {
      name: "Vishal Maddheshiya",
      role: "Joint Secretary",
      department: "EE",
    },
    { name: "Ankita Mishra", role: "Joint Secretary", department: "EE" },
  ],
  "Head of Events": [
    { name: "Raj Pandey", role: "Head of Events", department: "CE" },
    { name: "Mahima Sahani", role: "Head of Events", department: "CSE" },
  ],
  "Creative Head": [
    { name: "Yash Kushwaha", role: "Creative Head", department: "CSE" },
    { name: "Ayush Singh", role: "Creative Head", department: "ME" },
  ],
  "Finance Head": [
    {
      name: "Abhishek Prajapati",
      role: "Finance Head",
      department: "EE",
    },
    { name: "Varun Kumar", role: "Finance Head", department: "CHE" },
  ],
  "Advisory Board": [
    { name: "Arin V. Tripathi", role: "Advisory Board", department: "ECE" },
    { name: "Anmol Gupta", role: "Advisory Board", department: "ME" },
    { name: "Lakshay Pahwa", role: "Advisory Board", department: "CSE" },
    { name: "Sarwan Kumar", role: "Advisory Board", department: "CSE" },
    { name: "Manish Kumar", role: "Advisory Board", department: "ME" },
    { name: "Swarnima Soni", role: "Advisory Board", department: "CSE" },
  ],
};

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. [Faculty Name]",
    designation: "Faculty Officer-in-Charge",
  },
  {
    name: "Prof. [Faculty Name]",
    designation: "President – Council of Student Activity",
  },
];

export default function Members() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/80 to-accent/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Leadership & Members
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Meet the talented individuals driving the Photography & Fine Arts
            Sub Council
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Faculty Advisors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {facultyMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role=""
                designation={member.designation}
                isFaculty={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Council Members Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(membersByRole).map((entry, index) => {
            const [role, members] = entry;
            return (
              <div key={index} className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                  {role}
                </h2>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${role === "Advisory Board" ? "lg:grid-cols-3" : ""}`}>
                  {members.map((member, idx) => (
                    <MemberCard key={idx} {...member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Photos will be added once images are provided. Department codes: CSE
            - Computer Science, ECE - Electronics & Communication, EE -
            Electrical Engineering, CE - Civil Engineering, ME - Mechanical
            Engineering, CHE - Chemical Engineering.
          </p>
        </div>
      </section>
    </Layout>
  );
}
