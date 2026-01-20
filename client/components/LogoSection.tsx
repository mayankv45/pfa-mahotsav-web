interface LogoSectionProps {
  collegeLogo?: string;
  clubLogo?: string;
  collegeLogoAlt?: string;
  clubLogoAlt?: string;
}

export const LogoSection = ({
  collegeLogo,
  clubLogo,
  collegeLogoAlt = "BIET Jhansi Logo",
  clubLogoAlt = "Photography & Fine Arts Sub Council Logo",
}: LogoSectionProps) => {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted py-8 md:py-12 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title at top center */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Photography & Fine Arts Sub Council
          </h1>
        </div>

        {/* Logos with Title Container */}
        <div className="flex items-center justify-center gap-6 md:gap-12 mb-8">
          {/* College Logo - Smaller */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-2 border-primary/20 rounded-lg flex items-center justify-center shadow-md p-2">
              {collegeLogo ? (
                <img
                  src={collegeLogo}
                  alt={collegeLogoAlt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-lg md:text-xl font-display font-bold text-primary">
                    BIET
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center font-medium">
              BIET Jhansi
            </p>
          </div>

          {/* Club Logo - Smaller */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-2 border-accent/20 rounded-lg flex items-center justify-center shadow-md p-2">
              {clubLogo ? (
                <img
                  src={clubLogo}
                  alt={clubLogoAlt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-base md:text-lg font-display font-bold text-accent">
                    PF
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center font-medium">
              PF Council
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            College BIET Jhansi
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            Celebrating Creativity, Art & Photography
          </p>
        </div>
      </div>
    </section>
  );
};
