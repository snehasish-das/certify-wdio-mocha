import homePage from '../../../../pages/home.page'
import voiceTilePage from '../../../../pages/voiceportal/Home/voiceTile.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
describe('Voice Portal Voice Tile Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to voice >> voice tile', async() =>{
        await voiceLandingPage.clickMenu("VOICES");
        await homePage.waitFor(1000);
     });
     it('Verify Project Tile Name', async() =>{
        await voiceTilePage.verifyProjectTileName();
        await voiceTilePage.waitFor(3000);
     });

     it('Verify UM Tile Name', async() =>{
        await voiceTilePage.verifyUMTileName();
        await voiceTilePage.waitFor(3000);
     }); 

     it('Verify Reports Tile Name', async() =>{
        await voiceTilePage.verifyReportsTileName();
        await voiceTilePage.waitFor(3000);
     }); 
     it('Verify Call Search Tile Name', async() =>{
        await voiceTilePage.verifyCallTileName();
        await voiceTilePage.waitFor(3000);
     }); 
     it('Verify Telephony Tile Name', async() =>{
        await voiceTilePage.verifyTelephonyTileName();
        await voiceTilePage.waitFor(3000);
     }); 
     it('Verify Webservice Tile Name', async() =>{
        await voiceTilePage.verifyWebserviceTileName();
        await voiceTilePage.waitFor(3000);
     }); 
     it('Verify EM Tile Name', async() =>{
        await voiceTilePage.verifyEMTileName();
        await voiceTilePage.waitFor(3000);
     }); 
   
     it('Verify Announcement Name', async() =>{
        await voiceTilePage.verifyAnnouncementsName();
        await voiceTilePage.waitFor(3000);
     }); 

});