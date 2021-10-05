var Crawler = require("crawler");
var Crawler = new Crawler();
const cheerio = require('cheerio');
var fs = require('fs');
var paHTMLParser = require('node-html-parser');
var TelegramBot = require('node-telegram-bot-api');
let token = '1652059945:AAE2g-9j-wPEv3YdP1n1L9YfJ8Ig180uN94';
var bot = new TelegramBot(token, { polling: true });


// const cheerio = require('cheerio');

const baseUrl = 'https://baomoi.com/tin-moi/trang5.epi'


Crawler.direct({
    uri: baseUrl,
    skipEventRequest: false, // default to true, direct requests won't trigger Event:'request'
    callback: function (error, response) {
        if (error) {
            console.log(error)
        } else {

            /*   445473283     */
            const $ = cheerio.load(response.body);
            let urls = [];
            $('a').each(function (index, element) {
                let url = $(element).attr('href')
                if (url.startsWith('http')) {
                    console.log(error)
                }
                else {
                    urls.push(baseUrl + url)
                }
            });
            console.log(urls)
            // console.log(urls[4])
            // bot.sendMessage(422888564, urls[4])
            // console.log("Crawling " + urls[4])
            //  console.log("Crawling url:" + urls[4]);
            //   ;
            // Crawler.direct({
            //     uri: urls[4],
            //     skipEventRequest: false,
            //     callback: function (error, response) {
            //         if (error) {
            //             console.log(error)
            //             return;
            //         }
            //         let urls = [];
            //         $('a').each(function (index, element) {
            //             let url = $(element).attr('href')
            //             if (url.startsWith('http')) {
            //                 console.log(error)
            //             }
            //             else {
            //                 urls.push(baseUrl + url)
            //             }
            //         });
            //         console.dir(urls, { 'maxArrayLength': null })
            //     }

            // });
            Crawler.direct({
                uri: 'https://zingnews.vn/nga-canh-bao-dap-tra-neu-my-trien-khai-ten-lua-o-nhat-ban-post1192378.html',
                skipEventRequest: false,
                callback: function (error, response) {
                    if (error) {
                        console.log(error)
                        return;
                    }
                    const $ = cheerio.load(response.body);
                    let text = $('.the-article-summary').text();
                    console.log(text)
                    bot.sendMessage(1574318924, text)
                }


            });

        }



    }
});