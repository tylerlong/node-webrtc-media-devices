import { MediaStream } from 'wrtc'
import RTCAudioSource from 'node-webrtc-audio-source'

const rtcAudioSource = new RTCAudioSource()

const mediaDevices = {
  getUserMedia: async constraints => {
    if (constraints.video) {
      throw new Error('video support not implemented')
    }
    const mediaStream = new MediaStream()
    if (constraints.audio) {
      const track = rtcAudioSource.createTrack()
      mediaStream.addTrack(track)
    }
    return mediaStream
  },
  startAudio () {
    rtcAudioSource.start()
  },
  stopAudio () {
    rtcAudioSource.stop()
  },
  startVideo () {
    throw new Error('video support not implemented')
  },
  stopVideo () {
    throw new Error('video support not implemented')
  }
}

export default mediaDevices
