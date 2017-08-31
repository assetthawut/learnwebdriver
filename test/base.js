var webdriver = require('selenium-webdriver');
class BasePage{
    constructor(){
      this.driver = new  webdriver.Builder().forBrowser('chrome').build();
    }

    gotoTuPoint(){
        driver.get("http://www.google.co.th");
    }
}

module.exports = BasePage;