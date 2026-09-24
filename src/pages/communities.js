import Layout from "../components/layout";
import Cta from "../components/cta";
import { site } from "../lib/site";

const benefits = [
    {
        icon: "\u{1F4C5}",
        title: "A standing slot on your calendar",
        body: "Weekly or monthly tech help hours in your common room. Residents drop in as they see fit.",
    },
    {
        icon: "\u{1F4DE}",
        title: "Fewer front-desk interruptions",
        body: "The Wi-Fi questions, the TV remotes, the phone that stopped ringing. Those in need come to me instead of your staff.",
    },
    {
        icon: "\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}",
        title: "Families who can actually reach their people",
        body: "Residents who can better interact with their devices can also better interact with their family.",
    },
];

const formats = [
    {
        title: "Individual sessions",
        body: "Residents can sign up for a time slot and meet with me for personalized, hands-on help with the technology issues they're experiencing.",
    },
    {
        title: "Group sessions",
        body: "A short, friendly presentation on a given topic. I.e. spotting scams, photos and memories, updates and security.",
    },
    {
        title: "Workshops",
        body: "An interactive presentation on topics chosen by audience members. Participants are encouraged to bring their own questions and experiences to the discussion, helping shape the discussion.",
    },
];

const Communities = () => (
    <Layout
        title="Communities"
        description="On-site technology help hours for assisted living and senior living communities. Recurring scheduling, insured, and easy on your staff."
    >
        <section className="page-head">
            <div className="container measure">
                <span className="eyebrow">Independent and assisted living communities</span>
                {/* <h1>Tech help hours for your residents, run by one person they get to know.</h1> */}
                <p className="lead">
                    For activity directors, life enrichment coordinators, and
                    executive directors at independent living, assisted living,
                    and memory care communities in {site.serviceAreaAlt}.
                </p>
                <div className="btn-row">
                    <a href={site.emailHref} className="btn btn--lg btn--primary">
                        Email me
                    </a>
                    <a href={site.phoneHref} className="btn btn--lg btn--ghost">
                        Call {site.phone}
                    </a>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="section-head">
                    <h2>Why eldercare communities invite me</h2>
                </div>
                <div className="grid grid--2">
                    {benefits.map((item) => (
                        <div className="card" key={item.title}>
                            <div className="card__icon" aria-hidden="true">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="section section--sunken">
            <div className="container">
                <div className="section-head">
                    <h2>Ways we can work together</h2>
                </div>
                <div className="grid grid--2">
                    {formats.map((item) => (
                        <div className="card" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TODO confirm each of these is in place before reaching out to eldercare facilities */}
        <section className="section">
            <div className="container logistics">
                <div className="measure">
                    <span className="eyebrow">Compliance documents</span>
                    <p className="lead">
                        Everything available upon request.
                    </p>
                </div>
                <ul className="checklist">
                    {/* <li>General liability insurance certificate</li> */}
                    <li>Background check</li>
                    <li>Tax form W-9</li>
                    <li>Monthly invoice history (net 30, one line item)</li>
                </ul>
            </div>
        </section>

        <Cta
            heading="Enhance your resident services"
            body="Please contact me with any questions you may have to bring personalized tech support to your community."
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
                font-size: clamp(1.9rem, 4.2vw, 2.9rem);
            }
            .logistics {
                display: grid;
                gap: clamp(32px, 5vw, 72px);
                grid-template-columns: 1.1fr 0.9fr;
                align-items: center;
            }
            .logistics :global(.checklist li) {
                font-size: 1.125rem;
            }
            @media (max-width: 900px) {
                .logistics {
                    grid-template-columns: 1fr;
                }
            }
        `}</style>
    </Layout>
);

export default Communities;
