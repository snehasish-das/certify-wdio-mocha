module.exports={
  tileMenu: "//div[contains(@id,'Title') and contains(text(),'<<param>>')]/parent::div/parent::a",
  chooseWorkspace: "//div[@id='tfs-navbar-client']",
  clickWorkspace: "//div[contains(@role,'menuitem')]/div[contains(text(),'<<param>>')]",
  chooseWorkspacePopup: "//span[contains(text(),'Choose Workspace')]",
  loginInput: "//label[contains(text(),'<<param>>')]/parent::div/following-sibling::div//input",
  loginInput1: "//input[contains(@placeholder,'<<param>>')]",
  loginButton: "//input[contains(@value,'<<param>>')]",
  loginButton1: "//button[contains(text(),'<<param>>')]"
}