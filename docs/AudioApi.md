# ShutterstockApiReference.AudioApi

All URIs are relative to `https://api.shutterstock.com`

Method | HTTP request | Description
------------- | ------------- | -------------
[`addSoundboxItems`](AudioApi.md#addSoundboxItems) | `POST /v2/audio/collections/{id}/items` | Add audio tracks to collections
[`createSoundbox`](AudioApi.md#createSoundbox) | `POST /v2/audio/collections` | Create audio collections
[`deleteSoundbox`](AudioApi.md#deleteSoundbox) | `DELETE /v2/audio/collections/{id}` | Delete audio collections
[`deleteSoundboxItems`](AudioApi.md#deleteSoundboxItems) | `DELETE /v2/audio/collections/{id}/items` | Remove audio tracks from collections
[`downloadTracks`](AudioApi.md#downloadTracks) | `POST /v2/audio/licenses/{id}/downloads` | Download audio tracks
[`getAudioLicenseList`](AudioApi.md#getAudioLicenseList) | `GET /v2/audio/licenses` | List audio licenses
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
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433115\""; // String | Collection ID

const body = new ShutterstockApiReference.CollectionItemRequest(); // CollectionItemRequest | List of items to add to collection


api.addSoundboxItems(id, body)
.then(function() {
  console.log('API called successfully.');
})
.catch(function(error) {
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

No response body


<a name="createSoundbox"></a>
# AudioApi.createSoundbox
> `CollectionCreateResponse AudioApi.createSoundbox(body)`

**Create audio collections**

This endpoint creates one or more collections (soundboxes). To add tracks, use &#x60;POST /audio/collections/{id}/items&#x60;.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const body = new ShutterstockApiReference.CollectionCreateRequest(); // CollectionCreateRequest | Collection metadata


api.createSoundbox(body)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;id&quot; : &quot;48433105&quot;
}

<a name="deleteSoundbox"></a>
# AudioApi.deleteSoundbox
> `AudioApi.deleteSoundbox(id)`

**Delete audio collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433111\""; // String | Collection ID


api.deleteSoundbox(id)
.then(function() {
  console.log('API called successfully.');
})
.catch(function(error) {
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

No response body


<a name="deleteSoundboxItems"></a>
# AudioApi.deleteSoundboxItems
> `AudioApi.deleteSoundboxItems(id, queryParams)`

**Remove audio tracks from collections**

This endpoint removes one or more tracks from a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433119\""; // String | Collection ID

const queryParams = { 
  'item_id': ["[ \"76688182\", \"40005859\" ]"] // [String] | One or more item IDs to remove from the collection
};

api.deleteSoundboxItems(id, queryParams)
.then(function() {
  console.log('API called successfully.');
})
.catch(function(error) {
  console.error(error);
});

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [[String]](String.md)| One or more item IDs to remove from the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body


<a name="downloadTracks"></a>
# AudioApi.downloadTracks
> `Url AudioApi.downloadTracks(id)`

**Download audio tracks**

This endpoint redownloads tracks that you have already received a license for.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"i1188641348\""; // String | License ID


api.downloadTracks(id)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;url&quot; : &quot;url&quot;
}

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
  'audio_id': "\"1\"" // String | Show licenses for the specified track ID
};

api.getAudioLicenseList(queryParams)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;subscription_id&quot; : &quot;subscription_id&quot;,
    &quot;image&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;license&quot; : &quot;license&quot;,
    &quot;download_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;metadata&quot; : &quot;{}&quot;,
    &quot;is_downloadable&quot; : true,
    &quot;audio&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;id&quot; : &quot;id&quot;,
    &quot;video&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;user&quot; : {
      &quot;username&quot; : &quot;username&quot;
    }
  }, {
    &quot;subscription_id&quot; : &quot;subscription_id&quot;,
    &quot;image&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;license&quot; : &quot;license&quot;,
    &quot;download_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;metadata&quot; : &quot;{}&quot;,
    &quot;is_downloadable&quot; : true,
    &quot;audio&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;id&quot; : &quot;id&quot;,
    &quot;video&quot; : {
      &quot;format&quot; : {
        &quot;size&quot; : &quot;size&quot;,
        &quot;format&quot; : &quot;format&quot;
      },
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;user&quot; : {
      &quot;username&quot; : &quot;username&quot;
    }
  } ],
  &quot;total_count&quot; : 1,
  &quot;page&quot; : 0,
  &quot;message&quot; : &quot;message&quot;,
  &quot;errors&quot; : [ {
    &quot;path&quot; : &quot;path&quot;,
    &quot;code&quot; : &quot;code&quot;,
    &quot;data&quot; : &quot;data&quot;,
    &quot;message&quot; : &quot;message&quot;,
    &quot;items&quot; : [ &quot;{}&quot;, &quot;{}&quot; ]
  }, {
    &quot;path&quot; : &quot;path&quot;,
    &quot;code&quot; : &quot;code&quot;,
    &quot;data&quot; : &quot;data&quot;,
    &quot;message&quot; : &quot;message&quot;,
    &quot;items&quot; : [ &quot;{}&quot;, &quot;{}&quot; ]
  } ]
}

<a name="getSoundbox"></a>
# AudioApi.getSoundbox
> `Collection AudioApi.getSoundbox(id)`

**Get the details of audio collections**

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use &#x60;GET /audio/collections/{id}/items&#x60;.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433107\""; // String | Collection ID


api.getSoundbox(id)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;created_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;share_url&quot; : &quot;share_url&quot;,
  &quot;items_updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;name&quot; : &quot;name&quot;,
  &quot;id&quot; : &quot;id&quot;,
  &quot;share_code&quot; : &quot;share_code&quot;,
  &quot;cover_item&quot; : {
    &quot;added_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;id&quot; : &quot;id&quot;
  },
  &quot;total_item_count&quot; : 0
}

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

const id = "\"48433113\""; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getSoundboxItems(id, queryParams)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;data&quot; : [ {
    &quot;added_time&quot; : &quot;2016-08-18T18:52:59-04:00&quot;,
    &quot;id&quot; : &quot;76688182&quot;,
    &quot;media_type&quot; : &quot;audio&quot;
  }, {
    &quot;added_time&quot; : &quot;2016-08-18T18:52:59-04:00&quot;,
    &quot;id&quot; : &quot;40005859&quot;,
    &quot;media_type&quot; : &quot;audio&quot;
  } ],
  &quot;page&quot; : 1,
  &quot;per_page&quot; : 100
}

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
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;data&quot; : [ {
    &quot;created_time&quot; : &quot;2014-11-05T19:29:56-05:00&quot;,
    &quot;id&quot; : &quot;5747953&quot;,
    &quot;name&quot; : &quot;Test Collection cdad&quot;,
    &quot;total_item_count&quot; : 0,
    &quot;updated_time&quot; : &quot;2014-11-05T19:29:56-05:00&quot;
  }, {
    &quot;created_time&quot; : &quot;2014-11-05T19:29:56-05:00&quot;,
    &quot;id&quot; : &quot;5747955&quot;,
    &quot;name&quot; : &quot;Test Collection ff5f&quot;,
    &quot;total_item_count&quot; : 0,
    &quot;updated_time&quot; : &quot;2014-11-05T19:29:56-05:00&quot;
  }, {
    &quot;created_time&quot; : &quot;2014-11-05T19:29:58-05:00&quot;,
    &quot;id&quot; : &quot;5747957&quot;,
    &quot;name&quot; : &quot;Updated Collection ebc4&quot;,
    &quot;total_item_count&quot; : 0,
    &quot;updated_time&quot; : &quot;2014-11-05T19:29:58-05:00&quot;
  }, {
    &quot;created_time&quot; : &quot;2014-11-05T19:32:13-05:00&quot;,
    &quot;id&quot; : &quot;5747971&quot;,
    &quot;name&quot; : &quot;Test Collection 0072&quot;,
    &quot;total_item_count&quot; : 0,
    &quot;updated_time&quot; : &quot;2014-11-05T19:32:13-05:00&quot;
  }, {
    &quot;created_time&quot; : &quot;2014-11-05T19:32:13-05:00&quot;,
    &quot;id&quot; : &quot;5747973&quot;,
    &quot;name&quot; : &quot;Test Collection d332&quot;,
    &quot;total_item_count&quot; : 0,
    &quot;updated_time&quot; : &quot;2014-11-05T19:32:13-05:00&quot;
  } ]
}

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

const id = "\"442583\""; // String | Audio track ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getTrack(id, queryParams)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

{
  &quot;added_date&quot; : &quot;2016-08-16&quot;,
  &quot;album&quot; : {
    &quot;id&quot; : &quot;&quot;,
    &quot;title&quot; : &quot;&quot;
  },
  &quot;artists&quot; : [ {
    &quot;name&quot; : &quot;Klimenko Music&quot;
  } ],
  &quot;assets&quot; : {
    &quot;clean_audio&quot; : {
      &quot;file_size&quot; : 35188408
    },
    &quot;preview_mp3&quot; : {
      &quot;file_size&quot; : 4400203,
      &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3&quot;
    },
    &quot;preview_ogg&quot; : {
      &quot;file_size&quot; : 4453197,
      &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg&quot;
    },
    &quot;waveform&quot; : {
      &quot;file_size&quot; : 18778,
      &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png&quot;
    }
  },
  &quot;bpm&quot; : 110,
  &quot;contributor&quot; : {
    &quot;id&quot; : &quot;2847971&quot;
  },
  &quot;description&quot; : &quot;Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.&quot;,
  &quot;duration&quot; : 183,
  &quot;genres&quot; : [ &quot;Dance/Electronic&quot;, &quot;Electro Pop&quot;, &quot;Pop/Rock&quot; ],
  &quot;id&quot; : &quot;442583&quot;,
  &quot;instruments&quot; : [ &quot;Piano&quot;, &quot;Synth bass&quot;, &quot;Synth drums&quot;, &quot;Synthesizer&quot; ],
  &quot;is_adult&quot; : false,
  &quot;is_instrumental&quot; : true,
  &quot;isrc&quot; : &quot;&quot;,
  &quot;keywords&quot; : [ &quot;celebratory&quot;, &quot;chic&quot;, &quot;euphoric&quot;, &quot;good times&quot;, &quot;hip&quot;, &quot;optimistic&quot;, &quot;party&quot;, &quot;soaring&quot;, &quot;upbeat&quot; ],
  &quot;language&quot; : &quot;en&quot;,
  &quot;lyrics&quot; : &quot;&quot;,
  &quot;media_type&quot; : &quot;audio&quot;,
  &quot;moods&quot; : [ &quot;Bright&quot;, &quot;Confident&quot;, &quot;Fun&quot;, &quot;Happy&quot;, &quot;Inspiring&quot;, &quot;Optimistic&quot;, &quot;Playful&quot;, &quot;Sophisticated&quot;, &quot;Stylish&quot;, &quot;Uplifting&quot; ],
  &quot;published_time&quot; : &quot;2016-08-16T14:30:03-04:00&quot;,
  &quot;recording_version&quot; : &quot;&quot;,
  &quot;releases&quot; : [ ],
  &quot;similar_artists&quot; : [ ],
  &quot;title&quot; : &quot;Another Tomorrow&quot;,
  &quot;updated_time&quot; : &quot;2016-08-18T17:59:33-04:00&quot;,
  &quot;vocal_description&quot; : &quot;&quot;,
  &quot;url&quot; : &quot;https://www.shutterstock.com/music/track/another-tomorrow/442583&quot;
}

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

const id = ["[ \"442583\", \"434750\" ]"]; // [String] | One or more audio IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getTrackList(id, queryParams)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [[String]](String.md)| One or more audio IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[AudioDataList](AudioDataList.md)

### Example response

{
  &quot;data&quot; : [ {
    &quot;added_date&quot; : &quot;2016-04-12&quot;,
    &quot;album&quot; : {
      &quot;id&quot; : &quot;&quot;,
      &quot;title&quot; : &quot;&quot;
    },
    &quot;artists&quot; : [ {
      &quot;name&quot; : &quot;Fin Productions&quot;
    } ],
    &quot;assets&quot; : {
      &quot;clean_audio&quot; : {
        &quot;file_size&quot; : 30760372
      },
      &quot;preview_mp3&quot; : {
        &quot;file_size&quot; : 3846606,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3&quot;
      },
      &quot;preview_ogg&quot; : {
        &quot;file_size&quot; : 4402608,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg&quot;
      },
      &quot;waveform&quot; : {
        &quot;file_size&quot; : 19822,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png&quot;
      }
    },
    &quot;bpm&quot; : 100,
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;2847971&quot;
    },
    &quot;description&quot; : &quot;Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.&quot;,
    &quot;duration&quot; : 160,
    &quot;genres&quot; : [ &quot;Dance/Electronic&quot;, &quot;Electro Pop&quot;, &quot;Pop/Rock&quot; ],
    &quot;id&quot; : &quot;434750&quot;,
    &quot;instruments&quot; : [ &quot;Bass&quot;, &quot;Drums&quot;, &quot;Electric guitar&quot;, &quot;Pads&quot;, &quot;Percussion&quot;, &quot;Synthesizer&quot; ],
    &quot;is_adult&quot; : false,
    &quot;is_instrumental&quot; : true,
    &quot;isrc&quot; : &quot;&quot;,
    &quot;keywords&quot; : [ &quot;breezy&quot;, &quot;celebration&quot;, &quot;festive&quot;, &quot;good times&quot;, &quot;hopeful&quot;, &quot;optimistic&quot;, &quot;party&quot;, &quot;positive&quot;, &quot;reflective&quot; ],
    &quot;language&quot; : &quot;en&quot;,
    &quot;lyrics&quot; : &quot;&quot;,
    &quot;media_type&quot; : &quot;audio&quot;,
    &quot;moods&quot; : [ &quot;Bright&quot;, &quot;Confident&quot;, &quot;Fun&quot;, &quot;Happy&quot;, &quot;Inspiring&quot;, &quot;Optimistic&quot;, &quot;Playful&quot;, &quot;Sophisticated&quot;, &quot;Stylish&quot;, &quot;Uplifting&quot; ],
    &quot;published_time&quot; : &quot;2016-04-12T17:45:29-04:00&quot;,
    &quot;recording_version&quot; : &quot;&quot;,
    &quot;releases&quot; : [ ],
    &quot;similar_artists&quot; : [ ],
    &quot;title&quot; : &quot;Fresh Love&quot;,
    &quot;updated_time&quot; : &quot;2016-08-18T18:03:11-04:00&quot;,
    &quot;vocal_description&quot; : &quot;&quot;
  } ]
}

<a name="licenseTrack"></a>
# AudioApi.licenseTrack
> `LicenseAudioResultDataList AudioApi.licenseTrack(body, queryParams)`

**License audio tracks**

This endpoint gets licenses for one or more tracks.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const body = new ShutterstockApiReference.LicenseAudioRequest(); // LicenseAudioRequest | Tracks to license

const queryParams = { 
  'license': "audio_standard", // String | License type
  'search_id': "search_id_example" // String | The ID of the search that led to licensing this track
};

api.licenseTrack(body, queryParams)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseAudioRequest](LicenseAudioRequest.md)| Tracks to license 
 license | String| License type, defaults to audio_standard <br/><br/>Valid values: "audio_standard", "audio_enhanced", "audio_platform"
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

{
  &quot;data&quot; : [ {
    &quot;audio_id&quot; : &quot;1&quot;,
    &quot;download&quot; : {
      &quot;url&quot; : &quot;http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav&quot;
    }
  } ]
}

<a name="renameSoundbox"></a>
# AudioApi.renameSoundbox
> `AudioApi.renameSoundbox(id, body)`

**Rename audio collections**

This endpoint sets a new name for a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433107\""; // String | Collection ID

const body = new ShutterstockApiReference.CollectionUpdateRequest(); // CollectionUpdateRequest | Collection changes


api.renameSoundbox(id, body)
.then(function() {
  console.log('API called successfully.');
})
.catch(function(error) {
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

No response body


<a name="searchAudio"></a>
# AudioApi.searchAudio
> `AudioSearchResults AudioApi.searchAudio(queryParams)`

**Search for tracks**

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api &#x3D; new sstk.AudioApi();

const queryParams &#x3D; {
  query: &#39;bluegrass&#39;,
  duration_from: 60,
  moods: [&#39;uplifting&#39;]
};

api.searchAudio(queryParams)
.then(function({data}) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 artists | [[String]](String.md)| Show tracks with one of the specified artist names or IDs 
 bpm | Number| (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute 
 bpm_from | Number| Show tracks with the specified beats per minute or faster 
 bpm_to | Number| Show tracks with the specified beats per minute or slower 
 duration | Number| Show tracks with the specified duration (seconds) 
 duration_from | Number| Show tracks with the specified duration or longer (seconds) 
 duration_to | Number| Show tracks with the specified duration or shorter (seconds) 
 genre | [[String]](String.md)| Show tracks with each of the specified genres <br/><br/>Valid values: "Blues", "Children", "Classical", "Country", "Dance/Electronic", "Hip-Hop/Rap", "Holiday", "Jazz", "New Age", "Pop/Rock", "R&B/Soul", "Reggae/Ska", "Spiritual", "World/International"
 is_instrumental | Boolean| Show instrumental music only 
 instruments | [[String]](String.md)| Show tracks with each of the specified instruments 
 moods | [[String]](String.md)| Show tracks with each of the specified moods 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by <br/><br/>Valid values: "score", "ranking_all", "artist", "title", "bpm", "freshness", "duration"
 sort_order | String| Sort order, asc or desc, defaults to desc <br/><br/>Valid values: "asc", "desc"
 vocal_description | String| Show tracks with the specified vocal description (male, female) 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[AudioSearchResults](AudioSearchResults.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;added_date&quot; : &quot;2016-08-16&quot;,
    &quot;album&quot; : {
      &quot;id&quot; : &quot;&quot;,
      &quot;title&quot; : &quot;&quot;
    },
    &quot;artists&quot; : [ {
      &quot;name&quot; : &quot;Klimenko Music&quot;
    } ],
    &quot;assets&quot; : {
      &quot;clean_audio&quot; : {
        &quot;file_size&quot; : 35188408
      },
      &quot;preview_mp3&quot; : {
        &quot;file_size&quot; : 4400203,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3&quot;
      },
      &quot;preview_ogg&quot; : {
        &quot;file_size&quot; : 4453197,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg&quot;
      },
      &quot;waveform&quot; : {
        &quot;file_size&quot; : 18778,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png&quot;
      }
    },
    &quot;bpm&quot; : 110,
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;2847971&quot;
    },
    &quot;description&quot; : &quot;Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.&quot;,
    &quot;duration&quot; : 183,
    &quot;genres&quot; : [ &quot;Dance/Electronic&quot;, &quot;Electro Pop&quot;, &quot;Pop/Rock&quot; ],
    &quot;id&quot; : &quot;442583&quot;,
    &quot;instruments&quot; : [ &quot;Piano&quot;, &quot;Synth bass&quot;, &quot;Synth drums&quot;, &quot;Synthesizer&quot; ],
    &quot;is_adult&quot; : false,
    &quot;is_instrumental&quot; : true,
    &quot;isrc&quot; : &quot;&quot;,
    &quot;keywords&quot; : [ &quot;celebratory&quot;, &quot;chic&quot;, &quot;euphoric&quot;, &quot;good times&quot;, &quot;hip&quot;, &quot;optimistic&quot;, &quot;party&quot;, &quot;soaring&quot;, &quot;upbeat&quot; ],
    &quot;language&quot; : &quot;en&quot;,
    &quot;lyrics&quot; : &quot;&quot;,
    &quot;media_type&quot; : &quot;audio&quot;,
    &quot;moods&quot; : [ &quot;Bright&quot;, &quot;Confident&quot;, &quot;Fun&quot;, &quot;Happy&quot;, &quot;Inspiring&quot;, &quot;Optimistic&quot;, &quot;Playful&quot;, &quot;Sophisticated&quot;, &quot;Stylish&quot;, &quot;Uplifting&quot; ],
    &quot;published_time&quot; : &quot;2016-08-16T14:30:03-04:00&quot;,
    &quot;recording_version&quot; : &quot;&quot;,
    &quot;releases&quot; : [ ],
    &quot;similar_artists&quot; : [ ],
    &quot;title&quot; : &quot;Another Tomorrow&quot;,
    &quot;updated_time&quot; : &quot;2016-08-18T17:59:33-04:00&quot;,
    &quot;vocal_description&quot; : &quot;&quot;,
    &quot;url&quot; : &quot;https://www.shutterstock.com/music/track/another-tomorrow/442583&quot;
  }, {
    &quot;added_date&quot; : &quot;2016-08-16&quot;,
    &quot;album&quot; : {
      &quot;id&quot; : &quot;&quot;,
      &quot;title&quot; : &quot;&quot;
    },
    &quot;artists&quot; : [ {
      &quot;name&quot; : &quot;Klimenko Music&quot;
    } ],
    &quot;assets&quot; : {
      &quot;clean_audio&quot; : {
        &quot;file_size&quot; : 35188408
      },
      &quot;preview_mp3&quot; : {
        &quot;file_size&quot; : 4400203,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3&quot;
      },
      &quot;preview_ogg&quot; : {
        &quot;file_size&quot; : 4453197,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg&quot;
      },
      &quot;waveform&quot; : {
        &quot;file_size&quot; : 18778,
        &quot;url&quot; : &quot;https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png&quot;
      }
    },
    &quot;bpm&quot; : 110,
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;2847971&quot;
    },
    &quot;description&quot; : &quot;Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.&quot;,
    &quot;duration&quot; : 183,
    &quot;genres&quot; : [ &quot;Dance/Electronic&quot;, &quot;Electro Pop&quot;, &quot;Pop/Rock&quot; ],
    &quot;id&quot; : &quot;442583&quot;,
    &quot;instruments&quot; : [ &quot;Piano&quot;, &quot;Synth bass&quot;, &quot;Synth drums&quot;, &quot;Synthesizer&quot; ],
    &quot;is_adult&quot; : false,
    &quot;is_instrumental&quot; : true,
    &quot;isrc&quot; : &quot;&quot;,
    &quot;keywords&quot; : [ &quot;celebratory&quot;, &quot;chic&quot;, &quot;euphoric&quot;, &quot;good times&quot;, &quot;hip&quot;, &quot;optimistic&quot;, &quot;party&quot;, &quot;soaring&quot;, &quot;upbeat&quot; ],
    &quot;language&quot; : &quot;en&quot;,
    &quot;lyrics&quot; : &quot;&quot;,
    &quot;media_type&quot; : &quot;audio&quot;,
    &quot;moods&quot; : [ &quot;Bright&quot;, &quot;Confident&quot;, &quot;Fun&quot;, &quot;Happy&quot;, &quot;Inspiring&quot;, &quot;Optimistic&quot;, &quot;Playful&quot;, &quot;Sophisticated&quot;, &quot;Stylish&quot;, &quot;Uplifting&quot; ],
    &quot;published_time&quot; : &quot;2016-08-16T14:30:03-04:00&quot;,
    &quot;recording_version&quot; : &quot;&quot;,
    &quot;releases&quot; : [ ],
    &quot;similar_artists&quot; : [ ],
    &quot;title&quot; : &quot;Another Tomorrow&quot;,
    &quot;updated_time&quot; : &quot;2016-08-18T17:59:33-04:00&quot;,
    &quot;vocal_description&quot; : &quot;&quot;,
    &quot;url&quot; : &quot;https://www.shutterstock.com/music/track/another-tomorrow/442583&quot;
  } ],
  &quot;total_count&quot; : 1,
  &quot;page&quot; : 0,
  &quot;message&quot; : &quot;message&quot;
}

