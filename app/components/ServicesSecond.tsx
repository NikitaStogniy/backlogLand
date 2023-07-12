const ServicesSecond = () => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-between m-auto md:w-3/4 py-24 px-4 md:px-24 gap-8">
			<div className="flex flex-col justify-between gap-0">
				<div className="font-bold -mb-10 text-4xl">за</div>
				<div className="font-bold -mb-10 m-auto text-9xl md:text-[500px]">
					3
				</div>
				<div className="font-bold ml-[80%] text-4xl">дня</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex flex-col max-w-[265px] gap-2">
					<div className="border-l-2 border-black pl-2">
						<p className="text-xl font-bold">анализируем</p>
						<p className="text-sm text-gray-500">
							чтобы Вам стали понятны составляющие продукта
						</p>
					</div>
					<p>
						определяем необходимые, желательные и возможные функциональности,
						которые соответствуют решаемым продуктом задачам
					</p>
				</div>
				<div className="flex flex-col max-w-[265px] gap-2">
					<div className="border-l-2 border-black pl-2">
						<p className="text-xl font-bold">систематизируем</p>
						<p className="text-sm text-gray-500">
							чтобы Вы получили детальное описание продукта
						</p>
					</div>
					<p>
						собираем функциональности в подробный бэклог (с опи-санием и
						разделением на этапы разработки), по кото-рому наши партнеры могут
						сформировать реалистичную оценку стоимости
					</p>
				</div>

				<div className="flex flex-col max-w-[265px] gap-2">
					<div className="border-l-2 border-black pl-2">
						<p className="text-xl font-bold">подсчитываем</p>
						<p className="text-sm text-gray-500">
							чтобы Вы нашли подходящую компанию-исполнителя
						</p>
					</div>
					<p>
						получаем релевантную оценку стоимости и стека технологий от топовых
						компаний-разработчиков, которых в нашей базе партнеров более 70
					</p>
				</div>

				<div className="flex flex-col max-w-[265px] gap-2">
					<div className="border-l-2 border-black pl-2">
						<p className="text-xl font-bold">суммируем</p>
						<p className="text-sm text-gray-500">
							чтобы Вам не пришлось думать о том, как объяснить
						</p>
					</div>
					<p>
						выдаем вам сформированные и полученные данные (бэклог + оценка) в
						виде исчерпывающего документа
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesSecond;
