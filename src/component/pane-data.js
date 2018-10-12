import React, {Component} from "react";

export default class PaneData extends Component {
    render() {
        return (
            
        <div className="pane-data" onClick={() => this.props.handleListItemClick(this.props)}>
          {/* <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/> */}
          <h4>{this.props.name}</h4>   
          <a href={this.props.shortUrl}>Check 'em Out On Foursqaure</a>
          {/* {this.props.contact[0]}   */}
          {/* {this.props.hours.status}   */}
          <p className="details">
                {this.props.location.formattedAddress[0]}
                {this.props.location.formattedAddress[1]}
                {/* {this.props.price.currency} */}
                {/* {this.props.price.contact} */}
          </p>        
        </div>
        );
    }
}