// Inline SVG icons that take the surrounding text color. Symbols like ☎ and ✉
// render as full-color emoji on iOS no matter the font, so avoid them in UI.
// Paths from Google Material Icons (Apache 2.0).

const Svg = ({ children, ...props }) => (
    <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        {children}
    </svg>
);

export const PhoneIcon = (props) => (
    <Svg {...props}>
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </Svg>
);

export const MailIcon = (props) => (
    <Svg {...props}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
);
