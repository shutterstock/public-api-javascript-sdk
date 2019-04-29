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
[`getVideo`](VideosApi.md#getVideo) | `GET /v2/videos/{id}` | Get details about videos
[`getVideoCategories`](VideosApi.md#getVideoCategories) | `GET /v2/videos/categories` | List video categories
[`getVideoLicenseList`](VideosApi.md#getVideoLicenseList) | `GET /v2/videos/licenses` | List video licenses
[`getVideoList`](VideosApi.md#getVideoList) | `GET /v2/videos` | List videos
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
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const collectionId &#x3D; &quot;17555176&quot;; // Collection ID

// Array of videos to add
const body &#x3D; {
  &quot;items&quot;: [
    {
      &quot;id&quot;: &quot;10120264&quot;,
      &quot;media_type&quot;: &quot;video&quot;
    }
  ]
};

videosApi.addLightboxItems(collectionId, body)
  .catch((error) &#x3D;&gt; {
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

This endpoint creates one or more collections (clipboxes). To add videos to collections, use &#x60;POST /videos/collections/{id}/items&#x60;.

### Example

```javascript
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const body &#x3D; {
  &quot;name&quot;: &quot;New collection name&quot;
};

videosApi.createClipbox(body)
  .catch((error) &#x3D;&gt; {
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

<a name="deleteClipbox"></a>
# VideosApi.deleteClipbox
> `VideosApi.deleteClipbox(id)`

**Delete video collections**

This endpoint deletes a collection.

### Example

```javascript
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const collectionId &#x3D; &quot;17555176&quot;;

videosApi.deleteClipbox(collectionId)
  .catch((error) &#x3D;&gt; {
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
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const collectionId &#x3D; &quot;17555176&quot;;

// Array of videos to remove
const videosToRemove &#x3D; {
  &quot;item_id&quot;: [
    &quot;10120264&quot;
  ]
};

videosApi.deleteClipboxItems(collectionId, videosToRemove)
  .catch((error) &#x3D;&gt; {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the Collection from which items will be deleted 
 item_id | [[String]](String.md)| One or more video IDs to remove from the collection 

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
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const licenseId &#x3D; &quot;i1188641347&quot;;

const body &#x3D; {};

videosApi.downloadVideos(licenseId, body)
  .then((data) &#x3D;&gt; {
    console.log(data);
  })
  .catch((error) &#x3D;&gt; {
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

{
  &quot;url&quot; : &quot;url&quot;
}

<a name="getClipbox"></a>
# VideosApi.getClipbox
> `Collection VideosApi.getClipbox(id)`

**Get the details of video collections**

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /videos/collections/{id}/items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "\"17555176\""; // String | The ID of the collection to return


api.getClipbox(id)
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
 id (required) | String| The ID of the collection to return 

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

const id = "\"17555176\""; // String | The ID of the Collection whose items are to be returned

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getClipboxItems(id, queryParams)
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

const id = "\"2140697\""; // String | The ID of a video for which similar videos should be returned

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getSimilarVideos(id, queryParams)
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
 id (required) | String| The ID of a video for which similar videos should be returned 
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

{
  &quot;per_page&quot; : 9,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;total_count&quot; : 3,
  &quot;page&quot; : 7,
  &quot;message&quot; : &quot;message&quot;
}

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

const id = "\"30867073\""; // String | Video ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getVideo(id, queryParams)
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
 id (required) | String| Video ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Video](Video.md)

### Example response

{
  &quot;has_property_release&quot; : true,
  &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
  &quot;models&quot; : [ {
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
  &quot;added_date&quot; : &quot;2000-01-23&quot;,
  &quot;description&quot; : &quot;description&quot;,
  &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
  &quot;url&quot; : &quot;url&quot;,
  &quot;is_adult&quot; : true,
  &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
  &quot;assets&quot; : {
    &quot;thumb_webm&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;sd&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;file_size&quot; : 6,
      &quot;height&quot; : 5
    },
    &quot;preview_jpg&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;preview_mp4&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;web&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;file_size&quot; : 6,
      &quot;height&quot; : 5
    },
    &quot;4k&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;file_size&quot; : 6,
      &quot;height&quot; : 5
    },
    &quot;thumb_jpgs&quot; : {
      &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
    },
    &quot;preview_webm&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;hd&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;file_size&quot; : 6,
      &quot;height&quot; : 5
    },
    &quot;thumb_jpg&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;thumb_mp4&quot; : {
      &quot;url&quot; : &quot;url&quot;
    }
  },
  &quot;contributor&quot; : {
    &quot;id&quot; : &quot;id&quot;
  },
  &quot;is_editorial&quot; : true,
  &quot;media_type&quot; : &quot;media_type&quot;,
  &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
  &quot;has_model_release&quot; : true,
  &quot;categories&quot; : [ {
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;id&quot; : &quot;id&quot;
}

<a name="getVideoCategories"></a>
# VideosApi.getVideoCategories
> `CategoryDataList VideosApi.getVideoCategories()`

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
api.getVideoCategories()
  .then(({ data }) => {
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

[CategoryDataList](CategoryDataList.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;
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

<a name="getVideoLicenseList"></a>
# VideosApi.getVideoLicenseList
> `DownloadHistoryDataList VideosApi.getVideoLicenseList(queryParams)`

**List video licenses**

This endpoint lists existing licenses. You can filter the results according to the type of license or the video ID.

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
  'sort': "newest" // String | Sort by oldest or newest videos first
};

api.getVideoLicenseList(queryParams)
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
 video_id | String| Show licenses for the specified video ID 
 license | String| Show videos that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60;; prepending a &#x60;-&#x60; sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort by oldest or newest videos first, defaults to newest <br/><br/>Valid values: "newest", "oldest"

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

const id = ["[ \"639703\", \"993721\" ]"]; // [String] | One or more video IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getVideoList(id, queryParams)
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
 id (required) | [[String]](String.md)| One or more video IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[VideoDataList](VideoDataList.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
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

<a name="licenseVideos"></a>
# VideosApi.licenseVideos
> `LicenseVideoResultDataList VideosApi.licenseVideos(body, queryParams)`

**License videos**

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters.

### Example

```javascript
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const body &#x3D; {
  &quot;videos&quot;: [
    {
      &quot;video_id&quot;: &quot;419235589&quot;
    },
    {
      &quot;video_id&quot;: &quot;1079756147&quot;
    }
  ]
};

const queryParams &#x3D; {
  &quot;subscription_id&quot;: SHUTTERSTOCK_SUBSCRIPTION_ID,
  &quot;size&quot;: &quot;web&quot;
};

videosApi.searchVideos(body, queryParams)
  .then(({ data }) &#x3D;&gt; {
    console.log(data);
  })
  .catch((error) &#x3D;&gt; {
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

{
  &quot;per_page&quot; : 1,
  &quot;data&quot; : [ {
    &quot;download&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;price&quot; : {
      &quot;local_amount&quot; : 6.02745618307040320615897144307382404804229736328125,
      &quot;local_currency&quot; : &quot;local_currency&quot;
    },
    &quot;allotment_charge&quot; : 0,
    &quot;error&quot; : &quot;error&quot;,
    &quot;video_id&quot; : &quot;video_id&quot;
  }, {
    &quot;download&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;price&quot; : {
      &quot;local_amount&quot; : 6.02745618307040320615897144307382404804229736328125,
      &quot;local_currency&quot; : &quot;local_currency&quot;
    },
    &quot;allotment_charge&quot; : 0,
    &quot;error&quot; : &quot;error&quot;,
    &quot;video_id&quot; : &quot;video_id&quot;
  } ],
  &quot;total_count&quot; : 5,
  &quot;page&quot; : 6,
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

<a name="renameClipbox"></a>
# VideosApi.renameClipbox
> `VideosApi.renameClipbox(id, body)`

**Rename video collections**

This endpoint sets a new name for a collection.

### Example

```javascript
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const collectionId &#x3D; &quot;186765119&quot;;

const body &#x3D; {
  &quot;name&quot;: &quot;My new collection name&quot;
};

videosApi.renameClipbox(collectionId, body)
  .catch((error) &#x3D;&gt; {
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

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the &#x60;query&#x60; parameter by prefixing the term with NOT.

### Example

```javascript
const sstk &#x3D; require(&quot;shutterstock-api&quot;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi &#x3D; new sstk.VideosApi();

const queryParams &#x3D; {
  &quot;query&quot;: &quot;hot air balloon&quot;,
  &quot;duration_from&quot;: 30,
  &quot;sort&quot;: &quot;popular&quot;
};

videosApi.searchVideos(queryParams)
  .then(({ data }) &#x3D;&gt; {
    console.log(data);
  })
  .catch((error) &#x3D;&gt; {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 added_date | Date| Show videos added on the specified date, in the format YYYY-MM-DD 
 added_date_start | Date| Show videos added on or after the specified date, in the format YYYY-MM-DD 
 added_date_end | Date| Show videos added before the specified date, in the format YYYY-MM-DD 
 aspect_ratio | String| Show videos with the specified aspect ratio <br/><br/>Valid values: "4_3", "16_9", "nonstandard"
 category | String| Show videos with the specified Shutterstock-defined category; specify a category name or ID 
 contributor | [[String]](String.md)| Show videos with the specified artist names or IDs 
 duration | Number| (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration (seconds) 
 duration_from | Number| Show videos with the specified duration or longer (seconds) 
 duration_to | Number| Show videos with the specified duration or shorter (seconds) 
 fps | Number| (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second 
 fps_from | Number| Show videos with the specified frames per second or more 
 fps_to | Number| Show videos with the specified frames per second or fewer 
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh"
 license | [[String]](String.md)| Show only videos with the specified license or licenses <br/><br/>Valid values: "commercial", "editorial"
 model | [[String]](String.md)| Show videos with each of the specified models 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 people_age | String| Show videos that feature people of the specified age range <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | String| Show videos with people of the specified ethnicity <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other"
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

{
  &quot;per_page&quot; : 9,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;aspect_ratio&quot; : &quot;aspect_ratio&quot;,
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;duration&quot; : 2.3021358869347654518833223846741020679473876953125,
    &quot;assets&quot; : {
      &quot;thumb_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;sd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;preview_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;preview_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;web&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;4k&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpgs&quot; : {
        &quot;urls&quot; : [ &quot;urls&quot;, &quot;urls&quot; ]
      },
      &quot;preview_webm&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;hd&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;fps&quot; : 1.46581298050294517310021547018550336360931396484375,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;file_size&quot; : 6,
        &quot;height&quot; : 5
      },
      &quot;thumb_jpg&quot; : {
        &quot;url&quot; : &quot;url&quot;
      },
      &quot;thumb_mp4&quot; : {
        &quot;url&quot; : &quot;url&quot;
      }
    },
    &quot;contributor&quot; : {
      &quot;id&quot; : &quot;id&quot;
    },
    &quot;is_editorial&quot; : true,
    &quot;media_type&quot; : &quot;media_type&quot;,
    &quot;aspect&quot; : 0.80082819046101150206595775671303272247314453125,
    &quot;has_model_release&quot; : true,
    &quot;categories&quot; : [ {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;name&quot; : &quot;name&quot;,
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;total_count&quot; : 3,
  &quot;page&quot; : 7,
  &quot;message&quot; : &quot;message&quot;
}

