const { chromium } = require('playwright');
const expect = require('expect');

(async() =>{
  const browser = await chromium.launch({headless:false})
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('http://localhost:5002/login')
  await page.fill('input[type="email"]','towfikasinthya120@gmail.com')
  await page.press('input[type="email"]','Tab')
  await page.type('input[type="password"]','IOPiop11#')
  await page.click('form>>"Login"')
  await context.storageState({path:'state.json'})
  await page.screenshot({path:'login.png'})
})()