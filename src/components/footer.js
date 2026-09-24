import Link from "next/link";
import Mark from "./mark";
import { navLinks, site } from "../lib/site";

const Footer = () => (
    <footer id="foot">
        <div className="container">
            <div className="top">
                <div className="about">
                    <p className="name">{site.legalName}</p>
                    <p className="desc">{site.tagline}</p>
                    <p className="desc">Serving {site.serviceArea}.</p>
                </div>

                <div className="col">
                    <h3>Pages</h3>
                    <ul>
                        {navLinks.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href={site.phoneHref}>{site.phone}</a>
                        </li>
                        <li>
                            <a href={site.emailHref}>{site.email}</a>
                        </li>
                        <li className="plain">Text or call {site.hours}</li>
                    </ul>
                </div>
            </div>

            <div className="bottom">
                <p className="legal">
                    &copy; {new Date().getFullYear()} {site.legalName}
                    {" - "}
                    <a href="https://blakeboris.com">{site.owner}</a>
                </p>
                <Mark />
            </div>
        </div>

        <style jsx>{`
            #foot {
                padding-block: clamp(48px, 7vw, 80px) 40px;
                background: var(--ink);
                color: #cddbd8;
            }
            .top {
                display: grid;
                gap: clamp(32px, 5vw, 64px);
                /* min() keeps the first column from forcing the grid wider
                   than the viewport on narrow screens. */
                grid-template-columns: minmax(min(260px, 100%), 1.4fr) repeat(
                        auto-fit,
                        minmax(min(180px, 100%), 1fr)
                    );
                padding-bottom: 40px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.14);
            }
            .name {
                margin-bottom: 0.5em;
                color: #fff;
                font-size: 1.35rem;
                font-weight: 800;
                letter-spacing: -0.02em;
            }
            .desc {
                margin-bottom: 0.5em;
                max-width: 32ch;
            }
            h3 {
                margin-bottom: 0.9em;
                color: #fff;
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.06em;
                text-transform: uppercase;
            }
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            li {
                margin-bottom: 12px;
            }
            .plain {
                color: #9db3ae;
            }
            #foot :global(a) {
                color: #cddbd8;
                text-decoration: none;
            }
            #foot :global(a:hover) {
                color: #fff;
                text-decoration: underline;
            }
            .bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                padding-top: 28px;
            }
            .legal {
                margin: 0;
                color: #9db3ae;
                font-size: 0.95rem;
            }

            @media (max-width: 760px) {
                .top {
                    grid-template-columns: 1fr;
                    gap: 32px;
                }
                .desc {
                    display: none;
                }
            }
        `}</style>
    </footer>
);

export default Footer;
