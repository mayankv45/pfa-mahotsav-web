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
  onClick,
}: EventCardProps & { onClick?: () => void }) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer">
      {/* Content */}
      <div className="px-6 py-6 flex-grow flex flex-col">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>

      {/* View Button */}
      <div className="px-6 pb-6">
        <button
          onClick={onClick}
          className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
