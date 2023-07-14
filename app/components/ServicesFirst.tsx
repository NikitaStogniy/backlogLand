const Services = () => {
	return (
		<div className="flex flex-col w-full m-auto lg:w-3/4 p-8 lg:py-24 gap-8">
			<h2 className="font-bold text-2xl">
				У вас возникла идея IT-продукта, но вы не знаете:
			</h2>
			<div className="flex flex-col md:flex-row gap-4 w-full items-center">
				<div className="text-center rounded-xl w-[265px] h-[120px] bg-[#DCF9F6] flex items-center justify-center w-full">
					с чего начать?
				</div>
				<div className="text-center rounded-xl  w-[265px] h-[120px] bg-[#DCF9F6] flex items-center justify-center w-full">
					сколько это будет
					<br /> стоить?
				</div>
				<div className="text-center rounded-xl w-[265px] h-[120px] bg-[#DCF9F6] flex items-center justify-center w-full">
					к кому
					<br /> обратиться?
				</div>
				<div className="text-center rounded-xl  w-[265px] h-[120px] bg-[#DCF9F6] flex items-center justify-center w-full">
					как объяснить задачи
					<br /> техническим специалистам?
				</div>
			</div>
		</div>
	);
};
export default Services;
