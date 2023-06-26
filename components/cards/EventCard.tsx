import { Event, eventProps } from "@/pages/events/types/types";
import Link from "next/link";
import Image from "next/image";

const EventCard = (props: eventProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-lg border border-white/25 shadow-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm backdrop-opacity-80 transition ease-in-out duration-500 hover:transition hover:ease-in-out hover:duration-500 lg:w-[800px] ${
        props.index % 2 === 0 ? "" : "flex-row-reverse"
      }`}
    >
      <div className="image-container w-3/3 md:w-1/2 lg:w-1/3 m-5">
        <Image
          alt="Event-image"
          className="w-full h-full object-cover rounded-lg"
          src={props.event.cover}
          width={300}
          height={350}
        />
      </div>
      <div className="card-contents flex flex-col w-3/3 md:w-1/2 lg:w-2/3 p-5">
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
