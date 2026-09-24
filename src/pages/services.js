import Link from "next/link";
import Layout from "../components/layout";
import Cta from "../components/cta";
import { site } from "../lib/site";

const groups = [
    {
        icon: "\u{1F4DE}",
        title: "Keeping in touch",
        items: [
            "Video calls with children and grandchildren",
            "Texts, photos, and group messages",
            "Email that has stopped working or filled up",
        ],
    },
    {
        icon: "\u{1F50D}",
        title: "Easier to see & hear",
        items: [
            "Bigger text, louder sound, and brighter screens",
            "Hearing aid and Bluetooth pairing",
            "Voice commands instead of typing",
        ],
    },
    {
        icon: "\u{1F6E1}\u{FE0F}",
        title: "Staying safe",
        items: [
            "Spotting scams and blocking robocalls",
            "What to do if you already clicked something",
            "Keeping passwords safe and findable",
        ],
    },
    {
        icon: "\u{1F4BB}",
        title: "Phones, computers & tablets",
        items: [
            "Slow computers and endless update prompts",
            "Files and photos you cannot find",
            "Setting up something new, out of the box",
        ],
    },
    {
        icon: "\u{1F4FA}",
        title: "Around the home",
        items: [
            "TV remotes, streaming, and finding your channel",
            "Wi-Fi and printers that will not cooperate",
            "Smart speakers, picture frames, and medical alert devices",
        ],
    },
    {
        icon: "\u{1F91D}",
        title: "Sorting things out",
        items: [
            "Bills and subscriptions you did not mean to start",
            "Deciding whether you actually need a new device",
            "Customer support calls, with me on your side",
        ],
    },
];

const Services = () => (
    <Layout
        title="Services"
        description={site.services}
    >
        <section className="page-head">
            <div className="container measure">
                <span className="eyebrow">Services</span>
                {/* <h1>What I help with</h1> */}
                <p className="lead">
                    {site.services}
                </p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid--3">
                        {groups.map((group) => (
                            <article className="card" key={group.title}>
                                <div className="head">
                                    <div className="card__icon" aria-hidden="true">
                                        {group.icon}
                                    </div>
                                    <h2>{group.title}</h2>
                                </div>
                                <ul className="checklist">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="btn-row">
                        <Link href="/pricing" className="btn btn--ghost">
                            See pricing
                        </Link>
                    </div>
                </div>
            </section>
        </section>
        
        <section className="section section--sunken">
            <div className="container measure">
                <h2>What I don't do</h2>
                <p className="lead">
                    I am not a repair shop.
                </p>
                <ul className="list">
                    <li className="list-item">I do not replace cracked screens.</li>
                    <li className="list-item">I do not fix physical buttons, switches, or charging ports.</li>
                    <li className="list-item">I do not recover data from a storage drives that have failed.</li>
                    <li className="list-item">I do not offer antivirus services. (They're often not required these days)</li>
                    <li className="list-item">I do not perform physical cleaning of devices (e.g., removing liquid damage).</li>
                </ul>
                <br/>
                <p className="lead">
                    I'm not a salesman.
                </p>
                <ul className="list">
                    <li className="list-item">I will never try to sell you a device or product.</li>
                    <li className="list-item">I will never recommend products for a commission or kickback.</li>
                    <li className="list-item">I will never provide legal or financial advice regarding digital accounts or other matters.</li>
                    <li className="list-item">I will never make changes to your device settings without explaining them first.</li>
                    <li className="list-item">I will never ask for sensitive financial information.</li>
                </ul>
            </div>
        </section>

        <Cta
            heading="Not sure if your problem counts?"
            body={`It counts. Call me and describe the issue as best you can. No need to get all the details right over the phone.`}
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
            .page-head h1 {
                font-size: clamp(2rem, 4.4vw, 3rem);
            }
            /* Compact cards: icon beside the heading, tighter padding and
               bullets. Text size stays the same for readability. */
            .card {
                padding: 24px 26px 26px;
            }
            .head {
                display: flex;
                align-items: center;
                gap: 14px;
                margin-bottom: 16px;
            }
            .head .card__icon {
                flex: none;
                width: 46px;
                height: 46px;
                margin: 0;
                border-radius: 14px;
                font-size: 23px;
            }
            .card h2 {
                margin: 0;
                font-size: clamp(1.3rem, 2.1vw, 1.4rem);
            }
            .checklist li {
                margin-bottom: 10px;
                padding-left: 32px;
                line-height: 1.5;
            }
            .checklist li:last-child {
                margin-bottom: 0;
            }
            .center {
                text-align: center;
            }
            .center .lead {
                margin-inline: auto;
            }
        `}</style>
    </Layout>
);

export default Services;
