const meow = require('meow');

const makeCli = () => meow(`
	Usage
	  $ guacbui -g url -u username -p password -x /path/to/excel_file_with_import_data

	Import Template
	  https://github.com/mgrmtech/guacbui/raw/master/example/template.xlsx
	  An excel template with exemplary import data can be downloaded from the above link

	Required
	  --url, -g  Specify the url of the guacamole instance
	  --username, -u  Specify the username of an administrator with requisite privilieges
	  --password, -p  Specify the password of the administrator
	  --xlsx-path, -x  Specify the path of the XLSX file with the user/group-data to be imported

	Optional
	  --rollback, -r  Rolls back any of the imported users/groups from the given data file

	Examples
	  Import the data from "./data/template.xlsx" to the guacamole instance at http://guacamoleurl.com
	  $ guacbui -g http://guacamoleurl.com -u admin -p password -x ./data/template.xlsx
	
	  Rollback any imported data from the above step
	  $ guacbui -g http://guacamoleurl.com -u admin -p password -x "./data/template.xlsx" -r

	  The following descriptive flag aliases can be used instead of the short flags
	  $ guacbui --url=http://guacamoleurl.com --username=admin --password=password --xlsx-path="./data/template.xlsx" --rollback
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
