import homePage from '../../../../pages/home.page'
import adminProjectsPage from '../../../../pages/voiceportal/Admin/adminProjects.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Admin -> Projects Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    
    it('Navigate to admin >> Projects', async() =>{
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(1000);
        await voiceLandingPage.clickTab("Projects");
        await homePage.waitFor(2000);
    });

    it('Verify Admin Projects Client', async() =>{
        await adminProjectsPage.verifyadminProjectClientSvg();
        await adminProjectsPage.waitFor(2000);
        await adminProjectsPage.selectAdminProjectsClient();
        await adminProjectsPage.waitFor(15000);
        await homePage.waitFor(2000);
     });
     it('Verify create admin new project', async() =>{
        await adminProjectsPage.createAdminNewProject();
        await homePage.waitFor(5000);
     
     });

     it('Verify the required fields in create admin new project', async() =>{
        await adminProjectsPage.verifyRequiredFileldsAdminNewProject();
        await adminProjectsPage.waitFor(3000);
     });
     it('Verify to add project name', async() =>{
        await adminProjectsPage.addProject("1.247");
        await adminProjectsPage.waitFor(5000);
        await adminProjectsPage.addProjectHeader("247aa");
        await adminProjectsPage.waitFor(3000);
        await adminProjectsPage.addProjectSave();
        await adminProjectsPage.waitFor(10000);
     });
     it('Verify the added project', async() =>{
        await adminProjectsPage.verifyTheAddProject("1.247");
        await adminProjectsPage.waitFor(5000);
      
     });
     it('Verify edit project', async() =>{
        await adminProjectsPage.editAndUpdate("1.247");
        await adminProjectsPage.waitFor(5000);
      
     });

     it('Verify to delete project', async() =>{
        await adminProjectsPage.verifyTheAddProject("1.247");
        await adminProjectsPage.waitFor(5000);
        await adminProjectsPage.deleteProject();
        await adminProjectsPage.waitFor(5000);
        await adminProjectsPage.confirmDelete();
        await adminProjectsPage.waitFor(5000);
     });

});