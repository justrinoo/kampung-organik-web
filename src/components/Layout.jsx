import Head from "next/head";
import React from "react";

export default function Layout({ titlePage, children }) {
	return (
		<div>
			<Head>
				<title>{titlePage}</title>
			</Head>
			<main className="container mx-auto py-8">{children}</main>
		</div>
	);
}
