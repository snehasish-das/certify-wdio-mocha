import homePage from '../../../../pages/home.page'
import adminPage from '../../../../pages/assist/admin.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Skills Operations Suite', async() => {
    it('TestID=5, TestName=Crete new Skill', async() => {
        let skillName = "Automation_Skill"+adminPage.generateRandomNumber();
        let skillPayload = new Map<string,string>([
            ["Skill Name", skillName],
            ["Description", "A person who can speak english fluently"]
        ]);
        
        await homePage.navigateTo(env.dc_assist_console)
        await homePage.assistLogin(users.admin.username,users.admin.password)
        await homePage.waitFor(5000)
        
        await adminPage.clickMenu('Skill')
        await adminPage.createEntity(skillPayload,null,null);
        await browser.pause(5000);
    });
});