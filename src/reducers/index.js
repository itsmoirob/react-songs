import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:04' },
    { title: 'Some scrubs', duration: '3:15' },
    { title: 'Many scrubs', duration: '3:40' },
    { title: 'Lots scrubs', duration: '2:50' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  };

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});