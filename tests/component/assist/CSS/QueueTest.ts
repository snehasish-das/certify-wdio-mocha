import homePage from "../../../../pages/home.page";
import cssHomePage from "../../../../pages/assist/CSS/cssHome.page";
import QueuePage from "../../../../pages/assist/CSS/queue.page";
import skillsPage from "../../../../pages/assist/CSS/skills.page";

const env= require('../../../../config/environment');
const users=require('../../../../config/users');
const queueDetails=require('../../../../resources/testdata/cob/CSS/queueDetails');

let skillName = "automation_Skill"+skillsPage.generateRandomNumber();
let queueName='automation_queue'+QueuePage.generateRandomNumber();

describe ('Open Assist tile directely',async()=>{
    before('okta login',async()=>{
        await homePage.navigateTo(env.css_home_dc);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
});

it("Creating Skill",async()=>{
 await cssHomePage.chooseClient('Sales Demo');
 await cssHomePage.clickSkills('Skills');
 await skillsPage.clickCreateButton('Create');
 await skillsPage.createSkill(skillName,skillName);
}) 

it('creating Queue',async()=>{
    await cssHomePage.assistHome();
    await cssHomePage.clickQueue('Queues');
    await QueuePage.CreateingQueue(queueName,queueName,skillName,"Live Chat:"+queueDetails.queue,"Route On:"+queueDetails.route_on,"Enable Visitor Inactivity Time:"+queueDetails.enable_visitor_inactivity_time,"Enable Agent Response Time:"+queueDetails.enable_agent_response_time,"Choose Disposition Form:"+queueDetails.choose_disposition_form,"Typing Feature Enabled:"+queueDetails.typing_feature,"Account Level Queue:"+queueDetails.account_level_queue,"File Transfer for Visitor:"+queueDetails.file_transfer,"Visitor Mailer Configurations:"+queueDetails.visitor_mailer,"Agent Mailer Configurations:"+queueDetails.agent_mailer,"Co-view Feature Enabled:"+queueDetails.co_view,"Co-browsing Feature Enabled:"+queueDetails.co_browse,"Enable Outbound transfer for LOB:"+queueDetails.enable_outbound,"Accept InterLOB Chat:"+queueDetails.accept_interlob); 
    await QueuePage.publishingToTest();

}); 
});	 