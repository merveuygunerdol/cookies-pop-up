import React, { Component } from "react";
import Cookies from "js-cookie";
import mainLogo from "./logo.png";
import rightArrow from "./move-to-next.svg";
import PropTypes from "prop-types";
import "./pop-up.css";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  componentDidMount() {
    if (Cookies.get(this.props.cookieName) === undefined) {
      this.togglePopup();
    }
  }

  setCookie = () => {
    Cookies.set("name", this.props.cookieValue);
    console.log(Cookies.get(this.props.cookieName));
    this.togglePopup();
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    if (!this.state.showPopup) return null;
    return (
      <div className="pop-up-outer">
        <div className="pop-up">
          <div className="pop-up-logo">
            <img src={mainLogo} alt="" />
          </div>
          <div className="main-field">
            <div className="header-field">{this.props.header}</div>
            <div className="desc-field">{this.props.desc}</div>
            <div className="main-button">
              <button className="accept-button" onClick={this.setCookie}>
                {this.props.acceptButtonText}
                <img className="accept-button-icon" src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PopUp.propTypes = {
  header: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  acceptButtonText: PropTypes.string.isRequired,
  cookieName: PropTypes.string.isRequired,
  cookieValue: PropTypes.string.isRequired
};

PopUp.defaultProps = {
  header: "We respect your privacy",
  desc:
    "We use cookies to be able to provide you with the best possible user experience. By continuing to surf this site, you agree to the use of cookies.",
  acceptButtonText: "Accept",
  cookieName: "name",
  cookieValue: "value"
};

export default PopUp;
