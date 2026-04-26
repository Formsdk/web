"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import { createContext, use } from "react";

export interface PageEntry {
	name: string;
	url: string;
}

export const PagesContext = createContext<PageEntry[]>([]);

export function usePages() {
	return use(PagesContext);
}

export function DocsProvider({
	pages,
	children,
}: {
	pages: PageEntry[];
	children: ReactNode;
}) {
	return (
		<PagesContext value={pages}>
			<RootProvider>{children}</RootProvider>
		</PagesContext>
	);
}
