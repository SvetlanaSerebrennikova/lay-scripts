const puppeteer = require("puppeteer");

;(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args:["--no-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto(`http://lay-test-e68fd.web.app`);
    await page.setViewport({ width: 1680, height: 1050 })
    await page.waitForTimeout(5000);
    
    try {
        var scriptName = "snackbar"
        await page.waitForSelector(".style__infoBtn___3Kw8c");
        console.log(`${scriptName} script succeeded`)
    } catch (error) {
       console.log(`${scriptName} script failed`, error) 
    }
    
    try {
        var scriptName = "terms"
        await page.click(".style__footerTermsPolicy___5J_NW>a");
        await page.waitForTimeout(2000);
        await page.goto(`http://lay-test-e68fd.web.app`);
        console.log(`${scriptName} script succeeded`)
    } catch (error) {
       console.log(`${scriptName} script failed`, error) 
    }

    try {
        var scriptName = "policy"
        await page.click(".style__footerTermsPolicy___5J_NW>a:nth-child(2)");
        await page.screenshot({ path: `lay-snackbar.png` });
        await page.waitForTimeout(2000);
        await page.goto(`http://lay-test-e68fd.web.app`);
        console.log(`${scriptName} script succeeded`)
    } catch (error) {
       console.log(`${scriptName} script failed`, error) 
    }

    try {
        var scriptName = "languages"
        await page.click(".style__lang___2Hiy4:nth-child(1)");
        await page.click(".style__lang___2Hiy4:nth-child(3)");
        await page.click(".style__lang___2Hiy4:nth-child(5)");
        console.log(`${scriptName} script succeeded`)
    } catch (error) {
       console.log(`${scriptName} script failed`, error) 
    }


    try {
        var scriptName = "login"
        const email = "Manlove.women@bk.ru";
        const password = "Pppppp00)";
        
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `signupsucces.png` });
        await page.click(".MuiButton-label");
        await page.waitForTimeout(5000);
        await page.click(".MuiTab-wrapper.style__tabText___3Drbp")
        await page.type("input[type=text]", email);
        await page.type("input[type=password]", password);
        await page.click(".MuiButton-containedPrimary >.MuiTouchRipple-root");
        await page.waitForTimeout(3000);
        console.log(`${scriptName} script succeeded`)
    } catch (error) {
       console.log(`${scriptName} script failed`, error) 
    }

    //".style__selectWrap___MCgnk:nth-child(4) > div > div > input"


    browser.close();

})()