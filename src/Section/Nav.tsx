import { ThemeToggler } from "@/components";

export const Nav = () => {
  return (
    <nav className="w-full px-[5vw] sm:px-[10vw] md:px-[20vw] py-16 justify-between flex items-center fixed z-50">
      <a href="#top" className="text-lg hover:tracking-wider transition-[letter-spacing]">
        Thomas Gassmann portfolio
        <span className="animate-pulse">.</span>
      </a>
      <ThemeToggler />
    </nav>
  );
};
