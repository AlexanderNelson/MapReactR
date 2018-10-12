import React, {Component} from "react";

export default class PaneData extends Component {
    render() {
        return <li className="paneData" onLoad={() => this.props.handleListItemClick(this.props)}>
        <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
          {this.props.name}  
          {this.props.timeZone}  
          

        </li>
    }
}