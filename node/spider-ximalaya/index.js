const request = require('request');
const cheerio = require('cheerio');

request('https://www.ximalaya.com/top/reputation/', (err, res) => {
  if (!err) {
    const body = res.body;
    const $ = cheerio.load(body, {
      decodeEntities: false  // 不会出现中文乱码
    })
    // console.log(body);
    $('.album-item')
      .each(function () {
        const title = $('.title', this).text().trim();
        const description = $('.description', this).text().trim();
        const cover = $('.album-cover img', this).attr('src');
        console.log({
          title,
          description,
          cover
        })
      })
  }
})