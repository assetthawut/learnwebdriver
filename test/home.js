var webdriver = require('selenium-webdriver');
var By        = webdriver.By;
var driver;
var BasePage = require('./base');

class HomePage extends BasePage {
   /* 
    constructor(){
        driver = new  webdriver.Builder().forBrowser('chrome').build();
    }
    */
    
    goToUrl(){
       this.driver.get("http://www.google.co.th");
    }

    exitUrl(){
        this.driver.quit();
    }

    sayHello(){
        console.log("Say Hello To You");
    }

    sum(a,b,c){
        var sum = a + b + c;
        return sum;
    }

    sendData(word){
        this.driver.findElement(By.id('lst-ib')).sendKeys(word);
        this.driver.findElement(By.xpath("//input[@name='btnK']")).click();
    }
}

module.exports = new HomePage();