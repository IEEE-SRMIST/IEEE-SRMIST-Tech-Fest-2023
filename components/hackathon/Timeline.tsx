import { eventProps, timelineProps } from "@/pages/events/types/types";
import React from "react";

export default function timeline(props: timelineProps) {
  return (
    <div className="container bg-transparent mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 left-2/4 absolute border-opacity-20 border-primary h-full border"></div>

        {props.events.map((event, index) => (
          <>
            {index % 2 === 0 ? (
              <>
                <div
                  key={index}
                  className="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {index + 1}
                    </h1>
                  </div>
                  <div className="order-1 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-xl w-5/12 px-6 py-4 opacity-50 hover:opacity-100 ease-in-out duration-200">
                    <h3 className="mb-3 font-bold text-primary text-xl">
                      {event.name}
                    </h3>
                    {/* <time>{event.date}</time> */}
                    <p className="text-sm leading-snug tracking-wide text-cardDescription text-opacity-100">
                      {event.location}
                    </p>
                    <a
                      href={event.slug}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-cardDescription duration-200 bg-primary border border-cardDescription rounded-lg hover:bg-white hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-primary focus:text-blue-700"
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
              </>
            ) : (
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    {index + 1}
                  </h1>
                </div>
                <div className="order-1 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-xl w-5/12 px-6 py-4 opacity-50 hover:opacity-100 ease-in-out duration-200">
                  <h3 className="mb-3 font-bold text-primary text-xl">
                    {event.name}
                  </h3>
                  {/* <time>{event.date}</time> */}
                  <p className="text-sm font-medium leading-snug tracking-wide text-primary text-opacity-100 mb-3">
                    {event.location}
                  </p>
                  <a
                    href={event.slug}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-cardDescription duration-200 bg-primary border border-cardDescription rounded-lg hover:bg-white hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-primary focus:text-blue-700"
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
          </>
        ))}

        {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
