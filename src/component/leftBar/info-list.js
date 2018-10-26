import React, {Component} from "react";
import PaneData from "../rightBar/pane-data";

export default class InfoList extends Component {
    render() {
        return (
        <div>
        {this.props.venues &&
            this.props.venues.map((venue, index) => (
            <PaneData key={index} {...venue} handleListItemClick={this.props.handleListItemClick} />
            ))}
        </div>
        );
      }
    }