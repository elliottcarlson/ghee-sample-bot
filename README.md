# Ghee Sample Bot

This is a sample bot for Slack, using [ghee](https://github.com/elliottcarlson/ghee).

### Setup

Clone this repo.

Go to your [Custom Integrations](https://www.slack.com/apps/manage/custom-integrations)
page for your Slack instance and set up a new Bot integration. Copy the API
token and save for later.

If running locally, copy `.env-sample` to `.env` and add your Slack API token to
the `.env` file.

If running on a server, you can set the `SLACK_API_TOKEN` to the value of the
Slack API token.

If running on a hosted service such as Heroku, you can set the Config Variables
on your apps Settings page.

### Run

Run `npm install` if you have just cloned the repo for the first time, to
install the required dependencies.

Run `npm start` to start the sample bot.

### Usage

The bot will now join your Slack instance if you specified the correct API
token. You can invite the bot to whatever channel you want it to be present in.

This sample bot only listens to the `hello` and `help`commands. To trigger the
`hello` command, you need to get the bots attention. Ghee, the framework this bot
is based on, automatically listens to requests matching the following formats
(for this example, we have named the bot `George`:

- `@George hello` -- @ mention the bot by name
- `George hello` -- Use the bots given name
- `.George hello` -- Use the expected prefix (defaults to the username of the
  bot, but can be set via the `BOT_PREFIX` environment variable)
- `.hello` -- Prefix the command with a `.`

### Quick Deploy

You can quickly run the sample bot via Heroku. Clicking this button will take
you to Heroku, where you will be able to enter your Slack API token and launch
the bot on a single worker dyno.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

