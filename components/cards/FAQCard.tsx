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
		<div className="pt-[10px]">
			<div className="bg-primary py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-xl" onClick={toggle}>
				<p className="text-[22px] font-semibold">{title}</p>
				<div className="text-[30px]">
					{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</div>
			</div>

			<Collapse isOpened= {open}>
				<div className='bg-red px-[50px] pb-[20px] pt-[20px]'>
					{desc}
				</div>
			</Collapse>

		</div>
	);
}

export default FAQCard;
