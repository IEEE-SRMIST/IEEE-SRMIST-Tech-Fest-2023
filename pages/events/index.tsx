import EventCard from "@/components/cards/EventCard";
import PublicFooter from "@/layouts/public/Footer";
import PublicNavbar from "@/layouts/public/Navbar";
import React from "react";
import getEvents from "./lib/GetEvents";
import { Event } from "./types/types";
import Timeline from "@/components/hackathon/Timeline";

export const sampleEvents: Event[] = [
  {
    name: "Power and Utilities",
    description:
      "This industry is changing at an unprecedented rate. The amount of knowledge and expertise required to stay ahead of the curve as the industry shifts from traditional to renewables is too much for one person or team. Nesh can help to stay ahead of changes in legislation, market trends and consumer outlook. ",
    cover: "/test.jpg",
  },
  {
    name: "Chemical",
    description:
      "In the Chemical business, the devil is in the details. The end product is only as good as the process used to produce it and affected by the wide variations in how the product is utilized. Nesh can provide support to employees and customers to achieve the highest quality experience in the manufacturing and utilization of the product. ",
    cover: "/test.jpg",
  },
  {
    name: "Oil and Gas",
    description:
      "Rising global demand, volatile prices, and increasing environmental regulations are forcing the industry to face three challenges: reducing costs, optimizing asset performance, and improving its environmental footprint. Nesh helps with these challenges by providing better operational visibility, market trends, competitive intel, and empowers users to gain efficiency at every step in the E&P process. ",
    cover: "/test.jpg",
  },
  {
    name: "Consulting Firms",
    description:
      "Consulting firms deal with a huge volumes of data - both internal intellectual property and client intellectual property. Nesh is powerful enough to create a center of gravity that allows for the orbiting of various stakeholders attached to projects - associates, team leads, SMEs, and partners; and sophisticated enough to honor privacy and security privileges. ",
    cover: "/test.jpg",
  },
];

const AllEventsPage = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-syne font-bold mt-10">EVENTS</h1>
      <div className="card-section flex justify-center items-center">
        <div className="flex-col justify-start w-9/12">
          <div className="flex flex-col mt-10 ">
            {sampleEvents.map((event, index) => {
              console.log(index);
              return (
                <div
                  key={index}
                  className={`mb-10 ${
                    index % 2 === 0 ? "" : "flex justify-end"
                  }`}
                >
                  <EventCard event={event} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <h1 className="font-syne font-bold text-center -mb-5 text-5xl mt-20">
        TIMELINE
      </h1>
      <div className="">
        <Timeline events={sampleEvents} />
      </div>
    </div>
  );
};

export default AllEventsPage;
