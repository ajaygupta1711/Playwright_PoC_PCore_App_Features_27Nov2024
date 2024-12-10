import { } from "@playwright/test";

export class NavigateAssignTicketPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.menuFrame = page.frameLocator("//*[@name='contents']");
        this.projectMgmt = this.menuFrame.locator("//tbody//tr//td//a[@id='PCIMenut4']");
        this.tickets = this.menuFrame.locator("//tbody//tr//td//a[@id='PCIMenut11']");
        this.assign = this.menuFrame.locator("//tbody//tr//td//a[@id='PCIMenut12']");
    }

    // Methods

    async navigateOnAssignTicketScreen() {
        await this.projectMgmt.click();
        await this.tickets.click();
        await this.assign.click();
        await this.page.screenshot({ path: './screenshots/NavigateAssignTicketPage.png', fullPage: true });
    }
}