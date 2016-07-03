module.exports = {
    toggle: `tell app "iTunes" 
			playpause
		end tell`,
    next: `tell app "iTunes" to play next track`,
    previous: `tell app "iTunes" to play previous track`,
    currentTrack: `tell app "iTunes" to get name of current track`,
    vol: function (val) {
        return `set volume without output muted output volume ${val} --100%`
    }
}
