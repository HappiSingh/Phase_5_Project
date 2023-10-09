import "./CSS/gamecard.css";

function PublisherCard({ user, publisher }) {
let { name, country, year_founded } = publisher;
 
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">{name}</h3>
            <p className="card-text">Country: {country}</p>
            <p className="card-text">Founded: {year_founded}</p>
          </div>
        </div>
      </>
    );
  }


export default PublisherCard;
