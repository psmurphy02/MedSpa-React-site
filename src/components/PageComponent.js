import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Jumbotron } from "reactstrap";

function PageTemplate(props) {
  
    const dataList = props.data.list.map((returnedData) => {

      return (
        <div className="container">
          <div key={returnedData.id} className="row row-content align-items-center">
            <div className="col">
              <img
                src={returnedData.image}
                alt={returnedData.name}
                height="150"
                width="auto"
              />
            </div>
            <div className="col media-body align-self-center">
              <h3>{returnedData.name}</h3>
              <p>{returnedData.description}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    });

    return (
      <>
      <Jumbotron style={{ backgroundImage: `url(${props.data.headerImage})`}}>
        <Header />
          <span id="title">
            <h1>{props.data.title}</h1>
          </span>
      </Jumbotron>
        <div className="container">
          <div className="row">{dataList}</div>
        </div>
      <Footer />
      </>
    );
  }

export default PageTemplate;
