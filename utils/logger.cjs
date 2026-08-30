function getTimestamp()
{
const now = new Date();
return now.toISOString()
.replace('T', ' ')
.substring(0, 19);
}

const LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';
const levels = {
DEBUG: 1,
INFO: 2,
WARN: 3,
ERROR: 4

};

function shouldLog(level)
{
return levels[level]>= levels[LOG_LEVEL]

}





const logger = {

    info(message) {

        if(shouldLog('INFO'))
        {
        console.log(`[${getTimestamp()}] [INFO] ${message}`);

        }
    },

    warn(message) {

        if(shouldLog('WARN'))
        {
        console.warn(`[${getTimestamp()}] [WARN] ${message}`);

        }
    },

    error(message) {
        if(shouldLog('ERROR'))
        {
        console.error(`[${getTimestamp()}] [ERROR] ${message}`);

        }
    },

    debug(message) {
        if(shouldLog('DEBUG'))
        {
        console.debug(`[${getTimestamp()}] [DEBUG] ${message}`);
        }
    }

};

module.exports = logger;