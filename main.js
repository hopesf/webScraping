const puppeteer = require('puppeteer');

(async () => {
    const url = "https://www.youtube.com";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    let data = await page.evaluate( ()=> {

        const videoTitle = document.querySelector("div[id='meta'] > h3 > a > yt-formatted-string").innerText;
        const channelName = document.querySelector("div[id='text-container'] > yt-formatted-string > a").innerText;
        const viewers = document.querySelector("div[id='metadata-line'] > span:nth-child(1)").innerText;
        const uploadTime = document.querySelector("div[id='metadata-line'] > span:nth-child(2)").innerText;

        return{
            videoTitle,
            channelName,
            viewers,
            uploadTime
        }

    });

    console.log(data);

    await browser.close();
})();
