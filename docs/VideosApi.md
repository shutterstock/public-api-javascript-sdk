# shutterstock-api.VideosApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addClipboxItems`](VideosApi.md#addClipboxItems) | `POST /v2/videos/collections/{id}/items` | Add videos to collections
[`createClipbox`](VideosApi.md#createClipbox) | `POST /v2/videos/collections` | Create video collections
[`deleteClipbox`](VideosApi.md#deleteClipbox) | `DELETE /v2/videos/collections/{id}` | Delete video collections
[`deleteClipboxItems`](VideosApi.md#deleteClipboxItems) | `DELETE /v2/videos/collections/{id}/items` | Remove videos from collections
[`downloadVideos`](VideosApi.md#downloadVideos) | `POST /v2/videos/licenses/{id}/downloads` | Download videos
[`getClipbox`](VideosApi.md#getClipbox) | `GET /v2/videos/collections/{id}` | Get the details of video collections
[`getClipboxItems`](VideosApi.md#getClipboxItems) | `GET /v2/videos/collections/{id}/items` | Get the contents of video collections
[`getClipboxList`](VideosApi.md#getClipboxList) | `GET /v2/videos/collections` | List video collections
[`getSimilarVideos`](VideosApi.md#getSimilarVideos) | `GET /v2/videos/{id}/similar` | List similar videos
[`getUpdatedVideos`](VideosApi.md#getUpdatedVideos) | `GET /v2/videos/updated` | List updated videos
[`getVideo`](VideosApi.md#getVideo) | `GET /v2/videos/{id}` | Get details about videos
[`getVideoCategories`](VideosApi.md#getVideoCategories) | `GET /v2/videos/categories` | List video categories
[`getVideoLicenseList`](VideosApi.md#getVideoLicenseList) | `GET /v2/videos/licenses` | List video licenses
[`getVideoList`](VideosApi.md#getVideoList) | `GET /v2/videos` | List videos
[`getVideoSuggestions`](VideosApi.md#getVideoSuggestions) | `GET /v2/videos/search/suggestions` | Get suggestions for a search term
[`licenseVideos`](VideosApi.md#licenseVideos) | `POST /v2/videos/licenses` | License videos
[`renameClipbox`](VideosApi.md#renameClipbox) | `POST /v2/videos/collections/{id}` | Rename video collections
[`searchVideos`](VideosApi.md#searchVideos) | `GET /v2/videos/search` | Search for videos


<a name="addClipboxItems"></a>
# VideosApi.addClipboxItems
> `VideosApi.addClipboxItems(id, body)`

**Add videos to collections**

This endpoint adds one or more videos to a collection by video IDs.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176"; // Collection ID

// Array of videos to add
const body = {
  "items": [
    {
      "id": "10120264",
      "media_type": "video"
    }
  ]
};

videosApi.addLightboxItems(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to which items should be added 
 body (required) | [CollectionItemRequest](CollectionItemRequest.md)| Array of video IDs to add to the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="createClipbox"></a>
# VideosApi.createClipbox
> `CollectionCreateResponse VideosApi.createClipbox(body)`

**Create video collections**

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const body = {
  "name": "New collection name"
};

videosApi.createClipbox(body)
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

<a name="deleteClipbox"></a>
# VideosApi.deleteClipbox
> `VideosApi.deleteClipbox(id)`

**Delete video collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176";

videosApi.deleteClipbox(collectionId)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to delete 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="deleteClipboxItems"></a>
# VideosApi.deleteClipboxItems
> `VideosApi.deleteClipboxItems(id, queryParams)`

**Remove videos from collections**

This endpoint removes one or more videos from a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176";

// Array of videos to remove
const videosToRemove = {
  "item_id": [
    "10120264"
  ]
};

videosApi.deleteClipboxItems(collectionId, videosToRemove)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the Collection from which items will be deleted 
 item_id | [String]| One or more video IDs to remove from the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="downloadVideos"></a>
# VideosApi.downloadVideos
> `Url VideosApi.downloadVideos(id, body)`

**Download videos**

This endpoint redownloads videos that you have already received a license for.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const licenseId = "e123";

const body = {};

videosApi.downloadVideos(licenseId, body)
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
 id (required) | String| The license ID of the item to (re)download 
 body (required) | [RedownloadVideo](RedownloadVideo.md)| Information about the videos to redownload 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[Url](Url.md)

### Example response

```
{
  "url" : "url"
}
```

<a name="getClipbox"></a>
# VideosApi.getClipbox
> `Collection VideosApi.getClipbox(id)`

**Get the details of video collections**

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the collection to return


api.getClipbox(id)
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
 id (required) | String| The ID of the collection to return 

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

<a name="getClipboxItems"></a>
# VideosApi.getClipboxItems
> `CollectionItemDataList VideosApi.getClipboxItems(id, queryParams)`

**Get the contents of video collections**

This endpoint lists the IDs of videos in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the Collection whose items are to be returned

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getClipboxItems(id, queryParams)
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
 id (required) | String| The ID of the Collection whose items are to be returned 
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

<a name="getClipboxList"></a>
# VideosApi.getClipboxList
> `CollectionDataList VideosApi.getClipboxList(queryParams)`

**List video collections**

This endpoint lists your collections of videos and their basic attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page
};

api.getClipboxList(queryParams)
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

<a name="getSimilarVideos"></a>
# VideosApi.getSimilarVideos
> `VideoSearchResults VideosApi.getSimilarVideos(id, queryParams)`

**List similar videos**

This endpoint searches for videos that are similar to a video that you specify.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "2140697"; // String | The ID of a video for which similar videos should be returned

const queryParams = { 
  'language': "es", // String | Language for the keywords and categories in the response
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getSimilarVideos(id, queryParams)
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
 id (required) | String| The ID of a video for which similar videos should be returned 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[VideoSearchResults](VideoSearchResults.md)

### Example response

```
{
  "per_page" : 9,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 3,
  "page" : 7,
  "message" : "message",
  "search_id" : "search_id"
}
```

<a name="getUpdatedVideos"></a>
# VideosApi.getUpdatedVideos
> `UpdatedMediaDataList VideosApi.getUpdatedVideos(queryParams)`

**List updated videos**

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const queryParams = {
  "interval": "30 MINUTE"
};

videosApi.getUpdatedVideos(queryParams)
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
 start_date | Date| Show videos updated on or after the specified date 
 end_date | Date| Show videos updated before the specified date 
 interval | String| Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request, defaults to 1 HOUR 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 sort | String| Sort by oldest or newest videos first, defaults to newest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[UpdatedMediaDataList](UpdatedMediaDataList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "id" : "id",
    "updates" : [ "updates", "updates" ]
  }, {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "id" : "id",
    "updates" : [ "updates", "updates" ]
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

<a name="getVideo"></a>
# VideosApi.getVideo
> `Video VideosApi.getVideo(id, queryParams)`

**Get details about videos**

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "30867073"; // String | Video ID

const queryParams = { 
  'language': "es", // String | Language for the keywords and categories in the response
  'view': "full" // String | Amount of detail to render in the response
};

api.getVideo(id, queryParams)
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
 id (required) | String| Video ID 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Video](Video.md)

### Example response

```
{
  "has_property_release" : true,
  "aspect_ratio" : "aspect_ratio",
  "models" : [ {
    "id" : "id"
  }, {
    "id" : "id"
  } ],
  "keywords" : [ "keywords", "keywords" ],
  "added_date" : "2000-01-23",
  "description" : "description",
  "affiliate_url" : "http://example.com/aeiou",
  "url" : "url",
  "is_adult" : true,
  "duration" : 2.3021358869347654518833223846741020679473876953125,
  "assets" : {
    "thumb_webm" : {
      "url" : "url"
    },
    "sd" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "preview_jpg" : {
      "url" : "url"
    },
    "preview_mp4" : {
      "url" : "url"
    },
    "web" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "4k" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "thumb_jpgs" : {
      "urls" : [ "urls", "urls" ]
    },
    "preview_webm" : {
      "url" : "url"
    },
    "hd" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "thumb_jpg" : {
      "url" : "url"
    },
    "thumb_mp4" : {
      "url" : "url"
    }
  },
  "contributor" : {
    "id" : "id"
  },
  "is_editorial" : true,
  "media_type" : "media_type",
  "aspect" : 0.80082819046101150206595775671303272247314453125,
  "has_model_release" : true,
  "categories" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ],
  "id" : "id"
}
```

<a name="getVideoCategories"></a>
# VideosApi.getVideoCategories
> `CategoryDataList VideosApi.getVideoCategories(queryParams)`

**List video categories**

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'language': "es" // String | Language for the keywords and categories in the response
};

api.getVideoCategories(queryParams)
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
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[CategoryDataList](CategoryDataList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
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

<a name="getVideoLicenseList"></a>
# VideosApi.getVideoLicenseList
> `DownloadHistoryDataList VideosApi.getVideoLicenseList(queryParams)`

**List video licenses**

This endpoint lists existing licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'video_id': "video_id_example", // String | Show licenses for the specified video ID
  'license': "license_example", // String | Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort by oldest or newest videos first
  'username': "username_example", // String | Filter licenses by username of licensee
  'start_date': new Date("2020-02-02T13:00-05:00"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2020-02-02T13:00-05:00") // Date | Show licenses created before the specified date
};

api.getVideoLicenseList(queryParams)
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
 video_id | String| Show licenses for the specified video ID 
 license | String| Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort by oldest or newest videos first, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 username | String| Filter licenses by username of licensee 
 start_date | Date| Show licenses created on or after the specified date 
 end_date | Date| Show licenses created before the specified date 

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

<a name="getVideoList"></a>
# VideosApi.getVideoList
> `VideoDataList VideosApi.getVideoList(id, queryParams)`

**List videos**

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = ["[639703, 993721]"]; // [String] | One or more video IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getVideoList(id, queryParams)
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
 id (required) | [String]| One or more video IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[VideoDataList](VideoDataList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
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

<a name="getVideoSuggestions"></a>
# VideosApi.getVideoSuggestions
> `Suggestions VideosApi.getVideoSuggestions(query, queryParams)`

**Get suggestions for a search term**

This endpoint provides autocomplete suggestions for partial search terms.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const query = "cats"; // String | Search term for which you want keyword suggestions

const queryParams = { 
  'limit': 10 // Number | Limit the number of the suggestions
};

api.getVideoSuggestions(query, queryParams)
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
 query (required) | String| Search term for which you want keyword suggestions 
 limit | Number| Limit the number of the suggestions, defaults to 10 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Suggestions](Suggestions.md)

### Example response

```
{
  "data" : [ "data", "data" ]
}
```

<a name="licenseVideos"></a>
# VideosApi.licenseVideos
> `LicenseVideoResultDataList VideosApi.licenseVideos(body, queryParams)`

**License videos**

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const body = {
  "videos": [
    {
      "video_id": "419235589"
    },
    {
      "video_id": "1079756147"
    }
  ]
};

const queryParams = {
  "subscription_id": SHUTTERSTOCK_SUBSCRIPTION_ID,
  "size": "web"
};

videosApi.searchVideos(body, queryParams)
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
 body (required) | [LicenseVideoRequest](LicenseVideoRequest.md)| List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
 subscription_id | String| The subscription ID to use for licensing 
 size | String| The size of the video to license, defaults to web <br/><br/>Valid values: "web", "sd", "hd", "4k"
 search_id | String| The Search ID that led to this licensing event 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create
Required scopes:
  - purchases.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[LicenseVideoResultDataList](LicenseVideoResultDataList.md)

### Example response

```
{
  "per_page" : 1,
  "data" : [ {
    "download" : {
      "url" : "url"
    },
    "price" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "video_id" : "video_id"
  }, {
    "download" : {
      "url" : "url"
    },
    "price" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "video_id" : "video_id"
  } ],
  "total_count" : 5,
  "page" : 6,
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

<a name="renameClipbox"></a>
# VideosApi.renameClipbox
> `VideosApi.renameClipbox(id, body)`

**Rename video collections**

This endpoint sets a new name for a collection.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "186765119";

const body = {
  "name": "My new collection name"
};

videosApi.renameClipbox(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to rename 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest.md)| The new name for the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="searchVideos"></a>
# VideosApi.searchVideos
> `VideoSearchResults VideosApi.searchVideos(queryParams)`

**Search for videos**

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const queryParams = {
  "query": "hot air balloon",
  "duration_from": 30,
  "sort": "popular"
};

videosApi.searchVideos(queryParams)
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
 added_date | Date| Show videos added on the specified date 
 added_date_start | Date| Show videos added on or after the specified date 
 added_date_end | Date| Show videos added before the specified date 
 aspect_ratio | String| Show videos with the specified aspect ratio <br/><br/>Valid values: "4_3", "16_9", "nonstandard"
 category | String| Show videos with the specified Shutterstock-defined category; specify a category name or ID 
 contributor | [String]| Show videos with the specified artist names or IDs 
 contributor_country | [String]| Show videos from contributors in one or more specified countries 
 duration | Number| (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds 
 duration_from | Number| Show videos with the specified duration or longer in seconds 
 duration_to | Number| Show videos with the specified duration or shorter in seconds 
 fps | Number| (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second 
 fps_from | Number| Show videos with the specified frames per second or more 
 fps_to | Number| Show videos with the specified frames per second or fewer 
 keyword_safe_search | Boolean| Hide results with potentially unsafe keywords, defaults to true 
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"
 license | [String]| Show only videos with the specified license or licenses <br/><br/>Valid values: "commercial", "editorial"
 model | [String]| Show videos with each of the specified models 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 people_age | String| Show videos that feature people of the specified age range <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | [String]| Show videos with people of the specified ethnicities <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other"
 people_gender | String| Show videos with people with the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show videos with the specified number of people 
 people_model_released | Boolean| Show only videos of people with a signed model release 
 query | String| One or more search terms separated by spaces; you can use NOT to filter out videos that match a term 
 resolution | String| Show videos with the specified resolution <br/><br/>Valid values: "4k", "standard_definition", "high_definition"
 safe | Boolean| Enable or disable safe search, defaults to true 
 sort | String| Sort by one of these categories, defaults to popular <br/><br/>Valid values: "newest", "popular", "relevance", "random"
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[VideoSearchResults](VideoSearchResults.md)

### Example response

```
{
  "per_page" : 9,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 3,
  "page" : 7,
  "message" : "message",
  "search_id" : "search_id"
}
```

