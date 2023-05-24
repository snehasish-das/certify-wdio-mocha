module.exports={
    addFolder : "//span[contains(text(),'FOLDER')]/preceding-sibling::span//*[name()='svg']",
    folderNameInput : "//div[@id='commonDialogPlaceHolder']/following-sibling::div//input",
    okButton : "//div[@id='commonDialogPlaceHolder']/following-sibling::div//button[contains(text(),'OK')]",
    verifyFolder : "//div[contains(text(),'<<param>>')]",
    verifyEntity : "//span[contains(text(),'<<param>>')]",
    folderExpandIcon : "//div[contains(text(),'<<param>>') and contains(@title,'Expand Folder')]",
    actionIcon : "//div[contains(text(),'<<param>>')]/following-sibling::div//span[contains(@title,'Actions')]/*[name()='svg']",
    entityAction : "//span[contains(text(),'<<param>>')]/parent::div//following-sibling::div//*[name()='svg']",
    menuItem : "//span[contains(text(),'<<param>>')]",
    entityName : "//input[@name='expressionName']",
    expression : "//div[text()='Expression']/following-sibling::div//textarea",
    saveButton : "//button[contains(text(),'SAVE')]",
    popOKButon : "//button[contains(text(),'OK')]",
    deleteErrorMessage : "//div[contains(@class,'errorToastMessage')]/div/div[contains(@role,'presentation')]"
}