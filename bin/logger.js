const chalk = require('chalk');

exports.warn = function(message) {
    console.log(chalk.yellow(message))
}

exports.error = function(message) {
    console.log(chalk.red(message))
}

exports.info = function(message) {
    console.log(chalk.green(message))
}

exports.exit = function(error) {
    if(error && error instanceof Error) {
        console.log(chalk.red(error.message))
    }
    process.exit(-1)
}