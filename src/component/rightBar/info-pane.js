import React, {Component} from "react";
import InfoList from "../leftBar/info-list";

export default class InfoPane extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            venues: []
        };
    }
    render() {
        return (
            <div className="info-pane">
              <h3 id="info-cards" tabIndex="0">Info Cards</h3>

                {/* foursquare logo */}
                <img className="foursquare" src={window.location.origin + '/foursquare.png'} alt="powered by foursquare"/>

                <InfoList 
                    {...this.props} 
                />
            </div>
        )
    }
}