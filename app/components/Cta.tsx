"use client";

import Form from "./Form";

const Cta = () => {
	const list = [
		"Lean Canvas",
		"Диаграммы бизнес-процессов (BPMN)",
		"Детализированный бэклог",
		"Функциональный анализ конкурентов",
		"UI/UX-анализ конкурентов",
		"Вайрфреймы и User Flow продукта",
		"Анализ целевой аудитории",
		"Customer Development",
		"Roadmap разработки проекта",
		"Документы Vision & Scope",
	];

	return (
		<div className="flex flex-col md:flex-row w-full m-auto w-full xl:w-3/4 p-6 md:p-24 gap-8 justify-between">
			<div>
				<h3 className="text-2xl font-bold">
					Одного бэклога мало и хотите как в кейсах?
				</h3>
				<p className="text-xl py-4">
					Закажите у нас Discovery-фазу, и мы проведем полный набор работ и
					сформируем пакет документации, с которым можно пойти к любому
					разработчику:
				</p>
				<ul className="grid grid-cols-1 md:grid-cols-2 list-disc gap-2">
					{list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
};
export default Cta;
