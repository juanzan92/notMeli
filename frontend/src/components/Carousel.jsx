import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

class CarouselPage extends Component {

  render() {
    return (
      <MDBContainer >
        <MDBCarousel
          activeItem={1}
          length={this.props.pictures.length}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <MDBCarouselInner>
            {
              console.log(this.props.pictures)}{
              this.props.pictures.map((picture, index) =>
                <MDBCarouselItem itemId={index+1} key={picture.id}>
                  <MDBView>
                    <img
                      className="d-block w-% h-50"
                      src={picture.url}
                      alt="First slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
              )
            }
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage;