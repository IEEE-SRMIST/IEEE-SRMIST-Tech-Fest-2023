import Image from "next/image";
import React from "react";

export default function SingleEventCard() {
  return (
    <div className="w-3/4 p-10 z-20 shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] rounded-3xl mt-5 backdrop-blur-[_4px_] bg-white/10 backdrop-opacity-25 flex flex-col space-y-10">
      <h1 className="font-syne font-bold text-left text-5xl mb-10 ">
        Event Name
      </h1>
      <div className="image-section space-x-5 flex items-center h-[600px] mb-10">
        <div className="speaker-img flex flex-col justify-center items-center space-y-4">
          <Image
            src="/SingleEventPage/assets/speaker.png"
            alt=""
            className="rounded-full hover:-translate-y-3 duration-200 transition-all ease-in-out"
            height={300}
            width={300}
          />
          <h2 className="font-syne font-bold text-5xl text-white">
            Kunal Keshan
          </h2>
          <p className="speaker-description font-syne text-cardDescription font-light text-xl w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloremque dignissimos a magnam, in reiciendis non minus molestias
            quisquam error.
          </p>
        </div>
        <Image
          src={"/test2.jpg"} // map image here
          alt="Event cover"
          className="rounded-3xl"
          height={850}
          width={850}
        />
      </div>
      <div className="details-row flex justify-around">
        <div className="date flex space-x-5 items-center">
          <img
            src="/SingleEventPage/assets/date.png"
            className="invert"
            alt=""
          />
          <p>Date</p>
        </div>
        <div className="time flex space-x-5 items-center">
          <img
            src="/SingleEventPage/assets/clock.png"
            className="invert"
            alt=""
          />
          <p>Time</p>
        </div>
        <div className="location flex space-x-5 items-center">
          <img
            src="/SingleEventPage/assets/location.png"
            className="invert"
            alt=""
          />
          <p>Venue</p>
        </div>

        {/* <div className="team-size"></div> conditionally rendered */}
      </div>
      <div className="event-description">
        <h1 className="font-syne font-bold text-xl">Event Description</h1>
        <p className="font-spaceMono text-cardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quidem distinctio aperiam nemo impedit facilis similique adipisci
          consequuntur doloremque, consectetur ea autem, possimus eveniet,
          provident tempora. Maiores nemo obcaecati facilis minima corrupti.
        </p>
      </div>
      <div className="event-agenda">
        <h1 className="font-syne font-bold text-xl mb-2">Event Agenda</h1>
        <ul className="font-spaceMono text-cardDescription list-disc flex flex-col space-y-5 ml-5">
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            saepe incidunt quam?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            saepe incidunt quam?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            saepe incidunt quam?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            saepe incidunt quam?
          </li>
        </ul>
      </div>
      {/* <hr className="my-20 h-0.5 border-t-0 border-dashed bg-white/70 opacity-25" />
      <div className="event-speaker w-full">
        <h1 className="font-syne font-bold text-6xl mb-2">Event Speaker</h1>
        <div className="speaker-img flex flex-col justify-center items-center space-y-4">
          <img
            src="/SingleEventPage/assets/speaker.png"
            className="rounded-full hover:-translate-y-3 duration-200 transition-all ease-in-out"
            alt=""
          />
          <h2 className="font-syne font-bold text-5xl text-white">
            Kunal Keshan
          </h2>
          <p className="speaker-description font-syne text-cardDescription font-light text-2xl w-2/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloremque dignissimos a magnam, in reiciendis non minus molestias
            quisquam error.
          </p>
        </div>
      </div> */}
    </div>
  );
}
// todo: add the shifting gradient and make data dynamic
