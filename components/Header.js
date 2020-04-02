import Link from 'next/link';
import Head from 'next/head'

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;