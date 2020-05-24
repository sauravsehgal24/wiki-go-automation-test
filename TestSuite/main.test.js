const viewAllArticlesTests = require('./viewAllArticlesTest')
const addArticleTests = require('./addArticleTest')
const {Builder, By, Key, until} = require('selenium-webdriver');

describe("#MAIN TEST",()=>{

    var driver,actions,kb,mouse;

    before(()=>{
        driver = new Builder().forBrowser('firefox').build();
        actions = driver.actions({async: true});
        kb = actions.keyboard();
        mouse = actions.mouse();
    })

    it("run main test",async ()=>{
        addArticleTests(driver,actions,kb,mouse)
        viewAllArticlesTests(driver,actions,kb,mouse)
    })

   
    
})