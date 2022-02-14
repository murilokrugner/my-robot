const puppeteer = require('puppeteer');

async function robo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = `https://www.instagram.com/`;
  await page.goto(url);


  //await browser.close();
}

robo();