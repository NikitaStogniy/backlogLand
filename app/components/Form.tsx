"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import { MouseEvent } from "react";

type Inputs = {
	example: string;
	exampleRequired: string;
};

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
					{...register("exampleRequired", { required: true })}
				/>
			</div>

			<div className="flex flex-col">
				<label className="text-lg">Телефон:*</label>
				<input
					className="border-b-2 border-[#2EB1A8] bg-transparent placeholder:text-[#2EB1A8] py-2 px-1"
					placeholder="(123) 456-7890"
					defaultValue=""
					{...register("exampleRequired", { required: true })}
				/>
			</div>

			<div className="flex flex-col">
				<label className="text-lg">Email:*</label>
				<input
					className="border-b-2 border-[#2EB1A8] bg-transparent placeholder:text-[#2EB1A8] py-2 px-1"
					placeholder="jane.doe@yahoo.com"
					defaultValue=""
					{...register("exampleRequired", { required: true })}
				/>
			</div>

			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && (
				<span>Это поле обязательно для заполнения</span>
			)}
			<p className="text-sm text-[#2EB1A8]">
				Отправляя заявку, я даю согласие на обработку своих персональных данных
			</p>
			<p className="text-sm text-[#2EB1A8]">
				Минимальная цена Discovery-фазы 300 тыс. руб. Для каждого проекта
				рассчитывается индивидуально.
			</p>
			<Button type={"fill"} color="black" label={"Заказать консультацию"} />
		</form>
	);
};
export default Form;
