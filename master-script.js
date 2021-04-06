const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args:["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto("http://lay-test-e68fd.web.app");
  await page.setViewport({ width: 1680, height: 1050 })
  await page.waitForTimeout(5000);

  try {
    var scriptName = "snackbar"
    await page.click(".style__infoBtn___3Kw8c");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  try {
      var scriptName = "terms"
      await page.click("[data-pptr=terms]");
      await page.waitForTimeout(2000);
      await page.goto("http://lay-test-e68fd.web.app");
      console.log(`${scriptName} script succeeded`);
  } catch (error) {
     console.log(`${scriptName} script failed`, error);
  }

  try {
      var scriptName = "policy"
      await page.click("[data-pptr=privacy]");
      await page.waitForTimeout(5000);
      await page.goto("http://lay-test-e68fd.web.app");
      console.log(`${scriptName} script succeeded`)
  } catch (error) {
     console.log(`${scriptName} script failed`, error) 
  }

  try {
    var scriptName = "languages";
    await page.click("[data-pptr=en]");
    await page.click("[data-pptr=ru]");
    await page.click("[data-pptr=lv]");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }


  try {
    var scriptName = "add profile"
    await page.click(".MuiButton-label.jss28");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }


  try {
    var scriptName = "login"
    const email = "Manlove.women@bk.ru";
    const password = "Pppppp00)";
    await page.waitForTimeout(5000);
    await page.screenshot({ path:`signupsucces.png` });
    await page.click("[data-pptr=signup]");
    await page.waitForTimeout(5000);
    await page.click(".MuiTab-wrapper.style__tabText___3Drbp");
    await page.type("input[type=text]", email);
    await page.type("input[type=password]", password);
    await page.click(".MuiButton-containedPrimary >.MuiTouchRipple-root");
    await page.waitForTimeout(3000);
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }
  
  await browser.close();

})()