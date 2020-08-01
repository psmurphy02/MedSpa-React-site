import React, { Component } from "react";
import { SERVICES } from "../data/services";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
// import { SERVICES } from "../data/servies.js";

// function RenderServices({ services }) {
//   return (
//     <div className="container">
//       <div className="row">
//         <Card>
//           <CardImg src={service.image} alt={service.name} />
//           <CardTitle>{service.name}</CardTitle>
//           <CardText>{service.description}</CardText>
//         </Card>
//       </div>
//     </div>
//   );
// }

class ServicesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
    };
  }

  render() {
    const serviceList = this.state.services.map((service) => {
      return (
        <div className="container">
          <div key={service.id} className="row row-content align-items-center">
            <div className="col">
              <img
                src={service.image}
                alt={service.name}
                height="150"
                width="auto"
              />
            </div>
            <div className="col media-body align-self-center">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{serviceList}</div>
      </div>
    );
  }
}

export default ServicesList;
