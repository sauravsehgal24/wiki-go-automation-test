
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("chai").assert;
const ROOT = '/html/body/div';
describe("Firefox",()=>{

  it("should open wikigoapptest.herokuapp.com and click on Add New Article",(done)=>{
    let driver = new Builder().forBrowser('firefox').build();
    const actions = driver.actions({async: true});
    const kb = actions.keyboard();
    const mouse = actions.mouse();

    driver.then(()=>{
      return driver.get('https://wikigoapptest.herokuapp.com/');
    })
    .then(()=>{
      return driver.findElement(By.xpath('/html/body/div[1]/nav/div/div/a[2]/a'))
    })
    .then((element)=>{
      actions.pause(mouse).move({origin: element}).press().release();
      return actions.perform();
    })
    .then(()=>{
      driver.quit()
      done()
    })
    .catch((err)=>{
      console.log("ERROR IS: "+err)
      driver.quit()
      .then(()=>{
        done()
        assert.fail()
      })
    })
    
  })

})


