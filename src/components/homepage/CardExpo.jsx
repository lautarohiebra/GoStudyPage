/* eslint-disable react/prop-types */
const CardExpo = (props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.image}
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Saber Más</button>
        </div>
      </div>
    </div>
  );
};

export default CardExpo;
