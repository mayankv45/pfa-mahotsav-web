interface MemberCardProps {
  name: string;
  role: string;
  department?: string;
  photo?: string;
  isFaculty?: boolean;
  designation?: string;
}

export const MemberCard = ({
  name,
  role,
  department,
  photo,
  isFaculty = false,
  designation,
}: MemberCardProps) => {
  return (
    <div className={`text-center ${isFaculty ? "md:col-span-2" : ""}`}>
      {/* Photo Container */}
      <div className="mb-4 flex justify-center">
        <div className={`relative overflow-hidden bg-muted ${isFaculty ? "w-32 h-32" : "w-24 h-24"} rounded-lg border-2 border-primary/20 shadow-md`}>
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary/40">
                  {name.charAt(0)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Member Info */}
      <h3 className="font-display text-lg font-bold text-foreground mb-1">
        {name}
      </h3>

      {designation ? (
        <p className="text-sm font-semibold text-accent mb-1">{designation}</p>
      ) : null}

      <p className="text-base font-medium text-primary mb-1">{role}</p>

      {department && (
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {department}
        </p>
      )}
    </div>
  );
};
