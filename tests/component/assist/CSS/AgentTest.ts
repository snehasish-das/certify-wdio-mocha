import homePage from "../../../../pages/home.page";
import cssHomePage from "../../../../pages/assist/CSS/cssHome.page";
import agentPage from "../../../../pages/assist/CSS/agent.page";
import teamPage from "../../../../pages/assist/CSS/team.page";
import skillsPage from "../../../../pages/assist/CSS/skills.page";

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const agentDetails = require('../../../../resources/testdata/cob/CSS/agentDetails');

let teamName = 'automation_team'+teamPage.generateRandomNumber();
let team = 'salesdemo-account-default-team-'+teamName;
let loginId = 'Automation_Agent'+agentPage.generateRandomNumber();
let firstName = 'Automation_Name'+agentPage.generateRandomNumber();
let lastName = 'Automation_Title'+agentPage.generateRandomNumber();
//let email = 'automation'+agentPage.generateRandomNumber()+'@247.ai';
let skillName = "Automation_Skill"+skillsPage.generateRandomNumber();

describe('Creating Agent',async()=>{
    before('Login to Assist CSS home page', async()=>{
        await homePage.navigateTo(env.css_home_dc);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
    });

    it("Creating Skill",async()=>{

        //Select the client to Sales Demo
        await cssHomePage.chooseClient('Sales Demo');

        //Click on Skill tile from CSS homepage
        await cssHomePage.clickSkills('Skills');

        //Click on create new Skill
        await skillsPage.clickCreateButton('Create');

        //Creating new Skill
        await skillsPage.createSkill(skillName,skillName);
    })

    it('Creating team',async()=>{

        await cssHomePage.assistHome(); 
        
        //Click on Team tile from CSS homepage
        await cssHomePage.clickTeams('Teams');

        //click on create new skill
        await teamPage.createButton('Create');

        //Creating new Team
        await teamPage.CreatingTeamname(teamName);
    })

    it("Creating Agent",async()=>{

        //Navigate to CSS homepage
        await cssHomePage.assistHome();

        //Click on Agent Administration tile from CSS homepage
        await cssHomePage.clickAgent("Agent Administration");

        //filling agent details
        await agentPage.creatingAgent(loginId,firstName,lastName,loginId,agentDetails.email,team,"chatLimit:"+agentDetails.chatLimit,"acceptChat:"+agentDetails.acceptChat,"selectRole:"+agentDetails.role,"status:"+agentDetails.status,"userAuth:"+agentDetails.authentication,"passwordType:"+agentDetails.passwordType,"skillTab:"+"skilltab","assignSkill:"+skillName,"selectSkill:"+skillName,"addSkill:","addedSkill:"+skillName);

    })
});