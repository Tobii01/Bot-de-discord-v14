const {client} = require(`discord.js`);

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`${client.user.username} ya esta listo`);
    }
};