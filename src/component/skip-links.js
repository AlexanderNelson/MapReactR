import React, {Component} from "react";

export default class SkipLinks extends Component {
    render() {
        return (
            <ul className="skip-links">
                <li>
                    <a href="#search">Skip To Search Field</a>
                </li>
                <li>
                    <a href="#info-cards">Skip To Info Cards</a>
                </li>
            </ul>
        );
    }
}