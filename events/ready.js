const {ActivityType} = require('discord.js')
module.exports = (client) =>{
    client
        .on('ready', () => {
            console.log(`Login as ${client.user.username}`)
            client.user.setActivity({name: 'Грабит трассу', type: ActivityType.Playing})
        })
}