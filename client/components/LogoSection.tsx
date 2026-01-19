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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Container */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-12">
          {/* College Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-card border-2 border-primary/20 rounded-lg flex items-center justify-center shadow-md p-3">
              {collegeLogo ? (
                <img
                  src={collegeLogo}
                  alt={collegeLogoAlt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                    BIET
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Jhansi</p>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center font-medium">
              BIET Jhansi
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-border"></div>

          {/* Club Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-card border-2 border-accent/20 rounded-lg flex items-center justify-center shadow-md p-3">
              {clubLogo ? (
                <img
                  src={clubLogo}
                  alt={clubLogoAlt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-accent">
                    PF
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Council</p>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center font-medium">
              PF Council
            </p>
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Photography & Fine Arts Sub Council
          </h1>
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
