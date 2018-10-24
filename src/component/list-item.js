import React, {Component} from "react";

export default class ListItem extends Component {
    render() {
        return (
        <li className="listItem" role="listItem" onClick={() => this.props.handleListItemClick(this.props)}>
        
        <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
        <a aria-label={this.props.name}> 
          <span>
            {this.props.name}
          </span>
          </a> 
        </li>
        );
    }
}