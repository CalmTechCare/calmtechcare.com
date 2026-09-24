// The CalmTechCare mark: a green square with one white tile per letter of
// CALM / TECH / CARE. Drawn in CSS so it costs no image request
// public/mark.svg mirrors this for the favicon
const Mark = () => (
    <span className="mark" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
            <i key={i} />
        ))}
        <style jsx>{`
            .mark {
                display: grid;
                grid-template-columns: repeat(4, 4px);
                grid-auto-rows: 4px;
                gap: 2px;
                place-content: center;
                width: 38px;
                height: 38px;
                flex: none;
                border-radius: 12px;
                background: linear-gradient(
                    145deg,
                    var(--primary) 0%,
                    #3f9c87 100%
                );
                box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.85),
                    0 4px 12px rgba(47, 122, 107, 0.3);
            }
            .mark i {
                background: #fff;
                border-radius: 1px;
            }
        `}</style>
    </span>
);

export default Mark;
