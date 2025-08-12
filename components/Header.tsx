import { CircleHelp, LogIn } from "lucide-react";
import Logo from "@/components/Shared/Logo";

const Header = () => {
  return (
    <header className="py-4 text-white bg-[#05203C]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex flex-wrap gap-4 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-4 text-sm">
          <button className="cursor-pointer flex items-center gap-2">
            <CircleHelp className="size-5" aria-hidden="true" />
            <span>Help</span>
          </button>
          <button className="cursor-pointer flex items-center gap-2">
            <LogIn className="size-5" aria-hidden="true" />
            <span>Log in</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
