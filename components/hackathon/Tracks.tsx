import React, { FunctionComponent } from "react";
import Image from "next/image";
import TrackCard from "./TrackCard";

const Tracks: FunctionComponent = () => {
  return (
    <div className="bg-[#14094fe6] text-white">
      <div className="text-center py-10">
        <div className="text-3xl text-purple-200">Tracks</div>
        <div className="text-4xl w-96 mx-auto leading-normal font-bold mb-12 text-purple-400">
          WHAT'S YOUR PLAN OF ACTION!
        </div>
        <div className="flex justify-evenly flex-wrap group space-y-10 lg:space-y-0">
          <TrackCard
            heading="Tracks"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, excepturi fugiat ex magni dolore labore quae suscipit. Aspernatur, aliquam consectetur."
          />
		  <TrackCard
            heading="Tracks"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, excepturi fugiat ex magni dolore labore quae suscipit. Aspernatur, aliquam consectetur."
          />
		  <TrackCard
            heading="Tracks"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, excepturi fugiat ex magni dolore labore quae suscipit. Aspernatur, aliquam consectetur."
          />
		  
        </div>
      </div>
    </div>
  );
};

export default Tracks;
