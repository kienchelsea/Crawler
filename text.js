var Crawler = require("crawler");
var Crawler = new Crawler();
const cheerio = require('cheerio');
// var paHTMLParser = require('node-html-parser');

Crawler.direct({
    uri: 'https://kinhtexaydung.petrotimes.vn/vinaconex-se-thoai-toan-bo-49-trieu-co-phieu-tai-vinahud-603846.html',
    skipEventRequest: false,
    callback: function(error, response) {
        if(error) {
            console.log(error)
        } else {
            const $ = cheerio.load(response.body);
            const text = $('#mainBdy > div > div.center_page.clearfix > div > div.col_left_index > div.colLeftDtails > div.boxTextDtails.__MASTERCMS_CONTENT.__MB_CONTENT_FOR_PRINTER').text();
            console.log(text)
        }
        
    }
})
