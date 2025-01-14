import { Dot } from "@components/Home/About/Dot";
import { FrameworkCard } from "@components/Home/About/FrameworkCard";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import type { FC, JSX } from "react";

export const About: FC = () => {
	const parser = useLocaleParser();
	const left: JSX.Element[] = [];
	const right: JSX.Element[] = [];

	for (let idx = 0; idx < CONFIG.FAVOURITE_FRAMEWORKS.length; idx++) {
		const framework = CONFIG.FAVOURITE_FRAMEWORKS[idx];
		const component = <FrameworkCard key={idx} framework={framework} />;

		if (idx % 2 == 0) left.push(component);
		else right.push(component);
	}

	return (
		<section id="about" className="bg-white py-10 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					<div className="mb-12 w-full lg:mb-0 lg:w-1/2">
						<div className="max-w-md lg:mx-auto">
							<span className="font-bold text-purple-600">
								{parser.get("being_a_title")}
							</span>
							<h2
								className="my-2 font-heading text-4xl font-bold text-black dark:text-white lg:text-5xl"
								dangerouslySetInnerHTML={{
									__html: parser.get("about_title"),
								}}
							/>
							<p
								className="mb-6 leading-loose text-gray-500"
								dangerouslySetInnerHTML={{
									__html: parser.get("bio", {
										startedAt: CONFIG.STARTED_AT.toString(),
										experience:
											CONFIG.EXPERIENCE.toString(),
									}),
								}}
							/>
							<ul className="font-bold text-gray-500">
								{CONFIG.IMPORTANT_SKILLS.map((skill, idx) => (
									<li key={idx} className="mb-4 flex">
										<Dot />
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="flex w-full space-x-4 lg:w-1/2">
						<div className="mb-8 w-1/2 lg:mb-0">{left}</div>
						<div className="w-1/2 md:px-4 lg:mt-20">{right}</div>
					</div>
				</div>
			</div>
		</section>
	);
};
