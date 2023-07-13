import Button from "./Button";

const cta2 = () => {
	return (
		<div
			className="max-h-screen aspect-[9/16] md:aspect-video flex bg-no-repeat bg-cover justify-end items-end"
			style={{ backgroundImage: "url(/cta2.png)" }}
		>
			<div className="flex flex-col gap-4 m-[5%] max-w-[360px]">
				<div className="bg-[#0D4A42] rounded-xl p-10 w-fill flex flex-col gap-4 text-white ">
					<p className="font-bold text-2xl">
						Помни, что время —<br />
						деньги.
					</p>
					<p className="text-sm">
						Закажи бэклог + оценку своей идеи IT-продукта и уже через 3 дня
						начни её воплощение.
					</p>
				</div>
				<div className="bg-white rounded-xl p-10 flex flex-col gap-4 text-black w-fill">
					<div>
						<p className="font-bold text-5xl">9 999 ₽</p>
						<p className="text-sm text-right">
							цена действительна до 30.06.2023
						</p>
					</div>
					<Button type={"fill"} color="black" label={"Заказать консультацию"} />
				</div>
			</div>
		</div>
	);
};

export default cta2;
