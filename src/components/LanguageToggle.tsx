import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import i18n from "@/i18n";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as
      | "es"
      | "en"
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 relative group"
        >
          <Languages className="h-5 w-5 text-foreground transition-transform group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 text-[10px] font-bold text-primary bg-background rounded-full px-1 border border-border shadow-sm">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-36 bg-background/95 backdrop-blur-xl border-border/50 shadow-lg"
      >
        <DropdownMenuItem
          onClick={() => changeLanguage("es")}
          className={`cursor-pointer ${
            language === "es"
              ? "bg-primary/10 text-primary font-medium"
              : "hover:bg-primary/5"
          }`}
        >
          <span className="mr-2">🇪🇸</span>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className={`cursor-pointer ${
            language === "en"
              ? "bg-primary/10 text-primary font-medium"
              : "hover:bg-primary/5"
          }`}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
