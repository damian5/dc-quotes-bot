<div style="display: flex; flex-direction:row;align-items: center">
<a href="https://emoji.gg/emoji/9738-discord-ico">
  <img src="https://cdn3.emoji.gg/emojis/9738-discord-ico.png" alt="discord_ico" height="40"/>
</a><p style="margin:0 5px; border-bottom: 0" >Discord Quotes Bot</p>
</div>

A simple and extensible Discord bot built with TypeScript that allows users to manage and retrieve quotes via slash commands. Supports commands to add, list, get, and delete quotes, plus a latency checker.

## ✨ Features

- Add new quotes with `/add`
- Retrieve a random quote with `/quote`
- List all saved quotes with `/list`
- Delete a quote with `/delete`
- Check bot latency with `/ping`

## 🛠 Tech Stack

- **Node.js** + **TypeScript**
- **Discord.js** for Discord interaction
- **Supabase** (or your database of choice) for persistence
- Modular architecture (controllers, services, utils)

## 📁 Project Structure

```
quotes-bot/
├── src/
│ ├── controller/
│ ├── service/
│ ├── utils/
│ ├── types.ts
│ ├── commands.ts
│ └── index.ts
├── .env
├── package.json
├── eslint.config.js
├── tsconfig.json
├── README.md
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

**Notes**:

- You will have to setup a DB using [Supabase](https://supabase.com/), if you prefer to use another DB, you will have to modify the `db.ts` file. The DB structure should be

```
quotes
------------------------------------------------
id: uuid | text: text | created_at: timestamptz
```

- [discord.js](https://discord.js.org/) requires **Node.js 22.12.0 or newer**. This bot won't work with older Node versions

### 1. Clone the repository

```
git clone https://github.com/damian5/quotes-bot.git
cd quotes-bot
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

```
DC_TOKEN_BOT=your-discord-token-here
SUPABASE_URL=supabase-project-url
SUPABASE_SERVICE_ROLE_KEY=supabase-service-role-key
```

### 4. Build and run the bot

```
npm run build
npm run start
```

## 🧪 Development

To develop or debug, run:

```
npm run dev
```

## 📦 Deploying

Deploy as a standard Node.js application. Ensure environment variables are set in your deployment environment.

### 📄 License

MIT

Built with ❤️ by Damian
