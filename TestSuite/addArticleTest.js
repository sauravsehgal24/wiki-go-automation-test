
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

module.exports = function testAddArticle(driver,actions,kb,mouse){
  describe("#Add functionality",()=>{
    describe("Firefox",()=>{
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
          const dataSet = ["newjam123","newjam123 author","newjam123 genere"]
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
        },5000)
    })
    })
  })
}




