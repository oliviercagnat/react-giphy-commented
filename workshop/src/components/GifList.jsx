import React from 'react';
// We need to import Gif since we use it here
import Gif from './Gif';

// In order to have a different GifList, we insert props.
const GifList = (props) => {
  // It is a list, so we need to iterate
  // We will use map to create a new component each time
  // const gifIDList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"];
  // --> We moved the array to App.

  // We extract the gifIDs and setSelectedGif out of our props
  const { gifIDs, setSelectedGif } = props;
  return (
    <div className="gif-list">
      {/* We also need to give a key prop, unique key to our component
      We will give the gifID */}
      {gifIDs.map( ID => <Gif gifID={ID} setSelectedGif={setSelectedGif} key={ID}/>)}
    </div>
  );
};

export default GifList;
