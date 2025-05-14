import { Actor } from "apify";
import { ProxyConfiguration } from "apify";
import { PlaywrightCrawler, PlaywrightCrawlingContext, log } from "crawlee";
import { handleCaptchaBlocking } from "./blocking-detection.js";
import { extractProductDetails } from "./scraper.js";

await Actor.init();

/**
 * Performs the logic of the crawler. It is called for each URL to crawl.
 * - Passed to the crawler in the `requestHandler` option.
 */
const requestHandler = async (context: PlaywrightCrawlingContext) => {
  const { request, enqueueLinks, parseWithCheerio } = context;
  const { url } = request;

  const $ = await parseWithCheerio();

  // Enqueue all product links from the category page
  await enqueueLinks({ selector: 'a[href*="/dp/"]' });

  handleCaptchaBlocking($); // Alternatively, we can put this into the crawler's `postNavigationHooks`

  log.info(`Scraping product page`, { url });
  const extractedProduct = extractProductDetails($);

  log.info(
    `Scraped product details for "${extractedProduct.title}", saving...`,
    { url }
  );
  crawler.pushData(extractedProduct);
};

const proxyConfiguration = new ProxyConfiguration({
  groups: ["RESIDENTIAL"],
  countryCode: "US",
});

/**
 * The crawler instance. Crawlee provides a few different crawlers, but we'll use CheerioCrawler, as it's very fast and simple to use.
 * - Alternatively, we could use a full browser crawler like `PlaywrightCrawler` to imitate a real browser.
 */
const crawler = new PlaywrightCrawler({
  requestHandler,
  maxRequestsPerCrawl: 5, // Limit the number of requests to 100
});

await crawler.run([
  "https://www.amazon.co.jp/-/en/gp/browse.html?node=2151901051&ref_=nav_em_sapc_parts_0_2_13_7",
]);

await Actor.exit();
// This will be called when the script is finished, and it will close the browser and clean up any resources used by the crawler.
