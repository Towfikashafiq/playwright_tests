// const { test, expect } = require('@playwright/test');
// const { chromium } = require('playwright');

// test('basic test', async () => {
//     const browser = await chromium.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('http://localhost:3000/login')
//     await page.fill('input[type="email"]','towfikasinthya120@gmail.com')
//     await page.press('input[type="email"]','Tab')
//     await page.type('input[type="password"]','IOPiop11#')
//     await page.click('form>>"Login"')
//     await expect(page.url('http://localhost:3000/user/dashboard').match('http://localhost:3000/user/dashboard'))
//     await page.screenshot({path:'login.png'})
// });