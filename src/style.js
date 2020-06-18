import { jsx, css } from "@emotion/core";
const Footer = (props) => (
  <footer
    css={{
      // object styles!
      width: "100%",
    }}
  >
    <p
      css={css`
        /* string styles */
        color: blue;
        text-align: centre;
        font-size: 1.2re;
      `}
    >
      {props.children}
    </p>
  </footer>
);
export default Footer;
