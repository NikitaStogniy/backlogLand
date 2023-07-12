import Image from "next/image";
import Heading from "./components/Heading";
import ServicesFirst from "./components/ServicesFirst";
import ServicesSecond from "./components/ServicesSecond";
import Cost from "./components/Cost";
import About from "./components/About";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Partners from "./components/Partners";
import Cta2 from "./components/cta2";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default function Home() {
	return (
		<main>
			<Menu />
			<Heading />
			<ServicesFirst />
			<ServicesSecond />
			<Cost />
			<About />
			<Faq />
			<Cta />
			<Partners />
			<Cta2 />
			<Footer />
		</main>
	);
}
