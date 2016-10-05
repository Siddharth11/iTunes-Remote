module.exports = {
    togglePlayerState: `tell app "iTunes" to playpause`,
    playNextTrack: `tell app "iTunes" to play next track`,
    playPreviousTrack: `tell app "iTunes" to play previous track`,
    setVolume(val) {
        return `tell app "iTunes" to set the sound volume to ${val}`
    },
    playPlaylist(val) {
        return `tell app "iTunes" to play playlist "${val}"`
    },
    playTrack(arr) {
        return `tell application "iTunes" to play track "${arr[0]}" of playlist "${arr[1]}"`
    },
    getPlayerState: `tell app "iTunes" to get player state`,
    getCurrentTrack: `tell app "iTunes" to get name of current track`,
    getCurrentPlaylist: `tell app "iTunes" to get name of current playlist`,
    getVolume: `tell app "iTunes" to get the sound volume`,
    getPlaylists: `tell app "iTunes" to get name of user playlists`,
    getTracksData: `tell app "iTunes" to get {name, time} of tracks of current playlist`,
    checkAppRunning: `tell application "System Events" to (name of processes) contains "iTunes"`,
    updatePlayerPosition: `tell app "iTunes" to get {player position} & {duration} of current track`
}
