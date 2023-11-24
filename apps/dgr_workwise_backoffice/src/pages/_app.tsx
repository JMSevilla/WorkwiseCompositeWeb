import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { CssBaseline, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { context } from 'utils'
import './index.css'
import CatalogLayout from "./Layouts/CatalogLayout";

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Stack sx={{ height: '100vh' }}>
        {getLayout(<Component {...pageProps} />)}
        </Stack>
    </ThemeProvider>
  )
}