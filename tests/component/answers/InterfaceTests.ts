import knowledgeLandingPage from '../../../pages/answers/knowledge/knowledgeLanding.page';
import responsesTabPage from '../../../pages/answers/knowledge/responsesTab.page';
import homePage from '../../../pages/home.page'

const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Response tab Interface tests', async () => {
    before('Login and navigate to Answers admin', async () => {
        //Login and Navigate to Card designer
        await homePage.navigateTo(env.answers_home);
        await homePage.login(users.okta.username, users.okta.password, users.okta.securityAnswer);
        await homePage.waitFor(5000);
    });
    it('Edit Escalation Message', async () => {
        await knowledgeLandingPage.clickOn("Response")
        await responsesTabPage.editInterface("Abhinay Test","Escalation Title Alternate","I need an Agent")
    });
});