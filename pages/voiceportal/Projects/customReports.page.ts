import { ChainablePromiseElement } from 'webdriverio';

import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Projects/customReportsPage')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomReportspage extends BasePage {
    /**
     * 
     * @param client 
     * 
     */
    public async selectClient(client){
        await this.click(locators.viewClient);
        await this.click(locators.getClient, client);
    }
    /**
     * 
     * @param project
     * 
     */
    public async selectProject(project){
        await this.click(locators.viewProject);
        await this.click(locators.getProject, project);
    }
    /**
     * 
     * @param title
     * 
     */
    public async verifyTitle(title){
        await this.isVisible(locators.verifyTitle, title);
    }
    /**
     * 
     * @param headerName
     * 
     */
    public async verifyTableHeader(headerName){
        await this.isVisible(locators.tableHeader, headerName);
    }
    /**
     * 
     * @param folderName
     * @returns
     */
    public async openFolder(folderName){
        return await this.click(locators.folderPath, folderName);
    }
    /**
     * 
     * @param fileName
     * @returns
     */
    public async downloadFile(fileName){
        return await this.click(locators.filePath, fileName);
    }
    /**
     * 
     * @returns
     */
    public async titleHyperlink(){
        return await this.click(locators.titleHyperlinkPath);
    }
    /**
     * @param folderName
     * @returns
     */
    public async jumpToFolder(folderName){
        return await this.click(locators.nestedFolderPath, folderName);
    }
}

export default new CustomReportspage()