# shutterstock-api.AudioApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addSoundboxItems`](AudioApi.md#addSoundboxItems) | `POST /v2/audio/collections/{id}/items` | Add audio tracks to collections
[`createSoundbox`](AudioApi.md#createSoundbox) | `POST /v2/audio/collections` | Create audio collections
[`deleteSoundbox`](AudioApi.md#deleteSoundbox) | `DELETE /v2/audio/collections/{id}` | Delete audio collections
[`deleteSoundboxItems`](AudioApi.md#deleteSoundboxItems) | `DELETE /v2/audio/collections/{id}/items` | Remove audio tracks from collections
[`downloadTracks`](AudioApi.md#downloadTracks) | `POST /v2/audio/licenses/{id}/downloads` | Download audio tracks
[`getAudioLicenseList`](AudioApi.md#getAudioLicenseList) | `GET /v2/audio/licenses` | List audio licenses
[`getGenres`](AudioApi.md#getGenres) | `GET /v2/audio/genres` | List audio genres
[`getInstruments`](AudioApi.md#getInstruments) | `GET /v2/audio/instruments` | List audio instruments
[`getMoods`](AudioApi.md#getMoods) | `GET /v2/audio/moods` | List audio moods
[`getSoundbox`](AudioApi.md#getSoundbox) | `GET /v2/audio/collections/{id}` | Get the details of audio collections
[`getSoundboxItems`](AudioApi.md#getSoundboxItems) | `GET /v2/audio/collections/{id}/items` | Get the contents of audio collections
[`getSoundboxList`](AudioApi.md#getSoundboxList) | `GET /v2/audio/collections` | List audio collections
[`getTrack`](AudioApi.md#getTrack) | `GET /v2/audio/{id}` | Get details about audio tracks
[`getTrackList`](AudioApi.md#getTrackList) | `GET /v2/audio` | List audio tracks
[`licenseTrack`](AudioApi.md#licenseTrack) | `POST /v2/audio/licenses` | License audio tracks
[`renameSoundbox`](AudioApi.md#renameSoundbox) | `POST /v2/audio/collections/{id}` | Rename audio collections
[`searchAudio`](AudioApi.md#searchAudio) | `GET /v2/audio/search` | Search for tracks


<a name="addSoundboxItems"></a>
# AudioApi.addSoundboxItems
> `AudioApi.addSoundboxItems(id, body)`

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

audioApi.addSoundboxItems(collectionId, body)
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


<a name="createSoundbox"></a>
# AudioApi.createSoundbox
> `CollectionCreateResponse AudioApi.createSoundbox(body)`

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

audioApi.createSoundbox(body)
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

<a name="deleteSoundbox"></a>
# AudioApi.deleteSoundbox
> `AudioApi.deleteSoundbox(id)`

**Delete audio collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433107";

audioApi.deleteSoundbox(collectionId)
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


<a name="deleteSoundboxItems"></a>
# AudioApi.deleteSoundboxItems
> `AudioApi.deleteSoundboxItems(id, queryParams)`

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

audioApi.deleteSoundboxItems(collectionId, tracksToRemove)
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

const licenseId = "i1188641348"; // license ID, not track ID

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
  "url" : "url"
}
```

<a name="getAudioLicenseList"></a>
# AudioApi.getAudioLicenseList
> `DownloadHistoryDataList AudioApi.getAudioLicenseList(queryParams)`

**List audio licenses**

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const queryParams = { 
  'audio_id': "1" // String | Show licenses for the specified track ID
};

api.getAudioLicenseList(queryParams)
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
  "per_page" : 6,
  "data" : [ {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  }, {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}
```

<a name="getGenres"></a>
# AudioApi.getGenres
> `GenreList AudioApi.getGenres()`

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
api.getGenres()
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

[GenreList](GenreList.md)

### Example response

```
{
  "data" : [ "Rock" ]
}
```

<a name="getInstruments"></a>
# AudioApi.getInstruments
> `InstrumentList AudioApi.getInstruments()`

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
api.getInstruments()
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
  "data" : [ "Electric Guitar" ]
}
```

<a name="getMoods"></a>
# AudioApi.getMoods
> `MoodList AudioApi.getMoods()`

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
api.getMoods()
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
  "data" : [ "Aggressive" ]
}
```

<a name="getSoundbox"></a>
# AudioApi.getSoundbox
> `Collection AudioApi.getSoundbox(id)`

**Get the details of audio collections**

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "48433107"; // String | Collection ID


api.getSoundbox(id)
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
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "updated_time" : "2000-01-23T04:56:07.000+00:00",
  "share_url" : "share_url",
  "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "share_code" : "share_code",
  "cover_item" : {
    "added_time" : "2000-01-23T04:56:07.000+00:00",
    "media_type" : "media_type",
    "id" : "id"
  },
  "total_item_count" : 0
}
```

<a name="getSoundboxItems"></a>
# AudioApi.getSoundboxItems
> `CollectionItemDataList AudioApi.getSoundboxItems(id, queryParams)`

**Get the contents of audio collections**

This endpoint lists the IDs of tracks in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "48433113"; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getSoundboxItems(id, queryParams)
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
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "76688182",
    "media_type" : "audio"
  }, {
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "40005859",
    "media_type" : "audio"
  } ],
  "page" : 1,
  "per_page" : 100
}
```

<a name="getSoundboxList"></a>
# AudioApi.getSoundboxList
> `CollectionDataList AudioApi.getSoundboxList(queryParams)`

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
  'per_page': 100 // Number | Number of results per page
};

api.getSoundboxList(queryParams)
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
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747953",
    "name" : "Test Collection cdad",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747955",
    "name" : "Test Collection ff5f",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:58-05:00",
    "id" : "5747957",
    "name" : "Updated Collection ebc4",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:58-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747971",
    "name" : "Test Collection 0072",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747973",
    "name" : "Test Collection d332",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  } ]
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

const id = "442583"; // String | Audio track ID

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
 id (required) | String| Audio track ID 
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
  "album" : {
    "id" : "",
    "title" : ""
  },
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
  "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
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
    "album" : {
      "id" : "",
      "title" : ""
    },
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
      "license": "premier_music_comp",
      "metadata": {
        "customer_id": "12345"
      }
    }
  ]
};

audioApi.licenseTrack(body)
  .then(({ data }) => {
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
 license | String| License type, defaults to audio_standard <br/><br/>Valid values: "audio_standard", "audio_enhanced", "audio_platform", "premier_music_basic", "premier_music_extended", "premier_music_pro", "premier_music_comp"
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
    "audio_id" : "1",
    "download" : {
      "url" : "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
    }
  } ]
}
```

<a name="renameSoundbox"></a>
# AudioApi.renameSoundbox
> `AudioApi.renameSoundbox(id, body)`

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

audioApi.renameSoundbox(collectionId, body)
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


<a name="searchAudio"></a>
# AudioApi.searchAudio
> `AudioSearchResults AudioApi.searchAudio(queryParams)`

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

audioApi.searchAudio(queryParams)
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
  "per_page" : 6,
  "data" : [ {
    "added_date" : "2016-08-16",
    "album" : {
      "id" : "",
      "title" : ""
    },
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
    "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
  }, {
    "added_date" : "2016-08-16",
    "album" : {
      "id" : "",
      "title" : ""
    },
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
    "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "search_id" : "search_id"
}
```

