import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

const Cta = ({
    heading = "Ready when you are",
    body = "Text or call me any time to describe the issue(s) you're experiencing and we'll set up a time for a session.",
}) => (
    <section className="cta">
        <div className="container inner">
            <div className="logo">
                <div className="frame">
                    <Image
                        src="/logo.svg"
                        alt={site.name}
                        width={112}
                        height={112}
                    />
                </div>
            </div>
            <h2>{heading}</h2>
            <p className="lead">{body}</p>
            <div className="btn-row">
                <a href={site.phoneHref} className="btn btn--lg call">
                    Call {site.phone}
                </a>
                <Link href="/contact" className="btn btn--lg btn--ghost">
                    Other ways to reach me
                </Link>
            </div>
        </div>

        <style jsx>{`
            .cta {
                padding-block: var(--section-y);
                background: linear-gradient(
                    160deg,
                    var(--primary-soft) 0%,
                    #e9f3f0 100%
                );
            }
            .inner {
                text-align: center;
            }
            .logo {
                display: flex;
                justify-content: center;
                /* Room for the glow, so the heading doesn't sit in it. */
                margin-bottom: 48px;
            }
            /* The logo's pale border is nearly the band's own color, so the
               frame gives it a green edge and a soft shadow. Done with
               box-shadow on a box shaped like the logo rather than a CSS
               filter on the image: Safari rasterizes filtered images at low
               resolution, which left jagged edges. */
            .frame {
                width: 112px;
                height: 112px;
                border-radius: 31.64%; /* rx 162 / 512 in logo.svg */
                /* Matches the logo's outer band, so no seam shows at its
                   anti-aliased edge. */
                background: #e1edea;
                box-shadow: 0 0 0 2px var(--primary),
                    /* tight bright glow, wide bloom, deeper shadow below */
                    0 0 24px rgba(63, 156, 135, 0.6),
                    0 0 24px 10px rgba(63, 156, 135, 0.35),
                    0 15px 56px rgba(47, 122, 107, 0.25);
            }
            .frame :global(img) {
                display: block;
            }
            .lead {
                max-width: 36rem;
                margin-inline: auto;
                color: var(--ink-muted);
            }
            .cta :global(.btn-row) {
                justify-content: center;
            }
            .call {
                background: var(--primary);
                color: #fff;
            }
            .call:hover {
                background: var(--primary-strong);
                color: #fff;
            }
        `}</style>
    </section>
);

export default Cta;
