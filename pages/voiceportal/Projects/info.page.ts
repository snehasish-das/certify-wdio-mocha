import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Projects/infoPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Info extends BasePage {
   
/**
     * verify Info client svg icon.
     * 
     * @returns 
     */
 public async verifyInfoClientSvg():Promise<boolean>{
    return await this.click(locators.svgIcon)
}

/**    * click on the dropdown  select client
     * 
     * @returns 
     */
 public async selectInfoClient():Promise<boolean>{
    return await this.click(locators.infoClientName)
}
  
/**
     * verify Info project svg icon.
     * 
     * 
     * @returns 
     */
 public async verifyInfoProjectSvg():Promise<boolean>{
    return await this.click(locators.projectSvgIcon)
}


/**    *select Info client project
     * @param project
     * @returns 
     */
 public async selectInfoProject(project):Promise<boolean>{
    return await this.click(locators.infoItem,project)
}

  /**select Info client project
     * @param descriptionName
     * @returns 
     */
   public async selectInfoTableDescription(descriptionName):Promise<boolean>{
    
    return await this.isVisible(locators.infoItem,descriptionName)
  }
/** edit transfer destination groups
     * @returns 
     */
 public async selectTransferDestinationGroup():Promise<boolean>{
    return await this.click(locators.edittd)
}
/** edit transfer destination groups
     * @returns 
     */
 public async addGroup(groupName){
    await this.setValue(locators.tdgroup,groupName)
  }

/** Add transfer destination number
     * @returns 
     */
 public async addDestNumber(destNumber){
    await this.setValue(locators.tdNumber,destNumber)
 }
/** Add transfer destination groups
     * @returns 
     */
 public async TDsubmit(type){
    await this.click(locators.addTDG,type)

}
 
}

export default new Info()