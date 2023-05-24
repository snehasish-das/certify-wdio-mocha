import homePage from '../../../../pages/home.page'
import customReportsPage from '../../../../pages/voiceportal/Projects/customReports.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Projects -> Custom Reports Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to Projects >> Custom reports', async() =>{
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Custom Reports");
        await homePage.waitFor(5000);
    });
    it('Select Client and Project', async() =>{
        await customReportsPage.selectClient("247 inc");
        await customReportsPage.selectProject("247 Speech ConversationBuilderss");
        await homePage.waitFor(2000);
    })
    it('Verify Title', async()=>{
        await customReportsPage.verifyTitle("Custom Reports for 247 Speech ConversationBuilderss");
        await homePage.waitFor(2000);
    })
    it('Verify Table Header', async()=>{
        await customReportsPage.verifyTableHeader("File Name");
        await homePage.waitFor(2000);
    })
    it('Open Selected Folder', async()=>{
        await customReportsPage.openFolder("download");
        await homePage.waitFor(2000);
        await customReportsPage.titleHyperlink();

    })
    // it('Download File from Selected Folder', async()=>{
    //     await customReportsPage.openFolder("download");
    //     await homePage.waitFor(2000);
    //     await customReportsPage.downloadFile("fid_expedite_20160602.zip");
    //     await homePage.waitFor(20000);
    //     await customReportsPage.downloadFile("fid_dividend_20160602.zip");
    //     await homePage.waitFor(20000);
    //     await customReportsPage.titleHyperlink();
    //     await homePage.waitFor(2000);
    // })
    it('Verify Nested Folder', async()=>{
        await customReportsPage.openFolder("download");
        await homePage.waitFor(2000);
        await customReportsPage.openFolder("temp");
        await homePage.waitFor(2000);
        await customReportsPage.openFolder("2008");
        await homePage.waitFor(2000);
        await customReportsPage.openFolder("01January");
        await homePage.waitFor(2000);
        await customReportsPage.openFolder("21");
        await homePage.waitFor(2000);
        await customReportsPage.openFolder("029d6d7c-c87a-11dc-f6ab-000e0c746f3b");
        await homePage.waitFor(2000);
    })
    it('Jump to any Intermediate Folder', async() =>{
        await customReportsPage.jumpToFolder("2008");
        await homePage.waitFor(2000);
    })

});