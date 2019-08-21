import React from 'react';

export default function Summary(props) {
  return (
    <div>
      {props.infoData.map((country) => (
        <div className="info" key={country.alpha3Code}>
          <img src={country.flag} alt="flag" className="flags" />
          <p>Name:  {country.name}</p>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Currency code:  {country.currencies[0].code}, name: {country.currencies[0].name}, symbol: {country.currencies[0].symbol}</p>
          <p>Language: {country.languages[0].name}</p>
        </div>
      ))}
    </div>
  )
}