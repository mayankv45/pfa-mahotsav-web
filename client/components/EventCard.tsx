interface EventCardProps {
  name: string;
  description: string;
  category: "Photography" | "Fine Arts";
  type: "Solo" | "Group";
  date: string;
  time?: string;
}

export const EventCard = ({
  name,
  description,
  category,
  type,
  date,
  time,
}: EventCardProps) => {
  const categoryColor =
    category === "Photography"
      ? "bg-primary/10 text-primary border-primary/30"
      : "bg-accent/10 text-accent border-accent/30";

  const typeColor =
    type === "Solo"
      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
      : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200";

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Category Badge */}
      <div className="px-6 pt-4 flex gap-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColor}`}>
          {category}
        </span>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeColor}`}>
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-4 flex-grow flex flex-col">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Date and Time */}
        <div className="mt-auto pt-4 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            {date}
          </p>
          {time && (
            <p className="text-sm text-foreground font-medium mt-1">{time}</p>
          )}
        </div>
      </div>

      {/* Register Button */}
      <div className="px-6 pb-4">
        <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};
