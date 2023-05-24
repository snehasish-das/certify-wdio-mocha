module.exports={
    tableHeader : "//div[contains(@class,'rt-thead')]//span[text()='<<param>>']",
    tableData : "//div[contains(@class,'rt-td')]//span[text()='<<param>>']",
    tableDataTooltip : "//div[contains(@id,'tippy')]//div[text()='<<param>>']",
    tabName : "//li[text()='<<param>>']",
    companyName :"//a[contains(@class,'company-link')]//span[text()='<<param>>']",
    companyText : "//input[@value='<<param>>']",
    button : "//button[contains(text(),'<<param>>')]",
    choseFile : "//input[contains(@class,'file pad')]",
    addNewCompany :"//div[contains(@class,'action-links')]//a[text()='<<param>>']",
    fields : "//div[contains(@class,'label') and text()='<<param>>']",
    hintLabel : "//div[@class='hint-label' and text()='<<param>>']",
    hintLabel1 : "//div[contains(text(),'<<param>>')]",
    hintLabel2 : "//span[contains(text(),'<<param>>')]",
    hintLabel3 :"//div[normalize-space()='<<param>>']",
    inputField : "//div[text()='<<param>>']//following::div[1]//input[@value='']",
    inputField1 : "//div[text()='<<param>>']//following::div[1]//input",
    inputField2 : "//div[contains(text(),'New Contract')]//following::div[text()='<<param>>']//following::div[1]//input",
    inputFieldEdit2 : "//div[contains(text(),'Contracts')]//following::div[text()='<<param>>']//following::div[1]//input",
    descriptionInput1 : "//div[@class='label'][normalize-space()='Contracts']//following::div[@class='label' and text()='Description']//following::div[1]//input[@type='text']",
    descriptionInput : "//div[@class='label'][normalize-space()='Contracts']//preceding::div[@class='label' and text()='Description']//following::div[1]//input",
    dropdownPath : "//div[contains(text(),'New Contract')]//following::div[@class='label' and text()='<<param>>']//following::div[1]//div[@class='control-wrapper']//div[contains(@class, 'control')]",
    dropdownPathEdit : "(//a[text()='<<param>>']//following::div[text()='<<param>>']//following::div[1]//div[contains(@class, '-control')])[1]",
    dropdownInputEdit : "(//a[text()='<<param>>']//following::div[@class='label' and text()='<<param>>']//following::input[1])[1]",
    dropdownInput : "//div[contains(text(),'New Contract')]//following::div[@class='label' and text()='<<param>>']//following::input[1]",
    addAnotherLink : "//a[@class='add-more-link' and text()='<<param>>']",
    dropdownSelectAllEdit : "(//a[text()='<<param>>']//following::div[@class='label' and text()='<<param>>']//following::div[contains(@class,'menu')]//span[text()='<<param>>'])[1]",
    dropdownSelectAll : "(//div[contains(text(),'New Contract')]//following::div[@class='label' and text()='<<param>>']//following::div[contains(@class,'menu')]//span[text()='<<param>>'])[1]",
    selectContract : "//a[normalize-space()='<<param>>']",
    removeContract : "//div[@class='collapse show']//a[@class='remove-link'][normalize-space()='Remove Contract']",
    clickAnywhere : "//div[@class='label'][normalize-space()='<<param>>']",
    checkboxPath : "//div[contains(@class,'label') and text() = '<<param>>']//following::span[1]",
    rowSelect : "//option[@value='100']"
  }
  