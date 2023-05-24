module.exports={
    navMenu : "//div[contains(text(),'Responses')]",
    navMenuExpandIcon : "//div[contains(text(),'<<param>>')]/span/*[name()='svg' and contains(@transform,'rotate')]",
    selectInterfaceDropdown : "//div[contains(@data-qa,'dropDownControl')]//*[name()='svg']",
    selectInterface : "//div[contains(@data-qa,'<<param>>')]/parent::a",
    saveButton : "//span[contains(text(),'SAVE')]/parent::button",
    fileNameInput : "//input[@name='reportFileName']",
    fileTypeDropdown : "//droplabel/*[name()='svg']",
    fileType : "//span[contains(text(),'<<param>>')]/parent::li",
    stripHtmlCheck : "//span[contains(text(),'HTML')]/parent::label/*[name()='svg']",
    popupSaveButton : "//button[contains(text(),'SAVE')]"
  }