# shutterstock-api.AudioApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addTrackCollectionItems`](AudioApi.md#addTrackCollectionItems) | `POST /v2/audio/collections/{id}/items` | Add audio tracks to collections
[`createTrackCollection`](AudioApi.md#createTrackCollection) | `POST /v2/audio/collections` | Create audio collections
[`deleteTrackCollection`](AudioApi.md#deleteTrackCollection) | `DELETE /v2/audio/collections/{id}` | Delete audio collections
[`deleteTrackCollectionItems`](AudioApi.md#deleteTrackCollectionItems) | `DELETE /v2/audio/collections/{id}/items` | Remove audio tracks from collections
[`downloadTracks`](AudioApi.md#downloadTracks) | `POST /v2/audio/licenses/{id}/downloads` | Download audio tracks
[`getTrack`](AudioApi.md#getTrack) | `GET /v2/audio/{id}` | Get details about audio tracks
[`getTrackCollection`](AudioApi.md#getTrackCollection) | `GET /v2/audio/collections/{id}` | Get the details of audio collections
[`getTrackCollectionItems`](AudioApi.md#getTrackCollectionItems) | `GET /v2/audio/collections/{id}/items` | Get the contents of audio collections
[`getTrackCollectionList`](AudioApi.md#getTrackCollectionList) | `GET /v2/audio/collections` | List audio collections
[`getTrackLicenseList`](AudioApi.md#getTrackLicenseList) | `GET /v2/audio/licenses` | List audio licenses
[`getTrackList`](AudioApi.md#getTrackList) | `GET /v2/audio` | List audio tracks
[`licenseTrack`](AudioApi.md#licenseTrack) | `POST /v2/audio/licenses` | License audio tracks
[`listGenres`](AudioApi.md#listGenres) | `GET /v2/audio/genres` | List audio genres
[`listInstruments`](AudioApi.md#listInstruments) | `GET /v2/audio/instruments` | List audio instruments
[`listMoods`](AudioApi.md#listMoods) | `GET /v2/audio/moods` | List audio moods
[`renameTrackCollection`](AudioApi.md#renameTrackCollection) | `POST /v2/audio/collections/{id}` | Rename audio collections
[`searchTracks`](AudioApi.md#searchTracks) | `GET /v2/audio/search` | Search for tracks


<a name="addTrackCollectionItems"></a>
# AudioApi.addTrackCollectionItems
> `AudioApi.addTrackCollectionItems(id, body)`

**Add audio tracks to collections**

This endpoint adds one or more tracks to a collection by track IDs.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433115";

const body = {
  "items": [
    {
      "id": "442583"
    },
    {
      "id": "7491192"
    }
  ]
};

audioApi.addTrackCollectionItems(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionItemRequest](CollectionItemRequest.md)| List of items to add to collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="createTrackCollection"></a>
# AudioApi.createTrackCollection
> `CollectionCreateResponse AudioApi.createTrackCollection(body)`

**Create audio collections**

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const body = {
  "name": "Best rock music"
};

audioApi.createTrackCollection(body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CollectionCreateRequest](CollectionCreateRequest.md)| Collection metadata 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[CollectionCreateResponse](CollectionCreateResponse.md)

### Example response

```
{
  "id" : "48433105"
}
```

<a name="deleteTrackCollection"></a>
# AudioApi.deleteTrackCollection
> `AudioApi.deleteTrackCollection(id)`

**Delete audio collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433107";

audioApi.deleteTrackCollection(collectionId)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="deleteTrackCollectionItems"></a>
# AudioApi.deleteTrackCollectionItems
> `AudioApi.deleteTrackCollectionItems(id, queryParams)`

**Remove audio tracks from collections**

This endpoint removes one or more tracks from a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433119";

// Array of tracks to remove
const tracksToRemove = {
  "item_id": [
    "76688182",
    "40005859"
  ]
};

audioApi.deleteTrackCollectionItems(collectionId, tracksToRemove)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [String]| One or more item IDs to remove from the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="downloadTracks"></a>
# AudioApi.downloadTracks
> `Url AudioApi.downloadTracks(id)`

**Download audio tracks**

This endpoint redownloads tracks that you have already received a license for.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const licenseId = "e123"; // license ID, not track ID

audioApi.downloadTracks(licenseId)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| License ID 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers



- Accept: application/json

### Return type

[Url](Url.md)

### Example response

```
{
  "url" : "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
}
```

<a name="getTrack"></a>
# AudioApi.getTrack
> `Audio AudioApi.getTrack(id, queryParams)`

**Get details about audio tracks**

This endpoint shows information about a track, including its genres, instruments, and other attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = 442583; // Number | Audio track ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getTrack(id, queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | Number| Audio track ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Audio](Audio.md)

### Example response

```
{
  "added_date" : "2016-08-16",
  "artists" : [ {
    "name" : "Klimenko Music"
  } ],
  "assets" : {
    "clean_audio" : {
      "file_size" : 35188408
    },
    "preview_mp3" : {
      "file_size" : 4400203,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
    },
    "preview_ogg" : {
      "file_size" : 4453197,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
    },
    "waveform" : {
      "file_size" : 18778,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
    }
  },
  "bpm" : 110,
  "contributor" : {
    "id" : "2847971"
  },
  "description" : "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
  "duration" : 183,
  "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
  "id" : "442583",
  "instruments" : [ "Piano", "Synth bass", "Synth drums", "Synthesizer" ],
  "is_adult" : false,
  "is_instrumental" : true,
  "isrc" : "",
  "keywords" : [ "celebratory", "chic", "euphoric", "good times", "hip", "optimistic", "party", "soaring", "upbeat" ],
  "language" : "en",
  "lyrics" : "",
  "media_type" : "audio",
  "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
  "published_time" : "2016-08-16T14:30:03-04:00",
  "recording_version" : "",
  "releases" : [ ],
  "similar_artists" : [ ],
  "title" : "Another Tomorrow",
  "updated_time" : "2016-08-18T17:59:33-04:00",
  "vocal_description" : "",
  "url" : ""
}
```

<a name="getTrackCollection"></a>
# AudioApi.getTrackCollection
> `Collection AudioApi.getTrackCollection(id, queryParams)`

**Get the details of audio collections**

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "48433107"; // String | Collection ID

const queryParams = { 
  'embed': ["embed_example"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'share_code': "share_code_example" // String | Code to retrieve a shared collection
};

api.getTrackCollection(id, queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 embed | [String]| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 share_code | String| Code to retrieve a shared collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[Collection](Collection.md)

### Example response

```
{
  "id" : "293542904",
  "name" : "My collection",
  "total_item_count" : 85,
  "items_updated_time" : "2021-05-20T16:15:22-04:00",
  "cover_item" : {
    "id" : "297886754"
  }
}
```

<a name="getTrackCollectionItems"></a>
# AudioApi.getTrackCollectionItems
> `CollectionItemDataList AudioApi.getTrackCollectionItems(id, queryParams)`

**Get the contents of audio collections**

This endpoint lists the IDs of tracks in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "126351027"; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'share_code': "share_code_example", // String | Code to retrieve the contents of a shared collection
  'sort': "oldest" // String | Sort order
};

api.getTrackCollectionItems(id, queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 share_code | String| Code to retrieve the contents of a shared collection 
 sort | String| Sort order, defaults to oldest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[CollectionItemDataList](CollectionItemDataList.md)

### Example response

```
{
  "data" : [ {
    "id" : "1690105108",
    "added_time" : "2021-07-08T12:33:37.000Z",
    "media_type" : "image"
  }, {
    "id" : "1468703072",
    "added_time" : "2021-07-08T12:31:43.000Z",
    "media_type" : "image"
  } ],
  "page" : 1,
  "per_page" : 2,
  "total_count" : 82
}
```

<a name="getTrackCollectionList"></a>
# AudioApi.getTrackCollectionList
> `CollectionDataList AudioApi.getTrackCollectionList(queryParams)`

**List audio collections**

This endpoint lists your collections of audio tracks and their basic attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'embed': ["share_code"] // [String] | Which sharing information to include in the response, such as a URL to the collection
};

api.getTrackCollectionList(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 embed | [String]| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[CollectionDataList](CollectionDataList.md)

### Example response

```
{
  "data" : [ {
    "id" : "293542904",
    "name" : "My collection",
    "total_item_count" : 85,
    "items_updated_time" : "2021-05-20T16:15:22-04:00",
    "cover_item" : {
      "id" : "297886754"
    }
  } ],
  "page" : 1,
  "per_page" : 100,
  "total_count" : 1
}
```

<a name="getTrackLicenseList"></a>
# AudioApi.getTrackLicenseList
> `DownloadHistoryDataList AudioApi.getTrackLicenseList(queryParams)`

**List audio licenses**

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const queryParams = {
  "start_date": "2016-10-03T01:25:13.521Z",
  "end_date": "2016-10-04T13:25:13.521Z"
};

audioApi.getTrackLicenseList(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 audio_id | String| Show licenses for the specified track ID 
 license | String| Restrict results by license. Prepending a `-` sign will exclude results by license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 username | String| Filter licenses by username of licensee 
 start_date | Date| Show licenses created on or after the specified date 
 end_date | Date| Show licenses created before the specified date 
 download_availability | String| Filter licenses by download availability, defaults to all <br/><br/>Valid values: "all", "downloadable", "non_downloadable"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers



- Accept: application/json

### Return type

[DownloadHistoryDataList](DownloadHistoryDataList.md)

### Example response

```
{
  "total_count" : 2890,
  "page" : 1,
  "per_page" : 1,
  "data" : [ {
    "id" : "e1eba3833793e77188d22caae8bac9f2cd",
    "user" : {
      "username" : "editorial_test_account_002"
    },
    "license" : "premier_editorial_all_digital",
    "download_time" : "2021-07-15T15:46:34.000Z",
    "is_downloadable" : false,
    "image" : {
      "id" : "9763363ao",
      "format" : {
        "size" : "original"
      }
    },
    "subscription_id" : "s12345678",
    "metadata" : {
      "purchase_order" : "123456",
      "client" : "Company A",
      "job" : "Important project",
      "other" : "Important media"
    }
  } ]
}
```

<a name="getTrackList"></a>
# AudioApi.getTrackList
> `AudioDataList AudioApi.getTrackList(id, queryParams)`

**List audio tracks**

This endpoint lists information about one or more audio tracks, including the description and publication date.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = ["[442583, 434750]"]; // [String] | One or more audio IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getTrackList(id, queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [String]| One or more audio IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[AudioDataList](AudioDataList.md)

### Example response

```
{
  "data" : [ {
    "added_date" : "2016-04-12",
    "artists" : [ {
      "name" : "Fin Productions"
    } ],
    "assets" : {
      "clean_audio" : {
        "file_size" : 30760372
      },
      "preview_mp3" : {
        "file_size" : 3846606,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3"
      },
      "preview_ogg" : {
        "file_size" : 4402608,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg"
      },
      "waveform" : {
        "file_size" : 19822,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png"
      }
    },
    "bpm" : 100,
    "contributor" : {
      "id" : "2847971"
    },
    "description" : "Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.",
    "duration" : 160,
    "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
    "id" : "434750",
    "instruments" : [ "Bass", "Drums", "Electric guitar", "Pads", "Percussion", "Synthesizer" ],
    "is_adult" : false,
    "is_instrumental" : true,
    "isrc" : "",
    "keywords" : [ "breezy", "celebration", "festive", "good times", "hopeful", "optimistic", "party", "positive", "reflective" ],
    "language" : "en",
    "lyrics" : "",
    "media_type" : "audio",
    "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
    "published_time" : "2016-04-12T17:45:29-04:00",
    "recording_version" : "",
    "releases" : [ ],
    "similar_artists" : [ ],
    "title" : "Fresh Love",
    "updated_time" : "2016-08-18T18:03:11-04:00",
    "vocal_description" : ""
  } ]
}
```

<a name="licenseTrack"></a>
# AudioApi.licenseTrack
> `LicenseAudioResultDataList AudioApi.licenseTrack(body, queryParams)`

**License audio tracks**

This endpoint gets licenses for one or more tracks.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const body = {
  "audio": [
    {
      "audio_id": "446348",
      "license": "audio_platform",
      "metadata": {
        "customer_id": "12345"
      }
    }
  ]
};

audioApi.licenseTrack(body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseAudioRequest](LicenseAudioRequest.md)| Tracks to license 
 license | String| License type <br/><br/>Valid values: "audio_platform", "premier_music_basic", "premier_music_extended", "premier_music_pro", "premier_music_comp", "asset_all_music"
 search_id | String| The ID of the search that led to licensing this track 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[LicenseAudioResultDataList](LicenseAudioResultDataList.md)

### Example response

```
{
  "data" : [ {
    "audio_id" : "123456789",
    "download" : {
      "url" : "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
    }
  } ]
}
```

<a name="listGenres"></a>
# AudioApi.listGenres
> `GenreList AudioApi.listGenres(queryParams)`

**List audio genres**

This endpoint returns a list of all audio genres.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const queryParams = { 
  'language': "language_example" // String | Which language the genres will be returned
};

api.listGenres(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 language | String| Which language the genres will be returned 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[GenreList](GenreList.md)

### Example response

```
{
  "data" : [ "Rock", "Pop > Singer-Songwriter", "Pop > Synth Pop", "Production / Film Scores" ]
}
```

<a name="listInstruments"></a>
# AudioApi.listInstruments
> `InstrumentList AudioApi.listInstruments()`

**List audio instruments**

This endpoint returns a list of all audio instruments.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();
api.listInstruments()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters

This endpoint does not accept any parameters.

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InstrumentList](InstrumentList.md)

### Example response

```
{
  "data" : [ "Orchestra", "Organ", "Oud", "Pads", "Electric Guitar" ]
}
```

<a name="listMoods"></a>
# AudioApi.listMoods
> `MoodList AudioApi.listMoods()`

**List audio moods**

This endpoint returns a list of all audio moods.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();
api.listMoods()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters

This endpoint does not accept any parameters.

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[MoodList](MoodList.md)

### Example response

```
{
  "data" : [ "Action / Sports", "Adventure / Discovery", "Aerobics / Workout", "Aggressive" ]
}
```

<a name="renameTrackCollection"></a>
# AudioApi.renameTrackCollection
> `AudioApi.renameTrackCollection(id, body)`

**Rename audio collections**

This endpoint sets a new name for a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433107";

const body = {
  "name": "Best rock music"
};

audioApi.renameTrackCollection(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest.md)| Collection changes 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="searchTracks"></a>
# AudioApi.searchTracks
> `AudioSearchResults AudioApi.searchTracks(queryParams)`

**Search for tracks**

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const queryParams = {
  "query": "bluegrass",
  "duration_from": 60,
  "moods": ["uplifting"]
};

audioApi.searchTracks(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 artists | [String]| Show tracks with one of the specified artist names or IDs 
 bpm | Number| (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute 
 bpm_from | Number| Show tracks with the specified beats per minute or faster 
 bpm_to | Number| Show tracks with the specified beats per minute or slower 
 duration | Number| Show tracks with the specified duration in seconds 
 duration_from | Number| Show tracks with the specified duration or longer in seconds 
 duration_to | Number| Show tracks with the specified duration or shorter in seconds 
 genre | [String]| Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres` 
 is_instrumental | Boolean| Show instrumental music only 
 instruments | [String]| Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments` 
 moods | [String]| Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods` 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by <br/><br/>Valid values: "score", "ranking_all", "artist", "title", "bpm", "freshness", "duration"
 sort_order | String| Sort order, defaults to desc <br/><br/>Valid values: "asc", "desc"
 vocal_description | String| Show tracks with the specified vocal description (male, female) 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 fields | String| Fields to display in the response; see the documentation for the fields parameter in the overview section 
 library | String| Which library to search, defaults to premier <br/><br/>Valid values: "shutterstock", "premier"
 language | String| Which language to search in 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[AudioSearchResults](AudioSearchResults.md)

### Example response

```
{
  "data" : [ {
    "added_date" : "2016-08-16",
    "artists" : [ {
      "name" : "Klimenko Music"
    } ],
    "assets" : {
      "clean_audio" : {
        "file_size" : 35188408
      },
      "preview_mp3" : {
        "file_size" : 4400203,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
      },
      "preview_ogg" : {
        "file_size" : 4453197,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
      },
      "waveform" : {
        "file_size" : 18778,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
      }
    },
    "bpm" : 110,
    "contributor" : {
      "id" : "2847971"
    },
    "description" : "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
    "duration" : 183,
    "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
    "id" : "442583",
    "instruments" : [ "Piano", "Synth bass", "Synth drums", "Synthesizer" ],
    "is_adult" : false,
    "is_instrumental" : true,
    "isrc" : "",
    "keywords" : [ "celebratory", "chic", "euphoric", "good times", "hip", "optimistic", "party", "soaring", "upbeat" ],
    "language" : "en",
    "lyrics" : "",
    "media_type" : "audio",
    "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
    "published_time" : "2016-08-16T14:30:03-04:00",
    "recording_version" : "",
    "releases" : [ ],
    "similar_artists" : [ ],
    "title" : "Another Tomorrow",
    "updated_time" : "2016-08-18T17:59:33-04:00",
    "vocal_description" : "",
    "url" : ""
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455,
  "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10"
}
```

