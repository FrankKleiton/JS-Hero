export default class Video {
    constructor(aDelay) {
        this.delay = aDelay;

        this.videoEl = document.getElementById('video');
    }

    play() {
        this.playing = true; 
        setTimeout((function() {
            this.videoEl.play();
        }).bind(this), this.delay);
    }

    muteUnmute() {
        this.videoEl.muted = !this.videoEl.muted;
    }

    pausePlay() {
        if (this.playing) {
            this.videoEl.pause();
            this.videoEl.mute
        } else {
            this.videoEl.play();
        }
        this.playing = !this.playing;
    }
}