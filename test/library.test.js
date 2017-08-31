
var homePage = require('./home');
var chai     = require('chai');
var should   = chai.should;
//var basePage = require('./base');
homePage.goToUrl();
//homePage.gotoTuPoint
homePage.sayHello();
   
console.log(homePage.sum(10,20,10)); 
//homePage.sendData("Joe");

chai.assert(1,1);

describe('App',function(){
    it('10 should equal 10',function(){
        chai.assert.equal(10,10,"Test 1 equal 1");
    });

    it("Is Not Array",function(){
        var test = "Test";
       
        //chai.assert.equal(10,10,"Test 1 equal 1");
        chai.assert.isNotArray(test);
        
    });

    it("Is Array",function(){
        var array = [1,2,3,4,5,6];
        chai.assert.isArray(array);
    });

    it("Not equal",function(){
    
    });
});


//homePage.exitUrl();

// var webdriver = require('selenium-webdriver');
// var By = webdriver.By;

// var driver = new  webdriver.Builder().forBrowser('chrome').build();
// const {describe,it,after,before} = require('selenium-webdriver/testing');


// console.log("Running Done!!!");



//     //driver = new webdriver.Builder().forBrowser('chrome').build();
//     driver.get("http://www.google.co.th");
//     driver.findElement(By.className("gb_P")).then(function(heading){
//             heading.getText().then(function(text){
//                 console.log("Text from h1: "+ text);
//             });
//     });
//     driver.quit();

// console.log("After run")


/*
// flawed = ข้อบกพร่อง 
var WebDriver = require('selenium-webdriver');
var Assert = require('assert');

var driver = new WebDriver.Builder().withCapabilities({'browserName': 'chrome'}).build();

driver.get('http://www.google.com');
driver.findElement(WebDriver.By.name('q')).sendKeys('webdriver');
driver.findElement(WebDriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  Assert.equal('webdriver - Google Search', title);
});

*/ 







/* --------------------------------------------  */




/*
//const {Builder, By, until} = require('selenium-webdriver');
//const {describe,it,after,before} = require('selenium-webdriver/testing');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    assert = require('assert'),
    {describe,it,after,before} = require('selenium-webdriver/testing');

var driver;
var find;
var Page = require('../lib/base_page');
var page;

*/

/* ------------------------------------------------------------------*/
/*

describe('library app scenarios',function(){

    beforeEach(function(){
    this.timeout(15000);
            driver = new webdriver.Builder().forBrowser('chrome').build();
            driver.get('http://www.google.co.th');

    });


    it('Test 1',function(done){
            this.timeout(15000);
            driver.findElement(By.className("gb_P")).getText().then(function(txt){
                console.log("Show text "+txt);
            });
            done();
    });

    afterEach(function(){
            driver.quit();
    });

});

*/

/* --------------------------------------------------------------  */
/*
describe('Test Scenario ', function(){
  this.timeout(15000);
  page = new Page();

    beforeEach(function(){
    //this.timeout(15000);
            
           // this.driver = new webdriver.Builder().forBrowser('chrome').build();
           // this.driver.get('http://www.google.co.th');
              
            page.driver = new webdriver.Builder().forBrowser('chrome').build();
            page.visit("http://www.google.co.th");

    });

 

  it(' It should return equal ', function(done){
    page.timeout(15000);
    setTimeout(done, 15000);
   
    page.driver.findElement(By.className("gb_P")).getText().then(function(txt){
                console.log("Show text "+txt);
                assert(txt == "Gmail");
            });
      
        console.log('Helo');
         done();
  });

  it('It should retrun "Google.co.th ที่เป็นภาษา: English" ',function(done){
        page.timeout(15000);
        setTimeout(done,15000);
      
        page.driver.findElement(By.id("_eEe")).getText().then(function(txt){
                console.log("Return value : "+txt);
               
        });
       
        console.log('Halo');
        done();

  });




afterEach(function(){
            page.driver.quit();
    });


});

*/






/*
describe('Library app scenario',function(){
    beforeEach(function(){

        this.timeout(1000);
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://www.google.co.th');     
    });

    it('Test_1',function(){
        
    });
    afterEach(function(){
    
        driver.quit();


    });
*/
   // it('work with mocha 1',function(){
   

    //driver.findElement(By.className("gb_P")).click();
    
    //console.log(driver.findElement(By.className("gb_P")).getText());

    //driver.findElement(By.className("gsfi")).sendKeys("ครัวคุณต๋อย");
    //driver.findElement(By.className("gsfi")).then(function(el){
       // console.log("Success" + el);
    //},5000);
        
   // }).;
    
 
    //driver.sleep(3000);
    //driver.quit();
   // console.log("Success");
        

/*       
});

*/


   
    