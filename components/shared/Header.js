import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component {

    render() {
        const title = this.props.title;
        return (
            <React.Fragment>
                {title}
                <p className="customClassFromFile">My class</p>
                {this.props.children}
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
                <style jsx>{`
                    *{
                        font-size: 13px;
                    };
                    .customClass{
                        color: red;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Header;