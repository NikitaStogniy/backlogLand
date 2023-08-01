"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { MouseEvent, useState } from "react";

type Inputs = {
	name: string;
	phone: string;
	email: string;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const [done, setDone] = useState(false);
	const sendContactForm = async (data: any) =>
		await fetch("/api/mail", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json; charset=utf8",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			setDone(true);
		});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		sendContactForm(data);
	};
	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form
			className="bg-[#DCF9F6] rounded-xl px-10 py-12 gap-4 flex flex-col w-full"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col">
				<label className="text-lg">Имя:*</label>
				<input
					className="border-b-2 border-[#2EB1A8] bg-transparent py-2 px-1"
					defaultValue=""
					{...register("name", { required: true })}
				/>
				{errors.name && <span>Это поле обязательно для заполнения</span>}
			</div>

			<div className="flex flex-col">
				<label className="text-lg">Телефон:*</label>
				<input
					className="border-b-2 border-[#2EB1A8] bg-transparent placeholder:text-[#2EB1A8] py-2 px-1"
					placeholder="(123) 456-7890"
					defaultValue=""
					{...register("phone", { required: true })}
				/>
				{errors.phone && <span>Это поле обязательно для заполнения</span>}
			</div>

			<div className="flex flex-col">
				<label className="text-lg">Email:*</label>
				<input
					className="border-b-2 border-[#2EB1A8] bg-transparent placeholder:text-[#2EB1A8] py-2 px-1"
					placeholder="jane.doe@yahoo.com"
					defaultValue=""
					{...register("email", { required: true })}
				/>
				{errors.email && <span>Это поле обязательно для заполнения</span>}
			</div>

			{/* errors will return when field validation fails  */}

			<p className="text-sm text-[#2EB1A8]">
				Отправляя заявку, я даю согласие на обработку своих персональных данных
			</p>
			<p className="text-sm text-[#2EB1A8] my-4">
				Минимальная цена Discovery-фазы 300 тыс. руб. Для каждого проекта
				рассчитывается индивидуально.
			</p>
			{done ? (
				<div className="w-full text-center center">
					Спасибо, мы скоро с вами свяжемся!
				</div>
			) : (
				<button
					type="submit"
					className="w-fit px-[28px] py-[12px] rounded-xl font-medium ease-in-out duration-300 flex flex-row gap-[8px] flex-row whitespace-nowrap flex-nowrap shadow-2xl w-full shadow-violet-500/10 bg-black text-[#DCF9F6] hover:bg-violet-600 flex justify-center hover:shadow-violet-500/90 w-auto"
				>
					Заказать консультацию
				</button>
			)}
		</form>
	);
};
export default Form;
