
import React, { useState, useEffect } from 'react';

import episodesDB from '../../data/episodes.json';
import EpisodeItem from './EpisodeItem';

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log('entro:', reload);
    setEpisodes(episodesDB);
  }, [reload]);

  const handleReload = () => setReload((prev) => !prev);

  const handleDeleteEpisode = (id) => {
    console.log(`Deleting episode ${id}`)
    setEpisodes((prev) => prev.filter(episode => episode.id !== id))
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={handleReload}>reload</button>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} {...episode} onClickDelete={(event) => handleDeleteEpisode(episode.id)} />
      ))}
    </div>
  )
}


setTimeout(() => {

}, 1000)

export default EpisodeList