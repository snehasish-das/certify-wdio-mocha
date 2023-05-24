import homePage from '../../../../pages/home.page'
import serviceErrorAudioPage from '../../../../pages/voiceportal/Services/serviceErrorAudio.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Services/serviceErrorAudioPage')
describe('Voice Portal Service -> Error Audio Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to Service >> Error Audio', async() =>{
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(1000);
        await voiceLandingPage.clickTab("Error Audio");
        await homePage.waitFor(2000);
    });
    it('Verify service Error audio client', async() =>{
        await serviceErrorAudioPage.waitFor(2000);
        await serviceErrorAudioPage.changeClient('TVP_Automation');
        await serviceErrorAudioPage.waitFor(5000);
    });
    it('Verify upload audio', async() =>{
        await serviceErrorAudioPage.ClickOnUploadErrorAudio();
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.uploadFile("test.wav");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.addUploadFileDesc("errorAudioTest");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Upload');
        await serviceErrorAudioPage.waitFor(10000);
       
    });
    it('Edit upload audio', async() =>{
        await serviceErrorAudioPage.ClickOnLatestUploadFile("errorAudioTest");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.ClickOnLatestUploadFileDesc("errorAudioTest-Updated");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Update');
        await serviceErrorAudioPage.waitFor(10000);
       
    });
    it('Verify upload transfer audio', async() =>{
        await serviceErrorAudioPage.ClickOnUploadErrorTransferAudio();
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.uploadFile("test_transfer.wav");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.addUploadFileDesc("transferAudioTest");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Upload');
        await serviceErrorAudioPage.waitFor(10000);
       
    });
    it('Edit upload audio', async() =>{
        await serviceErrorAudioPage.ClickOnLatestUploadFile("transferAudioTest");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.ClickOnLatestUploadFileDesc("transferAudioTest-Updated");
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Update');
        await serviceErrorAudioPage.waitFor(10000);
       
    });
    it('Remove upload audio', async() =>{
        await serviceErrorAudioPage.clickButton(locators.removeAudio, 'errorAudioTest-Updated');
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Yes');
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.removeAudio, 'transferAudioTest-Updated');
        await serviceErrorAudioPage.waitFor(5000);
        await serviceErrorAudioPage.clickButton(locators.button, 'Yes');
        await serviceErrorAudioPage.waitFor(5000);
    });
});