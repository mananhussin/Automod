const navbar = document.querySelector(".nav-bar");
const offset = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > offset) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

// commands - AUTO GENERATED
const commands = [
  {
    name: "addrole",
    description: "Add a role to a user",
    category: "admin",
  },
  {
    name: "announce",
    description: "Announce something in a channel",
    usage: "announce <channel> <text>",
    category: "admin",
  },
  {
    name: "ban",
    description: "ban",
    category: "admin",
  },
  {
    name: "ctopic",
    description: "Update the channel topic",
    category: "admin",
  },
  {
    name: "delete",
    description: "Delete message, up to 100",
    usage: "delete <1-100>",
    category: "admin",
  },
  {
    name: "kick",
    description: "Kick a user",
    category: "admin",
  },
  {
    name: "lockchannel",
    description: "Lock A channel",
    category: "admin",
  },
  {
    name: "mute",
    description: "Mute a user",
    category: "admin",
    usage: "mute <@user>",
  },
  {
    name: "prefix",
    description: "Set a prefix for your server",
    category: "admin",
  },
  {
    name: "removerole",
    description: "Remove a role from a user",
    category: "admin",
  },
  {
    name: "say",
    description: "Let the bot say something",
    category: "admin",
  },
  {
    name: "set",
    description: "Set a default channel",
    category: "admin",
    usage: "set <option> <channel>",
    options: ["suggest-channel", "announce-channel"],
  },
  {
    name: "sticky",
    description: "Sticky a message to the bottom of the screen",
    category: "admin",
  },
  {
    name: "unlockchannel",
    description: "Unlock A channel",
    category: "admin",
  },
  {
    name: "unmute",
    description: "Unmute a user",
    category: "admin",
    usage: "unmute <@user>",
  },
  {
    name: "unsticky",
    description: "Sticky a message to the bottom of the screen",
    aliases: ["removesticky"],
    category: "admin",
  },
  {
    name: "bunny",
    description: "Shows a picture of a bunny",
    category: "animal",
  },
  {
    name: "cat",
    description: "Shows a picture of a cat",
    category: "animal",
  },
  {
    name: "catfact",
    description: "Returns a cat fact",
    category: "animal",
  },
  {
    name: "cow",
    description: "Returns a cow ascii",
    category: "animal",
  },
  {
    name: "cowsay",
    description: "Let a cow say something",
    category: "animal",
  },
  {
    name: "dog",
    description: "Shows a picture of a dog",
    category: "animal",
  },
  {
    name: "dogfact",
    description: "Returns a dog fact",
    category: "animal",
  },
  {
    name: "duck",
    description: "Shows a picture of a duck",
    category: "animal",
  },
  {
    name: "fox",
    description: "Shows a picture of a fox",
    category: "animal",
  },
  {
    name: "lizard",
    description: "Shows a picture of a lizard",
    category: "animal",
  },
  {
    name: "owl",
    description: "Shows a picture of a owl",
    category: "animal",
  },
  {
    name: "panda",
    description: "Shows a picture of a panda",
    category: "animal",
  },
  {
    name: "snailfact",
    description: "Returns a snail fact",
    category: "animal",
  },
  {
    name: "eval",
    description: "Eval",
    category: "botowner",
  },
  {
    name: "shutdown",
    description: "Shuts the bot down",
    category: "botowner",
  },
  {
    name: "balance",
    description: "balance",
    category: "economy",
  },
  {
    name: "daily",
    description: "daily",
    category: "economy",
  },
  {
    name: "deposit",
    description: "deposit money to your bank",
    category: "economy",
    usage: "!deposit <all | amount>",
  },
  {
    name: "work",
    description: "work",
    category: "economy",
  },
  {
    name: "8ball",
    description: "8Ball",
    category: "games",
  },
  {
    name: "advice",
    description: "Gives you advice",
    category: "games",
  },
  {
    name: "ascii",
    description: "Transform text to ascii",
    category: "games",
  },
  {
    name: "bet",
    description: "Bet on somebody",
    category: "games",
  },
  {
    name: "block",
    description: "Write text with blocks",
    category: "games",
  },
  {
    name: "calc",
    description: "Calculate something",
    category: "games",
  },
  {
    name: "clyde",
    description: "Let clyde say something",
    category: "games",
  },
  {
    name: "dadjoke",
    description: "Shows a dadjoke",
    category: "games",
  },
  {
    name: "dice",
    description: "Roll a dice",
    category: "games",
  },
  {
    name: "flipcoin",
    description: "Flip a coin",
    category: "games",
  },
  {
    name: "happiness",
    description: "Get a happiness returned",
    category: "games",
  },
  {
    name: "hug",
    description: "Shows a picture of people hugging",
    category: "games",
  },
  {
    name: "iq",
    description: "Get a random Iq returned",
    category: "games",
  },
  {
    name: "kiss",
    description: "Shows a picture of people kissing",
    category: "games",
  },
  {
    name: "meme",
    description: "Returns a meme",
    category: "games",
  },
  {
    name: "owo",
    description: "OwO",
    category: "games",
  },
  {
    name: "ping",
    description: "pong!",
    category: "games",
  },
  {
    name: "randomjoke",
    description: "returns a random joke",
    category: "games",
  },
  {
    name: "randomnumber",
    description: "Returns a random 6 digit number",
    category: "games",
  },
  {
    name: "rps",
    description: "Rock Paper Scissors",
    category: "games",
  },
  {
    name: "wyr",
    description: "Would you rather",
    category: "games",
  },
  {
    name: "clearqueue",
    description: "Clear the music playlist",
    aliases: ["cq"],
    category: "music",
  },
  {
    name: "leave",
    description: "Let the bot disconnect",
    aliases: ["disconnect", "l"],
    category: "music",
  },
  {
    name: "nowplaying",
    description: "Shows info about the current playing song",
    category: "music",
    aliases: ["np", "now"],
  },
  {
    name: "pause",
    description: "Pause a song that is playing",
    category: "music",
  },
  {
    name: "play",
    description: "Play a song",
    aliases: ["p"],
    category: "music",
  },
  {
    name: "queue",
    description: "Show top 20 songs in the queue",
    aliases: ["q"],
    category: "music",
  },
  {
    name: "resume",
    description: "Resume a song that was playing",
    aliases: ["r"],
    category: "music",
  },
  {
    name: "skip",
    description: "Skip a song that is playing",
    aliases: ["s"],
    category: "music",
  },
  {
    name: "stop",
    description: "stop",
    category: "music",
  },
  {
    name: "volume",
    description: "Set the volume between 1 to 100",
    category: "music",
  },
  {
    name: "boobs",
    description: "None",
    category: "nsfw",
  },
  {
    name: "butt",
    description: "None",
    category: "nsfw",
  },
  {
    name: "neko",
    description: "None",
    category: "nsfw",
  },
  {
    name: "avatar",
    description: "Get user avatar",
    category: "util",
  },
  {
    name: "botinfo",
    description: "Shows info about the bot",
    category: "util",
  },
  {
    name: "bugreport",
    description: "Report a bug to your staff",
    category: "util",
  },
  {
    name: "channelinfo",
    description: "Get information about a channel",
    category: "util",
  },
  {
    name: "channels",
    description: "Shows all channels in the server",
    category: "util",
  },
  {
    name: "define",
    description: "Define a word",
    category: "util",
  },
  {
    name: "dependencies",
    description: "Shows a list of all bots dependencies",
    category: "util",
  },
  {
    name: "emojis",
    description: "Get a random color",
    category: "util",
  },
  {
    name: "github",
    description: "Search someone on github",
    category: "util",
    aliases: ["gh"],
  },
  {
    name: "help",
    description: "Shows all commands Or shows more info about a command",
    category: "util",
    aliases: ["h"],
  },
  {
    name: "instagram",
    description: "Search someone on instagram",
    category: "util",
    aliases: ["ig"],
  },
  {
    name: "invite",
    description: "Get a random color",
    category: "util",
  },
  {
    name: "minecraft",
    description: "Get info about a minecraft server",
    category: "util",
  },
  {
    name: "morse",
    description: "Convert a string to morse code",
    category: "util",
  },
  {
    name: "poll",
    description: "Create a poll",
    category: "util",
  },
  {
    name: "randomcolor",
    description: "Get a random color",
    category: "util",
    aliases: ["color"],
  },
  {
    name: "roleinfo",
    description: "Shows info about a role",
    category: "util",
  },
  {
    name: "roles",
    description: "Get a random color",
    category: "util",
  },
  {
    name: "serverinfo",
    description: "Get info about the server",
    category: "util",
  },
  {
    name: "suggest",
    description: "Create a suggestion",
    category: "util",
  },
  {
    name: "translate",
    description: "Translate a sentence",
    usage: "!translate <language> <sentence>",
    category: "util",
  },
  {
    name: "uptime",
    description: "Returns the uptime of the bot",
    category: "util",
  },
  {
    name: "userinfo",
    description: "Get user info",
    usage: "!userinfo <user>",
    category: "util",
    aliases: ["whois"],
  },
  {
    name: "worldclock",
    description: "Shows the time from other countries",
    category: "util",
  },
];