import Layout from "../components/layout";
import { site } from "../lib/site";
import { PhoneIcon, MailIcon } from "../components/icons";
import Cta from "../components/cta";

const faqs = [
    {
        q: "What should I have ready when I call?",
        a: "Nothing. Just describe what you're experiencing as best you can and the request for me based on the issue(s).",
    },
    {
        q: "What if I don't know what is wrong?",
        a: "That is normal and completely fine. “It stopped working” is a perfectly good place to start from.",
    },
    {
        q: "Can you teach me how to do it myself?",
        a: "Absolutely. My goal is to empower you. We'll create simple, printed step-by-step instructions that you can use for future reference.",
    },
    {
        q: "What happens if you can't fix the problem?",
        a: "If a problem requires further specialized work from a vendor or repair shop, I will be upfront with you about that and point you in the right direction.",
    },
    {
        q: "Can my children or grandchildren join the session?",
        a: "Of course. I welcome family members to join in so they can see the solutions we've implemented and help support you afterwards.",
    },
    {
        q: "How soon can I expect a visit?",
        a: "Typically within a few days. I'm available weekends and weekdays after 4:00 PM since I work during the day. We will find a time that fits your schedule and urgency."
    },
];

const Contact = () => (
    <Layout
        title="Contact"
        description={`Call or text ${site.owner} at ${site.phone}, or send an email. No forms, no phone tree, no waiting on hold.`}
    >
        <section className="page-head">
            <div className="container measure">
                <span className="eyebrow">Contact</span>
            </div>
            
            <div className="container">
                <div className="grid grid--2 ways">
                    <a href={site.phoneHref} className="card way">
                        <span className="way-icon" aria-hidden="true">
                            <PhoneIcon />
                        </span>
                        <span className="way-label">Call or text</span>
                        <span className="way-value">{site.phone}</span>
                        <span className="way-note">
                            Best option for individuals. Feel free to text or call {site.hours}
                        </span>
                    </a>

                    <a href={site.emailHref} className="card way">
                        <span className="way-icon" aria-hidden="true">
                            <MailIcon />
                        </span>
                        <span className="way-label">Email</span>
                        <span className="way-value email">{site.email}</span>
                        <span className="way-note">
                            Best option for eldercare communities. Please expect a response {site.emailResponseTime}.
                        </span>
                    </a>
                </div>

                <div className="area card">
                    <h2>Where I serve</h2>
                    <p>
                        I travel to homes and eldercare communities of those 
                        throughout {site.serviceAreaAlt}. Travel is included in the
                        price. There is no separate trip charge. If you're elsewhere 
                        in Colorado, please call anyway and we will figure it out.
                    </p>
                </div>
            </div>
        </section>

        <section className="section section--sunken">
            <div className="container">
                <div className="section-head">
                    <h2>Frequently asked questions</h2>
                </div>
                <div className="grid grid--2">
                    {faqs.map((item) => (
                        <div className="card" key={item.q}>
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Cta />

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
            .way {
                display: flex;
                flex-direction: column;
                gap: 6px;
                text-decoration: none;
                color: var(--ink);
                transition: transform 0.2s ease, box-shadow 0.2s ease,
                    border-color 0.2s ease;
            }
            .way:hover {
                transform: translateY(-3px);
                box-shadow: var(--shadow-lift);
                border-color: var(--primary);
                color: var(--ink);
            }
            .way-icon {
                display: grid;
                place-items: center;
                width: 60px;
                height: 60px;
                margin-bottom: 14px;
                border-radius: 18px;
                background: var(--primary-soft);
                color: var(--primary-strong);
                font-size: 30px;
                line-height: 1;
            }
            .way-label {
                color: var(--ink-muted);
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.06em;
                text-transform: uppercase;
            }
            .way-value {
                color: var(--primary-strong);
                font-size: clamp(1.9rem, 4.4vw, 2.6rem);
                font-weight: 800;
                letter-spacing: -0.02em;
                line-height: 1.15;
            }
            .way-value.email {
                font-size: clamp(1.25rem, 3vw, 1.7rem);
                overflow-wrap: anywhere;
            }
            .way-note {
                margin-top: 8px;
                color: var(--ink-muted);
                font-size: 1.05rem;
            }
            .primary-way {
                border-color: var(--primary);
                box-shadow: var(--shadow-lift);
            }
            .area {
                margin-top: clamp(24px, 3vw, 32px);
            }
            .area h2 {
                font-size: clamp(1.3rem, 2.4vw, 1.6rem);
            }
            .area p {
                color: var(--ink-muted);
                max-width: 52rem;
            }
        `}</style>
    </Layout>
);

export default Contact;
