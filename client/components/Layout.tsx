import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Gallery", path: "/gallery" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-2">
              <div className="text-primary font-display font-bold text-xl">
                PF Council
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Dark Mode Toggle + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-4">
                PF Council
              </h3>
              <p className="text-sm text-muted-foreground">
                Photography & Fine Arts Sub Council of BIET Jhansi
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-base font-bold text-primary mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="hover:text-primary transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/members"
                    className="hover:text-primary transition-colors"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="font-display text-base font-bold text-primary mb-4">
                Contact
              </h4>
              <p className="text-sm text-muted-foreground">
                Email: pfcouncil@biet.ac.in
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Photography & Fine Arts Sub Council, BIET Jhansi. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
