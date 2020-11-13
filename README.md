https://github.com/ionic-team/ionic-conference-app

https://ionicframework.com/blog/automating-icons-and-splash-screens/

#go to the project path after extracting the zip
#npm install
#ionic serve
#to run app at different port ionic serve -p 9000
#To Build android : ionic cordova add android
#ionic cordova build android


Mock 
https://beeceptor.com/
https://api.mocki.io/v1/bd1865d6/

Login url : https://api.mocki.io/v1/bd1865d6/login
req json : {"username":"elavarasan","password":"123456"}
res json : {
    "userData": {
        "user_id": "1",
        "name": "Elavarasan Nadarajan",
        "email": "rameshelava@gmail.com",
        "username": "elavarasan",
        "token": "084627b292c29cc92d4ffc50f9fd3f3ebc029da"
    }
}

Feed data url :
hhttps://api.mocki.io/v1/bd1865d6/feed
get call:
res json:
{
    "feedData": [
        {
            "feed_id": "853",
            "feed": "Message 1",
            "user_id_fk": "1",
            "created": "1566456759"
        },
        {
            "feed_id": "850",
            "feed": "Message 2",
            "user_id_fk": "1",
            "created": "1566283656"
        },
        {
            "feed_id": "840",
            "feed": "Message 3",
            "user_id_fk": "1",
            "created": "1566137529"
        },
        {
            "feed_id": "788",
            "feed": "Message 4",
            "user_id_fk": "1",
            "created": "1565074471"
        },
        {
            "feed_id": "700",
            "feed": "Message 5",
            "user_id_fk": "1",
            "created": "1563872497"
        },
        {
            "feed_id": "699",
            "feed": "Message 6",
            "user_id_fk": "1",
            "created": "1563872391"
        },
        {
            "feed_id": "685",
            "feed": "Message 7",
            "user_id_fk": "1",
            "created": "1563712541"
        },
        {
            "feed_id": "675",
            "feed": "Message 8",
            "user_id_fk": "1",
            "created": "1563519224"
        },
        {
            "feed_id": "613",
            "feed": "Message 9",
            "user_id_fk": "1",
            "created": "1562480696"
        },
        {
            "feed_id": "596",
            "feed": "Message 10",
            "user_id_fk": "1",
            "created": "1562316826"
        }
    ]
}

# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.

## React and Vue Versions

We've built versions of this Conference app in React and Vue for developers that would prefer to use one of those framework options:

[https://github.com/ionic-team/ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

[https://github.com/ionic-team/ionic-vue-conference-app](https://github.com/ionic-team/ionic-vue-conference-app)

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

### [Menu](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/menu/menu.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |


### [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/schedule/schedule.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Schedule](/resources/screenshots/android-schedule.png) | ![iOS Schedule](/resources/screenshots/ios-schedule.png) |

### [Speakers Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-list/speaker-list.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speakers](/resources/screenshots/android-speakers.png) | ![iOS Speakers](/resources/screenshots/ios-speakers.png) |

### [Speaker Detail Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Speaker Detail](/resources/screenshots/android-speaker-detail.png) | ![iOS Speaker Detail](/resources/screenshots/ios-speaker-detail.png) |

### [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
