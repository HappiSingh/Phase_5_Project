import "./CSS/gamecard.css";


function PublisherCard({ user, publisher }) {
let { id, name, country, year_founded } = publisher;

 
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Country: {country}</p>
            <p className="card-text">Founded: {year_founded}</p>
            <div className="d-grid gap-2">
            </div>
          </div>
        </div>
      </>
    );
  }


export default PublisherCard;
