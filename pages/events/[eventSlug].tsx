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
        <SingleEventCard />
        {/* feed the event out of the response into the props */}
      </div>
    </PublicLayout>
  );
};

export default SingleEventPage;
