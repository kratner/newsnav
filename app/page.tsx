// app/page.tsx
import NewsConsumptionDashboard from "@/components/NewsConsumptionDashboard";

export default function Home() {
	return (
		<main className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
			<NewsConsumptionDashboard />
		</main>
	);
}
