const {getAuthToken} = require('./login.js');
const {makeCli} = require('./cli.js');

const runCli = async (importOp, rollbackOp, convertXlsxToObj) => {
	const cli = makeCli();

	const {url, username, password, xlsxPath, rollback} = cli.flags;
	if (!url || !username || !password || !xlsxPath) {
		console.log(cli.help);
		return;
	}

	const op = rollback ? rollbackOp : importOp;
	const authToken = await getAuthToken(url, username, password);
	const data = convertXlsxToObj(xlsxPath);

	op(url, authToken, data);
};

module.exports = {runCli};
