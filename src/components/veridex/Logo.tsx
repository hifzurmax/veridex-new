import logoMainPaper from "@/assets/veridex-logo-main-paper.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <img
    src={logoMainPaper}
    alt="Veridex"
    className={`h-8 w-auto md:h-9 ${className}`}
  />
);
