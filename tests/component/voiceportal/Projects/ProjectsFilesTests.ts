import homePage from '../../../../pages/home.page';
import filesPage from '../../../../pages/voiceportal/Projects/files.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Projects/filesPage');

describe('Voice Portal Projects -> Files Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to projects >> files', async() =>{
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Files");
        await homePage.waitFor(10000);
    });

    it('Select company and project', async() => {
        await filesPage.changeCompany('247 inc');
        await homePage.waitFor(10000);
        await filesPage.changeProject('247 Speech Sciences');
        await homePage.waitFor(20000);
    });
   
    it('Create new folder and checking buttons',async () => {
        //await filesPage.clickUploadButton('Create New Folder');
        await filesPage.clickButton(locators.createButton, 'Create New Folder');
        await filesPage.checkButtonEnabled('Save').then(value => expect(value).toBe(false));
        await filesPage.checkButtonEnabled('Cancel').then(value => expect(value).toBe(true));
        await filesPage.setFieldsFolder('Description', 'Sample Description');
        await filesPage.checkButtonEnabled('Save').then(value => expect(value).toBe(false));
        await homePage.waitFor(5000);
        await filesPage.setFieldsFolder('Folder name *', 'test_folder');
        await filesPage.checkButtonEnabled('Save').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        //await filesPage.clickSaveCancelButton('Save');
        await filesPage.clickButton(locators.saveCancelButton, 'Save');
        await filesPage.waitUntilDisplayed(locators.folderClick, 'test_folder');
        await homePage.waitFor(20000);
    });

    it('Upload File',async () => {
        await filesPage.checkActionsEnabled().then(value => expect(value).toBe(false));
        //await filesPage.clickUploadButton('Upload New File');
        await filesPage.clickButton(locators.createButton, 'Upload New File');
        await filesPage.checkButtonEnabled('Upload').then(value => expect(value).toBe(false));
        await filesPage.uploadFile('test_file.txt');
        await filesPage.checkButtonEnabled('Upload').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        //await filesPage.clickSaveCancelButton('Upload');
        await filesPage.clickButton(locators.saveCancelButton, 'Upload');
        await filesPage.waitUntilDisplayed(locators.folderClick, 'test_file.txt');
        await homePage.waitFor(20000);
        await filesPage.clickButton(locators.createButton, 'Upload New File');
        await filesPage.uploadFile('test_file2.txt');
        await homePage.waitFor(5000);
        //await filesPage.clickSaveCancelButton('Upload');
        await filesPage.clickButton(locators.saveCancelButton, 'Upload');
        await filesPage.waitUntilDisplayed(locators.folderClick, 'test_file2.txt');
        await homePage.waitFor(20000);
    });

    it('Action : Move to folder',async () => {
        await filesPage.clickButton(locators.fileCheckbox, 'test_file.txt')
        await filesPage.waitFor(10000);
        await filesPage.clickActionsButton();
        await homePage.waitFor(10000);
        await filesPage.clickButton(locators.actionInput, 'Move to Folder...');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.folderSelection, '');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.folderInput, 'test_folder');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.saveCancelButton, 'Ok');
        //await filesPage.waitUntilDisplayed(locators.message);
        await homePage.waitFor(20000);
    })

    it('Verify Folder and breadcrumbs hyperlink',async () => {
        await filesPage.clickButton(locators.folderClick, 'test_folder');
        await homePage.waitFor(5000);
        await filesPage.verifyText(locators.breadcrumbsTitle, 'test_folder').then(value => expect(value).toBe(true));
        await filesPage.verifyText(locators.folderClick, 'test_file.txt').then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.breadcrumbsLink, 'Files for 247 Speech Sciences');
        await homePage.waitFor(5000);
        await filesPage.verifyText(locators.breadcrumbsTitle, 'Files for 247 Speech Sciences').then(value => expect(value).toBe(true));
    })

    it('Delete one Folder', async () => {
        await filesPage.clickButton(locators.fileCheckbox, 'test_folder');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.actionButton, '');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.actionInput, 'Delete');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.saveCancelButton, 'Yes');
        //await filesPage.waitUntilDisplayed(locators.message);
        await homePage.waitFor(20000);
        await filesPage.verifyText(locators.folderClick, 'test_folder').then(value => expect(value).toBe(false));
    })

    it('Delete one File', async () => {
        await filesPage.clickButton(locators.fileCheckbox, 'test_file2.txt');
        await filesPage.clickButton(locators.actionButton, '');
        await homePage.waitFor(5000);
        await filesPage.clickButton(locators.actionInput, 'Delete');
        homePage.waitFor(5000);
        await filesPage.clickButton(locators.saveCancelButton, 'Yes');
        //await filesPage.waitUntilDisplayed(locators.message);
        await homePage.waitFor(20000);
        await filesPage.verifyText(locators.folderClick, 'test_file2.txt').then(value => expect(value).toBe(false));
    })
});
