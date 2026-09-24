import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Cta from "../components/cta";
import { site } from "../lib/site";

const highlights = [
    {
        icon: "\u{1F4F1}",
        title: "Phones, tablets, & computers",
        body: "Text messages, emails, video calls, and whatever else stopping you from connecting with loved ones.",
    },
    {
        icon: "\u{1F6E1}\u{FE0F}",
        title: "Scam protection and online security",
        body: "Spotting scam calls and emails, preventing robocalls, and staying safe and secure online.",
    },
    {
        icon: "\u{1F4FA}",
        title: "Other gadgets and fixes",
        body: "Streaming service issues, the printer that won't print, and the app that updated without your permission.",
    },
];

const steps = [
  
    {
        n: "2",
        title: "",
        body: "",
    },
    {
        n: "3",
        title: "",
        body: "",
    },
];

const Index = () => (
    <Layout
        description={`${site.owner} helps older adults in ${site.serviceArea} with phones, tablets, computers, and everything in between. Patient, in-person, and priced plainly.`}
    >
        {/* ---------------------------------------------------------- Hero */}
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-copy rise">
                    <h1>
                        Hi, I&rsquo;m <span className="hl">Blake Boris</span>.
                    </h1>
                    {/* <span className="eyebrow">Proudly serving {site.serviceArea}</span> */}
                    <p className="lead">
                        I help older adults feel at home with today's technology.
                        I meet with you to fix and explain things plainly and to ensure you feel supported.
                    </p>
                    <div className="btn-row">
                        <a href={site.phoneHref} className="btn btn--lg btn--primary">
                            Call {site.phone}
                        </a>
                        <Link href={site.emailHref} className="btn btn--lg btn--ghost">
                            Email me
                        </Link>
                    </div>
                </div>

                <div className="hero-pic rise rise-2">
                    <div className="ring">
                        <div className="photo">
                            <Image
                                src="/blapCircle.webp"
                                alt={`${site.owner}, the owner of ${site.legalName}`}
                                fill
                                priority
                                sizes="(max-width: 900px) 260px, 350px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* -------------------------------------------------- Reassurance */}
        {/* <section className="strip">
            <div className="container strip-grid">
                <p>
                    <strong>No jargon.</strong> English, plain and simple.
                </p>
                <p>
                    <strong>No rushing.</strong> We go at your pace.
                </p>
                <p>
                    <strong>No contracts.</strong> Nothing to sign up for.
                </p>
                <p>
                    <strong>No silly questions.</strong> Ask me anything twice.
                </p>
            </div>
        </section> */}

        {/* ------------------------------------------------ What I do */}
        <section className="section">
            <div className="container">
                <br/>
                <h2>How can I help?</h2>
                <p>{site.services}</p>

                <div className="grid grid--2">
                    {highlights.map((item) => (
                        <div className="card" key={item.title}>
                            <div className="card__icon" aria-hidden="true">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>

                <div className="btn-row">
                    <Link href="/services" className="btn btn--ghost">
                        See the full list
                    </Link>
                </div>
            </div>
        </section>

        {/* ------------------------------------------------- How it works */}
        <section className="section section--sunken">
            <div className="container">
                <div className="section-head">
                    <h2>How a session works</h2>
                </div>

                <ol className="steps grid grid--3">
                    <li className="card" key="1">
                        <span className="num" aria-hidden="true">
                            1
                        </span>
                        <h3>Call or text me</h3>
                        <p>Tell me what's giving you trouble, and we'll schedule a session. Don't worry about explaining issues in detail over the phone.</p>
                    </li>
                    <li className="card" key="2">
                        <span className="num" aria-hidden="true">
                            2
                        </span>
                        <h3>I come to you</h3>
                        <p>We meet wherever you are most comfortable to sit down together and work through any tech problems you're experiencing.</p>
                    </li>
                    <li className="card" key="3">
                        <span className="num" aria-hidden="true">
                            3
                        </span>
                        <h3>You keep the notes</h3>
                        <p>We collaborate and write down the steps to fix the issue on a printed document so you can do it yourself next time.</p>
                    </li>
                </ol>
                
            </div>
        </section>

        {/* ------------------------------------------------------- Promise */}
        <section className="section">
            <div className="container promise">
                <div className="measure">
                    <h2>You are not bad at this.</h2>
                    <p className="lead">
                        Technology is constantly evolving, and guidance
                        isn't always easy to find. When something doesn't work,
                        frustration builds quickly, and for good reason.
                    </p>
                    <p className="lead">
                        I started {site.legalName} to provide personalized
                        tech support that not everyone has close at hand.
                    </p>
                </div>

                <ul className="list">
                    <li className="list-item">I will never talk down to you.</li>
                    <li className="list-item">I will never try sell you something you don't need.</li>
                    <li className="list-item">We will create simple instructions you can keep and reuse.</li>
                    <li className="list-item">We will pick the best option for you if there are multiple solutions.</li>
                </ul>
            </div>
        </section>

        <Cta />

        <style jsx>{`
            .hero {
                padding-block: clamp(48px, 8vw, 96px) var(--section-y);
                background: radial-gradient(
                        900px 520px at 78% 14%,
                        var(--primary-soft) 0%,
                        transparent 62%
                    ),
                    var(--bg);
            }
            .hero-grid {
                display: grid;
                gap: clamp(32px, 5vw, 72px);
                grid-template-columns: 1.25fr 0.75fr;
                align-items: center;
            }
            .hero-copy h1 {
                margin-bottom: 0.35em;
            }
            .hl {
                color: var(--primary-strong);
            }
            .hero-copy .lead {
                max-width: 32rem;
                font-size: clamp(1.2rem, 2.3vw, 1.5rem);
                color: var(--ink-muted);
            }
            .ul {
                margin: none;
            }
            .list {
                margin-bottom: 0em;
            }
            .list-item {
                margin-bottom: 0.85em;
            }

            .hero-pic {
                display: flex;
                justify-content: center;
                /* Without this, the default stretch alignment grows the
                   circle to the grid row height and turns it into an oval. */
                align-items: center;
            }
            /* Width and height are set explicitly and equal. aspect-ratio plus
               a percentage-height image rendered as an oval in iOS WebKit. */
            .ring {
                --size: min(350px, 28vw);
                flex: none;
                width: var(--size);
                height: var(--size);
                border-radius: 50%;
                padding: 12px;
                background: var(--surface);
                box-shadow: var(--shadow-lift);
            }
            .photo {
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
            }
            .photo :global(img) {
                border-radius: 50%;
                object-fit: cover;
            }

            .strip {
                padding-block: 28px;
                background: var(--surface);
                border-block: 1px solid var(--line);
            }
            .strip-grid {
                display: grid;
                gap: 16px 40px;
                grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            }
            .strip-grid p {
                margin: 0;
                color: var(--ink-muted);
                font-size: 1.0625rem;
            }
            .strip-grid strong {
                display: block;
                color: var(--ink);
            }

            .steps {
                margin: 0;
                padding: 0;
                list-style: none;
                counter-reset: step;
            }
            .num {
                display: grid;
                place-items: center;
                width: 56px;
                height: 56px;
                margin-bottom: 20px;
                border-radius: 50%;
                background: var(--primary);
                color: #fff;
                font-size: 1.5rem;
                font-weight: 800;
            }

            .promise {
                display: grid;
                gap: clamp(32px, 5vw, 72px);
                grid-template-columns: 1.2fr 0.8fr;
                align-items: center;
            }
            .promise :global(.checklist li) {
                font-size: 1.125rem;
            }

            @media (max-width: 900px) {
                .hero-grid,
                .promise {
                    grid-template-columns: 1fr;
                }
                .hero-grid {
                    text-align: center;
                }
                .hero-pic {
                    order: -1;
                }
                .ring {
                    --size: min(260px, 70vw);
                }
                .hero-copy .lead {
                    margin-inline: auto;
                }
                .hero-copy :global(.btn-row) {
                    justify-content: center;
                }
                .hero-copy :global(.btn) {
                    width: 100%;
                }
            }
        `}</style>
    </Layout>
);

export default Index;
