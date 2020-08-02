import React from "react";

function ProductsList(props) {
  
    const productList = props.products.map((product) => {
      return (
        <div className="container">
          <div key={product.id} className="row row-content align-items-center">
            <div className="col">
              <img
                src={product.image}
                alt={product.name}
                height="150"
                width="auto"
              />
            </div>
            <div className="col media-body align-self-center">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{productList}</div>
      </div>
    );
  }

export default ProductsList;
