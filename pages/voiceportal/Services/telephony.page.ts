import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
import homePage from '../../home.page';
const locators = require('../../../resources/locators/voiceportal/Services/TelephonyTab')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class telephonyPage extends BasePage {
  /**
   * verify the table header e.g. Company
   * @param headerName 
   * @returns 
   */
  public async verifyHeader(locators, headerName):Promise<boolean>{
    return await this.isVisible(locators,headerName)
  }

  public async selectClient(client) {
    this.click(locators.selectClient)
    this.click(locators.clientName, client)
  }

  public async verifyClient() {
    let x =  await $(locators.verifyClient).getText();
    return x;
  }

  public async getUrl():Promise<boolean>{
    return await browser.getUrl();

  }

  public async inputSearchFilter(searchFilterLocator, value) {
    await this.click(searchFilterLocator)
    await this.waitFor(1000);
    await this.setValue(searchFilterLocator, value);
    await this.click(locators.searchButton, 'Search');
  }

  public async clearSearchFilter(searchLocator) {
    await this.waitFor(5000);
    await this.setValue(searchLocator, " ");
    await this.waitFor(5000);
    await this.click(locators.telephonyProperties,'Project');
    await this.click(locators.searchButton, 'Search');
    await this.waitFor(5000);
  }

  public async clickViewOtherParameter():Promise<boolean>{
    return await this.click(locators.viewOtherParameter);
  }

  public async verifyValue() {
    await this.isVisible(locators.vopDropDown);
    return this.returnSelectedValue();
  }

  public async returnSelectedValue()
  {
    return await $(locators.multipleSelectValue).getText();
  }

  public async verifyProjectValue(projectLocator) {
    return await $(projectLocator).getText();
  }

  public async verifyFilteredProject(tableLocator) {
    return await $(tableLocator).getText();
  }
  
  public async unselectAllVOP() {
    await this.click(locators.applicationSelection, 'option-0');
    await browser.keys("Escape");
    return await this.isVisible(locators.multipleSelect)?false:true;
  }

  /**
     * verify the table header e.g. Company
     * @param headerName 
     * @returns 
     */
  public async verifyHeaders(headerLocators, param):Promise<boolean>{
    return await this.isVisible(headerLocators, param)
  }

  public async selectVOP(locator, ...params) {
    locator = this.replaceParams(locator,params);
    await browser.keys("Delete");
    await this.click(locator);
    await this.waitFor(3000);
    await browser.keys("Escape");
    return this.returnSelectedValue();
  }

  public async selectAllVOP() {
    await browser.keys("Delete");
    await this.click(locators.applicationSelection, 'option-0');
    await this.click(locators.applicationSelection,'option-1');
    await this.click(locators.applicationSelection,'option-2');
    await this.click(locators.applicationSelection, 'option-3');
    await this.click(locators.applicationSelection,'option-5');
    await this.waitFor(3000);
    await browser.keys("Escape");
  }

  public async verifyDefaultProjectValue() {
    await this.isVisible(locators.projectDefaultValue);
    var y =  await $(locators.projectDefaultValue).getText();
    return y;
  }

  public async selectProjectFromDropDown(projectSelector, param,  projectName) {
    await this.click(locators.projectDropDown);
    await this.waitFor(5000);
    await this.click(projectSelector, param);
    await browser.keys("Escape");
    await this.verifyProjectValue(locators.projectDefaultValue).then(value => expect(value).toBe(projectName));
  }

  public async clickAndVerifySelectAllTelephony() {
    await this.click(locators.selectAllButton,'select-all');
    return await $(locators.project2Select).getAttribute("checked") && await $(locators.project2Select).getAttribute("checked")? true : false
  }
 
  public async clickAndVerifyDeSelectAllTelephony() {
    await this.click(locators.selectAllButton,'select-all');
    return !await $(locators.project2Select).getAttribute("checked") && await $(locators.project2Select).getAttribute("checked")? true : false
  }

  public async clickAndVerifySingleSelectTelephony() {
    await this.click(locators.project2Select);
    return this.VerifyActionsDropDown();
  }

  public async VerifyActionsDropDown() {
    return await $(locators.actionsInput).getAttribute("disabled")? true : false;
  }

  public async VerifyEditIndividualDetails() {
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-2');
    await this.waitFor(5000);
    return await this.getValue(locators.editTitle);
  }

  public async VerifyBulkEditForOutbound(){
    await this.waitFor(5000);
    await this.click(locators.telephonyTab, 'tab_/telephony');
    await this.waitFor(3000);
    await this.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await this.click(locators.project2Select);
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-1');
    return await this.getValue(locators.parentWarning);
  }

  public async VerifyBulkEditForCallControl(){
    await this.click(locators.project2Select);
    await this.click(locators.project3Select);
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-1');
    return await this.getValue(locators.parentWarning);
  }

  public async VerifyBulkEditForInbound(){
    await this.waitFor(3000);
    await this.selectClient('247 inc');
    await this.waitFor(3000);
    await this.verifyClient().then(value => expect(value).toBe('247 INC'));
    await this.waitFor(5000);
    await this.click(locators.telephonyNumber,'8668137579');
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-1');
    return await this.getValue(locators.bulkEditDialog);

  }
  public async ReorganizeToDifferentProject(){
    await this.click(locators.cancelBulkEditDialog);
    await this.selectClient('AUTOMATION-MULTIPLEPROJECTS');
    await this.click(locators.telephonyNumber,'dialog@reorganizeproject.automation.com.notifier.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-3');
    await homePage.waitFor(7000);
    if (await this.isVisible(locators.reorganizeProjectDialogue,'Reorganize to Project')){
      await this.click(locators.clickReorganizeProjectDropdown,'reorganize-container')
      await this.click(locators.reOrganizeSelectProject,'option-1');
      await this.click(locators.okButton);
      await homePage.waitFor(7000);
    }
    return await this.getValue(locators.changedReoraganizedProject, 'dialog@reorganizeproject.automation.com.notifier.sip.tellme.com')
  } 

  public async ReverseReorganizeToDifferentProjectConfig(){
    await this.click(locators.telephonyNumber,'dialog@reorganizeproject.automation.com.notifier.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-3');
    await homePage.waitFor(5000);
    if (await this.isVisible(locators.reorganizeProjectDialogue,'Reorganize to Project')){
      await this.click(locators.clickReorganizeProjectDropdown,'reorganize-container')
      await this.click(locators.reOrganizeSelectProject,'option-0');
      await this.click(locators.okButton);
      await homePage.waitFor(3000);
    }
    return await this.getValue(locators.changedReoraganizedProject, 'dialog@reorganizeproject.automation.com.notifier.sip.tellme.com')
  }

  public async MakeNumberAsInActive() {
    await homePage.waitFor(10000);
    await this.click(locators.telephonyNumber, 'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-6');
    await this.click(locators.okButton);
    await homePage.waitFor(3000);
    return await this.getValue(locators.stateNameStatus, 'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
  }

  public async MakeNumberAsActive() {
    await homePage.waitFor(5000);
    await this.click(locators.telephonyNumber,'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-5');
    await this.click(locators.okButton);
    await homePage.waitFor(3000);
    return await this.getValue(locators.stateNameStatus, 'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
  }

  public async EditInactiveNumber() {
    await homePage.waitFor(7000);
    await this.click(locators.telephonyNumber,'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-2');
    await this.waitFor(3000);
    //await $(locators.descriptioninput).clearValue();
    await this.setValue(locators.descriptionInput,'Automation-Project1');
    await this.click(locators.searchButton, 'Save & Deploy');
    await this.click(locators.okButton);
    await this.waitFor(5000);
    return await this.getValue(locators.descriptionStatus, 'dialog@activeinactivenumbers.automation.com.notifier.sip.tellme.com');
  }

  public async RequestWholeCallRecording() {
    await homePage.waitFor(5000);
    await this.click(locators.telephonyNumber,'dialog@callrecording.automation.com.notifier.sip.tellme.com');
    await this.click(locators.selectAction);
    await this.click(locators.actionsEditDetails,'option-8');
    await this.click(locators.agreeCheckBox);
    await this.click(locators.okButton);
    return await this.getValue(locators.parentWarning);
  }

  public async verifyShowPastuses() {
    await homePage.waitFor(5000);
    await this.click(locators.showPastUses, 'past-wrapper');
    await homePage.waitFor(5000);
    return await this.isVisible(locators.pastUseTelephoneNumber,'dialog@automationproject1.automation.com.notifier.sip.tellme.com')?true:false;
  }

  public async verifyDisableShowPastuses() {
    await homePage.waitFor(5000);
    await this.click(locators.showPastUses, 'past-wrapper');
    await homePage.waitFor(5000);
    return await this.isVisible(locators.pastUseTelephoneNumber,'dialog@automationproject1.automation.com.notifier.sip.tellme.com')?true:false;
  }

  public async editDescription() {
    await this.click(locators.descriptionStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(5000);
    await this.click(locators.descriptionText, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(5000);
    await this.setValue(locators.descriptionText, 'editDescription', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
  }

  public async clearDescription() {
    await this.click(locators.pastUseTelephoneNumber, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await await homePage.waitFor(5000);
    //await this.click(locators.descriptionText, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com')
    await homePage.waitFor(5000);
    await this.setValue(locators.descriptionInput," ");
    await homePage.waitFor(5000);
    await this.click(locators.saveButton, 'add-group-btn');
    await homePage.waitFor(5000);
  }
  // seeing an issue hence we need to fix and then enable this
  /* public async editBackUpTransfer() {
    await this.click(locators.backupTransferStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await this.click(locators.backupTransferText, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com')
    await this.clearValue(locators.backupTransferText, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await this.setValue(locators.backupTransferText, '111-222-3333', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
  } */

  public async editTranferPrompt() {
    await this.click(locators.transferPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.transferPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.setValue(locators.transferPromptText, 'automationTransferAudio', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await browser.keys("Return");
  }

  public async clearTranferPrompt() {
    await this.click(locators.transferPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.transferPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.setValue(locators.transferPromptText, 'None', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await browser.keys("Return");
  }

  public async editErrorPrompt() {
    await this.click(locators.errorPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.errorPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.setValue(locators.errorPromptText, 'automationErrorAudio', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await browser.keys("Return");
  }

  public async clearErrorPrompt() {
    await this.click(locators.errorPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.click(locators.errorPromptStatus, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(3000);
    await this.setValue(locators.errorPromptText, 'None', 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await browser.keys("Return");
  }

  public async verifyEditMode() {
    await this.click(locators.searchButton, 'Edit Mode');
    if (await this.getValue(locators.editTitle) === 'Telephony (Edit Mode)') {
      await this.clickViewOtherParameter();
      await this.click(locators.applicationSelection,'option-1');
      await this.click(locators.applicationSelection,'option-2');
      await this.click(locators.applicationSelection,'option-5');
      await browser.keys("Escape");
      await homePage.waitFor(5000);
      //await this.editDescription();
      await this.editTranferPrompt();
      await this.editErrorPrompt();
      // await this.editBackUpTransfer();
      await homePage.waitFor(10000);
      await this.click(locators.saveButton, 'tel-save-btn');
      await this.click(locators.okButton, 'tel-save-btn');
      return await this.getValue(locators.parentWarning);
    }
  }

  public async clearEditMode() {
    await this.clearDescription();
    await this.click(locators.searchButton, 'Edit Mode');
    if (await this.getValue(locators.editTitle) === 'Telephony (Edit Mode)') {
      await this.clickViewOtherParameter();
      await this.click(locators.applicationSelection,'option-1');
      await this.click(locators.applicationSelection,'option-2');
      await this.click(locators.applicationSelection,'option-5');
      await browser.keys("Escape");
      await homePage.waitFor(5000);
      await this.clearTranferPrompt();
      await this.clearErrorPrompt();
      await homePage.waitFor(5000);
      await this.click(locators.saveButton, 'tel-save-btn');
      await this.click(locators.okButton, 'tel-save-btn');
      return await this.getValue(locators.parentWarning);
    }
  }

  public async checkTelephoneComponents() {
    await this.click(locators.pastUseTelephoneNumber, 'ccapp@tellme-internal.tellme-internal.sip.tellme.com');
    await homePage.waitFor(5000);
    if (await this.checkTitle()) {
      if (await this.checkApplicationProperties()
        && await this.checkErrorHandlingProperties()
        && await this.checkNetworkProperties()
        && await this.checkReportingGroupProperties()) {
          return true;
        }
    }
    return false;
  }

  public async checkTitle() {
    return await this.getValue(locators.editTitle) === 'Details for: ccapp@tellme-internal.tellme-internal.sip.tellme.com' ? true : false;
  }

  public async checkApplicationProperties() {
    if ((await this.getValue(locators.applicationProperties, 'div[1]') === 'Description')
      && (await this.getValue(locators.applicationProperties, 'div[2]') === 'Project')
      && (await this.getValue(locators.applicationProperties, 'div[3]') === 'URL*')) {
        return true;
    }
    return false;
  }

  public async checkErrorHandlingProperties() {
    await this.click(locators.telephonePropertiesExpandLink,'div[2]')
    if ((await this.getValue(locators.errorHandlingProperties, 'div[1]') === 'Error Prompt')
      && (await this.getValue(locators.errorHandlingProperties, 'div[2]') === 'Recovery URL')
      && (await this.getValue(locators.errorHandlingProperties, 'div[3]') === 'Recovery URL (alt)')
      && (await this.getValue(locators.errorHandlingProperties, 'div[4]') === 'Backup Transfer Destination')
      && (await this.getValue(locators.errorHandlingProperties, 'div[5]') === 'Transfer Prompt')) {
        return true;
    }
    return false;
  }

  public async checkReportingGroupProperties() {
    await this.click(locators.telephonePropertiesExpandLink,'div[3]')
    if ((await this.getValue(locators.reportingGroupProperties, 'div[1]') === 'Reporting Group')
      && (await this.getValue(locators.reportingGroupProperties, 'div[2]') === 'Time Zone')) {
        return true;
    }
    return false;
  }

  public async checkNetworkProperties() {
    await this.click(locators.telephonePropertiesExpandLink,'div[4]')
    if ((await this.getValue(locators.networkProperties, 'div[1]') === 'Call Type')
      && (await this.getValue(locators.networkProperties, 'div[2]') === 'Service Combination*')
      && (await this.getValue(locators.networkProperties, 'div[3]') === 'Contract')
      && (await this.getValue(locators.networkProperties, 'div[4]') === 'Environment')) {
        return true;
    }
    return false;
  }
}
export default new telephonyPage()