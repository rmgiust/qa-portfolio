const fs = require('fs');
const csv = require('csv-parser');
const { Builder, By } = require('selenium-webdriver');

let savedData = [];

// Read data from CSV file
fs.createReadStream('books.csv')
  .pipe(csv())
  .on('data', (row) => {
    savedData.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    runPriceVerificationTest();
  });

async function runPriceVerificationTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        let currentData = [];

        // Loop through the first two pages
        for (let page = 1; page <= 2; page++) {
            if (page === 1) {
                await driver.get('http://books.toscrape.com/');
            } else {
                await driver.get(`http://books.toscrape.com/catalogue/page-${page}.html`);
            }

            await driver.sleep(2000);

            let books = await driver.findElements(By.css('article.product_pod'));

            for (let book of books) {
                let titleElement = await book.findElement(By.css('h3 > a'));
                let title = await titleElement.getAttribute('title');

                let priceElement = await book.findElement(By.css('p.price_color'));
                let price = await priceElement.getText();

                currentData.push({ Title: title, Price: price });
            }
        }

        // Compare current data with saved data
        function normalizePrice(price) {
            return price.replace(/"/g, '').trim();
        }
        
        let discrepancies = [];


        for (let i = 0; i < savedData.length; i++) {
            let savedBook = savedData[i];
            let currentBook = currentData.find((book) => book.Title === savedBook.Title);

            if (currentBook) {
            // Normalize prices
            let savedPrice = normalizePrice(savedBook.Price);
            let currentPrice = normalizePrice(currentBook.Price);

                if (currentPrice !== savedPrice) {
                    discrepancies.push({
                        Title: savedBook.Title,
                        SavedPrice: savedBook.Price,
                        CurrentPrice: currentBook.Price,
                    });

                    console.log(
                        `Price discrepancy found for "${savedBook.Title}": Saved Price = ${savedBook.Price}, Current Price = ${currentBook.Price}`
                    );
                } else {
                    console.log(
                        `Price verified for "${savedBook.Title}": ${savedBook.Price}`
                    )
                }
            } else {
                console.log(`Book not found on the website: "${savedBook.Title}"`);
            }
        }

        // Write discrepancies to file
        if (discrepancies.length > 0) {
            let content = 'Title,SavedPrice,CurrentPrice\n';

            for (let item of discrepancies) {
                content += `"${item.Title}","${item.SavedPrice}","${item.CurrentPrice}"\n`;
            }

            fs.writeFileSync('price_discrepancies.csv', content);
            console.log('Discrepancies saved to price_discrepancies.csv');
        } else {
            console.log('No price discrepancies found.');
        }

    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}