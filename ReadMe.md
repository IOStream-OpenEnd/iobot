# ZeroBot 3.0

[![](https://img.shields.io/codeclimate/issues/thisisabdus/zeroBot-v3.0.svg)](https://codeclimate.com/github/thisisabdus/zeroBot-v3.0/issues)
[![](https://img.shields.io/codeclimate/maintainability-percentage/thisisabdus/zeroBot-v3.0.svg)](https://codeclimate.com/github/thisisabdus/zeroBot-v3.0)
[![david-dm: zerobot v3](https://david-dm.org/MattCSmith/zerobot-v3.0.svg)](https://david-dm.org/MattCSmith/zerobot-v3.0)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/github/repo-size/MattCSmith/zeroBot-v3.0.svg)](https://github.com/MattCSmith/zeroBot-v3.0)
[![](https://img.shields.io/github/issues-raw/MattCSmith/zeroBot-v3.0.svg)](https://github.com//MattCSmith/zeroBot-v3.0/issues)
[![](https://img.shields.io/github/issues-pr/MattCSmith/zeroBot-v3.0.svg)](https://github.com/MattCSmith/zeroBot-v3.0/pulls)
[![](https://img.shields.io/github/issues-pr-closed/MattCSmith/zeroBot-v3.0.svg)](https://github.com/MattCSmith/zeroBot-v3.0/pulls)

## Development Installation
- Fork this repo
- Clone your fork to your local machine
- CD into the bots root directory
- Run `npm install`
- Copy the contents of tokens-EXAMPLE.json into a new file called tokens.json, entering your own Discord Bot token (see below)
- Run `nodemon` on `node bot.js`

Once the bot boots up, check for a URL in your command prompt. It will start with (https://discordapp.com/oauth2/authorize?client_id=). Copy and paste this link into your browser and then select the server you wish to invite your testing bot too.

## Getting a Discord Bot Token
- Head on over to https://discordapp.com/developers/applications/
- Sign in with your Discord account, if you are not already signed in
- Click the "Create an Application" card
- On the "General Information" Tab, give your bot a name and an avatar image
- Click the bot tab on the left hand side menu
- Then click "Add Bot" & confirm by clicking "Yes, Do it"

![Install Image](./install.png)
