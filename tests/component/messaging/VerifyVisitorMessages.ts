import homePage from '../../../pages/home.page'
import mssWorkspacePage from '../../../pages/messaging/mssWorkspace.page';



const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Messaging VisitorMessage tests-->', async() => {
    before('Login and navigate to Messaging', async() =>{
        
        await homePage.navigateTo(env.mss_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await mssWorkspacePage.selectClient("GCP Sales Demo"); 
        //await mssWorkspacePage.selectclientname_mss(); //GCP client - GCPSalesdemo//await homePage.clickTile('Messaging');  
        //await homePage.waitFor(5000);
       // await homePage.chooseWorkspace('Default');  //selecting the app name
        //await homePage.waitFor(5000);
    });
    it('Updating Visitor Messages ', async() => {
        await mssWorkspacePage.clickOnMainTab('Visitor Messages');
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.updateVisitorMessage("{agentName} will help you, and you'll get a notification as soon as they respond.");
    })
    it('Saving the VisitorMessages Configurations', async()=>{
        
        await mssWorkspacePage.clickButton('SAVE');
        await mssWorkspacePage.waitFor(5000);
        await mssWorkspacePage.assertSuccessMessage('Configuration has been saved');
    
    })


})  