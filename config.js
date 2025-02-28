const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fzephetron%2Fart%2FAnime-Boy-884409925&psig=AOvVaw1Txww46DGFfV4qqEJaMR0y&ust=1740812813340000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj0mJ_n5YsDFQAAAAAdAAAAABAJ",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello👋 I am 🧑‍💻 ▏DILSHAN_MD ▏🧑‍💻 I am alive now ||",
}:
