import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import InspectorLogo from "@/assets/inspector-logo.png";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      {/* Centered Content */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <img 
            src={InspectorLogo} 
            alt="Inspector" 
            className="w-14 h-14"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Inspector Template
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Start building with React, Vite, Tailwind, and shadcn/ui.
        </p>
      </div>
    </div>
  );
}

export default App;
