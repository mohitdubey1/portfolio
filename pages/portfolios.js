import React from 'react';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes'
import BaseLayout from '../components/layouts/BaseLayout';

class Portfolio extends React.Component {

    static async getInitialProps() {
        console.log("getInitialProps");
        let posts = [];
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            posts = response.data;
        } catch (err) {
            console.log("Error!", err);
        }
        return { posts: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map(post => {
            return (
                <li key={post.id}>
                    <Link route={`/portfolio/${post.id}`}>
                        <a style={{ 'fontSize': '20px' }}>{post.title}</a>
                    </Link>
                </li>
            )
        });
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <h1>I am Portfolio...</h1>
                <ul>{this.renderPosts(posts)}</ul>
            </BaseLayout>
        )
    }
}

export default Portfolio;