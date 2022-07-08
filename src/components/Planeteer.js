import React, {useState} from "react";

function Planeteer({p}) {
  const { pictureUrl, name, bio, twitter, fromUSA, quote, born } = p
  const [showBio, setShowBio] = useState(true)
  //bio, born, fromUSA, id, name, pictureUrl, quote, twitter
  let date = new Date().getFullYear()
  let birthDate = date - born
  

  function handleClick(planateer) {
    setShowBio(!showBio)
  }

  return (
    <li className="cards__item">
      <div className="card" onClick={handleClick}>
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{showBio ? bio : quote }</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age : {birthDate}</p>
            <p>
              {fromUSA ? 'USA-based' : 'Working overseas'}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
