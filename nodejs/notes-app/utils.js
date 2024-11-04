const chalk = require('chalk');
logSuccessMessage = function(successMessage) {
    console.log(chalk.green.bold.italic(successMessage));
}

logErrorMessage = function(errorMessage) {
    console.log(chalk.red.inverse.bold.italic(errorMessage));
}

module.exports = {
    logSuccessMessage: logSuccessMessage,
    logErrorMessage: logErrorMessage
}