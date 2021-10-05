const TelegramBot = require('node-telegram-bot-api');

const token = '1652059945:AAE2g-9j-wPEv3YdP1n1L9YfJ8Ig180uN94';

const bot = new TelegramBot(token, { polling: true });

bot.sendMessage(1574318924, 'Chelsea and Mount');