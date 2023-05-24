import entitiesTabPage from '../../../pages/answers/knowledge/entitiesTab.page';
import knowledgeLandingPage from '../../../pages/answers/knowledge/knowledgeLanding.page';
import responsesTabPage from '../../../pages/answers/knowledge/responsesTab.page';
import homePage from '../../../pages/home.page'

const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Delete Entity in answers tests', async () => {
    let rootFolder = "AutoRootFolder_" + homePage.generateRandomNumber();
    let secondFolder = "AutoFolder_" + homePage.generateRandomNumber();
    let dummyResponse = "Auto Change Password";
    let responseTitle = "Auto Change Password " + homePage.generateRandomNumber();
    let responseExpression = "(chang* | chnag* | alter* | edit* | reset* | modif*) & (password* | passkey* | pass word * | pwd*)";
    let interfaceName = "Templates Interface";
    let categoryName = "AutoCategory_" + homePage.generateRandomNumber();

    before('Login and navigate to Answers admin', async () => {
        //Login and Navigate to Card designer
        await homePage.navigateTo(env.answers_home);
        await homePage.login(users.okta.username, users.okta.password, users.okta.securityAnswer);
        await homePage.waitFor(5000);
    });
    it('Create Folders', async () => {
        //console.log("Create a root folder and a second level folder");
        await knowledgeLandingPage.clickOn("Entities")
        await entitiesTabPage.addFolder(rootFolder,null);
        await entitiesTabPage.addFolder(secondFolder,rootFolder);
    });
    it('Delete entity used in response', async () => {
        //console.log("Delete entity used in response");
        await entitiesTabPage.addEntity(secondFolder,responseTitle, responseExpression);
        await entitiesTabPage.clickAction(rootFolder+'>>'+secondFolder,"REMOVE");
        await entitiesTabPage.verifyErrorMessage('Folder must be empty');
        await entitiesTabPage.clickAction(responseTitle,"REMOVE");
        await entitiesTabPage.clickAction(rootFolder+'>>'+secondFolder,"REMOVE");
    });
    it('Remove entity/phrase second-level folder', async () => {
        //console.log("Remove entity/phrase second-level folder");
        await entitiesTabPage.clickAction(secondFolder,"REMOVE");
    });
});