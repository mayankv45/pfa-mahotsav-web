import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/MemberCard";

interface Member {
  name: string;
  role: string;
  department: string;
  photo?: string;
}

interface FacultyMember {
  name: string;
  designation: string;
  photo?: string;
}

const membersByRole: Record<string, Member[]> = {
  "General Secretary": [
    {
      name: "Devansh Varshney",
      role: "General Secretary",
      department: "CSE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fcaef87ae3f754eb5a75b25c4095d54c0?format=webp&width=800&height=1200"
    },
    {
      name: "Vaishnavi Katiyar",
      role: "General Secretary",
      department: "ECE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F63d7e88fed76420988dfb3407152f0b1?format=webp&width=800&height=1200"
    },
  ],
  "Joint Secretary": [
    {
      name: "Vishal Maddheshiya",
      role: "Joint Secretary",
      department: "EE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F1d9be5dd8b2143d0a6518e31a1f64668?format=webp&width=800&height=1200"
    },
    {
      name: "Ankita Mishra",
      role: "Joint Secretary",
      department: "EE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F2de142e373af47a194447db820ebb24e?format=webp&width=800&height=1200"
    },
  ],
  "Head of Events": [
    {
      name: "Raj Pandey",
      role: "Head of Events",
      department: "CE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fbb91e570c15746c8b9b4df7adae915d8?format=webp&width=800&height=1200"
    },
    {
      name: "Mahima Sahani",
      role: "Head of Events",
      department: "CSE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F6fe34f7a5865474cb2aaee97053dbd0d?format=webp&width=800&height=1200"
    },
  ],
  "Creative Head": [
    {
      name: "Yash Kushwaha",
      role: "Creative Head",
      department: "CSE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fceaab03fabf247b59aa093af7f3f5e30?format=webp&width=800&height=1200"
    },
    {
      name: "Ayush Singh",
      role: "Creative Head",
      department: "ME",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fbe37d979337440458209bf6bd9a50459?format=webp&width=800&height=1200"
    },
  ],
  "Finance Head": [
    {
      name: "Abhishek Prajapati",
      role: "Finance Head",
      department: "EE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2Fd7f75c7985314588b28d9a2d31e74c46?format=webp&width=800&height=1200"
    },
    {
      name: "Varun Kumar",
      role: "Finance Head",
      department: "CHE",
      photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F3ff24a6318a24506a545dc843d251348?format=webp&width=800&height=1200"
    },
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
    name: "Prof. Yashpal Singh",
    designation: "President – Council of Student Activity",
    photo: "https://cdn.builder.io/api/v1/image/assets%2Ff8fe42ee1fe741dbada340ec755b5816%2F7c12237d68924ed09248f22a9323d471?format=webp&width=800&height=1200"
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

    </Layout>
  );
}
