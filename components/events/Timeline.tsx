import { eventProps, timelineProps } from "@/pages/events/types/types";
import Link from "next/link";
import React from "react";

export default function timeline(props: timelineProps) {
  return (
    <div className="container bg-transparent mx-auto mt-10 w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="md:border-2-2 md:left-2/4 md:absolute md:border-opacity-20 md:border-white md:h-full md:border"></div>

        {props.events.map((event, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="mb-8 flex md:justify-between space-x-3  items-center md:w-full w-[700px] right-timeline">
                  <div className="md:order-1 md:w-5/12"></div>
                  <div className="z-1 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-sm text-primary">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="order-1 border border-white/25 shadow-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm backdrop-opacity-80 rounded-lg transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 hover:-translate-y-1 w-5/12 p-6">
                    <h3 className="mb-3 font-bold text-white md:text-lg">
                      {event.name}
                    </h3>
                    {/* <time>{event.date}</time> */}
                    <p className="text-sm leading-snug tracking-wide text-cardDescription text-opacity-100">
                      {event.location}
                    </p>
                    <Link
                      href={`events/${event.slug}`} // either slug or the uuid
                      className="inline-flex items-center md:px-4 md:py-2 p-1 font-bold text-xs md:text-sm text-primary duration-500 bg-white border-2 border-white rounded-lg hover:bg-white/10 hover:text-white focus:z-10 focus:ring-4 focus:outline-none cursor-pointer"
                    >
                      Learn more{" "}
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              //! issue styles bad under 640px
              <div className="mb-8 flex md:justify-between space-x-3 flex-row-reverse items-center w-[700px] md:-translate-x-3 sm:-translate-x-[100px] -translate-x-[54%]  md:w-full left-timeline">
                <div className="md:order-1 md:w-5/12"></div>
                <div className="z-1 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-primary font-semibold text-lg">
                    {index + 1}
                  </h1>
                </div>
                <div className="order-1 border border-white/25 shadow-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm backdrop-opacity-80 rounded-lg transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 hover:-translate-y-1 w-5/12 p-6">
                  <h3 className="mb-3 font-bold text-white md:text-lg ">
                    {event.name}
                  </h3>
                  {/* <time>{event.date}</time> */}
                  <p className="text-sm font-medium leading-snug tracking-wide text-primary text-opacity-100 mb-3">
                    {event.location}
                  </p>
                  <a
                    href={`events/${event.slug}`}
                    className="inline-flex items-center md:px-4 md:py-2 p-1 font-bold text-xs md:text-sm text-primary duration-500 bg-white border-2 border-white rounded-lg hover:bg-white/10 hover:text-white focus:z-10 focus:ring-4 focus:outline-none cursor-pointer"
                  >
                    Learn more{" "}
                    <svg
                      className="w-3 h-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
