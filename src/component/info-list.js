import React, {Component} from "react";
import ListItem from "./list-item";
import PaneData from "./pane-data";

export default class InfoList extends Component {
    render() {
        return (
        <ol className="info-list">
            {this.props.venues &&
              this.props.venues.map((venue, idx) => (
            <PaneData key={idx} {...venue} 
            handleListItemClick={this.props.handleListItemClick}/>
        ))}
        </ol>
        );
    }
}