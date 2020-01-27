const meow = require('meow');

const makeCli = () => meow(`
	Usage
	  $ guacbui -g url -u username -p password -r

	NOTE
	  Please ensure that you've specified values for all of the required flags mentioned below!

	Required
	  --url, -g  Specify the url of the guacamole instance
	  --username, -u  Specify the username of an administrator with requisite privilieges
	  --password, -p  Specify the password of the administrator
	  --xlsx-path, -x  Specify the path of the XLSX file with the user/group-data to be imported

	Options
	  --rollback, -r  Rolls back any of the imported users/groups from the given data file

	Examples
	  // Import the data from "./data/template.xlsx"
	  $ guacbui -g http://guacamoleurl.com -u admin -p admin -x "./data/template.xlsx"
	
	  // Rollback any imported data from "./data/template.xlsx"
	  $ guacbui -g http://guacamoleurl.com -u admin -p admin -x "./data/template.xlsx" -r

	  // You can also use the following descriptive flag aliases
	  $ guacbui --url=http://guacamoleurl.com --username=admin --password=admin --xlsx-path="./data/template.xlsx" --rollback

	🌈 Give Me Some Sunshine, Give Me Some Rain ✨🌈
`, {
	booleanDefault: undefined,
	flags: {
		url: {
			type: 'string',
			alias: 'g'
		},
		username: {
			type: 'string',
			alias: 'u'
		},
		password: {
			type: 'string',
			alias: 'p'
		},
		'xlsx-path': {
			type: 'string',
			alias: 'x'
		},
		rollback: {
			type: 'boolean',
			alias: 'r',
			default: false
		}
	}
});

module.exports = {makeCli};
