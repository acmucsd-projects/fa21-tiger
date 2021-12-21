## Development

After cloning the repository, install the dependencies:

```sh
# Project dependencies
$ npm install

# Expo, for Android and iOS
$ npm install --global expo-cli
```

To run the web version locally,

```sh
$ npm run web
```

For mobile development, you need to create an Expo account (`$ expo register`
will take you to the page) then log into it.

On https://expo.dev/, create a project with slug `fa21-tiger` (it needs to match
the slug in app.json).

Then, if you want to try this on your physical phone device rather than an
emulator, install the [Expo mobile
app](https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and).
Run `npm run web`, and scan the QR code on the developers tool tab in the
browser.

- This assumes the phone and computer is on the same network, but this doesn't
  seem to work very well on RESNET-PROTECTED. You can alternatively select
  "Tunnel" in the developer tools, but supposedly this is slower.

To deploy the web version of the app to GitHub Pages,

```sh
$ npm run deploy
```
