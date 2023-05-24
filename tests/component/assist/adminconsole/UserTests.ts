import homePage from '../../../../pages/home.page'
import adminPage from '../../../../pages/assist/admin.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('User Operations Suite', async() => {
    it('TestID=7, TestName=Create Admin user', async() => {
        let userName = "Automation_User"+adminPage.generateRandomNumber();
        let usersPayload = new Map<string,string>([
            ["Login Id", userName],
            ["First Name", "EnglishVoice"],
            ["Last Name", "SuperAdmin"],
            ["Display Name", userName],
            ["Email", "snehasish.das@247.ai"],
            ["Role","Super Admin"]
        ]);

        //Login as assist console as admin
        await homePage.navigateTo(env.dc_assist_console)
        await homePage.assistLogin(users.admin.username,users.admin.password)
        await homePage.waitFor(5000)

        //Create user
        await adminPage.clickMenu('User')
        await adminPage.createEntity(usersPayload,null,null);
        await browser.pause(5000);
    });
});