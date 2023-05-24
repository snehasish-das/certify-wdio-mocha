import homePage from '../../../../pages/home.page'
import adminPage from '../../../../pages/assist/admin.page'

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Queue Operations Suite', async() => {
    it('TestID=4, TestName=Create new Queue', async() => {
        let queueName = "Automation_Queue"+adminPage.generateRandomNumber();
        let queuePayload = new Map<string,string>([
            ["Queue Name", queueName],
            ["Description", "A queue for customers who can speak english fluently"],
            ["Queue Length", "3"],
            ["Queue Timeout", "30"],
            ["Average Chat Duration", "13"],
            ["Chat Duration Refresh Factor", "3.5"],
            ["Wait Time Buffer Factor", "1.5"]
        ]);
        let skills = ["MSGV3"];

        await homePage.navigateTo(env.dc_assist_console)
        await homePage.assistLogin(users.admin.username,users.admin.password)
        await homePage.waitFor(5000)
        await adminPage.clickMenu('Queue')
        
        await adminPage.createEntity(queuePayload,skills,null);
        await browser.pause(5000);
    });
});