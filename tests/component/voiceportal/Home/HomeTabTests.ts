import homePage from '../../../../pages/home.page'
import homeTabPage from '../../../../pages/voiceportal/Home/homeTab.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const locators = require('../../../../resources/locators/voiceportal/Home/homeTabPage')
const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Home Tab Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to voice >> home tab', async() =>{
        await voiceLandingPage.clickMenu("Home");
        await homePage.waitFor(1000);
    });
   
    it('Verify home items >> Reports', async() =>{
        await homeTabPage.verifyMenuItems("Reports");
        await homePage.waitFor(1000);
    });

    it('Verify home items >> Call search', async() =>{
        await homeTabPage.verifyMenuItems("Call search");
        await homePage.waitFor(1000);
    });

    it('Verify home items >> My projects', async() =>{
        await homeTabPage.verifyMenuItems("My projects");
        await homePage.waitFor(1000);
    });

    it('Verify home reports >> projects selection', async() =>{
        await homeTabPage.clickButton(locators.projectDropdown, '');
        await homeTabPage.clickButton(locators.projectsSelectAll, 'SELECT ALL');
        await homeTabPage.waitFor(2000);
    });
    
    it('Verify home reports >> run reports', async() =>{
        await homeTabPage.runReport();
        await homeTabPage.waitFor(5000);
    });
   
    it('Verify from reports >> home reports', async() =>{
        await voiceLandingPage.clickMenu("Home");
        await homePage.waitFor(1000);
    });

    it('Verify home callSearch >> ANI selection', async() =>{
        await homeTabPage.addANI('999899777');
        await homeTabPage.waitFor(2000);
    });

    it('Verify home callSearch >> run callsearch', async() =>{
        await homeTabPage.runCallsearch();
        await homeTabPage.waitFor(5000);
    });

    it('Verify from CallSearch >> home', async() =>{
        await voiceLandingPage.clickMenu("Home");
        await homePage.waitFor(1000);
    });

    it('Verify home callSearch >> run advance callsearch', async() =>{
        await homeTabPage.runadvanceCallsearch();
        await homeTabPage.waitFor(5000);
    });
    
    it('Verify from CallSearch >> home', async() =>{
        await voiceLandingPage.clickMenu("Home");
        await homePage.waitFor(1000);
    });

    it('Verify home reports >> run advance reports', async() =>{
        await homeTabPage.runadvanceReport();
        await homeTabPage.waitFor(5000);
    });
       
    it('Verify from reports >> home reports', async() =>{
        await voiceLandingPage.clickMenu("Home");
        await homePage.waitFor(1000);
    });
});
