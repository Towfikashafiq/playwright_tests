// const { test, expect } = require('@playwright/test');
// const { chromium } = require('playwright');

// test('basic test', async () => {
//     const browser = await chromium.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('http://localhost:3000/register')
//     await page.fill('input[name="fullName"]','towfika bintay shafiq')
//     await page.fill('input[name="phoneNumber"]','01647663115')
//     await page.fill('input[type="email"]','towfikasinthya120@gmail.com')
//     await page.type('input[name="password"]','IOPiop11#')
//     await page.type('input[name="confirmPassword"]','IOPiop11#')
//     await page.click('input[type="checkbox"]')
//     await page.click('form>>"Sign Up"')
//     await expect(page.url('http://localhost:3000/user/register/state').match('http://localhost:3000/user/register/state'))
    
// });