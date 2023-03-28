import React from "react";
import  { ProductCard } from "../Component/Card/ProductDetails";
import data from "../Component/Cart/data";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
    return (
        <div className="d-flex">
      <div className="mx-auto">
        {data.map((item) => {
          return (
            <div key={item.id}>
              {item.id===Number(id) ? (
                <ProductCard
                title={item.title} 
                src={item.src} />
              ) : null}  
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default ProductPage;