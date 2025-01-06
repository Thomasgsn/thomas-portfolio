import { useRef, useState, useEffect } from "react";
import { FileFolder, WorkIMG, SkillIMG, PersoIMG } from "@/components";
import { FaArrowLeftLong } from "react-icons/fa6";
import gsap from "gsap";

export const Bento = () => {
  const [page, setPage] = useState<"home" | "work" | "skill" | "personnal">(
    "home"
  );

  const folderRefs = useRef<HTMLDivElement[]>([]);
  const workDivRef = useRef<HTMLDivElement>(null);
  const skillDivRef = useRef<HTMLDivElement>(null);
  const personnalDivRef = useRef<HTMLDivElement>(null);

  const handleFolderClick = (newPage: "work" | "skill" | "personnal") => {
    gsap.to(folderRefs.current, {
      onComplete: () => {
        setPage(newPage);
      },
      x: "-75vw",
      duration: 1,
      stagger: 0.1,
      ease: "power3.inOut",
    });
  };

  const handleBackToHome = () => {
    const currentSection =
      page === "work"
        ? workDivRef.current
        : page === "skill"
        ? skillDivRef.current
        : personnalDivRef.current;

    gsap.to(currentSection, {
      onStart: () => {
        setTimeout(() => {
          setPage("home");
          gsap.fromTo(
            folderRefs.current,
            { x: "-75vw" },
            {
              x: "0vw",
              duration: 1,
              stagger: -0.1,
              ease: "power3.inOut",
            }
          );
        }, 500);
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const allSections = [
      workDivRef.current,
      skillDivRef.current,
      personnalDivRef.current,
    ];
    gsap.set(allSections, { display: "hidden" });

    if (page === "work") {
      gsap.fromTo(
        workDivRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0, ease: "power3.out" }
      );
    } else if (page === "skill") {
      gsap.fromTo(
        skillDivRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0, ease: "power3.out" }
      );
    } else if (page === "personnal") {
      gsap.fromTo(
        personnalDivRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0, ease: "power3.out" }
      );
    }
  }, [page]);

  return (
    <section className="relative border-b border-t border-dark-background dark:border-light-background bg-light-background dark:bg-dark-background flex justify-center items-center h-screen px-24 gap-10">
      <button
        className={`${
          page == "home" ? "hidden" : "block absolute top-32 left-32 z-50"
        }`}
        onClick={handleBackToHome}
      >
        <p>
          <FaArrowLeftLong />
        </p>
      </button>
      <div
        className="z-30"
        ref={(el) => (folderRefs.current[0] = el!)}
        onClick={() => handleFolderClick("work")}
      >
        <FileFolder text={"See my work"} />
      </div>
      <div
        className="z-30"
        ref={(el) => (folderRefs.current[1] = el!)}
        onClick={() => handleFolderClick("skill")}
      >
        <FileFolder text={"See my skills"} />
      </div>
      <div
        className="z-30"
        ref={(el) => (folderRefs.current[2] = el!)}
        onClick={() => handleFolderClick("personnal")}
      >
        <FileFolder text={"About me"} />
      </div>

      {/* Sections associées */}
      <div ref={workDivRef} className={`work w-52 h-52 absolute`}>
        {page == "work" ? <WorkIMG /> : <></>}
      </div>
      <div ref={skillDivRef} className={`skill w-52 h-52 absolute`}>
        {page == "skill" ? <SkillIMG /> : <></>}
      </div>
      <div ref={personnalDivRef} className={`personnal w-52 h-52 absolute`}>
        {page == "personnal" ? <PersoIMG /> : <></>}
      </div>
    </section>
  );
};
