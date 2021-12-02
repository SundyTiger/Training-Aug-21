import React, { Component } from "react";

export default class ImageInfo extends Component {
  render() {
    const { src, alt } = this.props.img;
    return (
      <>
        <img src={src} alt={alt} width="150px" height="150px" />
      </>
    );
  }
}

export { ImageInfo };
