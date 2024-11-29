import {} from "@playwright/test";

export class AddTimesheetPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.mainFrame = page.frameLocator("//*[@name='main']");
        this.addButton = this.mainFrame.locator("//*[@class='btn btn-primary']");
    }

    // Methods
    async addTimesheetScreen() {
        await this.addButton.click();
    }

}