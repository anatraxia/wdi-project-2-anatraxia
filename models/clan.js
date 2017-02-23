var mongoose = require('mongoose')

var clanSchema = new mongoose.Schema({
  name: { type: String, required: [ true, "Please fill up the clan's name"]},
  clanBanner: {type: String, required: [ true, "Please fill up the clan's banner"]},
  clanLeaderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  clanMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  gamePlayed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  tournamentPlaying: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }]
})

var Clan = mongoose.model('Clan', clanSchema)

module.exports = Clan
