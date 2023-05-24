import homePage from '../../../pages/home.page'
import butterflyWorkspacePage from '../../../../certify/pages/butterfly/butterflyWorkspace.page';
import butterflyAgentWorkspacePage from '../../../pages/butterfly/butterflyAgentWorkspace.page';



const env = require('../../../config/environment');
const users = require('../../../config/users');

describe('Butterfly Lead Login tests-->', async() => {
    before('Login and navigate to Butterfly console', async() =>{
        
        await homePage.navigateTo(env.butterfly_home);
        await homePage.login(users.okta.username,users.okta.password,users.okta.securityAnswer);
        await homePage.waitFor(5000);
        await homePage.waitFor(5000);
    });
    it('TestID=1, TestName=Verify lead status, Product=Butterfly', async() => {
        console.log("Verifying Lead status");
        await butterflyWorkspacePage.waitFor(6000);
        await butterflyWorkspacePage.clickOnStatus();
        await butterflyWorkspacePage.getStatus();
        await butterflyWorkspacePage.verifyStatus();
        
    });
    it('TestID=2, TestName=Verify Widgets in AgentWorkspace, Product=Butterfly', async() => {
        console.log("Verifying Widgets on AgentWorkspace");
        await butterflyWorkspacePage.waitFor(6000);
        await butterflyWorkspacePage.clickLeftMenu("Agent workspace");
        await butterflyAgentWorkspacePage.verifySoftphone();
        await butterflyAgentWorkspacePage.getSoftphoneDetails();
        await butterflyAgentWorkspacePage.verifyWidgets();



        
    });

})
