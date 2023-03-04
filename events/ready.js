module.exports = (client) =>{
    client
        .on('ready', () => {
            console.log(`Login as ${client.user.username}`)
        })
}