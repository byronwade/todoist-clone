"use client";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<RecoilRoot>
					<ChakraProvider>
						<Header />
						{children}
						<Content />
					</ChakraProvider>
				</RecoilRoot>
			</body>
		</html>
	);
}
