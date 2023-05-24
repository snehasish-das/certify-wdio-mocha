import homePage from '../../../../pages/home.page'
import telephonePage from '../../../../pages/voiceportal/Services/telephony.page';
const locators = require('../../../../resources/locators/voiceportal/Services/TelephonyTab');
import voiceLandingPage from '../../../../pages/voiceportal/Home/voiceLanding.page';

const env = require('../../../../config/environment');
const users = require('../../../../config/users');

describe('Voice Portal Services -> Telephony Tests', async() => {
  before('Login and Navigate to Services >> Telephony', async() =>{
      await homePage.navigateTo(env.voice_home);
      await homePage.login(users.okta_voice.username,users.okta_voice.password,users.okta_voice.securityAnswer);
      await homePage.waitFor(5000);
      await voiceLandingPage.clickMenu("Services");
      await homePage.waitFor(5000);
      expect(await telephonePage.getUrl()).toEqual("https://dev-voices-sjc02.home.247-inc.net/services/telephony");
  });

  it('Select client from dropdown', async() =>{
    await telephonePage.selectClient('247 inc');
    await homePage.waitFor(7000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('247 INC'));
  });

  it('verify the default selection of "View other Parameters"', async() =>{
    await telephonePage.verifyValue().then(value => expect(value).toBe('Application'));
    await homePage.waitFor(5000);
  });

  it('verify the column listing of a Table when NO check box in "View other Parameters (VOP)" is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.unselectAllVOP();
    await homePage.waitFor(5000);
    await telephonePage.verifyHeaders(locators.telephonyProperties, 'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
  });

  it('verify the column listing of a Table when only "Application" check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectVOP(locators.applicationSelection, 'option-0');
    await telephonePage.verifyValue().then(value => expect(value).toBe('Application'));
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Description');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'URL');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Last Modified Date');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Last Modified By');
  });

  it('verify the column listing of a Table when only "Error Handling" check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectVOP(locators.applicationSelection,'option-1');
    await telephonePage.verifyValue().then(value => expect(value).toBe('Error Handling'));
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Transfer Prompt');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Error Prompt');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Backup Transfer Destination');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Recovery URL');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Recovery URL (alt)');
  });

  it('verify the column listing of a Table when only "Reporting" check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectVOP(locators.applicationSelection,'option-2');
    await telephonePage.verifyValue().then(value => expect(value).toBe('Reporting'));
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Reporting Group');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Time Zone');
  });

  it('verify the column listing of a Table when only "Network" check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectVOP(locators.applicationSelection,'option-3');
    await telephonePage.verifyValue().then(value => expect(value).toBe('Network'));
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Call Type');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Service Combination');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Contract');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Environment');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Outbound Web Account');
  });

  it('verify the column listing of a Table when only "IDM Events" check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectVOP(locators.applicationSelection,'option-5');
    await telephonePage.verifyValue().then(value => expect(value).toBe('IDM Events'));
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'IDM Events');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'IDM Events VXML Flow');
  });

  it('verify the column listing of a Table when only all check box in VOP is selected', async() =>{
    await telephonePage.clickViewOtherParameter();
    await telephonePage.selectAllVOP();
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Phone Number');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Project');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'State name');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Description');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'URL');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Last Modified Date');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Last Modified By');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Transfer Prompt');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Error Prompt');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Backup Transfer Destination');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Recovery URL');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Recovery URL (alt)');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Reporting Group');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Time Zone');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Call Type');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Service Combination');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Contract');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Environment');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'Outbound Web Account');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'IDM Events');
    await telephonePage.verifyHeaders(locators.telephonyProperties,'IDM Events VXML Flow');
  });


  //       passed till here
  it('verify the default selection of "Projects" drop down search filter', async() =>{
    await telephonePage.verifyDefaultProjectValue().then(value => expect(value).toBe('All'));
    await homePage.waitFor(5000);
  });

  it('verify the default selection of "Projects" drop down search filter when you change the client selection', async() =>{
    await telephonePage.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await homePage.waitFor(5000);
    await telephonePage.selectProjectFromDropDown(locators.selectProject, 'option-2', 'Automation-Project1');
    await telephonePage.selectClient('AltranCap');
    await homePage.waitFor(5000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('ALTRANCAP'));
    await telephonePage.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await homePage.waitFor(5000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('AUTOMATION-MULTIPLEPROJECTS'));
    await telephonePage.verifyProjectValue(locators.projectDefaultValue).then(value => expect(value).toBe('All'))
    await homePage.waitFor(5000);
  });

  it('verify the Projects search filter where there is only one Project associated to a client', async() =>{
    await telephonePage.selectClient('Automation-SingleProject');
    await homePage.waitFor(5000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('AUTOMATION-SINGLEPROJECT'));
    await telephonePage.verifyProjectValue(locators.singleProjectValue).then(value => expect(value).toBe('TVP-Automation'))
  });

  it('verify the functionality of Projects search filter ', async() =>{
    await telephonePage.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await homePage.waitFor(5000);
    await telephonePage.selectProjectFromDropDown(locators.selectProject,'option-2','Automation-Project1');
    await telephonePage.verifyFilteredProject(locators.checkFilteredProject).then(value => expect(value).toBe('Automation-Project1'));
  });

  it('verify the functionality of Free Text search filter ', async() =>{
    await telephonePage.selectClient('247 inc');
    await homePage.waitFor(5000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('247 INC'));
    await telephonePage.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await homePage.waitFor(5000);
    await telephonePage.verifyClient().then(value => expect(value).toBe('AUTOMATION-MULTIPLEPROJECTS'));
    await telephonePage.inputSearchFilter(locators.searchFilter, 'Automation-Project2');
    await telephonePage.verifyFilteredProject(locators.checkFilteredProject).then(value => expect(value).toBe('Automation-Project2'));
  });

  it('verify the functionality of Free Text search filter on clearing the searched text ', async() =>{
    await telephonePage.clearSearchFilter(locators.searchFilter);
    await telephonePage.verifyFilteredProject(locators.checkFilteredProject).then(value => expect(value).toBe('activeinactivenumbers'));
  });
  // passed till here
  it('verify "Actions" drop down is disabled before selecting all', async() =>{
    await telephonePage.VerifyActionsDropDown().then(value => expect(value).toBe(true));
  });

  it('verify "Select All" check box to "select All" Phone Numbers in the table', async() =>{
    await telephonePage.clickAndVerifySelectAllTelephony();
  });

  it('verify "Actions" drop down gets enabled by selecting all', async() =>{
    await telephonePage.VerifyActionsDropDown().then(value => expect(value).toBe(false));
  });

  it('verify "Select All" check box to "Deselect All" Phone Numbers in the table', async() =>{
    await telephonePage.clickAndVerifyDeSelectAllTelephony();
  });

  it('verify ‘Actions’ drop down gets enabled by selecting "single" phone number', async() =>{
    await telephonePage.clickAndVerifySingleSelectTelephony().then(value => expect(value).toBe(false));
  });

  it('verify the functionality of "Edit Individual Details" option of "Actions" drop down when single phone numbers is selected', async() =>{
    expect(await telephonePage.VerifyEditIndividualDetails()).toEqual("Details for: dialog@automationproject2.automation.com.notifier.sip.tellme.com");
  });

  it('verify the functionality of "Bulk Edit" option of "Actions" drop down when only Outboud numbers are selected', async() =>{
    expect(await telephonePage.VerifyBulkEditForOutbound()).toEqual("Bulk Edit is only available for VoiceXML Inbound numbers that have not been reused or removed.");
  });

  // passed till here
  it('verify the functionality of "Bulk Edit" option of "Actions" drop down when only Call Controll numbers are selected', async() =>{
    expect(await telephonePage.VerifyBulkEditForCallControl()).toEqual("Bulk Edit is only available for VoiceXML Inbound numbers that have not been reused or removed.");
  });

  it('verify the functionality of "Bulk Edit" option of "Actions" drop down when only inbound numbers are selected', async() =>{
    expect(await telephonePage.VerifyBulkEditForInbound()).toEqual("Bulk Edit Parameters");
  });

  it('verify the functionality of "Reorganize to Project" option of "Actions" drop down when Project is changed from one to another ', async() =>{
    expect(await telephonePage.ReorganizeToDifferentProject()).toEqual("Automation-Project1");
    //expect(await telephonePage.ReverseReorganizeToDifferentProjectConfig()).toEqual("Automation-Project1");
  });

  it('verify the functionality of "Make InActive" option of "Actions" drop down when only active numbers are selected numbers are selected', async() =>{
    expect(await telephonePage.MakeNumberAsInActive()).toEqual("inactive");
  });

  it('verify if application allow to edit the Inactive Numbers', async() =>{
    expect(await telephonePage.EditInactiveNumber()).toEqual("Automation-Project1");
  });

  it('verify the functionality of "Make Active" option of "Actions" drop down when only active numbers are selected numbers are selected', async() =>{
    expect(await telephonePage.MakeNumberAsActive()).toEqual("active");
  });

  it('verify the functionality of ‘Request Whole Call Recording’ of ‘Actions’ drop down for Active/InActive Number', async() =>{
    expect(await telephonePage.RequestWholeCallRecording()).toEqual("Your request for whole call recording has been sent to the [24]7 Support Team. Contact [24]7 Support if you have any questions.");
  });

  it('verify the functionality of "Show past uses" check box on Enable ', async() =>{
    expect(await telephonePage.verifyShowPastuses()).toEqual(true);
  });

  it('verify the functionality of disabling "Show past uses" check box on Enable ', async() =>{
    expect(await telephonePage.verifyDisableShowPastuses()).toEqual(false);
  });

  it('To verify the "Edit Mode" for "Multiple" column ', async() =>{
    expect(await telephonePage.verifyEditMode()).toEqual('You have updated the phone number(s) successfully. These changes will be active on the system within approximately 15 minutes.');
  });

  it('To clear the "Edit Mode" for "Multiple" column ', async() =>{
    expect(await telephonePage.clearEditMode()).toEqual('You have updated the phone number(s) successfully. These changes will be active on the system within approximately 15 minutes.');
  });

  it('To verify the components of each telephone number ', async() =>{
    homePage.waitFor(5000);
    expect(await telephonePage.checkTelephoneComponents()).toEqual(true);
  });

  

});