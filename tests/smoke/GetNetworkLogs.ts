import homePage from '../../pages/home.page'

const env = require('../../config/environment');
const users = require('../../config/users');
let output;
describe('Get Network logs', async() => {
    it('Login as assist console as agent', async() => {
        output = await browser.mock('**/console');
        await homePage.navigateTo(env.dc_assist_console);
        await homePage.assistLogin(users.dc_admin.username,users.dc_admin.password);
        await homePage.waitFor(5000);

        await Object.keys(output.calls).forEach(key => {
            console.log("URL : "+(output).calls[key].url);
            console.log("Response : "+JSON.stringify(output.calls[key]));
        });
    });
});