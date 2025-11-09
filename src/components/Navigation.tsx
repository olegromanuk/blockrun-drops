import { Button } from "@/components/ui/button";

const navItems = [
  { label: "ГЛАВНАЯ", color: "text-[#7dd3a7]" },
  { label: "МИССИЯ", color: "text-[#5ae0b3]" },
  { label: "КОНЦЕПТ", color: "text-[#f4a261]" },
  { label: "ЭСТЕТИКА", color: "text-[#beadde]" },
  { label: "ПРИНТЫ", color: "text-[#7dd3a7]" },
  { label: "КОМЬЮНИТИ", color: "text-[#beadde]" },
  { label: "ДРОПЫ", color: "text-[#5ae0b3]" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black tracking-tighter text-foreground">
              BLOCKRUN
            </h1>
          </div>

          {/* Navigation buttons */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`${item.color} font-semibold text-xs tracking-wide hover:bg-muted transition-colors`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="neon-text-cyan">
              МЕНЮ
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
