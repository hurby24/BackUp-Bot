A Discord bot to back up your server's users to a database

 ## 🚀  Getting Started
 Make sure you have the following applications installed and tokens registered before starting:
 1.  You need to install  [Node.js](https://nodejs.org/en/)  v16.6.0 or higher and  [MongoDB](https://www.mongodb.com/).
2.  Clone the repository  [https://github.com/hurby24/BackUp-Bot.git](https://github.com/hurby24/BackUp-Bot.git)
3.  Register for a Discord bot token using this  **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token)**
### Before starting
Before you start the bot you'll need to change the name of `config.example.json` to `config.json` and then add your bots token and mongodb url.
### Install modules
-   Make sure  `Package.json`  is in the file location
-   `npm install`
-   Start bot using `node . local=YourServerId` example: *node . local=703245199270346792*
- And then try to use commands
 ## Current Commands
 
| Name |Description  |
|--|--|
| BackUp | Backup all users in the database |
| GetUser | Get a user info from the database |
| GetUsers | Get all users from the database by role |