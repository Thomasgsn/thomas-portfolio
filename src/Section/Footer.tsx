import { Social } from "@/components";

export const Footer = () => {
  const data = [
    {
      svg: (
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="bento-social stroke"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: "https://github.com/Thomasgsn",
      content: "Thomasgsn",
    },
    {
      svg: (
        <svg
          stroke-width="0"
          className="bento-social fill"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
      ),
      href: "https://www.linkedin.com/in/thomas-gassmann-a88986306/",
      content: "Thomas Gassmann",
    },
  ];

  return (
    <footer className="w-full h-24 border-t border-dark-background dark:border-light-background bg-light-background dark:bg-dark-background flex items-center justify-center flex-col gap-4">
      <p>
        © Thomas Portfolio | Made with ❤️ by Thomas
        <span className="animate-pulse">.</span>
      </p>
      <div className="flex items-center justify-center gap-4">
        {data.map((item) => (
          <Social
            key={item.href}
            svg={item.svg}
            href={item.href}
            content={item.content}
          />
        ))}
      </div>
    </footer>
  );
};
