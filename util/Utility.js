const url = require('url');
const https = require('https');
/**
 * Slack message
 * If you want to change slack message, you should edit this value.
 * @type {{username: string, text: string}}
 */
module.exports.slackMessage = {
    "username": "CAF Release Notifier",
    "text": "Google Cast SDK has been updated. \nPlease take a look the detail from following url. \n " + this.releaseNoteUrl
};

module.exports.testMessage = {
    "username": "CAF Release Notifier",
    "text": "This message is test."
};

/**
 * Release note url
 * @type {string}
 */
module.exports.releaseNoteUrl = "https://developers.google.com/cast/docs/release-notes";

/**
 * make English date from Javascript date.
 * @returns {string}
 */
module.exports.getEnglishDate = function () {
    const month_english_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const month = date.getMonth();
    const month_english = month_english_list[month];
    const day = date.getDate();
    const year = date.getFullYear();
    return month_english + " " + day + ", " + year;
};

/**
 * Send slackMessage
 * @param message
 * @param urlStr
 */
module.exports.sendSlackMessage = function (message, urlStr) {
    const data = JSON.stringify(message);
    const parsedUrl = url.parse(urlStr);
    const options = {
        hostname: parsedUrl.host,
        port: 443,
        path: parsedUrl.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    const req = https.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log("OK:" + res.statusCode);
        } else {
            console.log("Status Error:" + res.statusCode);
        }
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.write(data);

    req.end();
};