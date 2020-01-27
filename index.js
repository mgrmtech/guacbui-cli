#!/usr/bin/env node
const {importer, rollback, convertXlsxToObj} = require('guacbui');

const {runCli} = require('./cli');

runCli(importer, rollback, convertXlsxToObj);

