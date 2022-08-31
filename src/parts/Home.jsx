import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Layout titlePage={"Home"}>
			<header className="relative">
				<nav className="flex justify-between items-center">
					<Image
						src="/static/img/logo kampung organik@2x.png"
						alt="Logo"
						width={220}
						height={86}
						objectFit="contain"
					/>
					<div className="bg-primary-yellow py-3 rounded-lg absolute -right-[30px]">
						<Link href="/" passHref>
							<span className="mx-5 font-bold text-xl text-light-green">
								Home
							</span>
						</Link>
						<Link href="/" passHref>
							<span className="mx-5 font-bold text-xl cursor-pointer">
								Product
							</span>
						</Link>
						<Link href="/" passHref>
							<span className="mx-5 font-bold text-xl cursor-pointer">
								Team
							</span>
						</Link>
						<Link href="/" passHref>
							<span className="mx-5 font-bold text-xl cursor-pointer">
								Contact
							</span>
						</Link>
						<Link href="/" passHref>
							<span className="mr-72 font-bold text-xl">Blog</span>
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero  */}
			<section className="mt-3 flex justify-between relative">
				<div className="mt-16 z-10">
					<div className="bg-primary-yellow w-[58%] mb-9 py-1 px-6">
						<h1 className="text-[43px] font-extrabold leading-normal">
							Tingkatkan Produktivitas Sumber Pakan Ternak
						</h1>
					</div>
					<div className="bg-[#2F7B43] w-[52%] mb-9 py-2 px-6">
						<p className="text-white text-[17px] font-semibold leading-loose">
							Perkembangan dunia peternakan yang semakin pesat mendorong adanya
							sebuah inovasi untuk dapat terus menopang pertumbuhan yang ada,
							salah satunya adalah Hijauan Pakan Ternak.
						</p>
					</div>

					<button className="bg-[#003D10] py-2 px-4 mt-12 text-white font-bold rounded-md">
						Pelajari Lebih Lanjut
					</button>
				</div>
				<div className="w-[60%] absolute -right-[30px]">
					<Image
						src="/static/img/cara panen@2x.png"
						alt="Cara Panen"
						width={885}
						height={555}
					/>
				</div>
			</section>
			{/* Hero  */}

			<hr className="mt-16" />

			{/* Guide */}
			<section className="mt-20">
				<h1 className="text-[51px] font-semibold">
					Siapkan Pakan Sebelum Ber
					<span className="text-[#2F7B43]">ternak</span>
				</h1>
				<h5 className="mt-6 text-secondary-primary text-xl font-semibold w-2/5">
					Tinggalkan kebiasaan Ngarit dengan menanam Rumput!
				</h5>

				<div className="grid grid-cols-3 gap-3 mt-9">
					<article className="transition delay-150 duration-75 ease-in border-[1px] border-[#FDF901] rounded-2xl shadow-[#F0F2F4] shadow-xl hover:bg-primary-green text-[#263238] hover:text-white hover:border-white">
						<div className="p-10">
							<h6 className=" text-lg font-semibold mt-6 mb-5">Rumput</h6>
							<p className="w-10/12 mb-5 guide-paragraph-article">
								kebutuhan utama dalam memenuhi kebutuhan hewan ternak,
							</p>
							<button className="border-[1px] border-[#2F7B43] text-light-green py-2 px-2 rounded-md hover:bg-white">
								Pelajari Lebih Lanjut
							</button>
						</div>
					</article>
					<article className="transition delay-150 duration-75 ease-in border-[1px] border-[#FDF901] rounded-2xl shadow-[#F0F2F4] shadow-xl hover:bg-primary-green text-[#263238] hover:text-white hover:border-white">
						<div className="p-10">
							<h6 className="text-lg font-semibold mt-6 mb-5">Konsentrat</h6>
							<p className="w-10/12 mb-5 guide-paragraph-article">
								pakan yang memiliki kandungan serat kasar rendah. Nutrisi utama
								dari pakan konsentrat berupa energi dan protein.
							</p>
							<button className="border-[1px] border-[#2F7B43] text-light-green py-2 px-2 rounded-md hover:bg-white">
								Pelajari Lebih Lanjut
							</button>
						</div>
					</article>
					<article className="transition delay-150 duration-75 ease-in border-[1px] border-[#FDF901] rounded-2xl shadow-[#F0F2F4] shadow-xl hover:bg-primary-green text-[#263238] hover:text-white hover:border-white">
						<div className="p-10">
							<h6 className="text-lg font-semibold mt-6 mb-5">Hijauan/Daun</h6>
							<p className="w-10/12 mb-5 guide-paragraph-article">
								Semua bahan makanan yang berasal dari tanaman atau tumbuhan
								berupa daun-daunan. Yang termasuk ialah bangsa rumput,
								kacang-kacangan (leguminosa) dan tumbuh- tumbuhan lain.
							</p>
							<button className="border-[1px] border-[#2F7B43] text-light-green py-2 px-2 rounded-md hover:bg-white">
								Pelajari Lebih Lanjut
							</button>
						</div>
					</article>
				</div>
			</section>
			{/* Guide */}

			{/* Panen */}
			<section className="mt-36 text-center">
				<h1 className="text-[51px] font-semibold w-2/3 mx-auto">
					Swasembada <span className="text-[#2F7B43]">Pakan</span> dengan
					menanam <span className="text-[#2F7B43]">Rumput</span>
				</h1>

				<div className="flex flex-col justify-center items-center">
					<div className="shadow-xl p-3 mt-6 w-2/4 shadow-[#F0F2F4] border-[1px] border-[#FDF901] rounded-[19px]">
						<h2 className="text-[42px] font-semibold text-[#324148]">
							Panen Pertama: 4-6 Bulan
						</h2>
					</div>
					<div className="shadow-xl p-3 mt-6 w-2/4 shadow-[#F0F2F4] border-[1px] border-[#FDF901] rounded-[19px]">
						<h2 className="text-[42px] font-semibold text-[#324148]">
							Panen Berikutnya: 40 hari
						</h2>
					</div>
					<div className="shadow-xl p-3 mt-6 w-2/4 shadow-[#F0F2F4] border-[1px] border-[#FDF901] rounded-[19px]">
						<h2 className="text-[42px] font-semibold text-[#324148]">
							Masa Produktif: 9 tahun
						</h2>
					</div>
				</div>
			</section>
			{/* Panen */}

			{/* Product */}
			<section className="mt-36 mb-36 relative">
				<h1 className="text-[51px]  font-semibold">
					Tingkatkan <span className="text-[#2F7B43]">Produktivitas</span>{" "}
					<br /> Hasil <span className="text-[#2F7B43]">Maksimal</span> dengan
					Biaya Murah <br /> Dengan Menanam{" "}
					<span className="text-[#2F7B43]">Rumput</span>
				</h1>
				<div>
					<Carousel responsive={responsive} showDots>
						<div className="card-product-1 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Zanzibar
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput dengan Protein Tertinggi hingga 20%
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-2 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Red Napier
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput untukhewan ternak perah penghasil susu
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-3 rounded-3xl mx-5 p-12 mb-10 mt-10 absolute">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Gama Umami
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput Tanpa Bulu Halus hasil ciptaan dosen UGM
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
					</Carousel>
				</div>
			</section>
			{/* Product */}

			{/* Product */}
			<section className="mt-36 mb-36 relative">
				<h1 className="text-[51px] font-semibold">
					Cara Menanam dan <span className="text-[#2F7B43]">Rumput</span> dan{" "}
					<span className="text-[#2F7B43]">Hijauan</span>
				</h1>
				<div>
					<Carousel responsive={responsive} showDots>
						<div className="card-product-1 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Zanzibar
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput dengan Protein Tertinggi hingga 20%
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-2 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Red Napier
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput untukhewan ternak perah penghasil susu
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-3 rounded-3xl mx-5 p-12 mb-10 mt-10 absolute">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT RUMPUT
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Gama Umami
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Rumput Tanpa Bulu Halus hasil ciptaan dosen UGM
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
					</Carousel>
				</div>
			</section>
			{/* Product */}

			{/* Product */}
			<section className="mt-36 mb-36 relative">
				<h1 className="text-[51px] font-semibold">
					Hijauan untuk maksimalkan <br /> kebutuhan{" "}
					<span className="text-[#2F7B43]">
						{" "}
						Serat Kasar <br />
					</span>
					Hewan Ternak
				</h1>
				<div>
					<Carousel responsive={responsive} showDots>
						<div className="card-product-4 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT HIJAUAN
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Indigofera
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Protein Terbaik dalam Hijauan
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-5 rounded-3xl mx-5 p-12 mb-10 mt-10">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT HIJAUAN
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Kaliandra
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Pilihan Serat kasar untuk kambing
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
						<div className="card-product-6 rounded-3xl mx-5 p-12 mb-10 mt-10 absolute">
							<h6 className="tracking-[2.8px] font-semibold text-[#FDF901] shadow-primary-green">
								BIBIT HIJAUAN
							</h6>
							<hr className="w-24 mt-2 mb-2 h-2 rounded-2xl bg-white" />

							<h4 className="text-[31px] font-bold text-white mt-8 mb-4">
								Singkong Karet
							</h4>

							<p className="text-[#E2EFD2] mb-4">
								Tinggal Stek sob tanpa ribet
							</p>
							<button className="uppercase text-light-green bg-white py-2 px-4 rounded">
								pesan sekarang!
							</button>
						</div>
					</Carousel>
				</div>
			</section>
			{/* Product */}

			{/* Product */}
			<section className="mt-36 mb-36 relative">
				<h1 className="text-[51px] font-semibold">
					Cocok untuk Jenis
					<span className="text-[#2F7B43]"> Hewan Ternak</span>
				</h1>
				<div className="grid grid-cols-3 gap-3">
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/sapi.png"
								alt="sapi"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">Sapi</h1>
					</div>
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/kambing.png"
								alt="kambing"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">kambing</h1>
					</div>
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/kelinci.png"
								alt="kelinci"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">kelinci</h1>
					</div>
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/kuda.png"
								alt="kuda"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">kuda</h1>
					</div>
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/domba.png"
								alt="domba"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">domba</h1>
					</div>
					<div className="rounded-3xl mb-10 mt-10">
						<div className="flex justify-center">
							<Image
								src="/static/img/kerbau.png"
								alt="kerbau"
								width={350}
								height={350}
								objectFit="contain"
							/>
						</div>
						<h1 className="text-[45px] text-center font-semibold">kerbau</h1>
					</div>
				</div>
			</section>
			{/* Product */}
		</Layout>
	);
}
