module.exports = {
    togglePlayerState: `tell app "iTunes" to playpause`,
    playNextTrack: `tell app "iTunes" to play next track`,
    playPreviousTrack: `tell app "iTunes" to play previous track`,
    setVolume(val) {
        return `tell app "iTunes" to set the sound volume to ${val}`
    },
    getPlayerState: `tell app "iTunes" to get player state`,
    getCurrentTrack: `tell app "iTunes" to get name of current track`,
    getCurrentPlaylist: `tell app "iTunes" to get name of current playlist`,
    getVolume: `tell app "iTunes" to get the sound volume`,
    getPlaylists: `tell app "iTunes" to get name of user playlists`,
    getTracksData: `tell app "iTunes" to get {name, time, duration} of tracks of current playlist`,
    updatePlayerPosition: `tell app "iTunes" to get {player position} & {duration} of current track`
}
