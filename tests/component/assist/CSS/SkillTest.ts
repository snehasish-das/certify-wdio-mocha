import homePage from "../../../../pages/home.page";
import cssHomePage from "../../../../pages/assist/CSS/cssHome.page";
import skillsPage from "../../../../pages/assist/CSS/skills.page";

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Creating skills',async()=>{
    before('Login to Assist CSS home page', async()=>{
        await homePage.navigateTo(env.css_home_dc);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
    });
    it("Creating Skill",async()=>{

        //saving skill name
        let skillName = "Automation_Skill"+skillsPage.generateRandomNumber();

        //Select the client to Sales Demo
        await cssHomePage.chooseClient('Sales Demo');

        //Click on Skill tile from CSS homepage
        await cssHomePage.clickSkills('Skills');

        //Click on create new Skill
        await skillsPage.clickCreateButton('Create');

        //Creating new Skill
        await skillsPage.createSkill(skillName,skillName);
        await skillsPage.waitFor(10000);
        


    })
});