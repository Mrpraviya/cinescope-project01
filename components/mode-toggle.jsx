import {Button} from "@/components/ui/button";
import {Sun} from "lucide-react";

export default function ModeToggle() {
  return (
    <Button variant="ghost" size="icon" className="w-9 h-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light/Dark mode</span>
        
    </Button>
  )
}
