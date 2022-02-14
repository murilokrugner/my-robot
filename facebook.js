const puppeteer = require('puppeteer');
require('dotenv/config');

async function robo() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const url = `https://m.facebook.com/`;
  await page.goto(url);

  await page.type('[name="email"]', process.env.FACEBOOK_EMAIL);
  await page.type('[name="pass"]', process.env.FACEBOOK_PASSWORD);

  await page.click('[type="button"]')

  await page.waitForNavigation();
  
  while (true) {  
    try {
      await page.goto(process.env.FACEBOOK_URL);

      await page.click('[value="Amigos"]');
      await page.click('[data-sigil="touchable touchable mflyout-remove-on-click m-unfriend-request"]');
    } catch (error) {
      await page.goto(process.env.FACEBOOK_URL);
    }
  }
  
  //await browser.close();
}

robo();