# YouTube information extractor

A simple Node.js Server that can parse data from a provided YouTube video id and display a small amount of data back

## Requirements

Node.js with ES6 capabilities (Minimum, node v12, tested with v13)
Puppeteer - A Node.js library that runs a headless version of Chrome
Cheerio - Server side implementation of jQuery

## Installation

`npm i`

## Running

`npm start`

## Usage

`http://127.0.0.1:3000/yt/?id={ VIDEO ID }`

Example: http://127.0.0.1:3000/yt/?id=bpMiKaae4Uc
```
{
  "title": "I Got Tested For Coronavirus - by Order of the Tribe",
  "channel": "Strange Parts",
  "description": "I was tested for coronavirus, by orders of the tribal governor of the pueblo where I'm staying, but I don't have any symptoms, nor does anyone I live with.  See what the covid-19 testing process is like, and why it's so important for this tiny community.\n\nSee behind the scenes at Strange Parts: \nhttp://twitter.com/strangepartscom\nhttp://instagram.com/strangeparts_com\nhttp://facebook.com/strangepartscom\n\nMusic:\n\nGalactica - David Cutter (http://www.davidcuttermusic.com / @dcuttermusic)\n\n#StrangeParts #MarketAdventures #China",
  "isGaming": false,
  "game": null
}
```

Example: http://127.0.0.1:3000/yt/?id=cq3iYRr2q3U
```
{
  "title": "THE FORTNITE TRAVIS SCOTT EVENT WAS INSANE! W/ DRLUPO, COURAGEJD & SYPHERPK",
  "channel": "Ninja",
  "description": "Travis Scott had his own event in Fortnite Battle Royale and it was insane! \n\nSUBSCRIBE HERE to never miss a video! http://bit.ly/SubscribeNinja\nJoin my Notification Squad by clicking the Bell\nWATCH ME LIVE ON MIXER https://mixer.com/ninja\n\nGet the Official Gameplay Headband of Ninja here! https://win.gs/NinjaHeadband\n\n▶ Check out my official #TeamNinja Brand Merch: https://teamninja.com/YT\n\nLIVE ON MIXER:\nFor more Fortnite Battle Royale action watch me live at\nhttps://mixer.com/ninja\n\nYou will see highlights, funny moments, impressions, and how to play info that might not make the YouTube channel.\n\nStream Hours 9 AM CST - 6 PM CST\n\n#Fortnite #Ninja #TravisScott\n\nTHANKS FOR WATCHING!!!",
  "isGaming": true,
  "game": "Fortnite"
}
```
