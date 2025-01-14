import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";
import { useState } from "react";
import { FaBullhorn, FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const GiveawayAppPage: NextPage = () => {
	const parser = useLocaleParser();

	const [participants, setParticipants] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);

	const roll = () => {
		const participantsArray = participants
			.split("\n")
			.filter((item) => item.trim() !== "");

		if (!participantsArray.length)
			return toast.error(parser.get("no_participants_error"));

		const winner =
			participantsArray[
				Math.floor(Math.random() * participantsArray.length)
			];

		const result = parser.get("giveaway_result", {
			winner,
			participants: participantsArray.length.toString(),
			date: new Date().toLocaleString(),
		});
		setHistory([result, ...history]);
	};

	return (
		<Layout title={parser.get("apps_giveaway")}>
			<section className="min-h-screen bg-white px-4 py-10 text-center text-black dark:bg-gray-900 dark:text-white">
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-2">
						<div className="flex flex-col items-center ">
							<h1 className="text-2xl">
								{parser.get("participants")}
							</h1>
							<p>{parser.get("participants_description")}</p>
							<textarea
								className="w-full pl-4 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
								placeholder={parser.get("participants")}
								value={participants}
								rows={10}
								onChange={(e) =>
									setParticipants(e.target.value)
								}
							/>
						</div>
						<div className="flex flex-col items-center">
							<h1 className="text-2xl">
								{parser.get("winners")}
							</h1>
							<button
								className="w-full h-10 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 ease"
								onClick={roll}
							>
								{parser.get("giveaway_roll")}
							</button>
							<ul>
								{!history.length ? (
									<li className="flex items-center justify-between text-xl">
										<FaTimes className="mr-2 text-red-500" />
										{parser.get("no_giveaway_history")}
									</li>
								) : (
									history.map((item, idx) => (
										<li
											key={idx}
											className="flex items-center text-xl bg-gray-700 p-2 rounded mt-2"
										>
											{idx == 0 ? (
												<FaLongArrowAltRight />
											) : (
												""
											)}
											<FaBullhorn className="mx-2 text-green-500" />
											<span
												dangerouslySetInnerHTML={{
													__html: item,
												}}
											/>
											<button
												className="ml-2 text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-600 transition duration-300 ease"
												onClick={() =>
													setHistory(
														history.filter(
															(_, i) => i !== idx,
														),
													)
												}
											>
												<FaTimes />
											</button>
										</li>
									))
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default GiveawayAppPage;
