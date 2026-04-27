import { Link } from "react-router-dom";
import { CloudSun, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import CitySearch from "@/components/CitySearch";

function Header() {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <CloudSun
            className={`h-8 w-8 ${
              isDark ? "text-yellow-400" : "text-blue-500"
            }`}
          />
          <span className="text-xl font-bold tracking-tight">Klimate</span>
        </Link>

        <div className="flex items-center gap-4">
          <CitySearch />

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
