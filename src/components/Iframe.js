import React, { Component } from "react";
import sanityClient from "../client.js";

class Iframe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
    };

    this.dataCache = {};

    this.dataFetch = () => {
      sanityClient
        .fetch(
          `*[_type == "music"]{
            song,
            link,
          }`
        )
        .then((data) => {
          if (!data) return <h1>Loading...</h1>;
          this.dataCache = data[0];
          this.setState({ loading: true });
        })
        .catch(console.error);
    };

    this.dataFetch();

    this.dragMouseDown = this.dragMouseDown.bind(this);
    this.elementDrag = this.elementDrag.bind(this);
    this.closeDragElement = this.closeDragElement.bind(this);
  }

  dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.state.pos3 = e.clientX;
    this.state.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:11
    document.onmousemove = this.elementDrag;
  };

  elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();
    let element = document.getElementById("mydiv");
    let domRect = element.getBoundingClientRect();
    // calculate the new cursor position:
    this.state.pos1 = this.state.pos3 - e.clientX;
    this.state.pos2 = this.state.pos4 - e.clientY;
    this.state.pos3 = e.clientX;
    this.state.pos4 = e.clientY;
    if (domRect.left - this.state.pos1 < 0) {
      this.setState({ pos1: 0 });
      this.setState({ pos2: domRect.top - this.state.pos2 });
    } else if (domRect.left - this.state.pos1 > 1603) {
      this.setState({ pos1: 1603 });
      this.setState({ pos2: domRect.top - this.state.pos2 });
    } else if (domRect.top - this.state.pos2 > 578) {
      // This number is chose due to frame size limitation, the number can be optionally change
      this.setState({ pos1: domRect.left - this.state.pos1 });
      this.setState({ pos2: 578 });
    } else if (domRect.top - this.state.pos2 < 0) {
      this.setState({ pos1: domRect.left - this.state.pos1 });
      this.setState({ pos2: 0 });
    } else {
      this.setState({ pos1: domRect.left - this.state.pos1 });
      this.setState({ pos2: domRect.top - this.state.pos2 });
    }
  };

  closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  render() {
    return (
      <div
        id="mydiv"
        className=""
        style={{
          position: "absolute",
          left: `${this.state.pos1}px`,
          top: `${this.state.pos2}px`,
          zIndex: 1,
        }}
      >
        <div
          id="mydivheader"
          className="bg-gradient-to-r from-green-400 to-blue-500 cursor-move"
          onMouseDown={this.dragMouseDown}
        >
          Click here to move
        </div>
        <iframe
          className="h-20"
          src={this.dataCache.link}
          width="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    );
  }
}

export default Iframe;
