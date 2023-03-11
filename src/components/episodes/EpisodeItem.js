import React from 'react'
import Button from '../Button'

function EpisodeItem({ name, image, description }) {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Button text="View more" />
      </div>
    </div>
  )
}

export default EpisodeItem