import React from "react";
import { useState } from 'react';
import FAQCard from "../cards/FAQCard";

// Props type


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
			title: "This is demo title 1",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea laborum facere consectetur consequatur tempore placeat recusandae at magnam modi, ab eaque, corrupti molestias porro consequuntur adipisci? Numquam magnam quisquam earum."
		},
		{
			title: "This is demo title 2",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea laborum facere consectetur consequatur tempore placeat recusandae at magnam modi, ab eaque, corrupti molestias porro consequuntur adipisci? Numquam magnam quisquam earum."
		},
		{
			title: "This is demo title 3",
			desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea laborum facere consectetur consequatur tempore placeat recusandae at magnam modi, ab eaque, corrupti molestias porro consequuntur adipisci? Numquam magnam quisquam earum."
		}
	]

	return (
		<div className="min-h-screen grid place-items-center">
			<div className="px-[40px] max-w-[1200px]">
				{accordianData.map((data, index) => {
					return (
						<FAQCard 
							key= {index} 
							open= {index === open} 
							title= {data.title} 
							desc= {data.desc} 
							toggle={() => toggle(index)} 
						/>
					);
				})}
			</div>
		</div>
	);	
}

export default FAQs;
