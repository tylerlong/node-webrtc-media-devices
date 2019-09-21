# node-webrtc-media-devices

## Install

```
yarn add node-webrtc-media-devices
```

## Use

```js
import mediaDevices from 'node-webrtc-media-devices'

const stream = mediaDevices.getUserMedia({ audio: true, video: false })
mediaDevices.startAudio()
// ...
mediaDevices.stopAudio()
```
