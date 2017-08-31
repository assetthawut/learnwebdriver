
/*
var WebDriver = require('selenium-webdriver');
var Assert = require('assert');

var driver = new WebDriver.Builder().withCapabilities({'browserName': 'firefox'}).build();

var searchPage = new SearchPage(driver).visit();
searchPage.searchFor('webdriver');

resultsPage.title().then(function(title) {
  Assert.equal('webdriver - Google Search', title);
});
*/
/* 
var webdriver = require ('selenium-webdriver'),
  { describe,it,after,before} = require('selenium-webdriver/testing'),
  By    = webdriver.By,
  until = webdriver.until,

  
 chrome = require('selenium-webdriver/chrome'),
 o = new chrome.Options();
 o.addArguments('disable-infobars');

 var Page = function(){
         this.driver = new webdriver.Builder().forBrowser('chrome').build();
         var driver = this.driver;
         
         
         this.visit = function(theUrl){
            return driver.get(theUrl);
         }

         this.quit = function(){
             return driver.quit();
         }

         this.find = function(el){
             driver.wait(until.elementLocated(By.id(el)),5000);
             return driver.findElement(By.id(el));
         }

         this.FindAll = function(el){
             driver.wait(until.elementLocated(By.id()),5000);
             return driver.findElements(By.id(el));
         }

         this.write = function(el,txt){
             return this.find(el).sendKeys(txt);
         }
}

module.exports  = Page;


*/