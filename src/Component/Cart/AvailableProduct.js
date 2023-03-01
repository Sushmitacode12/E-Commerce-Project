import CardComponent from "../Card/Card";
export const CartProduct = () => {
  return (
    <div className="d-flex">
      <div className="mx-auto">
        <CardComponent
          id='p1'
          title="Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          price={100}
        /> 
      <CardComponent
          id='p2'
          title="Black and White Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          price={50}
        />
      </div>
      <div className="mx-auto">
        <CardComponent
          id='p3'
          title="Yellow and Black Colors"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          price={70}
        />
        <CardComponent
          id='p4'
          title="Blue Color"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          price={100}
        />
  </div>
  </div>
  );
};

