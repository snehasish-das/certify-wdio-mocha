import homePage from '../../../../pages/home.page'
import EmProvisionerPage from '../../../../pages/voiceportal/Admin/emProvisioner.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');
const locators = require('../../../../resources/locators/voiceportal/Admin/emProvisionerPage');

describe('Voice Portal Admin -> EM Provisioner Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    it('Navigate to Admin >> Company Tab', async() =>{
        await voiceLandingPage.clickMenu("Admin");
        await homePage.waitFor(2000);
        await voiceLandingPage.clickTab("Company");
        await homePage.waitFor(7000);
    });
    it("Create one new Company", async() =>{
        await EmProvisionerPage.clickHyperlink("Add New Company");
        await homePage.waitFor(5000);
        await EmProvisionerPage.inputField("AABB","Name*");
        await EmProvisionerPage.inputField("ap","Contract Name*");
        await EmProvisionerPage.selectInputDropdown("Verizon IPTF(Manual) → Microsoft DNN Speech Engine (PLAT QA)","Inbound VXML:");
        await EmProvisionerPage.inputField("test","Contract Identifier*");
        await EmProvisionerPage.selectInputDropdown("Mexico - 52","Country List for Outbound IVR Dialing*");
        await EmProvisionerPage.inputField("abc@247.ai","Invoice Reviewers (E-mail)*");
        await EmProvisionerPage.radioButton("Expose Experience Manager feature to this company. This can be updated only by COMs or by PDB Admins.");
        await homePage.waitFor(2000);
        await EmProvisionerPage.inputField("Test","Header*");
        await EmProvisionerPage.inputField("test@247.ai","Email*");
        await EmProvisionerPage.clickButton("Save");
        await homePage.waitFor(10000);
    });
    it('Navigate to Admin >> Projects', async() =>{
        await voiceLandingPage.clickTab("Projects");
        await homePage.waitFor(5000);
    });
    it('Create New Project', async() =>{
        await EmProvisionerPage.clickCompany();
        await homePage.waitFor(1000);
        await EmProvisionerPage.selectCompany("AABB");
        await homePage.waitFor(10000);
        await EmProvisionerPage.clickHyperlink("Create New Project");
        await EmProvisionerPage.inputField("000Test","Project*");
        await EmProvisionerPage.inputField("Test","Header*");
        await EmProvisionerPage.clickButton("Save");
        await homePage.waitFor(10000);
    })
    it('Navigate to Admin >> EM Provisioner', async() =>{
        await voiceLandingPage.clickTab("Experience Manager Provisioner");
        await homePage.waitFor(5000);
    });
    it('Verify Select Client', async() =>{
        await EmProvisionerPage.selectInputDropdown("Automation Test - No Project","Client*:");
        await homePage.waitFor(5000);
    })
    it('Verify Project Dropdown with no Projects',async() =>{
        await EmProvisionerPage.verifyEmptyField("Project*:","Select...");
        await EmProvisionerPage.verifyButton("SEARCH").then(value => expect(value).toBe(false));
        await homePage.waitFor(5000);
    })
    
    it('Verify the default selection of ‘Projects’ dropdown', async() =>{
        await EmProvisionerPage.selectInputDropdown("AltranCap","Client*:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyEmptyField("Project*:","Select...").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await EmProvisionerPage.selectInputDropdown("247 inc","Client*:");
        await homePage.waitFor(3000);
        await EmProvisionerPage.verifyEmptyField("Project*:","Select...").then(value => expect(value).toBe(true));
    })

    it('Verify if Em group dropdown is hidden when projects are unselected', async() =>{
        await homePage.waitFor(3000);
        await EmProvisionerPage.verifyEmGroup();
        await homePage.waitFor(5000);
        await EmProvisionerPage.clickDropdown("Project*:");
        await EmProvisionerPage.selectDropdown("Project*:","247 Speech Platform Dev");
        await EmProvisionerPage.clickSomewhere();
        await homePage.waitFor(3000);
        await EmProvisionerPage.verifyEmptyField("EM Group:","Select options").then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await EmProvisionerPage.clickDropdown("Project*:");
        await EmProvisionerPage.selectDropdown("Project*:","247 Speech Platform Dev");
        await EmProvisionerPage.clickSomewhere();
        await homePage.waitFor(3000);
        await EmProvisionerPage.verifyEmGroup();
    })
    // it('Select All Project', async() =>{
    //     await EmProvisionerPage.clickDropdown("Project*:");
    //     await homePage.waitFor(2000);
    //     await EmProvisionerPage.selectAllDropdown("Project*:");
    //     await homePage.waitFor(5000);
    // })

    it('Select Project', async() =>{
        await homePage.waitFor(2000);
        await EmProvisionerPage.selectInputDropdown("AltranCap","Client*:");
        await homePage.waitFor(5000);
        await EmProvisionerPage.clickDropdown("Project*:");
        await EmProvisionerPage.selectDropdown("Project*:","capg-test-a1ss");
        await homePage.waitFor(2000);
        await EmProvisionerPage.selectDropdown("Project*:","AltranCapSingleProject");
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickSomewhere();
    })
    it('Verify the default selection of ‘EM Group’ dropdown', async() =>{
        await EmProvisionerPage.verifyEmptyField("EM Group:","Select options").then(value => expect(value).toBe(true));
        await EmProvisionerPage.clickDropdown("Project*:");
        await EmProvisionerPage.selectAllDropdown("Project*:");
        await EmProvisionerPage.clickSomewhere();
        await EmProvisionerPage.verifyEmptyField("EM Group:","Select options").then(value => expect(value).toBe(true));
    })
    it('Verify if Em Application dropdown is hidden when EM Group are unselected', async() =>{
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyEmApplication();
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickDropdown("EM Group:");
        await EmProvisionerPage.selectDropdown("EM Group:","Default-AltranCapSingleProject");
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyEmptyField("EM Application:","Select options").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickDropdown("EM Group:");
        await EmProvisionerPage.selectDropdown("EM Group:","Default-AltranCapSingleProject");
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyEmApplication();
    })
    it('Verify EM group Dropdown', async() =>{
        await EmProvisionerPage.clickSomewhere();
        await EmProvisionerPage.clickDropdown("EM Group:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.selectAllDropdown("EM Group:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickSomewhere();
    })
    it('Verify the default selection of ‘EM Application’ dropdown', async() =>{
        await EmProvisionerPage.verifyEmptyField("EM Application:","Select options").then(value => expect(value).toBe(true));
        await EmProvisionerPage.clickDropdown("EM Group:");
        await EmProvisionerPage.selectDropdown("EM Group:","test_pk");
        await homePage.waitFor(3000);
        await EmProvisionerPage.verifyEmptyField("EM Application:","Select options").then(value => expect(value).toBe(true));
    })
    it('Verify EM Application Dropdown', async() =>{
        await EmProvisionerPage.clickDropdown("EM Application:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.selectAllDropdown("EM Application:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
    })
    it('Verify Create New EM group Hyperlink', async() =>{
        await EmProvisionerPage.openHyperlink("Create New EM Group");
        await homePage.waitFor(2000);
        await EmProvisionerPage.openHyperlink("Cancel");
    })
    it('Create New EM group', async() =>{
        await homePage.waitFor(5000);
        await EmProvisionerPage.selectInputDropdown("AABB","Client*:");
        await EmProvisionerPage.openHyperlink("Create New EM Group");
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickDropdown("Project*:");
        await EmProvisionerPage.selectDropdown("Project*:","000Test");
        await EmProvisionerPage.inputField("test53","Name*:");
        await EmProvisionerPage.clickButton("Save");
    })
    it('Verify Create New EM Application Hyperlink', async() =>{
        await homePage.waitFor(7000);
        await EmProvisionerPage.selectInputDropdown("AABB","Client*:");
        await EmProvisionerPage.openHyperlink("Create New EM Application");
        await homePage.waitFor(3000);
    })
    it('Verify if Save Button is disbled when the ‘Name’ field is Empty', async() =>{
        await EmProvisionerPage.inputField("testing","Description:");
        await EmProvisionerPage.inputField("https://247-inc.okta.com/","Application URL:");
        await EmProvisionerPage.inputField("12","Access Control List*:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyButton("Save").then(value => expect(value).toBe(false));
    })
    it('Verify if Save Button is disabled when the ‘Access Control List’ field is Empty', async() =>{
        await EmProvisionerPage.openHyperlink("Cancel");
        await homePage.waitFor(5000);
        await EmProvisionerPage.openHyperlink("Create New EM Application");
        await homePage.waitFor(3000);
        await EmProvisionerPage.inputField("test","Name*:");
        await homePage.waitFor(2000);
        await EmProvisionerPage.verifyButton("Save").then(value => expect(value).toBe(false));
    })
    it('Create EM Application', async() =>{
        await homePage.waitFor(2000);
        await EmProvisionerPage.clickDropdown("EM Group*:");
        await EmProvisionerPage.selectDropdown("EM Group*:","test53");
        await EmProvisionerPage.inputField("check53","Name*:");
        await EmProvisionerPage.inputField("12","Access Control List*:");
        await EmProvisionerPage.clickButton("Save");
        await homePage.waitFor(5000);
    })
    it('Open Current EM Application', async() =>{
        await EmProvisionerPage.openHyperlink("check53");
        await homePage.waitFor(5000);
    })
    it('Update the Current EM Application', async() =>{
        await EmProvisionerPage.inputField("check54","Name*:");
        await EmProvisionerPage.inputField("For TVP Testing","Description:");
        await EmProvisionerPage.inputField("pk","Owner Name:");
        await EmProvisionerPage.clickButton("Save");
        await homePage.waitFor(5000);
    })
    it('Search EM Application by Application ID', async() =>{
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Id:");
        await EmProvisionerPage.emApplicationDetail("99845643");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
    })
    it('Search EM Application by Application Name', async() =>{
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Name:");
        await EmProvisionerPage.emApplicationDetail("check54");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH AGAIN");
        await homePage.waitFor(5000);
    })
    it('Verify Table Header', async() =>{
        await EmProvisionerPage.verifyTableHeader("EM Application");
        await EmProvisionerPage.verifyTableHeader("Description");
        await EmProvisionerPage.verifyTableHeader("Users");
        await EmProvisionerPage.verifyTableHeader("Control Points");
        await EmProvisionerPage.verifyTableHeader("TFNs");
    })
    // it('Update EM Group', async()=>{
    //     await EmProvisionerPage.openEmGroup("test53");
    //     await homePage.waitFor(5000);
    //     await EmProvisionerPage.inputField("test54","Name*:");
    //     await EmProvisionerPage.clickButton("Save");
    //     await homePage.waitFor(7000);
    // })
    it('Delete EM Group', async()=>{
        await EmProvisionerPage.openEmGroup("test53");
        await homePage.waitFor(5000);
        await EmProvisionerPage.clickButton("Delete Group");
        await homePage.waitFor(7000);
    })
    it('Verify Edit users', async()=>{
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Name:");
        await EmProvisionerPage.emApplicationDetail("UserFlow");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
        await EmProvisionerPage.openEditUsers();
        await homePage.waitFor(5000);
        await EmProvisionerPage.verifyButton("Apply").then(value => expect(value).toBe(false));
        await EmProvisionerPage.selectUserPrivilege("Saurabh Singh", "Read/Write");
        await EmProvisionerPage.clickButton("Apply");
        await homePage.waitFor(5000);
    })
    it('Verify Users Edit from Table', async()=>{
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Name:");
        await EmProvisionerPage.emApplicationDetail("UserFlow");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
        await EmProvisionerPage.editClick("application/99840059");
        await homePage.waitFor(5000);
        await EmProvisionerPage.verifyButton("Apply").then(value => expect(value).toBe(false));
        await EmProvisionerPage.selectUserPrivilege("Saurabh Singh", "Read");
        await EmProvisionerPage.clickButton("Apply");
        await homePage.waitFor(5000);
    })
    it('Verify Control Points for EM Application', async()=>{
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Name:");
        await EmProvisionerPage.emApplicationDetail("UserFlow");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
        await EmProvisionerPage.editClick("control_points");
        await homePage.waitFor(5000);
        // await EmProvisionerPage.clickButton("CLICK HERE");
        // await homePage.waitFor(5000);
        await EmProvisionerPage.clickButton("Cancel");   
    })
    it('Verify TFN for EM Application', async()=>{
        await homePage.waitFor(5000);
        await EmProvisionerPage.radioButton("Search EM Applications by Application Id/Application Name");
        await EmProvisionerPage.radioButton("Application Name:");
        await EmProvisionerPage.emApplicationDetail("UserFlow");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("SEARCH");
        await homePage.waitFor(5000);
        await EmProvisionerPage.editClick("tfns");
        await homePage.waitFor(5000);
        // await EmProvisionerPage.selectInputDropdown("8007088675","Add/Update Preview TFN:");
        // await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("Save");
        await homePage.waitFor(5000);
    })
    it('Delete Company', async() =>{
        await voiceLandingPage.clickTab("Company");
        await homePage.waitFor(7000);
        await EmProvisionerPage.openCompany("AABB");
        await homePage.waitFor(5000);
        await EmProvisionerPage.clickButton("Delete Company");
        await homePage.waitFor(1000);
        await EmProvisionerPage.clickButton("Yes");
        await homePage.waitFor(10000);
    })
});