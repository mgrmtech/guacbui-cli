guacbui-cli is a command-line application for [guacbui](https://github.com/mgrmtech/guacbui) — a bulk user/group importer/rollback utility library for Apache Guacamole instances

## Installation
```
$ npm install -g guacbui-cli
```
This will make the `guacbui` binary available across the terminal, which can be used as follows.

## Usage

- Import the data from "./data/template.xlsx" to the guacamole instance at http://guacamoleurl.com (download [this template](https://github.com/mgrmtech/guacbui/raw/master/example/template.xlsx) to know how the data in the excel file should be structured)
```
$ guacbui -g http://guacamoleurl.com -u admin -p password -x ./data/template.xlsx
```

- Rollback any data imported from the above step
```
$ guacbui -g http://guacamoleurl.com -u admin -p admin -x ./data/template.xlsx -r
```

- The following descriptive flag aliases can be used instead of the short flags
```
$ guacbui --url=http://guacamoleurl.com --username=admin --password=password --xlsx-path=./data/template.xlsx --rollback
```