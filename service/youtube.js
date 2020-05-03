import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

export const getVideo = async ({ id }) => {
  // Launch a browser, create a new page and browse to it
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.youtube.com/watch?v=${id}`);

  // Wait for a determined area of the page to have finished loading
  await page.waitForSelector('.title.ytd-video-primary-info-renderer');

  // Return the results of the page
  return await page.content();
};

export const parseVideo = ({ html }) => {
  // Load page into navigator
  const $ = cheerio.load(html);

  // Navigate the page for the information we need
  const title = $('#content').find('.title').text();
  const channel = $('#content').find('#text.ytd-channel-name').first().text();
  const description = $('#content').find('#description').text();
  const game = $('#content').find('#contents').find('#title').first().text() || null;
  const isGaming = ($('#content').find('#contents').find('#title').last().text() === 'Gaming');

  // Send results back
  return { title, channel, description, isGaming, game };
};

export default { getVideo, parseVideo };
