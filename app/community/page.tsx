import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { CommunityPageClient } from "./community-client";

export const metadata: Metadata = createMetadata({
	title: "Community",
	description:
		"Join the Better Auth community — contributors, Discord members, and ecosystem stats.",
});

export default async function CommunityPage() {
	const stats = {
		npmDownloads: 2_000_000,
		npmWeeklyHistory: [] as number[],
		githubStars: 26_000,
		contributors: 200,
		discordMembers: 10_000,
	};

	return <CommunityPageClient stats={stats} />;
}
