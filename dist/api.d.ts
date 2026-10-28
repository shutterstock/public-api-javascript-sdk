import { Configuration } from "./configuration";
export declare const BASE_PATH: string;
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export interface FetchAPI {
    (url: string, options?: RequestInit): Promise<Response>;
}
export declare const nativeFetch: FetchAPI;
export interface FetchArgs {
    url: string;
    options: RequestInit;
}
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration?: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
export declare class RequiredError extends Error {
    field: string;
    name: string;
    constructor(field: string, msg?: string);
}
/**
 * Access token details that are currently associated with this user
 * @export
 * @interface AccessTokenDetails
 */
export interface AccessTokenDetails {
    /**
     * Client ID that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    client_id?: string;
    /**
     * Contributor ID that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    contributor_id?: string;
    /**
     * Customer ID that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    customer_id?: string;
    /**
     * Number of seconds until the access token expires; no expiration if this value is null
     * @type {number}
     * @memberof AccessTokenDetails
     */
    expires_in?: number;
    /**
     * Organization ID that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    organization_id?: string;
    /**
     * Type of access token
     * @type {string}
     * @memberof AccessTokenDetails
     */
    realm?: AccessTokenDetails.RealmEnum;
    /**
     * Scopes that this access token provides when used as authentication
     * @type {Array<string>}
     * @memberof AccessTokenDetails
     */
    scopes?: Array<string>;
    /**
     * User ID that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    user_id?: string;
    /**
     * User name that is associated with the user
     * @type {string}
     * @memberof AccessTokenDetails
     */
    username?: string;
}
/**
 * @export
 * @namespace AccessTokenDetails
 */
export declare namespace AccessTokenDetails {
    /**
     * @export
     * @enum {string}
     */
    enum RealmEnum {
        Customer,
        Contributor
    }
}
/**
 * Album metadata
 * @export
 * @interface Album
 */
export interface Album {
    /**
     * The album ID
     * @type {string}
     * @memberof Album
     */
    id: string;
    /**
     * The album title
     * @type {string}
     * @memberof Album
     */
    title: string;
}
/**
 * An allotment of credits as part of a subscription
 * @export
 * @interface Allotment
 */
export interface Allotment {
    /**
     * Number of credits remaining in the subscription
     * @type {number}
     * @memberof Allotment
     */
    downloads_left?: number;
    /**
     * Total number of credits available to this subscription
     * @type {number}
     * @memberof Allotment
     */
    downloads_limit?: number;
    /**
     * Number of generation credits remaining in the subscription
     * @type {number}
     * @memberof Allotment
     */
    generations_left?: number;
    /**
     * Total number of generation credits available to this subscription
     * @type {number}
     * @memberof Allotment
     */
    generations_limit?: number;
    /**
     * Date the subscription ends
     * @type {Date}
     * @memberof Allotment
     */
    end_time?: Date;
    /**
     * Date the subscription started
     * @type {Date}
     * @memberof Allotment
     */
    start_time?: Date;
    /**
     * Credit balances and limits by content tier
     * @type {{ [key: string]: any; }}
     * @memberof Allotment
     */
    content_tiers?: {
        [key: string]: any;
    };
}
/**
 * Metadata about the artist that created the media
 * @export
 * @interface Artist
 */
export interface Artist {
    /**
     * The artist's name
     * @type {string}
     * @memberof Artist
     */
    name: string;
}
/**
 *
 * @export
 * @interface AssetId
 */
export interface AssetId {
}
/**
 * Audio metadata
 * @export
 * @interface Audio
 */
export interface Audio {
    /**
     * Date this track was added to the Shutterstock library
     * @type {string}
     * @memberof Audio
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof Audio
     */
    affiliate_url?: string;
    /**
     *
     * @type {AudioAlbum}
     * @memberof Audio
     */
    album?: AudioAlbum;
    /**
     * List of artists
     * @type {Array<AudioArtists>}
     * @memberof Audio
     */
    artists?: Array<AudioArtists>;
    /**
     *
     * @type {AudioAssets}
     * @memberof Audio
     */
    assets?: AudioAssets;
    /**
     * BPM (beats per minute) of this track
     * @type {number}
     * @memberof Audio
     */
    bpm?: number;
    /**
     *
     * @type {AudioContributor}
     * @memberof Audio
     */
    contributor: AudioContributor;
    /**
     *
     * @type {Date}
     * @memberof Audio
     */
    deleted_time?: Date;
    /**
     * Description of this track
     * @type {string}
     * @memberof Audio
     */
    description?: string;
    /**
     * Duration of this track in seconds
     * @type {number}
     * @memberof Audio
     */
    duration?: number;
    /**
     * List of all genres for this track
     * @type {Array<string>}
     * @memberof Audio
     */
    genres?: Array<string>;
    /**
     * Shutterstock ID of this track
     * @type {string}
     * @memberof Audio
     */
    id: string;
    /**
     * List of all instruments that appear in this track
     * @type {Array<string>}
     * @memberof Audio
     */
    instruments?: Array<string>;
    /**
     * Whether or not this track contains adult content
     * @type {boolean}
     * @memberof Audio
     */
    is_adult?: boolean;
    /**
     * Whether or not this track is purely instrumental (lacking lyrics)
     * @type {boolean}
     * @memberof Audio
     */
    is_instrumental?: boolean;
    /**
     * The ISRC (International Standard Recording Code) is the international identification system for sound recordings and music video recordings.
     * @type {string}
     * @memberof Audio
     */
    isrc?: string;
    /**
     * List of all keywords for this track
     * @type {Array<string>}
     * @memberof Audio
     */
    keywords?: Array<string>;
    /**
     * Language of this track's lyrics
     * @type {string}
     * @memberof Audio
     */
    language?: string;
    /**
     * Lyrics of this track
     * @type {string}
     * @memberof Audio
     */
    lyrics?: string;
    /**
     * Media type of this track; should always be \"audio\"
     * @type {string}
     * @memberof Audio
     */
    media_type: string;
    /**
     * List of all model releases for this track
     * @type {Array<AudioModelReleases>}
     * @memberof Audio
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of all moods of this track
     * @type {Array<string>}
     * @memberof Audio
     */
    moods?: Array<string>;
    /**
     * Time this track was published
     * @type {Date}
     * @memberof Audio
     */
    published_time?: Date;
    /**
     * Recording version of this track
     * @type {string}
     * @memberof Audio
     */
    recording_version?: string;
    /**
     * List of all releases of this track
     * @type {Array<string>}
     * @memberof Audio
     */
    releases?: Array<string>;
    /**
     * List of all similar artists of this track
     * @type {Array<AudioArtists>}
     * @memberof Audio
     */
    similar_artists?: Array<AudioArtists>;
    /**
     * Time this track was submitted
     * @type {Date}
     * @memberof Audio
     */
    submitted_time?: Date;
    /**
     * Title of this track
     * @type {string}
     * @memberof Audio
     */
    title?: string;
    /**
     * Time this track was last updated
     * @type {Date}
     * @memberof Audio
     */
    updated_time?: Date;
    /**
     * Vocal description of this track
     * @type {string}
     * @memberof Audio
     */
    vocal_description?: string;
    /**
     *
     * @type {string}
     * @memberof Audio
     */
    url?: string;
}
/**
 * Album metadata
 * @export
 * @interface AudioAlbum
 */
export interface AudioAlbum {
    /**
     * The album ID
     * @type {string}
     * @memberof AudioAlbum
     */
    id: string;
    /**
     * The album title
     * @type {string}
     * @memberof AudioAlbum
     */
    title: string;
}
/**
 * Metadata about the artist that created the media
 * @export
 * @interface AudioArtists
 */
export interface AudioArtists {
    /**
     * The artist's name
     * @type {string}
     * @memberof AudioArtists
     */
    name: string;
}
/**
 * Information about a file that is part of an audio asset
 * @export
 * @interface AudioAssetDetails
 */
export interface AudioAssetDetails {
    /**
     * File size of the track
     * @type {number}
     * @memberof AudioAssetDetails
     */
    file_size?: number;
    /**
     * URL the track is available at
     * @type {string}
     * @memberof AudioAssetDetails
     */
    url?: string;
}
/**
 * Files that are available as part of an audio asset
 * @export
 * @interface AudioAssets
 */
export interface AudioAssets {
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    album_art?: AudioAssetsAlbumArt;
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    clean_audio?: AudioAssetsAlbumArt;
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    original_audio?: AudioAssetsAlbumArt;
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    preview_mp3?: AudioAssetsAlbumArt;
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    preview_ogg?: AudioAssetsAlbumArt;
    /**
     *
     * @type {AudioAssetsAlbumArt}
     * @memberof AudioAssets
     */
    waveform?: AudioAssetsAlbumArt;
    /**
     * JSON waveform data for the audio track. The file size is 0 when it is unavailable.
     * @type {any}
     * @memberof AudioAssets
     */
    waveform_json?: any;
    /**
     *
     * @type {AudioAssetsShortsLoopsStems}
     * @memberof AudioAssets
     */
    shorts_loops_stems?: AudioAssetsShortsLoopsStems;
}
/**
 * Information about a file that is part of an audio asset
 * @export
 * @interface AudioAssetsAlbumArt
 */
export interface AudioAssetsAlbumArt {
    /**
     * File size of the track
     * @type {number}
     * @memberof AudioAssetsAlbumArt
     */
    file_size?: number;
    /**
     * URL the track is available at
     * @type {string}
     * @memberof AudioAssetsAlbumArt
     */
    url?: string;
}
/**
 * Links for Shorts, Loops and Stems previews
 * @export
 * @interface AudioAssetsShortsLoopsStems
 */
export interface AudioAssetsShortsLoopsStems {
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof AudioAssetsShortsLoopsStems
     */
    shorts?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof AudioAssetsShortsLoopsStems
     */
    loops?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof AudioAssetsShortsLoopsStems
     */
    stems?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
}
/**
 *
 * @export
 * @interface AudioAssetsShortsLoopsStemsShorts
 */
export interface AudioAssetsShortsLoopsStemsShorts {
    /**
     *
     * @type {string}
     * @memberof AudioAssetsShortsLoopsStemsShorts
     */
    url?: string;
}
/**
 * Collection creation request
 * @export
 * @interface AudioCollectionsBody
 */
export interface AudioCollectionsBody {
    /**
     * The name of the collection
     * @type {string}
     * @memberof AudioCollectionsBody
     */
    name: string;
}
/**
 * Information about a contributor
 * @export
 * @interface AudioContributor
 */
export interface AudioContributor {
    /**
     * ID of the contributor
     * @type {string}
     * @memberof AudioContributor
     */
    id: string;
    /**
     * Display name of the contributor
     * @type {string}
     * @memberof AudioContributor
     */
    name?: string;
}
/**
 * List of tracks
 * @export
 * @interface AudioDataList
 */
export interface AudioDataList {
    /**
     * Tracks
     * @type {Array<AudioDataListData>}
     * @memberof AudioDataList
     */
    data?: Array<AudioDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof AudioDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof AudioDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof AudioDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof AudioDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof AudioDataList
     */
    total_count?: number;
}
/**
 * Audio metadata
 * @export
 * @interface AudioDataListData
 */
export interface AudioDataListData {
    /**
     * Date this track was added to the Shutterstock library
     * @type {string}
     * @memberof AudioDataListData
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof AudioDataListData
     */
    affiliate_url?: string;
    /**
     *
     * @type {AudioAlbum}
     * @memberof AudioDataListData
     */
    album?: AudioAlbum;
    /**
     * List of artists
     * @type {Array<AudioArtists>}
     * @memberof AudioDataListData
     */
    artists?: Array<AudioArtists>;
    /**
     *
     * @type {AudioAssets}
     * @memberof AudioDataListData
     */
    assets?: AudioAssets;
    /**
     * BPM (beats per minute) of this track
     * @type {number}
     * @memberof AudioDataListData
     */
    bpm?: number;
    /**
     *
     * @type {AudioContributor}
     * @memberof AudioDataListData
     */
    contributor: AudioContributor;
    /**
     *
     * @type {Date}
     * @memberof AudioDataListData
     */
    deleted_time?: Date;
    /**
     * Description of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    description?: string;
    /**
     * Duration of this track in seconds
     * @type {number}
     * @memberof AudioDataListData
     */
    duration?: number;
    /**
     * List of all genres for this track
     * @type {Array<string>}
     * @memberof AudioDataListData
     */
    genres?: Array<string>;
    /**
     * Shutterstock ID of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    id: string;
    /**
     * List of all instruments that appear in this track
     * @type {Array<string>}
     * @memberof AudioDataListData
     */
    instruments?: Array<string>;
    /**
     * Whether or not this track contains adult content
     * @type {boolean}
     * @memberof AudioDataListData
     */
    is_adult?: boolean;
    /**
     * Whether or not this track is purely instrumental (lacking lyrics)
     * @type {boolean}
     * @memberof AudioDataListData
     */
    is_instrumental?: boolean;
    /**
     * The ISRC (International Standard Recording Code) is the international identification system for sound recordings and music video recordings.
     * @type {string}
     * @memberof AudioDataListData
     */
    isrc?: string;
    /**
     * List of all keywords for this track
     * @type {Array<string>}
     * @memberof AudioDataListData
     */
    keywords?: Array<string>;
    /**
     * Language of this track's lyrics
     * @type {string}
     * @memberof AudioDataListData
     */
    language?: string;
    /**
     * Lyrics of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    lyrics?: string;
    /**
     * Media type of this track; should always be \"audio\"
     * @type {string}
     * @memberof AudioDataListData
     */
    media_type: string;
    /**
     * List of all model releases for this track
     * @type {Array<AudioModelReleases>}
     * @memberof AudioDataListData
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of all moods of this track
     * @type {Array<string>}
     * @memberof AudioDataListData
     */
    moods?: Array<string>;
    /**
     * Time this track was published
     * @type {Date}
     * @memberof AudioDataListData
     */
    published_time?: Date;
    /**
     * Recording version of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    recording_version?: string;
    /**
     * List of all releases of this track
     * @type {Array<string>}
     * @memberof AudioDataListData
     */
    releases?: Array<string>;
    /**
     * List of all similar artists of this track
     * @type {Array<AudioArtists>}
     * @memberof AudioDataListData
     */
    similar_artists?: Array<AudioArtists>;
    /**
     * Time this track was submitted
     * @type {Date}
     * @memberof AudioDataListData
     */
    submitted_time?: Date;
    /**
     * Title of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    title?: string;
    /**
     * Time this track was last updated
     * @type {Date}
     * @memberof AudioDataListData
     */
    updated_time?: Date;
    /**
     * Vocal description of this track
     * @type {string}
     * @memberof AudioDataListData
     */
    vocal_description?: string;
    /**
     *
     * @type {string}
     * @memberof AudioDataListData
     */
    url?: string;
}
/**
 * Error object
 * @export
 * @interface AudioDataListErrors
 */
export interface AudioDataListErrors {
    /**
     * HTTP Error code
     * @type {number}
     * @memberof AudioDataListErrors
     */
    status_code?: number;
    /**
     * The error code of this error
     * @type {string}
     * @memberof AudioDataListErrors
     */
    code?: string;
    /**
     * Debugging information about the error
     * @type {string}
     * @memberof AudioDataListErrors
     */
    data?: string;
    /**
     * A list of items that produced the error
     * @type {Array<any>}
     * @memberof AudioDataListErrors
     */
    items?: Array<any>;
    /**
     * Specific details about this error
     * @type {string}
     * @memberof AudioDataListErrors
     */
    message: string;
    /**
     * Internal code reference to the source of the error
     * @type {string}
     * @memberof AudioDataListErrors
     */
    path?: string;
}
/**
 * Audio license request data
 * @export
 * @interface AudioLicensesBody
 */
export interface AudioLicensesBody {
    /**
     * List of audio tracks to license
     * @type {Array<V2audiolicensesAudio>}
     * @memberof AudioLicensesBody
     */
    audio: Array<V2audiolicensesAudio>;
}
/**
 * Model and property release metadata
 * @export
 * @interface AudioModelReleases
 */
export interface AudioModelReleases {
    /**
     * ID of the model or property release
     * @type {string}
     * @memberof AudioModelReleases
     */
    id?: string;
}
/**
 * Audio search results
 * @export
 * @interface AudioSearchResults
 */
export interface AudioSearchResults {
    /**
     * List of tracks
     * @type {Array<AudioDataListData>}
     * @memberof AudioSearchResults
     */
    data: Array<AudioDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof AudioSearchResults
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof AudioSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof AudioSearchResults
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof AudioSearchResults
     */
    total_count: number;
    /**
     * ID of the search
     * @type {string}
     * @memberof AudioSearchResults
     */
    search_id: string;
}
/**
 * Audio License URL object
 * @export
 * @interface AudioUrl
 */
export interface AudioUrl {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof AudioUrl
     */
    url: string;
    /**
     * URL that can be used to download the .zip file containing shorts, loops, and stems
     * @type {string}
     * @memberof AudioUrl
     */
    shorts_loops_stems?: string;
}
/**
 * HTML redirect URL that contains the application authorization 'code'
 * @export
 * @interface AuthorizeResponse
 */
export interface AuthorizeResponse {
}
/**
 * List of searches
 * @export
 * @interface BulkImageSearchRequest
 */
export interface BulkImageSearchRequest extends Array<BulkSearchImagesBody> {
}
/**
 * List of search results for each given query
 * @export
 * @interface BulkImageSearchResults
 */
export interface BulkImageSearchResults {
    /**
     *
     * @type {BulkImageSearchResultsBulkSearchResults}
     * @memberof BulkImageSearchResults
     */
    bulk_search_results?: BulkImageSearchResultsBulkSearchResults;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof BulkImageSearchResults
     */
    bulk_search_id?: string;
}
/**
 *
 * @export
 * @interface BulkImageSearchResultsBulkSearchResults
 */
export interface BulkImageSearchResultsBulkSearchResults {
    /**
     * List of search results per query (in request order)
     * @type {Array<any>}
     * @memberof BulkImageSearchResultsBulkSearchResults
     */
    data?: Array<any>;
    /**
     * List of HTTP errors per query (in request order)
     * @type {Array<AudioDataListErrors>}
     * @memberof BulkImageSearchResultsBulkSearchResults
     */
    errors?: Array<AudioDataListErrors>;
}
/**
 * Data required to search for an image
 * @export
 * @interface BulkSearchImagesBody
 */
export interface BulkSearchImagesBody {
    /**
     * Show images added on the specified date
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    added_date?: string;
    /**
     * Show images added on or after the specified date
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    added_date_start?: string;
    /**
     * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    aspect_ratio_min?: number;
    /**
     * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    aspect_ratio_max?: number;
    /**
     * Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    aspect_ratio?: number;
    /**
     * Show images added before the specified date
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    added_date_end?: string;
    /**
     * Show only authentic images
     * @type {boolean}
     * @memberof BulkSearchImagesBody
     */
    authentic?: boolean;
    /**
     * Show images with the specified Shutterstock-defined category; specify a category name or ID
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    category?: string;
    /**
     * Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    color?: string;
    /**
     * Show images with the specified contributor names or IDs, allows multiple
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    contributor?: Array<string>;
    /**
     * Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    contributor_country?: Array<string>;
    /**
     * Fields to display in the response; see the documentation for the fields parameter in the overview section
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    fields?: string;
    /**
     * (Deprecated; use height_from and height_to instead) Show images with the specified height
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    height?: number;
    /**
     * Show images with the specified height or larger, in pixels
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    height_from?: number;
    /**
     * Show images with the specified height or smaller, in pixels
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    height_to?: number;
    /**
     * Show images of the specified type
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    image_type?: Array<BulkSearchImagesBody.ImageTypeEnum>;
    /**
     * Hide results with potentially unsafe keywords
     * @type {boolean}
     * @memberof BulkSearchImagesBody
     */
    keyword_safe_search?: boolean;
    /**
     * Set query and result language (uses Accept-Language header if not set)
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    language?: BulkSearchImagesBody.LanguageEnum;
    /**
     * Show only images with the specified license
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    license?: Array<BulkSearchImagesBody.LicenseEnum>;
    /**
     * Show image results with the specified model IDs
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    model?: Array<string>;
    /**
     * Show image results with horizontal or vertical orientation
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    orientation?: BulkSearchImagesBody.OrientationEnum;
    /**
     * Page number
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    per_page?: number;
    /**
     * Show images of people with a signed model release
     * @type {boolean}
     * @memberof BulkSearchImagesBody
     */
    people_model_released?: boolean;
    /**
     * Show images that feature people of the specified age category
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    people_age?: BulkSearchImagesBody.PeopleAgeEnum;
    /**
     * Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
     * @type {Array<string>}
     * @memberof BulkSearchImagesBody
     */
    people_ethnicity?: Array<BulkSearchImagesBody.PeopleEthnicityEnum>;
    /**
     * Show images with people of the specified gender
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    people_gender?: BulkSearchImagesBody.PeopleGenderEnum;
    /**
     * Show images with the specified number of people
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    people_number?: number;
    /**
     * One or more search terms separated by spaces; you can use NOT to filter out images that match a term
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    query?: string;
    /**
     * Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    region?: string;
    /**
     * Enable or disable safe search
     * @type {boolean}
     * @memberof BulkSearchImagesBody
     */
    safe?: boolean;
    /**
     * Sort by
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    sort?: BulkSearchImagesBody.SortEnum;
    /**
     * Spellcheck the search query and return results on suggested spellings
     * @type {boolean}
     * @memberof BulkSearchImagesBody
     */
    spellcheck_query?: boolean;
    /**
     * Amount of detail to render in the response
     * @type {string}
     * @memberof BulkSearchImagesBody
     */
    view?: BulkSearchImagesBody.ViewEnum;
    /**
     * (Deprecated; use width_from and width_to instead) Show images with the specified width
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    width?: number;
    /**
     * Show images with the specified width or larger, in pixels
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    width_from?: number;
    /**
     * Show images with the specified width or smaller, in pixels
     * @type {number}
     * @memberof BulkSearchImagesBody
     */
    width_to?: number;
}
/**
 * @export
 * @namespace BulkSearchImagesBody
 */
export declare namespace BulkSearchImagesBody {
    /**
     * @export
     * @enum {string}
     */
    enum ImageTypeEnum {
        Photo,
        Illustration,
        Vector
    }
    /**
     * @export
     * @enum {string}
     */
    enum LanguageEnum {
        Ar,
        Bg,
        Bn,
        Cs,
        Da,
        De,
        El,
        En,
        Es,
        Fi,
        Fr,
        Gu,
        He,
        Hi,
        Hr,
        Hu,
        Id,
        It,
        Ja,
        Kn,
        Ko,
        Ml,
        Mr,
        Nb,
        Nl,
        Or,
        Pl,
        Pt,
        Ro,
        Ru,
        Sk,
        Sl,
        Sv,
        Ta,
        Te,
        Th,
        Tr,
        Uk,
        Ur,
        Vi,
        Zh,
        ZhHant
    }
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        Commercial,
        Editorial,
        Enhanced
    }
    /**
     * @export
     * @enum {string}
     */
    enum OrientationEnum {
        Horizontal,
        Vertical
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleAgeEnum {
        Infants,
        Children,
        Teenagers,
        _20s,
        _30s,
        _40s,
        _50s,
        _60s,
        Older
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleEthnicityEnum {
        African,
        AfricanAmerican,
        Black,
        Brazilian,
        Chinese,
        Caucasian,
        EastAsian,
        Hispanic,
        Japanese,
        MiddleEastern,
        NativeAmerican,
        PacificIslander,
        SouthAsian,
        SoutheastAsian,
        Other,
        NOTAfrican,
        NOTAfricanAmerican,
        NOTBlack,
        NOTBrazilian,
        NOTChinese,
        NOTCaucasian,
        NOTEastAsian,
        NOTHispanic,
        NOTJapanese,
        NOTMiddleEastern,
        NOTNativeAmerican,
        NOTPacificIslander,
        NOTSouthAsian,
        NOTSoutheastAsian,
        NOTOther
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleGenderEnum {
        Male,
        Female,
        Both
    }
    /**
     * @export
     * @enum {string}
     */
    enum SortEnum {
        Newest,
        Popular,
        Relevance,
        Random
    }
    /**
     * @export
     * @enum {string}
     */
    enum ViewEnum {
        Minimal,
        Full
    }
}
/**
 * Catalog collection
 * @export
 * @interface CatalogCollection
 */
export interface CatalogCollection {
    /**
     *
     * @type {string}
     * @memberof CatalogCollection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollection
     */
    name: string;
    /**
     *
     * @type {CatalogCollectionCoverAsset}
     * @memberof CatalogCollection
     */
    cover_asset?: CatalogCollectionCoverAsset;
    /**
     *
     * @type {number}
     * @memberof CatalogCollection
     */
    total_item_count: number;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollection
     */
    created_time: Date;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollection
     */
    updated_time: Date;
    /**
     *
     * @type {string}
     * @memberof CatalogCollection
     */
    visibility: CatalogCollection.VisibilityEnum;
    /**
     *
     * @type {CatalogCollectionRoleAssignments}
     * @memberof CatalogCollection
     */
    role_assignments: CatalogCollectionRoleAssignments;
}
/**
 * @export
 * @namespace CatalogCollection
 */
export declare namespace CatalogCollection {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * Metadata about an item that is part of a collection
 * @export
 * @interface CatalogCollectionCoverAsset
 */
export interface CatalogCollectionCoverAsset {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionCoverAsset
     */
    id: string;
    /**
     *
     * @type {CatalogCollectionCoverAssetAsset}
     * @memberof CatalogCollectionCoverAsset
     */
    asset: CatalogCollectionCoverAssetAsset;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollectionCoverAsset
     */
    created_time: Date;
    /**
     * The collection IDs that this asset belongs to
     * @type {Array<string>}
     * @memberof CatalogCollectionCoverAsset
     */
    collection_ids?: Array<string>;
}
/**
 *
 * @export
 * @interface CatalogCollectionCoverAssetAsset
 */
export interface CatalogCollectionCoverAssetAsset {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionCoverAssetAsset
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionCoverAssetAsset
     */
    type: CatalogCollectionCoverAssetAsset.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionCoverAssetAsset
     */
    name?: string;
}
/**
 * @export
 * @namespace CatalogCollectionCoverAssetAsset
 */
export declare namespace CatalogCollectionCoverAssetAsset {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        Image,
        Video,
        Audio,
        EditorialImage,
        EditorialVideo
    }
}
/**
 * List of catalog collections
 * @export
 * @interface CatalogCollectionDataList
 */
export interface CatalogCollectionDataList {
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionDataList
     */
    page: number;
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionDataList
     */
    per_page: number;
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionDataList
     */
    total_count: number;
    /**
     * List of catalog collections
     * @type {Array<CatalogCollectionDataListData>}
     * @memberof CatalogCollectionDataList
     */
    data: Array<CatalogCollectionDataListData>;
}
/**
 * Catalog collection
 * @export
 * @interface CatalogCollectionDataListData
 */
export interface CatalogCollectionDataListData {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionDataListData
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionDataListData
     */
    name: string;
    /**
     *
     * @type {CatalogCollectionCoverAsset}
     * @memberof CatalogCollectionDataListData
     */
    cover_asset?: CatalogCollectionCoverAsset;
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionDataListData
     */
    total_item_count: number;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollectionDataListData
     */
    created_time: Date;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollectionDataListData
     */
    updated_time: Date;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionDataListData
     */
    visibility: CatalogCollectionDataListData.VisibilityEnum;
    /**
     *
     * @type {CatalogCollectionRoleAssignments}
     * @memberof CatalogCollectionDataListData
     */
    role_assignments: CatalogCollectionRoleAssignments;
}
/**
 * @export
 * @namespace CatalogCollectionDataListData
 */
export declare namespace CatalogCollectionDataListData {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * Metadata about an item that is part of a collection
 * @export
 * @interface CatalogCollectionItem
 */
export interface CatalogCollectionItem {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionItem
     */
    id: string;
    /**
     *
     * @type {CatalogCollectionCoverAssetAsset}
     * @memberof CatalogCollectionItem
     */
    asset: CatalogCollectionCoverAssetAsset;
    /**
     *
     * @type {Date}
     * @memberof CatalogCollectionItem
     */
    created_time: Date;
    /**
     * The collection IDs that this asset belongs to
     * @type {Array<string>}
     * @memberof CatalogCollectionItem
     */
    collection_ids?: Array<string>;
}
/**
 * List of catalog collection items
 * @export
 * @interface CatalogCollectionItemDataList
 */
export interface CatalogCollectionItemDataList {
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionItemDataList
     */
    page: number;
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionItemDataList
     */
    per_page: number;
    /**
     *
     * @type {number}
     * @memberof CatalogCollectionItemDataList
     */
    total_count: number;
    /**
     * List of catalog collection items
     * @type {Array<CatalogCollectionCoverAsset>}
     * @memberof CatalogCollectionItemDataList
     */
    data: Array<CatalogCollectionCoverAsset>;
}
/**
 * A user that has access to a catalog collection
 * @export
 * @interface CatalogCollectionRole
 */
export interface CatalogCollectionRole {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRole
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRole
     */
    type: CatalogCollectionRole.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRole
     */
    email: string;
}
/**
 * @export
 * @namespace CatalogCollectionRole
 */
export declare namespace CatalogCollectionRole {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        USER
    }
}
/**
 * List of role assignments for a catalog collection
 * @export
 * @interface CatalogCollectionRoleAssignments
 */
export interface CatalogCollectionRoleAssignments {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRoleAssignments
     */
    collection_id: string;
    /**
     *
     * @type {CatalogCollectionRoleAssignmentsRoles}
     * @memberof CatalogCollectionRoleAssignments
     */
    roles: CatalogCollectionRoleAssignmentsRoles;
}
/**
 *
 * @export
 * @interface CatalogCollectionRoleAssignmentsRoles
 */
export interface CatalogCollectionRoleAssignmentsRoles {
    /**
     *
     * @type {Array<CatalogCollectionRoleAssignmentsRolesOwners>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    owners?: Array<CatalogCollectionRoleAssignmentsRolesOwners>;
    /**
     *
     * @type {Array<CatalogCollectionRoleAssignmentsRolesOwners>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    editors?: Array<CatalogCollectionRoleAssignmentsRolesOwners>;
    /**
     *
     * @type {Array<CatalogCollectionRoleAssignmentsRolesOwners>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    viewers?: Array<CatalogCollectionRoleAssignmentsRolesOwners>;
}
/**
 * A user that has access to a catalog collection
 * @export
 * @interface CatalogCollectionRoleAssignmentsRolesOwners
 */
export interface CatalogCollectionRoleAssignmentsRolesOwners {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRoleAssignmentsRolesOwners
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRoleAssignmentsRolesOwners
     */
    type: CatalogCollectionRoleAssignmentsRolesOwners.TypeEnum;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionRoleAssignmentsRolesOwners
     */
    email: string;
}
/**
 * @export
 * @namespace CatalogCollectionRoleAssignmentsRolesOwners
 */
export declare namespace CatalogCollectionRoleAssignmentsRolesOwners {
    /**
     * @export
     * @enum {string}
     */
    enum TypeEnum {
        USER
    }
}
/**
 *
 * @export
 * @interface CatalogCollectionsBody
 */
export interface CatalogCollectionsBody {
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionsBody
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CatalogCollectionsBody
     */
    visibility?: CatalogCollectionsBody.VisibilityEnum;
    /**
     *
     * @type {Array<V2catalogcollectionsItems>}
     * @memberof CatalogCollectionsBody
     */
    items?: Array<V2catalogcollectionsItems>;
}
/**
 * @export
 * @namespace CatalogCollectionsBody
 */
export declare namespace CatalogCollectionsBody {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * Category information
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * Category ID
     * @type {string}
     * @memberof Category
     */
    id?: string;
    /**
     * Category name
     * @type {string}
     * @memberof Category
     */
    name?: string;
}
/**
 * List of categories that images can belong to
 * @export
 * @interface CategoryDataList
 */
export interface CategoryDataList {
    /**
     * Categories
     * @type {Array<CategoryDataListData>}
     * @memberof CategoryDataList
     */
    data?: Array<CategoryDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof CategoryDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof CategoryDataList
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof CategoryDataList
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof CategoryDataList
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof CategoryDataList
     */
    total_count?: number;
}
/**
 * Category information
 * @export
 * @interface CategoryDataListData
 */
export interface CategoryDataListData {
    /**
     * Category ID
     * @type {string}
     * @memberof CategoryDataListData
     */
    id?: string;
    /**
     * Category name
     * @type {string}
     * @memberof CategoryDataListData
     */
    name?: string;
}
/**
 * Metadata about a collection of assets
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     *
     * @type {V2imagescollectionsiditemsItems}
     * @memberof Collection
     */
    cover_item?: V2imagescollectionsiditemsItems;
    /**
     * When the collection was created
     * @type {Date}
     * @memberof Collection
     */
    created_time?: Date;
    /**
     * The collection ID
     * @type {string}
     * @memberof Collection
     */
    id: string;
    /**
     * The last time this collection's items were updated
     * @type {Date}
     * @memberof Collection
     */
    items_updated_time?: Date;
    /**
     * The name of the collection
     * @type {string}
     * @memberof Collection
     */
    name: string;
    /**
     * A code that can be used to share the collection (optional)
     * @type {string}
     * @memberof Collection
     */
    share_code?: string;
    /**
     * The browser URL that can be used to share the collection (optional)
     * @type {string}
     * @memberof Collection
     */
    share_url?: string;
    /**
     * The number of items in the collection
     * @type {number}
     * @memberof Collection
     */
    total_item_count: number;
    /**
     * The last time the collection was updated (other than changes to the items in it)
     * @type {Date}
     * @memberof Collection
     */
    updated_time?: Date;
}
/**
 * Collection creation request
 * @export
 * @interface CollectionCreateRequest
 */
export interface CollectionCreateRequest {
    /**
     * The name of the collection
     * @type {string}
     * @memberof CollectionCreateRequest
     */
    name: string;
}
/**
 * Collection creation response
 * @export
 * @interface CollectionCreateResponse
 */
export interface CollectionCreateResponse {
    /**
     * ID of the new collection
     * @type {string}
     * @memberof CollectionCreateResponse
     */
    id: string;
}
/**
 * List of collections
 * @export
 * @interface CollectionDataList
 */
export interface CollectionDataList {
    /**
     * Collections
     * @type {Array<CollectionDataListData>}
     * @memberof CollectionDataList
     */
    data?: Array<CollectionDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof CollectionDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof CollectionDataList
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof CollectionDataList
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof CollectionDataList
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof CollectionDataList
     */
    total_count?: number;
}
/**
 * Metadata about a collection of assets
 * @export
 * @interface CollectionDataListData
 */
export interface CollectionDataListData {
    /**
     *
     * @type {V2imagescollectionsiditemsItems}
     * @memberof CollectionDataListData
     */
    cover_item?: V2imagescollectionsiditemsItems;
    /**
     * When the collection was created
     * @type {Date}
     * @memberof CollectionDataListData
     */
    created_time?: Date;
    /**
     * The collection ID
     * @type {string}
     * @memberof CollectionDataListData
     */
    id: string;
    /**
     * The last time this collection's items were updated
     * @type {Date}
     * @memberof CollectionDataListData
     */
    items_updated_time?: Date;
    /**
     * The name of the collection
     * @type {string}
     * @memberof CollectionDataListData
     */
    name: string;
    /**
     * A code that can be used to share the collection (optional)
     * @type {string}
     * @memberof CollectionDataListData
     */
    share_code?: string;
    /**
     * The browser URL that can be used to share the collection (optional)
     * @type {string}
     * @memberof CollectionDataListData
     */
    share_url?: string;
    /**
     * The number of items in the collection
     * @type {number}
     * @memberof CollectionDataListData
     */
    total_item_count: number;
    /**
     * The last time the collection was updated (other than changes to the items in it)
     * @type {Date}
     * @memberof CollectionDataListData
     */
    updated_time?: Date;
}
/**
 *
 * @export
 * @interface CollectionIdItemsBody
 */
export interface CollectionIdItemsBody {
    /**
     *
     * @type {Array<V2catalogcollectionsItems>}
     * @memberof CollectionIdItemsBody
     */
    items: Array<V2catalogcollectionsItems>;
}
/**
 *
 * @export
 * @interface CollectionIdItemsBody1
 */
export interface CollectionIdItemsBody1 {
    /**
     *
     * @type {Array<V2catalogcollectionscollectionIditemsItems>}
     * @memberof CollectionIdItemsBody1
     */
    items: Array<V2catalogcollectionscollectionIditemsItems>;
}
/**
 * Metadata about an item that is part of a collection
 * @export
 * @interface CollectionItem
 */
export interface CollectionItem {
    /**
     * The date the item was added to the collection
     * @type {Date}
     * @memberof CollectionItem
     */
    added_time?: Date;
    /**
     * ID of the item
     * @type {string}
     * @memberof CollectionItem
     */
    id: string;
    /**
     * The media type of the item, such as image, video, or audio
     * @type {string}
     * @memberof CollectionItem
     */
    media_type?: string;
}
/**
 * List of items in a collection
 * @export
 * @interface CollectionItemDataList
 */
export interface CollectionItemDataList {
    /**
     * Assets in the collection
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof CollectionItemDataList
     */
    data?: Array<V2imagescollectionsiditemsItems>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof CollectionItemDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof CollectionItemDataList
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof CollectionItemDataList
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof CollectionItemDataList
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof CollectionItemDataList
     */
    total_count?: number;
}
/**
 * Request to get a list of items in a collection
 * @export
 * @interface CollectionItemRequest
 */
export interface CollectionItemRequest {
    /**
     * List of items
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof CollectionItemRequest
     */
    items: Array<V2imagescollectionsiditemsItems>;
}
/**
 * Collection update request
 * @export
 * @interface CollectionUpdateRequest
 */
export interface CollectionUpdateRequest {
    /**
     * The new name of the collection
     * @type {string}
     * @memberof CollectionUpdateRequest
     */
    name: string;
}
/**
 *
 * @export
 * @interface CollectionsCollectionIdBody
 */
export interface CollectionsCollectionIdBody {
    /**
     *
     * @type {string}
     * @memberof CollectionsCollectionIdBody
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof CollectionsCollectionIdBody
     */
    visibility?: CollectionsCollectionIdBody.VisibilityEnum;
    /**
     *
     * @type {V2catalogcollectionscollectionIdCoverAsset}
     * @memberof CollectionsCollectionIdBody
     */
    cover_asset?: V2catalogcollectionscollectionIdCoverAsset;
}
/**
 * @export
 * @namespace CollectionsCollectionIdBody
 */
export declare namespace CollectionsCollectionIdBody {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * Collection update request
 * @export
 * @interface CollectionsIdBody
 */
export interface CollectionsIdBody {
    /**
     * The new name of the collection
     * @type {string}
     * @memberof CollectionsIdBody
     */
    name: string;
}
/**
 * Collection update request
 * @export
 * @interface CollectionsIdBody1
 */
export interface CollectionsIdBody1 {
    /**
     * The new name of the collection
     * @type {string}
     * @memberof CollectionsIdBody1
     */
    name: string;
}
/**
 * Collection update request
 * @export
 * @interface CollectionsIdBody2
 */
export interface CollectionsIdBody2 {
    /**
     * The new name of the collection
     * @type {string}
     * @memberof CollectionsIdBody2
     */
    name: string;
}
/**
 * Asset upload information
 * @export
 * @interface ComputerVisionImageCreateResponse
 */
export interface ComputerVisionImageCreateResponse {
    /**
     *
     * @type {string}
     * @memberof ComputerVisionImageCreateResponse
     */
    upload_id: string;
}
/**
 * Information about a contributor
 * @export
 * @interface Contributor
 */
export interface Contributor {
    /**
     * ID of the contributor
     * @type {string}
     * @memberof Contributor
     */
    id: string;
    /**
     * Display name of the contributor
     * @type {string}
     * @memberof Contributor
     */
    name?: string;
}
/**
 *
 * @export
 * @interface ContributorCountry
 */
export interface ContributorCountry {
}
/**
 *
 * @export
 * @interface ContributorCountry1
 */
export interface ContributorCountry1 {
}
/**
 * Contributor profile data
 * @export
 * @interface ContributorProfile
 */
export interface ContributorProfile {
    /**
     * Short description of the contributors' library
     * @type {string}
     * @memberof ContributorProfile
     */
    about?: string;
    /**
     * Type of content that the contributor specializes in (photographer, illustrator, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    contributor_type?: Array<string>;
    /**
     * Preferred name to be displayed for the contributor
     * @type {string}
     * @memberof ContributorProfile
     */
    display_name?: string;
    /**
     * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    equipment?: Array<string>;
    /**
     * Contributor ID
     * @type {string}
     * @memberof ContributorProfile
     */
    id: string;
    /**
     * Country code representing the contributor's locale
     * @type {string}
     * @memberof ContributorProfile
     */
    location?: string;
    /**
     * Web URL for the contributors' profile
     * @type {string}
     * @memberof ContributorProfile
     */
    portfolio_url?: string;
    /**
     *
     * @type {ContributorProfileSocialMedia}
     * @memberof ContributorProfile
     */
    social_media?: ContributorProfileSocialMedia;
    /**
     * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    styles?: Array<string>;
    /**
     * Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    subjects?: Array<string>;
    /**
     * Personal website for the contributor
     * @type {string}
     * @memberof ContributorProfile
     */
    website?: string;
}
/**
 * List of contributor profiles
 * @export
 * @interface ContributorProfileDataList
 */
export interface ContributorProfileDataList {
    /**
     * Contributor profiles
     * @type {Array<ContributorProfileDataListData>}
     * @memberof ContributorProfileDataList
     */
    data?: Array<ContributorProfileDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof ContributorProfileDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Error message
     * @type {string}
     * @memberof ContributorProfileDataList
     */
    message?: string;
    /**
     * Page of response
     * @type {number}
     * @memberof ContributorProfileDataList
     */
    page?: number;
    /**
     * Number of contributors per page
     * @type {number}
     * @memberof ContributorProfileDataList
     */
    per_page?: number;
    /**
     * Total count of contributors for this request
     * @type {number}
     * @memberof ContributorProfileDataList
     */
    total_count?: number;
}
/**
 * Contributor profile data
 * @export
 * @interface ContributorProfileDataListData
 */
export interface ContributorProfileDataListData {
    /**
     * Short description of the contributors' library
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    about?: string;
    /**
     * Type of content that the contributor specializes in (photographer, illustrator, etc)
     * @type {Array<string>}
     * @memberof ContributorProfileDataListData
     */
    contributor_type?: Array<string>;
    /**
     * Preferred name to be displayed for the contributor
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    display_name?: string;
    /**
     * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
     * @type {Array<string>}
     * @memberof ContributorProfileDataListData
     */
    equipment?: Array<string>;
    /**
     * Contributor ID
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    id: string;
    /**
     * Country code representing the contributor's locale
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    location?: string;
    /**
     * Web URL for the contributors' profile
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    portfolio_url?: string;
    /**
     *
     * @type {ContributorProfileSocialMedia}
     * @memberof ContributorProfileDataListData
     */
    social_media?: ContributorProfileSocialMedia;
    /**
     * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
     * @type {Array<string>}
     * @memberof ContributorProfileDataListData
     */
    styles?: Array<string>;
    /**
     * Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
     * @type {Array<string>}
     * @memberof ContributorProfileDataListData
     */
    subjects?: Array<string>;
    /**
     * Personal website for the contributor
     * @type {string}
     * @memberof ContributorProfileDataListData
     */
    website?: string;
}
/**
 * Contributor profile social media links
 * @export
 * @interface ContributorProfileSocialMedia
 */
export interface ContributorProfileSocialMedia {
    /**
     * Facebook link for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    facebook?: string;
    /**
     * Google+ link for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    google_plus?: string;
    /**
     * LinkedIn link for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    linkedin?: string;
    /**
     * Pinterest page for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    pinterest?: string;
    /**
     * Tumblr link for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    tumblr?: string;
    /**
     * Twitter link for contributor
     * @type {string}
     * @memberof ContributorProfileSocialMedia
     */
    twitter?: string;
}
/**
 * Cookie object
 * @export
 * @interface Cookie
 */
export interface Cookie {
    /**
     * The name of the cookie
     * @type {string}
     * @memberof Cookie
     */
    name: string;
    /**
     * The value of the cookie
     * @type {string}
     * @memberof Cookie
     */
    value: string;
}
/**
 *
 * @export
 * @interface CreateCatalogCollection
 */
export interface CreateCatalogCollection {
    /**
     *
     * @type {string}
     * @memberof CreateCatalogCollection
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof CreateCatalogCollection
     */
    visibility?: CreateCatalogCollection.VisibilityEnum;
    /**
     *
     * @type {Array<V2catalogcollectionsItems>}
     * @memberof CreateCatalogCollection
     */
    items?: Array<V2catalogcollectionsItems>;
}
/**
 * @export
 * @namespace CreateCatalogCollection
 */
export declare namespace CreateCatalogCollection {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 *
 * @export
 * @interface CreateCatalogCollectionItem
 */
export interface CreateCatalogCollectionItem {
    /**
     *
     * @type {V2catalogcollectionsAsset}
     * @memberof CreateCatalogCollectionItem
     */
    asset: V2catalogcollectionsAsset;
}
/**
 *
 * @export
 * @interface CreateCatalogCollectionItems
 */
export interface CreateCatalogCollectionItems {
    /**
     *
     * @type {Array<V2catalogcollectionsItems>}
     * @memberof CreateCatalogCollectionItems
     */
    items: Array<V2catalogcollectionsItems>;
}
/**
 * A custom height or a custom width to resize the image to, but not both (experimental)
 * @export
 * @interface CustomSizeDimensions
 */
export interface CustomSizeDimensions {
    /**
     * Custom height to resize the image to
     * @type {number}
     * @memberof CustomSizeDimensions
     */
    height?: number;
    /**
     * Custom width to resize the image to
     * @type {number}
     * @memberof CustomSizeDimensions
     */
    width?: number;
}
/**
 * Request to upload an image
 * @export
 * @interface CvImagesBody
 */
export interface CvImagesBody {
    /**
     * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     * @type {string}
     * @memberof CvImagesBody
     */
    base64_image: string;
}
/**
 * Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object
 * @export
 * @interface DownloadHistory
 */
export interface DownloadHistory {
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistory
     */
    audio?: DownloadHistoryAudio;
    /**
     * Date the media was downloaded the first time
     * @type {Date}
     * @memberof DownloadHistory
     */
    download_time: Date;
    /**
     * ID of the download
     * @type {string}
     * @memberof DownloadHistory
     */
    id: string;
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistory
     */
    image?: DownloadHistoryAudio;
    /**
     * Specifies if the media is downloadable via its respective downloads endpoint
     * @type {boolean}
     * @memberof DownloadHistory
     */
    is_downloadable?: boolean;
    /**
     * The name of the license of this download
     * @type {string}
     * @memberof DownloadHistory
     */
    license: string;
    /**
     * The metadata that was passed in the original licensing request
     * @type {any}
     * @memberof DownloadHistory
     */
    metadata?: any;
    /**
     * ID of the subscription used to perform this download
     * @type {string}
     * @memberof DownloadHistory
     */
    subscription_id?: string;
    /**
     *
     * @type {DownloadHistoryUser}
     * @memberof DownloadHistory
     */
    user?: DownloadHistoryUser;
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistory
     */
    video?: DownloadHistoryAudio;
    /**
     *
     * @type {DownloadHistoryRevshare}
     * @memberof DownloadHistory
     */
    revshare?: DownloadHistoryRevshare;
}
/**
 * Information about the downloaded media
 * @export
 * @interface DownloadHistoryAudio
 */
export interface DownloadHistoryAudio {
    /**
     *
     * @type {DownloadHistoryAudioAiIpReview}
     * @memberof DownloadHistoryAudio
     */
    ai_ip_review?: DownloadHistoryAudioAiIpReview;
    /**
     *
     * @type {DownloadHistoryAudioFormat}
     * @memberof DownloadHistoryAudio
     */
    format?: DownloadHistoryAudioFormat;
    /**
     * ID of the user who generated the AI image. Returned only for generated image license history when available.
     * @type {number}
     * @memberof DownloadHistoryAudio
     */
    generated_by_user?: number;
    /**
     * Generated asset ID associated with the licensed image. Returned only for generated image license history when available.
     * @type {string}
     * @memberof DownloadHistoryAudio
     */
    generation_asset_id?: string;
    /**
     * Generation request UUID associated with the licensed image. Returned only for generated image license history when available.
     * @type {string}
     * @memberof DownloadHistoryAudio
     */
    generation_id?: string;
    /**
     * ID of the download history media details
     * @type {string}
     * @memberof DownloadHistoryAudio
     */
    id: string;
    /**
     * Whether the licensed image is AI generated. Returned for image license history.
     * @type {boolean}
     * @memberof DownloadHistoryAudio
     */
    is_ai_generated?: boolean;
}
/**
 * AI IP review information for a generated image. Returned only when available for the downloaded generated image.
 * @export
 * @interface DownloadHistoryAudioAiIpReview
 */
export interface DownloadHistoryAudioAiIpReview {
    /**
     * Reasons the AI-generated image was rejected during IP review
     * @type {Array<string>}
     * @memberof DownloadHistoryAudioAiIpReview
     */
    rejection_reasons?: Array<string>;
    /**
     * Current status of the AI-generated image IP review process
     * @type {string}
     * @memberof DownloadHistoryAudioAiIpReview
     */
    status?: string;
}
/**
 * Information about the format of a download
 * @export
 * @interface DownloadHistoryAudioFormat
 */
export interface DownloadHistoryAudioFormat {
    /**
     * The format of the downloaded media
     * @type {string}
     * @memberof DownloadHistoryAudioFormat
     */
    format?: string;
    /**
     * The size of the downloaded media
     * @type {string}
     * @memberof DownloadHistoryAudioFormat
     */
    size?: string;
}
/**
 * List of download events
 * @export
 * @interface DownloadHistoryDataList
 */
export interface DownloadHistoryDataList {
    /**
     * Download events
     * @type {Array<DownloadHistoryDataListData>}
     * @memberof DownloadHistoryDataList
     */
    data?: Array<DownloadHistoryDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof DownloadHistoryDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof DownloadHistoryDataList
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof DownloadHistoryDataList
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof DownloadHistoryDataList
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof DownloadHistoryDataList
     */
    total_count?: number;
}
/**
 * Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object
 * @export
 * @interface DownloadHistoryDataListData
 */
export interface DownloadHistoryDataListData {
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistoryDataListData
     */
    audio?: DownloadHistoryAudio;
    /**
     * Date the media was downloaded the first time
     * @type {Date}
     * @memberof DownloadHistoryDataListData
     */
    download_time: Date;
    /**
     * ID of the download
     * @type {string}
     * @memberof DownloadHistoryDataListData
     */
    id: string;
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistoryDataListData
     */
    image?: DownloadHistoryAudio;
    /**
     * Specifies if the media is downloadable via its respective downloads endpoint
     * @type {boolean}
     * @memberof DownloadHistoryDataListData
     */
    is_downloadable?: boolean;
    /**
     * The name of the license of this download
     * @type {string}
     * @memberof DownloadHistoryDataListData
     */
    license: string;
    /**
     * The metadata that was passed in the original licensing request
     * @type {any}
     * @memberof DownloadHistoryDataListData
     */
    metadata?: any;
    /**
     * ID of the subscription used to perform this download
     * @type {string}
     * @memberof DownloadHistoryDataListData
     */
    subscription_id?: string;
    /**
     *
     * @type {DownloadHistoryUser}
     * @memberof DownloadHistoryDataListData
     */
    user?: DownloadHistoryUser;
    /**
     *
     * @type {DownloadHistoryAudio}
     * @memberof DownloadHistoryDataListData
     */
    video?: DownloadHistoryAudio;
    /**
     *
     * @type {DownloadHistoryRevshare}
     * @memberof DownloadHistoryDataListData
     */
    revshare?: DownloadHistoryRevshare;
}
/**
 * Information about the format of a download
 * @export
 * @interface DownloadHistoryFormatDetails
 */
export interface DownloadHistoryFormatDetails {
    /**
     * The format of the downloaded media
     * @type {string}
     * @memberof DownloadHistoryFormatDetails
     */
    format?: string;
    /**
     * The size of the downloaded media
     * @type {string}
     * @memberof DownloadHistoryFormatDetails
     */
    size?: string;
}
/**
 * Information about the downloaded media
 * @export
 * @interface DownloadHistoryMediaDetails
 */
export interface DownloadHistoryMediaDetails {
    /**
     *
     * @type {DownloadHistoryAudioAiIpReview}
     * @memberof DownloadHistoryMediaDetails
     */
    ai_ip_review?: DownloadHistoryAudioAiIpReview;
    /**
     *
     * @type {DownloadHistoryAudioFormat}
     * @memberof DownloadHistoryMediaDetails
     */
    format?: DownloadHistoryAudioFormat;
    /**
     * ID of the user who generated the AI image. Returned only for generated image license history when available.
     * @type {number}
     * @memberof DownloadHistoryMediaDetails
     */
    generated_by_user?: number;
    /**
     * Generated asset ID associated with the licensed image. Returned only for generated image license history when available.
     * @type {string}
     * @memberof DownloadHistoryMediaDetails
     */
    generation_asset_id?: string;
    /**
     * Generation request UUID associated with the licensed image. Returned only for generated image license history when available.
     * @type {string}
     * @memberof DownloadHistoryMediaDetails
     */
    generation_id?: string;
    /**
     * ID of the download history media details
     * @type {string}
     * @memberof DownloadHistoryMediaDetails
     */
    id: string;
    /**
     * Whether the licensed image is AI generated. Returned for image license history.
     * @type {boolean}
     * @memberof DownloadHistoryMediaDetails
     */
    is_ai_generated?: boolean;
}
/**
 * Pricing information for revenue-sharing transactions
 * @export
 * @interface DownloadHistoryRevshare
 */
export interface DownloadHistoryRevshare {
    /**
     * The amount charged for the license
     * @type {string}
     * @memberof DownloadHistoryRevshare
     */
    purchase_amount: string;
    /**
     * The currency the amount was charged in
     * @type {string}
     * @memberof DownloadHistoryRevshare
     */
    purchase_currency: string;
}
/**
 * Pricing information for revenue-sharing transactions
 * @export
 * @interface DownloadHistoryRevshareDetails
 */
export interface DownloadHistoryRevshareDetails {
    /**
     * The amount charged for the license
     * @type {string}
     * @memberof DownloadHistoryRevshareDetails
     */
    purchase_amount: string;
    /**
     * The currency the amount was charged in
     * @type {string}
     * @memberof DownloadHistoryRevshareDetails
     */
    purchase_currency: string;
}
/**
 * Information about a user
 * @export
 * @interface DownloadHistoryUser
 */
export interface DownloadHistoryUser {
    /**
     * The name of the user who downloaded the item
     * @type {string}
     * @memberof DownloadHistoryUser
     */
    username: string;
}
/**
 * Information about a user
 * @export
 * @interface DownloadHistoryUserDetails
 */
export interface DownloadHistoryUserDetails {
    /**
     * The name of the user who downloaded the item
     * @type {string}
     * @memberof DownloadHistoryUserDetails
     */
    username: string;
}
/**
 * Asset information, including size and thumbnail URLs
 * @export
 * @interface EditorialAssets
 */
export interface EditorialAssets {
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialAssets
     */
    original?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialAssets
     */
    thumb_170?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialAssets
     */
    thumb_220?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialAssets
     */
    watermark_450?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialAssets
     */
    watermark_1500?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialAssets
     */
    small_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialAssets
     */
    medium_jpg?: EditorialAssetsOriginal;
}
/**
 * Image size information
 * @export
 * @interface EditorialAssetsOriginal
 */
export interface EditorialAssetsOriginal {
    /**
     * Display name of this image size
     * @type {string}
     * @memberof EditorialAssetsOriginal
     */
    display_name?: string;
    /**
     *
     * @type {number}
     * @memberof EditorialAssetsOriginal
     */
    dpi?: number;
    /**
     * File size (in bytes) of this image size
     * @type {number}
     * @memberof EditorialAssetsOriginal
     */
    file_size?: number;
    /**
     * Format of this image size
     * @type {string}
     * @memberof EditorialAssetsOriginal
     */
    format?: string;
    /**
     * Height of this image size
     * @type {number}
     * @memberof EditorialAssetsOriginal
     */
    height?: number;
    /**
     * Whether or not this image can be licensed in this image size
     * @type {boolean}
     * @memberof EditorialAssetsOriginal
     */
    is_licensable?: boolean;
    /**
     * Width of this image size
     * @type {number}
     * @memberof EditorialAssetsOriginal
     */
    width?: number;
}
/**
 * Image thumbnail information
 * @export
 * @interface EditorialAssetsThumb170
 */
export interface EditorialAssetsThumb170 {
    /**
     * Height in pixels of the image thumbnail
     * @type {number}
     * @memberof EditorialAssetsThumb170
     */
    height: number;
    /**
     * Direct URL to the image
     * @type {string}
     * @memberof EditorialAssetsThumb170
     */
    url: string;
    /**
     * Width in pixels of the image thumbnail
     * @type {number}
     * @memberof EditorialAssetsThumb170
     */
    width: number;
}
/**
 * Name of an editorial category
 * @export
 * @interface EditorialCategory
 */
export interface EditorialCategory {
    /**
     *
     * @type {string}
     * @memberof EditorialCategory
     */
    name?: string;
}
/**
 * List of editorial categories
 * @export
 * @interface EditorialCategoryResults
 */
export interface EditorialCategoryResults {
    /**
     * List of editorial categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialCategoryResults
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * Name of an editorial category
 * @export
 * @interface EditorialCategoryResultsData
 */
export interface EditorialCategoryResultsData {
    /**
     *
     * @type {string}
     * @memberof EditorialCategoryResultsData
     */
    name?: string;
}
/**
 * Metadata about editorial content
 * @export
 * @interface EditorialContent
 */
export interface EditorialContent {
    /**
     *
     * @type {number}
     * @memberof EditorialContent
     */
    aspect?: number;
    /**
     *
     * @type {EditorialContentAssets}
     * @memberof EditorialContent
     */
    assets?: EditorialContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialContent
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialContent
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    special_instructions?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContent
     */
    title?: string;
}
/**
 * Asset information, including size and thumbnail URLs
 * @export
 * @interface EditorialContentAssets
 */
export interface EditorialContentAssets {
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialContentAssets
     */
    original?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialContentAssets
     */
    thumb_170?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialContentAssets
     */
    thumb_220?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialContentAssets
     */
    watermark_450?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof EditorialContentAssets
     */
    watermark_1500?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialContentAssets
     */
    small_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof EditorialContentAssets
     */
    medium_jpg?: EditorialAssetsOriginal;
}
/**
 * List of editorial items
 * @export
 * @interface EditorialContentDataList
 */
export interface EditorialContentDataList {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof EditorialContentDataList
     */
    data?: Array<EditorialContentDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof EditorialContentDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialContentDataList
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialContentDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialContentDataList
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialContentDataList
     */
    total_count?: number;
}
/**
 * Metadata about editorial content
 * @export
 * @interface EditorialContentDataListData
 */
export interface EditorialContentDataListData {
    /**
     *
     * @type {number}
     * @memberof EditorialContentDataListData
     */
    aspect?: number;
    /**
     *
     * @type {EditorialContentAssets}
     * @memberof EditorialContentDataListData
     */
    assets?: EditorialContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialContentDataListData
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialContentDataListData
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    special_instructions?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialContentDataListData
     */
    title?: string;
}
/**
 * Cover image for editorial livefeed
 * @export
 * @interface EditorialCoverItem
 */
export interface EditorialCoverItem {
    /**
     *
     * @type {number}
     * @memberof EditorialCoverItem
     */
    height?: number;
    /**
     *
     * @type {string}
     * @memberof EditorialCoverItem
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof EditorialCoverItem
     */
    url: string;
    /**
     *
     * @type {number}
     * @memberof EditorialCoverItem
     */
    width?: number;
}
/**
 * List of editorial categories
 * @export
 * @interface EditorialImageCategoryResults
 */
export interface EditorialImageCategoryResults {
    /**
     *
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialImageCategoryResults
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * List of editorial items
 * @export
 * @interface EditorialImageContentDataList
 */
export interface EditorialImageContentDataList {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof EditorialImageContentDataList
     */
    data?: Array<EditorialContentDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof EditorialImageContentDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialImageContentDataList
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialImageContentDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialImageContentDataList
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialImageContentDataList
     */
    total_count?: number;
}
/**
 * Metadata about editorial livefeed
 * @export
 * @interface EditorialImageLivefeed
 */
export interface EditorialImageLivefeed {
    /**
     *
     * @type {EditorialImageLivefeedCoverItem}
     * @memberof EditorialImageLivefeed
     */
    cover_item?: EditorialImageLivefeedCoverItem;
    /**
     * When the livefeed was initially created
     * @type {Date}
     * @memberof EditorialImageLivefeed
     */
    created_time?: Date;
    /**
     * Livefeed ID
     * @type {string}
     * @memberof EditorialImageLivefeed
     */
    id: string;
    /**
     * Name of the livefeed
     * @type {string}
     * @memberof EditorialImageLivefeed
     */
    name: string;
    /**
     * Total count of items in the livefeed
     * @type {number}
     * @memberof EditorialImageLivefeed
     */
    total_item_count: number;
}
/**
 * Cover image for editorial livefeed
 * @export
 * @interface EditorialImageLivefeedCoverItem
 */
export interface EditorialImageLivefeedCoverItem {
    /**
     *
     * @type {number}
     * @memberof EditorialImageLivefeedCoverItem
     */
    height?: number;
    /**
     *
     * @type {string}
     * @memberof EditorialImageLivefeedCoverItem
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof EditorialImageLivefeedCoverItem
     */
    url: string;
    /**
     *
     * @type {number}
     * @memberof EditorialImageLivefeedCoverItem
     */
    width?: number;
}
/**
 * List of editorial livefeeds
 * @export
 * @interface EditorialImageLivefeedList
 */
export interface EditorialImageLivefeedList {
    /**
     * Editorial livefeeds
     * @type {Array<EditorialImageLivefeedListData>}
     * @memberof EditorialImageLivefeedList
     */
    data: Array<EditorialImageLivefeedListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialImageLivefeedList
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    total_count: number;
}
/**
 * Metadata about editorial livefeed
 * @export
 * @interface EditorialImageLivefeedListData
 */
export interface EditorialImageLivefeedListData {
    /**
     *
     * @type {EditorialImageLivefeedCoverItem}
     * @memberof EditorialImageLivefeedListData
     */
    cover_item?: EditorialImageLivefeedCoverItem;
    /**
     * When the livefeed was initially created
     * @type {Date}
     * @memberof EditorialImageLivefeedListData
     */
    created_time?: Date;
    /**
     * Livefeed ID
     * @type {string}
     * @memberof EditorialImageLivefeedListData
     */
    id: string;
    /**
     * Name of the livefeed
     * @type {string}
     * @memberof EditorialImageLivefeedListData
     */
    name: string;
    /**
     * Total count of items in the livefeed
     * @type {number}
     * @memberof EditorialImageLivefeedListData
     */
    total_item_count: number;
}
/**
 * List of editorial images
 * @export
 * @interface EditorialImageResults
 */
export interface EditorialImageResults {
    /**
     *
     * @type {Array<EditorialContentDataListData>}
     * @memberof EditorialImageResults
     */
    data?: Array<EditorialContentDataListData>;
    /**
     *
     * @type {string}
     * @memberof EditorialImageResults
     */
    search_id?: string;
    /**
     *
     * @type {number}
     * @memberof EditorialImageResults
     */
    total_count?: number;
}
/**
 * License editorial content request
 * @export
 * @interface EditorialLicensesBody
 */
export interface EditorialLicensesBody {
    /**
     * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
     * @type {string}
     * @memberof EditorialLicensesBody
     */
    country: string;
    /**
     * Editorial content to license
     * @type {Array<V2editorialimageslicensesEditorial>}
     * @memberof EditorialLicensesBody
     */
    editorial: Array<V2editorialimageslicensesEditorial>;
}
/**
 * Metadata about editorial livefeed
 * @export
 * @interface EditorialLivefeed
 */
export interface EditorialLivefeed {
    /**
     *
     * @type {EditorialImageLivefeedCoverItem}
     * @memberof EditorialLivefeed
     */
    cover_item?: EditorialImageLivefeedCoverItem;
    /**
     * When the livefeed was initially created
     * @type {Date}
     * @memberof EditorialLivefeed
     */
    created_time?: Date;
    /**
     * Livefeed ID
     * @type {string}
     * @memberof EditorialLivefeed
     */
    id: string;
    /**
     * Name of the livefeed
     * @type {string}
     * @memberof EditorialLivefeed
     */
    name: string;
    /**
     * Total count of items in the livefeed
     * @type {number}
     * @memberof EditorialLivefeed
     */
    total_item_count: number;
}
/**
 * List of editorial livefeeds
 * @export
 * @interface EditorialLivefeedList
 */
export interface EditorialLivefeedList {
    /**
     * Editorial livefeeds
     * @type {Array<EditorialImageLivefeedListData>}
     * @memberof EditorialLivefeedList
     */
    data: Array<EditorialImageLivefeedListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialLivefeedList
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialLivefeedList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialLivefeedList
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialLivefeedList
     */
    total_count: number;
}
/**
 * Editorial search results
 * @export
 * @interface EditorialSearchResults
 */
export interface EditorialSearchResults {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof EditorialSearchResults
     */
    data: Array<EditorialContentDataListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialSearchResults
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof EditorialSearchResults
     */
    next?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialSearchResults
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof EditorialSearchResults
     */
    prev?: string;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof EditorialSearchResults
     */
    search_id?: string;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialSearchResults
     */
    total_count: number;
}
/**
 * Metadata about updated editorial content
 * @export
 * @interface EditorialUpdatedContent
 */
export interface EditorialUpdatedContent {
    /**
     *
     * @type {EditorialUpdatedContentCommercialStatus}
     * @memberof EditorialUpdatedContent
     */
    commercial_status?: EditorialUpdatedContentCommercialStatus;
    /**
     *
     * @type {number}
     * @memberof EditorialUpdatedContent
     */
    aspect?: number;
    /**
     *
     * @type {EditorialContentAssets}
     * @memberof EditorialUpdatedContent
     */
    assets?: EditorialContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialUpdatedContent
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialUpdatedContent
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    title?: string;
    /**
     *
     * @type {Date}
     * @memberof EditorialUpdatedContent
     */
    updated_time?: Date;
    /**
     *
     * @type {Date}
     * @memberof EditorialUpdatedContent
     */
    created_time?: Date;
    /**
     *
     * @type {EditorialUpdatedContentRights}
     * @memberof EditorialUpdatedContent
     */
    rights?: EditorialUpdatedContentRights;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialUpdatedContent
     */
    updates?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    supplier_code?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContent
     */
    special_instructions?: string;
}
/**
 *
 * @export
 * @interface EditorialUpdatedContentCommercialStatus
 */
export interface EditorialUpdatedContentCommercialStatus {
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContentCommercialStatus
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContentCommercialStatus
     */
    reason?: string;
}
/**
 *
 * @export
 * @interface EditorialUpdatedContentRights
 */
export interface EditorialUpdatedContentRights {
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedContentRights
     */
    countries?: string;
}
/**
 * Editorial updated results
 * @export
 * @interface EditorialUpdatedResults
 */
export interface EditorialUpdatedResults {
    /**
     * Editorial updated items
     * @type {Array<EditorialUpdatedResultsData>}
     * @memberof EditorialUpdatedResults
     */
    data: Array<EditorialUpdatedResultsData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    next?: string;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialUpdatedResults
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    prev?: string;
}
/**
 * Metadata about updated editorial content
 * @export
 * @interface EditorialUpdatedResultsData
 */
export interface EditorialUpdatedResultsData {
    /**
     *
     * @type {EditorialUpdatedContentCommercialStatus}
     * @memberof EditorialUpdatedResultsData
     */
    commercial_status?: EditorialUpdatedContentCommercialStatus;
    /**
     *
     * @type {number}
     * @memberof EditorialUpdatedResultsData
     */
    aspect?: number;
    /**
     *
     * @type {EditorialContentAssets}
     * @memberof EditorialUpdatedResultsData
     */
    assets?: EditorialContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialUpdatedResultsData
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialUpdatedResultsData
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    title?: string;
    /**
     *
     * @type {Date}
     * @memberof EditorialUpdatedResultsData
     */
    updated_time?: Date;
    /**
     *
     * @type {Date}
     * @memberof EditorialUpdatedResultsData
     */
    created_time?: Date;
    /**
     *
     * @type {EditorialUpdatedContentRights}
     * @memberof EditorialUpdatedResultsData
     */
    rights?: EditorialUpdatedContentRights;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialUpdatedResultsData
     */
    updates?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    supplier_code?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialUpdatedResultsData
     */
    special_instructions?: string;
}
/**
 * Asset information, including size and thumbnail URLs
 * @export
 * @interface EditorialVideoAssets
 */
export interface EditorialVideoAssets {
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof EditorialVideoAssets
     */
    original?: EditorialVideoAssetsOriginal;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoAssets
     */
    preview_mp4?: EditorialVideoAssetsPreviewMp4;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoAssets
     */
    preview_webm?: EditorialVideoAssetsPreviewMp4;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoAssets
     */
    thumb_jpg?: EditorialVideoAssetsPreviewMp4;
}
/**
 * Video asset information
 * @export
 * @interface EditorialVideoAssetsOriginal
 */
export interface EditorialVideoAssetsOriginal {
    /**
     * Display name of this video size
     * @type {string}
     * @memberof EditorialVideoAssetsOriginal
     */
    display_name?: string;
    /**
     * File size (in bytes) of this video size
     * @type {number}
     * @memberof EditorialVideoAssetsOriginal
     */
    file_size?: number;
    /**
     * Format of this video size
     * @type {string}
     * @memberof EditorialVideoAssetsOriginal
     */
    format?: string;
    /**
     * Frames per second of this video size
     * @type {number}
     * @memberof EditorialVideoAssetsOriginal
     */
    fps?: number;
    /**
     * Height of this video size
     * @type {number}
     * @memberof EditorialVideoAssetsOriginal
     */
    height?: number;
    /**
     * Whether or not videos can be licensed in this video size
     * @type {boolean}
     * @memberof EditorialVideoAssetsOriginal
     */
    is_licensable?: boolean;
    /**
     * Width of this video size
     * @type {number}
     * @memberof EditorialVideoAssetsOriginal
     */
    width?: number;
}
/**
 * Video preview information
 * @export
 * @interface EditorialVideoAssetsPreviewMp4
 */
export interface EditorialVideoAssetsPreviewMp4 {
    /**
     * Direct URL to the image
     * @type {string}
     * @memberof EditorialVideoAssetsPreviewMp4
     */
    url: string;
}
/**
 * List of editorial video categories
 * @export
 * @interface EditorialVideoCategoryResults
 */
export interface EditorialVideoCategoryResults {
    /**
     *
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialVideoCategoryResults
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * Metadata about editorial content
 * @export
 * @interface EditorialVideoContent
 */
export interface EditorialVideoContent {
    /**
     *
     * @type {number}
     * @memberof EditorialVideoContent
     */
    aspect?: number;
    /**
     *
     * @type {EditorialVideoContentAssets}
     * @memberof EditorialVideoContent
     */
    assets?: EditorialVideoContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialVideoContent
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialVideoContent
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoContent
     */
    title?: string;
}
/**
 * Asset information, including size and thumbnail URLs
 * @export
 * @interface EditorialVideoContentAssets
 */
export interface EditorialVideoContentAssets {
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof EditorialVideoContentAssets
     */
    original?: EditorialVideoAssetsOriginal;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoContentAssets
     */
    preview_mp4?: EditorialVideoAssetsPreviewMp4;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoContentAssets
     */
    preview_webm?: EditorialVideoAssetsPreviewMp4;
    /**
     *
     * @type {EditorialVideoAssetsPreviewMp4}
     * @memberof EditorialVideoContentAssets
     */
    thumb_jpg?: EditorialVideoAssetsPreviewMp4;
}
/**
 * List of editorial videos
 * @export
 * @interface EditorialVideoResults
 */
export interface EditorialVideoResults {
    /**
     *
     * @type {Array<EditorialVideoResultsData>}
     * @memberof EditorialVideoResults
     */
    data?: Array<EditorialVideoResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResults
     */
    search_id?: string;
    /**
     *
     * @type {number}
     * @memberof EditorialVideoResults
     */
    total_count?: number;
}
/**
 * Metadata about editorial content
 * @export
 * @interface EditorialVideoResultsData
 */
export interface EditorialVideoResultsData {
    /**
     *
     * @type {number}
     * @memberof EditorialVideoResultsData
     */
    aspect?: number;
    /**
     *
     * @type {EditorialVideoContentAssets}
     * @memberof EditorialVideoResultsData
     */
    assets?: EditorialVideoContentAssets;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof EditorialVideoResultsData
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EditorialVideoResultsData
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EditorialVideoResultsData
     */
    title?: string;
}
/**
 * Editorial search results
 * @export
 * @interface EditorialVideoSearchResults
 */
export interface EditorialVideoSearchResults {
    /**
     * Editorial items
     * @type {Array<EditorialVideoResultsData>}
     * @memberof EditorialVideoSearchResults
     */
    data: Array<EditorialVideoResultsData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialVideoSearchResults
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof EditorialVideoSearchResults
     */
    next?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialVideoSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialVideoSearchResults
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof EditorialVideoSearchResults
     */
    prev?: string;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof EditorialVideoSearchResults
     */
    search_id?: string;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialVideoSearchResults
     */
    total_count: number;
}
/**
 *
 * @export
 * @interface GenerativeImageAsset
 */
export interface GenerativeImageAsset {
    /**
     *
     * @type {string}
     * @memberof GenerativeImageAsset
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GenerativeImageAsset
     */
    description?: string;
    /**
     * Registered Shutterstock image ID for this generated asset, if registered.
     * @type {string}
     * @memberof GenerativeImageAsset
     */
    image_id?: string;
    /**
     *
     * @type {GenerativeImageAssetAiIpReview}
     * @memberof GenerativeImageAsset
     */
    ai_ip_review?: GenerativeImageAssetAiIpReview;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImageAsset
     */
    small: GenerativeImageAssetSmall;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImageAsset
     */
    watermarked: GenerativeImageAssetSmall;
    /**
     *
     * @type {Array<GenerativeImageAssetStyles>}
     * @memberof GenerativeImageAsset
     */
    styles?: Array<GenerativeImageAssetStyles>;
}
/**
 * Current AI IP review information for the registered generated image, if available.
 * @export
 * @interface GenerativeImageAssetAiIpReview
 */
export interface GenerativeImageAssetAiIpReview {
    /**
     * Current status of the AI IP review process
     * @type {string}
     * @memberof GenerativeImageAssetAiIpReview
     */
    status?: string;
    /**
     * Reasons the AI IP review was rejected, if any
     * @type {Array<string>}
     * @memberof GenerativeImageAssetAiIpReview
     */
    rejection_reasons?: Array<string>;
}
/**
 *
 * @export
 * @interface GenerativeImageAssetSmall
 */
export interface GenerativeImageAssetSmall {
    /**
     * Preview URL.
     * @type {string}
     * @memberof GenerativeImageAssetSmall
     */
    url: string;
    /**
     * Preview height in pixels.
     * @type {number}
     * @memberof GenerativeImageAssetSmall
     */
    height: number;
    /**
     * Preview width in pixels.
     * @type {number}
     * @memberof GenerativeImageAssetSmall
     */
    width: number;
}
/**
 *
 * @export
 * @interface GenerativeImageAssetStyles
 */
export interface GenerativeImageAssetStyles {
    /**
     *
     * @type {string}
     * @memberof GenerativeImageAssetStyles
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof GenerativeImageAssetStyles
     */
    name?: string;
}
/**
 * The response to a generated image IP review submission.
 * @export
 * @interface GenerativeImageIpReviewSubmitResponse
 */
export interface GenerativeImageIpReviewSubmitResponse {
    /**
     * Generated image asset ID submitted for IP review.
     * @type {string}
     * @memberof GenerativeImageIpReviewSubmitResponse
     */
    asset_id: string;
    /**
     * Registered Shutterstock image ID submitted for IP review.
     * @type {string}
     * @memberof GenerativeImageIpReviewSubmitResponse
     */
    image_id: string;
    /**
     * Whether the image was submitted for IP review.
     * @type {boolean}
     * @memberof GenerativeImageIpReviewSubmitResponse
     */
    ip_review_submitted: boolean;
    /**
     * Server-generated message about IP review submission.
     * @type {string}
     * @memberof GenerativeImageIpReviewSubmitResponse
     */
    message: string;
}
/**
 * Data required to license a generated image asset.
 * @export
 * @interface GenerativeImageLicense
 */
export interface GenerativeImageLicense {
    /**
     * Generated image asset ID returned in the generative image result asset list.
     * @type {string}
     * @memberof GenerativeImageLicense
     */
    asset_id: string;
    /**
     * This must be set to true to license this asset. It confirms: I acknowledge that AI-generated content is not reviewed by Shutterstock's content compliance team for intellectual property compliance unless otherwise stated, and should not be used publicly if it contains the likeness of a brand, public personality, or other protected content.
     * @type {boolean}
     * @memberof GenerativeImageLicense
     */
    ai_use_acknowledgement: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof GenerativeImageLicense
     */
    metadata?: any;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     * @type {number}
     * @memberof GenerativeImageLicense
     */
    price?: number;
    /**
     * Image size to download
     * @type {string}
     * @memberof GenerativeImageLicense
     */
    size?: GenerativeImageLicense.SizeEnum;
    /**
     *
     * @type {V2generativeimageslicensesCustomDimensions}
     * @memberof GenerativeImageLicense
     */
    custom_dimensions?: V2generativeimageslicensesCustomDimensions;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof GenerativeImageLicense
     */
    subscription_id?: string;
}
/**
 * @export
 * @namespace GenerativeImageLicense
 */
export declare namespace GenerativeImageLicense {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Huge,
        Custom
    }
}
/**
 * Generated image license request data.
 * @export
 * @interface GenerativeImageLicenseRequest
 */
export interface GenerativeImageLicenseRequest {
    /**
     * Generated image assets to register and license.
     * @type {Array<V2generativeimageslicensesImages>}
     * @memberof GenerativeImageLicenseRequest
     */
    images: Array<V2generativeimageslicensesImages>;
}
/**
 * The response to a licensing request for a generated image.
 * @export
 * @interface GenerativeImageLicenseResult
 */
export interface GenerativeImageLicenseResult {
    /**
     * Generated image asset ID requested for licensing.
     * @type {string}
     * @memberof GenerativeImageLicenseResult
     */
    asset_id: string;
    /**
     * Registered Shutterstock image ID that was licensed, or that failed to license if registration succeeded before licensing failed.
     * @type {string}
     * @memberof GenerativeImageLicenseResult
     */
    image_id?: string;
    /**
     * Number of credits that this licensing event used.
     * @type {number}
     * @memberof GenerativeImageLicenseResult
     */
    allotment_charge?: number;
    /**
     *
     * @type {GenerativeImageLicenseResultDownload}
     * @memberof GenerativeImageLicenseResult
     */
    download?: GenerativeImageLicenseResultDownload;
    /**
     * Error message, appears only if there was an error.
     * @type {string}
     * @memberof GenerativeImageLicenseResult
     */
    error?: string;
    /**
     * ID of the license event.
     * @type {string}
     * @memberof GenerativeImageLicenseResult
     */
    license_id?: string;
    /**
     *
     * @type {GenerativeImageLicenseResultPrice}
     * @memberof GenerativeImageLicenseResult
     */
    price?: GenerativeImageLicenseResultPrice;
}
/**
 * List of generated image licensing results.
 * @export
 * @interface GenerativeImageLicenseResultDataList
 */
export interface GenerativeImageLicenseResultDataList {
    /**
     * License results.
     * @type {Array<GenerativeImageLicenseResultDataListData>}
     * @memberof GenerativeImageLicenseResultDataList
     */
    data: Array<GenerativeImageLicenseResultDataListData>;
    /**
     * Error list; appears only if there was an error.
     * @type {Array<AudioDataListErrors>}
     * @memberof GenerativeImageLicenseResultDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message about the licensing request.
     * @type {string}
     * @memberof GenerativeImageLicenseResultDataList
     */
    message: string;
}
/**
 * The response to a licensing request for a generated image.
 * @export
 * @interface GenerativeImageLicenseResultDataListData
 */
export interface GenerativeImageLicenseResultDataListData {
    /**
     * Generated image asset ID requested for licensing.
     * @type {string}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    asset_id: string;
    /**
     * Registered Shutterstock image ID that was licensed, or that failed to license if registration succeeded before licensing failed.
     * @type {string}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    image_id?: string;
    /**
     * Number of credits that this licensing event used.
     * @type {number}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    allotment_charge?: number;
    /**
     *
     * @type {GenerativeImageLicenseResultDownload}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    download?: GenerativeImageLicenseResultDownload;
    /**
     * Error message, appears only if there was an error.
     * @type {string}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    error?: string;
    /**
     * ID of the license event.
     * @type {string}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    license_id?: string;
    /**
     *
     * @type {GenerativeImageLicenseResultPrice}
     * @memberof GenerativeImageLicenseResultDataListData
     */
    price?: GenerativeImageLicenseResultPrice;
}
/**
 * Information that is needed to download the image.
 * @export
 * @interface GenerativeImageLicenseResultDownload
 */
export interface GenerativeImageLicenseResultDownload {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof GenerativeImageLicenseResultDownload
     */
    url: string;
}
/**
 * Wholesale price information; only for rev-share partners.
 * @export
 * @interface GenerativeImageLicenseResultPrice
 */
export interface GenerativeImageLicenseResultPrice {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof GenerativeImageLicenseResultPrice
     */
    local_amount?: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof GenerativeImageLicenseResultPrice
     */
    local_currency?: string;
    /**
     * Prices by content tier
     * @type {{ [key: string]: GenerativeImageLicenseResultPriceContentTiers; }}
     * @memberof GenerativeImageLicenseResultPrice
     */
    content_tiers?: {
        [key: string]: GenerativeImageLicenseResultPriceContentTiers;
    };
}
/**
 *
 * @export
 * @interface GenerativeImageLicenseResultPriceContentTiers
 */
export interface GenerativeImageLicenseResultPriceContentTiers {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof GenerativeImageLicenseResultPriceContentTiers
     */
    local_amount: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof GenerativeImageLicenseResultPriceContentTiers
     */
    local_currency: string;
}
/**
 *
 * @export
 * @interface GenerativeImagePreview
 */
export interface GenerativeImagePreview {
    /**
     * Preview URL.
     * @type {string}
     * @memberof GenerativeImagePreview
     */
    url: string;
    /**
     * Preview height in pixels.
     * @type {number}
     * @memberof GenerativeImagePreview
     */
    height: number;
    /**
     * Preview width in pixels.
     * @type {number}
     * @memberof GenerativeImagePreview
     */
    width: number;
}
/**
 *
 * @export
 * @interface GenerativeImageResultsResponse
 */
export interface GenerativeImageResultsResponse {
    /**
     * The UUID of the generation request.
     * @type {string}
     * @memberof GenerativeImageResultsResponse
     */
    id: string;
    /**
     * Current generation status.
     * @type {string}
     * @memberof GenerativeImageResultsResponse
     */
    status: GenerativeImageResultsResponse.StatusEnum;
    /**
     * Prompt entered by the user.
     * @type {string}
     * @memberof GenerativeImageResultsResponse
     */
    prompt?: string;
    /**
     * The image generation model identifier.
     * @type {string}
     * @memberof GenerativeImageResultsResponse
     */
    model?: string;
    /**
     * The generated image aspect ratio.
     * @type {string}
     * @memberof GenerativeImageResultsResponse
     */
    aspect_ratio?: string;
    /**
     *
     * @type {GenerativeImageAssetStyles}
     * @memberof GenerativeImageResultsResponse
     */
    style?: GenerativeImageAssetStyles;
    /**
     *
     * @type {boolean}
     * @memberof GenerativeImageResultsResponse
     */
    is_private?: boolean;
    /**
     * Whether generated assets are eligible for registration.
     * @type {boolean}
     * @memberof GenerativeImageResultsResponse
     */
    can_register_assets?: boolean;
    /**
     *
     * @type {Array<GenerativeImageResultsResponseAssets>}
     * @memberof GenerativeImageResultsResponse
     */
    assets: Array<GenerativeImageResultsResponseAssets>;
}
/**
 * @export
 * @namespace GenerativeImageResultsResponse
 */
export declare namespace GenerativeImageResultsResponse {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        PENDING,
        GENERATING,
        COMPLETED
    }
}
/**
 *
 * @export
 * @interface GenerativeImageResultsResponseAssets
 */
export interface GenerativeImageResultsResponseAssets {
    /**
     *
     * @type {string}
     * @memberof GenerativeImageResultsResponseAssets
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GenerativeImageResultsResponseAssets
     */
    description?: string;
    /**
     * Registered Shutterstock image ID for this generated asset, if registered.
     * @type {string}
     * @memberof GenerativeImageResultsResponseAssets
     */
    image_id?: string;
    /**
     *
     * @type {GenerativeImageAssetAiIpReview}
     * @memberof GenerativeImageResultsResponseAssets
     */
    ai_ip_review?: GenerativeImageAssetAiIpReview;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImageResultsResponseAssets
     */
    small: GenerativeImageAssetSmall;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImageResultsResponseAssets
     */
    watermarked: GenerativeImageAssetSmall;
    /**
     *
     * @type {Array<GenerativeImageAssetStyles>}
     * @memberof GenerativeImageResultsResponseAssets
     */
    styles?: Array<GenerativeImageAssetStyles>;
}
/**
 *
 * @export
 * @interface GenerativeImageStyle
 */
export interface GenerativeImageStyle {
    /**
     *
     * @type {string}
     * @memberof GenerativeImageStyle
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof GenerativeImageStyle
     */
    name?: string;
}
/**
 *
 * @export
 * @interface GenerativeImagesBody
 */
export interface GenerativeImagesBody {
    /**
     * The text prompt to generate images from. Must contain at least one non-whitespace character and be at most 1800 characters.
     * @type {string}
     * @memberof GenerativeImagesBody
     */
    prompt: string;
    /**
     * The aspect ratio of the generated images.
     * @type {string}
     * @memberof GenerativeImagesBody
     */
    aspect_ratio?: GenerativeImagesBody.AspectRatioEnum;
    /**
     * The style identifier to apply to the generated images. Use an id from text_to_image.styles returned by GET /v2/generative/inputs.
     * @type {string}
     * @memberof GenerativeImagesBody
     */
    style_id?: string;
    /**
     * The image generation model identifier. Use an id from text_to_image.models returned by GET /v2/generative/inputs. If omitted, the backend selects the default model.
     * @type {string}
     * @memberof GenerativeImagesBody
     */
    model?: string;
}
/**
 * @export
 * @namespace GenerativeImagesBody
 */
export declare namespace GenerativeImagesBody {
    /**
     * @export
     * @enum {string}
     */
    enum AspectRatioEnum {
        _11,
        _916,
        _169,
        _43,
        _34
    }
}
/**
 *
 * @export
 * @interface GenerativeImagesHistoryAsset
 */
export interface GenerativeImagesHistoryAsset {
    /**
     * The generated image asset ID.
     * @type {string}
     * @memberof GenerativeImagesHistoryAsset
     */
    id: string;
    /**
     * The generated image description.
     * @type {string}
     * @memberof GenerativeImagesHistoryAsset
     */
    description: string;
    /**
     * Registered Shutterstock image ID for this generated asset, if registered.
     * @type {string}
     * @memberof GenerativeImagesHistoryAsset
     */
    image_id?: string;
    /**
     *
     * @type {GenerativeImageAssetAiIpReview}
     * @memberof GenerativeImagesHistoryAsset
     */
    ai_ip_review?: GenerativeImageAssetAiIpReview;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImagesHistoryAsset
     */
    small: GenerativeImageAssetSmall;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImagesHistoryAsset
     */
    watermarked: GenerativeImageAssetSmall;
}
/**
 *
 * @export
 * @interface GenerativeImagesHistoryItem
 */
export interface GenerativeImagesHistoryItem {
    /**
     * The generation request ID.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    id: string;
    /**
     * The status of the generation request.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    status: GenerativeImagesHistoryItem.StatusEnum;
    /**
     * The time at which the generation request was received.
     * @type {Date}
     * @memberof GenerativeImagesHistoryItem
     */
    request_time: Date;
    /**
     * Whether the generation is private.
     * @type {boolean}
     * @memberof GenerativeImagesHistoryItem
     */
    is_private: boolean;
    /**
     * Whether generated assets are eligible for registration.
     * @type {boolean}
     * @memberof GenerativeImagesHistoryItem
     */
    can_register_assets?: boolean;
    /**
     * Error code if the generation failed.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    error_code?: string;
    /**
     * Image generation category derived from the generation metadata type.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    generation_type?: GenerativeImagesHistoryItem.GenerationTypeEnum;
    /**
     * The text prompt used for the generation.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    prompt?: string;
    /**
     * The generated image aspect ratio.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    aspect_ratio?: string;
    /**
     *
     * @type {GenerativeImageAssetStyles}
     * @memberof GenerativeImagesHistoryItem
     */
    style: GenerativeImageAssetStyles;
    /**
     * The image generation model identifier.
     * @type {string}
     * @memberof GenerativeImagesHistoryItem
     */
    model: string;
    /**
     *
     * @type {Array<GenerativeImagesHistoryItemAssets>}
     * @memberof GenerativeImagesHistoryItem
     */
    assets: Array<GenerativeImagesHistoryItemAssets>;
}
/**
 * @export
 * @namespace GenerativeImagesHistoryItem
 */
export declare namespace GenerativeImagesHistoryItem {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        COMPLETED,
        FAILED,
        GENERATING,
        PENDING,
        NOTFOUND
    }
    /**
     * @export
     * @enum {string}
     */
    enum GenerationTypeEnum {
        Generation,
        Variation,
        SmartEdit
    }
}
/**
 *
 * @export
 * @interface GenerativeImagesHistoryItemAssets
 */
export interface GenerativeImagesHistoryItemAssets {
    /**
     * The generated image asset ID.
     * @type {string}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    id: string;
    /**
     * The generated image description.
     * @type {string}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    description: string;
    /**
     * Registered Shutterstock image ID for this generated asset, if registered.
     * @type {string}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    image_id?: string;
    /**
     *
     * @type {GenerativeImageAssetAiIpReview}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    ai_ip_review?: GenerativeImageAssetAiIpReview;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    small: GenerativeImageAssetSmall;
    /**
     *
     * @type {GenerativeImageAssetSmall}
     * @memberof GenerativeImagesHistoryItemAssets
     */
    watermarked: GenerativeImageAssetSmall;
}
/**
 * List of image generation history records.
 * @export
 * @interface GenerativeImagesHistoryResponse
 */
export interface GenerativeImagesHistoryResponse {
    /**
     * Image generation history records.
     * @type {Array<GenerativeImagesHistoryResponseData>}
     * @memberof GenerativeImagesHistoryResponse
     */
    data: Array<GenerativeImagesHistoryResponseData>;
    /**
     * The current page of results.
     * @type {number}
     * @memberof GenerativeImagesHistoryResponse
     */
    page: number;
    /**
     * The number of results per page.
     * @type {number}
     * @memberof GenerativeImagesHistoryResponse
     */
    per_page: number;
    /**
     * The total number of results across all pages.
     * @type {number}
     * @memberof GenerativeImagesHistoryResponse
     */
    total_count: number;
}
/**
 *
 * @export
 * @interface GenerativeImagesHistoryResponseData
 */
export interface GenerativeImagesHistoryResponseData {
    /**
     * The generation request ID.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    id: string;
    /**
     * The status of the generation request.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    status: GenerativeImagesHistoryResponseData.StatusEnum;
    /**
     * The time at which the generation request was received.
     * @type {Date}
     * @memberof GenerativeImagesHistoryResponseData
     */
    request_time: Date;
    /**
     * Whether the generation is private.
     * @type {boolean}
     * @memberof GenerativeImagesHistoryResponseData
     */
    is_private: boolean;
    /**
     * Whether generated assets are eligible for registration.
     * @type {boolean}
     * @memberof GenerativeImagesHistoryResponseData
     */
    can_register_assets?: boolean;
    /**
     * Error code if the generation failed.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    error_code?: string;
    /**
     * Image generation category derived from the generation metadata type.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    generation_type?: GenerativeImagesHistoryResponseData.GenerationTypeEnum;
    /**
     * The text prompt used for the generation.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    prompt?: string;
    /**
     * The generated image aspect ratio.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    aspect_ratio?: string;
    /**
     *
     * @type {GenerativeImageAssetStyles}
     * @memberof GenerativeImagesHistoryResponseData
     */
    style: GenerativeImageAssetStyles;
    /**
     * The image generation model identifier.
     * @type {string}
     * @memberof GenerativeImagesHistoryResponseData
     */
    model: string;
    /**
     *
     * @type {Array<GenerativeImagesHistoryItemAssets>}
     * @memberof GenerativeImagesHistoryResponseData
     */
    assets: Array<GenerativeImagesHistoryItemAssets>;
}
/**
 * @export
 * @namespace GenerativeImagesHistoryResponseData
 */
export declare namespace GenerativeImagesHistoryResponseData {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        COMPLETED,
        FAILED,
        GENERATING,
        PENDING,
        NOTFOUND
    }
    /**
     * @export
     * @enum {string}
     */
    enum GenerationTypeEnum {
        Generation,
        Variation,
        SmartEdit
    }
}
/**
 *
 * @export
 * @interface GenerativeImagesRequest
 */
export interface GenerativeImagesRequest {
    /**
     * The text prompt to generate images from. Must contain at least one non-whitespace character and be at most 1800 characters.
     * @type {string}
     * @memberof GenerativeImagesRequest
     */
    prompt: string;
    /**
     * The aspect ratio of the generated images.
     * @type {string}
     * @memberof GenerativeImagesRequest
     */
    aspect_ratio?: GenerativeImagesRequest.AspectRatioEnum;
    /**
     * The style identifier to apply to the generated images. Use an id from text_to_image.styles returned by GET /v2/generative/inputs.
     * @type {string}
     * @memberof GenerativeImagesRequest
     */
    style_id?: string;
    /**
     * The image generation model identifier. Use an id from text_to_image.models returned by GET /v2/generative/inputs. If omitted, the backend selects the default model.
     * @type {string}
     * @memberof GenerativeImagesRequest
     */
    model?: string;
}
/**
 * @export
 * @namespace GenerativeImagesRequest
 */
export declare namespace GenerativeImagesRequest {
    /**
     * @export
     * @enum {string}
     */
    enum AspectRatioEnum {
        _11,
        _916,
        _169,
        _43,
        _34
    }
}
/**
 *
 * @export
 * @interface GenerativeImagesResponse
 */
export interface GenerativeImagesResponse {
    /**
     * The UUID of the generation request.
     * @type {string}
     * @memberof GenerativeImagesResponse
     */
    id: string;
}
/**
 *
 * @export
 * @interface GenerativeInputModel
 */
export interface GenerativeInputModel {
    /**
     * The model identifier to pass as the model parameter.
     * @type {string}
     * @memberof GenerativeInputModel
     */
    id: string;
    /**
     * Display name of the model.
     * @type {string}
     * @memberof GenerativeInputModel
     */
    name: string;
    /**
     * Short description of the model.
     * @type {string}
     * @memberof GenerativeInputModel
     */
    description: string;
}
/**
 *
 * @export
 * @interface GenerativeInputStyle
 */
export interface GenerativeInputStyle {
    /**
     * The style identifier to pass as the style_id parameter.
     * @type {string}
     * @memberof GenerativeInputStyle
     */
    id: string;
    /**
     * Display name of the style.
     * @type {string}
     * @memberof GenerativeInputStyle
     */
    name: string;
    /**
     * Description of the style.
     * @type {string}
     * @memberof GenerativeInputStyle
     */
    description: string;
}
/**
 *
 * @export
 * @interface GenerativeInputsResponse
 */
export interface GenerativeInputsResponse {
    /**
     *
     * @type {GenerativeInputsResponseTextToImage}
     * @memberof GenerativeInputsResponse
     */
    text_to_image: GenerativeInputsResponseTextToImage;
}
/**
 * Inputs that apply to text-to-image generation requests, including POST /v2/generative/images.
 * @export
 * @interface GenerativeInputsResponseTextToImage
 */
export interface GenerativeInputsResponseTextToImage {
    /**
     * Models supported for text-to-image generation. Pass a model id as the model parameter in POST /v2/generative/images.
     * @type {Array<GenerativeInputsResponseTextToImageModels>}
     * @memberof GenerativeInputsResponseTextToImage
     */
    models: Array<GenerativeInputsResponseTextToImageModels>;
    /**
     * Styles supported for text-to-image generation. Pass a style id as the style_id parameter in POST /v2/generative/images.
     * @type {Array<GenerativeInputsResponseTextToImageStyles>}
     * @memberof GenerativeInputsResponseTextToImage
     */
    styles: Array<GenerativeInputsResponseTextToImageStyles>;
}
/**
 *
 * @export
 * @interface GenerativeInputsResponseTextToImageModels
 */
export interface GenerativeInputsResponseTextToImageModels {
    /**
     * The model identifier to pass as the model parameter.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageModels
     */
    id: string;
    /**
     * Display name of the model.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageModels
     */
    name: string;
    /**
     * Short description of the model.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageModels
     */
    description: string;
}
/**
 *
 * @export
 * @interface GenerativeInputsResponseTextToImageStyles
 */
export interface GenerativeInputsResponseTextToImageStyles {
    /**
     * The style identifier to pass as the style_id parameter.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageStyles
     */
    id: string;
    /**
     * Display name of the style.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageStyles
     */
    name: string;
    /**
     * Description of the style.
     * @type {string}
     * @memberof GenerativeInputsResponseTextToImageStyles
     */
    description: string;
}
/**
 *
 * @export
 * @interface GenerativeTextToImageInputs
 */
export interface GenerativeTextToImageInputs {
    /**
     * Models supported for text-to-image generation. Pass a model id as the model parameter in POST /v2/generative/images.
     * @type {Array<GenerativeInputsResponseTextToImageModels>}
     * @memberof GenerativeTextToImageInputs
     */
    models: Array<GenerativeInputsResponseTextToImageModels>;
    /**
     * Styles supported for text-to-image generation. Pass a style id as the style_id parameter in POST /v2/generative/images.
     * @type {Array<GenerativeInputsResponseTextToImageStyles>}
     * @memberof GenerativeTextToImageInputs
     */
    styles: Array<GenerativeInputsResponseTextToImageStyles>;
}
/**
 * List of audio genres
 * @export
 * @interface GenreList
 */
export interface GenreList {
    /**
     * List of genres
     * @type {Array<string>}
     * @memberof GenreList
     */
    data: Array<string>;
}
/**
 * A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code.
 * @export
 * @interface ISOCountryCode
 */
export interface ISOCountryCode {
}
/**
 * Data required to redownload an image
 * @export
 * @interface IdDownloadsBody
 */
export interface IdDownloadsBody {
    /**
     *
     * @type {V2imageslicensesiddownloadsAuthCookie}
     * @memberof IdDownloadsBody
     */
    auth_cookie?: V2imageslicensesiddownloadsAuthCookie;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof IdDownloadsBody
     */
    show_modal?: boolean;
    /**
     * Size of the image
     * @type {string}
     * @memberof IdDownloadsBody
     */
    size?: IdDownloadsBody.SizeEnum;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof IdDownloadsBody
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace IdDownloadsBody
 */
export declare namespace IdDownloadsBody {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Huge,
        Supersize,
        Vector
    }
}
/**
 * Data required to redownload a video
 * @export
 * @interface IdDownloadsBody1
 */
export interface IdDownloadsBody1 {
    /**
     *
     * @type {V2imageslicensesiddownloadsAuthCookie}
     * @memberof IdDownloadsBody1
     */
    auth_cookie?: V2imageslicensesiddownloadsAuthCookie;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof IdDownloadsBody1
     */
    show_modal?: boolean;
    /**
     * Size of the video
     * @type {string}
     * @memberof IdDownloadsBody1
     */
    size?: IdDownloadsBody1.SizeEnum;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof IdDownloadsBody1
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace IdDownloadsBody1
 */
export declare namespace IdDownloadsBody1 {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Web,
        Sd,
        Hd,
        _4k
    }
}
/**
 * Request to get a list of items in a collection
 * @export
 * @interface IdItemsBody
 */
export interface IdItemsBody {
    /**
     * List of items
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof IdItemsBody
     */
    items: Array<V2imagescollectionsiditemsItems>;
}
/**
 * Request to get a list of items in a collection
 * @export
 * @interface IdItemsBody1
 */
export interface IdItemsBody1 {
    /**
     * List of items
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof IdItemsBody1
     */
    items: Array<V2imagescollectionsiditemsItems>;
}
/**
 * Request to get a list of items in a collection
 * @export
 * @interface IdItemsBody2
 */
export interface IdItemsBody2 {
    /**
     * List of items
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof IdItemsBody2
     */
    items: Array<V2imagescollectionsiditemsItems>;
}
/**
 * Information about an image
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * Date that the image was added by the contributor
     * @type {string}
     * @memberof Image
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof Image
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of the image in decimal format, such as 0.6667
     * @type {number}
     * @memberof Image
     */
    aspect?: number;
    /**
     *
     * @type {ImageAssets}
     * @memberof Image
     */
    assets?: ImageAssets;
    /**
     * Categories that this image is a part of
     * @type {Array<CategoryDataListData>}
     * @memberof Image
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof Image
     */
    contributor: AudioContributor;
    /**
     * Detailed description of the image
     * @type {string}
     * @memberof Image
     */
    description?: string;
    /**
     * Indicates whether there are model releases for the image
     * @type {boolean}
     * @memberof Image
     */
    has_model_release?: boolean;
    /**
     * Indicates whether there are property releases for the image
     * @type {boolean}
     * @memberof Image
     */
    has_property_release?: boolean;
    /**
     * Image ID
     * @type {string}
     * @memberof Image
     */
    id: string;
    /**
     * Type of image
     * @type {string}
     * @memberof Image
     */
    image_type?: string;
    /**
     * Whether or not this image contains adult content
     * @type {boolean}
     * @memberof Image
     */
    is_adult?: boolean;
    /**
     * Whether or not this image is editorial content
     * @type {boolean}
     * @memberof Image
     */
    is_editorial?: boolean;
    /**
     * Whether or not this image is an illustration
     * @type {boolean}
     * @memberof Image
     */
    is_illustration?: boolean;
    /**
     * Asset collection for this image
     * @type {string}
     * @memberof Image
     */
    asset_collection?: Image.AssetCollectionEnum;
    /**
     *
     * @type {ImageAiIpReview}
     * @memberof Image
     */
    ai_ip_review?: ImageAiIpReview;
    /**
     * Keywords associated with the content of this image
     * @type {Array<string>}
     * @memberof Image
     */
    keywords?: Array<string>;
    /**
     * Media type of this image, should always be \"image\"
     * @type {string}
     * @memberof Image
     */
    media_type: string;
    /**
     * List of model releases
     * @type {Array<AudioModelReleases>}
     * @memberof Image
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of models
     * @type {Array<ImageModels>}
     * @memberof Image
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this image
     * @type {Array<string>}
     * @memberof Image
     */
    releases?: Array<string>;
    /**
     * Link to image information page; included only for certain accounts
     * @type {string}
     * @memberof Image
     */
    url?: string;
}
/**
 * @export
 * @namespace Image
 */
export declare namespace Image {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Starter,
        Essentials,
        Choice,
        Offset
    }
}
/**
 * Current AI IP review information for a generated image.
 * @export
 * @interface ImageAiIpReview
 */
export interface ImageAiIpReview {
    /**
     * Current status of the AI IP review process
     * @type {string}
     * @memberof ImageAiIpReview
     */
    status?: string;
    /**
     * Reasons the AI IP review was rejected, if any
     * @type {Array<string>}
     * @memberof ImageAiIpReview
     */
    rejection_reasons?: Array<string>;
}
/**
 * Image asset information
 * @export
 * @interface ImageAssets
 */
export interface ImageAssets {
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof ImageAssets
     */
    huge_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    huge_thumb?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    large_thumb?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof ImageAssets
     */
    medium_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    preview?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    preview_600?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    preview_600_unwatermarked?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    preview_1000?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    preview_1500?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof ImageAssets
     */
    small_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    small_thumb?: EditorialAssetsThumb170;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof ImageAssets
     */
    supersize_jpg?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsOriginal}
     * @memberof ImageAssets
     */
    vector_eps?: EditorialAssetsOriginal;
    /**
     *
     * @type {EditorialAssetsThumb170}
     * @memberof ImageAssets
     */
    mosaic?: EditorialAssetsThumb170;
}
/**
 * Request to upload an image
 * @export
 * @interface ImageCreateRequest
 */
export interface ImageCreateRequest {
    /**
     * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     * @type {string}
     * @memberof ImageCreateRequest
     */
    base64_image: string;
}
/**
 * List of images
 * @export
 * @interface ImageDataList
 */
export interface ImageDataList {
    /**
     * Images
     * @type {Array<ImageDataListData>}
     * @memberof ImageDataList
     */
    data?: Array<ImageDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof ImageDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof ImageDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof ImageDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof ImageDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof ImageDataList
     */
    total_count?: number;
}
/**
 * Information about an image
 * @export
 * @interface ImageDataListData
 */
export interface ImageDataListData {
    /**
     * Date that the image was added by the contributor
     * @type {string}
     * @memberof ImageDataListData
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof ImageDataListData
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of the image in decimal format, such as 0.6667
     * @type {number}
     * @memberof ImageDataListData
     */
    aspect?: number;
    /**
     *
     * @type {ImageAssets}
     * @memberof ImageDataListData
     */
    assets?: ImageAssets;
    /**
     * Categories that this image is a part of
     * @type {Array<CategoryDataListData>}
     * @memberof ImageDataListData
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof ImageDataListData
     */
    contributor: AudioContributor;
    /**
     * Detailed description of the image
     * @type {string}
     * @memberof ImageDataListData
     */
    description?: string;
    /**
     * Indicates whether there are model releases for the image
     * @type {boolean}
     * @memberof ImageDataListData
     */
    has_model_release?: boolean;
    /**
     * Indicates whether there are property releases for the image
     * @type {boolean}
     * @memberof ImageDataListData
     */
    has_property_release?: boolean;
    /**
     * Image ID
     * @type {string}
     * @memberof ImageDataListData
     */
    id: string;
    /**
     * Type of image
     * @type {string}
     * @memberof ImageDataListData
     */
    image_type?: string;
    /**
     * Whether or not this image contains adult content
     * @type {boolean}
     * @memberof ImageDataListData
     */
    is_adult?: boolean;
    /**
     * Whether or not this image is editorial content
     * @type {boolean}
     * @memberof ImageDataListData
     */
    is_editorial?: boolean;
    /**
     * Whether or not this image is an illustration
     * @type {boolean}
     * @memberof ImageDataListData
     */
    is_illustration?: boolean;
    /**
     * Asset collection for this image
     * @type {string}
     * @memberof ImageDataListData
     */
    asset_collection?: ImageDataListData.AssetCollectionEnum;
    /**
     *
     * @type {ImageAiIpReview}
     * @memberof ImageDataListData
     */
    ai_ip_review?: ImageAiIpReview;
    /**
     * Keywords associated with the content of this image
     * @type {Array<string>}
     * @memberof ImageDataListData
     */
    keywords?: Array<string>;
    /**
     * Media type of this image, should always be \"image\"
     * @type {string}
     * @memberof ImageDataListData
     */
    media_type: string;
    /**
     * List of model releases
     * @type {Array<AudioModelReleases>}
     * @memberof ImageDataListData
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of models
     * @type {Array<ImageModels>}
     * @memberof ImageDataListData
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this image
     * @type {Array<string>}
     * @memberof ImageDataListData
     */
    releases?: Array<string>;
    /**
     * Link to image information page; included only for certain accounts
     * @type {string}
     * @memberof ImageDataListData
     */
    url?: string;
}
/**
 * @export
 * @namespace ImageDataListData
 */
export declare namespace ImageDataListData {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Starter,
        Essentials,
        Choice,
        Offset
    }
}
/**
 * Information about a human model or property that appears in media; used to search for assets that this model is in
 * @export
 * @interface ImageModels
 */
export interface ImageModels {
    /**
     * ID of the model
     * @type {string}
     * @memberof ImageModels
     */
    id: string;
}
/**
 * Image search results
 * @export
 * @interface ImageSearchResults
 */
export interface ImageSearchResults {
    /**
     * List of images
     * @type {Array<ImageDataListData>}
     * @memberof ImageSearchResults
     */
    data: Array<ImageDataListData>;
    /**
     * List of errors if any
     * @type {Array<AudioDataListErrors>}
     * @memberof ImageSearchResults
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof ImageSearchResults
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof ImageSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof ImageSearchResults
     */
    per_page?: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof ImageSearchResults
     */
    search_id: string;
    /**
     * Returns information if search phrase has potentially been mistyped or another query would lead to better search results
     * @type {any}
     * @memberof ImageSearchResults
     */
    spellcheck_info?: any;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof ImageSearchResults
     */
    total_count: number;
}
/**
 * Image size information
 * @export
 * @interface ImageSizeDetails
 */
export interface ImageSizeDetails {
    /**
     * Display name of this image size
     * @type {string}
     * @memberof ImageSizeDetails
     */
    display_name?: string;
    /**
     *
     * @type {number}
     * @memberof ImageSizeDetails
     */
    dpi?: number;
    /**
     * File size (in bytes) of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    file_size?: number;
    /**
     * Format of this image size
     * @type {string}
     * @memberof ImageSizeDetails
     */
    format?: string;
    /**
     * Height of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    height?: number;
    /**
     * Whether or not this image can be licensed in this image size
     * @type {boolean}
     * @memberof ImageSizeDetails
     */
    is_licensable?: boolean;
    /**
     * Width of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    width?: number;
}
/**
 * Collection creation request
 * @export
 * @interface ImagesCollectionsBody
 */
export interface ImagesCollectionsBody {
    /**
     * The name of the collection
     * @type {string}
     * @memberof ImagesCollectionsBody
     */
    name: string;
}
/**
 * Image license request data
 * @export
 * @interface ImagesLicensesBody
 */
export interface ImagesLicensesBody {
    /**
     * Images to create licenses for
     * @type {Array<any>}
     * @memberof ImagesLicensesBody
     */
    images: Array<any>;
}
/**
 * License editorial content request
 * @export
 * @interface ImagesLicensesBody1
 */
export interface ImagesLicensesBody1 {
    /**
     * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
     * @type {string}
     * @memberof ImagesLicensesBody1
     */
    country: string;
    /**
     * Editorial content to license
     * @type {Array<V2editorialimageslicensesEditorial>}
     * @memberof ImagesLicensesBody1
     */
    editorial: Array<V2editorialimageslicensesEditorial>;
}
/**
 * Generated image license request data.
 * @export
 * @interface ImagesLicensesBody2
 */
export interface ImagesLicensesBody2 {
    /**
     * Generated image assets to register and license.
     * @type {Array<V2generativeimageslicensesImages>}
     * @memberof ImagesLicensesBody2
     */
    images: Array<V2generativeimageslicensesImages>;
}
/**
 * Image search results
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * List of images
     * @type {Array<ImageDataListData>}
     * @memberof InlineResponse200
     */
    data: Array<ImageDataListData>;
    /**
     * List of errors if any
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse200
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse200
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse200
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse200
     */
    per_page?: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof InlineResponse200
     */
    search_id: string;
    /**
     * Returns information if search phrase has potentially been mistyped or another query would lead to better search results
     * @type {any}
     * @memberof InlineResponse200
     */
    spellcheck_info?: any;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse200
     */
    total_count: number;
}
/**
 * List of search results for each given query
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     *
     * @type {BulkImageSearchResultsBulkSearchResults}
     * @memberof InlineResponse2001
     */
    bulk_search_results?: BulkImageSearchResultsBulkSearchResults;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof InlineResponse2001
     */
    bulk_search_id?: string;
}
/**
 * List of recommended images
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
    /**
     * Recommended images
     * @type {Array<RecommendationDataListData>}
     * @memberof InlineResponse20010
     */
    data?: Array<RecommendationDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20010
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20010
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20010
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20010
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20010
     */
    total_count?: number;
}
/**
 * List of collections
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    /**
     * Collections
     * @type {Array<CollectionDataListData>}
     * @memberof InlineResponse20011
     */
    data?: Array<CollectionDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20011
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20011
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof InlineResponse20011
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof InlineResponse20011
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof InlineResponse20011
     */
    total_count?: number;
}
/**
 * Metadata about a collection of assets
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 {
    /**
     *
     * @type {V2imagescollectionsiditemsItems}
     * @memberof InlineResponse20012
     */
    cover_item?: V2imagescollectionsiditemsItems;
    /**
     * When the collection was created
     * @type {Date}
     * @memberof InlineResponse20012
     */
    created_time?: Date;
    /**
     * The collection ID
     * @type {string}
     * @memberof InlineResponse20012
     */
    id: string;
    /**
     * The last time this collection's items were updated
     * @type {Date}
     * @memberof InlineResponse20012
     */
    items_updated_time?: Date;
    /**
     * The name of the collection
     * @type {string}
     * @memberof InlineResponse20012
     */
    name: string;
    /**
     * A code that can be used to share the collection (optional)
     * @type {string}
     * @memberof InlineResponse20012
     */
    share_code?: string;
    /**
     * The browser URL that can be used to share the collection (optional)
     * @type {string}
     * @memberof InlineResponse20012
     */
    share_url?: string;
    /**
     * The number of items in the collection
     * @type {number}
     * @memberof InlineResponse20012
     */
    total_item_count: number;
    /**
     * The last time the collection was updated (other than changes to the items in it)
     * @type {Date}
     * @memberof InlineResponse20012
     */
    updated_time?: Date;
}
/**
 * List of items in a collection
 * @export
 * @interface InlineResponse20013
 */
export interface InlineResponse20013 {
    /**
     * Assets in the collection
     * @type {Array<V2imagescollectionsiditemsItems>}
     * @memberof InlineResponse20013
     */
    data?: Array<V2imagescollectionsiditemsItems>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20013
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20013
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof InlineResponse20013
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof InlineResponse20013
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof InlineResponse20013
     */
    total_count?: number;
}
/**
 * List of updated media
 * @export
 * @interface InlineResponse20014
 */
export interface InlineResponse20014 {
    /**
     * Updated media items
     * @type {Array<UpdatedMediaDataListData>}
     * @memberof InlineResponse20014
     */
    data?: Array<UpdatedMediaDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20014
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20014
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20014
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20014
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20014
     */
    total_count?: number;
}
/**
 * Video search results
 * @export
 * @interface InlineResponse20015
 */
export interface InlineResponse20015 {
    /**
     * List of videos
     * @type {Array<VideoDataListData>}
     * @memberof InlineResponse20015
     */
    data: Array<VideoDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20015
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20015
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20015
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20015
     */
    total_count: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof InlineResponse20015
     */
    search_id: string;
}
/**
 * List of videos
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
    /**
     * Videos
     * @type {Array<VideoDataListData>}
     * @memberof InlineResponse20016
     */
    data?: Array<VideoDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20016
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20016
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20016
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20016
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20016
     */
    total_count?: number;
}
/**
 * Information about a video
 * @export
 * @interface InlineResponse20017
 */
export interface InlineResponse20017 {
    /**
     * Date this video was added to the Shutterstock library
     * @type {string}
     * @memberof InlineResponse20017
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof InlineResponse20017
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of this video in decimal format, such as 0.6667
     * @type {number}
     * @memberof InlineResponse20017
     */
    aspect?: number;
    /**
     * Aspect ratio of the video as a ratio, such as 16:9
     * @type {string}
     * @memberof InlineResponse20017
     */
    aspect_ratio?: string;
    /**
     *
     * @type {VideoAssets}
     * @memberof InlineResponse20017
     */
    assets?: VideoAssets;
    /**
     * List of categories
     * @type {Array<CategoryDataListData>}
     * @memberof InlineResponse20017
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof InlineResponse20017
     */
    contributor: AudioContributor;
    /**
     * Description of this video
     * @type {string}
     * @memberof InlineResponse20017
     */
    description?: string;
    /**
     * Duration of this video, in seconds
     * @type {number}
     * @memberof InlineResponse20017
     */
    duration?: number;
    /**
     * Whether or not this video has been released for use by the model appearing in it
     * @type {boolean}
     * @memberof InlineResponse20017
     */
    has_model_release?: boolean;
    /**
     * Whether or not this video has received a release to show the landmark or property appearing in it
     * @type {boolean}
     * @memberof InlineResponse20017
     */
    has_property_release?: boolean;
    /**
     * ID of the video
     * @type {string}
     * @memberof InlineResponse20017
     */
    id: string;
    /**
     * Whether or not this video contains adult content
     * @type {boolean}
     * @memberof InlineResponse20017
     */
    is_adult?: boolean;
    /**
     * Whether or not this video is editorial content
     * @type {boolean}
     * @memberof InlineResponse20017
     */
    is_editorial?: boolean;
    /**
     * Whether or not this video is part of the select collection
     * @type {boolean}
     * @memberof InlineResponse20017
     */
    is_select?: boolean;
    /**
     * Asset collection for this video
     * @type {string}
     * @memberof InlineResponse20017
     */
    asset_collection?: InlineResponse20017.AssetCollectionEnum;
    /**
     * Keywords associated with the content of this video
     * @type {Array<string>}
     * @memberof InlineResponse20017
     */
    keywords?: Array<string>;
    /**
     * Media type of this video, should always be \"video\"
     * @type {string}
     * @memberof InlineResponse20017
     */
    media_type: string;
    /**
     * List of models in this video
     * @type {Array<ImageModels>}
     * @memberof InlineResponse20017
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this video
     * @type {Array<AudioModelReleases>}
     * @memberof InlineResponse20017
     */
    releases?: Array<AudioModelReleases>;
    /**
     * Link to video information page; included only for certain accounts
     * @type {string}
     * @memberof InlineResponse20017
     */
    url?: string;
}
/**
 * @export
 * @namespace InlineResponse20017
 */
export declare namespace InlineResponse20017 {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Empty,
        Essentials,
        Select
    }
}
/**
 * List of video license results
 * @export
 * @interface InlineResponse20018
 */
export interface InlineResponse20018 {
    /**
     * License results
     * @type {Array<LicenseVideoResultDataListData>}
     * @memberof InlineResponse20018
     */
    data?: Array<LicenseVideoResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20018
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20018
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20018
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20018
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20018
     */
    total_count?: number;
}
/**
 * Audio search results
 * @export
 * @interface InlineResponse20019
 */
export interface InlineResponse20019 {
    /**
     * List of tracks
     * @type {Array<AudioDataListData>}
     * @memberof InlineResponse20019
     */
    data: Array<AudioDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20019
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20019
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20019
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20019
     */
    total_count: number;
    /**
     * ID of the search
     * @type {string}
     * @memberof InlineResponse20019
     */
    search_id: string;
}
/**
 * List of search suggestions
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * Search suggestions
     * @type {Array<string>}
     * @memberof InlineResponse2002
     */
    data?: Array<string>;
}
/**
 * List of audio genres
 * @export
 * @interface InlineResponse20020
 */
export interface InlineResponse20020 {
    /**
     * List of genres
     * @type {Array<string>}
     * @memberof InlineResponse20020
     */
    data: Array<string>;
}
/**
 * List of instruments
 * @export
 * @interface InlineResponse20021
 */
export interface InlineResponse20021 {
    /**
     * List of instruments
     * @type {Array<string>}
     * @memberof InlineResponse20021
     */
    data: Array<string>;
}
/**
 * List of audio moods
 * @export
 * @interface InlineResponse20022
 */
export interface InlineResponse20022 {
    /**
     * List of audio moods
     * @type {Array<string>}
     * @memberof InlineResponse20022
     */
    data: Array<string>;
}
/**
 * List of tracks
 * @export
 * @interface InlineResponse20023
 */
export interface InlineResponse20023 {
    /**
     * Tracks
     * @type {Array<AudioDataListData>}
     * @memberof InlineResponse20023
     */
    data?: Array<AudioDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20023
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20023
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20023
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20023
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20023
     */
    total_count?: number;
}
/**
 * Audio metadata
 * @export
 * @interface InlineResponse20024
 */
export interface InlineResponse20024 {
    /**
     * Date this track was added to the Shutterstock library
     * @type {string}
     * @memberof InlineResponse20024
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof InlineResponse20024
     */
    affiliate_url?: string;
    /**
     *
     * @type {AudioAlbum}
     * @memberof InlineResponse20024
     */
    album?: AudioAlbum;
    /**
     * List of artists
     * @type {Array<AudioArtists>}
     * @memberof InlineResponse20024
     */
    artists?: Array<AudioArtists>;
    /**
     *
     * @type {AudioAssets}
     * @memberof InlineResponse20024
     */
    assets?: AudioAssets;
    /**
     * BPM (beats per minute) of this track
     * @type {number}
     * @memberof InlineResponse20024
     */
    bpm?: number;
    /**
     *
     * @type {AudioContributor}
     * @memberof InlineResponse20024
     */
    contributor: AudioContributor;
    /**
     *
     * @type {Date}
     * @memberof InlineResponse20024
     */
    deleted_time?: Date;
    /**
     * Description of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    description?: string;
    /**
     * Duration of this track in seconds
     * @type {number}
     * @memberof InlineResponse20024
     */
    duration?: number;
    /**
     * List of all genres for this track
     * @type {Array<string>}
     * @memberof InlineResponse20024
     */
    genres?: Array<string>;
    /**
     * Shutterstock ID of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    id: string;
    /**
     * List of all instruments that appear in this track
     * @type {Array<string>}
     * @memberof InlineResponse20024
     */
    instruments?: Array<string>;
    /**
     * Whether or not this track contains adult content
     * @type {boolean}
     * @memberof InlineResponse20024
     */
    is_adult?: boolean;
    /**
     * Whether or not this track is purely instrumental (lacking lyrics)
     * @type {boolean}
     * @memberof InlineResponse20024
     */
    is_instrumental?: boolean;
    /**
     * The ISRC (International Standard Recording Code) is the international identification system for sound recordings and music video recordings.
     * @type {string}
     * @memberof InlineResponse20024
     */
    isrc?: string;
    /**
     * List of all keywords for this track
     * @type {Array<string>}
     * @memberof InlineResponse20024
     */
    keywords?: Array<string>;
    /**
     * Language of this track's lyrics
     * @type {string}
     * @memberof InlineResponse20024
     */
    language?: string;
    /**
     * Lyrics of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    lyrics?: string;
    /**
     * Media type of this track; should always be \"audio\"
     * @type {string}
     * @memberof InlineResponse20024
     */
    media_type: string;
    /**
     * List of all model releases for this track
     * @type {Array<AudioModelReleases>}
     * @memberof InlineResponse20024
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of all moods of this track
     * @type {Array<string>}
     * @memberof InlineResponse20024
     */
    moods?: Array<string>;
    /**
     * Time this track was published
     * @type {Date}
     * @memberof InlineResponse20024
     */
    published_time?: Date;
    /**
     * Recording version of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    recording_version?: string;
    /**
     * List of all releases of this track
     * @type {Array<string>}
     * @memberof InlineResponse20024
     */
    releases?: Array<string>;
    /**
     * List of all similar artists of this track
     * @type {Array<AudioArtists>}
     * @memberof InlineResponse20024
     */
    similar_artists?: Array<AudioArtists>;
    /**
     * Time this track was submitted
     * @type {Date}
     * @memberof InlineResponse20024
     */
    submitted_time?: Date;
    /**
     * Title of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    title?: string;
    /**
     * Time this track was last updated
     * @type {Date}
     * @memberof InlineResponse20024
     */
    updated_time?: Date;
    /**
     * Vocal description of this track
     * @type {string}
     * @memberof InlineResponse20024
     */
    vocal_description?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20024
     */
    url?: string;
}
/**
 * List of audio license results
 * @export
 * @interface InlineResponse20025
 */
export interface InlineResponse20025 {
    /**
     * License results
     * @type {Array<LicenseAudioResultDataListData>}
     * @memberof InlineResponse20025
     */
    data?: Array<LicenseAudioResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20025
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20025
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20025
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20025
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20025
     */
    total_count?: number;
}
/**
 * Audio License URL object
 * @export
 * @interface InlineResponse20026
 */
export interface InlineResponse20026 {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof InlineResponse20026
     */
    url: string;
    /**
     * URL that can be used to download the .zip file containing shorts, loops, and stems
     * @type {string}
     * @memberof InlineResponse20026
     */
    shorts_loops_stems?: string;
}
/**
 * Sound effects search results
 * @export
 * @interface InlineResponse20027
 */
export interface InlineResponse20027 {
    /**
     * List of tracks
     * @type {Array<SFXDataListData>}
     * @memberof InlineResponse20027
     */
    data: Array<SFXDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20027
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse20027
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20027
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse20027
     */
    total_count: number;
    /**
     * ID of the search
     * @type {string}
     * @memberof InlineResponse20027
     */
    search_id: string;
}
/**
 * SFX metadata
 * @export
 * @interface InlineResponse20028
 */
export interface InlineResponse20028 {
    /**
     * Date this sound effect was added to the Shutterstock library
     * @type {string}
     * @memberof InlineResponse20028
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof InlineResponse20028
     */
    affiliate_url?: string;
    /**
     * Artist of the sound effect
     * @type {string}
     * @memberof InlineResponse20028
     */
    artist?: string;
    /**
     *
     * @type {SFXAssets}
     * @memberof InlineResponse20028
     */
    assets?: SFXAssets;
    /**
     *
     * @type {AudioContributor}
     * @memberof InlineResponse20028
     */
    contributor: AudioContributor;
    /**
     * Description of this sound effect
     * @type {string}
     * @memberof InlineResponse20028
     */
    description?: string;
    /**
     * Duration of this sound effect in seconds
     * @type {number}
     * @memberof InlineResponse20028
     */
    duration?: number;
    /**
     * Shutterstock ID of this sound effect
     * @type {string}
     * @memberof InlineResponse20028
     */
    id: string;
    /**
     * List of all keywords for this sound effect
     * @type {Array<string>}
     * @memberof InlineResponse20028
     */
    keywords?: Array<string>;
    /**
     * Media type of this track; should always be \"sfx\"
     * @type {string}
     * @memberof InlineResponse20028
     */
    media_type: string;
    /**
     * List of all releases of this sound effect
     * @type {Array<string>}
     * @memberof InlineResponse20028
     */
    releases?: Array<string>;
    /**
     * Title of this sound effect
     * @type {string}
     * @memberof InlineResponse20028
     */
    title?: string;
    /**
     * Time this sound effect was last updated
     * @type {Date}
     * @memberof InlineResponse20028
     */
    updated_time?: Date;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20028
     */
    url?: string;
}
/**
 * List of sound effects
 * @export
 * @interface InlineResponse20029
 */
export interface InlineResponse20029 {
    /**
     * Sound Effects
     * @type {Array<SFXDataListData>}
     * @memberof InlineResponse20029
     */
    data?: Array<SFXDataListData>;
}
/**
 * The response to a request for keyword analysis
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * The top keywords from the submitted text
     * @type {Array<string>}
     * @memberof InlineResponse2003
     */
    keywords?: Array<string>;
}
/**
 * List of information about licensed sound effects
 * @export
 * @interface InlineResponse20030
 */
export interface InlineResponse20030 {
    /**
     * Sound effects license results
     * @type {Array<LicenseSFXResultDataListData>}
     * @memberof InlineResponse20030
     */
    data?: Array<LicenseSFXResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20030
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20030
     */
    message?: string;
}
/**
 * Sound effect license URL object
 * @export
 * @interface InlineResponse20031
 */
export interface InlineResponse20031 {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof InlineResponse20031
     */
    url: string;
}
/**
 * Editorial search results
 * @export
 * @interface InlineResponse20032
 */
export interface InlineResponse20032 {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof InlineResponse20032
     */
    data: Array<EditorialContentDataListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20032
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof InlineResponse20032
     */
    next?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20032
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20032
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof InlineResponse20032
     */
    prev?: string;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof InlineResponse20032
     */
    search_id?: string;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20032
     */
    total_count: number;
}
/**
 * List of editorial categories
 * @export
 * @interface InlineResponse20033
 */
export interface InlineResponse20033 {
    /**
     *
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof InlineResponse20033
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * Editorial updated results
 * @export
 * @interface InlineResponse20034
 */
export interface InlineResponse20034 {
    /**
     * Editorial updated items
     * @type {Array<EditorialUpdatedResultsData>}
     * @memberof InlineResponse20034
     */
    data: Array<EditorialUpdatedResultsData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20034
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof InlineResponse20034
     */
    next?: string;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20034
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof InlineResponse20034
     */
    prev?: string;
}
/**
 * Metadata about editorial content
 * @export
 * @interface InlineResponse20035
 */
export interface InlineResponse20035 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse20035
     */
    aspect?: number;
    /**
     *
     * @type {EditorialContentAssets}
     * @memberof InlineResponse20035
     */
    assets?: EditorialContentAssets;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof InlineResponse20035
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof InlineResponse20035
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    special_instructions?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20035
     */
    title?: string;
}
/**
 * List of editorial images
 * @export
 * @interface InlineResponse20036
 */
export interface InlineResponse20036 {
    /**
     *
     * @type {Array<EditorialContentDataListData>}
     * @memberof InlineResponse20036
     */
    data?: Array<EditorialContentDataListData>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20036
     */
    search_id?: string;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20036
     */
    total_count?: number;
}
/**
 * List of editorial license results
 * @export
 * @interface InlineResponse20037
 */
export interface InlineResponse20037 {
    /**
     * License results
     * @type {Array<LicenseEditorialContentResultsData>}
     * @memberof InlineResponse20037
     */
    data?: Array<LicenseEditorialContentResultsData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20037
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20037
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20037
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20037
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20037
     */
    total_count?: number;
}
/**
 * List of editorial livefeeds
 * @export
 * @interface InlineResponse20038
 */
export interface InlineResponse20038 {
    /**
     * Editorial livefeeds
     * @type {Array<EditorialImageLivefeedListData>}
     * @memberof InlineResponse20038
     */
    data: Array<EditorialImageLivefeedListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20038
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20038
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20038
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20038
     */
    total_count: number;
}
/**
 * Metadata about editorial livefeed
 * @export
 * @interface InlineResponse20039
 */
export interface InlineResponse20039 {
    /**
     *
     * @type {EditorialImageLivefeedCoverItem}
     * @memberof InlineResponse20039
     */
    cover_item?: EditorialImageLivefeedCoverItem;
    /**
     * When the livefeed was initially created
     * @type {Date}
     * @memberof InlineResponse20039
     */
    created_time?: Date;
    /**
     * Livefeed ID
     * @type {string}
     * @memberof InlineResponse20039
     */
    id: string;
    /**
     * Name of the livefeed
     * @type {string}
     * @memberof InlineResponse20039
     */
    name: string;
    /**
     * Total count of items in the livefeed
     * @type {number}
     * @memberof InlineResponse20039
     */
    total_item_count: number;
}
/**
 * List of images
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     * Images
     * @type {Array<ImageDataListData>}
     * @memberof InlineResponse2004
     */
    data?: Array<ImageDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse2004
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse2004
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse2004
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse2004
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse2004
     */
    total_count?: number;
}
/**
 * List of editorial items
 * @export
 * @interface InlineResponse20040
 */
export interface InlineResponse20040 {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof InlineResponse20040
     */
    data?: Array<EditorialContentDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20040
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20040
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20040
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20040
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20040
     */
    total_count?: number;
}
/**
 * Editorial search results
 * @export
 * @interface InlineResponse20041
 */
export interface InlineResponse20041 {
    /**
     * Editorial items
     * @type {Array<EditorialVideoResultsData>}
     * @memberof InlineResponse20041
     */
    data: Array<EditorialVideoResultsData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20041
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof InlineResponse20041
     */
    next?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20041
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20041
     */
    per_page?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof InlineResponse20041
     */
    prev?: string;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof InlineResponse20041
     */
    search_id?: string;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20041
     */
    total_count: number;
}
/**
 * List of editorial video categories
 * @export
 * @interface InlineResponse20042
 */
export interface InlineResponse20042 {
    /**
     *
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof InlineResponse20042
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * Metadata about editorial content
 * @export
 * @interface InlineResponse20043
 */
export interface InlineResponse20043 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse20043
     */
    aspect?: number;
    /**
     *
     * @type {EditorialVideoContentAssets}
     * @memberof InlineResponse20043
     */
    assets?: EditorialVideoContentAssets;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    byline?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    caption?: string;
    /**
     * List of categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof InlineResponse20043
     */
    categories?: Array<EditorialCategoryResultsData>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    date_taken?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof InlineResponse20043
     */
    keywords?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20043
     */
    title?: string;
}
/**
 * List of editorial videos
 * @export
 * @interface InlineResponse20044
 */
export interface InlineResponse20044 {
    /**
     *
     * @type {Array<EditorialVideoResultsData>}
     * @memberof InlineResponse20044
     */
    data?: Array<EditorialVideoResultsData>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse20044
     */
    search_id?: string;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20044
     */
    total_count?: number;
}
/**
 *
 * @export
 * @interface InlineResponse20045
 */
export interface InlineResponse20045 {
    /**
     *
     * @type {GenerativeInputsResponseTextToImage}
     * @memberof InlineResponse20045
     */
    text_to_image: GenerativeInputsResponseTextToImage;
}
/**
 * List of generated image licensing results.
 * @export
 * @interface InlineResponse20046
 */
export interface InlineResponse20046 {
    /**
     * License results.
     * @type {Array<GenerativeImageLicenseResultDataListData>}
     * @memberof InlineResponse20046
     */
    data: Array<GenerativeImageLicenseResultDataListData>;
    /**
     * Error list; appears only if there was an error.
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20046
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message about the licensing request.
     * @type {string}
     * @memberof InlineResponse20046
     */
    message: string;
}
/**
 * The response to a generated image IP review submission.
 * @export
 * @interface InlineResponse20047
 */
export interface InlineResponse20047 {
    /**
     * Generated image asset ID submitted for IP review.
     * @type {string}
     * @memberof InlineResponse20047
     */
    asset_id: string;
    /**
     * Registered Shutterstock image ID submitted for IP review.
     * @type {string}
     * @memberof InlineResponse20047
     */
    image_id: string;
    /**
     * Whether the image was submitted for IP review.
     * @type {boolean}
     * @memberof InlineResponse20047
     */
    ip_review_submitted: boolean;
    /**
     * Server-generated message about IP review submission.
     * @type {string}
     * @memberof InlineResponse20047
     */
    message: string;
}
/**
 *
 * @export
 * @interface InlineResponse20048
 */
export interface InlineResponse20048 {
    /**
     * The UUID of the generation request.
     * @type {string}
     * @memberof InlineResponse20048
     */
    id: string;
    /**
     * Current generation status.
     * @type {string}
     * @memberof InlineResponse20048
     */
    status: InlineResponse20048.StatusEnum;
    /**
     * Prompt entered by the user.
     * @type {string}
     * @memberof InlineResponse20048
     */
    prompt?: string;
    /**
     * The image generation model identifier.
     * @type {string}
     * @memberof InlineResponse20048
     */
    model?: string;
    /**
     * The generated image aspect ratio.
     * @type {string}
     * @memberof InlineResponse20048
     */
    aspect_ratio?: string;
    /**
     *
     * @type {GenerativeImageAssetStyles}
     * @memberof InlineResponse20048
     */
    style?: GenerativeImageAssetStyles;
    /**
     *
     * @type {boolean}
     * @memberof InlineResponse20048
     */
    is_private?: boolean;
    /**
     * Whether generated assets are eligible for registration.
     * @type {boolean}
     * @memberof InlineResponse20048
     */
    can_register_assets?: boolean;
    /**
     *
     * @type {Array<GenerativeImageResultsResponseAssets>}
     * @memberof InlineResponse20048
     */
    assets: Array<GenerativeImageResultsResponseAssets>;
}
/**
 * @export
 * @namespace InlineResponse20048
 */
export declare namespace InlineResponse20048 {
    /**
     * @export
     * @enum {string}
     */
    enum StatusEnum {
        PENDING,
        GENERATING,
        COMPLETED
    }
}
/**
 * List of image generation history records.
 * @export
 * @interface InlineResponse20049
 */
export interface InlineResponse20049 {
    /**
     * Image generation history records.
     * @type {Array<GenerativeImagesHistoryResponseData>}
     * @memberof InlineResponse20049
     */
    data: Array<GenerativeImagesHistoryResponseData>;
    /**
     * The current page of results.
     * @type {number}
     * @memberof InlineResponse20049
     */
    page: number;
    /**
     * The number of results per page.
     * @type {number}
     * @memberof InlineResponse20049
     */
    per_page: number;
    /**
     * The total number of results across all pages.
     * @type {number}
     * @memberof InlineResponse20049
     */
    total_count: number;
}
/**
 * Information about an image
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * Date that the image was added by the contributor
     * @type {string}
     * @memberof InlineResponse2005
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof InlineResponse2005
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of the image in decimal format, such as 0.6667
     * @type {number}
     * @memberof InlineResponse2005
     */
    aspect?: number;
    /**
     *
     * @type {ImageAssets}
     * @memberof InlineResponse2005
     */
    assets?: ImageAssets;
    /**
     * Categories that this image is a part of
     * @type {Array<CategoryDataListData>}
     * @memberof InlineResponse2005
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof InlineResponse2005
     */
    contributor: AudioContributor;
    /**
     * Detailed description of the image
     * @type {string}
     * @memberof InlineResponse2005
     */
    description?: string;
    /**
     * Indicates whether there are model releases for the image
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    has_model_release?: boolean;
    /**
     * Indicates whether there are property releases for the image
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    has_property_release?: boolean;
    /**
     * Image ID
     * @type {string}
     * @memberof InlineResponse2005
     */
    id: string;
    /**
     * Type of image
     * @type {string}
     * @memberof InlineResponse2005
     */
    image_type?: string;
    /**
     * Whether or not this image contains adult content
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    is_adult?: boolean;
    /**
     * Whether or not this image is editorial content
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    is_editorial?: boolean;
    /**
     * Whether or not this image is an illustration
     * @type {boolean}
     * @memberof InlineResponse2005
     */
    is_illustration?: boolean;
    /**
     * Asset collection for this image
     * @type {string}
     * @memberof InlineResponse2005
     */
    asset_collection?: InlineResponse2005.AssetCollectionEnum;
    /**
     *
     * @type {ImageAiIpReview}
     * @memberof InlineResponse2005
     */
    ai_ip_review?: ImageAiIpReview;
    /**
     * Keywords associated with the content of this image
     * @type {Array<string>}
     * @memberof InlineResponse2005
     */
    keywords?: Array<string>;
    /**
     * Media type of this image, should always be \"image\"
     * @type {string}
     * @memberof InlineResponse2005
     */
    media_type: string;
    /**
     * List of model releases
     * @type {Array<AudioModelReleases>}
     * @memberof InlineResponse2005
     */
    model_releases?: Array<AudioModelReleases>;
    /**
     * List of models
     * @type {Array<ImageModels>}
     * @memberof InlineResponse2005
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this image
     * @type {Array<string>}
     * @memberof InlineResponse2005
     */
    releases?: Array<string>;
    /**
     * Link to image information page; included only for certain accounts
     * @type {string}
     * @memberof InlineResponse2005
     */
    url?: string;
}
/**
 * @export
 * @namespace InlineResponse2005
 */
export declare namespace InlineResponse2005 {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Starter,
        Essentials,
        Choice,
        Offset
    }
}
/**
 * List of keywords
 * @export
 * @interface InlineResponse20050
 */
export interface InlineResponse20050 {
    /**
     * Keywords
     * @type {Array<string>}
     * @memberof InlineResponse20050
     */
    data?: Array<string>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20050
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse20050
     */
    message?: string;
}
/**
 * List of catalog collection items
 * @export
 * @interface InlineResponse20051
 */
export interface InlineResponse20051 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse20051
     */
    page: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20051
     */
    per_page: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20051
     */
    total_count: number;
    /**
     * List of catalog collection items
     * @type {Array<CatalogCollectionCoverAsset>}
     * @memberof InlineResponse20051
     */
    data: Array<CatalogCollectionCoverAsset>;
}
/**
 * List of catalog collections
 * @export
 * @interface InlineResponse20052
 */
export interface InlineResponse20052 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse20052
     */
    page: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20052
     */
    per_page: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse20052
     */
    total_count: number;
    /**
     * List of catalog collections
     * @type {Array<CatalogCollectionDataListData>}
     * @memberof InlineResponse20052
     */
    data: Array<CatalogCollectionDataListData>;
}
/**
 * List of contributor profiles
 * @export
 * @interface InlineResponse20053
 */
export interface InlineResponse20053 {
    /**
     * Contributor profiles
     * @type {Array<ContributorProfileDataListData>}
     * @memberof InlineResponse20053
     */
    data?: Array<ContributorProfileDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20053
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Error message
     * @type {string}
     * @memberof InlineResponse20053
     */
    message?: string;
    /**
     * Page of response
     * @type {number}
     * @memberof InlineResponse20053
     */
    page?: number;
    /**
     * Number of contributors per page
     * @type {number}
     * @memberof InlineResponse20053
     */
    per_page?: number;
    /**
     * Total count of contributors for this request
     * @type {number}
     * @memberof InlineResponse20053
     */
    total_count?: number;
}
/**
 * Contributor profile data
 * @export
 * @interface InlineResponse20054
 */
export interface InlineResponse20054 {
    /**
     * Short description of the contributors' library
     * @type {string}
     * @memberof InlineResponse20054
     */
    about?: string;
    /**
     * Type of content that the contributor specializes in (photographer, illustrator, etc)
     * @type {Array<string>}
     * @memberof InlineResponse20054
     */
    contributor_type?: Array<string>;
    /**
     * Preferred name to be displayed for the contributor
     * @type {string}
     * @memberof InlineResponse20054
     */
    display_name?: string;
    /**
     * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
     * @type {Array<string>}
     * @memberof InlineResponse20054
     */
    equipment?: Array<string>;
    /**
     * Contributor ID
     * @type {string}
     * @memberof InlineResponse20054
     */
    id: string;
    /**
     * Country code representing the contributor's locale
     * @type {string}
     * @memberof InlineResponse20054
     */
    location?: string;
    /**
     * Web URL for the contributors' profile
     * @type {string}
     * @memberof InlineResponse20054
     */
    portfolio_url?: string;
    /**
     *
     * @type {ContributorProfileSocialMedia}
     * @memberof InlineResponse20054
     */
    social_media?: ContributorProfileSocialMedia;
    /**
     * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
     * @type {Array<string>}
     * @memberof InlineResponse20054
     */
    styles?: Array<string>;
    /**
     * Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
     * @type {Array<string>}
     * @memberof InlineResponse20054
     */
    subjects?: Array<string>;
    /**
     * Personal website for the contributor
     * @type {string}
     * @memberof InlineResponse20054
     */
    website?: string;
}
/**
 * User details
 * @export
 * @interface InlineResponse20055
 */
export interface InlineResponse20055 {
    /**
     * Unique internal identifier of the user, as a contributor
     * @type {string}
     * @memberof InlineResponse20055
     */
    contributor_id?: string;
    /**
     * Unique internal identifier of the user, as a purchaser
     * @type {string}
     * @memberof InlineResponse20055
     */
    customer_id?: string;
    /**
     * Email address of the user
     * @type {string}
     * @memberof InlineResponse20055
     */
    email?: string;
    /**
     * First name of the user
     * @type {string}
     * @memberof InlineResponse20055
     */
    first_name?: string;
    /**
     * Full name including first, middle, and last name of the user
     * @type {string}
     * @memberof InlineResponse20055
     */
    full_name?: string;
    /**
     * Unique internal identifier for the user, not tied to contributor or purchasing customer
     * @type {string}
     * @memberof InlineResponse20055
     */
    id?: string;
    /**
     * True if the user has access to the Premier collection, false otherwise
     * @type {boolean}
     * @memberof InlineResponse20055
     */
    is_premier?: boolean;
    /**
     * True if the user has access to the Premier collection and also has child users
     * @type {boolean}
     * @memberof InlineResponse20055
     */
    is_premier_parent?: boolean;
    /**
     * Main language of the user account
     * @type {string}
     * @memberof InlineResponse20055
     */
    language?: string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof InlineResponse20055
     */
    last_name?: string;
    /**
     * True if the user has an enterprise license, false otherwise
     * @type {boolean}
     * @memberof InlineResponse20055
     */
    only_enhanced_license?: boolean;
    /**
     * True if the user has access to sensitive use only, false otherwise
     * @type {boolean}
     * @memberof InlineResponse20055
     */
    only_sensitive_use?: boolean;
    /**
     * Unique internal identifier for the user's organization, specific to Premier users
     * @type {string}
     * @memberof InlineResponse20055
     */
    organization_id?: string;
    /**
     * List of permissions allowed through the Premier client
     * @type {Array<string>}
     * @memberof InlineResponse20055
     */
    premier_permissions?: Array<string>;
    /**
     * User name associated to the user
     * @type {string}
     * @memberof InlineResponse20055
     */
    username?: string;
}
/**
 * Access token details that are currently associated with this user
 * @export
 * @interface InlineResponse20056
 */
export interface InlineResponse20056 {
    /**
     * Client ID that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    client_id?: string;
    /**
     * Contributor ID that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    contributor_id?: string;
    /**
     * Customer ID that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    customer_id?: string;
    /**
     * Number of seconds until the access token expires; no expiration if this value is null
     * @type {number}
     * @memberof InlineResponse20056
     */
    expires_in?: number;
    /**
     * Organization ID that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    organization_id?: string;
    /**
     * Type of access token
     * @type {string}
     * @memberof InlineResponse20056
     */
    realm?: InlineResponse20056.RealmEnum;
    /**
     * Scopes that this access token provides when used as authentication
     * @type {Array<string>}
     * @memberof InlineResponse20056
     */
    scopes?: Array<string>;
    /**
     * User ID that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    user_id?: string;
    /**
     * User name that is associated with the user
     * @type {string}
     * @memberof InlineResponse20056
     */
    username?: string;
}
/**
 * @export
 * @namespace InlineResponse20056
 */
export declare namespace InlineResponse20056 {
    /**
     * @export
     * @enum {string}
     */
    enum RealmEnum {
        Customer,
        Contributor
    }
}
/**
 * List of subscriptions
 * @export
 * @interface InlineResponse20057
 */
export interface InlineResponse20057 {
    /**
     * Subscriptions retrieved from this user
     * @type {Array<SubscriptionDataListData>}
     * @memberof InlineResponse20057
     */
    data?: Array<SubscriptionDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20057
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20057
     */
    message?: string;
    /**
     * Current page that is being queried
     * @type {number}
     * @memberof InlineResponse20057
     */
    page?: number;
    /**
     * Amount of subscriptions to show per page
     * @type {number}
     * @memberof InlineResponse20057
     */
    per_page?: number;
    /**
     * Total number of subscriptions for this user
     * @type {number}
     * @memberof InlineResponse20057
     */
    total_count?: number;
}
/**
 * Text to echo in the response
 * @export
 * @interface InlineResponse20058
 */
export interface InlineResponse20058 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse20058
     */
    text?: string;
}
/**
 * Validation results
 * @export
 * @interface InlineResponse20059
 */
export interface InlineResponse20059 {
    /**
     *
     * @type {TestValidateHeader}
     * @memberof InlineResponse20059
     */
    header?: TestValidateHeader;
    /**
     *
     * @type {TestValidateQuery}
     * @memberof InlineResponse20059
     */
    query?: TestValidateQuery;
}
/**
 * List of categories that images can belong to
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * Categories
     * @type {Array<CategoryDataListData>}
     * @memberof InlineResponse2006
     */
    data?: Array<CategoryDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse2006
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse2006
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof InlineResponse2006
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof InlineResponse2006
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof InlineResponse2006
     */
    total_count?: number;
}
/**
 * Access token response to client apps
 * @export
 * @interface InlineResponse20060
 */
export interface InlineResponse20060 {
    /**
     * Access token that can be used for future requests
     * @type {string}
     * @memberof InlineResponse20060
     */
    access_token: string;
    /**
     * Number of seconds before token expires, only present for expiring tokens
     * @type {number}
     * @memberof InlineResponse20060
     */
    expires_in?: number;
    /**
     * Type of token
     * @type {string}
     * @memberof InlineResponse20060
     */
    token_type: string;
    /**
     * A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens
     * @type {string}
     * @memberof InlineResponse20060
     */
    refresh_token?: string;
    /**
     * Metadata about the access_token, only present for expiring tokens
     * @type {string}
     * @memberof InlineResponse20060
     */
    user_token?: string;
}
/**
 * List of editorial livefeeds
 * @export
 * @interface InlineResponse20061
 */
export interface InlineResponse20061 {
    /**
     * Editorial livefeeds
     * @type {Array<EditorialImageLivefeedListData>}
     * @memberof InlineResponse20061
     */
    data: Array<EditorialImageLivefeedListData>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20061
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20061
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20061
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20061
     */
    total_count: number;
}
/**
 * List of editorial items
 * @export
 * @interface InlineResponse20062
 */
export interface InlineResponse20062 {
    /**
     * Editorial items
     * @type {Array<EditorialContentDataListData>}
     * @memberof InlineResponse20062
     */
    data?: Array<EditorialContentDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse20062
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof InlineResponse20062
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof InlineResponse20062
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse20062
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof InlineResponse20062
     */
    total_count?: number;
}
/**
 * List of editorial categories
 * @export
 * @interface InlineResponse20063
 */
export interface InlineResponse20063 {
    /**
     * List of editorial categories
     * @type {Array<EditorialCategoryResultsData>}
     * @memberof InlineResponse20063
     */
    data?: Array<EditorialCategoryResultsData>;
}
/**
 * List of download events
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * Download events
     * @type {Array<DownloadHistoryDataListData>}
     * @memberof InlineResponse2007
     */
    data?: Array<DownloadHistoryDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse2007
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse2007
     */
    message?: string;
    /**
     * The current page of results
     * @type {number}
     * @memberof InlineResponse2007
     */
    page?: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof InlineResponse2007
     */
    per_page?: number;
    /**
     * The total number of results across all pages
     * @type {number}
     * @memberof InlineResponse2007
     */
    total_count?: number;
}
/**
 * List of information about licensed images
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * License results
     * @type {Array<LicenseImageResultDataListData>}
     * @memberof InlineResponse2008
     */
    data?: Array<LicenseImageResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof InlineResponse2008
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof InlineResponse2008
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InlineResponse2008
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InlineResponse2008
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof InlineResponse2008
     */
    total_count?: number;
}
/**
 * URL object
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof InlineResponse2009
     */
    url: string;
}
/**
 * Collection creation response
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     * ID of the new collection
     * @type {string}
     * @memberof InlineResponse201
     */
    id: string;
}
/**
 *
 * @export
 * @interface InlineResponse2011
 */
export interface InlineResponse2011 {
    /**
     * The UUID of the generation request.
     * @type {string}
     * @memberof InlineResponse2011
     */
    id: string;
}
/**
 * Asset upload information
 * @export
 * @interface InlineResponse2012
 */
export interface InlineResponse2012 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse2012
     */
    upload_id: string;
}
/**
 * Catalog collection
 * @export
 * @interface InlineResponse2013
 */
export interface InlineResponse2013 {
    /**
     *
     * @type {string}
     * @memberof InlineResponse2013
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2013
     */
    name: string;
    /**
     *
     * @type {CatalogCollectionCoverAsset}
     * @memberof InlineResponse2013
     */
    cover_asset?: CatalogCollectionCoverAsset;
    /**
     *
     * @type {number}
     * @memberof InlineResponse2013
     */
    total_item_count: number;
    /**
     *
     * @type {Date}
     * @memberof InlineResponse2013
     */
    created_time: Date;
    /**
     *
     * @type {Date}
     * @memberof InlineResponse2013
     */
    updated_time: Date;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2013
     */
    visibility: InlineResponse2013.VisibilityEnum;
    /**
     *
     * @type {CatalogCollectionRoleAssignments}
     * @memberof InlineResponse2013
     */
    role_assignments: CatalogCollectionRoleAssignments;
}
/**
 * @export
 * @namespace InlineResponse2013
 */
export declare namespace InlineResponse2013 {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * List of instruments
 * @export
 * @interface InstrumentList
 */
export interface InstrumentList {
    /**
     * List of instruments
     * @type {Array<string>}
     * @memberof InstrumentList
     */
    data: Array<string>;
}
/**
 * List of keywords
 * @export
 * @interface KeywordDataList
 */
export interface KeywordDataList {
    /**
     * Keywords
     * @type {Array<string>}
     * @memberof KeywordDataList
     */
    data?: Array<string>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof KeywordDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof KeywordDataList
     */
    message?: string;
}
/**
 * Language code
 * @export
 * @enum {string}
 */
export declare const enum Language {
    Ar = "ar",
    Bg = "bg",
    Bn = "bn",
    Cs = "cs",
    Da = "da",
    De = "de",
    El = "el",
    En = "en",
    Es = "es",
    Fi = "fi",
    Fr = "fr",
    Gu = "gu",
    He = "he",
    Hi = "hi",
    Hr = "hr",
    Hu = "hu",
    Id = "id",
    It = "it",
    Ja = "ja",
    Kn = "kn",
    Ko = "ko",
    Ml = "ml",
    Mr = "mr",
    Nb = "nb",
    Nl = "nl",
    Or = "or",
    Pl = "pl",
    Pt = "pt",
    Ro = "ro",
    Ru = "ru",
    Sk = "sk",
    Sl = "sl",
    Sv = "sv",
    Ta = "ta",
    Te = "te",
    Th = "th",
    Tr = "tr",
    Uk = "uk",
    Ur = "ur",
    Vi = "vi",
    Zh = "zh",
    ZhHant = "zh-Hant"
}
/**
 * An audio track in a licensing request
 * @export
 * @interface LicenseAudio
 */
export interface LicenseAudio {
    /**
     * ID of the track being licensed
     * @type {string}
     * @memberof LicenseAudio
     */
    audio_id: string;
    /**
     * Type of license
     * @type {string}
     * @memberof LicenseAudio
     */
    license?: LicenseAudio.LicenseEnum;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof LicenseAudio
     */
    search_id?: string;
}
/**
 * @export
 * @namespace LicenseAudio
 */
export declare namespace LicenseAudio {
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        AudioPlatform,
        PremierMusicBasic,
        PremierMusicExtended,
        PremierMusicPro,
        PremierMusicComp,
        AssetAllMusic
    }
}
/**
 * Audio license request data
 * @export
 * @interface LicenseAudioRequest
 */
export interface LicenseAudioRequest {
    /**
     * List of audio tracks to license
     * @type {Array<V2audiolicensesAudio>}
     * @memberof LicenseAudioRequest
     */
    audio: Array<V2audiolicensesAudio>;
}
/**
 * The response to a licensing request for an audio track
 * @export
 * @interface LicenseAudioResult
 */
export interface LicenseAudioResult {
    /**
     * ID of the track that was licensed
     * @type {string}
     * @memberof LicenseAudioResult
     */
    audio_id: string;
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseAudioResult
     */
    allotment_charge?: number;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseAudioResult
     */
    license_id?: string;
    /**
     *
     * @type {LicenseAudioResultDownload}
     * @memberof LicenseAudioResult
     */
    download?: LicenseAudioResultDownload;
    /**
     * Error information if applicable
     * @type {string}
     * @memberof LicenseAudioResult
     */
    error?: string;
}
/**
 * List of audio license results
 * @export
 * @interface LicenseAudioResultDataList
 */
export interface LicenseAudioResultDataList {
    /**
     * License results
     * @type {Array<LicenseAudioResultDataListData>}
     * @memberof LicenseAudioResultDataList
     */
    data?: Array<LicenseAudioResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof LicenseAudioResultDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof LicenseAudioResultDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    total_count?: number;
}
/**
 * The response to a licensing request for an audio track
 * @export
 * @interface LicenseAudioResultDataListData
 */
export interface LicenseAudioResultDataListData {
    /**
     * ID of the track that was licensed
     * @type {string}
     * @memberof LicenseAudioResultDataListData
     */
    audio_id: string;
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseAudioResultDataListData
     */
    allotment_charge?: number;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseAudioResultDataListData
     */
    license_id?: string;
    /**
     *
     * @type {LicenseAudioResultDownload}
     * @memberof LicenseAudioResultDataListData
     */
    download?: LicenseAudioResultDownload;
    /**
     * Error information if applicable
     * @type {string}
     * @memberof LicenseAudioResultDataListData
     */
    error?: string;
}
/**
 * Audio License URL object
 * @export
 * @interface LicenseAudioResultDownload
 */
export interface LicenseAudioResultDownload {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof LicenseAudioResultDownload
     */
    url: string;
    /**
     * URL that can be used to download the .zip file containing shorts, loops, and stems
     * @type {string}
     * @memberof LicenseAudioResultDownload
     */
    shorts_loops_stems?: string;
}
/**
 * Individual editorial content to license
 * @export
 * @interface LicenseEditorialContent
 */
export interface LicenseEditorialContent {
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    editorial_id: string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    license: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof LicenseEditorialContent
     */
    metadata?: any;
    /**
     * Asset size to download
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    size?: LicenseEditorialContent.SizeEnum;
}
/**
 * @export
 * @namespace LicenseEditorialContent
 */
export declare namespace LicenseEditorialContent {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Original
    }
}
/**
 * License editorial content request
 * @export
 * @interface LicenseEditorialContentRequest
 */
export interface LicenseEditorialContentRequest {
    /**
     * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
     * @type {string}
     * @memberof LicenseEditorialContentRequest
     */
    country: string;
    /**
     * Editorial content to license
     * @type {Array<V2editorialimageslicensesEditorial>}
     * @memberof LicenseEditorialContentRequest
     */
    editorial: Array<V2editorialimageslicensesEditorial>;
}
/**
 * The response to a licensing request for editorial content
 * @export
 * @interface LicenseEditorialContentResult
 */
export interface LicenseEditorialContentResult {
    /**
     * For pre-paid plans, how many credits were used for the item license
     * @type {number}
     * @memberof LicenseEditorialContentResult
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseEditorialContentResultDownload}
     * @memberof LicenseEditorialContentResult
     */
    download?: LicenseEditorialContentResultDownload;
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialContentResult
     */
    editorial_id: string;
    /**
     *
     * @type {string}
     * @memberof LicenseEditorialContentResult
     */
    error?: string;
}
/**
 * Information that is needed to download the image
 * @export
 * @interface LicenseEditorialContentResultDownload
 */
export interface LicenseEditorialContentResultDownload {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof LicenseEditorialContentResultDownload
     */
    url: string;
}
/**
 * List of editorial license results
 * @export
 * @interface LicenseEditorialContentResults
 */
export interface LicenseEditorialContentResults {
    /**
     * License results
     * @type {Array<LicenseEditorialContentResultsData>}
     * @memberof LicenseEditorialContentResults
     */
    data?: Array<LicenseEditorialContentResultsData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof LicenseEditorialContentResults
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof LicenseEditorialContentResults
     */
    message?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof LicenseEditorialContentResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof LicenseEditorialContentResults
     */
    per_page?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof LicenseEditorialContentResults
     */
    total_count?: number;
}
/**
 * The response to a licensing request for editorial content
 * @export
 * @interface LicenseEditorialContentResultsData
 */
export interface LicenseEditorialContentResultsData {
    /**
     * For pre-paid plans, how many credits were used for the item license
     * @type {number}
     * @memberof LicenseEditorialContentResultsData
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseEditorialContentResultDownload}
     * @memberof LicenseEditorialContentResultsData
     */
    download?: LicenseEditorialContentResultDownload;
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialContentResultsData
     */
    editorial_id: string;
    /**
     *
     * @type {string}
     * @memberof LicenseEditorialContentResultsData
     */
    error?: string;
}
/**
 * Individual editorial video content to license
 * @export
 * @interface LicenseEditorialVideoContent
 */
export interface LicenseEditorialVideoContent {
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    editorial_id: string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    license: LicenseEditorialVideoContent.LicenseEnum;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof LicenseEditorialVideoContent
     */
    metadata?: any;
    /**
     * Asset size to download
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    size?: LicenseEditorialVideoContent.SizeEnum;
}
/**
 * @export
 * @namespace LicenseEditorialVideoContent
 */
export declare namespace LicenseEditorialVideoContent {
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        DigitalOnly,
        AllMedia,
        AllMediaSingleTerritory,
        Comp
    }
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Original
    }
}
/**
 * License editorial video content request
 * @export
 * @interface LicenseEditorialVideoContentRequest
 */
export interface LicenseEditorialVideoContentRequest {
    /**
     * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
     * @type {string}
     * @memberof LicenseEditorialVideoContentRequest
     */
    country: string;
    /**
     * Editorial content to license
     * @type {Array<V2editorialvideoslicensesEditorial>}
     * @memberof LicenseEditorialVideoContentRequest
     */
    editorial: Array<V2editorialvideoslicensesEditorial>;
}
/**
 * Description of a license
 * @export
 * @interface LicenseFormat
 */
export interface LicenseFormat {
    /**
     * Description of the license
     * @type {string}
     * @memberof LicenseFormat
     */
    description?: string;
    /**
     * Format or extension of the media, such as mpeg for videos or jpeg for images
     * @type {string}
     * @memberof LicenseFormat
     */
    format?: string;
    /**
     * Media type of the license
     * @type {string}
     * @memberof LicenseFormat
     */
    media_type?: LicenseFormat.MediaTypeEnum;
    /**
     * Width of the media, in pixels, allowed by this license
     * @type {number}
     * @memberof LicenseFormat
     */
    min_resolution?: number;
    /**
     * Keyword that details the size of the media, such as hd or sd for video, huge or vector for images
     * @type {string}
     * @memberof LicenseFormat
     */
    size?: string;
}
/**
 * @export
 * @namespace LicenseFormat
 */
export declare namespace LicenseFormat {
    /**
     * @export
     * @enum {string}
     */
    enum MediaTypeEnum {
        Image,
        Video,
        Audio,
        Editorial
    }
}
/**
 * Data required to license an image
 * @export
 * @interface LicenseImage
 */
export interface LicenseImage {
    /**
     *
     * @type {V2videoslicensesAuthCookie}
     * @memberof LicenseImage
     */
    auth_cookie?: V2videoslicensesAuthCookie;
    /**
     * Set to true to acknowledge the editorial agreement
     * @type {boolean}
     * @memberof LicenseImage
     */
    editorial_acknowledgement?: boolean;
    /**
     * This must be set to true to license an AI-generated asset. It confirms: I acknowledge that AI-generated content is not reviewed by Shutterstock's content compliance team for intellectual property compliance unless otherwise stated, and should not be used publicly if it contains the likeness of a brand, public personality, or other protected content.
     * @type {boolean}
     * @memberof LicenseImage
     */
    ai_use_acknowledgement?: boolean;
    /**
     * (Deprecated) Image format to download
     * @type {string}
     * @memberof LicenseImage
     */
    format?: LicenseImage.FormatEnum;
    /**
     * Image ID
     * @type {string}
     * @memberof LicenseImage
     */
    image_id: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof LicenseImage
     */
    metadata?: any;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     * @type {number}
     * @memberof LicenseImage
     */
    price?: number;
    /**
     * ID of the search that led to this licensing transaction
     * @type {string}
     * @memberof LicenseImage
     */
    search_id?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof LicenseImage
     */
    show_modal?: boolean;
    /**
     * Image size to download
     * @type {string}
     * @memberof LicenseImage
     */
    size?: LicenseImage.SizeEnum;
    /**
     *
     * @type {V2generativeimageslicensesCustomDimensions}
     * @memberof LicenseImage
     */
    custom_dimensions?: V2generativeimageslicensesCustomDimensions;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof LicenseImage
     */
    subscription_id?: string;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof LicenseImage
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace LicenseImage
 */
export declare namespace LicenseImage {
    /**
     * @export
     * @enum {string}
     */
    enum FormatEnum {
        Jpg
    }
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Huge,
        Custom
    }
}
/**
 * Image license request data
 * @export
 * @interface LicenseImageRequest
 */
export interface LicenseImageRequest {
    /**
     * Images to create licenses for
     * @type {Array<any>}
     * @memberof LicenseImageRequest
     */
    images: Array<any>;
}
/**
 * The response to a licensing request for an image
 * @export
 * @interface LicenseImageResult
 */
export interface LicenseImageResult {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseImageResult
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseEditorialContentResultDownload}
     * @memberof LicenseImageResult
     */
    download?: LicenseEditorialContentResultDownload;
    /**
     * Error message, appears only if there was an error
     * @type {string}
     * @memberof LicenseImageResult
     */
    error?: string;
    /**
     * Image ID that was licensed
     * @type {string}
     * @memberof LicenseImageResult
     */
    image_id: string;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseImageResult
     */
    license_id?: string;
    /**
     *
     * @type {LicenseImageResultPrice}
     * @memberof LicenseImageResult
     */
    price?: LicenseImageResultPrice;
}
/**
 * List of information about licensed images
 * @export
 * @interface LicenseImageResultDataList
 */
export interface LicenseImageResultDataList {
    /**
     * License results
     * @type {Array<LicenseImageResultDataListData>}
     * @memberof LicenseImageResultDataList
     */
    data?: Array<LicenseImageResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof LicenseImageResultDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof LicenseImageResultDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof LicenseImageResultDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof LicenseImageResultDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof LicenseImageResultDataList
     */
    total_count?: number;
}
/**
 * The response to a licensing request for an image
 * @export
 * @interface LicenseImageResultDataListData
 */
export interface LicenseImageResultDataListData {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseImageResultDataListData
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseEditorialContentResultDownload}
     * @memberof LicenseImageResultDataListData
     */
    download?: LicenseEditorialContentResultDownload;
    /**
     * Error message, appears only if there was an error
     * @type {string}
     * @memberof LicenseImageResultDataListData
     */
    error?: string;
    /**
     * Image ID that was licensed
     * @type {string}
     * @memberof LicenseImageResultDataListData
     */
    image_id: string;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseImageResultDataListData
     */
    license_id?: string;
    /**
     *
     * @type {LicenseImageResultPrice}
     * @memberof LicenseImageResultDataListData
     */
    price?: LicenseImageResultPrice;
}
/**
 * Wholesale price information; only for rev-share partners
 * @export
 * @interface LicenseImageResultPrice
 */
export interface LicenseImageResultPrice {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof LicenseImageResultPrice
     */
    local_amount?: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof LicenseImageResultPrice
     */
    local_currency?: string;
    /**
     * Prices by content tier
     * @type {{ [key: string]: GenerativeImageLicenseResultPriceContentTiers; }}
     * @memberof LicenseImageResultPrice
     */
    content_tiers?: {
        [key: string]: GenerativeImageLicenseResultPriceContentTiers;
    };
}
/**
 * Data required to license an image
 * @export
 * @interface LicenseImageVector
 */
export interface LicenseImageVector {
    /**
     *
     * @type {V2videoslicensesAuthCookie}
     * @memberof LicenseImageVector
     */
    auth_cookie?: V2videoslicensesAuthCookie;
    /**
     * Set to true to acknowledge the editorial agreement
     * @type {boolean}
     * @memberof LicenseImageVector
     */
    editorial_acknowledgement?: boolean;
    /**
     * This must be set to true to license an AI-generated asset. It confirms: I acknowledge that AI-generated content is not reviewed by Shutterstock's content compliance team for intellectual property compliance unless otherwise stated, and should not be used publicly if it contains the likeness of a brand, public personality, or other protected content.
     * @type {boolean}
     * @memberof LicenseImageVector
     */
    ai_use_acknowledgement?: boolean;
    /**
     * (Deprecated) Image format to download
     * @type {string}
     * @memberof LicenseImageVector
     */
    format?: LicenseImageVector.FormatEnum;
    /**
     * Image ID
     * @type {string}
     * @memberof LicenseImageVector
     */
    image_id: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof LicenseImageVector
     */
    metadata?: any;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     * @type {number}
     * @memberof LicenseImageVector
     */
    price?: number;
    /**
     * ID of the search that led to this licensing transaction
     * @type {string}
     * @memberof LicenseImageVector
     */
    search_id?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof LicenseImageVector
     */
    show_modal?: boolean;
    /**
     * Image size to download
     * @type {string}
     * @memberof LicenseImageVector
     */
    size?: LicenseImageVector.SizeEnum;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof LicenseImageVector
     */
    subscription_id?: string;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof LicenseImageVector
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace LicenseImageVector
 */
export declare namespace LicenseImageVector {
    /**
     * @export
     * @enum {string}
     */
    enum FormatEnum {
        Eps
    }
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Vector
    }
}
/**
 * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
 * @export
 * @interface LicenseRequestMetadata
 */
export interface LicenseRequestMetadata {
}
/**
 *
 * @export
 * @interface LicenseSFX
 */
export interface LicenseSFX {
    /**
     * ID of the sounds effect being licensed
     * @type {string}
     * @memberof LicenseSFX
     */
    sfx_id: string;
    /**
     *
     * @type {string}
     * @memberof LicenseSFX
     */
    audio_layout?: LicenseSFX.AudioLayoutEnum;
    /**
     *
     * @type {string}
     * @memberof LicenseSFX
     */
    format?: LicenseSFX.FormatEnum;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof LicenseSFX
     */
    search_id?: string;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof LicenseSFX
     */
    subscription_id: string;
}
/**
 * @export
 * @namespace LicenseSFX
 */
export declare namespace LicenseSFX {
    /**
     * @export
     * @enum {string}
     */
    enum AudioLayoutEnum {
        Ambisonic,
        _51,
        Stereo
    }
    /**
     * @export
     * @enum {string}
     */
    enum FormatEnum {
        Wav,
        Mp3
    }
}
/**
 * License sounds effect asset request body
 * @export
 * @interface LicenseSFXRequest
 */
export interface LicenseSFXRequest {
    /**
     * Sound effects to license for
     * @type {Array<V2sfxlicensesSoundEffects>}
     * @memberof LicenseSFXRequest
     */
    sound_effects: Array<V2sfxlicensesSoundEffects>;
}
/**
 * The response to a licensing request for an sound effects
 * @export
 * @interface LicenseSFXResult
 */
export interface LicenseSFXResult {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseSFXResult
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseSFXResultDownload}
     * @memberof LicenseSFXResult
     */
    download?: LicenseSFXResultDownload;
    /**
     * Error message, appears only if there was an error
     * @type {string}
     * @memberof LicenseSFXResult
     */
    error?: string;
    /**
     * Sound effects ID that was licensed
     * @type {string}
     * @memberof LicenseSFXResult
     */
    sfx_id: string;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseSFXResult
     */
    license_id?: string;
}
/**
 * List of information about licensed sound effects
 * @export
 * @interface LicenseSFXResultDataList
 */
export interface LicenseSFXResultDataList {
    /**
     * Sound effects license results
     * @type {Array<LicenseSFXResultDataListData>}
     * @memberof LicenseSFXResultDataList
     */
    data?: Array<LicenseSFXResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof LicenseSFXResultDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof LicenseSFXResultDataList
     */
    message?: string;
}
/**
 * The response to a licensing request for an sound effects
 * @export
 * @interface LicenseSFXResultDataListData
 */
export interface LicenseSFXResultDataListData {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseSFXResultDataListData
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseSFXResultDownload}
     * @memberof LicenseSFXResultDataListData
     */
    download?: LicenseSFXResultDownload;
    /**
     * Error message, appears only if there was an error
     * @type {string}
     * @memberof LicenseSFXResultDataListData
     */
    error?: string;
    /**
     * Sound effects ID that was licensed
     * @type {string}
     * @memberof LicenseSFXResultDataListData
     */
    sfx_id: string;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseSFXResultDataListData
     */
    license_id?: string;
}
/**
 * Information that is needed to download the sound effects
 * @export
 * @interface LicenseSFXResultDownload
 */
export interface LicenseSFXResultDownload {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof LicenseSFXResultDownload
     */
    url: string;
}
/**
 * Data required to license a video
 * @export
 * @interface LicenseVideo
 */
export interface LicenseVideo {
    /**
     *
     * @type {V2videoslicensesAuthCookie}
     * @memberof LicenseVideo
     */
    auth_cookie?: V2videoslicensesAuthCookie;
    /**
     * Whether or not this item is editorial content
     * @type {boolean}
     * @memberof LicenseVideo
     */
    editorial_acknowledgement?: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof LicenseVideo
     */
    metadata?: any;
    /**
     * Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners
     * @type {number}
     * @memberof LicenseVideo
     */
    price?: number;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof LicenseVideo
     */
    search_id?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof LicenseVideo
     */
    show_modal?: boolean;
    /**
     * Size of the video being licensed
     * @type {string}
     * @memberof LicenseVideo
     */
    size?: LicenseVideo.SizeEnum;
    /**
     * ID of the subscription used for this license
     * @type {string}
     * @memberof LicenseVideo
     */
    subscription_id?: string;
    /**
     * ID of the video being licensed
     * @type {string}
     * @memberof LicenseVideo
     */
    video_id: string;
}
/**
 * @export
 * @namespace LicenseVideo
 */
export declare namespace LicenseVideo {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Web,
        Sd,
        Hd,
        _4k
    }
}
/**
 * List of videos to license
 * @export
 * @interface LicenseVideoRequest
 */
export interface LicenseVideoRequest {
    /**
     * Videos to license
     * @type {Array<V2videoslicensesVideos>}
     * @memberof LicenseVideoRequest
     */
    videos: Array<V2videoslicensesVideos>;
}
/**
 * The response to a licensing request for a video
 * @export
 * @interface LicenseVideoResult
 */
export interface LicenseVideoResult {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseVideoResult
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof LicenseVideoResult
     */
    download?: LicenseVideoResultDownload;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseVideoResult
     */
    license_id?: string;
    /**
     * Potential error that occurred during licensing
     * @type {string}
     * @memberof LicenseVideoResult
     */
    error?: string;
    /**
     *
     * @type {LicenseVideoResultPrice}
     * @memberof LicenseVideoResult
     */
    price?: LicenseVideoResultPrice;
    /**
     * ID of the video that was licensed
     * @type {string}
     * @memberof LicenseVideoResult
     */
    video_id: string;
}
/**
 * List of video license results
 * @export
 * @interface LicenseVideoResultDataList
 */
export interface LicenseVideoResultDataList {
    /**
     * License results
     * @type {Array<LicenseVideoResultDataListData>}
     * @memberof LicenseVideoResultDataList
     */
    data?: Array<LicenseVideoResultDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof LicenseVideoResultDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof LicenseVideoResultDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof LicenseVideoResultDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof LicenseVideoResultDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof LicenseVideoResultDataList
     */
    total_count?: number;
}
/**
 * The response to a licensing request for a video
 * @export
 * @interface LicenseVideoResultDataListData
 */
export interface LicenseVideoResultDataListData {
    /**
     * Number of credits that this licensing event used
     * @type {number}
     * @memberof LicenseVideoResultDataListData
     */
    allotment_charge?: number;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof LicenseVideoResultDataListData
     */
    download?: LicenseVideoResultDownload;
    /**
     * ID of the license event
     * @type {string}
     * @memberof LicenseVideoResultDataListData
     */
    license_id?: string;
    /**
     * Potential error that occurred during licensing
     * @type {string}
     * @memberof LicenseVideoResultDataListData
     */
    error?: string;
    /**
     *
     * @type {LicenseVideoResultPrice}
     * @memberof LicenseVideoResultDataListData
     */
    price?: LicenseVideoResultPrice;
    /**
     * ID of the video that was licensed
     * @type {string}
     * @memberof LicenseVideoResultDataListData
     */
    video_id: string;
}
/**
 * URL object
 * @export
 * @interface LicenseVideoResultDownload
 */
export interface LicenseVideoResultDownload {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof LicenseVideoResultDownload
     */
    url: string;
}
/**
 * Wholesale price information; only for rev-share partners only
 * @export
 * @interface LicenseVideoResultPrice
 */
export interface LicenseVideoResultPrice {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof LicenseVideoResultPrice
     */
    local_amount?: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof LicenseVideoResultPrice
     */
    local_currency?: string;
    /**
     * Prices by content tier
     * @type {{ [key: string]: GenerativeImageLicenseResultPriceContentTiers; }}
     * @memberof LicenseVideoResultPrice
     */
    content_tiers?: {
        [key: string]: GenerativeImageLicenseResultPriceContentTiers;
    };
}
/**
 * Information about a human model or property that appears in media; used to search for assets that this model is in
 * @export
 * @interface Model
 */
export interface Model {
    /**
     * ID of the model
     * @type {string}
     * @memberof Model
     */
    id: string;
}
/**
 * Error object
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * HTTP Error code
     * @type {number}
     * @memberof ModelError
     */
    status_code?: number;
    /**
     * The error code of this error
     * @type {string}
     * @memberof ModelError
     */
    code?: string;
    /**
     * Debugging information about the error
     * @type {string}
     * @memberof ModelError
     */
    data?: string;
    /**
     * A list of items that produced the error
     * @type {Array<any>}
     * @memberof ModelError
     */
    items?: Array<any>;
    /**
     * Specific details about this error
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Internal code reference to the source of the error
     * @type {string}
     * @memberof ModelError
     */
    path?: string;
}
/**
 * Model and property release metadata
 * @export
 * @interface ModelRelease
 */
export interface ModelRelease {
    /**
     * ID of the model or property release
     * @type {string}
     * @memberof ModelRelease
     */
    id?: string;
}
/**
 * List of audio moods
 * @export
 * @interface MoodList
 */
export interface MoodList {
    /**
     * List of audio moods
     * @type {Array<string>}
     * @memberof MoodList
     */
    data: Array<string>;
}
/**
 *
 * @export
 * @interface OauthAccessTokenBody
 */
export interface OauthAccessTokenBody {
    /**
     * Client ID (Consumer Key) of your application
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    client_id: string;
    /**
     * Client Secret (Consumer Secret) of your application
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    client_secret?: string;
    /**
     * Response code from the /oauth/authorize flow; required if grant_type=authorization_code
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    code?: string;
    /**
     * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    grant_type: OauthAccessTokenBody.GrantTypeEnum;
    /**
     * User type to be authorized (usually 'customer')
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    realm?: OauthAccessTokenBody.RealmEnum;
    /**
     * Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    expires?: OauthAccessTokenBody.ExpiresEnum;
    /**
     * Pass this along with grant_type=refresh_token to get a fresh access token
     * @type {string}
     * @memberof OauthAccessTokenBody
     */
    refresh_token?: string;
}
/**
 * @export
 * @namespace OauthAccessTokenBody
 */
export declare namespace OauthAccessTokenBody {
    /**
     * @export
     * @enum {string}
     */
    enum GrantTypeEnum {
        AuthorizationCode,
        ClientCredentials,
        RefreshToken
    }
    /**
     * @export
     * @enum {string}
     */
    enum RealmEnum {
        Customer,
        Contributor
    }
    /**
     * @export
     * @enum {string}
     */
    enum ExpiresEnum {
        True,
        False
    }
}
/**
 *
 * @export
 * @interface OauthAccessTokenBody1
 */
export interface OauthAccessTokenBody1 {
    /**
     * Client ID (Consumer Key) of your application
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    client_id: string;
    /**
     * Client Secret (Consumer Secret) of your application
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    client_secret?: string;
    /**
     * Response code from the /oauth/authorize flow; required if grant_type=authorization_code
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    code?: string;
    /**
     * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    grant_type: OauthAccessTokenBody1.GrantTypeEnum;
    /**
     * User type to be authorized (usually 'customer')
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    realm?: OauthAccessTokenBody1.RealmEnum;
    /**
     * Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
     * @type {boolean}
     * @memberof OauthAccessTokenBody1
     */
    expires?: boolean;
    /**
     * Pass this along with grant_type=refresh_token to get a fresh access token
     * @type {string}
     * @memberof OauthAccessTokenBody1
     */
    refresh_token?: string;
}
/**
 * @export
 * @namespace OauthAccessTokenBody1
 */
export declare namespace OauthAccessTokenBody1 {
    /**
     * @export
     * @enum {string}
     */
    enum GrantTypeEnum {
        AuthorizationCode,
        ClientCredentials,
        RefreshToken
    }
    /**
     * @export
     * @enum {string}
     */
    enum RealmEnum {
        Customer,
        Contributor
    }
}
/**
 * Access token response to client apps
 * @export
 * @interface OauthAccessTokenResponse
 */
export interface OauthAccessTokenResponse {
    /**
     * Access token that can be used for future requests
     * @type {string}
     * @memberof OauthAccessTokenResponse
     */
    access_token: string;
    /**
     * Number of seconds before token expires, only present for expiring tokens
     * @type {number}
     * @memberof OauthAccessTokenResponse
     */
    expires_in?: number;
    /**
     * Type of token
     * @type {string}
     * @memberof OauthAccessTokenResponse
     */
    token_type: string;
    /**
     * A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens
     * @type {string}
     * @memberof OauthAccessTokenResponse
     */
    refresh_token?: string;
    /**
     * Metadata about the access_token, only present for expiring tokens
     * @type {string}
     * @memberof OauthAccessTokenResponse
     */
    user_token?: string;
}
/**
 * Price
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof Price
     */
    local_amount?: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof Price
     */
    local_currency?: string;
    /**
     * Prices by content tier
     * @type {{ [key: string]: GenerativeImageLicenseResultPriceContentTiers; }}
     * @memberof Price
     */
    content_tiers?: {
        [key: string]: GenerativeImageLicenseResultPriceContentTiers;
    };
}
/**
 * Media Recommendation
 * @export
 * @interface Recommendation
 */
export interface Recommendation {
    /**
     * Media ID
     * @type {string}
     * @memberof Recommendation
     */
    id: string;
}
/**
 * List of recommended images
 * @export
 * @interface RecommendationDataList
 */
export interface RecommendationDataList {
    /**
     * Recommended images
     * @type {Array<RecommendationDataListData>}
     * @memberof RecommendationDataList
     */
    data?: Array<RecommendationDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof RecommendationDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof RecommendationDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof RecommendationDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof RecommendationDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof RecommendationDataList
     */
    total_count?: number;
}
/**
 * Media Recommendation
 * @export
 * @interface RecommendationDataListData
 */
export interface RecommendationDataListData {
    /**
     * Media ID
     * @type {string}
     * @memberof RecommendationDataListData
     */
    id: string;
}
/**
 * Data required to redownload an image
 * @export
 * @interface RedownloadImage
 */
export interface RedownloadImage {
    /**
     *
     * @type {V2imageslicensesiddownloadsAuthCookie}
     * @memberof RedownloadImage
     */
    auth_cookie?: V2imageslicensesiddownloadsAuthCookie;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof RedownloadImage
     */
    show_modal?: boolean;
    /**
     * Size of the image
     * @type {string}
     * @memberof RedownloadImage
     */
    size?: RedownloadImage.SizeEnum;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof RedownloadImage
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace RedownloadImage
 */
export declare namespace RedownloadImage {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Huge,
        Supersize,
        Vector
    }
}
/**
 * Data required to redownload a video
 * @export
 * @interface RedownloadVideo
 */
export interface RedownloadVideo {
    /**
     *
     * @type {V2imageslicensesiddownloadsAuthCookie}
     * @memberof RedownloadVideo
     */
    auth_cookie?: V2imageslicensesiddownloadsAuthCookie;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof RedownloadVideo
     */
    show_modal?: boolean;
    /**
     * Size of the video
     * @type {string}
     * @memberof RedownloadVideo
     */
    size?: RedownloadVideo.SizeEnum;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof RedownloadVideo
     */
    verification_code?: string;
}
/**
 * @export
 * @namespace RedownloadVideo
 */
export declare namespace RedownloadVideo {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Web,
        Sd,
        Hd,
        _4k
    }
}
/**
 *
 * @export
 * @interface Region
 */
export interface Region {
}
/**
 *
 * @export
 * @interface Region1
 */
export interface Region1 {
}
/**
 *
 * @export
 * @interface RemoveCatalogCollectionItem
 */
export interface RemoveCatalogCollectionItem {
    /**
     * Catalog asset ID. Use numeric IDs for non-editorial assets and numeric IDs ending in a letter for editorial assets.
     * @type {string}
     * @memberof RemoveCatalogCollectionItem
     */
    id: string;
}
/**
 *
 * @export
 * @interface RemoveCatalogCollectionItems
 */
export interface RemoveCatalogCollectionItems {
    /**
     *
     * @type {Array<V2catalogcollectionscollectionIditemsItems>}
     * @memberof RemoveCatalogCollectionItems
     */
    items: Array<V2catalogcollectionscollectionIditemsItems>;
}
/**
 * SFX metadata
 * @export
 * @interface SFX
 */
export interface SFX {
    /**
     * Date this sound effect was added to the Shutterstock library
     * @type {string}
     * @memberof SFX
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof SFX
     */
    affiliate_url?: string;
    /**
     * Artist of the sound effect
     * @type {string}
     * @memberof SFX
     */
    artist?: string;
    /**
     *
     * @type {SFXAssets}
     * @memberof SFX
     */
    assets?: SFXAssets;
    /**
     *
     * @type {AudioContributor}
     * @memberof SFX
     */
    contributor: AudioContributor;
    /**
     * Description of this sound effect
     * @type {string}
     * @memberof SFX
     */
    description?: string;
    /**
     * Duration of this sound effect in seconds
     * @type {number}
     * @memberof SFX
     */
    duration?: number;
    /**
     * Shutterstock ID of this sound effect
     * @type {string}
     * @memberof SFX
     */
    id: string;
    /**
     * List of all keywords for this sound effect
     * @type {Array<string>}
     * @memberof SFX
     */
    keywords?: Array<string>;
    /**
     * Media type of this track; should always be \"sfx\"
     * @type {string}
     * @memberof SFX
     */
    media_type: string;
    /**
     * List of all releases of this sound effect
     * @type {Array<string>}
     * @memberof SFX
     */
    releases?: Array<string>;
    /**
     * Title of this sound effect
     * @type {string}
     * @memberof SFX
     */
    title?: string;
    /**
     * Time this sound effect was last updated
     * @type {Date}
     * @memberof SFX
     */
    updated_time?: Date;
    /**
     *
     * @type {string}
     * @memberof SFX
     */
    url?: string;
}
/**
 * Information about a file that is part of an sound effect asset
 * @export
 * @interface SFXAssetDetails
 */
export interface SFXAssetDetails {
    /**
     * File size of the sound effect
     * @type {number}
     * @memberof SFXAssetDetails
     */
    file_size?: number;
    /**
     * URL the sound effect is available at
     * @type {string}
     * @memberof SFXAssetDetails
     */
    url?: string;
}
/**
 * Files that are available as part of an sound effect asset
 * @export
 * @interface SFXAssets
 */
export interface SFXAssets {
    /**
     *
     * @type {SFXAssetsPreviewMp3}
     * @memberof SFXAssets
     */
    preview_mp3?: SFXAssetsPreviewMp3;
    /**
     *
     * @type {SFXAssetsPreviewMp3}
     * @memberof SFXAssets
     */
    waveform?: SFXAssetsPreviewMp3;
}
/**
 * Information about a file that is part of an sound effect asset
 * @export
 * @interface SFXAssetsPreviewMp3
 */
export interface SFXAssetsPreviewMp3 {
    /**
     * File size of the sound effect
     * @type {number}
     * @memberof SFXAssetsPreviewMp3
     */
    file_size?: number;
    /**
     * URL the sound effect is available at
     * @type {string}
     * @memberof SFXAssetsPreviewMp3
     */
    url?: string;
}
/**
 * List of sound effects
 * @export
 * @interface SFXDataList
 */
export interface SFXDataList {
    /**
     * Sound Effects
     * @type {Array<SFXDataListData>}
     * @memberof SFXDataList
     */
    data?: Array<SFXDataListData>;
}
/**
 * SFX metadata
 * @export
 * @interface SFXDataListData
 */
export interface SFXDataListData {
    /**
     * Date this sound effect was added to the Shutterstock library
     * @type {string}
     * @memberof SFXDataListData
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof SFXDataListData
     */
    affiliate_url?: string;
    /**
     * Artist of the sound effect
     * @type {string}
     * @memberof SFXDataListData
     */
    artist?: string;
    /**
     *
     * @type {SFXAssets}
     * @memberof SFXDataListData
     */
    assets?: SFXAssets;
    /**
     *
     * @type {AudioContributor}
     * @memberof SFXDataListData
     */
    contributor: AudioContributor;
    /**
     * Description of this sound effect
     * @type {string}
     * @memberof SFXDataListData
     */
    description?: string;
    /**
     * Duration of this sound effect in seconds
     * @type {number}
     * @memberof SFXDataListData
     */
    duration?: number;
    /**
     * Shutterstock ID of this sound effect
     * @type {string}
     * @memberof SFXDataListData
     */
    id: string;
    /**
     * List of all keywords for this sound effect
     * @type {Array<string>}
     * @memberof SFXDataListData
     */
    keywords?: Array<string>;
    /**
     * Media type of this track; should always be \"sfx\"
     * @type {string}
     * @memberof SFXDataListData
     */
    media_type: string;
    /**
     * List of all releases of this sound effect
     * @type {Array<string>}
     * @memberof SFXDataListData
     */
    releases?: Array<string>;
    /**
     * Title of this sound effect
     * @type {string}
     * @memberof SFXDataListData
     */
    title?: string;
    /**
     * Time this sound effect was last updated
     * @type {Date}
     * @memberof SFXDataListData
     */
    updated_time?: Date;
    /**
     *
     * @type {string}
     * @memberof SFXDataListData
     */
    url?: string;
}
/**
 * Sound effects search results
 * @export
 * @interface SFXSearchResults
 */
export interface SFXSearchResults {
    /**
     * List of tracks
     * @type {Array<SFXDataListData>}
     * @memberof SFXSearchResults
     */
    data: Array<SFXDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof SFXSearchResults
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof SFXSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof SFXSearchResults
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof SFXSearchResults
     */
    total_count: number;
    /**
     * ID of the search
     * @type {string}
     * @memberof SFXSearchResults
     */
    search_id: string;
}
/**
 * Search entity request data
 * @export
 * @interface SearchEntitiesRequest
 */
export interface SearchEntitiesRequest {
    /**
     * Plain text to extract keywords from
     * @type {string}
     * @memberof SearchEntitiesRequest
     */
    text: string;
}
/**
 * The response to a request for keyword analysis
 * @export
 * @interface SearchEntitiesResponse
 */
export interface SearchEntitiesResponse {
    /**
     * The top keywords from the submitted text
     * @type {Array<string>}
     * @memberof SearchEntitiesResponse
     */
    keywords?: Array<string>;
}
/**
 * Data required to search for an image
 * @export
 * @interface SearchImage
 */
export interface SearchImage {
    /**
     * Show images added on the specified date
     * @type {string}
     * @memberof SearchImage
     */
    added_date?: string;
    /**
     * Show images added on or after the specified date
     * @type {string}
     * @memberof SearchImage
     */
    added_date_start?: string;
    /**
     * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof SearchImage
     */
    aspect_ratio_min?: number;
    /**
     * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof SearchImage
     */
    aspect_ratio_max?: number;
    /**
     * Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     * @type {number}
     * @memberof SearchImage
     */
    aspect_ratio?: number;
    /**
     * Show images added before the specified date
     * @type {string}
     * @memberof SearchImage
     */
    added_date_end?: string;
    /**
     * Show only authentic images
     * @type {boolean}
     * @memberof SearchImage
     */
    authentic?: boolean;
    /**
     * Show images with the specified Shutterstock-defined category; specify a category name or ID
     * @type {string}
     * @memberof SearchImage
     */
    category?: string;
    /**
     * Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
     * @type {string}
     * @memberof SearchImage
     */
    color?: string;
    /**
     * Show images with the specified contributor names or IDs, allows multiple
     * @type {Array<string>}
     * @memberof SearchImage
     */
    contributor?: Array<string>;
    /**
     * Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
     * @type {Array<string>}
     * @memberof SearchImage
     */
    contributor_country?: Array<string>;
    /**
     * Fields to display in the response; see the documentation for the fields parameter in the overview section
     * @type {string}
     * @memberof SearchImage
     */
    fields?: string;
    /**
     * (Deprecated; use height_from and height_to instead) Show images with the specified height
     * @type {number}
     * @memberof SearchImage
     */
    height?: number;
    /**
     * Show images with the specified height or larger, in pixels
     * @type {number}
     * @memberof SearchImage
     */
    height_from?: number;
    /**
     * Show images with the specified height or smaller, in pixels
     * @type {number}
     * @memberof SearchImage
     */
    height_to?: number;
    /**
     * Show images of the specified type
     * @type {Array<string>}
     * @memberof SearchImage
     */
    image_type?: Array<SearchImage.ImageTypeEnum>;
    /**
     * Hide results with potentially unsafe keywords
     * @type {boolean}
     * @memberof SearchImage
     */
    keyword_safe_search?: boolean;
    /**
     * Set query and result language (uses Accept-Language header if not set)
     * @type {string}
     * @memberof SearchImage
     */
    language?: SearchImage.LanguageEnum;
    /**
     * Show only images with the specified license
     * @type {Array<string>}
     * @memberof SearchImage
     */
    license?: Array<SearchImage.LicenseEnum>;
    /**
     * Show image results with the specified model IDs
     * @type {Array<string>}
     * @memberof SearchImage
     */
    model?: Array<string>;
    /**
     * Show image results with horizontal or vertical orientation
     * @type {string}
     * @memberof SearchImage
     */
    orientation?: SearchImage.OrientationEnum;
    /**
     * Page number
     * @type {number}
     * @memberof SearchImage
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof SearchImage
     */
    per_page?: number;
    /**
     * Show images of people with a signed model release
     * @type {boolean}
     * @memberof SearchImage
     */
    people_model_released?: boolean;
    /**
     * Show images that feature people of the specified age category
     * @type {string}
     * @memberof SearchImage
     */
    people_age?: SearchImage.PeopleAgeEnum;
    /**
     * Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
     * @type {Array<string>}
     * @memberof SearchImage
     */
    people_ethnicity?: Array<SearchImage.PeopleEthnicityEnum>;
    /**
     * Show images with people of the specified gender
     * @type {string}
     * @memberof SearchImage
     */
    people_gender?: SearchImage.PeopleGenderEnum;
    /**
     * Show images with the specified number of people
     * @type {number}
     * @memberof SearchImage
     */
    people_number?: number;
    /**
     * One or more search terms separated by spaces; you can use NOT to filter out images that match a term
     * @type {string}
     * @memberof SearchImage
     */
    query?: string;
    /**
     * Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
     * @type {string}
     * @memberof SearchImage
     */
    region?: string;
    /**
     * Enable or disable safe search
     * @type {boolean}
     * @memberof SearchImage
     */
    safe?: boolean;
    /**
     * Sort by
     * @type {string}
     * @memberof SearchImage
     */
    sort?: SearchImage.SortEnum;
    /**
     * Spellcheck the search query and return results on suggested spellings
     * @type {boolean}
     * @memberof SearchImage
     */
    spellcheck_query?: boolean;
    /**
     * Amount of detail to render in the response
     * @type {string}
     * @memberof SearchImage
     */
    view?: SearchImage.ViewEnum;
    /**
     * (Deprecated; use width_from and width_to instead) Show images with the specified width
     * @type {number}
     * @memberof SearchImage
     */
    width?: number;
    /**
     * Show images with the specified width or larger, in pixels
     * @type {number}
     * @memberof SearchImage
     */
    width_from?: number;
    /**
     * Show images with the specified width or smaller, in pixels
     * @type {number}
     * @memberof SearchImage
     */
    width_to?: number;
}
/**
 * @export
 * @namespace SearchImage
 */
export declare namespace SearchImage {
    /**
     * @export
     * @enum {string}
     */
    enum ImageTypeEnum {
        Photo,
        Illustration,
        Vector
    }
    /**
     * @export
     * @enum {string}
     */
    enum LanguageEnum {
        Ar,
        Bg,
        Bn,
        Cs,
        Da,
        De,
        El,
        En,
        Es,
        Fi,
        Fr,
        Gu,
        He,
        Hi,
        Hr,
        Hu,
        Id,
        It,
        Ja,
        Kn,
        Ko,
        Ml,
        Mr,
        Nb,
        Nl,
        Or,
        Pl,
        Pt,
        Ro,
        Ru,
        Sk,
        Sl,
        Sv,
        Ta,
        Te,
        Th,
        Tr,
        Uk,
        Ur,
        Vi,
        Zh,
        ZhHant
    }
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        Commercial,
        Editorial,
        Enhanced
    }
    /**
     * @export
     * @enum {string}
     */
    enum OrientationEnum {
        Horizontal,
        Vertical
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleAgeEnum {
        Infants,
        Children,
        Teenagers,
        _20s,
        _30s,
        _40s,
        _50s,
        _60s,
        Older
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleEthnicityEnum {
        African,
        AfricanAmerican,
        Black,
        Brazilian,
        Chinese,
        Caucasian,
        EastAsian,
        Hispanic,
        Japanese,
        MiddleEastern,
        NativeAmerican,
        PacificIslander,
        SouthAsian,
        SoutheastAsian,
        Other,
        NOTAfrican,
        NOTAfricanAmerican,
        NOTBlack,
        NOTBrazilian,
        NOTChinese,
        NOTCaucasian,
        NOTEastAsian,
        NOTHispanic,
        NOTJapanese,
        NOTMiddleEastern,
        NOTNativeAmerican,
        NOTPacificIslander,
        NOTSouthAsian,
        NOTSoutheastAsian,
        NOTOther
    }
    /**
     * @export
     * @enum {string}
     */
    enum PeopleGenderEnum {
        Male,
        Female,
        Both
    }
    /**
     * @export
     * @enum {string}
     */
    enum SortEnum {
        Newest,
        Popular,
        Relevance,
        Random
    }
    /**
     * @export
     * @enum {string}
     */
    enum ViewEnum {
        Minimal,
        Full
    }
}
/**
 * Search entity request data
 * @export
 * @interface SearchSuggestionsBody
 */
export interface SearchSuggestionsBody {
    /**
     * Plain text to extract keywords from
     * @type {string}
     * @memberof SearchSuggestionsBody
     */
    text: string;
}
/**
 * License sounds effect asset request body
 * @export
 * @interface SfxLicensesBody
 */
export interface SfxLicensesBody {
    /**
     * Sound effects to license for
     * @type {Array<V2sfxlicensesSoundEffects>}
     * @memberof SfxLicensesBody
     */
    sound_effects: Array<V2sfxlicensesSoundEffects>;
}
/**
 * Sound effect license URL object
 * @export
 * @interface SfxUrl
 */
export interface SfxUrl {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof SfxUrl
     */
    url: string;
}
/**
 * Links for Shorts, Loops and Stems previews
 * @export
 * @interface ShortsLoopsStems
 */
export interface ShortsLoopsStems {
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof ShortsLoopsStems
     */
    shorts?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof ShortsLoopsStems
     */
    loops?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
    /**
     *
     * @type {{ [key: string]: AudioAssetsShortsLoopsStemsShorts; }}
     * @memberof ShortsLoopsStems
     */
    stems?: {
        [key: string]: AudioAssetsShortsLoopsStemsShorts;
    };
}
/**
 * Subscription information
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     *
     * @type {SubscriptionAllotment}
     * @memberof Subscription
     */
    allotment?: SubscriptionAllotment;
    /**
     * Description of the subscription
     * @type {string}
     * @memberof Subscription
     */
    description?: string;
    /**
     * Description of the product associated with the subscription
     * @type {string}
     * @memberof Subscription
     */
    product_description?: string;
    /**
     * Whether the subscription uses portfolio pricing
     * @type {boolean}
     * @memberof Subscription
     */
    portfolio?: boolean;
    /**
     * Date the subscription ends
     * @type {Date}
     * @memberof Subscription
     */
    expiration_time?: Date;
    /**
     * List of formats that are licensable for the subscription
     * @type {Array<SubscriptionFormats>}
     * @memberof Subscription
     */
    formats?: Array<SubscriptionFormats>;
    /**
     * Product names for enabled features on an AI generated subscription.
     * @type {Array<string>}
     * @memberof Subscription
     */
    features?: Array<string>;
    /**
     * Unique internal identifier for the subscription
     * @type {string}
     * @memberof Subscription
     */
    id: string;
    /**
     * Internal identifier for the type of subscription
     * @type {string}
     * @memberof Subscription
     */
    license?: string;
    /**
     * Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)
     * @type {string}
     * @memberof Subscription
     */
    asset_type?: string;
    /**
     * Subscription metadata; different for each customer
     * @type {any}
     * @memberof Subscription
     */
    metadata?: any;
    /**
     *
     * @type {SubscriptionPricePerDownload}
     * @memberof Subscription
     */
    price_per_download?: SubscriptionPricePerDownload;
}
/**
 * An allotment of credits as part of a subscription
 * @export
 * @interface SubscriptionAllotment
 */
export interface SubscriptionAllotment {
    /**
     * Number of credits remaining in the subscription
     * @type {number}
     * @memberof SubscriptionAllotment
     */
    downloads_left?: number;
    /**
     * Total number of credits available to this subscription
     * @type {number}
     * @memberof SubscriptionAllotment
     */
    downloads_limit?: number;
    /**
     * Number of generation credits remaining in the subscription
     * @type {number}
     * @memberof SubscriptionAllotment
     */
    generations_left?: number;
    /**
     * Total number of generation credits available to this subscription
     * @type {number}
     * @memberof SubscriptionAllotment
     */
    generations_limit?: number;
    /**
     * Date the subscription ends
     * @type {Date}
     * @memberof SubscriptionAllotment
     */
    end_time?: Date;
    /**
     * Date the subscription started
     * @type {Date}
     * @memberof SubscriptionAllotment
     */
    start_time?: Date;
    /**
     * Credit balances and limits by content tier
     * @type {{ [key: string]: any; }}
     * @memberof SubscriptionAllotment
     */
    content_tiers?: {
        [key: string]: any;
    };
}
/**
 * List of subscriptions
 * @export
 * @interface SubscriptionDataList
 */
export interface SubscriptionDataList {
    /**
     * Subscriptions retrieved from this user
     * @type {Array<SubscriptionDataListData>}
     * @memberof SubscriptionDataList
     */
    data?: Array<SubscriptionDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof SubscriptionDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Optional error message
     * @type {string}
     * @memberof SubscriptionDataList
     */
    message?: string;
    /**
     * Current page that is being queried
     * @type {number}
     * @memberof SubscriptionDataList
     */
    page?: number;
    /**
     * Amount of subscriptions to show per page
     * @type {number}
     * @memberof SubscriptionDataList
     */
    per_page?: number;
    /**
     * Total number of subscriptions for this user
     * @type {number}
     * @memberof SubscriptionDataList
     */
    total_count?: number;
}
/**
 * Subscription information
 * @export
 * @interface SubscriptionDataListData
 */
export interface SubscriptionDataListData {
    /**
     *
     * @type {SubscriptionAllotment}
     * @memberof SubscriptionDataListData
     */
    allotment?: SubscriptionAllotment;
    /**
     * Description of the subscription
     * @type {string}
     * @memberof SubscriptionDataListData
     */
    description?: string;
    /**
     * Description of the product associated with the subscription
     * @type {string}
     * @memberof SubscriptionDataListData
     */
    product_description?: string;
    /**
     * Whether the subscription uses portfolio pricing
     * @type {boolean}
     * @memberof SubscriptionDataListData
     */
    portfolio?: boolean;
    /**
     * Date the subscription ends
     * @type {Date}
     * @memberof SubscriptionDataListData
     */
    expiration_time?: Date;
    /**
     * List of formats that are licensable for the subscription
     * @type {Array<SubscriptionFormats>}
     * @memberof SubscriptionDataListData
     */
    formats?: Array<SubscriptionFormats>;
    /**
     * Product names for enabled features on an AI generated subscription.
     * @type {Array<string>}
     * @memberof SubscriptionDataListData
     */
    features?: Array<string>;
    /**
     * Unique internal identifier for the subscription
     * @type {string}
     * @memberof SubscriptionDataListData
     */
    id: string;
    /**
     * Internal identifier for the type of subscription
     * @type {string}
     * @memberof SubscriptionDataListData
     */
    license?: string;
    /**
     * Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)
     * @type {string}
     * @memberof SubscriptionDataListData
     */
    asset_type?: string;
    /**
     * Subscription metadata; different for each customer
     * @type {any}
     * @memberof SubscriptionDataListData
     */
    metadata?: any;
    /**
     *
     * @type {SubscriptionPricePerDownload}
     * @memberof SubscriptionDataListData
     */
    price_per_download?: SubscriptionPricePerDownload;
}
/**
 * Description of a license
 * @export
 * @interface SubscriptionFormats
 */
export interface SubscriptionFormats {
    /**
     * Description of the license
     * @type {string}
     * @memberof SubscriptionFormats
     */
    description?: string;
    /**
     * Format or extension of the media, such as mpeg for videos or jpeg for images
     * @type {string}
     * @memberof SubscriptionFormats
     */
    format?: string;
    /**
     * Media type of the license
     * @type {string}
     * @memberof SubscriptionFormats
     */
    media_type?: SubscriptionFormats.MediaTypeEnum;
    /**
     * Width of the media, in pixels, allowed by this license
     * @type {number}
     * @memberof SubscriptionFormats
     */
    min_resolution?: number;
    /**
     * Keyword that details the size of the media, such as hd or sd for video, huge or vector for images
     * @type {string}
     * @memberof SubscriptionFormats
     */
    size?: string;
}
/**
 * @export
 * @namespace SubscriptionFormats
 */
export declare namespace SubscriptionFormats {
    /**
     * @export
     * @enum {string}
     */
    enum MediaTypeEnum {
        Image,
        Video,
        Audio,
        Editorial
    }
}
/**
 * Subscription metadata; different for each customer
 * @export
 * @interface SubscriptionMetadata
 */
export interface SubscriptionMetadata {
}
/**
 * Price
 * @export
 * @interface SubscriptionPricePerDownload
 */
export interface SubscriptionPricePerDownload {
    /**
     * Floating-point amount of the calculated rev-share price in the currency local_currency
     * @type {number}
     * @memberof SubscriptionPricePerDownload
     */
    local_amount?: number;
    /**
     * Currency of the rev-share price that was calculated
     * @type {string}
     * @memberof SubscriptionPricePerDownload
     */
    local_currency?: string;
    /**
     * Prices by content tier
     * @type {{ [key: string]: GenerativeImageLicenseResultPriceContentTiers; }}
     * @memberof SubscriptionPricePerDownload
     */
    content_tiers?: {
        [key: string]: GenerativeImageLicenseResultPriceContentTiers;
    };
}
/**
 * List of search suggestions
 * @export
 * @interface Suggestions
 */
export interface Suggestions {
    /**
     * Search suggestions
     * @type {Array<string>}
     * @memberof Suggestions
     */
    data?: Array<string>;
}
/**
 * Text to echo in the response
 * @export
 * @interface TestEcho
 */
export interface TestEcho {
    /**
     *
     * @type {string}
     * @memberof TestEcho
     */
    text?: string;
}
/**
 * Validation results
 * @export
 * @interface TestValidate
 */
export interface TestValidate {
    /**
     *
     * @type {TestValidateHeader}
     * @memberof TestValidate
     */
    header?: TestValidateHeader;
    /**
     *
     * @type {TestValidateQuery}
     * @memberof TestValidate
     */
    query?: TestValidateQuery;
}
/**
 * Headers as included in the request
 * @export
 * @interface TestValidateHeader
 */
export interface TestValidateHeader {
    /**
     * User agent to expect in the response
     * @type {string}
     * @memberof TestValidateHeader
     */
    user_agent?: string;
}
/**
 * Query as included in the request
 * @export
 * @interface TestValidateQuery
 */
export interface TestValidateQuery {
    /**
     * Integer ID that was passed in the request
     * @type {number}
     * @memberof TestValidateQuery
     */
    id: number;
    /**
     * Boolean flag that was passed in the request
     * @type {boolean}
     * @memberof TestValidateQuery
     */
    enabled?: boolean;
    /**
     * List of tags that were passed in the request
     * @type {Array<string>}
     * @memberof TestValidateQuery
     */
    tag?: Array<string>;
}
/**
 * Image thumbnail information
 * @export
 * @interface Thumbnail
 */
export interface Thumbnail {
    /**
     * Height in pixels of the image thumbnail
     * @type {number}
     * @memberof Thumbnail
     */
    height: number;
    /**
     * Direct URL to the image
     * @type {string}
     * @memberof Thumbnail
     */
    url: string;
    /**
     * Width in pixels of the image thumbnail
     * @type {number}
     * @memberof Thumbnail
     */
    width: number;
}
/**
 *
 * @export
 * @interface UpdateCatalogCollection
 */
export interface UpdateCatalogCollection {
    /**
     *
     * @type {string}
     * @memberof UpdateCatalogCollection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateCatalogCollection
     */
    visibility?: UpdateCatalogCollection.VisibilityEnum;
    /**
     *
     * @type {V2catalogcollectionscollectionIdCoverAsset}
     * @memberof UpdateCatalogCollection
     */
    cover_asset?: V2catalogcollectionscollectionIdCoverAsset;
}
/**
 * @export
 * @namespace UpdateCatalogCollection
 */
export declare namespace UpdateCatalogCollection {
    /**
     * @export
     * @enum {string}
     */
    enum VisibilityEnum {
        Private,
        Public
    }
}
/**
 * Information about a piece of updated media
 * @export
 * @interface UpdatedMedia
 */
export interface UpdatedMedia {
    /**
     * ID of the media
     * @type {string}
     * @memberof UpdatedMedia
     */
    id: string;
    /**
     * Date that the media was updated
     * @type {Date}
     * @memberof UpdatedMedia
     */
    updated_time: Date;
    /**
     * Types of updates that were made to the piece of media
     * @type {Array<string>}
     * @memberof UpdatedMedia
     */
    updates: Array<string>;
}
/**
 * List of updated media
 * @export
 * @interface UpdatedMediaDataList
 */
export interface UpdatedMediaDataList {
    /**
     * Updated media items
     * @type {Array<UpdatedMediaDataListData>}
     * @memberof UpdatedMediaDataList
     */
    data?: Array<UpdatedMediaDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof UpdatedMediaDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof UpdatedMediaDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof UpdatedMediaDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof UpdatedMediaDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof UpdatedMediaDataList
     */
    total_count?: number;
}
/**
 * Information about a piece of updated media
 * @export
 * @interface UpdatedMediaDataListData
 */
export interface UpdatedMediaDataListData {
    /**
     * ID of the media
     * @type {string}
     * @memberof UpdatedMediaDataListData
     */
    id: string;
    /**
     * Date that the media was updated
     * @type {Date}
     * @memberof UpdatedMediaDataListData
     */
    updated_time: Date;
    /**
     * Types of updates that were made to the piece of media
     * @type {Array<string>}
     * @memberof UpdatedMediaDataListData
     */
    updates: Array<string>;
}
/**
 * URL object
 * @export
 * @interface Url
 */
export interface Url {
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     * @type {string}
     * @memberof Url
     */
    url: string;
}
/**
 * List of URLs
 * @export
 * @interface Urls
 */
export interface Urls {
    /**
     * URLs
     * @type {Array<string>}
     * @memberof Urls
     */
    urls: Array<string>;
}
/**
 * User details
 * @export
 * @interface UserDetails
 */
export interface UserDetails {
    /**
     * Unique internal identifier of the user, as a contributor
     * @type {string}
     * @memberof UserDetails
     */
    contributor_id?: string;
    /**
     * Unique internal identifier of the user, as a purchaser
     * @type {string}
     * @memberof UserDetails
     */
    customer_id?: string;
    /**
     * Email address of the user
     * @type {string}
     * @memberof UserDetails
     */
    email?: string;
    /**
     * First name of the user
     * @type {string}
     * @memberof UserDetails
     */
    first_name?: string;
    /**
     * Full name including first, middle, and last name of the user
     * @type {string}
     * @memberof UserDetails
     */
    full_name?: string;
    /**
     * Unique internal identifier for the user, not tied to contributor or purchasing customer
     * @type {string}
     * @memberof UserDetails
     */
    id?: string;
    /**
     * True if the user has access to the Premier collection, false otherwise
     * @type {boolean}
     * @memberof UserDetails
     */
    is_premier?: boolean;
    /**
     * True if the user has access to the Premier collection and also has child users
     * @type {boolean}
     * @memberof UserDetails
     */
    is_premier_parent?: boolean;
    /**
     * Main language of the user account
     * @type {string}
     * @memberof UserDetails
     */
    language?: string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof UserDetails
     */
    last_name?: string;
    /**
     * True if the user has an enterprise license, false otherwise
     * @type {boolean}
     * @memberof UserDetails
     */
    only_enhanced_license?: boolean;
    /**
     * True if the user has access to sensitive use only, false otherwise
     * @type {boolean}
     * @memberof UserDetails
     */
    only_sensitive_use?: boolean;
    /**
     * Unique internal identifier for the user's organization, specific to Premier users
     * @type {string}
     * @memberof UserDetails
     */
    organization_id?: string;
    /**
     * List of permissions allowed through the Premier client
     * @type {Array<string>}
     * @memberof UserDetails
     */
    premier_permissions?: Array<string>;
    /**
     * User name associated to the user
     * @type {string}
     * @memberof UserDetails
     */
    username?: string;
}
/**
 * An audio track in a licensing request
 * @export
 * @interface V2audiolicensesAudio
 */
export interface V2audiolicensesAudio {
    /**
     * ID of the track being licensed
     * @type {string}
     * @memberof V2audiolicensesAudio
     */
    audio_id: string;
    /**
     * Type of license
     * @type {string}
     * @memberof V2audiolicensesAudio
     */
    license?: V2audiolicensesAudio.LicenseEnum;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof V2audiolicensesAudio
     */
    search_id?: string;
}
/**
 * @export
 * @namespace V2audiolicensesAudio
 */
export declare namespace V2audiolicensesAudio {
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        AudioPlatform,
        PremierMusicBasic,
        PremierMusicExtended,
        PremierMusicPro,
        PremierMusicComp,
        AssetAllMusic
    }
}
/**
 *
 * @export
 * @interface V2catalogcollectionsAsset
 */
export interface V2catalogcollectionsAsset {
    /**
     * Catalog asset ID. Use numeric IDs for non-editorial assets and numeric IDs ending in a letter for editorial assets.
     * @type {string}
     * @memberof V2catalogcollectionsAsset
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof V2catalogcollectionsAsset
     */
    type: string;
}
/**
 *
 * @export
 * @interface V2catalogcollectionsItems
 */
export interface V2catalogcollectionsItems {
    /**
     *
     * @type {V2catalogcollectionsAsset}
     * @memberof V2catalogcollectionsItems
     */
    asset: V2catalogcollectionsAsset;
}
/**
 *
 * @export
 * @interface V2catalogcollectionscollectionIdCoverAsset
 */
export interface V2catalogcollectionscollectionIdCoverAsset {
    /**
     *
     * @type {string}
     * @memberof V2catalogcollectionscollectionIdCoverAsset
     */
    id: string;
}
/**
 *
 * @export
 * @interface V2catalogcollectionscollectionIditemsItems
 */
export interface V2catalogcollectionscollectionIditemsItems {
    /**
     * Catalog asset ID. Use numeric IDs for non-editorial assets and numeric IDs ending in a letter for editorial assets.
     * @type {string}
     * @memberof V2catalogcollectionscollectionIditemsItems
     */
    id: string;
}
/**
 * Individual editorial content to license
 * @export
 * @interface V2editorialimageslicensesEditorial
 */
export interface V2editorialimageslicensesEditorial {
    /**
     * Editorial ID
     * @type {string}
     * @memberof V2editorialimageslicensesEditorial
     */
    editorial_id: string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof V2editorialimageslicensesEditorial
     */
    license: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof V2editorialimageslicensesEditorial
     */
    metadata?: any;
    /**
     * Asset size to download
     * @type {string}
     * @memberof V2editorialimageslicensesEditorial
     */
    size?: V2editorialimageslicensesEditorial.SizeEnum;
}
/**
 * @export
 * @namespace V2editorialimageslicensesEditorial
 */
export declare namespace V2editorialimageslicensesEditorial {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Original
    }
}
/**
 * Individual editorial video content to license
 * @export
 * @interface V2editorialvideoslicensesEditorial
 */
export interface V2editorialvideoslicensesEditorial {
    /**
     * Editorial ID
     * @type {string}
     * @memberof V2editorialvideoslicensesEditorial
     */
    editorial_id: string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof V2editorialvideoslicensesEditorial
     */
    license: V2editorialvideoslicensesEditorial.LicenseEnum;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof V2editorialvideoslicensesEditorial
     */
    metadata?: any;
    /**
     * Asset size to download
     * @type {string}
     * @memberof V2editorialvideoslicensesEditorial
     */
    size?: V2editorialvideoslicensesEditorial.SizeEnum;
}
/**
 * @export
 * @namespace V2editorialvideoslicensesEditorial
 */
export declare namespace V2editorialvideoslicensesEditorial {
    /**
     * @export
     * @enum {string}
     */
    enum LicenseEnum {
        DigitalOnly,
        AllMedia,
        AllMediaSingleTerritory,
        Comp
    }
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Original
    }
}
/**
 * A custom height or a custom width to resize the image to, but not both (experimental)
 * @export
 * @interface V2generativeimageslicensesCustomDimensions
 */
export interface V2generativeimageslicensesCustomDimensions {
    /**
     * Custom height to resize the image to
     * @type {number}
     * @memberof V2generativeimageslicensesCustomDimensions
     */
    height?: number;
    /**
     * Custom width to resize the image to
     * @type {number}
     * @memberof V2generativeimageslicensesCustomDimensions
     */
    width?: number;
}
/**
 * Data required to license a generated image asset.
 * @export
 * @interface V2generativeimageslicensesImages
 */
export interface V2generativeimageslicensesImages {
    /**
     * Generated image asset ID returned in the generative image result asset list.
     * @type {string}
     * @memberof V2generativeimageslicensesImages
     */
    asset_id: string;
    /**
     * This must be set to true to license this asset. It confirms: I acknowledge that AI-generated content is not reviewed by Shutterstock's content compliance team for intellectual property compliance unless otherwise stated, and should not be used publicly if it contains the likeness of a brand, public personality, or other protected content.
     * @type {boolean}
     * @memberof V2generativeimageslicensesImages
     */
    ai_use_acknowledgement: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof V2generativeimageslicensesImages
     */
    metadata?: any;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     * @type {number}
     * @memberof V2generativeimageslicensesImages
     */
    price?: number;
    /**
     * Image size to download
     * @type {string}
     * @memberof V2generativeimageslicensesImages
     */
    size?: V2generativeimageslicensesImages.SizeEnum;
    /**
     *
     * @type {V2generativeimageslicensesCustomDimensions}
     * @memberof V2generativeimageslicensesImages
     */
    custom_dimensions?: V2generativeimageslicensesCustomDimensions;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof V2generativeimageslicensesImages
     */
    subscription_id?: string;
}
/**
 * @export
 * @namespace V2generativeimageslicensesImages
 */
export declare namespace V2generativeimageslicensesImages {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Small,
        Medium,
        Huge,
        Custom
    }
}
/**
 * Metadata about an item that is part of a collection
 * @export
 * @interface V2imagescollectionsiditemsItems
 */
export interface V2imagescollectionsiditemsItems {
    /**
     * The date the item was added to the collection
     * @type {Date}
     * @memberof V2imagescollectionsiditemsItems
     */
    added_time?: Date;
    /**
     * ID of the item
     * @type {string}
     * @memberof V2imagescollectionsiditemsItems
     */
    id: string;
    /**
     * The media type of the item, such as image, video, or audio
     * @type {string}
     * @memberof V2imagescollectionsiditemsItems
     */
    media_type?: string;
}
/**
 * (Deprecated)
 * @export
 * @interface V2imageslicensesiddownloadsAuthCookie
 */
export interface V2imageslicensesiddownloadsAuthCookie {
    /**
     * The name of the cookie
     * @type {string}
     * @memberof V2imageslicensesiddownloadsAuthCookie
     */
    name: string;
    /**
     * The value of the cookie
     * @type {string}
     * @memberof V2imageslicensesiddownloadsAuthCookie
     */
    value: string;
}
/**
 *
 * @export
 * @interface V2sfxlicensesSoundEffects
 */
export interface V2sfxlicensesSoundEffects {
    /**
     * ID of the sounds effect being licensed
     * @type {string}
     * @memberof V2sfxlicensesSoundEffects
     */
    sfx_id: string;
    /**
     *
     * @type {string}
     * @memberof V2sfxlicensesSoundEffects
     */
    audio_layout?: V2sfxlicensesSoundEffects.AudioLayoutEnum;
    /**
     *
     * @type {string}
     * @memberof V2sfxlicensesSoundEffects
     */
    format?: V2sfxlicensesSoundEffects.FormatEnum;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof V2sfxlicensesSoundEffects
     */
    search_id?: string;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof V2sfxlicensesSoundEffects
     */
    subscription_id: string;
}
/**
 * @export
 * @namespace V2sfxlicensesSoundEffects
 */
export declare namespace V2sfxlicensesSoundEffects {
    /**
     * @export
     * @enum {string}
     */
    enum AudioLayoutEnum {
        Ambisonic,
        _51,
        Stereo
    }
    /**
     * @export
     * @enum {string}
     */
    enum FormatEnum {
        Wav,
        Mp3
    }
}
/**
 * Cookie object
 * @export
 * @interface V2videoslicensesAuthCookie
 */
export interface V2videoslicensesAuthCookie {
    /**
     * The name of the cookie
     * @type {string}
     * @memberof V2videoslicensesAuthCookie
     */
    name: string;
    /**
     * The value of the cookie
     * @type {string}
     * @memberof V2videoslicensesAuthCookie
     */
    value: string;
}
/**
 * Data required to license a video
 * @export
 * @interface V2videoslicensesVideos
 */
export interface V2videoslicensesVideos {
    /**
     *
     * @type {V2videoslicensesAuthCookie}
     * @memberof V2videoslicensesVideos
     */
    auth_cookie?: V2videoslicensesAuthCookie;
    /**
     * Whether or not this item is editorial content
     * @type {boolean}
     * @memberof V2videoslicensesVideos
     */
    editorial_acknowledgement?: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {any}
     * @memberof V2videoslicensesVideos
     */
    metadata?: any;
    /**
     * Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners
     * @type {number}
     * @memberof V2videoslicensesVideos
     */
    price?: number;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof V2videoslicensesVideos
     */
    search_id?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof V2videoslicensesVideos
     */
    show_modal?: boolean;
    /**
     * Size of the video being licensed
     * @type {string}
     * @memberof V2videoslicensesVideos
     */
    size?: V2videoslicensesVideos.SizeEnum;
    /**
     * ID of the subscription used for this license
     * @type {string}
     * @memberof V2videoslicensesVideos
     */
    subscription_id?: string;
    /**
     * ID of the video being licensed
     * @type {string}
     * @memberof V2videoslicensesVideos
     */
    video_id: string;
}
/**
 * @export
 * @namespace V2videoslicensesVideos
 */
export declare namespace V2videoslicensesVideos {
    /**
     * @export
     * @enum {string}
     */
    enum SizeEnum {
        Web,
        Sd,
        Hd,
        _4k
    }
}
/**
 * Information about a video
 * @export
 * @interface Video
 */
export interface Video {
    /**
     * Date this video was added to the Shutterstock library
     * @type {string}
     * @memberof Video
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof Video
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of this video in decimal format, such as 0.6667
     * @type {number}
     * @memberof Video
     */
    aspect?: number;
    /**
     * Aspect ratio of the video as a ratio, such as 16:9
     * @type {string}
     * @memberof Video
     */
    aspect_ratio?: string;
    /**
     *
     * @type {VideoAssets}
     * @memberof Video
     */
    assets?: VideoAssets;
    /**
     * List of categories
     * @type {Array<CategoryDataListData>}
     * @memberof Video
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof Video
     */
    contributor: AudioContributor;
    /**
     * Description of this video
     * @type {string}
     * @memberof Video
     */
    description?: string;
    /**
     * Duration of this video, in seconds
     * @type {number}
     * @memberof Video
     */
    duration?: number;
    /**
     * Whether or not this video has been released for use by the model appearing in it
     * @type {boolean}
     * @memberof Video
     */
    has_model_release?: boolean;
    /**
     * Whether or not this video has received a release to show the landmark or property appearing in it
     * @type {boolean}
     * @memberof Video
     */
    has_property_release?: boolean;
    /**
     * ID of the video
     * @type {string}
     * @memberof Video
     */
    id: string;
    /**
     * Whether or not this video contains adult content
     * @type {boolean}
     * @memberof Video
     */
    is_adult?: boolean;
    /**
     * Whether or not this video is editorial content
     * @type {boolean}
     * @memberof Video
     */
    is_editorial?: boolean;
    /**
     * Whether or not this video is part of the select collection
     * @type {boolean}
     * @memberof Video
     */
    is_select?: boolean;
    /**
     * Asset collection for this video
     * @type {string}
     * @memberof Video
     */
    asset_collection?: Video.AssetCollectionEnum;
    /**
     * Keywords associated with the content of this video
     * @type {Array<string>}
     * @memberof Video
     */
    keywords?: Array<string>;
    /**
     * Media type of this video, should always be \"video\"
     * @type {string}
     * @memberof Video
     */
    media_type: string;
    /**
     * List of models in this video
     * @type {Array<ImageModels>}
     * @memberof Video
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this video
     * @type {Array<AudioModelReleases>}
     * @memberof Video
     */
    releases?: Array<AudioModelReleases>;
    /**
     * Link to video information page; included only for certain accounts
     * @type {string}
     * @memberof Video
     */
    url?: string;
}
/**
 * @export
 * @namespace Video
 */
export declare namespace Video {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Empty,
        Essentials,
        Select
    }
}
/**
 * Video asset information
 * @export
 * @interface VideoAssets
 */
export interface VideoAssets {
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof VideoAssets
     */
    _4k?: EditorialVideoAssetsOriginal;
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof VideoAssets
     */
    hd?: EditorialVideoAssetsOriginal;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    preview_jpg?: LicenseVideoResultDownload;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    preview_mp4?: LicenseVideoResultDownload;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    preview_webm?: LicenseVideoResultDownload;
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof VideoAssets
     */
    sd?: EditorialVideoAssetsOriginal;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    thumb_jpg?: LicenseVideoResultDownload;
    /**
     *
     * @type {VideoAssetsThumbJpgs}
     * @memberof VideoAssets
     */
    thumb_jpgs?: VideoAssetsThumbJpgs;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    thumb_mp4?: LicenseVideoResultDownload;
    /**
     *
     * @type {LicenseVideoResultDownload}
     * @memberof VideoAssets
     */
    thumb_webm?: LicenseVideoResultDownload;
    /**
     *
     * @type {EditorialVideoAssetsOriginal}
     * @memberof VideoAssets
     */
    web?: EditorialVideoAssetsOriginal;
}
/**
 * List of URLs
 * @export
 * @interface VideoAssetsThumbJpgs
 */
export interface VideoAssetsThumbJpgs {
    /**
     * URLs
     * @type {Array<string>}
     * @memberof VideoAssetsThumbJpgs
     */
    urls: Array<string>;
}
/**
 * List of videos
 * @export
 * @interface VideoDataList
 */
export interface VideoDataList {
    /**
     * Videos
     * @type {Array<VideoDataListData>}
     * @memberof VideoDataList
     */
    data?: Array<VideoDataListData>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<AudioDataListErrors>}
     * @memberof VideoDataList
     */
    errors?: Array<AudioDataListErrors>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof VideoDataList
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof VideoDataList
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof VideoDataList
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof VideoDataList
     */
    total_count?: number;
}
/**
 * Information about a video
 * @export
 * @interface VideoDataListData
 */
export interface VideoDataListData {
    /**
     * Date this video was added to the Shutterstock library
     * @type {string}
     * @memberof VideoDataListData
     */
    added_date?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof VideoDataListData
     */
    affiliate_url?: string;
    /**
     * Aspect ratio of this video in decimal format, such as 0.6667
     * @type {number}
     * @memberof VideoDataListData
     */
    aspect?: number;
    /**
     * Aspect ratio of the video as a ratio, such as 16:9
     * @type {string}
     * @memberof VideoDataListData
     */
    aspect_ratio?: string;
    /**
     *
     * @type {VideoAssets}
     * @memberof VideoDataListData
     */
    assets?: VideoAssets;
    /**
     * List of categories
     * @type {Array<CategoryDataListData>}
     * @memberof VideoDataListData
     */
    categories?: Array<CategoryDataListData>;
    /**
     *
     * @type {AudioContributor}
     * @memberof VideoDataListData
     */
    contributor: AudioContributor;
    /**
     * Description of this video
     * @type {string}
     * @memberof VideoDataListData
     */
    description?: string;
    /**
     * Duration of this video, in seconds
     * @type {number}
     * @memberof VideoDataListData
     */
    duration?: number;
    /**
     * Whether or not this video has been released for use by the model appearing in it
     * @type {boolean}
     * @memberof VideoDataListData
     */
    has_model_release?: boolean;
    /**
     * Whether or not this video has received a release to show the landmark or property appearing in it
     * @type {boolean}
     * @memberof VideoDataListData
     */
    has_property_release?: boolean;
    /**
     * ID of the video
     * @type {string}
     * @memberof VideoDataListData
     */
    id: string;
    /**
     * Whether or not this video contains adult content
     * @type {boolean}
     * @memberof VideoDataListData
     */
    is_adult?: boolean;
    /**
     * Whether or not this video is editorial content
     * @type {boolean}
     * @memberof VideoDataListData
     */
    is_editorial?: boolean;
    /**
     * Whether or not this video is part of the select collection
     * @type {boolean}
     * @memberof VideoDataListData
     */
    is_select?: boolean;
    /**
     * Asset collection for this video
     * @type {string}
     * @memberof VideoDataListData
     */
    asset_collection?: VideoDataListData.AssetCollectionEnum;
    /**
     * Keywords associated with the content of this video
     * @type {Array<string>}
     * @memberof VideoDataListData
     */
    keywords?: Array<string>;
    /**
     * Media type of this video, should always be \"video\"
     * @type {string}
     * @memberof VideoDataListData
     */
    media_type: string;
    /**
     * List of models in this video
     * @type {Array<ImageModels>}
     * @memberof VideoDataListData
     */
    models?: Array<ImageModels>;
    /**
     * List of all releases of this video
     * @type {Array<AudioModelReleases>}
     * @memberof VideoDataListData
     */
    releases?: Array<AudioModelReleases>;
    /**
     * Link to video information page; included only for certain accounts
     * @type {string}
     * @memberof VideoDataListData
     */
    url?: string;
}
/**
 * @export
 * @namespace VideoDataListData
 */
export declare namespace VideoDataListData {
    /**
     * @export
     * @enum {string}
     */
    enum AssetCollectionEnum {
        Empty,
        Essentials,
        Select
    }
}
/**
 * Video preview information
 * @export
 * @interface VideoPreviewUrl
 */
export interface VideoPreviewUrl {
    /**
     * Direct URL to the image
     * @type {string}
     * @memberof VideoPreviewUrl
     */
    url: string;
}
/**
 * Video search results
 * @export
 * @interface VideoSearchResults
 */
export interface VideoSearchResults {
    /**
     * List of videos
     * @type {Array<VideoDataListData>}
     * @memberof VideoSearchResults
     */
    data: Array<VideoDataListData>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof VideoSearchResults
     */
    message?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof VideoSearchResults
     */
    page?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof VideoSearchResults
     */
    per_page?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof VideoSearchResults
     */
    total_count: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof VideoSearchResults
     */
    search_id: string;
}
/**
 * Video asset information
 * @export
 * @interface VideoSizeDetails
 */
export interface VideoSizeDetails {
    /**
     * Display name of this video size
     * @type {string}
     * @memberof VideoSizeDetails
     */
    display_name?: string;
    /**
     * File size (in bytes) of this video size
     * @type {number}
     * @memberof VideoSizeDetails
     */
    file_size?: number;
    /**
     * Format of this video size
     * @type {string}
     * @memberof VideoSizeDetails
     */
    format?: string;
    /**
     * Frames per second of this video size
     * @type {number}
     * @memberof VideoSizeDetails
     */
    fps?: number;
    /**
     * Height of this video size
     * @type {number}
     * @memberof VideoSizeDetails
     */
    height?: number;
    /**
     * Whether or not videos can be licensed in this video size
     * @type {boolean}
     * @memberof VideoSizeDetails
     */
    is_licensable?: boolean;
    /**
     * Width of this video size
     * @type {number}
     * @memberof VideoSizeDetails
     */
    width?: number;
}
/**
 * Collection creation request
 * @export
 * @interface VideosCollectionsBody
 */
export interface VideosCollectionsBody {
    /**
     * The name of the collection
     * @type {string}
     * @memberof VideosCollectionsBody
     */
    name: string;
}
/**
 * List of videos to license
 * @export
 * @interface VideosLicensesBody
 */
export interface VideosLicensesBody {
    /**
     * Videos to license
     * @type {Array<V2videoslicensesVideos>}
     * @memberof VideosLicensesBody
     */
    videos: Array<V2videoslicensesVideos>;
}
/**
 * License editorial video content request
 * @export
 * @interface VideosLicensesBody1
 */
export interface VideosLicensesBody1 {
    /**
     * Mandatory country code for where the editorial content will be distributed; this value is used for rights checks
     * @type {string}
     * @memberof VideosLicensesBody1
     */
    country: string;
    /**
     * Editorial content to license
     * @type {Array<V2editorialvideoslicensesEditorial>}
     * @memberof VideosLicensesBody1
     */
    editorial: Array<V2editorialvideoslicensesEditorial>;
}
/**
 * Request parameters for addCollectionItems.
 * @export
 * @interface AudioApiAddTrackCollectionItemsRequest
 */
export interface AudioApiAddTrackCollectionItemsRequest {
    /** List of items to add to collection */
    body: IdItemsBody2;
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for createCollection.
 * @export
 * @interface AudioApiCreateTrackCollectionRequest
 */
export interface AudioApiCreateTrackCollectionRequest {
    /** Collection metadata */
    body: AudioCollectionsBody;
}
/**
 * Request parameters for deleteCollection.
 * @export
 * @interface AudioApiDeleteTrackCollectionRequest
 */
export interface AudioApiDeleteTrackCollectionRequest {
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for deleteCollectionItems.
 * @export
 * @interface AudioApiDeleteTrackCollectionItemsRequest
 */
export interface AudioApiDeleteTrackCollectionItemsRequest {
    /** Collection ID */
    id: string;
    /** One or more item IDs to remove from the collection */
    item_id?: Array<string>;
}
/**
 * Request parameters for download.
 * @export
 * @interface AudioApiDownloadTracksRequest
 */
export interface AudioApiDownloadTracksRequest {
    /** License ID */
    id: string;
}
/**
 * Request parameters for get.
 * @export
 * @interface AudioApiGetTrackRequest
 */
export interface AudioApiGetTrackRequest {
    /** Audio track ID */
    id: number;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for getCollection.
 * @export
 * @interface AudioApiGetTrackCollectionRequest
 */
export interface AudioApiGetTrackCollectionRequest {
    /** Collection ID */
    id: string;
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
    /** Code to retrieve a shared collection */
    share_code?: string;
}
/**
 * Request parameters for listCollectionItems.
 * @export
 * @interface AudioApiGetTrackCollectionItemsRequest
 */
export interface AudioApiGetTrackCollectionItemsRequest {
    /** Collection ID */
    id: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Code to retrieve the contents of a shared collection */
    share_code?: string;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for listCollections.
 * @export
 * @interface AudioApiGetTrackCollectionListRequest
 */
export interface AudioApiGetTrackCollectionListRequest {
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface AudioApiGetTrackLicenseListRequest
 */
export interface AudioApiGetTrackLicenseListRequest {
    /** Show licenses for the specified track ID */
    audio_id?: string;
    /** Restrict results by license. */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for list.
 * @export
 * @interface AudioApiGetTrackListRequest
 */
export interface AudioApiGetTrackListRequest {
    /** One or more audio IDs */
    id: Array<string>;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for license.
 * @export
 * @interface AudioApiLicenseTrackRequest
 */
export interface AudioApiLicenseTrackRequest {
    /** Tracks to license */
    body: AudioLicensesBody;
    /** License type */
    license?: string;
    /** The ID of the search that led to licensing this track */
    search_id?: string;
}
/**
 * Request parameters for listGenres.
 * @export
 * @interface AudioApiListGenresRequest
 */
export interface AudioApiListGenresRequest {
    /** Which language the genres will be returned */
    language?: string;
}
/**
 * Request parameters for listInstruments.
 * @export
 * @interface AudioApiListInstrumentsRequest
 */
export interface AudioApiListInstrumentsRequest {
    /** Which language the instruments will be returned in */
    language?: string;
}
/**
 * Request parameters for listMoods.
 * @export
 * @interface AudioApiListMoodsRequest
 */
export interface AudioApiListMoodsRequest {
    /** Which language the moods will be returned in */
    language?: string;
}
/**
 * Request parameters for renameCollection.
 * @export
 * @interface AudioApiRenameTrackCollectionRequest
 */
export interface AudioApiRenameTrackCollectionRequest {
    /** Collection changes */
    body: CollectionsIdBody2;
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for search.
 * @export
 * @interface AudioApiSearchTracksRequest
 */
export interface AudioApiSearchTracksRequest {
    /** Show tracks with one of the specified artist names or IDs */
    artists?: Array<string>;
    /** (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute */
    bpm?: number;
    /** Show tracks with the specified beats per minute or faster */
    bpm_from?: number;
    /** Show tracks with the specified beats per minute or slower */
    bpm_to?: number;
    /** Show tracks with the specified duration in seconds */
    duration?: number;
    /** Show tracks with the specified duration or longer in seconds */
    duration_from?: number;
    /** Show tracks with the specified duration or shorter in seconds */
    duration_to?: number;
    /** Show tracks with each of the specified genres; to get the list of genres, use &#x60;GET /v2/audio/genres&#x60; */
    genre?: Array<string>;
    /** Show instrumental music only */
    is_instrumental?: boolean;
    /** Show only pro-free tracks when true, only pro tracks when false, or all tracks when null */
    is_pro_free?: boolean;
    /** Show tracks with each of the specified instruments; to get the list of instruments, use &#x60;GET /v2/audio/instruments&#x60; */
    instruments?: Array<string>;
    /** Show tracks with each of the specified moods; to get the list of moods, use &#x60;GET /v2/audio/moods&#x60; */
    moods?: Array<string>;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Sort by */
    sort?: string;
    /** Sort order */
    sort_order?: string;
    /** Show tracks with the specified vocal description (male, female) */
    vocal_description?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** Fields to display in the response; see the documentation for the fields parameter in the overview section */
    fields?: string;
    /** Which library to search */
    library?: string;
    /** Which language to search in */
    language?: string;
}
/**
 * AudioApi - fetch parameter creator
 * @export
 */
export declare const AudioApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @summary Add audio tracks to collections
     * @param AudioApiAddTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: AudioApiAddTrackCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
     * @summary Create audio collections
     * @param AudioApiCreateTrackCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: AudioApiCreateTrackCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint deletes a collection.
     * @summary Delete audio collections
     * @param AudioApiDeleteTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: AudioApiDeleteTrackCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint removes one or more tracks from a collection.
     * @summary Remove audio tracks from collections
     * @param AudioApiDeleteTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: AudioApiDeleteTrackCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download audio tracks
     * @param AudioApiDownloadTracksRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: AudioApiDownloadTracksRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @summary Get details about audio tracks
     * @param AudioApiGetTrackRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: AudioApiGetTrackRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
     * @summary Get the details of audio collections
     * @param AudioApiGetTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: AudioApiGetTrackCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @summary Get the contents of audio collections
     * @param AudioApiGetTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: AudioApiGetTrackCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @summary List audio collections
     * @param AudioApiGetTrackCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: AudioApiGetTrackCollectionListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @summary List audio licenses
     * @param AudioApiGetTrackLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: AudioApiGetTrackLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @summary List audio tracks
     * @param AudioApiGetTrackListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: AudioApiGetTrackListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
     * @summary License audio tracks
     * @param AudioApiLicenseTrackRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: AudioApiLicenseTrackRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns a list of all audio genres.
     * @summary List audio genres
     * @param AudioApiListGenresRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGenres(requestParameters?: AudioApiListGenresRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns a list of all audio instruments.
     * @summary List audio instruments
     * @param AudioApiListInstrumentsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listInstruments(requestParameters?: AudioApiListInstrumentsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns a list of all audio moods.
     * @summary List audio moods
     * @param AudioApiListMoodsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMoods(requestParameters?: AudioApiListMoodsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename audio collections
     * @param AudioApiRenameTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: AudioApiRenameTrackCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @summary Search for tracks
     * @param AudioApiSearchTracksRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: AudioApiSearchTracksRequest, options?: RequestInit): FetchArgs;
};
/**
 * AudioApi - functional programming interface
 * @export
 */
export declare const AudioApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @summary Add audio tracks to collections
     * @param AudioApiAddTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: AudioApiAddTrackCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
     * @summary Create audio collections
     * @param AudioApiCreateTrackCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: AudioApiCreateTrackCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete audio collections
     * @param AudioApiDeleteTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: AudioApiDeleteTrackCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint removes one or more tracks from a collection.
     * @summary Remove audio tracks from collections
     * @param AudioApiDeleteTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: AudioApiDeleteTrackCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download audio tracks
     * @param AudioApiDownloadTracksRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: AudioApiDownloadTracksRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20026>;
    /**
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @summary Get details about audio tracks
     * @param AudioApiGetTrackRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: AudioApiGetTrackRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20024>;
    /**
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
     * @summary Get the details of audio collections
     * @param AudioApiGetTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: AudioApiGetTrackCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @summary Get the contents of audio collections
     * @param AudioApiGetTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: AudioApiGetTrackCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @summary List audio collections
     * @param AudioApiGetTrackCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: AudioApiGetTrackCollectionListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @summary List audio licenses
     * @param AudioApiGetTrackLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: AudioApiGetTrackLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @summary List audio tracks
     * @param AudioApiGetTrackListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: AudioApiGetTrackListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20023>;
    /**
     * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
     * @summary License audio tracks
     * @param AudioApiLicenseTrackRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: AudioApiLicenseTrackRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20025>;
    /**
     * This endpoint returns a list of all audio genres.
     * @summary List audio genres
     * @param AudioApiListGenresRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGenres(requestParameters?: AudioApiListGenresRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20020>;
    /**
     * This endpoint returns a list of all audio instruments.
     * @summary List audio instruments
     * @param AudioApiListInstrumentsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listInstruments(requestParameters?: AudioApiListInstrumentsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20021>;
    /**
     * This endpoint returns a list of all audio moods.
     * @summary List audio moods
     * @param AudioApiListMoodsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMoods(requestParameters?: AudioApiListMoodsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20022>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename audio collections
     * @param AudioApiRenameTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: AudioApiRenameTrackCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @summary Search for tracks
     * @param AudioApiSearchTracksRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: AudioApiSearchTracksRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20019>;
};
/**
 * AudioApi - factory interface
 * @export
 */
export declare const AudioApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @summary Add audio tracks to collections
     * @param AudioApiAddTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: AudioApiAddTrackCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
     * @summary Create audio collections
     * @param AudioApiCreateTrackCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: AudioApiCreateTrackCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete audio collections
     * @param AudioApiDeleteTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: AudioApiDeleteTrackCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more tracks from a collection.
     * @summary Remove audio tracks from collections
     * @param AudioApiDeleteTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: AudioApiDeleteTrackCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download audio tracks
     * @param AudioApiDownloadTracksRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: AudioApiDownloadTracksRequest, options?: RequestInit): Promise<InlineResponse20026>;
    /**
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @summary Get details about audio tracks
     * @param AudioApiGetTrackRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: AudioApiGetTrackRequest, options?: RequestInit): Promise<InlineResponse20024>;
    /**
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
     * @summary Get the details of audio collections
     * @param AudioApiGetTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: AudioApiGetTrackCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @summary Get the contents of audio collections
     * @param AudioApiGetTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: AudioApiGetTrackCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @summary List audio collections
     * @param AudioApiGetTrackCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: AudioApiGetTrackCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @summary List audio licenses
     * @param AudioApiGetTrackLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: AudioApiGetTrackLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @summary List audio tracks
     * @param AudioApiGetTrackListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: AudioApiGetTrackListRequest, options?: RequestInit): Promise<InlineResponse20023>;
    /**
     * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
     * @summary License audio tracks
     * @param AudioApiLicenseTrackRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: AudioApiLicenseTrackRequest, options?: RequestInit): Promise<InlineResponse20025>;
    /**
     * This endpoint returns a list of all audio genres.
     * @summary List audio genres
     * @param AudioApiListGenresRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listGenres(requestParameters?: AudioApiListGenresRequest, options?: RequestInit): Promise<InlineResponse20020>;
    /**
     * This endpoint returns a list of all audio instruments.
     * @summary List audio instruments
     * @param AudioApiListInstrumentsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listInstruments(requestParameters?: AudioApiListInstrumentsRequest, options?: RequestInit): Promise<InlineResponse20021>;
    /**
     * This endpoint returns a list of all audio moods.
     * @summary List audio moods
     * @param AudioApiListMoodsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listMoods(requestParameters?: AudioApiListMoodsRequest, options?: RequestInit): Promise<InlineResponse20022>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename audio collections
     * @param AudioApiRenameTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: AudioApiRenameTrackCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @summary Search for tracks
     * @param AudioApiSearchTracksRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: AudioApiSearchTracksRequest, options?: RequestInit): Promise<InlineResponse20019>;
};
/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export declare class AudioApi extends BaseAPI {
    /**
     * This endpoint adds one or more tracks to a collection by track IDs.
     * @summary Add audio tracks to collections
     * @param AudioApiAddTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    addCollectionItems(requestParameters: AudioApiAddTrackCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.
     * @summary Create audio collections
     * @param AudioApiCreateTrackCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    createCollection(requestParameters?: AudioApiCreateTrackCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete audio collections
     * @param AudioApiDeleteTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    deleteCollection(requestParameters: AudioApiDeleteTrackCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more tracks from a collection.
     * @summary Remove audio tracks from collections
     * @param AudioApiDeleteTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    deleteCollectionItems(requestParameters: AudioApiDeleteTrackCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download audio tracks
     * @param AudioApiDownloadTracksRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    download(requestParameters: AudioApiDownloadTracksRequest, options?: RequestInit): Promise<InlineResponse20026>;
    /**
     * This endpoint shows information about a track, including its genres, instruments, and other attributes.
     * @summary Get details about audio tracks
     * @param AudioApiGetTrackRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    get(requestParameters: AudioApiGetTrackRequest, options?: RequestInit): Promise<InlineResponse20024>;
    /**
     * This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.
     * @summary Get the details of audio collections
     * @param AudioApiGetTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    getCollection(requestParameters: AudioApiGetTrackCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of tracks in a collection and the date that each was added.
     * @summary Get the contents of audio collections
     * @param AudioApiGetTrackCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listCollectionItems(requestParameters: AudioApiGetTrackCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of audio tracks and their basic attributes.
     * @summary List audio collections
     * @param AudioApiGetTrackCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listCollections(requestParameters?: AudioApiGetTrackCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.
     * @summary List audio licenses
     * @param AudioApiGetTrackLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listLicenses(requestParameters?: AudioApiGetTrackLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more audio tracks, including the description and publication date.
     * @summary List audio tracks
     * @param AudioApiGetTrackListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    list(requestParameters: AudioApiGetTrackListRequest, options?: RequestInit): Promise<InlineResponse20023>;
    /**
     * This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.
     * @summary License audio tracks
     * @param AudioApiLicenseTrackRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    license(requestParameters?: AudioApiLicenseTrackRequest, options?: RequestInit): Promise<InlineResponse20025>;
    /**
     * This endpoint returns a list of all audio genres.
     * @summary List audio genres
     * @param AudioApiListGenresRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listGenres(requestParameters?: AudioApiListGenresRequest, options?: RequestInit): Promise<InlineResponse20020>;
    /**
     * This endpoint returns a list of all audio instruments.
     * @summary List audio instruments
     * @param AudioApiListInstrumentsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listInstruments(requestParameters?: AudioApiListInstrumentsRequest, options?: RequestInit): Promise<InlineResponse20021>;
    /**
     * This endpoint returns a list of all audio moods.
     * @summary List audio moods
     * @param AudioApiListMoodsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    listMoods(requestParameters?: AudioApiListMoodsRequest, options?: RequestInit): Promise<InlineResponse20022>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename audio collections
     * @param AudioApiRenameTrackCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    renameCollection(requestParameters: AudioApiRenameTrackCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.
     * @summary Search for tracks
     * @param AudioApiSearchTracksRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AudioApi
     */
    search(requestParameters?: AudioApiSearchTracksRequest, options?: RequestInit): Promise<InlineResponse20019>;
}
/**
 * Request parameters for addCollectionItems.
 * @export
 * @interface CatalogApiAddToCollectionRequest
 */
export interface CatalogApiAddToCollectionRequest {
    /** Collection item attributes to add to collection */
    body: CollectionIdItemsBody;
    /** The ID of the collection to add assets to */
    collection_id: string;
}
/**
 * Request parameters for createCollection.
 * @export
 * @interface CatalogApiCreateCollectionRequest
 */
export interface CatalogApiCreateCollectionRequest {
    /** Create a catalog collection and, optionally, add items. */
    body: CatalogCollectionsBody;
}
/**
 * Request parameters for deleteCollection.
 * @export
 * @interface CatalogApiDeleteCollectionRequest
 */
export interface CatalogApiDeleteCollectionRequest {
    /** The ID of the collection to delete */
    collection_id: string;
}
/**
 * Request parameters for deleteCollectionItems.
 * @export
 * @interface CatalogApiDeleteFromCollectionRequest
 */
export interface CatalogApiDeleteFromCollectionRequest {
    /** Items to remove from the collection */
    body: CollectionIdItemsBody1;
    /** The ID of the collection to remove assets from */
    collection_id: string;
}
/**
 * Request parameters for listCollections.
 * @export
 * @interface CatalogApiGetCollectionsRequest
 */
export interface CatalogApiGetCollectionsRequest {
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort by */
    sort?: string;
    /** Set to true to omit collections that you own and return only collections  that are shared with you */
    shared?: boolean;
}
/**
 * Request parameters for search.
 * @export
 * @interface CatalogApiSearchCatalogRequest
 */
export interface CatalogApiSearchCatalogRequest {
    /** Sort by */
    sort?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Filter by collection id */
    collection_id?: Array<string>;
    /** Filter by asset type */
    asset_type?: Array<string>;
}
/**
 * Request parameters for updateCollection.
 * @export
 * @interface CatalogApiUpdateCollectionRequest
 */
export interface CatalogApiUpdateCollectionRequest {
    /** Collections Metadata to update */
    body: CollectionsCollectionIdBody;
    /** ID of collection that needs to be modified */
    collection_id: string;
}
/**
 * CatalogApi - fetch parameter creator
 * @export
 */
export declare const CatalogApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @summary Add items to catalog collections
     * @param CatalogApiAddToCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: CatalogApiAddToCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @summary Create catalog collections
     * @param CatalogApiCreateCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: CatalogApiCreateCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Delete catalog collections
     * @param CatalogApiDeleteCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: CatalogApiDeleteCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Remove items from catalog collection
     * @param CatalogApiDeleteFromCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: CatalogApiDeleteFromCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns a list of catalog collections.
     * @summary List catalog collections
     * @param CatalogApiGetCollectionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: CatalogApiGetCollectionsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search catalogs for assets
     * @param CatalogApiSearchCatalogRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: CatalogApiSearchCatalogRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint updates the metadata of a catalog collection.
     * @summary Update collection metadata
     * @param CatalogApiUpdateCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(requestParameters: CatalogApiUpdateCollectionRequest, options?: RequestInit): FetchArgs;
};
/**
 * CatalogApi - functional programming interface
 * @export
 */
export declare const CatalogApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @summary Add items to catalog collections
     * @param CatalogApiAddToCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: CatalogApiAddToCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2013>;
    /**
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @summary Create catalog collections
     * @param CatalogApiCreateCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: CatalogApiCreateCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2013>;
    /**
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Delete catalog collections
     * @param CatalogApiDeleteCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: CatalogApiDeleteCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Remove items from catalog collection
     * @param CatalogApiDeleteFromCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: CatalogApiDeleteFromCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2013>;
    /**
     * This endpoint returns a list of catalog collections.
     * @summary List catalog collections
     * @param CatalogApiGetCollectionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: CatalogApiGetCollectionsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20052>;
    /**
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search catalogs for assets
     * @param CatalogApiSearchCatalogRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: CatalogApiSearchCatalogRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20051>;
    /**
     * This endpoint updates the metadata of a catalog collection.
     * @summary Update collection metadata
     * @param CatalogApiUpdateCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(requestParameters: CatalogApiUpdateCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2013>;
};
/**
 * CatalogApi - factory interface
 * @export
 */
export declare const CatalogApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @summary Add items to catalog collections
     * @param CatalogApiAddToCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: CatalogApiAddToCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @summary Create catalog collections
     * @param CatalogApiCreateCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: CatalogApiCreateCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Delete catalog collections
     * @param CatalogApiDeleteCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: CatalogApiDeleteCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Remove items from catalog collection
     * @param CatalogApiDeleteFromCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: CatalogApiDeleteFromCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint returns a list of catalog collections.
     * @summary List catalog collections
     * @param CatalogApiGetCollectionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: CatalogApiGetCollectionsRequest, options?: RequestInit): Promise<InlineResponse20052>;
    /**
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search catalogs for assets
     * @param CatalogApiSearchCatalogRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: CatalogApiSearchCatalogRequest, options?: RequestInit): Promise<InlineResponse20051>;
    /**
     * This endpoint updates the metadata of a catalog collection.
     * @summary Update collection metadata
     * @param CatalogApiUpdateCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateCollection(requestParameters: CatalogApiUpdateCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
};
/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export declare class CatalogApi extends BaseAPI {
    /**
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @summary Add items to catalog collections
     * @param CatalogApiAddToCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    addCollectionItems(requestParameters: CatalogApiAddToCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @summary Create catalog collections
     * @param CatalogApiCreateCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    createCollection(requestParameters?: CatalogApiCreateCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Delete catalog collections
     * @param CatalogApiDeleteCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    deleteCollection(requestParameters: CatalogApiDeleteCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @summary Remove items from catalog collection
     * @param CatalogApiDeleteFromCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    deleteCollectionItems(requestParameters: CatalogApiDeleteFromCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
    /**
     * This endpoint returns a list of catalog collections.
     * @summary List catalog collections
     * @param CatalogApiGetCollectionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    listCollections(requestParameters?: CatalogApiGetCollectionsRequest, options?: RequestInit): Promise<InlineResponse20052>;
    /**
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search catalogs for assets
     * @param CatalogApiSearchCatalogRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    search(requestParameters?: CatalogApiSearchCatalogRequest, options?: RequestInit): Promise<InlineResponse20051>;
    /**
     * This endpoint updates the metadata of a catalog collection.
     * @summary Update collection metadata
     * @param CatalogApiUpdateCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    updateCollection(requestParameters: CatalogApiUpdateCollectionRequest, options?: RequestInit): Promise<InlineResponse2013>;
}
/**
 * Request parameters for getKeywords.
 * @export
 * @interface ComputerVisionApiGetKeywordsRequest
 */
export interface ComputerVisionApiGetKeywordsRequest {
    /** The asset ID or upload ID to suggest keywords for */
    asset_id: AssetId;
}
/**
 * Request parameters for listSimilarImages.
 * @export
 * @interface ComputerVisionApiGetSimilarImagesRequest
 */
export interface ComputerVisionApiGetSimilarImagesRequest {
    /** The asset ID or upload ID to find similar images for */
    asset_id: string;
    /** Show only images with the specified license */
    license?: Array<string>;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Amount of detail to render in the response */
    view?: string;
}
/**
 * Request parameters for listSimilarVideos.
 * @export
 * @interface ComputerVisionApiGetSimilarVideosRequest
 */
export interface ComputerVisionApiGetSimilarVideosRequest {
    /** The asset ID or upload ID to find similar videos for */
    asset_id: string;
    /** Show only videos with the specified license */
    license?: Array<string>;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Amount of detail to render in the response */
    view?: string;
}
/**
 * Request parameters for uploadImage.
 * @export
 * @interface ComputerVisionApiUploadImageRequest
 */
export interface ComputerVisionApiUploadImageRequest {
    /** A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height */
    body: CvImagesBody;
}
/**
 * ComputerVisionApi - fetch parameter creator
 * @export
 */
export declare const ComputerVisionApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @summary List suggested keywords
     * @param ComputerVisionApiGetKeywordsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywords(requestParameters: ComputerVisionApiGetKeywordsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @summary List similar images
     * @param ComputerVisionApiGetSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarImages(requestParameters: ComputerVisionApiGetSimilarImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @summary List similar videos
     * @param ComputerVisionApiGetSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarVideos(requestParameters: ComputerVisionApiGetSimilarVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @summary Upload images
     * @param ComputerVisionApiUploadImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadImage(requestParameters?: ComputerVisionApiUploadImageRequest, options?: RequestInit): FetchArgs;
};
/**
 * ComputerVisionApi - functional programming interface
 * @export
 */
export declare const ComputerVisionApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @summary List suggested keywords
     * @param ComputerVisionApiGetKeywordsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywords(requestParameters: ComputerVisionApiGetKeywordsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20050>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @summary List similar images
     * @param ComputerVisionApiGetSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarImages(requestParameters: ComputerVisionApiGetSimilarImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200>;
    /**
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @summary List similar videos
     * @param ComputerVisionApiGetSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarVideos(requestParameters: ComputerVisionApiGetSimilarVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20015>;
    /**
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @summary Upload images
     * @param ComputerVisionApiUploadImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadImage(requestParameters?: ComputerVisionApiUploadImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2012>;
};
/**
 * ComputerVisionApi - factory interface
 * @export
 */
export declare const ComputerVisionApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @summary List suggested keywords
     * @param ComputerVisionApiGetKeywordsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywords(requestParameters: ComputerVisionApiGetKeywordsRequest, options?: RequestInit): Promise<InlineResponse20050>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @summary List similar images
     * @param ComputerVisionApiGetSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarImages(requestParameters: ComputerVisionApiGetSimilarImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
    /**
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @summary List similar videos
     * @param ComputerVisionApiGetSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilarVideos(requestParameters: ComputerVisionApiGetSimilarVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
    /**
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @summary Upload images
     * @param ComputerVisionApiUploadImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadImage(requestParameters?: ComputerVisionApiUploadImageRequest, options?: RequestInit): Promise<InlineResponse2012>;
};
/**
 * ComputerVisionApi - object-oriented interface
 * @export
 * @class ComputerVisionApi
 * @extends {BaseAPI}
 */
export declare class ComputerVisionApi extends BaseAPI {
    /**
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @summary List suggested keywords
     * @param ComputerVisionApiGetKeywordsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComputerVisionApi
     */
    getKeywords(requestParameters: ComputerVisionApiGetKeywordsRequest, options?: RequestInit): Promise<InlineResponse20050>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @summary List similar images
     * @param ComputerVisionApiGetSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComputerVisionApi
     */
    listSimilarImages(requestParameters: ComputerVisionApiGetSimilarImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
    /**
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @summary List similar videos
     * @param ComputerVisionApiGetSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComputerVisionApi
     */
    listSimilarVideos(requestParameters: ComputerVisionApiGetSimilarVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
    /**
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @summary Upload images
     * @param ComputerVisionApiUploadImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComputerVisionApi
     */
    uploadImage(requestParameters?: ComputerVisionApiUploadImageRequest, options?: RequestInit): Promise<InlineResponse2012>;
}
/**
 * Request parameters for get.
 * @export
 * @interface ContributorsApiGetContributorRequest
 */
export interface ContributorsApiGetContributorRequest {
    /** Contributor ID */
    contributor_id: string;
}
/**
 * Request parameters for listCollectionItems.
 * @export
 * @interface ContributorsApiGetContributorCollectionItemsRequest
 */
export interface ContributorsApiGetContributorCollectionItemsRequest {
    /** Contributor ID */
    contributor_id: string;
    /** Collection ID that belongs to the contributor */
    id: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for getCollections.
 * @export
 * @interface ContributorsApiGetContributorCollectionsRequest
 */
export interface ContributorsApiGetContributorCollectionsRequest {
    /** Contributor ID */
    contributor_id: string;
    /** Collection ID that belongs to the contributor */
    id: string;
}
/**
 * Request parameters for listCollections.
 * @export
 * @interface ContributorsApiGetContributorCollectionsListRequest
 */
export interface ContributorsApiGetContributorCollectionsListRequest {
    /** Contributor ID */
    contributor_id: string;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for list.
 * @export
 * @interface ContributorsApiGetContributorListRequest
 */
export interface ContributorsApiGetContributorListRequest {
    /** One or more contributor IDs */
    id: Array<string>;
}
/**
 * ContributorsApi - fetch parameter creator
 * @export
 */
export declare const ContributorsApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @summary Get details about a single contributor
     * @param ContributorsApiGetContributorRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ContributorsApiGetContributorRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @summary Get the items in contributors' collections
     * @param ContributorsApiGetContributorCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ContributorsApiGetContributorCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @summary Get details about contributors' collections
     * @param ContributorsApiGetContributorCollectionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollections(requestParameters: ContributorsApiGetContributorCollectionsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists collections based on contributor ID.
     * @summary List contributors' collections
     * @param ContributorsApiGetContributorCollectionsListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters: ContributorsApiGetContributorCollectionsListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @summary Get details about multiple contributors
     * @param ContributorsApiGetContributorListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ContributorsApiGetContributorListRequest, options?: RequestInit): FetchArgs;
};
/**
 * ContributorsApi - functional programming interface
 * @export
 */
export declare const ContributorsApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @summary Get details about a single contributor
     * @param ContributorsApiGetContributorRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ContributorsApiGetContributorRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20054>;
    /**
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @summary Get the items in contributors' collections
     * @param ContributorsApiGetContributorCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ContributorsApiGetContributorCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20013>;
    /**
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @summary Get details about contributors' collections
     * @param ContributorsApiGetContributorCollectionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollections(requestParameters: ContributorsApiGetContributorCollectionsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20012>;
    /**
     * This endpoint lists collections based on contributor ID.
     * @summary List contributors' collections
     * @param ContributorsApiGetContributorCollectionsListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters: ContributorsApiGetContributorCollectionsListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20011>;
    /**
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @summary Get details about multiple contributors
     * @param ContributorsApiGetContributorListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ContributorsApiGetContributorListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20053>;
};
/**
 * ContributorsApi - factory interface
 * @export
 */
export declare const ContributorsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @summary Get details about a single contributor
     * @param ContributorsApiGetContributorRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ContributorsApiGetContributorRequest, options?: RequestInit): Promise<InlineResponse20054>;
    /**
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @summary Get the items in contributors' collections
     * @param ContributorsApiGetContributorCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ContributorsApiGetContributorCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @summary Get details about contributors' collections
     * @param ContributorsApiGetContributorCollectionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollections(requestParameters: ContributorsApiGetContributorCollectionsRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists collections based on contributor ID.
     * @summary List contributors' collections
     * @param ContributorsApiGetContributorCollectionsListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters: ContributorsApiGetContributorCollectionsListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @summary Get details about multiple contributors
     * @param ContributorsApiGetContributorListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ContributorsApiGetContributorListRequest, options?: RequestInit): Promise<InlineResponse20053>;
};
/**
 * ContributorsApi - object-oriented interface
 * @export
 * @class ContributorsApi
 * @extends {BaseAPI}
 */
export declare class ContributorsApi extends BaseAPI {
    /**
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @summary Get details about a single contributor
     * @param ContributorsApiGetContributorRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApi
     */
    get(requestParameters: ContributorsApiGetContributorRequest, options?: RequestInit): Promise<InlineResponse20054>;
    /**
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @summary Get the items in contributors' collections
     * @param ContributorsApiGetContributorCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApi
     */
    listCollectionItems(requestParameters: ContributorsApiGetContributorCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @summary Get details about contributors' collections
     * @param ContributorsApiGetContributorCollectionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApi
     */
    getCollections(requestParameters: ContributorsApiGetContributorCollectionsRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists collections based on contributor ID.
     * @summary List contributors' collections
     * @param ContributorsApiGetContributorCollectionsListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApi
     */
    listCollections(requestParameters: ContributorsApiGetContributorCollectionsListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @summary Get details about multiple contributors
     * @param ContributorsApiGetContributorListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApi
     */
    list(requestParameters: ContributorsApiGetContributorListRequest, options?: RequestInit): Promise<InlineResponse20053>;
}
/**
 * Request parameters for getEditorialCategories.
 * @export
 * @interface EditorialImagesApiGetEditorialCategoriesRequest
 */
export interface EditorialImagesApiGetEditorialCategoriesRequest {
}
/**
 * Request parameters for get.
 * @export
 * @interface EditorialImagesApiGetEditorialImageRequest
 */
export interface EditorialImagesApiGetEditorialImageRequest {
    /** Editorial ID */
    id: string;
    /** Returns only if the content is available for distribution in a certain country */
    country: string;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface EditorialImagesApiGetEditorialImageLicenseListRequest
 */
export interface EditorialImagesApiGetEditorialImageLicenseListRequest {
    /** Show licenses for the specified editorial image ID */
    image_id?: string;
    /** Show editorial images that are available with the specified license name */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for getLivefeed.
 * @export
 * @interface EditorialImagesApiGetEditorialImageLivefeedRequest
 */
export interface EditorialImagesApiGetEditorialImageLivefeedRequest {
    /** Editorial livefeed ID; must be an URI encoded string */
    id: string;
    /** Returns only if the livefeed is available for distribution in a certain country */
    country: string;
}
/**
 * Request parameters for listLivefeedItems.
 * @export
 * @interface EditorialImagesApiGetEditorialImageLivefeedItemsRequest
 */
export interface EditorialImagesApiGetEditorialImageLivefeedItemsRequest {
    /** Editorial livefeed ID; must be an URI encoded string */
    id: string;
    /** Returns only if the livefeed items are available for distribution in a certain country */
    country: string;
}
/**
 * Request parameters for listLivefeeds.
 * @export
 * @interface EditorialImagesApiGetEditorialImageLivefeedListRequest
 */
export interface EditorialImagesApiGetEditorialImageLivefeedListRequest {
    /** Returns only livefeeds that are available for distribution in a certain country */
    country: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
}
/**
 * Request parameters for getEditorialImage_0.
 * @export
 * @interface EditorialImagesApiGetEditorialImage0Request
 */
export interface EditorialImagesApiGetEditorialImage0Request {
    /** Editorial ID */
    id: string;
    /** Returns only if the content is available for distribution in a certain country */
    country: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for getEditorialLivefeed.
 * @export
 * @interface EditorialImagesApiGetEditorialLivefeedRequest
 */
export interface EditorialImagesApiGetEditorialLivefeedRequest {
    /** Editorial livefeed ID; must be an URI encoded string */
    id: string;
    /** Returns only if the livefeed is available for distribution in a certain country */
    country: string;
}
/**
 * Request parameters for getEditorialLivefeedItems.
 * @export
 * @interface EditorialImagesApiGetEditorialLivefeedItemsRequest
 */
export interface EditorialImagesApiGetEditorialLivefeedItemsRequest {
    /** Editorial livefeed ID; must be an URI encoded string */
    id: string;
    /** Returns only if the livefeed items are available for distribution in a certain country */
    country: string;
}
/**
 * Request parameters for getEditorialLivefeedList.
 * @export
 * @interface EditorialImagesApiGetEditorialLivefeedListRequest
 */
export interface EditorialImagesApiGetEditorialLivefeedListRequest {
    /** Returns only livefeeds that are available for distribution in a certain country */
    country: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
}
/**
 * Request parameters for getUpdatedEditorialImage.
 * @export
 * @interface EditorialImagesApiGetUpdatedEditorialImageRequest
 */
export interface EditorialImagesApiGetUpdatedEditorialImageRequest {
    /** Specify &#x60;addition&#x60; to return only images that were added or &#x60;edit&#x60; to return only images that were edited or deleted */
    type: string;
    /** Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. */
    date_updated_start: Date;
    /** Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. */
    date_updated_end: Date;
    /** Show only editorial content that is available for distribution in a certain country */
    country: string;
    /** Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets */
    date_taken_start?: string;
    /** Show images that were taken before the specified date */
    date_taken_end?: string;
    /** The cursor of the page with which to start fetching results; this cursor is returned from previous requests */
    cursor?: string;
    /** Sort by */
    sort?: string;
    /** Show only editorial content from certain suppliers */
    supplier_code?: Array<string>;
    /** Number of results per page */
    per_page?: number;
}
/**
 * Request parameters for listUpdated.
 * @export
 * @interface EditorialImagesApiGetUpdatedEditorialImagesRequest
 */
export interface EditorialImagesApiGetUpdatedEditorialImagesRequest {
    /** Specify &#x60;addition&#x60; to return only images that were added or &#x60;edit&#x60; to return only images that were edited or deleted */
    type: string;
    /** Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. */
    date_updated_start: Date;
    /** Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. */
    date_updated_end: Date;
    /** Show only editorial content that is available for distribution in a certain country */
    country: string;
    /** Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets */
    date_taken_start?: string;
    /** Show images that were taken before the specified date */
    date_taken_end?: string;
    /** The cursor of the page with which to start fetching results; this cursor is returned from previous requests */
    cursor?: string;
    /** Sort by */
    sort?: string;
    /** Show only editorial content from certain suppliers */
    supplier_code?: Array<string>;
    /** Number of results per page */
    per_page?: number;
}
/**
 * Request parameters for licenseEditorialImage.
 * @export
 * @interface EditorialImagesApiLicenseEditorialImageRequest
 */
export interface EditorialImagesApiLicenseEditorialImageRequest {
    /** License editorial content */
    body: EditorialLicensesBody;
}
/**
 * Request parameters for license.
 * @export
 * @interface EditorialImagesApiLicenseEditorialImagesRequest
 */
export interface EditorialImagesApiLicenseEditorialImagesRequest {
    /** License editorial content */
    body: ImagesLicensesBody1;
}
/**
 * Request parameters for listCategories.
 * @export
 * @interface EditorialImagesApiListEditorialImageCategoriesRequest
 */
export interface EditorialImagesApiListEditorialImageCategoriesRequest {
}
/**
 * Request parameters for list.
 * @export
 * @interface EditorialImagesApiListEditorialImagesRequest
 */
export interface EditorialImagesApiListEditorialImagesRequest {
    /** ID of the editorial image to list details for */
    id: Array<string>;
    /** Show only editorial image content that is available for distribution in a certain country */
    country: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for searchEditorial.
 * @export
 * @interface EditorialImagesApiSearchEditorialRequest
 */
export interface EditorialImagesApiSearchEditorialRequest {
    /** Show only editorial content that is available for distribution in a certain country */
    country: string;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Sort by */
    sort?: string;
    /** Show editorial content within a certain editorial category; specify by category name */
    category?: string;
    /** Show only editorial content from certain suppliers */
    supplier_code?: Array<string>;
    /** Show only editorial content generated on or after a specific date */
    date_start?: string;
    /** Show only editorial content generated on or before a specific date */
    date_end?: string;
    /** Number of results per page */
    per_page?: number;
    /** The cursor of the page with which to start fetching results; this cursor is returned from previous requests */
    cursor?: string;
}
/**
 * Request parameters for search.
 * @export
 * @interface EditorialImagesApiSearchEditorialImagesRequest
 */
export interface EditorialImagesApiSearchEditorialImagesRequest {
    /** Show only editorial content that is available for distribution in a certain country */
    country: string;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Sort by */
    sort?: string;
    /** Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list */
    category?: string;
    /** Show only editorial content from certain suppliers */
    supplier_code?: Array<string>;
    /** Show only editorial content generated on or after a specific date */
    date_start?: string;
    /** Show only editorial content generated on or before a specific date */
    date_end?: string;
    /** Number of results per page */
    per_page?: number;
    /** The cursor of the page with which to start fetching results; this cursor is returned from previous requests */
    cursor?: string;
}
/**
 * EditorialImagesApi - fetch parameter creator
 * @export
 */
export declare const EditorialImagesApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary (Deprecated) List editorial categories
     * @param EditorialImagesApiGetEditorialCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialCategories(requestParameters?: EditorialImagesApiGetEditorialCategoriesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial content details
     * @param EditorialImagesApiGetEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialImagesApiGetEditorialImageRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing editorial image licenses.
     * @summary List editorial image licenses
     * @param EditorialImagesApiGetEditorialImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialImagesApiGetEditorialImageLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary Get editorial livefeed
     * @param EditorialImagesApiGetEditorialImageLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLivefeed(requestParameters: EditorialImagesApiGetEditorialImageLivefeedRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialImageLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeedItems(requestParameters: EditorialImagesApiGetEditorialImageLivefeedItemsRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialImageLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeeds(requestParameters: EditorialImagesApiGetEditorialImageLivefeedListRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary (Deprecated) Get editorial content details
     * @param EditorialImagesApiGetEditorialImage0Request requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialImage_0(requestParameters: EditorialImagesApiGetEditorialImage0Request, options?: RequestInit): FetchArgs;
    /**
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
     * @summary (Deprecated) Get editorial livefeed
     * @param EditorialImagesApiGetEditorialLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeed(requestParameters: EditorialImagesApiGetEditorialLivefeedRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
     * @summary (Deprecated) Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedItems(requestParameters: EditorialImagesApiGetEditorialLivefeedItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
     * @summary (Deprecated) Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedList(requestParameters: EditorialImagesApiGetEditorialLivefeedListRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
     * @summary (Deprecated) List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpdatedEditorialImage(requestParameters: EditorialImagesApiGetUpdatedEditorialImageRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
     * @summary List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters: EditorialImagesApiGetUpdatedEditorialImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary (Deprecated) License editorial content
     * @param EditorialImagesApiLicenseEditorialImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    licenseEditorialImage(requestParameters?: EditorialImagesApiLicenseEditorialImageRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary License editorial content
     * @param EditorialImagesApiLicenseEditorialImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialImagesApiLicenseEditorialImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial categories
     * @param EditorialImagesApiListEditorialImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialImagesApiListEditorialImageCategoriesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the details of editorial images.
     * @summary list editorial image details
     * @param EditorialImagesApiListEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialImagesApiListEditorialImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
     * @summary (Deprecated) Search editorial content
     * @param EditorialImagesApiSearchEditorialRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchEditorial(requestParameters: EditorialImagesApiSearchEditorialRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial images
     * @param EditorialImagesApiSearchEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialImagesApiSearchEditorialImagesRequest, options?: RequestInit): FetchArgs;
};
/**
 * EditorialImagesApi - functional programming interface
 * @export
 */
export declare const EditorialImagesApiFp: (configuration?: Configuration) => {
    /**
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary (Deprecated) List editorial categories
     * @param EditorialImagesApiGetEditorialCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialCategories(requestParameters?: EditorialImagesApiGetEditorialCategoriesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20063>;
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial content details
     * @param EditorialImagesApiGetEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialImagesApiGetEditorialImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20035>;
    /**
     * This endpoint lists existing editorial image licenses.
     * @summary List editorial image licenses
     * @param EditorialImagesApiGetEditorialImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialImagesApiGetEditorialImageLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     *
     * @summary Get editorial livefeed
     * @param EditorialImagesApiGetEditorialImageLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLivefeed(requestParameters: EditorialImagesApiGetEditorialImageLivefeedRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20039>;
    /**
     *
     * @summary Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialImageLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeedItems(requestParameters: EditorialImagesApiGetEditorialImageLivefeedItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20040>;
    /**
     *
     * @summary Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialImageLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeeds(requestParameters: EditorialImagesApiGetEditorialImageLivefeedListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20038>;
    /**
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary (Deprecated) Get editorial content details
     * @param EditorialImagesApiGetEditorialImage0Request requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialImage_0(requestParameters: EditorialImagesApiGetEditorialImage0Request, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20035>;
    /**
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
     * @summary (Deprecated) Get editorial livefeed
     * @param EditorialImagesApiGetEditorialLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeed(requestParameters: EditorialImagesApiGetEditorialLivefeedRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20039>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
     * @summary (Deprecated) Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedItems(requestParameters: EditorialImagesApiGetEditorialLivefeedItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20062>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
     * @summary (Deprecated) Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedList(requestParameters: EditorialImagesApiGetEditorialLivefeedListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20061>;
    /**
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
     * @summary (Deprecated) List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpdatedEditorialImage(requestParameters: EditorialImagesApiGetUpdatedEditorialImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20034>;
    /**
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
     * @summary List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters: EditorialImagesApiGetUpdatedEditorialImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20034>;
    /**
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary (Deprecated) License editorial content
     * @param EditorialImagesApiLicenseEditorialImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    licenseEditorialImage(requestParameters?: EditorialImagesApiLicenseEditorialImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20037>;
    /**
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary License editorial content
     * @param EditorialImagesApiLicenseEditorialImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialImagesApiLicenseEditorialImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial categories
     * @param EditorialImagesApiListEditorialImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialImagesApiListEditorialImageCategoriesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20033>;
    /**
     * This endpoint lists the details of editorial images.
     * @summary list editorial image details
     * @param EditorialImagesApiListEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialImagesApiListEditorialImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20036>;
    /**
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
     * @summary (Deprecated) Search editorial content
     * @param EditorialImagesApiSearchEditorialRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchEditorial(requestParameters: EditorialImagesApiSearchEditorialRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20032>;
    /**
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial images
     * @param EditorialImagesApiSearchEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialImagesApiSearchEditorialImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20032>;
};
/**
 * EditorialImagesApi - factory interface
 * @export
 */
export declare const EditorialImagesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary (Deprecated) List editorial categories
     * @param EditorialImagesApiGetEditorialCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialCategories(requestParameters?: EditorialImagesApiGetEditorialCategoriesRequest, options?: RequestInit): Promise<InlineResponse20063>;
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial content details
     * @param EditorialImagesApiGetEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialImagesApiGetEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20035>;
    /**
     * This endpoint lists existing editorial image licenses.
     * @summary List editorial image licenses
     * @param EditorialImagesApiGetEditorialImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialImagesApiGetEditorialImageLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     *
     * @summary Get editorial livefeed
     * @param EditorialImagesApiGetEditorialImageLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLivefeed(requestParameters: EditorialImagesApiGetEditorialImageLivefeedRequest, options?: RequestInit): Promise<InlineResponse20039>;
    /**
     *
     * @summary Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialImageLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeedItems(requestParameters: EditorialImagesApiGetEditorialImageLivefeedItemsRequest, options?: RequestInit): Promise<InlineResponse20040>;
    /**
     *
     * @summary Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialImageLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLivefeeds(requestParameters: EditorialImagesApiGetEditorialImageLivefeedListRequest, options?: RequestInit): Promise<InlineResponse20038>;
    /**
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary (Deprecated) Get editorial content details
     * @param EditorialImagesApiGetEditorialImage0Request requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialImage_0(requestParameters: EditorialImagesApiGetEditorialImage0Request, options?: RequestInit): Promise<InlineResponse20035>;
    /**
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
     * @summary (Deprecated) Get editorial livefeed
     * @param EditorialImagesApiGetEditorialLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeed(requestParameters: EditorialImagesApiGetEditorialLivefeedRequest, options?: RequestInit): Promise<InlineResponse20039>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
     * @summary (Deprecated) Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedItems(requestParameters: EditorialImagesApiGetEditorialLivefeedItemsRequest, options?: RequestInit): Promise<InlineResponse20062>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
     * @summary (Deprecated) Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEditorialLivefeedList(requestParameters: EditorialImagesApiGetEditorialLivefeedListRequest, options?: RequestInit): Promise<InlineResponse20061>;
    /**
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
     * @summary (Deprecated) List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpdatedEditorialImage(requestParameters: EditorialImagesApiGetUpdatedEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20034>;
    /**
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
     * @summary List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters: EditorialImagesApiGetUpdatedEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20034>;
    /**
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary (Deprecated) License editorial content
     * @param EditorialImagesApiLicenseEditorialImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    licenseEditorialImage(requestParameters?: EditorialImagesApiLicenseEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary License editorial content
     * @param EditorialImagesApiLicenseEditorialImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialImagesApiLicenseEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial categories
     * @param EditorialImagesApiListEditorialImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialImagesApiListEditorialImageCategoriesRequest, options?: RequestInit): Promise<InlineResponse20033>;
    /**
     * This endpoint lists the details of editorial images.
     * @summary list editorial image details
     * @param EditorialImagesApiListEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialImagesApiListEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20036>;
    /**
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
     * @summary (Deprecated) Search editorial content
     * @param EditorialImagesApiSearchEditorialRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchEditorial(requestParameters: EditorialImagesApiSearchEditorialRequest, options?: RequestInit): Promise<InlineResponse20032>;
    /**
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial images
     * @param EditorialImagesApiSearchEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialImagesApiSearchEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20032>;
};
/**
 * EditorialImagesApi - object-oriented interface
 * @export
 * @class EditorialImagesApi
 * @extends {BaseAPI}
 */
export declare class EditorialImagesApi extends BaseAPI {
    /**
     * Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary (Deprecated) List editorial categories
     * @param EditorialImagesApiGetEditorialCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getEditorialCategories(requestParameters?: EditorialImagesApiGetEditorialCategoriesRequest, options?: RequestInit): Promise<InlineResponse20063>;
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial content details
     * @param EditorialImagesApiGetEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    get(requestParameters: EditorialImagesApiGetEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20035>;
    /**
     * This endpoint lists existing editorial image licenses.
     * @summary List editorial image licenses
     * @param EditorialImagesApiGetEditorialImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    listLicenses(requestParameters?: EditorialImagesApiGetEditorialImageLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     *
     * @summary Get editorial livefeed
     * @param EditorialImagesApiGetEditorialImageLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getLivefeed(requestParameters: EditorialImagesApiGetEditorialImageLivefeedRequest, options?: RequestInit): Promise<InlineResponse20039>;
    /**
     *
     * @summary Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialImageLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    listLivefeedItems(requestParameters: EditorialImagesApiGetEditorialImageLivefeedItemsRequest, options?: RequestInit): Promise<InlineResponse20040>;
    /**
     *
     * @summary Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialImageLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    listLivefeeds(requestParameters: EditorialImagesApiGetEditorialImageLivefeedListRequest, options?: RequestInit): Promise<InlineResponse20038>;
    /**
     * Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary (Deprecated) Get editorial content details
     * @param EditorialImagesApiGetEditorialImage0Request requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getEditorialImage_0(requestParameters: EditorialImagesApiGetEditorialImage0Request, options?: RequestInit): Promise<InlineResponse20035>;
    /**
     * Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.
     * @summary (Deprecated) Get editorial livefeed
     * @param EditorialImagesApiGetEditorialLivefeedRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getEditorialLivefeed(requestParameters: EditorialImagesApiGetEditorialLivefeedRequest, options?: RequestInit): Promise<InlineResponse20039>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.
     * @summary (Deprecated) Get editorial livefeed items
     * @param EditorialImagesApiGetEditorialLivefeedItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getEditorialLivefeedItems(requestParameters: EditorialImagesApiGetEditorialLivefeedItemsRequest, options?: RequestInit): Promise<InlineResponse20062>;
    /**
     * Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.
     * @summary (Deprecated) Get editorial livefeed list
     * @param EditorialImagesApiGetEditorialLivefeedListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getEditorialLivefeedList(requestParameters: EditorialImagesApiGetEditorialLivefeedListRequest, options?: RequestInit): Promise<InlineResponse20061>;
    /**
     * Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.
     * @summary (Deprecated) List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    getUpdatedEditorialImage(requestParameters: EditorialImagesApiGetUpdatedEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20034>;
    /**
     * This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.
     * @summary List updated content
     * @param EditorialImagesApiGetUpdatedEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    listUpdated(requestParameters: EditorialImagesApiGetUpdatedEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20034>;
    /**
     * Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary (Deprecated) License editorial content
     * @param EditorialImagesApiLicenseEditorialImageRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    licenseEditorialImage(requestParameters?: EditorialImagesApiLicenseEditorialImageRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.
     * @summary License editorial content
     * @param EditorialImagesApiLicenseEditorialImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    license(requestParameters?: EditorialImagesApiLicenseEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial categories
     * @param EditorialImagesApiListEditorialImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    listCategories(requestParameters?: EditorialImagesApiListEditorialImageCategoriesRequest, options?: RequestInit): Promise<InlineResponse20033>;
    /**
     * This endpoint lists the details of editorial images.
     * @summary list editorial image details
     * @param EditorialImagesApiListEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    list(requestParameters: EditorialImagesApiListEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20036>;
    /**
     * Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.
     * @summary (Deprecated) Search editorial content
     * @param EditorialImagesApiSearchEditorialRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    searchEditorial(requestParameters: EditorialImagesApiSearchEditorialRequest, options?: RequestInit): Promise<InlineResponse20032>;
    /**
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial images
     * @param EditorialImagesApiSearchEditorialImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialImagesApi
     */
    search(requestParameters: EditorialImagesApiSearchEditorialImagesRequest, options?: RequestInit): Promise<InlineResponse20032>;
}
/**
 * Request parameters for get.
 * @export
 * @interface EditorialVideoApiGetEditorialVideoRequest
 */
export interface EditorialVideoApiGetEditorialVideoRequest {
    /** Editorial ID */
    id: string;
    /** Returns only if the content is available for distribution in a certain country */
    country: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface EditorialVideoApiGetEditorialVideoLicenseListRequest
 */
export interface EditorialVideoApiGetEditorialVideoLicenseListRequest {
    /** Show licenses for the specified editorial video ID */
    video_id?: string;
    /** Show editorial videos that are available with the specified license name */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for license.
 * @export
 * @interface EditorialVideoApiLicenseEditorialVideoRequest
 */
export interface EditorialVideoApiLicenseEditorialVideoRequest {
    /** License editorial video content */
    body: VideosLicensesBody1;
}
/**
 * Request parameters for listCategories.
 * @export
 * @interface EditorialVideoApiListEditorialVideoCategoriesRequest
 */
export interface EditorialVideoApiListEditorialVideoCategoriesRequest {
}
/**
 * Request parameters for list.
 * @export
 * @interface EditorialVideoApiListEditorialVideosRequest
 */
export interface EditorialVideoApiListEditorialVideosRequest {
    /** ID of the editorial video to list details for */
    id: Array<string>;
    /** Show only editorial video content that is available for distribution in a certain country */
    country: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for search.
 * @export
 * @interface EditorialVideoApiSearchEditorialVideosRequest
 */
export interface EditorialVideoApiSearchEditorialVideosRequest {
    /** Show only editorial video content that is available for distribution in a certain country */
    country: string;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Sort by */
    sort?: string;
    /** Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list */
    category?: string;
    /** Show only editorial video content from certain suppliers */
    supplier_code?: Array<string>;
    /** Show only editorial video content generated on or after a specific date */
    date_start?: string;
    /** Show only editorial video content generated on or before a specific date */
    date_end?: string;
    /** Show only editorial video content with specific resolution */
    resolution?: string;
    /** Show only editorial video content generated with specific frames per second */
    fps?: number;
    /** Number of results per page */
    per_page?: number;
    /** The cursor of the page with which to start fetching results; this cursor is returned from previous requests */
    cursor?: string;
}
/**
 * EditorialVideoApi - fetch parameter creator
 * @export
 */
export declare const EditorialVideoApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial video content details
     * @param EditorialVideoApiGetEditorialVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialVideoApiGetEditorialVideoRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing editorial video licenses.
     * @summary List editorial video licenses
     * @param EditorialVideoApiGetEditorialVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialVideoApiGetEditorialVideoLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @summary License editorial video content
     * @param EditorialVideoApiLicenseEditorialVideoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialVideoApiLicenseEditorialVideoRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial video categories
     * @param EditorialVideoApiListEditorialVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialVideoApiListEditorialVideoCategoriesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the details of editorial videos by ID list.
     * @summary List editorial videos details by ID list
     * @param EditorialVideoApiListEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialVideoApiListEditorialVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial video content
     * @param EditorialVideoApiSearchEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialVideoApiSearchEditorialVideosRequest, options?: RequestInit): FetchArgs;
};
/**
 * EditorialVideoApi - functional programming interface
 * @export
 */
export declare const EditorialVideoApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial video content details
     * @param EditorialVideoApiGetEditorialVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialVideoApiGetEditorialVideoRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20043>;
    /**
     * This endpoint lists existing editorial video licenses.
     * @summary List editorial video licenses
     * @param EditorialVideoApiGetEditorialVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialVideoApiGetEditorialVideoLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @summary License editorial video content
     * @param EditorialVideoApiLicenseEditorialVideoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialVideoApiLicenseEditorialVideoRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial video categories
     * @param EditorialVideoApiListEditorialVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialVideoApiListEditorialVideoCategoriesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20042>;
    /**
     * This endpoint lists the details of editorial videos by ID list.
     * @summary List editorial videos details by ID list
     * @param EditorialVideoApiListEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialVideoApiListEditorialVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20044>;
    /**
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial video content
     * @param EditorialVideoApiSearchEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialVideoApiSearchEditorialVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20041>;
};
/**
 * EditorialVideoApi - factory interface
 * @export
 */
export declare const EditorialVideoApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial video content details
     * @param EditorialVideoApiGetEditorialVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: EditorialVideoApiGetEditorialVideoRequest, options?: RequestInit): Promise<InlineResponse20043>;
    /**
     * This endpoint lists existing editorial video licenses.
     * @summary List editorial video licenses
     * @param EditorialVideoApiGetEditorialVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: EditorialVideoApiGetEditorialVideoLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @summary License editorial video content
     * @param EditorialVideoApiLicenseEditorialVideoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: EditorialVideoApiLicenseEditorialVideoRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial video categories
     * @param EditorialVideoApiListEditorialVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: EditorialVideoApiListEditorialVideoCategoriesRequest, options?: RequestInit): Promise<InlineResponse20042>;
    /**
     * This endpoint lists the details of editorial videos by ID list.
     * @summary List editorial videos details by ID list
     * @param EditorialVideoApiListEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: EditorialVideoApiListEditorialVideosRequest, options?: RequestInit): Promise<InlineResponse20044>;
    /**
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial video content
     * @param EditorialVideoApiSearchEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters: EditorialVideoApiSearchEditorialVideosRequest, options?: RequestInit): Promise<InlineResponse20041>;
};
/**
 * EditorialVideoApi - object-oriented interface
 * @export
 * @class EditorialVideoApi
 * @extends {BaseAPI}
 */
export declare class EditorialVideoApi extends BaseAPI {
    /**
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get editorial video content details
     * @param EditorialVideoApiGetEditorialVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    get(requestParameters: EditorialVideoApiGetEditorialVideoRequest, options?: RequestInit): Promise<InlineResponse20043>;
    /**
     * This endpoint lists existing editorial video licenses.
     * @summary List editorial video licenses
     * @param EditorialVideoApiGetEditorialVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    listLicenses(requestParameters?: EditorialVideoApiGetEditorialVideoLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @summary License editorial video content
     * @param EditorialVideoApiLicenseEditorialVideoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    license(requestParameters?: EditorialVideoApiLicenseEditorialVideoRequest, options?: RequestInit): Promise<InlineResponse20037>;
    /**
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @summary List editorial video categories
     * @param EditorialVideoApiListEditorialVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    listCategories(requestParameters?: EditorialVideoApiListEditorialVideoCategoriesRequest, options?: RequestInit): Promise<InlineResponse20042>;
    /**
     * This endpoint lists the details of editorial videos by ID list.
     * @summary List editorial videos details by ID list
     * @param EditorialVideoApiListEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    list(requestParameters: EditorialVideoApiListEditorialVideosRequest, options?: RequestInit): Promise<InlineResponse20044>;
    /**
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search editorial video content
     * @param EditorialVideoApiSearchEditorialVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorialVideoApi
     */
    search(requestParameters: EditorialVideoApiSearchEditorialVideosRequest, options?: RequestInit): Promise<InlineResponse20041>;
}
/**
 * Request parameters for get.
 * @export
 * @interface GenerativeApiGetGenerativeImagesRequest
 */
export interface GenerativeApiGetGenerativeImagesRequest {
    /** The UUID of the generation request. */
    id: string;
}
/**
 * Request parameters for listHistory.
 * @export
 * @interface GenerativeApiGetGenerativeImagesHistoryRequest
 */
export interface GenerativeApiGetGenerativeImagesHistoryRequest {
    /** Page number of the results to return. */
    page?: number;
    /** Number of results to return per page. */
    per_page?: number;
    /** Sort order for generation request time. */
    sort_order?: string;
    /** Search generation history by prompt text. */
    prompt?: string;
    /** Filter generation history by generation status. */
    status?: string;
    /** Filter generation history by image generation category. */
    generation_type?: string;
}
/**
 * Request parameters for getInputs.
 * @export
 * @interface GenerativeApiGetGenerativeInputsRequest
 */
export interface GenerativeApiGetGenerativeInputsRequest {
}
/**
 * Request parameters for license.
 * @export
 * @interface GenerativeApiLicenseGenerativeImagesRequest
 */
export interface GenerativeApiLicenseGenerativeImagesRequest {
    /** List of generated image assets to register and license. */
    body: ImagesLicensesBody2;
    /** Subscription ID to use to license the image */
    subscription_id?: string;
    /** Image size */
    size?: string;
}
/**
 * Request parameters for generateImages.
 * @export
 * @interface GenerativeApiPostGenerativeImagesRequest
 */
export interface GenerativeApiPostGenerativeImagesRequest {
    /** Payload to request image generation */
    body: GenerativeImagesBody;
}
/**
 * Request parameters for submitForIpReview.
 * @export
 * @interface GenerativeApiSubmitGenerativeImageForIpReviewRequest
 */
export interface GenerativeApiSubmitGenerativeImageForIpReviewRequest {
    /** Generated image asset ID to submit for IP review. */
    id: string;
}
/**
 * GenerativeApi - fetch parameter creator
 * @export
 */
export declare const GenerativeApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * Gets the status, metadata, and preview links for a previously requested image generation.
     * @summary Get generated image results
     * @param GenerativeApiGetGenerativeImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: GenerativeApiGetGenerativeImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * Returns image generation history for the authenticated user.
     * @summary List image generation history
     * @param GenerativeApiGetGenerativeImagesHistoryRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listHistory(requestParameters?: GenerativeApiGetGenerativeImagesHistoryRequest, options?: RequestInit): FetchArgs;
    /**
     * Lists supported values that can be used as request parameters for generative endpoints. The text_to_image values apply to POST /v2/generative/images.
     * @summary List generative inputs
     * @param GenerativeApiGetGenerativeInputsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInputs(requestParameters?: GenerativeApiGetGenerativeInputsRequest, options?: RequestInit): FetchArgs;
    /**
     * Registers generated image assets and licenses the registered images.
     * @summary License generated images
     * @param GenerativeApiLicenseGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: GenerativeApiLicenseGenerativeImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * Starts an image generation request and returns a tracking ID.
     * @summary Generate images from a text prompt
     * @param GenerativeApiPostGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateImages(requestParameters?: GenerativeApiPostGenerativeImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * Registers a generated image asset and submits the registered image for IP review.
     * @summary Submit a generated image for IP review
     * @param GenerativeApiSubmitGenerativeImageForIpReviewRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitForIpReview(requestParameters: GenerativeApiSubmitGenerativeImageForIpReviewRequest, options?: RequestInit): FetchArgs;
};
/**
 * GenerativeApi - functional programming interface
 * @export
 */
export declare const GenerativeApiFp: (configuration?: Configuration) => {
    /**
     * Gets the status, metadata, and preview links for a previously requested image generation.
     * @summary Get generated image results
     * @param GenerativeApiGetGenerativeImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: GenerativeApiGetGenerativeImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20048>;
    /**
     * Returns image generation history for the authenticated user.
     * @summary List image generation history
     * @param GenerativeApiGetGenerativeImagesHistoryRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listHistory(requestParameters?: GenerativeApiGetGenerativeImagesHistoryRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20049>;
    /**
     * Lists supported values that can be used as request parameters for generative endpoints. The text_to_image values apply to POST /v2/generative/images.
     * @summary List generative inputs
     * @param GenerativeApiGetGenerativeInputsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInputs(requestParameters?: GenerativeApiGetGenerativeInputsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20045>;
    /**
     * Registers generated image assets and licenses the registered images.
     * @summary License generated images
     * @param GenerativeApiLicenseGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: GenerativeApiLicenseGenerativeImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20046>;
    /**
     * Starts an image generation request and returns a tracking ID.
     * @summary Generate images from a text prompt
     * @param GenerativeApiPostGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateImages(requestParameters?: GenerativeApiPostGenerativeImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2011>;
    /**
     * Registers a generated image asset and submits the registered image for IP review.
     * @summary Submit a generated image for IP review
     * @param GenerativeApiSubmitGenerativeImageForIpReviewRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitForIpReview(requestParameters: GenerativeApiSubmitGenerativeImageForIpReviewRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20047>;
};
/**
 * GenerativeApi - factory interface
 * @export
 */
export declare const GenerativeApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * Gets the status, metadata, and preview links for a previously requested image generation.
     * @summary Get generated image results
     * @param GenerativeApiGetGenerativeImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: GenerativeApiGetGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse20048>;
    /**
     * Returns image generation history for the authenticated user.
     * @summary List image generation history
     * @param GenerativeApiGetGenerativeImagesHistoryRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listHistory(requestParameters?: GenerativeApiGetGenerativeImagesHistoryRequest, options?: RequestInit): Promise<InlineResponse20049>;
    /**
     * Lists supported values that can be used as request parameters for generative endpoints. The text_to_image values apply to POST /v2/generative/images.
     * @summary List generative inputs
     * @param GenerativeApiGetGenerativeInputsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInputs(requestParameters?: GenerativeApiGetGenerativeInputsRequest, options?: RequestInit): Promise<InlineResponse20045>;
    /**
     * Registers generated image assets and licenses the registered images.
     * @summary License generated images
     * @param GenerativeApiLicenseGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: GenerativeApiLicenseGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse20046>;
    /**
     * Starts an image generation request and returns a tracking ID.
     * @summary Generate images from a text prompt
     * @param GenerativeApiPostGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateImages(requestParameters?: GenerativeApiPostGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse2011>;
    /**
     * Registers a generated image asset and submits the registered image for IP review.
     * @summary Submit a generated image for IP review
     * @param GenerativeApiSubmitGenerativeImageForIpReviewRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    submitForIpReview(requestParameters: GenerativeApiSubmitGenerativeImageForIpReviewRequest, options?: RequestInit): Promise<InlineResponse20047>;
};
/**
 * GenerativeApi - object-oriented interface
 * @export
 * @class GenerativeApi
 * @extends {BaseAPI}
 */
export declare class GenerativeApi extends BaseAPI {
    /**
     * Gets the status, metadata, and preview links for a previously requested image generation.
     * @summary Get generated image results
     * @param GenerativeApiGetGenerativeImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    get(requestParameters: GenerativeApiGetGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse20048>;
    /**
     * Returns image generation history for the authenticated user.
     * @summary List image generation history
     * @param GenerativeApiGetGenerativeImagesHistoryRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    listHistory(requestParameters?: GenerativeApiGetGenerativeImagesHistoryRequest, options?: RequestInit): Promise<InlineResponse20049>;
    /**
     * Lists supported values that can be used as request parameters for generative endpoints. The text_to_image values apply to POST /v2/generative/images.
     * @summary List generative inputs
     * @param GenerativeApiGetGenerativeInputsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    getInputs(requestParameters?: GenerativeApiGetGenerativeInputsRequest, options?: RequestInit): Promise<InlineResponse20045>;
    /**
     * Registers generated image assets and licenses the registered images.
     * @summary License generated images
     * @param GenerativeApiLicenseGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    license(requestParameters?: GenerativeApiLicenseGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse20046>;
    /**
     * Starts an image generation request and returns a tracking ID.
     * @summary Generate images from a text prompt
     * @param GenerativeApiPostGenerativeImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    generateImages(requestParameters?: GenerativeApiPostGenerativeImagesRequest, options?: RequestInit): Promise<InlineResponse2011>;
    /**
     * Registers a generated image asset and submits the registered image for IP review.
     * @summary Submit a generated image for IP review
     * @param GenerativeApiSubmitGenerativeImageForIpReviewRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenerativeApi
     */
    submitForIpReview(requestParameters: GenerativeApiSubmitGenerativeImageForIpReviewRequest, options?: RequestInit): Promise<InlineResponse20047>;
}
/**
 * Request parameters for addCollectionItems.
 * @export
 * @interface ImagesApiAddImageCollectionItemsRequest
 */
export interface ImagesApiAddImageCollectionItemsRequest {
    /** Array of image IDs to add to the collection */
    body: IdItemsBody;
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for bulkSearch.
 * @export
 * @interface ImagesApiBulkSearchImagesRequest
 */
export interface ImagesApiBulkSearchImagesRequest {
    /** List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters */
    body: Array<BulkSearchImagesBody>;
    /** Show images added on the specified date */
    added_date?: string;
    /** Show images added on or after the specified date */
    added_date_start?: string;
    /** Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio_min?: number;
    /** Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio_max?: number;
    /** Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio?: number;
    /** Show images added before the specified date */
    added_date_end?: string;
    /** Show images with the specified Shutterstock-defined category; specify a category name or ID */
    category?: string;
    /** Specify either a hexadecimal color in the format &#x27;4F21EA&#x27; or &#x27;grayscale&#x27;; the API returns images that use similar colors */
    color?: string;
    /** Show images with the specified contributor names or IDs, allows multiple */
    contributor?: Array<string>;
    /** Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search */
    contributor_country?: ContributorCountry1;
    /** Fields to display in the response; see the documentation for the fields parameter in the overview section */
    fields?: string;
    /** (Deprecated; use height_from and height_to instead) Show images with the specified height */
    height?: number;
    /** Show images with the specified height or larger, in pixels */
    height_from?: number;
    /** Show images with the specified height or smaller, in pixels */
    height_to?: number;
    /** Show images of the specified type */
    image_type?: Array<string>;
    /** Hide results with potentially unsafe keywords */
    keyword_safe_search?: boolean;
    /** Set query and result language (uses Accept-Language header if not set) */
    language?: string;
    /** Show only images with the specified license */
    license?: Array<string>;
    /** Show image results with the specified model IDs */
    model?: Array<string>;
    /** Show image results with horizontal or vertical orientation */
    orientation?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Show images of people with a signed model release */
    people_model_released?: boolean;
    /** Show images that feature people of the specified age category */
    people_age?: string;
    /** Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities */
    people_ethnicity?: Array<string>;
    /** Show images with people of the specified gender */
    people_gender?: string;
    /** Show images with the specified number of people */
    people_number?: number;
    /** Raise or lower search result rankings based on the result&#x27;s relevance to a specified region; you can provide a country code or an IP address from which the API infers a country */
    region?: Region1;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Sort by */
    sort?: string;
    /** Spellcheck the search query and return results on suggested spellings */
    spellcheck_query?: boolean;
    /** Amount of detail to render in the response */
    view?: string;
    /** (Deprecated; use width_from and width_to instead) Show images with the specified width */
    width?: number;
    /** Show images with the specified width or larger, in pixels */
    width_from?: number;
    /** Show images with the specified width or smaller, in pixels */
    width_to?: number;
}
/**
 * Request parameters for createCollection.
 * @export
 * @interface ImagesApiCreateImageCollectionRequest
 */
export interface ImagesApiCreateImageCollectionRequest {
    /** The names of the new collections */
    body: ImagesCollectionsBody;
}
/**
 * Request parameters for deleteCollection.
 * @export
 * @interface ImagesApiDeleteImageCollectionRequest
 */
export interface ImagesApiDeleteImageCollectionRequest {
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for deleteCollectionItems.
 * @export
 * @interface ImagesApiDeleteImageCollectionItemsRequest
 */
export interface ImagesApiDeleteImageCollectionItemsRequest {
    /** Collection ID */
    id: string;
    /** One or more image IDs to remove from the collection */
    item_id?: Array<string>;
}
/**
 * Request parameters for download.
 * @export
 * @interface ImagesApiDownloadImageRequest
 */
export interface ImagesApiDownloadImageRequest {
    /** Information about the images to redownload */
    body: IdDownloadsBody;
    /** License ID */
    id: string;
}
/**
 * Request parameters for get.
 * @export
 * @interface ImagesApiGetImageRequest
 */
export interface ImagesApiGetImageRequest {
    /** Image ID */
    id: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for getCollection.
 * @export
 * @interface ImagesApiGetImageCollectionRequest
 */
export interface ImagesApiGetImageCollectionRequest {
    /** Collection ID */
    id: string;
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
    /** Code to retrieve a shared collection */
    share_code?: string;
}
/**
 * Request parameters for listCollectionItems.
 * @export
 * @interface ImagesApiGetImageCollectionItemsRequest
 */
export interface ImagesApiGetImageCollectionItemsRequest {
    /** Collection ID */
    id: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Code to retrieve the contents of a shared collection */
    share_code?: string;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for listCollections.
 * @export
 * @interface ImagesApiGetImageCollectionListRequest
 */
export interface ImagesApiGetImageCollectionListRequest {
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
}
/**
 * Request parameters for getKeywordSuggestions.
 * @export
 * @interface ImagesApiGetImageKeywordSuggestionsRequest
 */
export interface ImagesApiGetImageKeywordSuggestionsRequest {
    /** Plain text to extract keywords from */
    body: SearchSuggestionsBody;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface ImagesApiGetImageLicenseListRequest
 */
export interface ImagesApiGetImageLicenseListRequest {
    /** Show licenses for the specified image ID */
    image_id?: string;
    /** Show images that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60; */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for list.
 * @export
 * @interface ImagesApiGetImageListRequest
 */
export interface ImagesApiGetImageListRequest {
    /** One or more image IDs */
    id: Array<string>;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for listRecommendations.
 * @export
 * @interface ImagesApiGetImageRecommendationsRequest
 */
export interface ImagesApiGetImageRecommendationsRequest {
    /** Image IDs */
    id: Array<string>;
    /** Maximum number of results returned in the response */
    max_items?: number;
    /** Restrict results to safe images */
    safe?: boolean;
}
/**
 * Request parameters for getSuggestions.
 * @export
 * @interface ImagesApiGetImageSuggestionsRequest
 */
export interface ImagesApiGetImageSuggestionsRequest {
    /** Search term for which you want keyword suggestions */
    query: string;
    /** Limit the number of suggestions */
    limit?: number;
}
/**
 * Request parameters for listUpdated.
 * @export
 * @interface ImagesApiGetUpdatedImagesRequest
 */
export interface ImagesApiGetUpdatedImagesRequest {
    /** Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways */
    type?: Array<string>;
    /** Show images updated on or after the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. */
    start_date?: string;
    /** Show images updated before the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. Please note that the end date must be at least 5 minutes after the start date. */
    end_date?: string;
    /** Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request */
    interval?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for license.
 * @export
 * @interface ImagesApiLicenseImagesRequest
 */
export interface ImagesApiLicenseImagesRequest {
    /** List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters */
    body: ImagesLicensesBody;
    /** Subscription ID to use to license the image */
    subscription_id?: string;
    /** (Deprecated) Image format */
    format?: string;
    /** Image size */
    size?: string;
    /** Search ID that was provided in the results of an image search */
    search_id?: string;
}
/**
 * Request parameters for listCategories.
 * @export
 * @interface ImagesApiListImageCategoriesRequest
 */
export interface ImagesApiListImageCategoriesRequest {
    /** Language for the keywords and categories in the response */
    language?: string;
}
/**
 * Request parameters for listSimilar.
 * @export
 * @interface ImagesApiListSimilarImagesRequest
 */
export interface ImagesApiListSimilarImagesRequest {
    /** Image ID */
    id: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Amount of detail to render in the response */
    view?: string;
}
/**
 * Request parameters for renameCollection.
 * @export
 * @interface ImagesApiRenameImageCollectionRequest
 */
export interface ImagesApiRenameImageCollectionRequest {
    /** The new name for the collection */
    body: CollectionsIdBody;
    /** Collection ID */
    id: string;
}
/**
 * Request parameters for search.
 * @export
 * @interface ImagesApiSearchImagesRequest
 */
export interface ImagesApiSearchImagesRequest {
    /** Search within different Shutterstock owned libraries */
    library?: Array<string>;
    /** Show images added on the specified date */
    added_date?: string;
    /** Show images added on or after the specified date */
    added_date_start?: string;
    /** Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio_min?: number;
    /** Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio_max?: number;
    /** Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image */
    aspect_ratio?: number;
    /** Show images added before the specified date */
    added_date_end?: string;
    /** Show images with the specified Shutterstock-defined category; specify a category name or ID */
    category?: string;
    /** Specify either a hexadecimal color in the format &#x27;4F21EA&#x27; or &#x27;grayscale&#x27;; the API returns images that use similar colors */
    color?: string;
    /** Show images with the specified contributor names or IDs, allows multiple */
    contributor?: Array<string>;
    /** Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search */
    contributor_country?: ContributorCountry;
    /** Fields to display in the response; see the documentation for the fields parameter in the overview section */
    fields?: string;
    /** (Deprecated; use height_from and height_to instead) Show images with the specified height */
    height?: number;
    /** Show images with the specified height or larger, in pixels */
    height_from?: number;
    /** Show images with the specified height or smaller, in pixels */
    height_to?: number;
    /** Show images of the specified type */
    image_type?: Array<string>;
    /** Hide results with potentially unsafe keywords */
    keyword_safe_search?: boolean;
    /** Set query and result language (uses Accept-Language header if not set) */
    language?: string;
    /** Show only images with the specified license */
    license?: Array<string>;
    /** Show image results with the specified model IDs */
    model?: Array<string>;
    /** Show image results with horizontal or vertical orientation */
    orientation?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Show images of people with a signed model release */
    people_model_released?: boolean;
    /** Show images that feature people of the specified age category */
    people_age?: string;
    /** Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities */
    people_ethnicity?: Array<string>;
    /** Show images with people of the specified gender */
    people_gender?: string;
    /** Show images with the specified number of people */
    people_number?: number;
    /** One or more search terms separated by spaces; you can use NOT to filter out images that match a term */
    query?: string;
    /** Require exact keyword matching and disable enhanced search behavior */
    exact_match?: boolean;
    /** Raise or lower search result rankings based on the result&#x27;s relevance to a specified region; you can provide a country code or an IP address from which the API infers a country */
    region?: Region;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Sort by */
    sort?: string;
    /** Spellcheck the search query and return results on suggested spellings */
    spellcheck_query?: boolean;
    /** Amount of detail to render in the response */
    view?: string;
    /** (Deprecated; use width_from and width_to instead) Show images with the specified width */
    width?: number;
    /** Show images with the specified width or larger, in pixels */
    width_from?: number;
    /** Show images with the specified width or smaller, in pixels */
    width_to?: number;
}
/**
 * ImagesApi - fetch parameter creator
 * @export
 */
export declare const ImagesApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more images to a collection by image IDs.
     * @summary Add images to collections
     * @param ImagesApiAddImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: ImagesApiAddImageCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
     * @summary Run multiple image searches
     * @param ImagesApiBulkSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSearch(requestParameters?: ImagesApiBulkSearchImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
     * @summary Create image collections
     * @param ImagesApiCreateImageCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: ImagesApiCreateImageCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint deletes an image collection.
     * @summary Delete image collections
     * @param ImagesApiDeleteImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: ImagesApiDeleteImageCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint removes one or more images from a collection.
     * @summary Remove images from collections
     * @param ImagesApiDeleteImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: ImagesApiDeleteImageCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download images
     * @param ImagesApiDownloadImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: ImagesApiDownloadImageRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get details about images
     * @param ImagesApiGetImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ImagesApiGetImageRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
     * @summary Get the details of image collections
     * @param ImagesApiGetImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: ImagesApiGetImageCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the IDs of images in a collection and the date that each was added.
     * @summary Get the contents of image collections
     * @param ImagesApiGetImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ImagesApiGetImageCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists your collections of images and their basic attributes.
     * @summary List image collections
     * @param ImagesApiGetImageCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: ImagesApiGetImageCollectionListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns up to 10 important keywords from a block of plain text.
     * @summary Get keywords from text
     * @param ImagesApiGetImageKeywordSuggestionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywordSuggestions(requestParameters?: ImagesApiGetImageKeywordSuggestionsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing licenses.
     * @summary List image licenses
     * @param ImagesApiGetImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: ImagesApiGetImageLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists information about one or more images, including the available sizes.
     * @summary List images
     * @param ImagesApiGetImageListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ImagesApiGetImageListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
     * @summary List recommended images
     * @param ImagesApiGetImageRecommendationsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRecommendations(requestParameters: ImagesApiGetImageRecommendationsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param ImagesApiGetImageSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: ImagesApiGetImageSuggestionsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated images
     * @param ImagesApiGetUpdatedImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: ImagesApiGetUpdatedImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License images
     * @param ImagesApiLicenseImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: ImagesApiLicenseImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
     * @summary List image categories
     * @param ImagesApiListImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: ImagesApiListImageCategoriesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns images that are visually similar to an image that you specify.
     * @summary List similar images
     * @param ImagesApiListSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: ImagesApiListSimilarImagesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint sets a new name for an image collection.
     * @summary Rename image collections
     * @param ImagesApiRenameImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: ImagesApiRenameImageCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
     * @summary Search for images
     * @param ImagesApiSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: ImagesApiSearchImagesRequest, options?: RequestInit): FetchArgs;
};
/**
 * ImagesApi - functional programming interface
 * @export
 */
export declare const ImagesApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more images to a collection by image IDs.
     * @summary Add images to collections
     * @param ImagesApiAddImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: ImagesApiAddImageCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
     * @summary Run multiple image searches
     * @param ImagesApiBulkSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSearch(requestParameters?: ImagesApiBulkSearchImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001>;
    /**
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
     * @summary Create image collections
     * @param ImagesApiCreateImageCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: ImagesApiCreateImageCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse201>;
    /**
     * This endpoint deletes an image collection.
     * @summary Delete image collections
     * @param ImagesApiDeleteImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: ImagesApiDeleteImageCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint removes one or more images from a collection.
     * @summary Remove images from collections
     * @param ImagesApiDeleteImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: ImagesApiDeleteImageCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download images
     * @param ImagesApiDownloadImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: ImagesApiDownloadImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2009>;
    /**
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get details about images
     * @param ImagesApiGetImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ImagesApiGetImageRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2005>;
    /**
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
     * @summary Get the details of image collections
     * @param ImagesApiGetImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: ImagesApiGetImageCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of images in a collection and the date that each was added.
     * @summary Get the contents of image collections
     * @param ImagesApiGetImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ImagesApiGetImageCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of images and their basic attributes.
     * @summary List image collections
     * @param ImagesApiGetImageCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: ImagesApiGetImageCollectionListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20011>;
    /**
     * This endpoint returns up to 10 important keywords from a block of plain text.
     * @summary Get keywords from text
     * @param ImagesApiGetImageKeywordSuggestionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywordSuggestions(requestParameters?: ImagesApiGetImageKeywordSuggestionsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2003>;
    /**
     * This endpoint lists existing licenses.
     * @summary List image licenses
     * @param ImagesApiGetImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: ImagesApiGetImageLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more images, including the available sizes.
     * @summary List images
     * @param ImagesApiGetImageListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ImagesApiGetImageListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2004>;
    /**
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
     * @summary List recommended images
     * @param ImagesApiGetImageRecommendationsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRecommendations(requestParameters: ImagesApiGetImageRecommendationsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20010>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param ImagesApiGetImageSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: ImagesApiGetImageSuggestionsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2002>;
    /**
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated images
     * @param ImagesApiGetUpdatedImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: ImagesApiGetUpdatedImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20014>;
    /**
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License images
     * @param ImagesApiLicenseImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: ImagesApiLicenseImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2008>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
     * @summary List image categories
     * @param ImagesApiListImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: ImagesApiListImageCategoriesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2006>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify.
     * @summary List similar images
     * @param ImagesApiListSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: ImagesApiListSimilarImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200>;
    /**
     * This endpoint sets a new name for an image collection.
     * @summary Rename image collections
     * @param ImagesApiRenameImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: ImagesApiRenameImageCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
     * @summary Search for images
     * @param ImagesApiSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: ImagesApiSearchImagesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200>;
};
/**
 * ImagesApi - factory interface
 * @export
 */
export declare const ImagesApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint adds one or more images to a collection by image IDs.
     * @summary Add images to collections
     * @param ImagesApiAddImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: ImagesApiAddImageCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
     * @summary Run multiple image searches
     * @param ImagesApiBulkSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSearch(requestParameters?: ImagesApiBulkSearchImagesRequest, options?: RequestInit): Promise<InlineResponse2001>;
    /**
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
     * @summary Create image collections
     * @param ImagesApiCreateImageCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: ImagesApiCreateImageCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes an image collection.
     * @summary Delete image collections
     * @param ImagesApiDeleteImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: ImagesApiDeleteImageCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more images from a collection.
     * @summary Remove images from collections
     * @param ImagesApiDeleteImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: ImagesApiDeleteImageCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download images
     * @param ImagesApiDownloadImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: ImagesApiDownloadImageRequest, options?: RequestInit): Promise<InlineResponse2009>;
    /**
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get details about images
     * @param ImagesApiGetImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: ImagesApiGetImageRequest, options?: RequestInit): Promise<InlineResponse2005>;
    /**
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
     * @summary Get the details of image collections
     * @param ImagesApiGetImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: ImagesApiGetImageCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of images in a collection and the date that each was added.
     * @summary Get the contents of image collections
     * @param ImagesApiGetImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: ImagesApiGetImageCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of images and their basic attributes.
     * @summary List image collections
     * @param ImagesApiGetImageCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: ImagesApiGetImageCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint returns up to 10 important keywords from a block of plain text.
     * @summary Get keywords from text
     * @param ImagesApiGetImageKeywordSuggestionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeywordSuggestions(requestParameters?: ImagesApiGetImageKeywordSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2003>;
    /**
     * This endpoint lists existing licenses.
     * @summary List image licenses
     * @param ImagesApiGetImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: ImagesApiGetImageLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more images, including the available sizes.
     * @summary List images
     * @param ImagesApiGetImageListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: ImagesApiGetImageListRequest, options?: RequestInit): Promise<InlineResponse2004>;
    /**
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
     * @summary List recommended images
     * @param ImagesApiGetImageRecommendationsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listRecommendations(requestParameters: ImagesApiGetImageRecommendationsRequest, options?: RequestInit): Promise<InlineResponse20010>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param ImagesApiGetImageSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: ImagesApiGetImageSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2002>;
    /**
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated images
     * @param ImagesApiGetUpdatedImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: ImagesApiGetUpdatedImagesRequest, options?: RequestInit): Promise<InlineResponse20014>;
    /**
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License images
     * @param ImagesApiLicenseImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: ImagesApiLicenseImagesRequest, options?: RequestInit): Promise<InlineResponse2008>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
     * @summary List image categories
     * @param ImagesApiListImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: ImagesApiListImageCategoriesRequest, options?: RequestInit): Promise<InlineResponse2006>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify.
     * @summary List similar images
     * @param ImagesApiListSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: ImagesApiListSimilarImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
    /**
     * This endpoint sets a new name for an image collection.
     * @summary Rename image collections
     * @param ImagesApiRenameImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: ImagesApiRenameImageCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
     * @summary Search for images
     * @param ImagesApiSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: ImagesApiSearchImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
};
/**
 * ImagesApi - object-oriented interface
 * @export
 * @class ImagesApi
 * @extends {BaseAPI}
 */
export declare class ImagesApi extends BaseAPI {
    /**
     * This endpoint adds one or more images to a collection by image IDs.
     * @summary Add images to collections
     * @param ImagesApiAddImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    addCollectionItems(requestParameters: ImagesApiAddImageCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
     * @summary Run multiple image searches
     * @param ImagesApiBulkSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    bulkSearch(requestParameters?: ImagesApiBulkSearchImagesRequest, options?: RequestInit): Promise<InlineResponse2001>;
    /**
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
     * @summary Create image collections
     * @param ImagesApiCreateImageCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    createCollection(requestParameters?: ImagesApiCreateImageCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes an image collection.
     * @summary Delete image collections
     * @param ImagesApiDeleteImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    deleteCollection(requestParameters: ImagesApiDeleteImageCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more images from a collection.
     * @summary Remove images from collections
     * @param ImagesApiDeleteImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    deleteCollectionItems(requestParameters: ImagesApiDeleteImageCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download images
     * @param ImagesApiDownloadImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    download(requestParameters: ImagesApiDownloadImageRequest, options?: RequestInit): Promise<InlineResponse2009>;
    /**
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
     * @summary Get details about images
     * @param ImagesApiGetImageRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    get(requestParameters: ImagesApiGetImageRequest, options?: RequestInit): Promise<InlineResponse2005>;
    /**
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
     * @summary Get the details of image collections
     * @param ImagesApiGetImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    getCollection(requestParameters: ImagesApiGetImageCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of images in a collection and the date that each was added.
     * @summary Get the contents of image collections
     * @param ImagesApiGetImageCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listCollectionItems(requestParameters: ImagesApiGetImageCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of images and their basic attributes.
     * @summary List image collections
     * @param ImagesApiGetImageCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listCollections(requestParameters?: ImagesApiGetImageCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint returns up to 10 important keywords from a block of plain text.
     * @summary Get keywords from text
     * @param ImagesApiGetImageKeywordSuggestionsRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    getKeywordSuggestions(requestParameters?: ImagesApiGetImageKeywordSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2003>;
    /**
     * This endpoint lists existing licenses.
     * @summary List image licenses
     * @param ImagesApiGetImageLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listLicenses(requestParameters?: ImagesApiGetImageLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more images, including the available sizes.
     * @summary List images
     * @param ImagesApiGetImageListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    list(requestParameters: ImagesApiGetImageListRequest, options?: RequestInit): Promise<InlineResponse2004>;
    /**
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
     * @summary List recommended images
     * @param ImagesApiGetImageRecommendationsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listRecommendations(requestParameters: ImagesApiGetImageRecommendationsRequest, options?: RequestInit): Promise<InlineResponse20010>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param ImagesApiGetImageSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    getSuggestions(requestParameters: ImagesApiGetImageSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2002>;
    /**
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated images
     * @param ImagesApiGetUpdatedImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listUpdated(requestParameters?: ImagesApiGetUpdatedImagesRequest, options?: RequestInit): Promise<InlineResponse20014>;
    /**
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License images
     * @param ImagesApiLicenseImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    license(requestParameters?: ImagesApiLicenseImagesRequest, options?: RequestInit): Promise<InlineResponse2008>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
     * @summary List image categories
     * @param ImagesApiListImageCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listCategories(requestParameters?: ImagesApiListImageCategoriesRequest, options?: RequestInit): Promise<InlineResponse2006>;
    /**
     * This endpoint returns images that are visually similar to an image that you specify.
     * @summary List similar images
     * @param ImagesApiListSimilarImagesRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    listSimilar(requestParameters: ImagesApiListSimilarImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
    /**
     * This endpoint sets a new name for an image collection.
     * @summary Rename image collections
     * @param ImagesApiRenameImageCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    renameCollection(requestParameters: ImagesApiRenameImageCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
     * @summary Search for images
     * @param ImagesApiSearchImagesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImagesApi
     */
    search(requestParameters?: ImagesApiSearchImagesRequest, options?: RequestInit): Promise<InlineResponse200>;
}
/**
 * Request parameters for authorize.
 * @export
 * @interface OauthApiAuthorizeRequest
 */
export interface OauthApiAuthorizeRequest {
    /** Client ID (Consumer Key) of your application */
    client_id: string;
    /** The callback URI to send the request to after authorization; must use a host name that is registered with your application */
    redirect_uri: string;
    /** Type of temporary authorization code that will be used to generate an access code; the only valid value is &#x27;code&#x27; */
    response_type: string;
    /** Unique value used by the calling app to verify the request */
    state: string;
    /** User type to be authorized (usually &#x27;customer&#x27;) */
    realm?: string;
    /** Space-separated list of scopes to be authorized */
    scope?: string;
}
/**
 * Request parameters for createAccessToken.
 * @export
 * @interface OauthApiCreateAccessTokenRequest
 */
export interface OauthApiCreateAccessTokenRequest {
    /**  */
    client_id?: string;
    /**  */
    client_secret?: string;
    /**  */
    code?: string;
    /**  */
    grant_type?: string;
    /**  */
    realm?: string;
    /**  */
    expires?: string;
    /**  */
    refresh_token?: string;
    /**  */
    body?: OauthAccessTokenBody1;
}
/**
 * OauthApi - fetch parameter creator
 * @export
 */
export declare const OauthApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @summary Authorize applications
     * @param OauthApiAuthorizeRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authorize(requestParameters: OauthApiAuthorizeRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @summary Get access tokens
     * @param OauthApiCreateAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccessToken(requestParameters?: OauthApiCreateAccessTokenRequest, options?: RequestInit): FetchArgs;
};
/**
 * OauthApi - functional programming interface
 * @export
 */
export declare const OauthApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @summary Authorize applications
     * @param OauthApiAuthorizeRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authorize(requestParameters: OauthApiAuthorizeRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @summary Get access tokens
     * @param OauthApiCreateAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccessToken(requestParameters?: OauthApiCreateAccessTokenRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20060>;
};
/**
 * OauthApi - factory interface
 * @export
 */
export declare const OauthApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @summary Authorize applications
     * @param OauthApiAuthorizeRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authorize(requestParameters: OauthApiAuthorizeRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @summary Get access tokens
     * @param OauthApiCreateAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAccessToken(requestParameters?: OauthApiCreateAccessTokenRequest, options?: RequestInit): Promise<InlineResponse20060>;
};
/**
 * OauthApi - object-oriented interface
 * @export
 * @class OauthApi
 * @extends {BaseAPI}
 */
export declare class OauthApi extends BaseAPI {
    /**
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @summary Authorize applications
     * @param OauthApiAuthorizeRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApi
     */
    authorize(requestParameters: OauthApiAuthorizeRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @summary Get access tokens
     * @param OauthApiCreateAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApi
     */
    createAccessToken(requestParameters?: OauthApiCreateAccessTokenRequest, options?: RequestInit): Promise<InlineResponse20060>;
}
/**
 * Request parameters for download.
 * @export
 * @interface SoundEffectsApiDownloadSfxRequest
 */
export interface SoundEffectsApiDownloadSfxRequest {
    /** License ID */
    id: string;
}
/**
 * Request parameters for get.
 * @export
 * @interface SoundEffectsApiGetSfxDetailsRequest
 */
export interface SoundEffectsApiGetSfxDetailsRequest {
    /** Audio track ID */
    id: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** Which library to fetch from */
    library?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface SoundEffectsApiGetSfxLicenseListRequest
 */
export interface SoundEffectsApiGetSfxLicenseListRequest {
    /** Show licenses for the specified sound effects ID */
    sfx_id?: string;
    /** Show sound effects that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60; */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort order */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter by the license ID */
    license_id?: string;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for list.
 * @export
 * @interface SoundEffectsApiGetSfxListDetailsRequest
 */
export interface SoundEffectsApiGetSfxListDetailsRequest {
    /** One or more sound effect IDs */
    id: Array<string>;
    /** Amount of detail to render in the response */
    view?: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Which library to fetch from */
    library?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for license.
 * @export
 * @interface SoundEffectsApiLicensesSFXRequest
 */
export interface SoundEffectsApiLicensesSFXRequest {
    /**  */
    body: SfxLicensesBody;
}
/**
 * Request parameters for search.
 * @export
 * @interface SoundEffectsApiSearchSFXRequest
 */
export interface SoundEffectsApiSearchSFXRequest {
    /** Show sound effects added on the specified date */
    added_date?: string;
    /** Show sound effects added on or after the specified date */
    added_date_start?: string;
    /** Show sound effects added before the specified date */
    added_date_end?: string;
    /** Show sound effects with the specified duration in seconds */
    duration?: number;
    /** Show sound effects with the specified duration or longer in seconds */
    duration_from?: number;
    /** Show sound effects with the specified duration or shorter in seconds */
    duration_to?: number;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** One or more search terms separated by spaces */
    query?: string;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Sort by */
    sort?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** Set query and result language (uses Accept-Language header if not set) */
    language?: string;
}
/**
 * SoundEffectsApi - fetch parameter creator
 * @export
 */
export declare const SoundEffectsApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download sound effects
     * @param SoundEffectsApiDownloadSfxRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: SoundEffectsApiDownloadSfxRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about a sound effect.
     * @summary Get details about sound effects
     * @param SoundEffectsApiGetSfxDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: SoundEffectsApiGetSfxDetailsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing licenses.
     * @summary List sound effects licenses
     * @param SoundEffectsApiGetSfxLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: SoundEffectsApiGetSfxLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about sound effects.
     * @summary List details about sound effects
     * @param SoundEffectsApiGetSfxListDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: SoundEffectsApiGetSfxListDetailsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint licenses sounds effect assets.
     * @summary License sound effects
     * @param SoundEffectsApiLicensesSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: SoundEffectsApiLicensesSFXRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @summary Search for sound effects
     * @param SoundEffectsApiSearchSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: SoundEffectsApiSearchSFXRequest, options?: RequestInit): FetchArgs;
};
/**
 * SoundEffectsApi - functional programming interface
 * @export
 */
export declare const SoundEffectsApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download sound effects
     * @param SoundEffectsApiDownloadSfxRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: SoundEffectsApiDownloadSfxRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20031>;
    /**
     * This endpoint shows information about a sound effect.
     * @summary Get details about sound effects
     * @param SoundEffectsApiGetSfxDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: SoundEffectsApiGetSfxDetailsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20028>;
    /**
     * This endpoint lists existing licenses.
     * @summary List sound effects licenses
     * @param SoundEffectsApiGetSfxLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: SoundEffectsApiGetSfxLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     * This endpoint shows information about sound effects.
     * @summary List details about sound effects
     * @param SoundEffectsApiGetSfxListDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: SoundEffectsApiGetSfxListDetailsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20029>;
    /**
     * This endpoint licenses sounds effect assets.
     * @summary License sound effects
     * @param SoundEffectsApiLicensesSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: SoundEffectsApiLicensesSFXRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20030>;
    /**
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @summary Search for sound effects
     * @param SoundEffectsApiSearchSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: SoundEffectsApiSearchSFXRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20027>;
};
/**
 * SoundEffectsApi - factory interface
 * @export
 */
export declare const SoundEffectsApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download sound effects
     * @param SoundEffectsApiDownloadSfxRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: SoundEffectsApiDownloadSfxRequest, options?: RequestInit): Promise<InlineResponse20031>;
    /**
     * This endpoint shows information about a sound effect.
     * @summary Get details about sound effects
     * @param SoundEffectsApiGetSfxDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: SoundEffectsApiGetSfxDetailsRequest, options?: RequestInit): Promise<InlineResponse20028>;
    /**
     * This endpoint lists existing licenses.
     * @summary List sound effects licenses
     * @param SoundEffectsApiGetSfxLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: SoundEffectsApiGetSfxLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint shows information about sound effects.
     * @summary List details about sound effects
     * @param SoundEffectsApiGetSfxListDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: SoundEffectsApiGetSfxListDetailsRequest, options?: RequestInit): Promise<InlineResponse20029>;
    /**
     * This endpoint licenses sounds effect assets.
     * @summary License sound effects
     * @param SoundEffectsApiLicensesSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: SoundEffectsApiLicensesSFXRequest, options?: RequestInit): Promise<InlineResponse20030>;
    /**
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @summary Search for sound effects
     * @param SoundEffectsApiSearchSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: SoundEffectsApiSearchSFXRequest, options?: RequestInit): Promise<InlineResponse20027>;
};
/**
 * SoundEffectsApi - object-oriented interface
 * @export
 * @class SoundEffectsApi
 * @extends {BaseAPI}
 */
export declare class SoundEffectsApi extends BaseAPI {
    /**
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @summary Download sound effects
     * @param SoundEffectsApiDownloadSfxRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    download(requestParameters: SoundEffectsApiDownloadSfxRequest, options?: RequestInit): Promise<InlineResponse20031>;
    /**
     * This endpoint shows information about a sound effect.
     * @summary Get details about sound effects
     * @param SoundEffectsApiGetSfxDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    get(requestParameters: SoundEffectsApiGetSfxDetailsRequest, options?: RequestInit): Promise<InlineResponse20028>;
    /**
     * This endpoint lists existing licenses.
     * @summary List sound effects licenses
     * @param SoundEffectsApiGetSfxLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    listLicenses(requestParameters?: SoundEffectsApiGetSfxLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint shows information about sound effects.
     * @summary List details about sound effects
     * @param SoundEffectsApiGetSfxListDetailsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    list(requestParameters: SoundEffectsApiGetSfxListDetailsRequest, options?: RequestInit): Promise<InlineResponse20029>;
    /**
     * This endpoint licenses sounds effect assets.
     * @summary License sound effects
     * @param SoundEffectsApiLicensesSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    license(requestParameters?: SoundEffectsApiLicensesSFXRequest, options?: RequestInit): Promise<InlineResponse20030>;
    /**
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @summary Search for sound effects
     * @param SoundEffectsApiSearchSFXRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SoundEffectsApi
     */
    search(requestParameters?: SoundEffectsApiSearchSFXRequest, options?: RequestInit): Promise<InlineResponse20027>;
}
/**
 * Request parameters for echo.
 * @export
 * @interface TestApiEchoRequest
 */
export interface TestApiEchoRequest {
    /** Text to echo */
    text?: string;
}
/**
 * Request parameters for validate.
 * @export
 * @interface TestApiValidateRequest
 */
export interface TestApiValidateRequest {
    /** Integer ID */
    id: number;
    /** List of tags */
    tag?: Array<string>;
    /** Boolean flag */
    enabled?: boolean;
    /** User agent */
    user_agent?: string;
}
/**
 * TestApi - fetch parameter creator
 * @export
 */
export declare const TestApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Echo text
     * @param TestApiEchoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    echo(requestParameters?: TestApiEchoRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary Validate input
     * @param TestApiValidateRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validate(requestParameters: TestApiValidateRequest, options?: RequestInit): FetchArgs;
};
/**
 * TestApi - functional programming interface
 * @export
 */
export declare const TestApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Echo text
     * @param TestApiEchoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    echo(requestParameters?: TestApiEchoRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20058>;
    /**
     *
     * @summary Validate input
     * @param TestApiValidateRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validate(requestParameters: TestApiValidateRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20059>;
};
/**
 * TestApi - factory interface
 * @export
 */
export declare const TestApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Echo text
     * @param TestApiEchoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    echo(requestParameters?: TestApiEchoRequest, options?: RequestInit): Promise<InlineResponse20058>;
    /**
     *
     * @summary Validate input
     * @param TestApiValidateRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validate(requestParameters: TestApiValidateRequest, options?: RequestInit): Promise<InlineResponse20059>;
};
/**
 * TestApi - object-oriented interface
 * @export
 * @class TestApi
 * @extends {BaseAPI}
 */
export declare class TestApi extends BaseAPI {
    /**
     *
     * @summary Echo text
     * @param TestApiEchoRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestApi
     */
    echo(requestParameters?: TestApiEchoRequest, options?: RequestInit): Promise<InlineResponse20058>;
    /**
     *
     * @summary Validate input
     * @param TestApiValidateRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestApi
     */
    validate(requestParameters: TestApiValidateRequest, options?: RequestInit): Promise<InlineResponse20059>;
}
/**
 * Request parameters for getAccessToken.
 * @export
 * @interface UsersApiGetAccessTokenRequest
 */
export interface UsersApiGetAccessTokenRequest {
}
/**
 * Request parameters for get.
 * @export
 * @interface UsersApiGetUserRequest
 */
export interface UsersApiGetUserRequest {
}
/**
 * Request parameters for listSubscriptions.
 * @export
 * @interface UsersApiGetUserSubscriptionListRequest
 */
export interface UsersApiGetUserSubscriptionListRequest {
}
/**
 * UsersApi - fetch parameter creator
 * @export
 */
export declare const UsersApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get access token details
     * @param UsersApiGetAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccessToken(requestParameters?: UsersApiGetAccessTokenRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary Get user details
     * @param UsersApiGetUserRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters?: UsersApiGetUserRequest, options?: RequestInit): FetchArgs;
    /**
     *
     * @summary List user subscriptions
     * @param UsersApiGetUserSubscriptionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptions(requestParameters?: UsersApiGetUserSubscriptionListRequest, options?: RequestInit): FetchArgs;
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export declare const UsersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get access token details
     * @param UsersApiGetAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccessToken(requestParameters?: UsersApiGetAccessTokenRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20056>;
    /**
     *
     * @summary Get user details
     * @param UsersApiGetUserRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters?: UsersApiGetUserRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20055>;
    /**
     *
     * @summary List user subscriptions
     * @param UsersApiGetUserSubscriptionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptions(requestParameters?: UsersApiGetUserSubscriptionListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20057>;
};
/**
 * UsersApi - factory interface
 * @export
 */
export declare const UsersApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get access token details
     * @param UsersApiGetAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccessToken(requestParameters?: UsersApiGetAccessTokenRequest, options?: RequestInit): Promise<InlineResponse20056>;
    /**
     *
     * @summary Get user details
     * @param UsersApiGetUserRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters?: UsersApiGetUserRequest, options?: RequestInit): Promise<InlineResponse20055>;
    /**
     *
     * @summary List user subscriptions
     * @param UsersApiGetUserSubscriptionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptions(requestParameters?: UsersApiGetUserSubscriptionListRequest, options?: RequestInit): Promise<InlineResponse20057>;
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
    /**
     *
     * @summary Get access token details
     * @param UsersApiGetAccessTokenRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getAccessToken(requestParameters?: UsersApiGetAccessTokenRequest, options?: RequestInit): Promise<InlineResponse20056>;
    /**
     *
     * @summary Get user details
     * @param UsersApiGetUserRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    get(requestParameters?: UsersApiGetUserRequest, options?: RequestInit): Promise<InlineResponse20055>;
    /**
     *
     * @summary List user subscriptions
     * @param UsersApiGetUserSubscriptionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    listSubscriptions(requestParameters?: UsersApiGetUserSubscriptionListRequest, options?: RequestInit): Promise<InlineResponse20057>;
}
/**
 * Request parameters for addCollectionItems.
 * @export
 * @interface VideosApiAddVideoCollectionItemsRequest
 */
export interface VideosApiAddVideoCollectionItemsRequest {
    /** Array of video IDs to add to the collection */
    body: IdItemsBody1;
    /** The ID of the collection to which items should be added */
    id: string;
}
/**
 * Request parameters for createCollection.
 * @export
 * @interface VideosApiCreateVideoCollectionRequest
 */
export interface VideosApiCreateVideoCollectionRequest {
    /** Collection metadata */
    body: VideosCollectionsBody;
}
/**
 * Request parameters for deleteCollection.
 * @export
 * @interface VideosApiDeleteVideoCollectionRequest
 */
export interface VideosApiDeleteVideoCollectionRequest {
    /** The ID of the collection to delete */
    id: string;
}
/**
 * Request parameters for deleteCollectionItems.
 * @export
 * @interface VideosApiDeleteVideoCollectionItemsRequest
 */
export interface VideosApiDeleteVideoCollectionItemsRequest {
    /** The ID of the Collection from which items will be deleted */
    id: string;
    /** One or more video IDs to remove from the collection */
    item_id?: Array<string>;
}
/**
 * Request parameters for download.
 * @export
 * @interface VideosApiDownloadVideosRequest
 */
export interface VideosApiDownloadVideosRequest {
    /** Information about the videos to redownload */
    body: IdDownloadsBody1;
    /** The license ID of the item to (re)download. The download links in the response are valid for 8 hours. */
    id: string;
}
/**
 * Request parameters for listSimilar.
 * @export
 * @interface VideosApiFindSimilarVideosRequest
 */
export interface VideosApiFindSimilarVideosRequest {
    /** The ID of a video for which similar videos should be returned */
    id: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Amount of detail to render in the response */
    view?: string;
}
/**
 * Request parameters for listUpdated.
 * @export
 * @interface VideosApiGetUpdatedVideosRequest
 */
export interface VideosApiGetUpdatedVideosRequest {
    /** Show videos updated on or after the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. */
    start_date?: string;
    /** Show videos updated before the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. Please note that the end date must be at least 5 minutes after the start date. */
    end_date?: string;
    /** Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request */
    interval?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort by oldest or newest videos first */
    sort?: string;
}
/**
 * Request parameters for get.
 * @export
 * @interface VideosApiGetVideoRequest
 */
export interface VideosApiGetVideoRequest {
    /** Video ID */
    id: string;
    /** Language for the keywords and categories in the response */
    language?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for getCollection.
 * @export
 * @interface VideosApiGetVideoCollectionRequest
 */
export interface VideosApiGetVideoCollectionRequest {
    /** The ID of the collection to return */
    id: string;
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
    /** Code to retrieve a shared collection */
    share_code?: string;
}
/**
 * Request parameters for listCollectionItems.
 * @export
 * @interface VideosApiGetVideoCollectionItemsRequest
 */
export interface VideosApiGetVideoCollectionItemsRequest {
    /** Collection ID */
    id: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Code to retrieve the contents of a shared collection */
    share_code?: string;
    /** Sort order */
    sort?: string;
}
/**
 * Request parameters for listCollections.
 * @export
 * @interface VideosApiGetVideoCollectionListRequest
 */
export interface VideosApiGetVideoCollectionListRequest {
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Which sharing information to include in the response, such as a URL to the collection */
    embed?: Array<string>;
}
/**
 * Request parameters for listLicenses.
 * @export
 * @interface VideosApiGetVideoLicenseListRequest
 */
export interface VideosApiGetVideoLicenseListRequest {
    /** Show licenses for the specified video ID */
    video_id?: string;
    /** Show videos that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60; */
    license?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Sort by oldest or newest videos first */
    sort?: string;
    /** Filter licenses by username of licensee */
    username?: string;
    /** Show licenses created on or after the specified date */
    start_date?: Date;
    /** Show licenses created before the specified date */
    end_date?: Date;
    /** Filter licenses by download availability */
    download_availability?: string;
    /** Set to true to see license history for all members of your team. */
    team_history?: boolean;
}
/**
 * Request parameters for list.
 * @export
 * @interface VideosApiGetVideoListRequest
 */
export interface VideosApiGetVideoListRequest {
    /** One or more video IDs */
    id: Array<string>;
    /** Amount of detail to render in the response */
    view?: string;
    /** The ID of the search that is related to this request */
    search_id?: string;
}
/**
 * Request parameters for getSuggestions.
 * @export
 * @interface VideosApiGetVideoSuggestionsRequest
 */
export interface VideosApiGetVideoSuggestionsRequest {
    /** Search term for which you want keyword suggestions */
    query: string;
    /** Limit the number of the suggestions */
    limit?: number;
}
/**
 * Request parameters for license.
 * @export
 * @interface VideosApiLicenseVideosRequest
 */
export interface VideosApiLicenseVideosRequest {
    /** List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters */
    body: VideosLicensesBody;
    /** The subscription ID to use for licensing */
    subscription_id?: string;
    /** The size of the video to license */
    size?: string;
    /** The Search ID that led to this licensing event */
    search_id?: string;
}
/**
 * Request parameters for listCategories.
 * @export
 * @interface VideosApiListVideoCategoriesRequest
 */
export interface VideosApiListVideoCategoriesRequest {
    /** Language for the keywords and categories in the response */
    language?: string;
}
/**
 * Request parameters for renameCollection.
 * @export
 * @interface VideosApiRenameVideoCollectionRequest
 */
export interface VideosApiRenameVideoCollectionRequest {
    /** The new name for the collection */
    body: CollectionsIdBody1;
    /** The ID of the collection to rename */
    id: string;
}
/**
 * Request parameters for search.
 * @export
 * @interface VideosApiSearchVideosRequest
 */
export interface VideosApiSearchVideosRequest {
    /** Show videos added on the specified date */
    added_date?: string;
    /** Show videos added on or after the specified date */
    added_date_start?: string;
    /** Show videos added before the specified date */
    added_date_end?: string;
    /** Show videos with the specified aspect ratio */
    aspect_ratio?: string;
    /** Show videos with the specified Shutterstock-defined category; specify a category name or ID */
    category?: string;
    /** Show videos with the specified artist names or IDs */
    contributor?: Array<string>;
    /** Show videos from contributors in one or more specified countries */
    contributor_country?: Array<string>;
    /** Show videos with the specified duration or longer in seconds */
    duration_from?: number;
    /** Show videos with the specified duration or shorter in seconds */
    duration_to?: number;
    /** Show videos with the specified frames per second or more */
    fps_from?: number;
    /** Show videos with the specified frames per second or fewer */
    fps_to?: number;
    /** Hide results with potentially unsafe keywords */
    keyword_safe_search?: boolean;
    /** Set query and result language (uses Accept-Language header if not set) */
    language?: string;
    /** Show only videos with the specified license or licenses */
    license?: Array<string>;
    /** Show videos with each of the specified models */
    model?: Array<string>;
    /** Search for videos in a specific orientation */
    orientation?: string;
    /** Page number */
    page?: number;
    /** Number of results per page */
    per_page?: number;
    /** Show videos that feature people of the specified age range */
    people_age?: string;
    /** Show videos with people of the specified ethnicities */
    people_ethnicity?: Array<string>;
    /** Show videos with people with the specified gender */
    people_gender?: string;
    /** Show videos with the specified number of people */
    people_number?: number;
    /** Show only videos of people with a signed model release */
    people_model_released?: boolean;
    /** One or more search terms separated by spaces; you can use NOT to filter out videos that match a term */
    query?: string;
    /** Require exact keyword matching and disable enhanced search behavior */
    exact_match?: boolean;
    /** Show videos with the specified resolution */
    resolution?: string;
    /** Enable or disable safe search */
    safe?: boolean;
    /** Sort by one of these categories */
    sort?: string;
    /** Amount of detail to render in the response */
    view?: string;
    /** Search within different Shutterstock owned libraries. Defaults to shutterstock. */
    library?: Array<string>;
}
/**
 * VideosApi - fetch parameter creator
 * @export
 */
export declare const VideosApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more videos to a collection by video IDs.
     * @summary Add videos to collections
     * @param VideosApiAddVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: VideosApiAddVideoCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
     * @summary Create video collections
     * @param VideosApiCreateVideoCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: VideosApiCreateVideoCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint deletes a collection.
     * @summary Delete video collections
     * @param VideosApiDeleteVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: VideosApiDeleteVideoCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint removes one or more videos from a collection.
     * @summary Remove videos from collections
     * @param VideosApiDeleteVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: VideosApiDeleteVideoCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint redownloads videos that you have already received a license for.
     * @summary Download videos
     * @param VideosApiDownloadVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: VideosApiDownloadVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for videos that are similar to a video that you specify.
     * @summary List similar videos
     * @param VideosApiFindSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: VideosApiFindSimilarVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated videos
     * @param VideosApiGetUpdatedVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: VideosApiGetUpdatedVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
     * @summary Get details about videos
     * @param VideosApiGetVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: VideosApiGetVideoRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
     * @summary Get the details of video collections
     * @param VideosApiGetVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: VideosApiGetVideoCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
     * @summary Get the contents of video collections
     * @param VideosApiGetVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: VideosApiGetVideoCollectionItemsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists your collections of videos and their basic attributes.
     * @summary List video collections
     * @param VideosApiGetVideoCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: VideosApiGetVideoCollectionListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists existing licenses.
     * @summary List video licenses
     * @param VideosApiGetVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: VideosApiGetVideoLicenseListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
     * @summary List videos
     * @param VideosApiGetVideoListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: VideosApiGetVideoListRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param VideosApiGetVideoSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: VideosApiGetVideoSuggestionsRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License videos
     * @param VideosApiLicenseVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: VideosApiLicenseVideosRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
     * @summary List video categories
     * @param VideosApiListVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: VideosApiListVideoCategoriesRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename video collections
     * @param VideosApiRenameVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: VideosApiRenameVideoCollectionRequest, options?: RequestInit): FetchArgs;
    /**
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search for videos
     * @param VideosApiSearchVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: VideosApiSearchVideosRequest, options?: RequestInit): FetchArgs;
};
/**
 * VideosApi - functional programming interface
 * @export
 */
export declare const VideosApiFp: (configuration?: Configuration) => {
    /**
     * This endpoint adds one or more videos to a collection by video IDs.
     * @summary Add videos to collections
     * @param VideosApiAddVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: VideosApiAddVideoCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
     * @summary Create video collections
     * @param VideosApiCreateVideoCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: VideosApiCreateVideoCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete video collections
     * @param VideosApiDeleteVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: VideosApiDeleteVideoCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint removes one or more videos from a collection.
     * @summary Remove videos from collections
     * @param VideosApiDeleteVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: VideosApiDeleteVideoCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint redownloads videos that you have already received a license for.
     * @summary Download videos
     * @param VideosApiDownloadVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: VideosApiDownloadVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2009>;
    /**
     * This endpoint searches for videos that are similar to a video that you specify.
     * @summary List similar videos
     * @param VideosApiFindSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: VideosApiFindSimilarVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20015>;
    /**
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated videos
     * @param VideosApiGetUpdatedVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: VideosApiGetUpdatedVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20014>;
    /**
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
     * @summary Get details about videos
     * @param VideosApiGetVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: VideosApiGetVideoRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20017>;
    /**
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
     * @summary Get the details of video collections
     * @param VideosApiGetVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: VideosApiGetVideoCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
     * @summary Get the contents of video collections
     * @param VideosApiGetVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: VideosApiGetVideoCollectionItemsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of videos and their basic attributes.
     * @summary List video collections
     * @param VideosApiGetVideoCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: VideosApiGetVideoCollectionListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses.
     * @summary List video licenses
     * @param VideosApiGetVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: VideosApiGetVideoLicenseListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
     * @summary List videos
     * @param VideosApiGetVideoListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: VideosApiGetVideoListRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20016>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param VideosApiGetVideoSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: VideosApiGetVideoSuggestionsRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2002>;
    /**
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License videos
     * @param VideosApiLicenseVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: VideosApiLicenseVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20018>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
     * @summary List video categories
     * @param VideosApiListVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: VideosApiListVideoCategoriesRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2006>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename video collections
     * @param VideosApiRenameVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: VideosApiRenameVideoCollectionRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<Response>;
    /**
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search for videos
     * @param VideosApiSearchVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: VideosApiSearchVideosRequest, options?: RequestInit): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse20015>;
};
/**
 * VideosApi - factory interface
 * @export
 */
export declare const VideosApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     * This endpoint adds one or more videos to a collection by video IDs.
     * @summary Add videos to collections
     * @param VideosApiAddVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCollectionItems(requestParameters: VideosApiAddVideoCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
     * @summary Create video collections
     * @param VideosApiCreateVideoCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCollection(requestParameters?: VideosApiCreateVideoCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete video collections
     * @param VideosApiDeleteVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollection(requestParameters: VideosApiDeleteVideoCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more videos from a collection.
     * @summary Remove videos from collections
     * @param VideosApiDeleteVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCollectionItems(requestParameters: VideosApiDeleteVideoCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads videos that you have already received a license for.
     * @summary Download videos
     * @param VideosApiDownloadVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    download(requestParameters: VideosApiDownloadVideosRequest, options?: RequestInit): Promise<InlineResponse2009>;
    /**
     * This endpoint searches for videos that are similar to a video that you specify.
     * @summary List similar videos
     * @param VideosApiFindSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSimilar(requestParameters: VideosApiFindSimilarVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
    /**
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated videos
     * @param VideosApiGetUpdatedVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listUpdated(requestParameters?: VideosApiGetUpdatedVideosRequest, options?: RequestInit): Promise<InlineResponse20014>;
    /**
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
     * @summary Get details about videos
     * @param VideosApiGetVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(requestParameters: VideosApiGetVideoRequest, options?: RequestInit): Promise<InlineResponse20017>;
    /**
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
     * @summary Get the details of video collections
     * @param VideosApiGetVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollection(requestParameters: VideosApiGetVideoCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
     * @summary Get the contents of video collections
     * @param VideosApiGetVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollectionItems(requestParameters: VideosApiGetVideoCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of videos and their basic attributes.
     * @summary List video collections
     * @param VideosApiGetVideoCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCollections(requestParameters?: VideosApiGetVideoCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses.
     * @summary List video licenses
     * @param VideosApiGetVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listLicenses(requestParameters?: VideosApiGetVideoLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
     * @summary List videos
     * @param VideosApiGetVideoListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    list(requestParameters: VideosApiGetVideoListRequest, options?: RequestInit): Promise<InlineResponse20016>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param VideosApiGetVideoSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSuggestions(requestParameters: VideosApiGetVideoSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2002>;
    /**
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License videos
     * @param VideosApiLicenseVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    license(requestParameters?: VideosApiLicenseVideosRequest, options?: RequestInit): Promise<InlineResponse20018>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
     * @summary List video categories
     * @param VideosApiListVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCategories(requestParameters?: VideosApiListVideoCategoriesRequest, options?: RequestInit): Promise<InlineResponse2006>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename video collections
     * @param VideosApiRenameVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    renameCollection(requestParameters: VideosApiRenameVideoCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search for videos
     * @param VideosApiSearchVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(requestParameters?: VideosApiSearchVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
};
/**
 * VideosApi - object-oriented interface
 * @export
 * @class VideosApi
 * @extends {BaseAPI}
 */
export declare class VideosApi extends BaseAPI {
    /**
     * This endpoint adds one or more videos to a collection by video IDs.
     * @summary Add videos to collections
     * @param VideosApiAddVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    addCollectionItems(requestParameters: VideosApiAddVideoCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
     * @summary Create video collections
     * @param VideosApiCreateVideoCollectionRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    createCollection(requestParameters?: VideosApiCreateVideoCollectionRequest, options?: RequestInit): Promise<InlineResponse201>;
    /**
     * This endpoint deletes a collection.
     * @summary Delete video collections
     * @param VideosApiDeleteVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    deleteCollection(requestParameters: VideosApiDeleteVideoCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint removes one or more videos from a collection.
     * @summary Remove videos from collections
     * @param VideosApiDeleteVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    deleteCollectionItems(requestParameters: VideosApiDeleteVideoCollectionItemsRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint redownloads videos that you have already received a license for.
     * @summary Download videos
     * @param VideosApiDownloadVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    download(requestParameters: VideosApiDownloadVideosRequest, options?: RequestInit): Promise<InlineResponse2009>;
    /**
     * This endpoint searches for videos that are similar to a video that you specify.
     * @summary List similar videos
     * @param VideosApiFindSimilarVideosRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listSimilar(requestParameters: VideosApiFindSimilarVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
    /**
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     * @summary List updated videos
     * @param VideosApiGetUpdatedVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listUpdated(requestParameters?: VideosApiGetUpdatedVideosRequest, options?: RequestInit): Promise<InlineResponse20014>;
    /**
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
     * @summary Get details about videos
     * @param VideosApiGetVideoRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    get(requestParameters: VideosApiGetVideoRequest, options?: RequestInit): Promise<InlineResponse20017>;
    /**
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
     * @summary Get the details of video collections
     * @param VideosApiGetVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    getCollection(requestParameters: VideosApiGetVideoCollectionRequest, options?: RequestInit): Promise<InlineResponse20012>;
    /**
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
     * @summary Get the contents of video collections
     * @param VideosApiGetVideoCollectionItemsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listCollectionItems(requestParameters: VideosApiGetVideoCollectionItemsRequest, options?: RequestInit): Promise<InlineResponse20013>;
    /**
     * This endpoint lists your collections of videos and their basic attributes.
     * @summary List video collections
     * @param VideosApiGetVideoCollectionListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listCollections(requestParameters?: VideosApiGetVideoCollectionListRequest, options?: RequestInit): Promise<InlineResponse20011>;
    /**
     * This endpoint lists existing licenses.
     * @summary List video licenses
     * @param VideosApiGetVideoLicenseListRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listLicenses(requestParameters?: VideosApiGetVideoLicenseListRequest, options?: RequestInit): Promise<InlineResponse2007>;
    /**
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
     * @summary List videos
     * @param VideosApiGetVideoListRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    list(requestParameters: VideosApiGetVideoListRequest, options?: RequestInit): Promise<InlineResponse20016>;
    /**
     * This endpoint provides autocomplete suggestions for partial search terms.
     * @summary Get suggestions for a search term
     * @param VideosApiGetVideoSuggestionsRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    getSuggestions(requestParameters: VideosApiGetVideoSuggestionsRequest, options?: RequestInit): Promise<InlineResponse2002>;
    /**
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     * @summary License videos
     * @param VideosApiLicenseVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    license(requestParameters?: VideosApiLicenseVideosRequest, options?: RequestInit): Promise<InlineResponse20018>;
    /**
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
     * @summary List video categories
     * @param VideosApiListVideoCategoriesRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    listCategories(requestParameters?: VideosApiListVideoCategoriesRequest, options?: RequestInit): Promise<InlineResponse2006>;
    /**
     * This endpoint sets a new name for a collection.
     * @summary Rename video collections
     * @param VideosApiRenameVideoCollectionRequest requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    renameCollection(requestParameters: VideosApiRenameVideoCollectionRequest, options?: RequestInit): Promise<Response>;
    /**
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @summary Search for videos
     * @param VideosApiSearchVideosRequest [requestParameters] Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApi
     */
    search(requestParameters?: VideosApiSearchVideosRequest, options?: RequestInit): Promise<InlineResponse20015>;
}
