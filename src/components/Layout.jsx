import Head from "next/head";
import Image from "next/image";
import React from "react";
export default function Layout({ titlePage, children }) {
	return (
		<div>
			<Head>
				<title>{titlePage}</title>
			</Head>
			<main className="container mx-auto py-8">{children}</main>
			{/* Footer */}
			<footer className="bg-[#003D10] px-16 py-14 text-white flex items-center justify-between">
				<div>
					<Image
						src="/static/img/logo.png"
						alt="Kampung Organik"
						width={200}
						height={200}
						objectFit="contain"
					/>
				</div>
				<div>
					<p>&copy; Copyright 2022. Kampung Organik Farm Bandung.</p>
				</div>
			</footer>
			{/* Footer */}
		</div>
	);
}
