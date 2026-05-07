import { Builder, By, WebDriver, WebElement, until } from 'selenium-webdriver';
import * as fs from 'fs';

interface Book {
    title: string;
    price: string;
}

async function scrapeBooks(): Promise<void> {
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://books.toscrape.com/');

        const booksData: Book[] = [];

        for (let page = 1; page <= 2; page++) {
            await driver.wait(until.elementsLocated(By.css('article.product_pod')), 5000);
        
            const books: WebElement[] = await driver.findElements(By.css('article.product_pod'));
            
            for (const book of books) {
                const titleElement = await book.findElement(By.css('h3 > a'));
                const priceElement = await book.findElement(By.css('p.price_color'));
        
                const title = await titleElement.getAttribute('title') || 'N/A';
                const price = await priceElement.getText();
        
                booksData.push({ title, price });
            }
        
            if (page < 2) {
                const nextButton = await driver.findElement(By.css('li.next > a'));
                await nextButton.click();
            }
        }

        // Print
        booksData.forEach(book => {
            console.log(`Title: ${book.title} | Price: ${book.price}`);
        });

        // CSV
        let csvContent = 'Title,Price\n';
        booksData.forEach(book => {
            csvContent += `"${book.title}", "${book.price}"\n`;
        });

        fs.writeFileSync('books-ts.csv', csvContent);

    } catch (error) {
        console.error('Erro no scraping:', error);
    } finally {
        await driver.quit();
    }
}

scrapeBooks();