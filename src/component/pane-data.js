import React, {Component} from "react";

export default class PaneData extends Component {
    render() {
        return (
            
        <div className="pane-data" >
        {/* <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/> */}
         <h4>{this.props.name}</h4>
         <li>{this.props.location.address}  </li>

          <a href={this.props.shortUrl}>Check 'em Out On Foursqaure</a>
          {/* {this.props.contact[0]}   */}
          {/* {this.props.hours.status}   */}

        
        </div>
        );
    }
}