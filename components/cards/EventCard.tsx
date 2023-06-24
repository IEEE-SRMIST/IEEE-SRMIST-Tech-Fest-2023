import { Event, eventProps } from "@/pages/events/types/types";
import Link from "next/link";

const EventCard = (props: eventProps) => {
  return (
    <div
      className={`w-[800px] flex  overflow-hidden border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)]  ${
        props.index % 2 === 0 ? "" : "flex-row-reverse"
      }`}
    >
      {/* alter the width to size the cards  */}
      <div className="image-container w-2/3 z-20">
        <img
          alt="Event-image"
          className="image h-full"
          src={props.event.cover}
        />
      </div>
      <div className="card-contents flex flex-col w-full z-20 shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] backdrop-blur-[_4px_] bg-white/10 backdrop-opacity-25 p-5">
        <Link href={`events/${props.event.slug}`}>
          <h1 className="font-syne text-start text-2xl font-bold">
            {props.event.name}
          </h1>
        </Link>
        <p className="font-spaceMono text-white text-lg">
          {props.event.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
