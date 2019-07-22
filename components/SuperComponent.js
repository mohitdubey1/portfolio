import React from 'react';
import BaseLayout from './layouts/BaseLayout';

class SuperComponent extends React.Component {

    constructor() {
        super();

        this.someVariables = 'Just some variables';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am CV...</h1>
            </BaseLayout>
        )
    }
}

export default SuperComponent;