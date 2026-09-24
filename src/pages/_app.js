import { Figtree } from "next/font/google";
import "../styles/globals.css";

// One humanist family throughout. Large x-height and open apertures, which
// keeps letterforms distinct for readers with low vision.
const figtree = Figtree({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={figtree.className}>
            <Component {...pageProps} />
        </div>
    );
}
