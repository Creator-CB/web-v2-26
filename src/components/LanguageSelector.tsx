
import React, { useState } from 'react';
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    // In a real app, this would trigger language change throughout the app
    console.log(`Language changed to ${lang}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-white/90">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg">
        <DropdownMenuItem onClick={() => handleLanguageChange('EN')} className="cursor-pointer">
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('IT')} className="cursor-pointer">
          <span className="mr-2">🇮🇹</span> Italiano
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
