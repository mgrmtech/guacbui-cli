const puppeteer = require('puppeteer');

const getAuthToken = async (baseURL, username, password) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	try {
		await page.goto(baseURL, {waitUntil: 'networkidle0'});

		await page.type('input[type="text"]', username);
		await page.type('input[type="password"]', password);
		await page.click('input[class="login"]');

		// eslint-disable-next-line no-warning-comments
		// TODO: Fix the timeout in case of incorrect username/password
		await Promise.race([
			page.waitForNavigation({waitUntil: 'networkidle0'}),
			page.waitForSelector('.recent-connections')
		]);

		const {authToken} = await page.evaluate(
			() => JSON.parse(localStorage.getItem('GUAC_AUTH')) // eslint-disable-line no-undef
		);
		browser.close();
		return authToken;
	} catch (error) {
		console.error('LOGIN ERROR', error);
		browser.close();
	}
};

module.exports = {getAuthToken};
