import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Home/voiceTilePage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VoiceTilepage extends BasePage {
   
     /**
     * verify the table row e.g. Tile Projects
     * @param 
     * @returns 
     */
      public async  verifyProjectTileName():Promise<boolean>{
        await this.hover(locators.projectsIcon);
        return await this.isVisible(locators.projectsIcon)
        }  
        /**
     * verify the table row e.g. Tile UM
     * @param 
     * @returns 
     */
         public async  verifyUMTileName():Promise<boolean>{
            await this.hover(locators.umIcon);
            return await this.isVisible(locators.umIcon)
         } 

       /**
     * verify the table row e.g. Tile Reports
     * @param 
     * @returns 
     */
        public async  verifyReportsTileName():Promise<boolean>{
            await this.hover(locators.reportsIcon);
            return await this.isVisible(locators.reportsIcon)
         } 
       /**
     * verify the table row e.g. Tile CallSearch
     * @param 
     * @returns 
     */
        public async  verifyCallTileName():Promise<boolean>{
            await this.hover(locators.callSearchIcon);
            return await this.isVisible(locators.callSearchIcon)
         } 

               /**
     * verify the table row e.g. Tile Telephony
     * @param 
     * @returns 
     */
          public async  verifyTelephonyTileName():Promise<boolean>{
            await this.hover(locators.teleIcon);
            return await this.isVisible(locators.teleIcon)
         }  
    /**
     * verify the table row e.g. Tile Webservice
     * @param 
     * @returns 
     */
          public async  verifyWebserviceTileName():Promise<boolean>{
            await this.hover(locators.webServiceIcon);
            return await this.isVisible(locators.webServiceIcon)
         }   
    /**
     * verify the table row e.g. Tile Webservice
     * @param 
     * @returns 
     */
      public async  verifyEMTileName():Promise<boolean>{
         await this.hover(locators.emIcon);
         return await this.isVisible(locators.emIcon)
     }   
       /**
     * verify the table row e.g. Release Notes
     * @param 
     * @returns 
     */
        public async  verifyRNName():Promise<boolean>{
            await this.hover(locators.releaseUpdates);
            return await this.isVisible(locators.releaseUpdates)
        } 

    /**
     * verify the table row e.g. announcements
     * @param 
     * @returns 
     */
        public async  verifyAnnouncementsName():Promise<boolean>{
            await this.hover(locators.announcements);
            return await this.isVisible(locators.announcements)
        } 
}


export default new VoiceTilepage();