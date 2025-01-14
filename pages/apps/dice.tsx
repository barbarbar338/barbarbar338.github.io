import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";
import type { NextPage } from "next";
import { useState } from "react";
import { FaDice, FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const MinesweeperAppPage: NextPage = () => {
	const parser = useLocaleParser();

	const [dice, setDice] = useState<number>(1);
	const [dices, setDices] = useState<number[]>([]);
	const [history, setHistory] = useState<string[]>([]);

	const roll = () => {
		if (dices.length === 0) return toast.error(parser.get("add_die_first"));
		const results = dices.map(
			(dice) => Math.floor(Math.random() * dice) + 1,
		);
		const total = results.reduce((acc, curr) => acc + curr, 0);

		const result =
			results.length > 1
				? `${results.join(" + ")} = ${total}`
				: total.toString();

		setHistory([result, ...history]);
	};

	return (
		<Layout title={parser.get("apps_dice")}>
			<section className="min-h-screen bg-white px-4 py-10 text-center text-black dark:bg-gray-900 dark:text-white">
				<div className="container mx-auto mb-12">
					<div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-2">
						<div className="flex flex-col items-center ">
							<h1 className="text-2xl">
								{parser.get("add_a_new_dice")}
							</h1>
							<input
								type="number"
								className="w-full pl-4 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
								placeholder={parser.get("face_count")}
								value={dice}
								onChange={(e) => {
									const value = parseInt(e.target.value);
									if (value < 1) return setDice(1);

									setDice(parseInt(e.target.value) ?? 1);
								}}
								min={1}
							/>
							<button
								className="w-full h-10 mt-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease"
								onClick={() => {
									if (dice < 1 || isNaN(dice) || !dice)
										return toast.error(
											parser.get(
												"face_number_must_be_positive",
											),
										);
									setDices([...dices, dice]);
								}}
							>
								{parser.get("add")}
							</button>

							<h1 className="text-2xl mt-4">
								{parser.get("dices")}
							</h1>
							<ul>
								{!dices.length ? (
									<li className="flex items-center justify-between text-xl">
										<FaTimes className="mr-2 text-red-500" />
										{parser.get("no_dice")}
									</li>
								) : (
									dices.map((dice, idx) => (
										<li
											key={idx}
											className="flex items-center text-xl"
										>
											{idx + 1}.
											<FaDice className="mx-2" />
											{parser.get("die_list_item", {
												faces: dice.toString(),
											})}
											<button
												className="ml-2 text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-600 transition duration-300 ease"
												onClick={() =>
													setDices(
														dices.filter(
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

						<div className="flex flex-col items-center">
							<h1 className="text-2xl">
								{parser.get("roll_history")}
							</h1>
							<button
								className="w-full h-10 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 ease"
								onClick={roll}
							>
								{parser.get("roll")}
							</button>
							<ul>
								{!history.length ? (
									<li className="flex items-center justify-between text-xl">
										<FaTimes className="mr-2 text-red-500" />
										{parser.get("no_roll_history")}
									</li>
								) : (
									history.map((item, idx) => (
										<li
											key={idx}
											className="flex items-center text-xl"
										>
											{idx == 0 ? (
												<FaLongArrowAltRight className="mr-2" />
											) : (
												""
											)}
											{history.length - idx}.
											<FaDice className="mx-2" />
											{item}
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

export default MinesweeperAppPage;
