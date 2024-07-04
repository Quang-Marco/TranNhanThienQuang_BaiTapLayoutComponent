import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <>
      <Banner />
      <div className="container px-lg-5 pb-lg-5">
        <div className="row justify-content-around">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};

export default Body;
