// External libraries
import React, { useState } from 'react';

// Internal libraries
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

// Later, we will use Store with Redux, it will be a way not to jump from component to components.
// one central place with all the States are managed.
// Here not.

// We require it in our code
// It imports the API
const giphy = require('giphy-api')({
  apiKey: 'u2LuaagQGHrtLOmqEaHsBPgWuX7t8Ee0',
  https: true
});

const App = () => {
  // const gifIDList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"];
  // const selectedGif = "gG6OcTSRWaSis";

  // Hooks are 2018 concept that makes States management much easier
  // State are variable that we can dynamically change according to any action
  // useState (useEffect, useSomething etc. ) is a hook.
  // React Hook changed how we use React radically.
  // When useState, we define States for each of our different variable that we want to dynamically change

  // We create 2 variables everytime.
  // selectedGif = holds the value of the selected Gif.
  // setSelectedGif = function that we call everytime we want to change
  // the value of selectedGif.
  // useState = default value that selectedGif has.
  // We send our setSelectedGif as a props to our gifList
  // -> a function is sent as a props.
  // Everytime we are triggering it, every component using it is re-rendered.

  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"]);

  const searchGiphy = (keyword) => {
    // keyword is the word we look for
    // Rating is G for "general" (not just kids gif)

    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 20 // number of gifs
    }, (err, res) => {
      // Inside the key data, tehre is other objects about the gif.
      // We just want the gif IDs, so we map to get an array with all the IDs.
      const gifIdArray = res.data.map((gif) => gif.id);
      // we pass the gifIDArray as the new array of the Giflist through SetGifList
      setGifList(gifIdArray);
    });
  };



  return (
    // We always want to return 1 HTML element.
    // Not 2 side by side.
    // It will not work inside the return.
    // We insert the different components
    <div>
      <div className="left-scene">
        {/* We pass the searchGiphy function to the searchBar */}
        <SearchBar searchGiphy={searchGiphy} />
        <div className="selected-gif">
          {/* Since the gifID will always be different, we need to add a props GifID */}
          <Gif gifID={selectedGif}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif}/>
      </div>
    </div>
  );
};

export default App;
