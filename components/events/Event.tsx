import Image from 'next/image';

export default function SingleEventCard() {
  return (
    <div className="w-3/4 p-10 z-1 shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] rounded-3xl backdrop-blur-[_4px_] bg-white/10 backdrop-opacity-25 flex flex-col space-y-10 my-20">
      <h1 className="font-syne font-extrabold text-center uppercase text-4xl">
        Event Name
      </h1>
      <div className="image-section md:space-x-5 flex flex-col-reverse  md:flex-row justify-center items-center md:items-center md:h-[600px] mb-10">
        <div className="speaker-img flex flex-col justify-center items-center">
          <Image
            src="/speak.png"
            alt=""
            className="rounded-full hover:-translate-y-3 duration-200 transition-all ease-in-out flex-shrink"
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
          src="/testimg.jpg" // map image here
          alt="Event cover"
          className="rounded-2xl mb-10 md:scale-100 sm:scale-100 scale-125"
          height={850}
          width={850}
        />
      </div>
      <div className="details-row flex justify-around">
        <div className="date flex md:flex-row flex-col md:space-x-5 md:items-center justify-center">
          <img src="/assets/event/date.png" className="invert" alt="" />
          <p>Date</p>
        </div>
        <div className="time flex md:flex-row flex-col md:space-x-5 md:items-center justify-center">
          <img src="/assets/event/clock.png" className="invert" alt="" />
          <p>Time</p>
        </div>
        <div className="location flex md:flex-row flex-col md:space-x-5 md:items-center justify-center">
          <img src="/assets/event/location.png" className="invert" alt="" />
          <p>Venue</p>
        </div>

				{/* <div className="team-size"></div> conditionally rendered */}
			</div>
			<div className='event-description'>
				<h1 className='font-syne font-bold text-xl'>
					Event Description
				</h1>
				<p className='font-spaceMono text-cardDescription'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Temporibus quidem distinctio aperiam nemo impedit facilis
					similique adipisci consequuntur doloremque, consectetur ea
					autem, possimus eveniet, provident tempora. Maiores nemo
					obcaecati facilis minima corrupti.
				</p>
			</div>
			<div className='event-agenda'>
				<h1 className='font-syne font-bold text-xl mb-2'>
					Event Agenda
				</h1>
				<ul className='font-spaceMono text-cardDescription list-disc flex flex-col space-y-5 ml-5'>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Suscipit saepe incidunt quam?
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Suscipit saepe incidunt quam?
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Suscipit saepe incidunt quam?
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Suscipit saepe incidunt quam?
					</li>
				</ul>
			</div>
		</div>
	);
}
