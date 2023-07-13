const About = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row w-full m-auto md:w-3/4 py-24 px-4 md:px-24 gap-8 justify-between">
			<div className="w-full lg:w-2/4">
				<h3 className="font-bold text-2xl py-4">
					Почему мы уверены, что вы получите качественный результат?
					<br />
					<br />
					Мы — команда опытных специалистов IT MY HUB.
				</h3>
				<p>
					Занимемся оценкой и анализом IT-продуктов на стадии предразработки
					Discovery, определяя целесообразность и жизнеспособность идеи без
					финансовых потерь на стадии разработки. Благодаря нашему опыту мы
					точно знаем, как формировать любую документацию для передачи
					разработчикам, в том числе бэклог.
				</p>
			</div>
			<h3 className="text-6xl font-bold">IT MY HUB</h3>
		</div>
	);
};

export default About;
