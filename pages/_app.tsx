/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
//REDUX
import { Provider } from "react-redux";

//SWR
import { SWRConfig } from "swr";
import axios from "axios";

import { useStore } from "../lib/redux";

//STYLED COMPONETNS
import { ThemeProvider } from "styled-components";
import DarkTheme from "../styles/theme/dark";
import LightTheme from "../styles/theme/light";
import GlobalStyle from "../styles/global";

//LAYOUT
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyle />
				<SWRConfig
					value={{
						refreshInterval: 3000,
						fetcher: (url: string) => axios.get(url).then((res) => res.data),
					}}
				>
					<React.StrictMode>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</React.StrictMode>
				</SWRConfig>
			</ThemeProvider>
		</Provider>
	);
}
