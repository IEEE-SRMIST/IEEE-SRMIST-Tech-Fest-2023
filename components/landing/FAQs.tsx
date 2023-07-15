
import { useState } from 'react';
import FAQCard from "./FAQCard";

const FAQs: React.FC = () => {
	const [open, setOpen] = useState<number | boolean>(false);

	const toggle = (index: number | boolean) => {
		if(open === index){
		 	return setOpen(false);
		}

		setOpen(index);
	}

	const accordianData = [
		{
			
			ques: "Who can participate?",
			ans: "Any high school student, undergraduate student or a graduate student across India (and beyond) can participate.",
		  },
		  {
			
			ques: "Do I need an idea to apply?",
			ans: "Yes, you need an idea to apply for Technozest.",
		  },
		  {
			
			ques: "How will the ideas be evaluated?",
			ans: "Ideas will be evaluated on the basis of Security, Technical Complexity, Design, Originality and Usefulness, based on the themes provided.",
		  },
		  {
			
			ques: "What can be the size of Team?",
			ans: "We believe in 'the bigger, the better'. Hence, a team can comprise of 2-4.",
		  },
		  {
			
			ques: "What if I don't have a team?",
			ans: "You can join our Discord server, and use #looking-for-teammate-👀 channel for finding team partners.",
		  },
		  {
			
			ques: "When will applications close?",
			ans: "Applications will close at 11:59 PM IST, 26 March.",
		  },
		  {
			
			ques: "Will there be anything for participants?",
			ans: "Yes. Yes. Yes!!! Since the event shall be held virtual, we shall try our best to ship the sponsor goodies directly to the team leader's residence.",
		  },
		  {
			
			ques: "Are there any registration charges?",
			ans: "Nope! It's FREE of cost. We just need your time and attention.",
		  },
		  {
			
			ques: "Why should I take part in Technozest?",
			ans: "Technozest has been crafted by a team of experienced people in their own field. We aim to bring you the best possible hackathon you have ever taken part in.",
		  },
		  {
			icon: '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="64" height="64" fill="url(#pattern9)"/><defs><pattern id="pattern9" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_565_725" transform="scale(0.0111111)"/></pattern><image id="image0_565_725" width="90" height="90" xlink:href="data:image/png;base64,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"/></defs></svg>',
			ques: "I have a question that's not here in the FAQ, what do I do?",
			ans: "You can reach us on our Discord server or email us at ieee@srmist.edu.in and we'll get back to you ASAP!",
		  },
		  {
			
			ques: "What do I need to do to participate?",
			ans: "You can apply using devfolio and join our Discord server.",
		  },
		  {
			
			ques: "Where I will get all my announcements?",
			ans: "All our announcements shall be made on our Discord server (Head to #event-announcements-📫 channel) and on our Twitter handle.",
		  },
		  {
			
			ques: "Do we get any certificate for participation?",
			ans: "Yes, you do get a certificate of participation if you are shortlisted initially.",
		  },
		  {
			
			ques: "With whom will the Project IP developed in the hackathon reside?",
			ans: "Project IPs developed in the hackathon will reside with the creators of the project.",
		  },
		  {
			
			ques: "Do we have any problem statements?",
			ans: "We do not give problem statements. There will be API prizes from multiple sponsors to build a hack on top of their APIs or SDKs. Teams are free to work on any of the themes of Technozest.",
		  },
		  {
			
			ques: "What is Cyberpunk theme?",
			ans: "We don't want you to just focus on given tracks. You can choose your own track as well, for your project.",
		  },
		  {
			
			ques: "How long is the hackathon?",
			ans: "It's a 36 hours hackathon.",
		  },
		];
	

	return (
		<div className="mb-20 flex flex-col justify-center items-center z-0">
			<h1 className="text-4xl font-syne font-extrabold mb-6">FAQs</h1>
			<div className="px-[40px] max-w-[1200px] ">
				{accordianData.map((data, index) => {
					return (
						<FAQCard 
							key= {index} 
							open= {index === open} 
							title= {data.ques} 
							desc= {data.ans} 
							toggle={() => toggle(index)} 
						/>
					);
				})}
			</div>
		</div>
	);	
}

export default FAQs;
