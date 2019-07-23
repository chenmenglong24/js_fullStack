const request = require('request');
const cheerio = require('cheerio');

request('https://www.langeasy.com.cn/', (err, res) => {
  if (!err) {
    const body = res.body;
    const $ = cheerio.load(body, {
      decodeEntities: false  // 不会出现中文乱码
    })
    // console.log(body);
    $('.book-list-content ul li')
      .each(function () {
        const title = $('dt', this).text().trim();
        // const description = $('.description', this).text().trim();
        const coverStr = $('img', this).attr('src');
        coverArr = coverStr.split('');
        var len =  coverArr.indexOf('?');
        cover = coverArr.slice(0, len).join('');
        console.log({
          title,
          // description,
          cover
        })
      })
  }
})