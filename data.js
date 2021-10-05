const { TelegramClient } = require('messaging-api-telegram');

const client = new TelegramClient({
  accessToken: ACCESS_TOKEN,
  origin: 'https://vnexpress.net/microservice/sheet/type/covid19_2021_by_location',
});