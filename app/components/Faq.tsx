"use client";

import { useState } from "react";

const Faq = () => {
	const [opened, setOpened] = useState<null | Number>(null);
	const toggle = (index: Number) => {
		if (opened == index) {
			setOpened(null);
		} else {
			setOpened(index);
		}
	};
	const FaqData = [
		{
			question: "кейс “ASSET”",
			answer:
				"За 1-2 месяца при работе с нашей командой «под ключ» вы получите подробный долгосрочный бизнес-план.",
		},
		{
			question: "кейс “Club500”",
			answer:
				"За 1-2 месяца при работе с нашей командой «под ключ» вы получите подробный долгосрочный бизнес-план.",
		},
		{
			question: "кейс “Smile”",
			answer:
				"За 1-2 месяца при работе с нашей командой «под ключ» вы получите подробный долгосрочный бизнес-план.",
		},
		{
			question: "кейс “Zack”",
			answer:
				"За 1-2 месяца при работе с нашей командой «под ключ» вы получите подробный долгосрочный бизнес-план.",
		},
	];
	const accordion = " text-gray-400 py-4 ease-in-out duration-300";
	const openedAccordion = "opacity-100 scale-10" + accordion;
	const closedAccordion = "opacity-0 scale-0 -mt-10" + accordion;
	return (
		<div>
			<div className="flex flex-col align-center w-full items-center px-4">
				<h3 className="font-bold text-3xl text-center py-4 md:py-8">
					Результаты наших клиентов:
				</h3>
				<div>
					{FaqData.map((faq, index) => (
						<div
							className="cursor-pointer flex flex-row gap-[16px] items-center"
							key={index}
							onClick={() => toggle(index)}
						>
							<div className="max-w-3xl py-4">
								<div className="font-semibold text-xl ">{faq.question}</div>
								<div
									className={
										opened === index ? openedAccordion : closedAccordion
									}
								>
									{faq.answer}
								</div>
								<hr />
							</div>
							<div className="-mt-10">
								<div
									className={
										opened == index
											? "transition ease-in-out rotate-180 h-[44px] w-[44px] bg-no-repeat bg-cover bg-center"
											: "transition ease-in-out  h-[44px] w-[44px] bg-no-repeat bg-cover bg-center"
									}
									style={{ backgroundImage: "url(/chevron.svg)" }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Faq;
