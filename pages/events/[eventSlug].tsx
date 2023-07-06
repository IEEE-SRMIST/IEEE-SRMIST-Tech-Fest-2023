import { useRouter } from "next/router";


import Event from "@/components/events/Event";

const SingleEventPage = () => {
  const router = useRouter();
  const slug = router.query.eventSlug;
  console.log(slug);
  //   const callEventDetailsEndpoint = async() =>{
  // 	     const resp = await getEvent()
  //   }
  //   use this to call event through its slug

  return (
      <div className="flex flex-col justify-center items-center">
        <Event />
        {/* feed the event out of the response into the props */}
      </div>
  );
};

export default SingleEventPage;
