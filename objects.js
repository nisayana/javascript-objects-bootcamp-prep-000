var playlist = {
  'Shakira': "whenever",
  'Sting': "desert rose"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Sting;
  return playlist
}
