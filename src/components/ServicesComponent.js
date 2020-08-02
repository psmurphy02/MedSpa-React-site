import React from "react";

function ServicesList(props) {
  
    const serviceList = props.services.map((service) => {
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

export default ServicesList;
