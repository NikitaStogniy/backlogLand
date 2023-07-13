import Image from "next/image";

const Partners = () => {
	return (
		<div className="flex flex-col align-center w-full">
			<h3 className="font-bold text-3xl text-center py-8">Наши партнеры</h3>
			<div className=" w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 px-20 justify-items-center center items-center align-center justify-center">
					<Image
						width={265}
						height={180}
						alt="Club500 Logo"
						src={"/club500.png"}
					/>
					<Image width={265} height={180} alt="Liis Logo" src={"/liis.png"} />
					<Image
						width={265}
						height={180}
						alt="blitsguard Logo"
						src={"/blitsguard.png"}
					/>
					<Image
						width={265}
						height={78}
						alt="wemakefab Logo"
						src={"/wemakefab.png"}
					/>
					<div className="text-2xl rounded-xl bg-[#DCF9F6] font-bold text-center px-8 m-2 py-6 max-w-[360px]">
						Наши партнеры
					</div>
					<Image
						width={265}
						height={78}
						alt="moybusiness Logo"
						src={"/moybusiness.png"}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3  px-20 items-center justify-items-center">
					<Image
						width={265}
						height={180}
						alt="blitsguard Logo"
						src={"/napoleonit.png"}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2  justify-items-center">
						<Image
							width={265}
							height={180}
							alt="blitsguard Logo"
							src={"/bottom2.png"}
						/>
						<Image
							width={265}
							height={180}
							alt="blitsguard Logo"
							src={"/bottom3.png"}
						/>
					</div>
					<Image
						width={265}
						height={180}
						alt="blitsguard Logo"
						src={"/vaznayariba.png"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Partners;
