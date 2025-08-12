import { Plane } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Plane className="size-7" aria-hidden="true" />
      <span className="text-xl md:text-2xl font-semibold tracking-tight">
        AirNexa
      </span>
    </div>
  );
};

export default Logo;
