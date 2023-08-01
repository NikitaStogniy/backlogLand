"use client";

import { HambergerMenu } from "iconsax-react";

interface ButtonProps {
	type: "fill" | "outline" | "menu";
	label: string;
	color?: "white" | "black" | "green";
	link?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	type,
	label,
	color,
	onClick,
	link,
}) => {
	let classVar =
		"w-fit px-[28px] py-[12px] rounded-xl font-medium ease-in-out duration-300 flex flex-row gap-[8px] flex-row whitespace-nowrap flex-nowrap";
	if (type == "fill" && color == "black") {
		classVar +=
			"shadow-2xl w-full shadow-violet-500/10 bg-black text-[#DCF9F6] hover:bg-violet-600 flex justify-center hover:shadow-violet-500/90 w-auto";
	} else if (type == "fill" && color == "white") {
		classVar +=
			"shadow-2xl shadow-white/30 bg-white text-gray-800 hover:shadow-white/90 ";
	} else if (type == "fill" && color == "green") {
		classVar +=
			"shadow-2xl shadow-white/30 bg-[#0D4A42] text-white hover:shadow-[#0D4A42]/90 ";
	} else if (type == "outline") {
		classVar += " border border-gray-300 text-gray-300 hover:border-gray-500";
	}
	if (link) {
		return (
			<a href={link} className={classVar}>
				{type == "menu" ? <HambergerMenu size={24} color="#0D4A42" /> : ""}
				{label}
			</a>
		);
	}
	return (
		<button onClick={onClick} className={classVar}>
			{type == "menu" ? <HambergerMenu size={24} color="#0D4A42" /> : ""}
			{label}
		</button>
	);
};
export default Button;
