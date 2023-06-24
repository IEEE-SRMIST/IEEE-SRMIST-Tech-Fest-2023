import PublicLayout from "@/layouts/public/Layout";
import { useRouter } from "next/router";
import React from "react";
import getEvent from "./lib/GetEvent";
import SingleEventCard from "@/components/cards/SingleEventCard";

const SingleEventPage = () => {
  const router = useRouter();
  const slug = router.query.eventSlug;
  console.log(slug);
  //   const callEventDetailsEndpoint = async() =>{
  // 	     const resp = await getEvent()
  //   }
  //   use this to call event through its slug

  return (
    <PublicLayout>
      <div className="flex flex-col justify-center items-center">
        <img
          src={"/test2.jpg"} // map image here
          alt="Event cover"
          className="w-3/5 rounded-3xl"
        />
        <SingleEventCard />
        {/* feed the event out of the response into the props */}
      </div>
    </PublicLayout>
  );
};

export default SingleEventPage;
