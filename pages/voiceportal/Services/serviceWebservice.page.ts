import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Services/serviceWebservicePage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServiceWebservicepage extends BasePage {

    /**
     * verify service webservice client svg icon.
     * 
     * @returns 
     */
    public async verifyServieWebservieClientSvg():Promise<boolean>{
      return await this.click(locators.svgIcon)
    }

    /**    * click on the dropdown  select client
     * 
     * @returns 
     */
    public async selectServiceWebservieClient():Promise<boolean>{
      return await this.click(locators.WebserviceClient)
    }  

    /**  create service new speech webservice.
     * @param 
     * @returns 
     */
    public async createSpeechWebservice():Promise<boolean>{
      return await this.click(locators.link, 'Add Speech Web Service Account')
    }

    /**  Verify reuired fields from create new speech webservie form.
     * @param 
     * @returns 
     */
    public async verifyRequiredFileldsFromSpeechwebservice():Promise<boolean>{
      await this.isVisible(locators.RequiredFieldsSW, 'Account Name*')
      return await this.isVisible(locators.RequiredFieldsSW, 'Contract')
    }  
    
    /** Add Speech webservice values
     * 
     * @returns 
     */
    public async createNewSpeechWebservice(accountName){
      await this.setValue(locators.nameField,accountName)
    }

    public async addSpeechWebserviceSave(){
      return await this.click(locators.SubmitSW)
    }

    // SW : Speech Webservice
    public async SubmitforCreateSW(){
      return await this.click(locators.SaveSW)
    }

    /** Verify the Added speech webservice
     * @param newSW
     * @returns 
     */
    public async verifyTheCreatedSW(newSW){
      await this.isVisible(locators.VerifyCreatedSW,newSW)
      return await this.click(locators.VerifyCreatedSW,newSW)
    }

    /** Update the speech webservice and save.
     * @param description
     * @returns 
     */
    public async editAndUpdate(description){
      await this.setValue(locators.DiscriptionOfSW,description)
      await this.click(locators.EditSaveAndDeploy)
      return await this.click(locators.SaveSW)
    }
  
    // Verify the deleted new speech webservice.
    public async deleteNewSW(){
      return await this.click(locators.DeleteSW)
    }

    public async confirmDelete(){
      return this.click(locators.SaveSW)
    }


    //Report WebService Test cases

    /**  create service new Report webservice.
     * @param 
     * @returns 
     */
    public async createReportWebservice():Promise<boolean>{
      return await this.click(locators.link,'Add Reporting Service Account')
    } 

    /**  Verify reuired fields from create new speech webservie form.
     * @param 
     * @returns 
     */
    public async verifyRequiredFileldsFromReportwebservice():Promise<boolean>{
      await this.isVisible(locators.RequiredFieldsSW, 'Account Name*')
      return await this.isVisible(locators.RequiredFieldWebservice, 'Web Services')
    }  

    /** Add Speech webservice values
     * 
     * @returns 
     */
    public async createNewReportWebservice(accountName){
      await this.setValue(locators.nameField,accountName)
    }

    public async addReportWebserviceSave(){
      return await this.click(locators.EditSaveAndDeploy)
    }
    
    /**
     * Click Button
     * @param locator
     * @param param
     * @returns
     */
    public async clickButton(locatorName, param):Promise<boolean>{
      if(param === ''){
          return await this.click(locatorName);
      }
      return await this.click(locatorName, param);
    }

    // RW : Report Webservice
    public async SubmitforCreateRW(){
      return await this.click(locators.SubmitRW)
    }

    //Verify created report webservice
    public async verifyTheCreatedRW(newSW){
      await this.isVisible(locators.VerifyCreatedRW,newSW)
      return await this.click(locators.VerifyCreatedRW,newSW)
     }
       
    // Verify the deleted new speech webservice.
    public async deleteNewRW(){
      return await this.click(locators.DeleteRW)
    }

    public async confirmDeleteRW(){
      return this.click(locators.SaveRW)
    }

}

export default new ServiceWebservicepage()