const TelegramBot = require("node-telegram-bot-api")

const token = '5274476097:AAHg8mIF6GhUdVcrwPX85dl0Rwqqv5l_D9A'
const bot = new TelegramBot(token, { polling: true })

bot.on("message", (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, `echo: ${msg.text}`)
})
