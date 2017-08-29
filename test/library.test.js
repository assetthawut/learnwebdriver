
//const {Builder, By, until} = require('selenium-webdriver');
//const {describe,it,after,before} = require('selenium-webdriver/testing');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    {describe,it,after,before} = require('selenium-webdriver/testing');

var driver;

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

describe('Test Scenario ', function(){
  this.timeout(15000);


    beforeEach(function(){
    //this.timeout(15000);
            driver = new webdriver.Builder().forBrowser('chrome').build();
            driver.get('http://www.google.co.th');

    });

 

  it(' First ', function(done){
    this.timeout(15000);
    setTimeout(done, 15000);
    driver.findElement(By.className("gb_P")).getText().then(function(txt){
                console.log("Show text "+txt);
            });
         done();
  });

  it('It should retrun "Google.co.th ที่เป็นภาษา: English" ',function(done){
        this.timeout(15000);
        setTimeout(done,15000);
        driver.findElement(By.id("_eEe")).getText().then(function(txt){
                console.log("Return value : "+txt);
        });
        done();

  });

afterEach(function(){
            driver.quit();
    });


});









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


   
    