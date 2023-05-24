
import homePage from '../../../pages/home.page'
import mssWorkspacePage from '../../../pages/messaging/mssWorkspace.page';



const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Messaging Channels tests-->', async() => {
    before('Login and navigate to Messaging', async() =>{
        
        await homePage.navigateTo(env.mss_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
       //await mssWorkspacePage.selectclientname_mss(); //GCP client - GCPSalesdemo
        await mssWorkspacePage.selectClient("GCP Sales Demo"); 
        //await homePage.clickTile('Messaging');  
        await homePage.waitFor(5000);
        // await homePage.chooseWorkspace('Default');  //selecting the app name
        await mssWorkspacePage.clickOnMainTab('Channels');
        await homePage.waitFor(5000);
    });
    it('TestID=1, TestName=Verifing Web and Mobile Features, Product=Self-Serve/MSS', async() => {
        console.log("Verifying Web and Mobile configurations");
        //await mssWorkspacePage.clickLeftMenuItem("Web and Mobile");
        //await mssWorkspacePage.selectColor();  //verifying colour change
        await mssWorkspacePage.assertWebPreivew();
        await mssWorkspacePage.waitFor(4000);
        await mssWorkspacePage.clickSubMenu('Branding');
        await mssWorkspacePage.waitFor(2000);
        await mssWorkspacePage.selectRadioButton('Custom branding with logo');
        await mssWorkspacePage.selectRadioButton('No branding area');
        await mssWorkspacePage.isSelectedRadioBtn('No branding area');
        
        
    });
    it('TestID=2, TestName=Verifing Apple Business Chat, Product=Self-Serve/MSS', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickLeftMenuItem("Apple Messages for Business");
        await mssWorkspacePage.getToggleState("ABC");       

    })
    it('TestID=3, TestName=Verifing Facebook Messenger, Product=Self-Serve/MSS', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickLeftMenuItem("Facebook Messenger");
        await mssWorkspacePage.getToggleState("FB");       

    })
    it('TestID=4, TestName=Verifing Google Business Messaging , Product=Self-Serve/MSS', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickLeftMenuItem("Google Business Messaging");
        await mssWorkspacePage.getToggleState("GBM");       

    })
    it('TestID=5, TestName=Verifing General Settings- Survey Form configuration, Product=Self-Serve/MSS', async()=>{
        await mssWorkspacePage.waitFor(5000);
        //await mssWorkspacePage.clickGeneralSetting();
        await mssWorkspacePage.clickSubMenu("Customer Experience Survey");
        await mssWorkspacePage.waitFor(10000);
        await mssWorkspacePage.isClickableEle();
        await mssWorkspacePage.getToggleState("Exit Survey");   
        await mssWorkspacePage.verifyToggle();

    })
    it('TestID=6, TestName=Saving the CHANNEL configurations, Product=Self-Serve/MSS', async()=>{
        
        await mssWorkspacePage.clickButton('SAVE');
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.assertSuccessMessage('Configuration has been saved');
    
    })
    
  
})