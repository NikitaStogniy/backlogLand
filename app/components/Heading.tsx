import { MouseEvent } from "react";
import Button from "./Button";

const Heading = () => {
	return (
		<div
			className="h-screen flex justify-start items-end"
			style={{ backgroundImage: "url(/headingBg.png)" }}
		>
			<div className="my-[10%] text-white  mx-[5%] flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<h1 className="font-bold text-3xl">
						IT-разработка
						<br />
						начинается здесь
					</h1>
					<p>
						от идеи до детального плана её
						<br /> реализации за 3 дня
					</p>
				</div>
				<Button type={"fill"} color="green" label={"Заказать консультацию"} />
			</div>
		</div>
	);
};

export default Heading;
