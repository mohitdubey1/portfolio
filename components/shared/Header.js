import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component {

    render() {
        const title = this.props.title;
        return (
            <React.Fragment>
                <Link href="/">
                    <a> Home </a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/portfolios">
                    <a> Portfolio </a>
                </Link>
                <Link href="/blogs">
                    <a> Blog </a>
                </Link>
                <Link href="/cv">
                    <a> CV </a>
                </Link>
            </React.Fragment>
        )
    }
}

export default Header;