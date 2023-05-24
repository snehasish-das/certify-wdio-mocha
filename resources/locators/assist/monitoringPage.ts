module.exports={
    menuItem: "//div[contains(text(),'<<param>>')]/ancestor::li",
    summaryTableContent: "//div[contains(text(),'<<param>>')]/following-sibling::div//label[contains(text(),'<<param>>')]",
    summaryTableContentValue: "//div[contains(text(),'<<param>>')]/following-sibling::div//label[contains(text(),'<<param>>')]/following-sibling::label",
    mainTableHeader: "//table[contains(@class,'dojoxGridRowTable')]//div[contains(text(),'<<param>>')]",
    mainTableContent1: "//table[contains(@class,'dojoxGridRowTable')]//span[contains(text(),'<<param>>')]",
    mainTableContent2: "//table[contains(@class,'dojoxGridRowTable')]//td[contains(text(),'<<param>>')]",
    sectionHeader: "//span[contains(text(),'<<param>>')]/ancestor::section",
    sectionTableContent: "//span[contains(text(),'<<param>>')]/parent::label/following-sibling::table//label[contains(text(),'<<param>>')]/following-sibling::label"
}