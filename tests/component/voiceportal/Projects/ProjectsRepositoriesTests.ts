import homePage from '../../../../pages/home.page';
import repositoriesPage from '../../../../pages/voiceportal/Projects/repositories.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Projects -> Repositories Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to projects >> repositories', async() =>{
        await voiceLandingPage.clickMenu("Projects");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Repositories");
        await homePage.waitFor(60000);
    });

    it('Select client in repositories tab', async() => {
        await repositoriesPage.changeClient("eBay");
        await homePage.waitFor(20000);
    });

    it('Verify Page load and Title', async() =>{
        await repositoriesPage.verifyTitle("Repositories").then(value => expect(value).toBe(true));
    });

    it('Verify the instruction for repositories', async() =>{
        await repositoriesPage.verifyText("Paste the following URLs in your subversion client to access the backend repository.").then(value => expect(value).toBe(true));
    });

    it('Verify table name and column names', async() => {
        await repositoriesPage.verifyTableName('Source Code Repository').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(1, 'Project').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(1, 'Repository URL').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyTableName('Project Files Repository').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(2, 'Project').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(2, 'Repository URL').then(value => expect(value).toBe(true));
    });

    it('Change client and verify tables', async() => {
        await repositoriesPage.changeClient("American Express");
        await homePage.waitFor(20000);

        await repositoriesPage.verifyTableName('Source Code Repository').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(1, 'Project').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(1, 'Repository URL').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyTableName('Project Files Repository').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(2, 'Project').then(value => expect(value).toBe(true));
        await repositoriesPage.verifyHeader(2, 'Repository URL').then(value => expect(value).toBe(true));
    });
    
});
