import { Event, eventProps } from "@/pages/events/types/types";

const EventCard = (props: eventProps) => {
  return (
    <div className="w-[800px] space-x-10 flex rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg backdrop-opacity-25 bg-white/50 z-10">
      {/* alter the width to size the cards  */}
      <div className="image-container w-2/3 z-20">
        <img
          alt="Event-image"
          className="image h-full"
          src={props.event.cover}
        />
      </div>
      <div className="card-contents flex flex-col w-full z-20">
        <h1 className="font-syne text-start text-2xl font-bold">
          {props.event.name}
        </h1>
        <p className="font-spaceMono text-cardDescription text-lg">
          {props.event.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
