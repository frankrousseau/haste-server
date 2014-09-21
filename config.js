{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "redis",
    "host": "0.0.0.0",
    "port": 6379,
    "db": 2,
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  },

  "irc": {
    "nick": "haste",
    "altnicks": ["haste_", "hastebin_"],
    "server": "irc.freenode.net",
    "channel": "#spirc",
    "url": "http://localhost:7777/"
  }

}
