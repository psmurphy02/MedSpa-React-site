import React from "react";

function About(props) {
  
    const aboutList = props.staffList.map((staff) => {
      return (
        <div className="container">
          <div key={staff.id} className="row row-content align-items-center">
            <div className="col">
              <img
                src={staff.image}
                alt={staff.name}
                height="150"
                width="auto"
              />
            </div>
            <div className="col media-body align-self-center">
              <h3>{staff.name}</h3>
              <p>{staff.description}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{aboutList}</div>
      </div>
    );
  }

export default About;
