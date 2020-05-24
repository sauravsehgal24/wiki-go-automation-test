
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

describe("#Add functionality",()=>{
  describe("Firefox",()=>{
    var driver,actions,kb,mouse;
    before(()=>{
      driver = new Builder().forBrowser('firefox').build();
      actions = driver.actions({async: true});
      kb = actions.keyboard();
      mouse = actions.mouse();
    })
    
    it("should open wikigoapptest.herokuapp.com and click on Add New Article",(done)=>{
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
        done()
      })
      .catch((err)=>{
        done(err)
      })
    })
    it("supply data to inputs and click on add button",(done)=>{
      const supplyInputValues = ()=>{
        const dataSet = ["newjam1","newjam1 author","newjam1 genere"]
        return new Promise((resolve,reject)=>{
          dataSet.map((data)=>{
            const index = dataSet.indexOf(data)+1
             driver.findElement(By.xpath(`/html/body/div[1]/div/div/div[${index}]/input`))
            .then((element)=>{
              element.sendKeys(data);
              if(index === 2)
                resolve()
            })
            .catch(err=>{
              done(err)
            })
          })
        })
      }

      supplyInputValues()
      .then(()=>{
        return driver.findElement(By.xpath('/html/body/div[1]/div/div/button[1]'))
      })
      .then((element)=>{
        actions.pause(mouse).move({origin: element}).press().release();
        return actions.perform();
      })
      .then(()=>{
        done()
      })
      .catch((err)=>{
        console.log("ERROR IS: "+err)
        done(err)
      })

    })
    after(()=>{
      setTimeout(()=>{
        driver.quit()
      },3000)
    })
  })
})



