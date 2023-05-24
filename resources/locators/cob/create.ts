module.exports={
    textInput : "//span[text()='<<param>>']/following-sibling::div/input",
    dropdown : "//span[text()='<<param>>']/parent::div/following-sibling::span",
    dropdownItem : "//span[text()='<<param>>']",
    checkbox : "//label[text()='<<param>>']/span",
    nextButton : "//div[contains(@name,'nextBtn')]",
    submitButton : "//div[contains(@name,'addBtn')]",
    cancelButton : "//div[contains(@name,'cancelBtn')]",
    error : "//span[@id='closeErrorModal']"
}