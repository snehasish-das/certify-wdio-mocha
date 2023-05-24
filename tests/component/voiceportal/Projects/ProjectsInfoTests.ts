import homePage from '../../../../pages/home.page'
import infoPage from '../../../../pages/voiceportal/Projects/info.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Projects -> Info Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to projects >> info', async() =>{
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Info");
        await homePage.waitFor(5000);
    });
    it('Verify Info Client Svg Icon', async() =>{
        await infoPage.verifyInfoClientSvg();
        await homePage.waitFor(3000);
     });
     it('Selecct Info Client from Dropdown', async() =>{
        await infoPage.selectInfoClient();
        await infoPage.waitFor(3000);
     });
     it('Verify Info Project Svg Icon', async() =>{
        await infoPage.verifyInfoProjectSvg();
        await infoPage.waitFor(3000);
     });


     it('Selecct Info Project from Dropdown', async() =>{
        await infoPage.selectInfoProject("247 Speech Platform Dev");
        await infoPage.waitFor(3000);
     });
     it('Verify Info table row type', async() =>{
        await infoPage.selectInfoTableDescription("Description");
        await infoPage.selectInfoTableDescription("Project Administrators");
        await infoPage.selectInfoTableDescription("Company Administrators");
        await infoPage.selectInfoTableDescription("Transfer Destination Groups");
       });
      
       it('Verify Info Edit and Add Transfersfer destination groups', async() =>{
            await infoPage.selectTransferDestinationGroup();
      });
    
      it('Verify to Add Transfersfer destination group', async() =>{
        await infoPage.addGroup("test1");
        await infoPage.waitFor(3000);
        await infoPage.addDestNumber("9999988888");
        await infoPage.waitFor(3000);
        await infoPage.TDsubmit('Add');

      });
});