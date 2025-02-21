# shutterstock-api.VideosApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addVideoCollectionItems`](VideosApi.md#addVideoCollectionItems) | `POST /v2/videos/collections/{id}/items` | Add videos to collections
[`createVideoCollection`](VideosApi.md#createVideoCollection) | `POST /v2/videos/collections` | Create video collections
[`deleteVideoCollection`](VideosApi.md#deleteVideoCollection) | `DELETE /v2/videos/collections/{id}` | Delete video collections
[`deleteVideoCollectionItems`](VideosApi.md#deleteVideoCollectionItems) | `DELETE /v2/videos/collections/{id}/items` | Remove videos from collections
[`downloadVideos`](VideosApi.md#downloadVideos) | `POST /v2/videos/licenses/{id}/downloads` | Download videos
[`findSimilarVideos`](VideosApi.md#findSimilarVideos) | `GET /v2/videos/{id}/similar` | List similar videos
[`getUpdatedVideos`](VideosApi.md#getUpdatedVideos) | `GET /v2/videos/updated` | List updated videos
[`getVideo`](VideosApi.md#getVideo) | `GET /v2/videos/{id}` | Get details about videos
[`getVideoCollection`](VideosApi.md#getVideoCollection) | `GET /v2/videos/collections/{id}` | Get the details of video collections
[`getVideoCollectionItems`](VideosApi.md#getVideoCollectionItems) | `GET /v2/videos/collections/{id}/items` | Get the contents of video collections
[`getVideoCollectionList`](VideosApi.md#getVideoCollectionList) | `GET /v2/videos/collections` | List video collections
[`getVideoLicenseList`](VideosApi.md#getVideoLicenseList) | `GET /v2/videos/licenses` | List video licenses
[`getVideoList`](VideosApi.md#getVideoList) | `GET /v2/videos` | List videos
[`getVideoSuggestions`](VideosApi.md#getVideoSuggestions) | `GET /v2/videos/search/suggestions` | Get suggestions for a search term
[`licenseVideos`](VideosApi.md#licenseVideos) | `POST /v2/videos/licenses` | License videos
[`listVideoCategories`](VideosApi.md#listVideoCategories) | `GET /v2/videos/categories` | List video categories
[`renameVideoCollection`](VideosApi.md#renameVideoCollection) | `POST /v2/videos/collections/{id}` | Rename video collections
[`searchVideos`](VideosApi.md#searchVideos) | `GET /v2/videos/search` | Search for videos


<a name="addVideoCollectionItems"></a>
# VideosApi.addVideoCollectionItems
> `VideosApi.addVideoCollectionItems(id, body)`

**Add videos to collections**

This endpoint adds one or more videos to a collection by video IDs.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the collection to which items should be added

const body = new ShutterstockApiReference.Body11(); // Body11 | Array of video IDs to add to the collection


api.addVideoCollectionItems(id, body)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to which items should be added 
 body (required) | [Body11](Body11.md)| Array of video IDs to add to the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="createVideoCollection"></a>
# VideosApi.createVideoCollection
> `InlineResponse201 VideosApi.createVideoCollection(body)`

**Create video collections**

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const body = new ShutterstockApiReference.Body9(); // Body9 | Collection metadata


api.createVideoCollection(body)
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
 body (required) | [Body9](Body9.md)| Collection metadata 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse201](InlineResponse201.md)

### Example response

```
"{id=48433105}"
```

<a name="deleteVideoCollection"></a>
# VideosApi.deleteVideoCollection
> `VideosApi.deleteVideoCollection(id)`

**Delete video collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the collection to delete


api.deleteVideoCollection(id)
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


<a name="deleteVideoCollectionItems"></a>
# VideosApi.deleteVideoCollectionItems
> `VideosApi.deleteVideoCollectionItems(id, queryParams)`

**Remove videos from collections**

This endpoint removes one or more videos from a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the Collection from which items will be deleted

const queryParams = { 
  'item_id': ["item_id_example"] // [String] | One or more video IDs to remove from the collection
};

api.deleteVideoCollectionItems(id, queryParams)
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
> `InlineResponse2004 VideosApi.downloadVideos(id, body)`

**Download videos**

This endpoint redownloads videos that you have already received a license for.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "e123"; // String | The license ID of the item to (re)download. The download links in the response are valid for 8 hours.

const body = new ShutterstockApiReference.Body8(); // Body8 | Information about the videos to redownload


api.downloadVideos(id, body)
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
 id (required) | String| The license ID of the item to (re)download. The download links in the response are valid for 8 hours. 
 body (required) | [Body8](Body8.md)| Information about the videos to redownload 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2004](InlineResponse2004.md)

### Example response

```
"{url=https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg}"
```

<a name="findSimilarVideos"></a>
# VideosApi.findSimilarVideos
> `InlineResponse2006 VideosApi.findSimilarVideos(id, queryParams)`

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

api.findSimilarVideos(id, queryParams)
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
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse2006](InlineResponse2006.md)

### Example response

```
"{data=[{id=1033184651, aspect=1.778, aspect_ratio=16:9, assets={thumb_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, thumb_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, preview_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, preview_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, thumb_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}, preview_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}}, contributor={id=4411978}, description=Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness, duration=14.081, has_model_release=true, media_type=video}], page=1, per_page=5, total_count=123, search_id=749090bb-2967-4a20-b22e-c800dc845e10}"
```

<a name="getUpdatedVideos"></a>
# VideosApi.getUpdatedVideos
> `Object VideosApi.getUpdatedVideos(queryParams)`

**List updated videos**

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'start_date': "2021-03-29T00:00:00Z OR 2021-03-29", // String | Show videos updated on or after the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency.
  'end_date': "2021-03-29T23:59:59Z OR 2021-03-29", // String | Show videos updated before the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. Please note that the end date must be at least 5 minutes after the start date.
  'interval': "1 HOUR", // String | Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "newest" // String | Sort by oldest or newest videos first
};

api.getUpdatedVideos(queryParams)
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
 start_date | String| Show videos updated on or after the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. 
 end_date | String| Show videos updated before the specified date. The API will default to UTC (00:00:00) if no specific time is provided, ensuring consistency. Please note that the end date must be at least 5 minutes after the start date. 
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

Object

### Example response

```
{
  "data" : [ {
    "id" : "123456789",
    "updated_time" : "2020-05-29T12:10:22-05:00",
    "updates" : [ "addition", "edit" ]
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 13
}
```

<a name="getVideo"></a>
# VideosApi.getVideo
> `InlineResponse2007 VideosApi.getVideo(id, queryParams)`

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

const id = "639703"; // String | Video ID

const queryParams = { 
  'language': "es", // String | Language for the keywords and categories in the response
  'view': "full", // String | Amount of detail to render in the response
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
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
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"
 search_id | String| The ID of the search that is related to this request 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse2007](InlineResponse2007.md)

### Example response

```
"{id=1033184651, added_date=2019-07-13, aspect=1.778, aspect_ratio=16:9, assets={thumb_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, thumb_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, preview_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, preview_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, thumb_jpgs={urls=[https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg, https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg]}, thumb_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}, preview_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}, sd={height=480, width=852, fps=29.97, format=mov, file_size=4577280, display_name=Standard Definition MPEG, is_licensable=true}, web={height=240, width=426, fps=29.97, format=mov, file_size=1291264, display_name=Low Resolution MPEG, is_licensable=true}, hd={height=1080, width=1920, fps=29.97, format=avc1, file_size=110359552, display_name=Original HD, is_licensable=true}}, categories=[{name=Nature, id=12}, {name=People, id=13}], contributor={id=4411978}, description=Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness, duration=14.081, has_model_release=true, has_property_release=false, is_adult=false, is_editorial=false, keywords=[active, activity, adventure, arms, backpacker, carefree, celebrating, cliff, climate, cloud, discovery, escape, explore, extreme, free, freedom, girl, happy, high, hiker, hiking, hill, independent, inspiration, landscape, leisure, lifestyle, mountain, mountains, nature, outdoor, peak, person, rock, scenic, sky, sport, success, summer, summit, sun, sunset, top, tourism, travel, trekking, vacation, view, winning, woman], media_type=video, models=[{id=33233810}, {id=25487168}]}"
```

<a name="getVideoCollection"></a>
# VideosApi.getVideoCollection
> `InlineResponse2005 VideosApi.getVideoCollection(id, queryParams)`

**Get the details of video collections**

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the collection to return

const queryParams = { 
  'embed': ["embed_example"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'share_code': "share_code_example" // String | Code to retrieve a shared collection
};

api.getVideoCollection(id, queryParams)
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
 embed | [String]| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 share_code | String| Code to retrieve a shared collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse2005](InlineResponse2005.md)

### Example response

```
"{id=293542904, name=My collection, total_item_count=85, items_updated_time=2021-05-20T16:15:22-04:00, cover_item={id=297886754}}"
```

<a name="getVideoCollectionItems"></a>
# VideosApi.getVideoCollectionItems
> `Object VideosApi.getVideoCollectionItems(id, queryParams)`

**Get the contents of video collections**

This endpoint lists the IDs of videos in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'share_code': "share_code_example", // String | Code to retrieve the contents of a shared collection
  'sort': "oldest" // String | Sort order
};

api.getVideoCollectionItems(id, queryParams)
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

Object

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

<a name="getVideoCollectionList"></a>
# VideosApi.getVideoCollectionList
> `Object VideosApi.getVideoCollectionList(queryParams)`

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
  'per_page': 100, // Number | Number of results per page
  'embed': ["share_code"] // [String] | Which sharing information to include in the response, such as a URL to the collection
};

api.getVideoCollectionList(queryParams)
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

Object

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

<a name="getVideoLicenseList"></a>
# VideosApi.getVideoLicenseList
> `Object VideosApi.getVideoLicenseList(queryParams)`

**List video licenses**

This endpoint lists existing licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'video_id': "12345678", // String | Show licenses for the specified video ID
  'license': "standard", // String | Show videos that are available with the specified license, such as `standard` or `enhanced`
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort by oldest or newest videos first
  'username': "aUniqueUsername", // String | Filter licenses by username of licensee
  'start_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created before the specified date
  'download_availability': "all", // String | Filter licenses by download availability
  'team_history': false // Boolean | Set to true to see license history for all members of your team.
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
 license | String| Show videos that are available with the specified license, such as `standard` or `enhanced` 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort by oldest or newest videos first, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 username | String| Filter licenses by username of licensee 
 start_date | Date| Show licenses created on or after the specified date 
 end_date | Date| Show licenses created before the specified date 
 download_availability | String| Filter licenses by download availability, defaults to all <br/><br/>Valid values: "all", "downloadable", "non_downloadable"
 team_history | Boolean| Set to true to see license history for all members of your team., defaults to false 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers



- Accept: application/json

### Return type

Object

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

<a name="getVideoList"></a>
# VideosApi.getVideoList
> `Object VideosApi.getVideoList(id, queryParams)`

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
  'view': "minimal", // String | Amount of detail to render in the response
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
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
 search_id | String| The ID of the search that is related to this request 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

Object

### Example response

```
{
  "data" : [ {
    "id" : "1033184651",
    "added_date" : "2019-07-13",
    "aspect" : 1.778,
    "aspect_ratio" : "16:9",
    "assets" : {
      "thumb_webm" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
      },
      "thumb_mp4" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
      },
      "preview_webm" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
      },
      "preview_mp4" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
      },
      "thumb_jpgs" : {
        "urls" : [ "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg", "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg" ]
      },
      "thumb_jpg" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
      },
      "preview_jpg" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
      },
      "sd" : {
        "height" : 480,
        "width" : 852,
        "fps" : 29.97,
        "format" : "mov",
        "file_size" : 4577280,
        "display_name" : "Standard Definition MPEG",
        "is_licensable" : true
      },
      "web" : {
        "height" : 240,
        "width" : 426,
        "fps" : 29.97,
        "format" : "mov",
        "file_size" : 1291264,
        "display_name" : "Low Resolution MPEG",
        "is_licensable" : true
      },
      "hd" : {
        "height" : 1080,
        "width" : 1920,
        "fps" : 29.97,
        "format" : "avc1",
        "file_size" : 110359552,
        "display_name" : "Original HD",
        "is_licensable" : true
      }
    },
    "categories" : [ {
      "name" : "Nature",
      "id" : "12"
    }, {
      "name" : "People",
      "id" : "13"
    } ],
    "contributor" : {
      "id" : "4411978"
    },
    "description" : "Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness",
    "duration" : 14.081,
    "has_model_release" : true,
    "has_property_release" : false,
    "is_adult" : false,
    "is_editorial" : false,
    "keywords" : [ "active", "activity", "adventure", "arms", "backpacker", "carefree", "celebrating", "cliff", "climate", "cloud", "discovery", "escape", "explore", "extreme", "free", "freedom", "girl", "happy", "high", "hiker", "hiking", "hill", "independent", "inspiration", "landscape", "leisure", "lifestyle", "mountain", "mountains", "nature", "outdoor", "peak", "person", "rock", "scenic", "sky", "sport", "success", "summer", "summit", "sun", "sunset", "top", "tourism", "travel", "trekking", "vacation", "view", "winning", "woman" ],
    "media_type" : "video",
    "models" : [ {
      "id" : "33233810"
    }, {
      "id" : "25487168"
    } ]
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 25
}
```

<a name="getVideoSuggestions"></a>
# VideosApi.getVideoSuggestions
> `InlineResponse2002 VideosApi.getVideoSuggestions(query, queryParams)`

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

[InlineResponse2002](InlineResponse2002.md)

### Example response

```
"{data=[cat scan, cats and dogs, cats playing, catsuit, cat silhouette, catskills, cats eyes, cat sitting, cat sleeping, cats eye]}"
```

<a name="licenseVideos"></a>
# VideosApi.licenseVideos
> `Object VideosApi.licenseVideos(body, queryParams)`

**License videos**

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const body = new ShutterstockApiReference.Body7(); // Body7 | List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters

const queryParams = { 
  'subscription_id': "s12345678", // String | The subscription ID to use for licensing
  'size': "web", // String | The size of the video to license
  'search_id': "search_id_example" // String | The Search ID that led to this licensing event
};

api.licenseVideos(body, queryParams)
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
 body (required) | [Body7](Body7.md)| List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
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

Object

### Example response

```
{
  "data" : [ {
    "allotment_charge" : 1,
    "download" : {
      "url" : "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4"
    },
    "price" : {
      "local_amount" : 12.34,
      "local_currency" : "EUR"
    },
    "video_id" : "123456789"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455
}
```

<a name="listVideoCategories"></a>
# VideosApi.listVideoCategories
> `Object VideosApi.listVideoCategories(queryParams)`

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

api.listVideoCategories(queryParams)
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
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

Object

### Example response

```
{
  "data" : [ {
    "id" : "1",
    "name" : "Animals/Wildlife"
  }, {
    "id" : "11",
    "name" : "The Arts"
  } ],
  "page" : 1,
  "per_page" : 2,
  "total_count" : 13
}
```

<a name="renameVideoCollection"></a>
# VideosApi.renameVideoCollection
> `VideosApi.renameVideoCollection(id, body)`

**Rename video collections**

This endpoint sets a new name for a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "17555176"; // String | The ID of the collection to rename

const body = new ShutterstockApiReference.Body10(); // Body10 | The new name for the collection


api.renameVideoCollection(id, body)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to rename 
 body (required) | [Body10](Body10.md)| The new name for the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="searchVideos"></a>
# VideosApi.searchVideos
> `InlineResponse2006 VideosApi.searchVideos(queryParams)`

**Search for videos**

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'added_date': new Date("2020-05-29"), // Date | Show videos added on the specified date
  'added_date_start': new Date("2020-05-29"), // Date | Show videos added on or after the specified date
  'added_date_end': new Date("2020-05-29"), // Date | Show videos added before the specified date
  'aspect_ratio': "4_3", // String | Show videos with the specified aspect ratio
  'category': "category_example", // String | Show videos with the specified Shutterstock-defined category; specify a category name or ID
  'contributor': ["[12345678]"], // [String] | Show videos with the specified artist names or IDs
  'contributor_country': ["US"], // [String] | Show videos from contributors in one or more specified countries
  'duration': 56, // Number | (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds
  'duration_from': 60, // Number | Show videos with the specified duration or longer in seconds
  'duration_to': 180, // Number | Show videos with the specified duration or shorter in seconds
  'fps': 8.14, // Number | (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second
  'fps_from': 24, // Number | Show videos with the specified frames per second or more
  'fps_to': 60, // Number | Show videos with the specified frames per second or fewer
  'keyword_safe_search': true, // Boolean | Hide results with potentially unsafe keywords
  'language': "language_example", // String | Set query and result language (uses Accept-Language header if not set)
  'license': ["[commercial, editorial]"], // [String] | Show only videos with the specified license or licenses
  'model': ["[442583, 434750]"], // [String] | Show videos with each of the specified models
  'orientation': "orientation_example", // String | Search for videos in a specific orientation
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'people_age': "20s", // String | Show videos that feature people of the specified age range
  'people_ethnicity': ["hispanic"], // [String] | Show videos with people of the specified ethnicities
  'people_gender': "female", // String | Show videos with people with the specified gender
  'people_number': 2, // Number | Show videos with the specified number of people
  'people_model_released': true, // Boolean | Show only videos of people with a signed model release
  'query': "dogs running on the beach", // String | One or more search terms separated by spaces; you can use NOT to filter out videos that match a term
  'resolution': "4k", // String | Show videos with the specified resolution
  'safe': true, // Boolean | Enable or disable safe search
  'sort': "popular", // String | Sort by one of these categories
  'view': "minimal" // String | Amount of detail to render in the response
};

api.searchVideos(queryParams)
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
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 license | [String]| Show only videos with the specified license or licenses <br/><br/>Valid values: "commercial", "editorial"
 model | [String]| Show videos with each of the specified models 
 orientation | String| Search for videos in a specific orientation <br/><br/>Valid values: "vertical", "horizontal"
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

[InlineResponse2006](InlineResponse2006.md)

### Example response

```
"{data=[{id=1033184651, aspect=1.778, aspect_ratio=16:9, assets={thumb_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, thumb_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, preview_webm={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm}, preview_mp4={url=https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4}, thumb_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}, preview_jpg={url=https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg}}, contributor={id=4411978}, description=Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness, duration=14.081, has_model_release=true, media_type=video}], page=1, per_page=5, total_count=123, search_id=749090bb-2967-4a20-b22e-c800dc845e10}"
```

