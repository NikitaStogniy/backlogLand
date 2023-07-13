import { MouseEvent } from "react";
import Button from "./Button";

const Cost = () => {
	const CostAdvantages = [
		"без обучения узкопрофильным специальностям",
		"без углубления в сферу бизнес-прогнозирования",
		"без долгого прохождения проб и ошибок",
		"поиск исполнителя в подарок",
	];
	return (
		<div className="w-full bg-black text-white py-16 px-4">
			<div className="flex flex-col md:flex-row  w-full justify-between m-auto md:w-3/4 gap-4">
				<div className="w-full md:w-2/4 flex flex-col gap-4">
					<p className="text-xl">
						Не тратьте время на интуитивные пробы и долгие оценочные суждения.
						Закажите бэклог от специалистов и уже через 3 дня начните воплощать
						идею по четко прописанному функционалу и приоритетности!
					</p>
					<div className="gap-[16px] grid grid-cols-1  max-w-sm md:max-w-xl">
						{CostAdvantages.map((text, index) => (
							<div
								key={index}
								className="flex flex-row gap-[16px] items-center"
							>
								<div
									className="h-[24px] w-[24px] bg-no-repeat bg-contain bg-center"
									style={{ backgroundImage: "url(/accept.svg)" }}
								/>
								<div className="text-gray-400 max-w-sm md:max-w-xl w-fit">
									{text}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-2xl font-bold">
						Не пропустите выгодное
						<br /> предложение
					</h3>
					<div>
						<div className="text-center w-full pr-16 text-[#0D4A42] font-bold text-4xl line-through mb-10 mt-4">
							20 000 ₽
						</div>
						<div
							className="absolute w-[180px] h-[54px] -mt-16 ml-32"
							style={{ backgroundImage: "url(/price.svg)" }}
						/>
					</div>
					<div className="bg-[#0D4A42] rounded-xl p-10 w-fit flex flex-col gap-4 text-white">
						<div>
							<p className="font-bold text-5xl">9 999 ₽</p>
							<p className="text-sm">цена действительна до 31.07.2023</p>
						</div>
						<Button
							type={"fill"}
							color="white"
							label={"Заказать консультацию"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cost;
