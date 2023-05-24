import clientsPage from '../../../pages/cob/clients.page';
import createClientPage from '../../../pages/cob/createClient.page';
import viewClientPage from '../../../pages/cob/viewClient.page';
import homePage from '../../../pages/home.page'

const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('COB Clients tests', async() => {
    let clientName="AutoClient", accountName="AutoAccount";
    before('Login and navigate to card designer', async() =>{
        //Login and Navigate to Card designer
        await homePage.navigateTo(env.cob_home);
        await homePage.login(users.okta_preview.username,users.okta_preview.password,users.okta_preview.securityAnswer);
        await homePage.waitFor(5000);
    });
    it('Search client', async() => {
        await clientsPage.searchClient(clientName);
    });
    it('Create Client', async() => {
        await clientsPage.clickOnCreateClient();
        await createClientPage.create("cob/createClient.ts");
    });
    it('Create LOB', async() => {
        await clientsPage.searchClient(clientName);
        await clientsPage.clickOnCreateLob(clientName);
        await createClientPage.create("cob/createLob.ts");
    });
    it('Verify view more feature', async() => {
        await homePage.navigateTo(env.cob_home);
        await clientsPage.searchClient(clientName);
        await clientsPage.clickOnViewMore(clientName);
        await viewClientPage.verifyAccount(accountName);
    });
    it('Verify Retry/Update feature', async() => {
        await homePage.navigateTo(env.cob_home);
        await clientsPage.searchClient(clientName);
        await clientsPage.clickOnUpdate(clientName);
        await createClientPage.update("cob/updateClient.ts");
    });
    it('Verify assist console url for new client', async() => {
        await homePage.navigateTo("https://"+clientName+".portal.assist.staging.247-inc.net/en/console");
    });
});