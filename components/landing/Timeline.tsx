import { MdOutlineEventNote } from "react-icons/md";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
	const timelineElements = [
		{
			id: 1,
			title: "Frontend Developer",
			location: "Dragontail, Ascana",
			description:
				"Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
			date: "August 2016 - present",
		},
		{
			id: 2,
			title: "Backend Developer",
			location: "Skystead, Craonia",
			description:
				"Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
			date: "June 2013 - August 2016",
		},
		{
			id: 3,
			title: "Quality Assurance Engineer",
			location: "South Warren, Geshington",
			description:
				"Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
			date: "September 2011 - June 2013",
		},
		{
			id: 4,
			title: "Oak Ridge College",
			location: "South Warren, Geshington",
			description:
				"Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
			date: "September 2011",
		},
		{
			id: 5,
			title: "Hawking College",
			location: "Skystead, Craonia",
			description:
				"College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
			date: "2007 - 2011",
		},
		{
			id: 6,
			title: "Marble Hills Grammar School",
			location: "Dragontail, Ascana",
			description:
				"Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
			date: "2003 - 2007",
		},
	];

	const icon = {
		background: "#14094fe6",
		color: "#1E429F",
	};

	return (
		<div>
			<div className="flex justify-center items-center">
				<h1 className="text-7xl">TimeLine</h1>
			</div>
			<div className="mt-10">
				<VerticalTimeline
					layout="1-column-left"
					lineColor={icon.color}
				>
					{timelineElements.map((element) => {
						return (
							<VerticalTimelineElement
								key={element.id}
								date={element.date}
								dateClassName="date"
								icon={<MdOutlineEventNote />}
								contentStyle={{
									background: "#14094fe6",
								}}
								iconStyle={{ background: "#14094fe6" }}
							>
								<h3 className="vertical-timeline-element-title text-3xl">
									{element.title}
								</h3>
								<h5 className="vertical-timeline-element-subtitle text-2xl">
									{element.location}
								</h5>
								<p id="description">
									{element.description}
								</p>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
