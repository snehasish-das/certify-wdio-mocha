import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Services/serviceErrorAudioPage')
const path = require('path');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServiceWebservicepage extends BasePage {
    /**
     * Click Button
     * @param locator 
     * @param param
     * @returns 
     */
    public async clickButton(locatorName, param):Promise<void>{
      if(param === ''){
          return await this.click(locatorName);
      }

      return await this.click(locatorName, param);
    }

    /**
     * Wait until a particular element is clickable on the screen
     * @param locator 
     * @param param
     * @returns 
     */
    public async waitUntilClickable(locator, ...param):Promise<boolean>{
      locator = this.replaceParams(locator, param);
      const elem = await $(locator);
      
      await elem.waitForClickable({timeout:60000});
      return await this.isVisible(locator);
    }

    /**
     * Change the client e.g. 247 inc
     * @param clientName 
     * @returns 
     */
    public async changeClient(clientName):Promise<void>{
      await this.waitUntilClickable(locators.dropdown, '');
      await this.click(locators.dropdown);
      await this.waitUntilClickable(locators.clientMenu, clientName);
      return await this.click(locators.clientMenu, clientName);
    }

    /**
     * verify the text e.g. Company
     * @param locator
     * @param text 
     * @returns 
     */
    public async verifyText(locator, text):Promise<boolean>{
      return await this.isVisible(locator,text)
    }

    /**  Click on Upload Error audio file link.
     * @param 
     * @returns 
     */
    public async ClickOnUploadErrorAudio():Promise<boolean>{
      return await this.click(locators.UploadAudio, 'Upload Error Audio')
    }
    
    /**  Click on Upload Transfer Audio link
     * @param 
     * @returns 
     */
    public async ClickOnUploadErrorTransferAudio():Promise<boolean>{
      return await this.click(locators.UploadAudio, 'Upload Transfer Audio')
    }
    
    /** Error Audio Upload Edit
     * @param uploadName
     * @returns 
     */
    public async ClickOnLatestUploadFile(uploadName){
      return await this.click(locators.EditUpload,uploadName)
    }

    /**
     * verify service webservice client svg icon.
     * 
     * @returns 
     */
    public async verifyErrorAudioClientSvg():Promise<boolean>{
      return await this.click(locators.svgIcon)
    }

    /**
     * Upload file
     * @param fileName
     * @returns
     */
    public async uploadFile(fileName):Promise<boolean>{
      const filePath = path.join(__dirname, fileName);
      return await this.setValue(locators.uploadButton,filePath);
    }

    /**  Verify reuired fields from create new speech webservie form.
     * @param descName
     * @returns 
     */
    public async addUploadFileDesc(descName):Promise<boolean>{
      return await this.setValue(locators.uploadFileDesc,descName);
    }  

    /** Error Audio Upload Edit desc
     * @param descFileName
     * @returns 
     */
    public async ClickOnLatestUploadFileDesc(descFileName){
      return await this.setValue(locators.uploadFileDesc,descFileName)
    }
     
}

export default new ServiceWebservicepage()