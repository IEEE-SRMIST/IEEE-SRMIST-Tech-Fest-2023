import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React from "react";
import { Collapse } from "react-collapse";

interface Props {
    toggle: (index: any) => void;
	title: string;
	open: any;
	desc: string;
}

const FAQCard: React.FC<Props> = ({ toggle, title, open, desc }) => {
	return(
		<div className="pb-3">
			<div className="relative z-10 bg-primary text-white border-2 border-white p-5 flex justify-between items-center cursor-pointer rounded-lg" onClick={toggle}>
				<p className="text-md font-semibold">{title}</p>
				<div className="text-md">
					{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</div>
			</div>

			<Collapse isOpened= {open}>
				<div className='-z-10 bg-white/30 text-sm -translate-y-5 rounded-lg px-5 pb-5 pt-10'>
					{desc}
				</div>
			</Collapse>

		</div>
	);
}

export default FAQCard;
