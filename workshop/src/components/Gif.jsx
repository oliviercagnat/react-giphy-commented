import React from 'react';

const Gif = (props) => {
  // We import in our props gifID and setSelectedGif
  const { gifID, setSelectedGif } = props;

  // Arrow function with no props.
  const handleClick = () => {
    // When click, handleClick will triger SetSelectedGif
    // with gifID
    setSelectedGif(gifID);
  }

  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;

  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick}/>
  );
};

export default Gif;
