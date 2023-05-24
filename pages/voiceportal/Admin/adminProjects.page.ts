import BasePage from '../../base.page';
const locators = require('../../../resources/locators/voiceportal/Admin/adminProjectsPage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminProjectspage extends BasePage {

    /**
     * verify Info client svg icon.
     * 
     * @returns 
     */
 public async verifyadminProjectClientSvg():Promise<boolean>{
    return await this.click(locators.svgIcon)
}

 /**    * click on the dropdown  select client
     * 
     * @returns 
     */
  public async selectAdminProjectsClient():Promise<boolean>{
    return await this.click(locators.adminProjectClientName)
}  

 /**  create Admin New Project
     * @param newproject
     * @returns 
     */
  public async createAdminNewProject():Promise<boolean>{
    return await this.click(locators.createNewProject, 'Create New Project')
}  
   /**  Verify reuired fields in create Admin New Project
     * @param newproject
     * @returns 
     */
    public async verifyRequiredFileldsAdminNewProject():Promise<boolean>{
        await this.isVisible(locators.createNewProject, 'Project*')
        return await this.isVisible(locators.createNewProject, 'Header*')
    }  
    
    /** Add project values
     * @returns 
     */
 public async addProject(ProjectName){
    await this.setValue(locators.projectNameInput,ProjectName)
  }
  public async addProjectHeader(HeaderName){
    await this.setValue(locators.headerNameInput,HeaderName)
  }
  public async addProjectSave(){
    return await this.click(locators.AddProjectSubmit)
  }

  /** Verify the Added project 
   *  @param newProject
     * @returns 
     */
  public async verifyTheAddProject(newProject){
     await this.isVisible(locators.VerifyAddedProject,newProject)
     return await this.click(locators.VerifyAddedProject,newProject)
  }

  public async editAndUpdate(HeaderName){
    await this.setValue(locators.headerNameInput,'247Next')
    return await this.click(locators.AddProjectSubmit)
  }
  // Verify the deleted project

  public async deleteProject(){
    return await this.click(locators.DeleteProjet)
  }
  public async confirmDelete(){
    return this.click(locators.ConformationforDeleteProject)
  }
}

export default new AdminProjectspage()