var applescript = require('applescript'),
	out
	
module.exports = function(str) {
    applescript.execString(str, function(err, rtn) {
        if (err) {
            console.log(err)
        }
        if (rtn) {
            out = rtn
        }
    })
    return out
}