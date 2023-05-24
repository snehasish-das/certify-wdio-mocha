import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Home/homeTabPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeTabPage extends BasePage {
   
     /**
     * verify the table row e.g. Reports
     * @param item
     * @returns 
     */
    public async  verifyMenuItems(item):Promise<boolean>{
      await this.hover(locators.itemsRow, item);
      return await this.isVisible(locators.itemsRow,item)
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
    
    public async runReport(){
      return await this.click(locators.runHomeReport)
      //await this.setValue(locators.projectName,'247 Speech Platform Dev')
    }

    public async addANI(aniValues){
      await this.setValue(locators.aniValue,aniValues)
    }

    public async runCallsearch(){
      return await this.click(locators.runHomeCallsearch)
      //await this.setValue(locators.projectName,'247 Speech Platform Dev')
    }
        
    public async runadvanceReport(){
      return await this.click(locators.link, 'Run Advanced Reports')
      //await this.setValue(locators.projectName,'247 Speech Platform Dev')
    }

    public async runadvanceCallsearch(){
      return await this.click(locators.link, 'Advanced Call Search')
    }
  
}


export default new HomeTabPage();