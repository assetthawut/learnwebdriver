
//const {Builder, By, until} = require('selenium-webdriver');
const {describe,it,after,before} = require('selenium-webdriver/testing');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver;

describe('Library app scenario',function(){
    beforeEach(function(){

        this.timeout(1000);
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://www.google.co.th');     
    });
    afterEach(function(){
    
        driver.quit();

    });
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
        

       
});


   
    