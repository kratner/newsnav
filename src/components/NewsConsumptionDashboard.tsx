"use client";

import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import type { NewsSource } from "@/types/news";
import { newsConsumptionData } from "@/types/news";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import styles from "@/styles/components/NewsConsumptionDashboard.module.scss";

const data: NewsSource[] = newsConsumptionData;

export default function NewsConsumptionDashboard() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const { theme, toggleTheme } = useTheme();

	const formatTooltip = (value: number): [string, string] => [
		`${value}%`,
		"Usage",
	];

	const chartColors = {
		text: theme === "dark" ? "#ffffff" : "#000000",
		background: theme === "dark" ? "#1f2937" : "#ffffff",
		bars: theme === "dark" ? "#60a5fa" : "#3b82f6",
	};

	return (
		<div className={styles.container} data-theme={theme}>
			<div className="flex justify-between items-center">
				<h1 className={styles.title} data-theme={theme}>
					News Consumption Methods
				</h1>
				<button
					type="button"
					onClick={toggleTheme}
					className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
					aria-label={
						theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
					}
				>
					{theme === "dark" ? (
						<Sun className="h-6 w-6 text-white" />
					) : (
						<Moon className="h-6 w-6 text-gray-900" />
					)}
				</button>
			</div>

			<p className={styles.subtitle} data-theme={theme}>
				How people receive their news across different platforms
			</p>

			<div className={styles.chartContainer} data-theme={theme}>
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
					>
						<XAxis
							dataKey="name"
							angle={-45}
							textAnchor="end"
							height={70}
							interval={0}
							tick={{ fill: chartColors.text }}
						/>
						<YAxis
							label={{
								value: "Percentage of Users (%)",
								angle: -90,
								position: "insideLeft",
								fill: chartColors.text,
							}}
							tick={{ fill: chartColors.text }}
						/>
						<Tooltip
							formatter={formatTooltip}
							contentStyle={{
								backgroundColor: chartColors.background,
								borderColor: chartColors.text,
								color: chartColors.text,
							}}
						/>
						<Bar
							dataKey="percentage"
							fill={chartColors.bars}
							onClick={(data: NewsSource) => setSelectedCategory(data.category)}
							className="cursor-pointer"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{selectedCategory && (
				<div className={styles.platformsList} data-theme={theme}>
					<h2 className="text-xl font-semibold mb-4">
						Popular Platforms -{" "}
						{
							data.find((d: NewsSource) => d.category === selectedCategory)
								?.name
						}
					</h2>
					<ul className="list-disc pl-6 space-y-2">
						{data
							.find((d: NewsSource) => d.category === selectedCategory)
							?.platforms?.map((platform: string) => (
								<li key={platform} className={styles.platformItem}>
									{platform}
								</li>
							))}
					</ul>
				</div>
			)}

			<div className={styles.footnotes} data-theme={theme}>
				<p>* Data based on recent surveys of news consumption habits</p>
				<p>* Users may consume news from multiple sources</p>
			</div>
			<div
				className={`${styles.copyright} mt-4 pt-4 border-t border-gray-700`}
				data-theme={theme}
			>
				<p className="text-sm text-center">
					© {new Date().getFullYear()} NewsNav. All rights reserved.
				</p>
			</div>
		</div>
	);
}
