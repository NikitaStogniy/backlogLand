const Footer = () => {
	return (
		<div className="bg-black p-20 text-white/40 grid grid-cols-1 md:grid-cols-3">
			<div className="text-white text-4xl font-bold">ITMYHUB</div>
			<ul>
				<li>Главная</li>
				<li>Услуги</li>
				<li>Стоимость</li>
				<li>Экспертиза</li>
				<li>Кейсы</li>
				<li>Партнеры</li>
			</ul>
			<div className="flex flex-col justify-between">
				<div className="flex flex-col">
					<a href="#">Политика конфеденциальности</a>
					<a href="#">Публичная оферта </a>
				</div>
				<div className="flex flex-col">
					<a href="#">Публичная оферта </a>
					<p>© 2023</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
