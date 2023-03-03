import "@/styles/globals.css";
import styled from "@emotion/styled";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <LinkWrapper>
        <Link href="/"> Task </Link>
        <Link href="/room"> Room </Link>
      </LinkWrapper>
      <Component {...pageProps} />
    </div>
  );
}

const LinkWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  gap: 10px;
`;
