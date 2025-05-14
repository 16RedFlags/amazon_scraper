# 🛒 Amazon Product Scraper with Crawlee & Playwright

Easily scrape product details from Amazon Japan using Crawlee and Playwright. This project is designed for robust, scalable, and automated data extraction, handling captchas and dynamic content with ease.

---

## 🚀 Features

- **Recursive Crawling:** Follows product links to scrape multiple items per category.
- **Headless Browser Automation:** Uses Playwright for realistic browser behavior.
- **Captcha Detection:** Automatically detects and retries on Amazon captcha pages.
- **Structured Data Output:** Extracts product title, price, list price, review rating, review count, images, and attributes.
- **Proxy Support:** Easily configurable for residential proxies.
- **TypeScript Support:** Modern, type-safe codebase.

---

## 📦 What Does It Scrape?

- **Product Title**
- **Price & List Price**
- **Review Rating & Count**
- **Product Images**
- **Product Attributes** (e.g., brand, model, features)

---

## 📝 Configuration

- **Start URLs:** Set in `main.ts` under `crawler.run([...])`.
- **Proxy:** Configurable in `main.ts` via `ProxyConfiguration`.
- **Selectors:** Adjust in `scraper.ts` for different Amazon layouts.

---

## 📂 Output

- Scraped data is saved as JSON files in `storage/datasets/default/`.
- Each file contains structured product information.

---

## 📚 Resources

- [Crawlee Documentation](https://crawlee.dev/js/docs/introduction)
- [Playwright Documentation](https://playwright.dev)
- [Amazon Japan](https://www.amazon.co.jp/)
- [Amazon Japan](https://www.amazon.co.jp/)

---

## 🛡️ Disclaimer

This project is for educational purposes only. Scraping Amazon may violate their terms of service. Use responsibly and at your own risk.
