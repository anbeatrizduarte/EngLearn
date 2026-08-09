import { useState } from "react";
import { Card } from "./Card";
import { Typography } from "../foundations/Typography";

export function ExpandableCard({ titulo, subtitulo, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const IconChevronDown = <svg class="humbleicons hi-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 10 7 7 7-7" /></svg>
      const IconChevronUp = <svg class="humbleicons hi-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 14 7-7 7 7" /></svg>

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="grid">
          <Typography variant="muted">{titulo}</Typography>
          <Typography variant="default">{subtitulo}</Typography>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? IconChevronUp : IconChevronDown}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </Card>
  );
}