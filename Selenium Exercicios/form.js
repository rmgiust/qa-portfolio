const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function OpenFormInChrome() {

    let options = new chrome.Options();

    // 🔒 Bloqueio completo de password manager
    options.addArguments('--disable-features=PasswordLeakDetection');
    options.addArguments('--disable-save-password-bubble');
    options.addArguments('--disable-notifications');

    options.setUserPreferences({
        "credentials_enable_service": false,
        "profile.password_manager_enabled": false,
        "profile.password_manager_leak_detection": false
    });
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://the-internet.herokuapp.com/login');

        await driver.manage().window().maximize();

      
        await driver.sleep(2000);


        const usernameField = await driver.findElement(By.id('username'));
        await usernameField.sendKeys('tomsmith');

        const passwordField = await driver.findElement(By.id('password'));
        await passwordField.sendKeys('SuperSecretPassword!');

        // Find the login button using css selector
        const loginButton = await driver.findElement(By.css('button[type="submit"]'));
        await loginButton.click();

        // Check if login was successfull
        try {
            const successMessage = await driver.findElement({css: '.flash.success'});
            console.log('Successfully logged in'); 
            await driver.takeScreenshot().then(
                function(image) {
                    require('fs').writeFileSync('login_success.png', image, 'base64');
                }
            )
        } catch (error) {
            console.error('Login failed')
            await driver.takeScreenshot().then(
                function(image){
                    require('fs').writeFileSync('login_failure.png', image, 'base64')
                }
            )
        }



        // Wait for a moment after clicking to allo the page to respond
        await driver.sleep(2000);



        //const logoutButton = await driver.findElement(By.css('.icon-signout'));
        //await logoutButton.click();

    } catch (error) {
        console.error('Erro no teste:', error.message);
    } finally {
        await driver.sleep(2000);
        //await driver.quit(); // ✅ sempre fechar
    }
}

OpenFormInChrome();