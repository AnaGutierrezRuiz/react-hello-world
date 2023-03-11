
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

  return (
    <div onClick={handleReload}>
      {episodes.map((episode) => (<EpisodeItem key={episode.id} {...episode} />))}
    </div>
  )
}

export default EpisodeList