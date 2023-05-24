import homePage from '../../../pages/home.page'
import mssWorkspacePage from '../../../pages/messaging/mssWorkspace.page';



const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Messaging Routing tests-->', async() => {
    before('Login and navigate to Messaging', async() =>{
        
        await homePage.navigateTo(env.mss_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
        //await homePage.selectClientName('Sales Demo'); //selecting the client before clicking on MSS tile
        await mssWorkspacePage.selectClient("GCP Sales Demo");
        //await mssWorkspacePage.selectclientname_mss(); //GCP client - GCPSalesdemo
        await homePage.waitFor(5000);
        await mssWorkspacePage.clickOnMainTab('Routing');
        await mssWorkspacePage.waitFor(5000);
    });
    
    it('Set Routing on Common Setting Tab', async() => {
        console.log("Set Routing on  CommonSetting Tab");     
        
        await mssWorkspacePage.clickLeftMenuItem('Common Settings');
        await mssWorkspacePage.selectRouting('va,chat'); //va-Only Bot , chat-Only Assist , va,chat-Bot+Assist
        await mssWorkspacePage.waitFor(2000);


    })
    it('Set Routing on  Web and Mobile', async() => {
        console.log("Set Routing on Web and Mobile");
        await mssWorkspacePage.clickLeftMenuItem('Web and Mobile');
        await mssWorkspacePage.selectRouting('va,chat');
        await mssWorkspacePage.waitFor(2000);


    })
    it('Set Routing on Apple Business Chat', async() => {
        console.log("Set Routing on Apple Business Chat");
        await mssWorkspacePage.clickLeftMenuItem('Apple Messages for Business');
        await mssWorkspacePage.selectRouting('va,chat');
        await mssWorkspacePage.waitFor(2000);
    })
    it('Set Routing on Facebook Messenger', async() => {
        console.log("Set Routing on Facebook Messenger");
        await mssWorkspacePage.clickLeftMenuItem('Facebook Messenger');
        await mssWorkspacePage.selectRouting('va,chat');
        await mssWorkspacePage.waitFor(2000);


    })
    it('Set Routing on  Google Business Messaging', async() => {
        console.log("Set Routing on Google Business Messaging");
        await mssWorkspacePage.clickLeftMenuItem('Google Business Messaging');
        await mssWorkspacePage.selectRouting('va,chat');
        await mssWorkspacePage.waitFor(2000);

    })
    it('Saving ROUTING configurations', async()=>{
        
        await mssWorkspacePage.clickButton('SAVE');
        await mssWorkspacePage.waitFor(3000);
        await mssWorkspacePage.assertSuccessMessage('Configuration has been saved');
    
    })

})