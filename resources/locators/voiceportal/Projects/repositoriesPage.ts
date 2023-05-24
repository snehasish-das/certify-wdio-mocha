module.exports={
    title : "//div[@class='title' and text()='<<param>>']",
    subLabel : "//div[@class='sub-label' and text()='<<param>>']",
    tableLabel : "//div[@class='label' and contains(text(), '<<param>>')]",
    sourceTableHeader : "//div[@class='result-container']//div[contains(@class, 'rt-thead')]//div[text()='<<param>>']",
    projectTableHeader : "//div[@class='result-container-project']//div[contains(@class, 'rt-thead')]//div[text()='<<param>>']",
    dropdown: "//div[@data-qa = 'dropDownControl']",
    clientMenu : "//div[@class='company-container']//div[@role='menu']//div[@role='menuitem' and @data-qa='<<param>>']",
    loadingSpinner: "//div[contains(@class, 'spinner')]"
}
