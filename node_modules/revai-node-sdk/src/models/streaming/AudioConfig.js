"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration for an audio stream.
 */
class AudioConfig {
    /**
     * @param contentType Content type of the audio stream.
     * @param layout (optional) Layout of the audio channels. "interleaved" or "non-interleaved".
     * @param rate (optional) Sample rate of audio. 8000-48000hz supported.
     * @param format (optional) Format of audio.
     * @param channels (optional) Number of audio channels. 1-10 supported.
     */
    constructor(contentType = 'audio/*', layout, rate, format, channels) {
        this.contentType = contentType;
        this.layout = layout;
        this.rate = rate;
        this.format = format;
        this.channels = channels;
    }
    getContentTypeString() {
        return `${this.contentType}` +
            (this.layout ? `;layout=${this.layout}` : '') +
            (this.rate ? `;rate=${this.rate}` : '') +
            (this.format ? `;format=${this.format}` : '') +
            (this.channels ? `;channels=${this.channels}` : '');
    }
}
exports.AudioConfig = AudioConfig;
//# sourceMappingURL=AudioConfig.js.map