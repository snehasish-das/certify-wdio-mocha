import homePage from '../../../../pages/home.page'
import adminPage from '../../../../pages/assist/admin.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Team Operations Suite', async() => {
    it('TestID=6, TestName=Create new team', async() => {
        let teamName = "Automation_Team"+adminPage.generateRandomNumber();
        let teamPayload = new Map<string,string>([
            ["Team Name", teamName]
        ]);

        await homePage.navigateTo(env.dc_assist_console)
        await homePage.assistLogin(users.admin.username,users.admin.password)
        await homePage.waitFor(5000)
        
        await adminPage.clickMenu('Team')
        await adminPage.createEntity(teamPayload,null,null);
        //await browser.pause(5000);
    });
});