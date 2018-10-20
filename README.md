# cast-sdk-update-notifier

*cast-sdk-update-notifier* is the most simple notification of updating Cast SDK by Google at Slack.

## Description

Have you ever did a trouble by updating Google Cast SDK on your chromecast receiver application? At least, I've did.
At such time, I truly hope to be notified the updating by Google. Unfortunately, I've not found the service yet.
Therefore, I've developed the project. 
I hope to use the chromecast developer who have the mind like the same of me.

## Usage

*cast-sdk-update-notifier* to scheduled notification on the Heroku.

### Things in advance required

1. create [heroku account](https://signup.heroku.com)
    1. install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli).
1. create [Slack webhook url](https://api.slack.com/incoming-webhooks).

### step of use
1. clone this repository.
1. `cd cast-sdk-update-notifier`
1. `heroku login`
1. create heroku project
    
    `heroku create cast-sdk-update-notifier`
1. set heroku config
    
    `heroku config:set WEBHOOK_URL=[webhook url]`
1. push this repository at the Heroku.
    
    `git push heroku master`
1. test slack notification.
   
    `heroku run ping`
    > If you don't show the message of `This message is test`, Please take a look the `heroku logs` whether logging some error.
1. add heroku scheduler
    
     `heroku addons:add scheduler:standard`
1. `heroku addons:open scheduler`
1. click `Add new job` on the Browser 
1. set Job like following: