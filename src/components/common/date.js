import React, { Component } from 'react';

export default class DateElement extends Component {
    render() {
        const dateElement = new Date();

        return <p>{dateElement.toLocaleDateString()}</p>;
    }
}