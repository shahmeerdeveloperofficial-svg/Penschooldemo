"use client";

import React from "react";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const Bento = () => {
  const News = [
    {
      title: "Admissions are open for new applicants",
      url: "/OnlineAdmission",
    },
    {
      title: "Parent meeting and orientation support available",
      url: "/ParentingWorkshop",
    },
    {
      title: "Student wellbeing and mentoring guidance",
      url: "/StudentCounselling",
    },
    {
      title: "Co-curricular learning beyond the classroom",
      url: "/SocietyAndClubs",
    },
  ];

  return (
    <section
      id="About"
      className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="h2 text-center">
        Welcome to <span className="text-main">PEN School System</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <div className="sm:[grid-area:1/1/2/3] group/card p-6 rounded-3xl bg-main text-light relative overflow-hidden">
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-96 translate-x-[5%] translate-y-[15%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag><p className="font-bold">Our Mission</p></Tag>
            <p className="text-base sm:text-lg">
              Our mission is to build a safe, respectful, and high-achieving
              school environment where children in Pakpattan can learn with
              confidence and purpose. We are committed to:
            </p>
            <ul className="leading-relaxed list-disc list-inside">
              <li>delivering strong academic foundations with clear concepts</li>
              <li>nurturing confidence, discipline, and positive character</li>
              <li>encouraging creativity, communication, and curiosity</li>
              <li>supporting every child through caring teachers and guidance</li>
              <li>working closely with parents for each student&apos;s growth</li>
            </ul>

            <div className="flex justify-end">
              <Link href={"/OnlineAdmission"}>
                <Button btnType="sec">
                  <span>Online Admission</span>
                  <svg
                    className="h-auto w-4"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                      fill="#fff"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:[grid-area:2/1/3/2] group/card flex-1 min-h-72 p-6 rounded-3xl bg-sec text-light relative overflow-hidden">
          <Image
            src="/speaker.svg"
            width="400"
            height="400"
            alt="speaker"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-40 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="flex flex-col gap-4 relative z-10">
            <Tag><p className="font-bold">School Highlights</p></Tag>
            <div>
              {News.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={item.url}
                    name="detail link"
                    className="w-fit text-light text-base sm:text-lg flex items-center gap-2 hover:gap-4 hover:underline transition-all duration-300"
                  >
                    <span>{item.title}</span>
                    <svg
                      className="h-auto w-4"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7604 6.15482C18.0799 6.47301 18.0799 6.9889 17.7604 7.30709L12.5535 12.4923C12.234 12.8105 11.7159 12.8105 11.3964 12.4923C11.0769 12.1741 11.0769 11.6582 11.3964 11.34L15.2066 7.54574L0.818181 7.54574C0.366311 7.54574 -1.42215e-06 7.18095 -1.38281e-06 6.73096C-1.34347e-06 6.28097 0.366311 5.91618 0.818181 5.91618L15.2066 5.91618L11.3964 2.12187C11.0769 1.80368 11.0769 1.28779 11.3964 0.969602C11.7159 0.651411 12.234 0.651411 12.5535 0.969602L17.7604 6.15482Z"
                        fill="#FDBC58"
                      />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sm:[grid-area:2/2/3/3] xl:[grid-area:1/3/3/4] min-h-72 rounded-3xl bg-sec text-light overflow-hidden relative flex items-center justify-center p-8">
          <div className="text-center max-w-sm">
            <p className="text-main font-berlin text-6xl font-bold mb-3">PEN</p>
            <p className="text-lg">A welcoming school atmosphere where children learn, participate, and grow with confidence.</p>
          </div>
        </div>

        <div className="sm:[grid-area:3/1/4/3] xl:[grid-area:2/2/3/3] group/card min-h-72 p-6 rounded-3xl bg-main relative overflow-hidden">
          <Image
            src="/spark.svg"
            width="400"
            height="400"
            alt="spark"
            className="transition-all duration-700 group-hover/card:scale-110 origin-bottom-right absolute right-0 bottom-0 w-44 translate-x-[5%] translate-y-[5%] opacity-15"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <Tag><p className="font-bold">Our Vision</p></Tag>
            <p className="text-base sm:text-lg text-light">
              PEN School System envisions a future where every child
              in our community receives meaningful education, develops strong
              values, and steps forward as a confident learner ready for school,
              family, and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
