import { } from "@playwright/test";

//const count = await rows.count();

export class AddTimesheetPage {

    constructor(page) {
        // Locators
        this.page = page;
        this.mainFrame = page.frameLocator("//*[@name='main']");
        this.addButton = this.mainFrame.locator("//*[@class='btn btn-primary']");
        this.ticketNo = this.mainFrame.locator("(//*[@id='selectedTicket'])[3]");
        this.ticketName = this.mainFrame.locator("//a[normalize-space()='Test Case Execution']");
        this.group = this.mainFrame.locator("(//*[@id='selectedGroup'])[3]");
        this.activity = this.mainFrame.locator("(//*[@name='selectedActivity'])[3]");
        this.hourMon = this.mainFrame.locator("(//*[@id='selectedHour'])[15]");
        this.hourTues = this.mainFrame.locator("(//*[@id='selectedHour'])[16]");
        this.hourWed = this.mainFrame.locator("(//*[@id='selectedHour'])[17]");
        this.hourThur = this.mainFrame.locator("(//*[@id='selectedHour'])[18]");
        this.hourFri = this.mainFrame.locator("(//*[@id='selectedHour'])[19]");
        this.saveButton = this.mainFrame.locator("//*[@class='btn btn-success']");
    }

    // Methods
    async addTimesheetScreen(group, activity, dailyHour) {
        //await this.addButton.click();
        await this.ticketNo.click();
        await this.page.waitForTimeout(2000);
        await this.ticketName.click();
        await this.page.waitForTimeout(2000);
        await this.group.selectOption(group);
        await this.page.waitForTimeout(2000);
        await this.activity.selectOption({ label: activity });
        await this.hourMon.selectOption(dailyHour);
        await this.hourTues.selectOption(dailyHour);
        await this.hourWed.selectOption(dailyHour);
        await this.hourThur.selectOption(dailyHour);
        await this.hourFri.selectOption(dailyHour);
        await this.saveButton.click();
    }
}