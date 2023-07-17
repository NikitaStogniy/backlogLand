import { MouseEvent } from "react";
import Button from "./Button";

const Heading = () => {
	return (
		<div
			className="max-h-screen aspect-[9/16] md:aspect-[17/9] bg-center m-0 w-full flex justify-start items-end bg-cover bg-no-repeat"
			style={{ backgroundImage: "url(/headingBg.webp)" }}
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
