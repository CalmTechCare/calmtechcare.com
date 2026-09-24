import Layout from "../components/layout";
import Cta from "../components/cta";
import { rates, site } from "../lib/site";

const Pricing = () => (
    <Layout
        title="Pricing"
        description="Plain, published rates for in-home technology help. No subscriptions, no contracts, and no surprise charges."
    >
        <section className="page-head">
            <div className="container measure">
                <span className="eyebrow">Pricing</span>
                {/* <h1>Plain prices, written down.</h1> */}
                <p className="lead">
                    Everything up front.
                </p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid--3 rates">
                        {rates.map((rate) => (
                            <article
                                className={`card rate ${rate.featured ? "featured" : ""}`}
                                key={rate.id}
                            >
                                {rate.featured}
                                <h2>{rate.name}</h2>
                                <p className="price">
                                    <strong>{rate.price}</strong>
                                    <h2 className="unit">{rate.unit}</h2>
                                </p>
                                <p className="summary">{rate.summary}</p>
                                <ul className="checklist">
                                    {rate.includes.map((line) => (
                                        <li key={line}>{line}</li>
                                    ))}
                                </ul>
                                <a
                                    href={rate.bookBy === "email" ? site.emailHref : site.phoneHref}
                                    className={`btn ${
                                        rate.featured ? "btn--primary" : "btn--ghost"
                                    } full`}
                                >
                                    {rate.bookBy === "email" ? "Email to book" : "Call to book"}
                                </a>
                            </article>
                        ))}
                    </div>

                    <p className="note">
                        Travel is included anywhere in {site.serviceArea}. Cash,
                        check, and all major cards accepted.
                    </p>
                </div>
            </section>
        </section>

        <Cta
            heading="Questions about cost?"
            body="Please reach out to me with any concerns."
        />

        <style jsx>{`
            .page-head {
                padding-block: clamp(48px, 7vw, 88px) clamp(8px, 2vw, 24px);
                background: radial-gradient(
                        760px 420px at 20% 0%,
                        var(--primary-soft) 0%,
                        transparent 65%
                    ),
                    var(--bg);
            }
            .rates {
                align-items: start;
            }
            .rate {
                position: relative;
                display: flex;
                flex-direction: column;
            }
            .rate h2 {
                font-size: clamp(1.3rem, 2.4vw, 1.55rem);
                margin-bottom: 0.4em;
            }
            .featured {
                border-color: var(--primary);
                box-shadow: var(--shadow-lift);
            }
            .badge {
                position: absolute;
                top: -16px;
                left: clamp(24px, 3.5vw, 36px);
                padding: 6px 18px;
                border-radius: var(--radius-pill);
                background: var(--primary);
                color: #fff;
                font-size: 0.85rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                text-transform: uppercase;
            }
            .price {
                display: flex;
                align-items: baseline;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 0.6em;
            }
            .price strong {
                font-size: clamp(2.4rem, 5vw, 3rem);
                font-weight: 800;
                letter-spacing: -0.03em;
                color: var(--primary-strong);
                line-height: 1;
            }
            .unit {
                color: var(--ink-muted);
                font-size: 1.05rem;
            }
            .summary {
                margin-bottom: 1.4em;
            }
            .rate :global(.checklist) {
                margin-bottom: 28px;
            }
            .full {
                width: 100%;
                margin-top: auto;
            }
            .note {
                margin-top: clamp(32px, 4vw, 48px);
                text-align: center;
                color: var(--ink-muted);
            }
        `}</style>
    </Layout>
);

export default Pricing;
