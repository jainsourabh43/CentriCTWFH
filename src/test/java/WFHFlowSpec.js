describe('Protractor Demo', function() {
it('to check the WFH flow', function() {
browser.ignoreSynchronization = true;
browser.get('http://centrict.citiustech.com/');
browser.manage().window().maximize();
var ele=element(by.name('loginfmt'));
ele.sendKeys('sourabh.jain@citiustech.com');

browser.driver.getTitle().then(function(pageTitle) {
expect(pageTitle).toEqual('Sign in to your account');

});
var nextBtn=element(by.css('input#idSIButton9'));
nextBtn.click();
browser.sleep(5000);

var password=element(by.css('input#passwordInput'));
password.sendKeys('CT@987654321');

var signInBtn=element(by.css('span#submitButton'));
signInBtn.click();

var authReq=element(by.css("input[value='push']"));
authReq.click();

var authReq=element(by.css("input[name='Continue']"));
authReq.click();

var YesBtn=element(by.css('input#idSIButton9'));
YesBtn.click();

var employeeSelfService=element(by.css('span#DefaultDashboard_2_HcmEmployeeSelfServiceWorkspace_text'));
employeeSelfService.click();

//span#EssWorkspace_6_CITLeaveApplication_label
browser.sleep(5000);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
var requestApproveTimeOffLink=element(by.xpath("//span[contains(@id,'_CITLeaveApplication_label')]"));
requestApproveTimeOffLink.click();

var requestTimeOffLink=element(by.xpath("//span[contains(@id,'RequestTimeOFF_label')]"));
requestTimeOffLink.click();

var fromDate=element(by.css('input#CITCreateTimeOffRequest_5_CITLeaveRequestTable_FromDate_input'));
fromDate.sendKeys('4/26/2020');


});
});