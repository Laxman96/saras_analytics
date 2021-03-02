const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs')
const url = 'https://sarasanalytics.com/daton';
const arr=[];
rp(url)
  .then(function(html) {

      const allData = $('.sources-wrap', html).each((x,item)=>{
         arr.push({title:$('strong', item).text(),subTitle:$('span',item).text()})
      });
      console.log(arr);
      try {
        fs.writeFileSync("post.json", JSON.stringify(arr))
      } catch (err) {
        console.error(err)
      }
  })