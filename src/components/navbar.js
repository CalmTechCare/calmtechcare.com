import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks, site } from "../lib/site";
import { PhoneIcon } from "./icons";
import Mark from "./mark";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    // Close the menu after navigating, otherwise it stays open over the page.
    useEffect(() => {
        const close = () => setOpen(false);
        router.events.on("routeChangeComplete", close);
        return () => router.events.off("routeChangeComplete", close);
    }, [router.events]);

    const isCurrent = (href) =>
        href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

    return (
        <header id="bar">
            <div className="container inner">
                <Link href="/" className="brand" aria-label={`${site.name} home`}>
                    <Mark />
                    <span className="brand-text">
                        Calm<span className="brand-accent">Tech</span>Care
                    </span>
                </Link>

                <nav className="desktop" aria-label="Main">
                    <ul>
                        {navLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={isCurrent(item.href) ? "current" : ""}
                                    aria-current={isCurrent(item.href) ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href={site.phoneHref} className="callbtn">
                    <PhoneIcon />
                    <span>{site.phone}</span>
                </a>

                <button
                    type="button"
                    className="toggle"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="visually-hidden">
                        {open ? "Close menu" : "Open menu"}
                    </span>
                    <span className={`bars ${open ? "x" : ""}`} aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                </button>
            </div>

            <nav
                id="mobile-nav"
                className={`mobile ${open ? "show" : ""}`}
                aria-label="Main"
                hidden={!open}
            >
                <ul className="container">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={isCurrent(item.href) ? "current" : ""}
                                aria-current={isCurrent(item.href) ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <style jsx>{`
                #bar {
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: saturate(160%) blur(10px);
                    border-bottom: 1px solid var(--line);
                }
                .inner {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    min-height: 84px;
                }
                /* next/link renders a component, and styled-jsx only adds its
                   scoping class to plain DOM elements so this needs :global. */
                .inner :global(.brand) {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    margin-right: auto;
                    color: var(--ink);
                    font-size: 1.4rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    text-decoration: none;
                    white-space: nowrap;
                }
                .brand-accent {
                    color: var(--primary);
                }

                .desktop ul {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                .desktop :global(a) {
                    display: block;
                    padding: 10px 16px;
                    border-radius: var(--radius-pill);
                    color: var(--ink-muted);
                    font-size: 1.0625rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }
                .desktop :global(a:hover) {
                    background: var(--surface-sunken);
                    color: var(--ink);
                }
                .desktop :global(a.current) {
                    background: var(--primary-soft);
                    color: var(--primary-strong);
                }

                .callbtn {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    min-height: 52px;
                    padding: 12px 24px;
                    border-radius: var(--radius-pill);
                    background: var(--primary);
                    color: #fff;
                    font-size: 1.0625rem;
                    font-weight: 700;
                    white-space: nowrap;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                }
                .callbtn :global(svg) {
                    flex: none;
                    width: 1.15em;
                    height: 1.15em;
                }
                .callbtn:hover {
                    background: var(--primary-strong);
                    color: #fff;
                }

                .toggle {
                    display: none;
                    width: 56px;
                    height: 56px;
                    padding: 0;
                    background: var(--surface);
                    border: 1px solid var(--line-strong);
                    border-radius: 14px;
                    cursor: pointer;
                }
                .bars {
                    display: grid;
                    gap: 5px;
                    justify-items: center;
                }
                .bars i {
                    display: block;
                    width: 24px;
                    height: 3px;
                    border-radius: 2px;
                    background: var(--ink);
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }
                .bars.x i:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                .bars.x i:nth-child(2) {
                    opacity: 0;
                }
                .bars.x i:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }

                .mobile {
                    display: none;
                    border-top: 1px solid var(--line);
                    background: var(--surface);
                    padding-block: 12px 24px;
                }
                .mobile ul {
                    margin: 0;
                    padding-block: 0;
                    list-style: none;
                }
                .mobile :global(a) {
                    display: block;
                    padding: 18px 4px;
                    border-bottom: 1px solid var(--line);
                    color: var(--ink);
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-decoration: none;
                }
                .mobile :global(a.current) {
                    color: var(--primary-strong);
                }
                /* No divider under the last link; the header's own border
                   closes off the menu. */
                .mobile li:last-child :global(a) {
                    border-bottom: 0;
                }

                @media (max-width: 1080px) {
                    .desktop {
                        display: none;
                    }
                    .toggle {
                        display: grid;
                        place-items: center;
                    }
                    .mobile.show {
                        display: block;
                        animation: rise 0.25s ease-out both;
                    }
                }

                @media (max-width: 640px) {
                    .callbtn span:last-child {
                        display: none;
                    }
                    .callbtn {
                        padding: 12px 18px;
                        font-size: 1.35rem;
                    }
                    .brand-text {
                        font-size: 1.15rem;
                    }
                }
            `}</style>
        </header>
    );
};

export default Navbar;
