import homePage from '../../../../pages/home.page'
import serviceWebservicePage from '../../../../pages/voiceportal/Services/serviceWebservice.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';
const locators = require('../../../../resources/locators/voiceportal/Services/serviceWebservicePage')


const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Services -> Web Services Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to Service >> WebServices', async() =>{
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(1000);
        await voiceLandingPage.clickTab("Web Services");
        await homePage.waitFor(2000);
    });

    it('Verify service webservice client', async() =>{
        await serviceWebservicePage.verifyServieWebservieClientSvg();
        await serviceWebservicePage.waitFor(2000);
        await serviceWebservicePage.selectServiceWebservieClient();
        await serviceWebservicePage.waitFor(10000);
    });

     it('Verify create new webservice', async() =>{
        await serviceWebservicePage.createSpeechWebservice();
        await serviceWebservicePage.waitFor(5000);
    });

    it('Verify required fields from new speech webservice form', async() =>{
        await serviceWebservicePage.verifyRequiredFileldsFromSpeechwebservice();
        await serviceWebservicePage.waitFor(1000);
    });

    it('Verify create speech webservice', async() =>{
        await serviceWebservicePage.createNewSpeechWebservice("automationtest1");
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.clickButton(locators.checkbox, "Speech Recognition");
        await homePage.waitFor(2000);
        await serviceWebservicePage.clickButton(locators.checkbox, "Text to Speech");
        await homePage.waitFor(2000);
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.addSpeechWebserviceSave();
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.SubmitforCreateSW();
        await serviceWebservicePage.waitFor(5000);
    });
    it('Verify created speech webservice', async() =>{
        await serviceWebservicePage.verifyTheCreatedSW("tvpautomation-automationtest1");
        await serviceWebservicePage.waitFor(5000);
        await serviceWebservicePage.editAndUpdate("automationtest Speech WebService");
        await serviceWebservicePage.waitFor(5000);
    });
    it('Verify and delete new speech webservice', async() =>{
        await serviceWebservicePage.verifyTheCreatedSW("tvpautomation-automationtest1");
        await serviceWebservicePage.waitFor(5000);
        await serviceWebservicePage.deleteNewSW();
        await serviceWebservicePage.waitFor(5000);
        await serviceWebservicePage.confirmDelete();
        await serviceWebservicePage.waitFor(10000);
      });
      it('Verify create new report webservice', async() =>{
        await serviceWebservicePage.createReportWebservice();
        await serviceWebservicePage.waitFor(5000);
     });     
     it('Verify required fields from new reports webservice form', async() =>{
        await serviceWebservicePage.verifyRequiredFileldsFromReportwebservice();
        await serviceWebservicePage.waitFor(5000);
     });
     it('Verify create report webservice', async() =>{
        await serviceWebservicePage.createNewReportWebservice("automationtest1");
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.clickButton(locators.checkbox, "Call Search");
        await homePage.waitFor(2000);
        await serviceWebservicePage.clickButton(locators.checkbox, "Call Detail Records");
        await homePage.waitFor(2000);
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.clickButton(locators.projectDropdown, '');
        await serviceWebservicePage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.addReportWebserviceSave();
        await serviceWebservicePage.waitFor(3000);
        await serviceWebservicePage.SubmitforCreateRW();
        await serviceWebservicePage.waitFor(5000);
    });
    it('Verify and delete newly created report webservice', async() =>{
        await serviceWebservicePage.verifyTheCreatedRW("tvpautomation-rpt-automationtest1");
        await serviceWebservicePage.waitFor(5000);
        await serviceWebservicePage.deleteNewRW();
        await serviceWebservicePage.waitFor(5000);
        await serviceWebservicePage.confirmDeleteRW();
        await serviceWebservicePage.waitFor(10000);
    });

});