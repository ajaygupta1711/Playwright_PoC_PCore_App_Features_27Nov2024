import { } from "@playwright/test";

export class NavigateTimesheetPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.menuFrame = page.frameLocator("//*[@name='contents']");
        this.timesheet = this.menuFrame.locator("//tbody//tr//td//a[@id='PCIMenut23']");
        this.myTimesheet = this.menuFrame.locator("//tbody//tr//td//a[@id='PCIMenut24']");
    }

    // Methods

    async navigateTimesheetScreen() {
        await this.page.waitForTimeout(3000);
        await this.timesheet.click();
        await this.page.waitForTimeout(3000);
        await this.myTimesheet.click();
    }
}