import homePage from '../../../../pages/home.page'
import emPage from '../../../../pages/voiceportal/Services/em.page';
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const locators = require('../../../../resources/locators/voiceportal/Services/emPage');
const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Services -> EM Tests', async() => {
    before('Login', async() =>{
        await homePage.navigateTo(env.voice_home);
        await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
        await homePage.waitFor(5000);
    });
    it('Navigate to Services >> Experience Manager', async() =>{
        await voiceLandingPage.clickMenu("Services");
        await homePage.waitFor(5000);
        await voiceLandingPage.clickTab("Experience Manager");
        await homePage.waitFor(5000);
    });
    it('Select Client', async() =>{
        await emPage.selectClient("247 inc");
        await homePage.waitFor(5000);
    });
    it('Verify Em Application Search', async() =>{
        await emPage.inputName("Test-app-one","Search By EM Application Name: ");
        await browser.keys("Return");
        await homePage.waitFor(2000);
    });
    it('Verify Table Header columns', async() =>{
        await emPage.verifyHeader("EM Application Name").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("Application Group").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("EM Application ID").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("Description").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("Deployed Snapshot").then(value => expect(value).toBe(true));
    });
    it('Open Em Application', async() =>{
        await emPage.openHyperlink("Test-app-one");
        await homePage.waitFor(6000);
    })
    it('Select Em Application', async() =>{
        await emPage.selectDropdown("EM Application","polishankar");
        await homePage.waitFor(6000);
        await emPage.verifyEmAppName("polishankar").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await emPage.selectDropdown("EM Application","Test-app-one");
        await homePage.waitFor(5000);
        await emPage.verifyEmAppName("Test-app-one").then(value => expect(value).toBe(true));
        await homePage.waitFor(5000);
        await emPage.selectDropdown("EM Application","247 EM Demo");
        await homePage.waitFor(6000);
        await emPage.verifyEmAppName("247 EM Demo").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
    })
    it('Verify the Expand and Collapse of Manage Snapshots', async() =>{
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(2000);
        await emPage.verifyText("Current Snapshot on production:").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(2000);
        await emPage.verifyText("Current Snapshot on production:").then(value => expect(value).toBe(false));
        await homePage.waitFor(2000);
    })
    it('Verify the Table Header of Manage Snapshots', async() =>{
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(3000);
        await emPage.verifyFirstHeader("SNAPSHOT NAME").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("CREATED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("LAST MODIFIED USER").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("TESTED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("OPERATIONS").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
    })
    it('Verify Create New Snapshot Link', async() =>{
        await emPage.openHyperlink("Create New Snapshot");
        await homePage.waitFor(5000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(3000);
        await emPage.verifyWarning("Snapshot name cannot be blank.").then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await emPage.selectDropdown("Select an existing snapshot to base your new snapshot:*","EM_Demo_Snapshot");
        await homePage.waitFor(2000);
        await emPage.selectDropdown("Select an existing snapshot to base your new snapshot:*","Default Snapshot");
        await homePage.waitFor(2000);
        await emPage.inputName("test_tvp_pk1","Enter a name for your new snapshot*:");
        await homePage.waitFor(1000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(5000);
    })
    it('Verify Edit EM Snapshot First Control Point', async() =>{
        await emPage.selectDropdown("Control Point Form Name:","WelcomePrompt");
        await homePage.waitFor(6000);
        await emPage.textareaInput("550","List Area");
        await homePage.waitFor(2000);
        await emPage.selectDropdown("Default Welcome Prompt","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.selectDropdown("Configurable Welcome Prompt","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(5000);
    })
    it('Verify Edit EM Snapshot Second Control Point', async() =>{
        await emPage.selectDropdown("Control Point Form Name:","Announcements");
        await homePage.waitFor(6000);
        await emPage.selectDropdown("Message","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.clickCheckbox("");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(5000);
    })
    it('Verify Edit EM Snapshot Third Control Point', async() =>{
        await emPage.selectDropdown("Control Point Form Name:","AppFeatures");
        await homePage.waitFor(6000);
        await emPage.selectDropdown("Recording Message","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.clickCheckbox("");
        await emPage.selectDropdown("Sales Transfer","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.selectDropdown("ANewMessageControlPoint","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.selectDropdown("ANewMessageControlPoint2","Default Transfer");
        await homePage.waitFor(2000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(5000);
    })
    it('Verify Back Button in Edit Page', async() => {
        await emPage.clickButton("BACK");
        await homePage.waitFor(5000);
    })
    it('Verify View Snapshots', async() => {
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(2000);
        await emPage.clickfirstOperation("test_tvp_pk1");
        await homePage.waitFor(6000);
        await emPage.verifyButton("SAVE").then(value => expect(value).toBe(false));
        await homePage.waitFor(1000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(5000);
    })
    it('Verify Test Snapshots', async() => {
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(2000);
        await emPage.clickThirdOperation("test_tvp_pk1");
        await homePage.waitFor(6000);
        await emPage.textareaInput("ABC Test", "Testing Notes*");
        await homePage.waitFor(1000);
        await emPage.inputName("https://google.com","");
        await homePage.waitFor(1000);
        await emPage.clickCheckbox("");
        await homePage.waitFor(1000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);
    })
    it('Verify Deploy Snapshot', async() =>{
        await emPage.expandAndCollapse("Manage Snapshots");
        await homePage.waitFor(2000);
        await emPage.clickFifthOperation("test_tvp_pk1");
        await homePage.waitFor(2000);
        await emPage.textareaInput("Testing","Notes");
        await homePage.waitFor(1000);
        await emPage.clickButton("Save & Deploy");
        await homePage.waitFor(5000);
        await emPage.verifyDeployedSnapshot("test_tvp_pk1").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);
    })
    it('Verify Deploy Another Snapshot', async()=>{
        await emPage.clickFifthOperation("PremiumEnterpriseInclementWeath");
        await homePage.waitFor(2000);
        await emPage.textareaInput("Testing","Notes");
        await homePage.waitFor(1000);
        await emPage.clickButton("Save & Deploy");
        await homePage.waitFor(7000);
        await emPage.verifyDeployedSnapshot("PremiumEnterpriseInclementWeath").then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
    })
    it('Verify Delete Snapshot', async() =>{
        await emPage.clickFourthOperation("test_tvp_pk1");
        await homePage.waitFor(2000);
        await emPage.clickButton("Yes");
        await homePage.waitFor(5000);
        await emPage.verifyText("test_tvp_pk1").then(value => expect(value).toBe(false));
        await homePage.waitFor(5000);
    })
    it('Verify the Table Header of Manage Prompts', async() =>{
        await emPage.expandAndCollapse("Manage Prompts");
        await homePage.waitFor(3000);
        await emPage.verifyFirstHeader("PROMPT NAME").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("CREATED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("LAST MODIFIED USER").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("FINISHED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("OPERATIONS").then(value => expect(value).toBe(true));
    })
    it('Verify Name Warning Message of Create New Prompts', async() =>{
        await emPage.openHyperlink("Create New Prompt");
        await homePage.waitFor(5000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("Name cannot be blank.").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);    
    })
    it('Verify Description Warning Message of Create New Prompts', async() =>{
        await emPage.inputName("pk_tvp23","Prompt Name*:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(3000);
        await emPage.verifyWarning("Description cannot be blank.").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);    
    })
    it('Verify Transcript Warning Message of Create New Prompts', async() =>{
        await emPage.textareaInput("Holi Festival","Prompt Description*:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(3000);
        await emPage.verifyWarning("Please correct the following information:").then(value => expect(value).toBe(true));
        await homePage.waitFor(2000);    
    })
    it('Create New Prompts', async() =>{
        await emPage.textareaInput("Holi Festival Today","Transcript for Text to Speech*:");
        // await emPage.clickCheckbox("Text to Speech (TTS) Only:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);
    })
    it('Verify View Prompts', async() =>{
        await emPage.expandAndCollapse("Manage Prompts");
        await homePage.waitFor(2000);
        await emPage.clickfirstOperation("pk_tvp23");
        await homePage.waitFor(4000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);
        await emPage.expandAndCollapse("Manage Prompts");
        await homePage.waitFor(2000);
        await emPage.clickfirstOperation("pk_tvp23");
        await homePage.waitFor(4000);
        await emPage.clickButton("DELETE");
        await homePage.waitFor(2000);
        await emPage.clickButton("Yes");
        await homePage.waitFor(8000);
    })
    it('Create New Prompts using URL', async() =>{
        await emPage.expandAndCollapse("Manage Prompts");
        await homePage.waitFor(2000);
        await emPage.openHyperlink("Create New Prompt");
        await homePage.waitFor(5000);
        await emPage.inputName("pk_tvp23","Prompt Name*:");
        await emPage.textareaInput("Holi Festival","Prompt Description*:");
        await emPage.textareaInput("Holi Festival Today","Transcript for Text to Speech*:");
        await emPage.clickSecondCheckbox("Use wav file from this URL or path (TTS as backup):");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("wav URL cannot be blank.").then(value => expect(value).toBe(true));
        await emPage.inputName("http://stable-em-primary.svc.tellme.com/audio/9984/0013/156.wav","Prompt Source*");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);
    })
    it('Delete New Prompt', async() =>{
        await emPage.expandAndCollapse("Manage Prompts");
        await homePage.waitFor(2000);
        await emPage.clickSecondOperation("pk_tvp23");
        await homePage.waitFor(2000);
        await emPage.clickButton("Yes");
        await homePage.waitFor(5000);
    })
    it('Open Record Prompt Hyperlink', async() =>{
        await emPage.clickSecondOperation("bad weather");
        await homePage.waitFor(3000);
        await emPage.verifyText("bad wwe").then(value => expect(value).toBe(true));
        await homePage.waitFor(1000);
        await emPage.clickButton("OK");
        await homePage.waitFor(8000);
    })
    // it('Download Listen', async() =>{
    //     await emPage.clickSecond("badweather1");
    //     await homePage.waitFor(8000);
    //     await emPage.expandAndCollapse("Manage Prompts");
    //     await homePage.waitFor(2000);
    // })
    it('Verify the Table Header of Manage Transfers', async() =>{
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(3000);
        await emPage.verifyFirstHeader("TRANSFER NAME").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("CREATED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("LAST MODIFIED USER").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("FINISHED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("OPERATIONS").then(value => expect(value).toBe(true));
    })
    it('Open Create New Transfer Verify Back Button', async() =>{
        await emPage.openHyperlink("Create New Transfer");
        await homePage.waitFor(5000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);  
    })
    it('Verify Number Warning Message in Create New Transfer', async() =>{
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(3000);
        await emPage.openHyperlink("Create New Transfer");
        await homePage.waitFor(5000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("Number entered is not valid.").then(value => expect(value).toBe(true));
    })
    it('Verify Transfer Name Warning Message in Create New Transfer', async() =>{
        await emPage.inputName("9122316235","Transfer Number*:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(1000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(3000);
        await emPage.verifyWarning("Name cannot be blank.").then(value => expect(value).toBe(true));   
    })
    it('Verify Transfer Description Warning Message in Create New Transfer', async() =>{
        await emPage.inputName("ktpk","Transfer Name*");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("Description cannot be blank.").then(value => expect(value).toBe(true));    
    })
    it('Create New Transfer', async() =>{
        await emPage.textareaInput("For testing","Transfer Description*:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);   
    })
    it('Verify View Manage Transfers', async() =>{
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(2000);
        await emPage.clickfirstOperation("ktpk");
        await homePage.waitFor(4000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(2000);
        await emPage.clickfirstOperation("ktpk");
        await homePage.waitFor(4000);
        await emPage.clickButton("DELETE");
        await homePage.waitFor(2000);
        await emPage.clickButton("YES");
        await homePage.waitFor(8000);
    })
    it('Verify Delete Manage Transfers', async() =>{
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(2000);
        await emPage.openHyperlink("Create New Transfer");
        await homePage.waitFor(5000);
        await emPage.inputName("ktpk","Transfer Name*");
        await emPage.inputName("9122316235","Transfer Number*:");
        await emPage.textareaInput("For testing","Transfer Description*:");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);
        await emPage.expandAndCollapse("Manage Transfers");
        await homePage.waitFor(2000);
        await emPage.clickSecondOperation("ktpk");
        await homePage.waitFor(1000);
        await emPage.clickButton("YES");
        await homePage.waitFor(8000);
    })
    it('Verify the Table Header of Manage Schedules', async() =>{
        await emPage.expandAndCollapse("Manage Schedules");
        await homePage.waitFor(3000);
        await emPage.verifyFirstHeader("SCHEDULE NAME").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("CREATED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("LAST UPDATED").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("LAST MODIFIED USER").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("NEXT RUN").then(value => expect(value).toBe(true));
        await emPage.verifyNewHeader("OPERATIONS").then(value => expect(value).toBe(true));
    })
    it('Open Create New Schedule Verify Back Button', async() =>{
        await emPage.openHyperlink("Create New Schedule");
        await homePage.waitFor(5000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000); 
    })
    it('Create New Schedule', async() =>{
        await emPage.expandAndCollapse("Manage Schedules");
        await homePage.waitFor(3000);
        await emPage.openHyperlink("Create New Schedule");
        await homePage.waitFor(5000);
        await emPage.selectDropdown("Select an existing schedule to base your new schedule*","EM Demo Schedule");
        await emPage.clickButton("SAVE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("Name cannot be blank.").then(value => expect(value).toBe(true));
        await emPage.inputNameSchedule("ktpk23","Schedule Name*:");
        await emPage.inputNameSchedule("Test Schedule","Schedule Description:");
        await homePage.waitFor(2000);
        await emPage.clickButton("SAVE");
        await homePage.waitFor(8000);  
    })
    it('Verify Header and Back Button in Edit Schedule', async() =>{ 
        await emPage.verifyHeader("SNAPSHOT NAME").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("DEPLOY TIME").then(value => expect(value).toBe(true));
        await emPage.verifyHeader("OPERATIONS").then(value => expect(value).toBe(true));
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);
    })
    it('Verify Add Snapshot in Edit Schedule', async() =>{
        await emPage.expandAndCollapse("Manage Schedules");
        await homePage.waitFor(3000);
        await emPage.clickScheduleEdit("ktpk23");
        await homePage.waitFor(5000);
        await emPage.selectDropdown("EM Snapshot","EM_Demo_Snapshot");
        await emPage.selectDropdown("Hour","02"); 
        await emPage.selectDropdown("Minute","04"); 
        await emPage.clickButton("ADD SNAPSHOT");
        await homePage.waitFor(3000);
        await emPage.delete("EM_Demo_Snapshot");
        await homePage.waitFor(3000);
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);
    })
    it('Verify Assign dates in Manage Schedules', async() =>{
        await emPage.expandAndCollapse("Manage Schedules");
        await homePage.waitFor(3000);
        await emPage.clickScheduleDate("ktpk23");
        await homePage.waitFor(7000);
        await emPage.selectDate("Date");
        await homePage.waitFor(1000);
        await emPage.clickButton("ADD DATE");
        await homePage.waitFor(3000);
        await emPage.deleteDate();
        await homePage.waitFor(3000);
        await emPage.selectDate("Date");
        await homePage.waitFor(1000);
        await emPage.clickButton("ADD DATE");
        await homePage.waitFor(3000);
        await emPage.selectDate("Date");
        await homePage.waitFor(1000);
        await emPage.clickButton("ADD DATE");
        await homePage.waitFor(2000);
        await emPage.verifyWarning("Schedule ktpk23 is already assigned to the following date").then(value => expect(value).toBe(true));
        await emPage.clickButton("BACK");
        await homePage.waitFor(8000);
    })
    it('Verify Set as Default in Manage Schedules', async() =>{
        await emPage.expandAndCollapse("Manage Schedules");
        await homePage.waitFor(3000);
        await emPage.clickScheduleDefault("ktpk23");
        await homePage.waitFor(5000);
        await emPage.verifyDefaultSchedule("ktpk23").then(value => expect(value).toBe(true));
        await emPage.clickScheduleDefault("EM Demo Schedule");
        await homePage.waitFor(5000);
        await emPage.verifyDefaultSchedule("EM Demo Schedule").then(value => expect(value).toBe(true));
        await emPage.clickScheduleDelete("ktpk23");
        await emPage.clickButton("YES");
        await homePage.waitFor(8000);
    })
    it('Verify the Table Header of History of Changes', async() =>{
        await emPage.expandAndCollapse("History of Changes");
        await homePage.waitFor(3000);
        await emPage.verifyFirstHeader("Change ID").then(value => expect(value).toBe(true));
        await emPage.verifyFirstHeader("User").then(value => expect(value).toBe(true));
        await emPage.verifyFirstHeader("Date of Change").then(value => expect(value).toBe(true));
        await emPage.verifyFirstHeader("Type of Change").then(value => expect(value).toBe(true));
        await emPage.verifyFirstHeader("Notes").then(value => expect(value).toBe(true));
    })
    it('Verify History of Changes', async() =>{
        await emPage.clickChangeType("New Transfer");
        await homePage.waitFor(1000);
        await emPage.verifyHistory("New Transfer","Name :").then(value => expect(value).toBe(true));
        await emPage.clickChangeType("New Transfer");
        await homePage.waitFor(1000);
        await emPage.clickChangeType("Delete Transfer");
        await homePage.waitFor(1000);
        await emPage.verifyHistory("Delete Transfer","Name :").then(value => expect(value).toBe(true));
        await emPage.verifyHistory("Delete Transfer","Description :").then(value => expect(value).toBe(true));
        await emPage.clickChangeType("Delete Transfer");
        await homePage.waitFor(1000);

    })
});