import homePage from '../../../pages/home.page'
import mssWorkspacePage from '../../../pages/messaging/mssWorkspace.page';



const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Messaging VersionTab tests-->', async() => {
    before('Login and navigate to Messaging', async() =>{
        
        await homePage.navigateTo(env.mss_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await mssWorkspacePage.selectClient("GCP Sales Demo");
        //await mssWorkspacePage.selectclientname_mss(); //GCP client - GCPSalesdemo
        //await homePage.clickTile('Messaging');  
        //await homePage.waitFor(5000);
       // await homePage.chooseWorkspace('Default');  //selecting the app name
        //await homePage.waitFor(5000);
    });
    it('Creating a New Version', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickButton('CREATE VERSION');
        await mssWorkspacePage.clickButton('Confirm');
        await mssWorkspacePage.waitFor(10000);
        await mssWorkspacePage.assertSuccessMessage('Configuration has been validated and version is created');
    })
    it('New version - publishing to TEST', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickOnVersionTab();
        await mssWorkspacePage.clickButton('Publish to Test');
        await mssWorkspacePage.clickButton('OK');
        await mssWorkspacePage.waitFor(10000);
        await mssWorkspacePage.assertVerionPublishStatus('Status is TEST');
    })
    it('New version - publishing to LIVE', async() => {
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.clickButton('Publish to Live');
        await mssWorkspacePage.clickButton('OK');
        await mssWorkspacePage.waitFor(10000);
        await mssWorkspacePage.assertVerionPublishStatus('Status is LIVE');
    })

})  