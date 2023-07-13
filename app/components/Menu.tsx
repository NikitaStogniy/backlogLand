"use client";

import { useState } from "react";
import Button from "./Button";

const Menu = () => {
	const links = [
		{ text: "Главная", link: "#" },
		{ text: "Услуги", link: "#" },
		{ text: "Стоимость", link: "#" },
		{ text: "Экспертиза", link: "#" },
		{ text: "Кейсы", link: "#" },
		{ text: "Партнеры", link: "#" },
	];
	const [open, setOpen] = useState(Boolean);
	const handleOpen = () => {
		console.log("open");
		if (!open) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};
	return (
		<div className="fixed flex-col z-50 w-full md:w3/4 backdrop-blur-sm">
			<div className={open ? "bg-white" : ""}>
				<div className=" py-8 flex flex-row justify-between w-full align-center items-center px-4">
					<div className="text-2xl font-bold text-black ">ITMYHUB</div>
					<ul className="hidden lg:flex flex flex-row gap-8 xl:gap-16">
						{links.map((link) => (
							<li key={link.text}>
								<a
									className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
									href={link.link}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>

					<div className="z-100 block lg:hidden">
						<Button onClick={() => handleOpen()} type={"menu"} label={""} />
					</div>
					<div className="hidden lg:block">
						<Button type={"outline"} label={"Попробовать"} />
					</div>
				</div>
				{open && (
					<div className="block lg:hidden bg-white h-fit rounded-xl w-full">
						<ul className="flex flex-col items-center gap-2  py-4">
							{links.map((link) => (
								<li key={link.text}>
									<a
										className="text-gray-400 ease-in-out duration-300 hover:text-gray-600"
										href={link.link}
									>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
export default Menu;
