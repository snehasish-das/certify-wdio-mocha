import homePage from '../../../../pages/home.page';
import spvePage from '../../../../pages/voiceportal/Admin/speakerVerification.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Admin/speakerVerificationPage');

describe('Voice Portal Admin >> Speaker Verification Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to Admin >> Speaker Verification', async() =>{
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Speaker Verification");
        await homePage.waitFor(10000);
    });

    it('Verify the speaker verification page load', async() => {
        await spvePage.verifyText(locators.label, 'Contract').then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await spvePage.verifyText(locators.label, 'Speaker Verification').then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await spvePage.verifyText(locators.hyperlink, 'History of Changes').then(value => expect(value).toBe(true));
    })

    it('Verify the company dropdown', async() => {
        await spvePage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.companyMenu, 'TVP_Automation');
        await homePage.waitFor(10000);
        await spvePage.clickButton(locators.contractDropdown, '');
        await homePage.waitFor(5000);
        await spvePage.verifyText(locators.contractMenu, 'sample11').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.contractMenu, 'sample12').then(value => expect(value).toBe(true));
        await spvePage.clickButton(locators.contractDropdown, '');
        await homePage.waitFor(5000);
    })

    it('Verify the speaker verification toggle button', async() => {
        await spvePage.verifyText(locators.toggleStatus, 'Disabled').then(value => expect(value).toBe(true));
        await spvePage.clickButton(locators.spveCheckbox, '');
        await homePage.waitFor(5000);
        await spvePage.verifyText(locators.toggleStatus, 'Enabled').then(value => expect(value).toBe(true));
        await homePage.waitFor(10000);
    })

    it('Verify the speaker verification form when enabled', async() => {
        await spvePage.verifyText(locators.label, 'Verification Mode').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Passphrase').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Vendor ID').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Subscription Key').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Vendor Url').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'User Added Application List').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Voice Profile Management').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.label, 'Verification Mode').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await spvePage.isButtonEnabled(locators.button, 'Save').then(value => expect(value).toBe(true));
        await spvePage.isButtonEnabled(locators.button, 'Cancel').then(value => expect(value).toBe(true));
        await homePage.waitFor(10000);
    })

    it('Verify passphrase dropdown when verification mode is Text Independent', async() => {
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'Text Independent');
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(5000);
        await spvePage.verifyText(locators.label, 'Passphrase').then(value => expect(value).toBe(false));
        await homePage.waitFor(1000);
    })

    it('Add and delete application ids in User Added Application list', async() => {
        await spvePage.fillValue(locators.appInput, 'app1');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.button, 'Add New');
        await homePage.waitFor(1000);
        await spvePage.fillValue(locators.appInput, 'app2');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.button, 'Add New');
        await homePage.waitFor(1000);
        await spvePage.verifyText(locators.appCheckbox, 'app1').then(value => expect(value).toBe(true));
        await spvePage.verifyText(locators.appCheckbox, 'app2').then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.appCheckbox, 'app1');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.appCheckbox, 'app2');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.button, 'Delete');
        await homePage.waitFor(1000);
        await spvePage.verifyText(locators.appCheckbox, 'app1').then(value => expect(value).toBe(false));
        await spvePage.verifyText(locators.appCheckbox, 'app2').then(value => expect(value).toBe(false));
        await homePage.waitFor(1000);
    })

    it('Add speaker verification to a contract', async() => {
        await spvePage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.companyMenu, '247 inc');
        await homePage.waitFor(10000);
        await spvePage.clickButton(locators.contractDropdown, '');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.contractMenu, 'Tellme Dev');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'Text Dependent');
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Passphrase');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'My name is unknown to you');
        await spvePage.clickButton(locators.dropdownMenu, 'My name is unknown to you');
        await spvePage.clickButton(locators.dropdown, 'Passphrase');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Vendor ID');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'msft');
        await spvePage.clickButton(locators.dropdown, 'Vendor ID');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Subscription Key');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'e214db');
        await spvePage.clickButton(locators.dropdown, 'Subscription Key');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.button, 'Save');
        await spvePage.waitUntilDisplayed(locators.message, 'Speaker verification provision has been created');
        await homePage.waitFor(5000);
    })

    it('Add application id and save speaker verification', async() => {
        await browser.refresh();
        await homePage.waitFor(10000);
        await spvePage.clickButton(locators.companyDropdown, '');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.companyMenu, '247 inc');
        await homePage.waitFor(10000);
        await spvePage.clickButton(locators.contractDropdown, '');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.contractMenu, 'Tellme Dev');
        await homePage.waitFor(5000);
        await spvePage.fillValue(locators.appInput, 'hello');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.button, 'Add New');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'Text Dependent');
        await spvePage.clickButton(locators.dropdown, 'Verification Mode');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Passphrase');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'My password is not your business');
        await spvePage.clickButton(locators.dropdownMenu, 'My password is not your business');
        await spvePage.clickButton(locators.dropdown, 'Passphrase');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Vendor ID');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'msft');
        await spvePage.clickButton(locators.dropdown, 'Vendor ID');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.dropdown, 'Subscription Key');
        await homePage.waitFor(1000);
        await spvePage.clickButton(locators.dropdownMenu, 'e214db');
        await spvePage.clickButton(locators.dropdown, 'Subscription Key');
        await homePage.waitFor(5000);
        await spvePage.clickButton(locators.button, 'Save');
        await spvePage.waitUntilDisplayed(locators.message, 'Speaker verification provision has been created');
        await homePage.waitFor(20000);
    });
})
