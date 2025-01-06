import { SVGProps } from "react";
interface Props {
  svg: React.ReactElement<SVGProps<SVGSVGElement>>;
  href: string;
  content: string;
}

export const Social = ({ svg, href, content }: Props) => {
  return (
    <a href={href} className="group relative w-fit h-fit group">
      <button>{svg}</button>
      <span className="absolute -top-14 left-[50%] text-white dark:text-black -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-dark-background dark:bg-light-background py-2 text-xs text-nowrap font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {content}
      </span>
    </a>
  );
};
