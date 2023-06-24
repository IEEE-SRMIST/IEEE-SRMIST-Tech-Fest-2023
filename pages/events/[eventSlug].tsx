import PublicLayout from "@/layouts/public/Layout";
import { useRouter } from "next/router";
import React from "react";
import getEvent from "./lib/GetEvent";

const SingleEventPage = () => {
  const router = useRouter();
  const slug = router.query.eventSlug;
  console.log(slug);
  //   const callEventDetailsEndpoint = async() =>{
  // 	     const resp = await getEvent()
  //   }
  //   use this to call event through its slug

  return <PublicLayout>{/* <Image></Image> cover */}</PublicLayout>;
};

export default SingleEventPage;
