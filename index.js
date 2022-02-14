const puppeteer = require('puppeteer');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://www.google.com/search?q=bitcoin&oq=bitcoin&aqs=chrome..69i57j35i39j69i59l2j0i131i433i512l3j0i433i512l3.1519j0j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);
  
  const resultado = await page.evaluate(() => {
    return document.querySelector('.cilsF.a61j6').value;    
  });

  console.log(`O valor de 1 Bitcoin em Reais é: ${resultado}`);
 await browser.close();
}

robo();https://www.instagram.com/