import { Layout } from "@components/Layout";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { shimmer } from "@libs/shimmer";
import type { NextPage } from "next";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";

const overlays = [
	"balance",
	"bravery",
	"brilliance",
	"charmender",
	"ducklett",
	"espeon",
	"gyarados",
	"jigglypuff",
	"squirtle",
	"togepi",
	"vulpix",
];

const OverlayCreatorAppPage: NextPage = () => {
	const parser = useLocaleParser();

	const [url, setUrl] = useState("");
	const [overlay, setOverlay] = useState(overlays[0]);
	const [product, setProduct] = useState("");

	const onURLChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setProduct(
			`${CONFIG.API_URL}/canvas/overlay.png?overlay=${encodeURIComponent(
				overlay,
			)}&avatar=${encodeURIComponent(url)}`,
		);
	};

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setOverlay(e.target.value);
	};

	return (
		<Layout title={parser.get("apps_overlay_creator")}>
			<section className="min-h-screen bg-white px-4 py-10 text-black dark:bg-gray-900 dark:text-white">
				<h1
					className="mb-10 text-center font-heading text-4xl font-semibold"
					dangerouslySetInnerHTML={{
						__html: parser.get("overlay_creator"),
					}}
				/>
				<div className="mx-auto mb-12 w-full max-w-2xl">
					<form onSubmit={onSubmit}>
						<div className="mb-5">
							<input
								onChange={onURLChange}
								className="my-2 block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								type="text"
								placeholder={parser.get("avatar")}
							/>
							<select
								title={parser.get("overlay")}
								onChange={onSelectChange}
								className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
							>
								{overlays.map((overlay, idx) => (
									<option key={idx} value={overlay}>
										{overlay}
									</option>
								))}
							</select>
						</div>
						<div>
							<button
								aria-label="Submit"
								className="inline-block w-full rounded-xl bg-purple-600 px-8 py-4 font-semibold leading-none text-white hover:bg-purple-700"
							>
								{parser.get("submit")}
							</button>
						</div>
					</form>
					<div className="m-auto mt-5 h-96 w-96 bg-gray-500">
						{product && (
							<Image
								placeholder="blur"
								blurDataURL={shimmer(256, 256)}
								width={256}
								height={256}
								alt="Overlay"
								src={product}
								className="h-full w-full"
							/>
						)}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default OverlayCreatorAppPage;
