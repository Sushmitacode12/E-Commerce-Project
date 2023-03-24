import CardComponent from "../Card/Card";
export const CartProduct = () => {
  return (
    <div className="d-flex">
      <div className="mx-auto">
        <CardComponent
          title="Black and white Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          price={100}
        /> 
      <CardComponent
          title="Black and White Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          price={50}
        />
      </div>
      <div className="mx-auto">
        <CardComponent
          title="Yellow and Black Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          price={70}
        />
        <CardComponent
          title="Blue Color"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          price={100}
        />
  </div>
  </div>
  );
};

