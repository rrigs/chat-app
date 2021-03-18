# Chat App

## Description

This is a messaging application for mobile devices that was developed using React Native, Expo's Gifted Chat, and Google Firebase. It provides users with a chat interface to send messages with options to share images and their location via an action button.

## Features

- Start screen to input a username as well as choose a background color for the chat screen.
- Chat screen that displays the conversation with an input field for sending messages, as well as an action button for more options.
- Action button with options to Choose Photo From Library, Take Picture, Send Location, or Cancel; the app will ask permission to access the device's photo library/camera/location data.
- Data is stored for both online and offline use.

## Screenshots

![Start Screenshot](/assets/StartSS.png)
![Chat Screenshot](/assets/ChatSS.png) <br />
![Type Screenshot](/assets/TypeSS.png)
![Action Screenshot](/assets/ActionSS.png)

## Setup

### You will need:

- Node.js
- Expo
  - Sign up for an Expo account [HERE](https://expo.io/signup)
  - Install the Expo Command Line Interface with `$ npm install expo-cli --global`
  - Download the Expo app on your smartphone and sign in
- Simulator/Emulator
  - [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/)
  - [iOS Simulator](https://docs.expo.io/workflow/ios-simulator/)
- Configured [Firebase database](https://codinglatte.com/posts/how-to/how-to-create-a-firebase-project/)

### Then:

- Clone the repository
  - Integrate your own Firebase configuration in Chat.js (lines 31-37)
- Install dependencies
  - `$ npm install`
- Start the app with `$ npm start` or `$ expo start`
