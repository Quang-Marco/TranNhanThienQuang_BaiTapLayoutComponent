const Item = () => {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img
        src="https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png"
        className="card-img-top"
        alt="Bootstrap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Item;
