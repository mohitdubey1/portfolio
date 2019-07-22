
import React from 'react';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

    static async getInitialProps() {
        console.log("getInitialProps");
        let userData = {};
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            userData = response.data;
        } catch (err) {
            console.log("Error!", err);
        }
        return { initialData: [1, 2, 3, 4], userData };
    }

    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = {
            title: 'I am Index page'
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    updateTile = () => {
        this.setState({ title: 'I am Updated Index Page' });
    }

    render() {
        console.log("render");
        const { userData, initialData } = this.props;
        console.log(userData, initialData);
        return (
            <BaseLayout>
                <h1>I am Index Page from class component</h1>
                <h2>{this.state.title}</h2>
                <button onClick={this.updateTile}>Chane Titlw</button>
            </BaseLayout>
        )
    }
}

export default Index;