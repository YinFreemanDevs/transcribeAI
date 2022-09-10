/**
 * Configuration for an audio stream.
 */
export declare class AudioConfig {
    contentType: string;
    layout?: string;
    rate?: number;
    format?: string;
    channels?: number;
    /**
     * @param contentType Content type of the audio stream.
     * @param layout (optional) Layout of the audio channels. "interleaved" or "non-interleaved".
     * @param rate (optional) Sample rate of audio. 8000-48000hz supported.
     * @param format (optional) Format of audio.
     * @param channels (optional) Number of audio channels. 1-10 supported.
     */
    constructor(contentType?: string, layout?: string, rate?: number, format?: string, channels?: number);
    getContentTypeString(): string;
}
