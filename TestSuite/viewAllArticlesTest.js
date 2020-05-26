
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");
const mocha = require('./../Reporter/reporter')

module.exports = function testViewAllArticles(driver,actions,kb,mouse){
    describe("#View all articles",()=>{
        describe("Firefox",()=>{
            
            it("should open and wikigoapptest.herokuapp.com and check for Add New Article title",(done)=>{
                driver.findElement(By.xpath('/html/body/div[1]/nav/h4')).getText()
                .then(element=>{
                    assert.equal(element,"| Add New Article")
                    done()
                })
                .catch(err=>{
                    done(err)
                })
            })
            
        })
    })
}

