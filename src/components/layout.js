import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { site } from "../lib/site";

const Layout = ({ children, title, description }) => {
    const pageTitle = title
        ? `${title} | ${site.name}`
        : `${site.name} - ${site.tagline}`;
    const pageDescription = description || site.tagline;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                {/* Bump ?v= when the icon changes; browsers cache favicons hard. */}
                <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
            </Head>

            <a className="skip-link" href="#main">
                Skip to main content
            </a>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
