// Import the Builder class from selenium-webdriver
const { Builder } = require('selenium-webdriver');

// Function to open Msn's homepage in Chrome
async function OpenMsnInChrome() {
    // Create a new Chrome browser instance
    const driver = await new Builder().forBrowser('chrome').build();

    // Navigate to Msn's homepage
    await driver.get('https://www.msn.com');

    // Make the browser maximize
    await driver.manage().window().maximize();

    // Wait for 3 seconds
    await driver.sleep(3000);

    // click on button using xpath - //*[@id="onetrust-accept-btn-handler"]
    const agreeButton = await driver.findElement({xpath: '//*[@id="onetrust-accept-btn-handler"]'});
    try {
        await agreeButton.click();
        console.log('Button clicked successfully');
    } catch (error) {
        console.error('Error clicking the "Aceito" button:', error.message);
    }   
}

OpenMsnInChrome();
