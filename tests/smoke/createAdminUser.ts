import homePage from '../../pages/home.page'
import adminPage from '../../pages/assist/admin.page'

const env = require('../../config/environment');
const users = require('../../config/users');

describe('User creation tests', async() => {
    it('Login as assist console as admin', async() => {
        await homePage.navigateTo(env.assist_console)
        await homePage.login(users.admin.username,users.admin.password)
        await homePage.waitFor(5000)
    });
    it('Click on user menu', async() => {
        await adminPage.clickMenu('User')
    });
    it('Create a new admin user', async() => {
        let userName = "Automation_User"+adminPage.generateRandomNumber();
        let usersPayload = new Map<string,string>([
            ["Login Id", userName],
            ["First Name", "EnglishVoice"],
            ["Last Name", "SuperAdmin"],
            ["Display Name", userName],
            ["Email", "snehasish.das@247.ai"],
            ["Role","Super Admin"]
        ]);
        await adminPage.createEntity(usersPayload,null,null);
        await browser.pause(5000);
    });
});