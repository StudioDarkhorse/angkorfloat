import { cn } from "@/lib/utils";
import LogoIcon from "../common/LogoIcon";

interface DynamicLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSublogo?: boolean;
  sublogoLightThemeColor?: string;
  sublogoDarkThemeColor?: string;
}

const sizeClasses = {
  sm: {
    container: "gap-1",
    icon: "h-8 w-8",
    text: "text-lg md:text-xl",
  },
  md: {
    container: "gap-1.5",
    icon: "h-10 w-10",
    text: "text-xl md:text-2xl",
  },
  lg: {
    container: "gap-2",
    icon: "h-12 w-12",
    text: "text-2xl md:text-3xl",
  },
  xl: {
    container: "gap-2",
    icon: "h-14 w-14 md:h-16 md:w-16",
    text: "text-3xl md:text-4xl",
  },
  "2xl": {
    container: "gap-4",
    icon: "h-20 w-20 md:h-24 md:w-24",
    text: "text-4xl md:text-5xl lg:text-6xl",
  },
};

const DynamicLogo = ({
  className,
  size = 'md',
  showSublogo = true,
  sublogoLightThemeColor = '#8b4c55',
  sublogoDarkThemeColor = '#D0B48B',
}: DynamicLogoProps) => {
  const currentSize = sizeClasses[size];

  return (
    <div className={cn("flex items-end", currentSize.container, className)}>
      <LogoIcon className={currentSize.icon} />
      {showSublogo ? (
        <div
          className="flex items-baseline"
          style={
            {
              '--sublogo-light': sublogoLightThemeColor,
              '--sublogo-dark': sublogoDarkThemeColor,
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col mb-[1%]">
            <span className={cn("font-bold font-kugile leading-none", currentSize.text)}>An</span>
            <span className="-mt-2 pe-2 text-xs leading-none font-josefin uppercase font-bold w-full text-end text-[var(--sublogo-light)] dark:text-[var(--sublogo-dark)]">By</span>
          </div>
          <span className={cn("font-bold font-kugile leading-none", currentSize.text)}>g</span>
          <div className="flex flex-col mb-[1%]">
            <span className={cn("font-bold font-kugile leading-none whitespace-pre", currentSize.text)}>kor Float</span>
            <span className="-mt-2 ps-2 text-xs leading-none font-josefin uppercase font-bold w-full text-justify [text-align-last:justify] [text-justify:inter-character] text-[var(--sublogo-light)] dark:text-[var(--sublogo-dark)]">Hariharalaya</span>
          </div>
        </div>
      ) : (
        <span className={cn("font-bold font-kugile leading-none", currentSize.text)}>
          Angkor Float
        </span>
      )}
    </div>
  );
};

export default DynamicLogo;