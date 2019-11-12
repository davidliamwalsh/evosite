  const puppeteer = require('puppeteer');

  test("page has carousel", async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')

    // await page.screenshot({path: 'index.png'})

    const message = await page.$eval('[data-test=header-message]', el => el.textContent)

    expect(message).toEqual('explore')
    expect(message).not.toEqual('abc')
  })