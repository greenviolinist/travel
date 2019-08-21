import React from 'react';

export default function Pictures(props) {
  return (
    <>
    <p>Pictures will show up here after you enter a country in the destination section</p>
      <div>
      {props.picData.map((pic) => (
        <div key={pic.id}>
          <img src={pic.urls.small} alt="country photos" className="countrypic" /> 
          </div>
      ))}
    </div>
      </>
  )
}