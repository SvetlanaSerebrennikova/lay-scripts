const mobile = false;
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: [
        mobile ?
        '--window-size=414,736' :
        '--window-size=1360,768'
    ]
  });
  
  const page = await browser.newPage();
  await page.goto("http://lay-test-e68fd.web.app");

  // await page.screenshot({ path:`signupsucces.png` });

  //логирование размеров экрана
//   const dimensions = await page.evaluate(() => {
//     return {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//     };
//   });
//   console.log('Dimensions:', dimensions);
  await page.waitForTimeout(5000);

  try {
    var scriptName = "snackbar"
    await page.click("[data-pptr=snackbar-btn]");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  try {
      var scriptName = "terms"
      await page.click("[data-pptr=terms]");
      await page.waitForTimeout(2000);
      await page.goto("http://lay-test-e68fd.web.app");
      await page.waitForTimeout(5000);
      console.log(`${scriptName} script succeeded`);
  } catch (error) {
     console.log(`${scriptName} script failed`, error);
  }

  try {
      var scriptName = "policy"
      await page.click("[data-pptr=privacy]");
      await page.waitForTimeout(2000);
      await page.goto("http://lay-test-e68fd.web.app");
      await page.waitForTimeout(5000);
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
    var scriptName = "login"
    const email = "Manlove.women@bk.ru";
    const password = "Pppppp00)";

    await page.click("[data-pptr=signup]");
    await page.waitForSelector("[data-pptr=signin-tab]")
    await page.click("[data-pptr=signin-tab]")
    await page.waitForTimeout(5000)
    
    await page.type("input[type=text]", email);
    await page.type("input[type=password]", password);
    await page.click("[data-pptr=signinContinue]");
    await page.waitForTimeout(5000);
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }
  
  try {
    var scriptName = "edit profile";
    const name = "Harry";
    await page.click("[data-pptr=edit]")
    await page.waitForTimeout(3000);
    await page.click("[data-pptr=displayName]")
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.type("div[data-pptr=displayName] input", name);
    await page.click("[data-pptr=city]")
    await page.waitForTimeout(3000);
    await page.click("[data-pptr=ainaži]");
    await page.click("[data-pptr=lookingFor]");
    await page.waitForTimeout(1000);
    await page.click("[data-pptr=man]");
    await page.waitForTimeout(1000);
    await page.click("[data-pptr=chip-1] svg");
    await page.waitForTimeout(1000);
    await page.click("[data-pptr=lookingFor]");
    await page.waitForTimeout(1000);
    await page.click("[data-pptr=nextMain]");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  try {
    var scriptName = "about you";
    const helloMessage = "test";
    const occupation = "test";
    const interests = "test";
    const dressStyle = "test";
    await page.waitForTimeout(5000);
    await page.type("[data-pptr=helloMessage]", helloMessage);
    await page.click("[data-pptr=languages]");
    await page.click("[data-pptr=english]");
    await page.click("[data-pptr=languages]");
    await page.click("[data-pptr=figure]");
    await page.click("[data-pptr=athletic]");
    await page.click("div[data-pptr=height]");
    await page.type("[data-pptr=height]", "170");
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(5000);
    await page.click("[data-pptr=ethnicity]");
    await page.click("[data-pptr=african]");
    await page.waitForTimeout(5000);
    await page.click("[data-pptr=hair]");
    await page.click("[data-pptr=black]");
    await page.waitForTimeout(5000);
    await page.click("[data-pptr=eyes]");
    await page.click("[data-pptr=amber]");
    await page.waitForTimeout(5000);
    await page.type("div [data-pptr=occupation]", occupation);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.click("[data-pptr=interests]", interests);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.click("[data-pptr=dressStyle]", dressStyle);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.click("[data-pptr=nextAboutYou]");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  try {
    var scriptName = "secrets"
    const likes = "test";
    const dislikes = "test";
    await page.waitForTimeout(5000);
    await page.type("[data-pptr=whatYouLikeInSex] textarea", likes);
    await page.type("[data-pptr=whatYouDontLikeInSex]", dislikes);
    await page.waitForTimeout(5000);
    await page.click("[data-pptr=areaAvailability]");
    await page.waitForTimeout(5000);
    await page.click("[data-pptr=onlyWithinMyCity]");
    await page.waitForTimeout(5000);
    await page.type("[data-pptr=expectedReward]", "200");
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.click("[data-pptr=nextSecrets]");
    await page.click("[data-pptr=continueWithoutPhone]");
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  try {
    var scriptName = "photo";
    const inputUploadHandle = await page.$('input[type=file]');
    await page.waitForTimeout(5000);
  let fileToUpload = `testPhoto.jpg`;
  inputUploadHandle.uploadFile(fileToUpload);
  await page.evaluate(() => document.querySelector(`[data-pptr=addPhoto]`).click());
  await page.waitForTimeout(5000);
    console.log(`${scriptName} script succeeded`);
  } catch (error) {
    console.log(`${scriptName} script failed`, error)
  }

  await browser.close();

})()

