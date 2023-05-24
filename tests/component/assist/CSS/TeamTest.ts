import homePage from "../../../../pages/home.page";
import cssHomePage from "../../../../pages/assist/CSS/cssHome.page";
import TeamPage from "../../../../pages/assist/CSS/team.page";

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe ('Open Assist tile directely',async()=>{
    before('okta login',async()=>{
        await homePage.navigateTo(env.css_home_dc);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
});
it('Creating team',async()=>{
    // Saving teamName
    let teamName= 'Automation_team'+TeamPage.generateRandomNumber();
    
    await cssHomePage.chooseClient('Sales Demo');
    await cssHomePage.clickTeams('Teams');
    await TeamPage.createButton('Create');
    await TeamPage.CreatingTeamname(teamName);
})

});	  