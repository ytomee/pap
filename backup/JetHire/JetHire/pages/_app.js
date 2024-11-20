import "../public/assets/css/style.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <Head>
                <title>Jet Hire</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
