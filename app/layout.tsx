import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Backlog ITMYHUB",
	description: "Backlog ITMYHUB Landing",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
				ym(94456909, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
			   });
			
              `,
					}}
				/>
			</head>
			<body className={inter.className}>{children}</body>
			<div>
				<img
					src="https://mc.yandex.ru/watch/94456909"
					style={{ position: "absolute", left: "-9999px" }}
					alt=""
				/>
			</div>
		</html>
	);
}
