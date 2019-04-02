# shutterstock-api.ImagesApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addLightboxItems`](ImagesApi.md#addLightboxItems) | `POST /v2/images/collections/{id}/items` | Add images to collections
[`createLightbox`](ImagesApi.md#createLightbox) | `POST /v2/images/collections` | Create image collections
[`deleteLightbox`](ImagesApi.md#deleteLightbox) | `DELETE /v2/images/collections/{id}` | Delete image collections
[`deleteLightboxItems`](ImagesApi.md#deleteLightboxItems) | `DELETE /v2/images/collections/{id}/items` | Remove images from collections
[`downloadImage`](ImagesApi.md#downloadImage) | `POST /v2/images/licenses/{id}/downloads` | Download images
[`getFeaturedLightbox`](ImagesApi.md#getFeaturedLightbox) | `GET /v2/images/collections/featured/{id}` | Get the details of featured image collections
[`getFeaturedLightboxItems`](ImagesApi.md#getFeaturedLightboxItems) | `GET /v2/images/collections/featured/{id}/items` | Get the contents of featured image collections
[`getFeaturedLightboxList`](ImagesApi.md#getFeaturedLightboxList) | `GET /v2/images/collections/featured` | List featured image collections
[`getImage`](ImagesApi.md#getImage) | `GET /v2/images/{id}` | Get details about images
[`getImageCategories`](ImagesApi.md#getImageCategories) | `GET /v2/images/categories` | List image categories
[`getImageLicenseList`](ImagesApi.md#getImageLicenseList) | `GET /v2/images/licenses` | List image licenses
[`getImageList`](ImagesApi.md#getImageList) | `GET /v2/images` | List images
[`getImageRecommendations`](ImagesApi.md#getImageRecommendations) | `GET /v2/images/recommendations` | List recommended images
[`getLightbox`](ImagesApi.md#getLightbox) | `GET /v2/images/collections/{id}` | Get the details of image collections
[`getLightboxItems`](ImagesApi.md#getLightboxItems) | `GET /v2/images/collections/{id}/items` | Get the contents of image collections
[`getLightboxList`](ImagesApi.md#getLightboxList) | `GET /v2/images/collections` | List image collections
[`getSimilarImages`](ImagesApi.md#getSimilarImages) | `GET /v2/images/{id}/similar` | List similar images
[`licenseImages`](ImagesApi.md#licenseImages) | `POST /v2/images/licenses` | License images
[`renameLightbox`](ImagesApi.md#renameLightbox) | `POST /v2/images/collections/{id}` | Rename image collections
[`searchImages`](ImagesApi.md#searchImages) | `GET /v2/images/search` | Search for images
[`uploadEphemeralImage`](ImagesApi.md#uploadEphemeralImage) | `POST /v2/images` | Upload images


<a name="addLightboxItems"></a>
# ImagesApi.addLightboxItems
> `ImagesApi.addLightboxItems(id, body)`

**Add images to collections**

This endpoint adds one or more images to a collection by image IDs.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi &#x3D; new sstk.ImagesApi();

const collectionId &#x3D; &quot;126351027&quot;; // Collection ID

const body &#x3D; {
  &quot;items&quot;: [
    {
      &quot;id&quot;: &quot;495863218&quot;,
      &quot;media_type&quot;: &quot;image&quot;
    }
  ]
};

imagesApi.addLightboxItems(collectionId, body)
.then(function() {
  console.log(&quot;Success!&quot;);
})
.catch(function(error) {
  console.error(error);
});

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionItemRequest](CollectionItemRequest.md)| Array of image IDs to add to the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="createLightbox"></a>
# ImagesApi.createLightbox
> `ImagesApi.createLightbox(body)`

**Create image collections**

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use &#x60;POST /images/collections/{id}/items&#x60;.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi &#x3D; new sstk.ImagesApi();

const body &#x3D; {
  &quot;name&quot;: &quot;My collection&quot;
};

imagesApi.createLightbox(body)
.then(function() {
  console.log(&quot;Success!&quot;);
})
.catch(function(error) {
  console.error(error);
});

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CollectionCreateRequest](CollectionCreateRequest.md)| The names of the new collections 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

No response body.


<a name="deleteLightbox"></a>
# ImagesApi.deleteLightbox
> `ImagesApi.deleteLightbox(id)`

**Delete image collections**

This endpoint deletes an image collection.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi &#x3D; new sstk.ImagesApi();

const collectionId &#x3D; &quot;136351027&quot;; // Collection ID

imagesApi.deleteLightbox(collectionId)
.then(function() {
  console.log(&quot;Success!&quot;);
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

No response body.


<a name="deleteLightboxItems"></a>
# ImagesApi.deleteLightboxItems
> `ImagesApi.deleteLightboxItems(id, queryParams)`

**Remove images from collections**

This endpoint removes one or more images from a collection.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi &#x3D; new sstk.ImagesApi();

const collectionId &#x3D; &quot;126351027&quot;; // Collection ID

// Array of images to remove
const imagesToRemove &#x3D; {
  item_id: [
    &quot;495863218&quot;
  ]
};

imagesApi.deleteLightboxItems(collectionId, imagesToRemove)
.then(function() {
  console.log(&quot;Success!&quot;);
})
.catch(function(error) {
  console.error(error);
});
```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [[String]](String.md)| One or more image IDs to remove from the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="downloadImage"></a>
# ImagesApi.downloadImage
> `Url ImagesApi.downloadImage(id, body)`

**Download images**

This endpoint redownloads images that you have already received a license for.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api &#x3D; new sstk.ImagesApi();

const licenseId &#x3D; &#39;i1188641347&#39;; // license ID, not image ID

const body &#x3D; {
  &quot;size&quot;: &quot;huge&quot;
};

api.downloadImage(licenseId, body)
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
 body (required) | [RedownloadImage](RedownloadImage.md)| Information about the images to redownload 

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

<a name="getFeaturedLightbox"></a>
# ImagesApi.getFeaturedLightbox
> `FeaturedCollection ImagesApi.getFeaturedLightbox(id, queryParams)`

**Get the details of featured image collections**

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use &#x60;GET /images/collections/featured/{id}/items&#x60;.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"136351027\""; // String | Collection ID

const queryParams = { 
  'embed': "embed_example", // String | Which sharing information to include in the response, such as a URL to the collection
  'asset_hint': "1x" // String | Cover image size, defaults to 1x
};

api.getFeaturedLightbox(id, queryParams)
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
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 asset_hint | String| Cover image size, defaults to 1x, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[FeaturedCollection](FeaturedCollection.md)

### Example response

{
  &quot;created_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;share_url&quot; : &quot;share_url&quot;,
  &quot;hero_item&quot; : {
    &quot;url&quot; : &quot;url&quot;
  },
  &quot;items_updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
  &quot;name&quot; : &quot;name&quot;,
  &quot;id&quot; : &quot;id&quot;,
  &quot;cover_item&quot; : {
    &quot;url&quot; : &quot;url&quot;
  },
  &quot;total_item_count&quot; : 0
}

<a name="getFeaturedLightboxItems"></a>
# ImagesApi.getFeaturedLightboxItems
> `CollectionItemDataList ImagesApi.getFeaturedLightboxItems(id, queryParams)`

**Get the contents of featured image collections**

This endpoint lists the IDs of images in a featured collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"136351027\""; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getFeaturedLightboxItems(id, queryParams)
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
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getFeaturedLightboxList"></a>
# ImagesApi.getFeaturedLightboxList
> `FeaturedCollectionDataList ImagesApi.getFeaturedLightboxList(queryParams)`

**List featured image collections**

This endpoint lists featured collections of specific types and a name and cover image for each collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': "\"share_url\"", // String | Which sharing information to include in the response, such as a URL to the collection
  'type': ["\"photo\""], // [String] | The types of collections to return
  'asset_hint': "1x" // String | Cover image size, defaults to 1x
};

api.getFeaturedLightboxList(queryParams)
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
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 type | [[String]](String.md)| The types of collections to return <br/><br/>Valid values: "photo", "editorial", "vector"
 asset_hint | String| Cover image size, defaults to 1x, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[FeaturedCollectionDataList](FeaturedCollectionDataList.md)

### Example response

{
  &quot;per_page&quot; : 1,
  &quot;data&quot; : [ {
    &quot;created_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;share_url&quot; : &quot;share_url&quot;,
    &quot;hero_item&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;items_updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;,
    &quot;cover_item&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;total_item_count&quot; : 0
  }, {
    &quot;created_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;share_url&quot; : &quot;share_url&quot;,
    &quot;hero_item&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;items_updated_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;id&quot; : &quot;id&quot;,
    &quot;cover_item&quot; : {
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;total_item_count&quot; : 0
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

<a name="getImage"></a>
# ImagesApi.getImage
> `Image ImagesApi.getImage(id, queryParams)`

**Get details about images**

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"465011609\""; // String | Image ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getImage(id, queryParams)
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
 id (required) | String| Image ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Image](Image.md)

### Example response

{
  &quot;has_property_release&quot; : true,
  &quot;model_releases&quot; : [ {
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;models&quot; : [ {
    &quot;id&quot; : &quot;id&quot;
  }, {
    &quot;id&quot; : &quot;id&quot;
  } ],
  &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
  &quot;added_date&quot; : &quot;2000-01-23&quot;,
  &quot;description&quot; : &quot;description&quot;,
  &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
  &quot;is_illustration&quot; : true,
  &quot;url&quot; : &quot;url&quot;,
  &quot;is_adult&quot; : true,
  &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
  &quot;assets&quot; : {
    &quot;preview&quot; : {
      &quot;width&quot; : 7,
      &quot;url&quot; : &quot;url&quot;,
      &quot;height&quot; : 2
    },
    &quot;supersize_jpg&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;preview_1000&quot; : {
      &quot;width&quot; : 7,
      &quot;url&quot; : &quot;url&quot;,
      &quot;height&quot; : 2
    },
    &quot;small_thumb&quot; : {
      &quot;width&quot; : 7,
      &quot;url&quot; : &quot;url&quot;,
      &quot;height&quot; : 2
    },
    &quot;vector_eps&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;preview_1500&quot; : {
      &quot;width&quot; : 7,
      &quot;url&quot; : &quot;url&quot;,
      &quot;height&quot; : 2
    },
    &quot;large_thumb&quot; : {
      &quot;width&quot; : 7,
      &quot;url&quot; : &quot;url&quot;,
      &quot;height&quot; : 2
    },
    &quot;huge_tiff&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;medium_jpg&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;small_jpg&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;supersize_tiff&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
    },
    &quot;huge_jpg&quot; : {
      &quot;is_licensable&quot; : true,
      &quot;format&quot; : &quot;format&quot;,
      &quot;width&quot; : 5,
      &quot;display_name&quot; : &quot;display_name&quot;,
      &quot;dpi&quot; : 6,
      &quot;file_size&quot; : 1,
      &quot;height&quot; : 5
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
  &quot;id&quot; : &quot;id&quot;,
  &quot;image_type&quot; : &quot;image_type&quot;
}

<a name="getImageCategories"></a>
# ImagesApi.getImageCategories
> `CategoryDataList ImagesApi.getImageCategories()`

**List image categories**

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();
api.getImageCategories()
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

<a name="getImageLicenseList"></a>
# ImagesApi.getImageLicenseList
> `DownloadHistoryDataList ImagesApi.getImageLicenseList(queryParams)`

**List image licenses**

This endpoint lists existing licenses. You can filter the results according to the type of license or the image ID.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'image_id': "image_id_example", // String | Show licenses for the specified image ID
  'license': "license_example", // String | Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page, defaults to 20
  'sort': "newest" // String | Sort order
};

api.getImageLicenseList(queryParams)
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
 image_id | String| Show licenses for the specified image ID 
 license | String| Show images that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60;; prepending a &#x60;-&#x60; sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"

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

<a name="getImageList"></a>
# ImagesApi.getImageList
> `ImageDataList ImagesApi.getImageList(id, queryParams)`

**List images**

This endpoint lists information about one or more images, including the available sizes. Only accounts with subscriptions can use it.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = ["[ \"1110335168\", \"465011609\" ]"]; // [String] | One or more image IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getImageList(id, queryParams)
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
 id (required) | [[String]](String.md)| One or more image IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ImageDataList](ImageDataList.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
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

<a name="getImageRecommendations"></a>
# ImagesApi.getImageRecommendations
> `RecommendationDataList ImagesApi.getImageRecommendations(id, queryParams)`

**List recommended images**

This endpoint returns images that customers put in the same collection as the specified image IDs.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = ["[ 465011609 ]"]; // [String] | Image IDs

const queryParams = { 
  'max_items': 20, // Number | Maximum number of results returned in the response
  'safe': true // Boolean | Restrict results to safe images
};

api.getImageRecommendations(id, queryParams)
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
 id (required) | [[String]](String.md)| Image IDs 
 max_items | Number| Maximum number of results returned in the response, defaults to 20 
 safe | Boolean| Restrict results to safe images, defaults to true 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[RecommendationDataList](RecommendationDataList.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;id&quot; : &quot;id&quot;
  }, {
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

<a name="getLightbox"></a>
# ImagesApi.getLightbox
> `Collection ImagesApi.getLightbox(id, queryParams)`

**Get the details of image collections**

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use &#x60;GET /images/collections/{id}/items&#x60;.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"126351027\""; // String | Collection ID

const queryParams = { 
  'embed': ["embed_example"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'share_code': "share_code_example" // String | Code to retrieve a shared collection
};

api.getLightbox(id, queryParams)
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
 embed | [[String]](String.md)| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 share_code | String| Code to retrieve a shared collection 

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

<a name="getLightboxItems"></a>
# ImagesApi.getLightboxItems
> `CollectionItemDataList ImagesApi.getLightboxItems(id, queryParams)`

**Get the contents of image collections**

This endpoint lists the IDs of images in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"126351027\""; // String | Collection ID

const queryParams = { 
  'share_code': "share_code_example", // String | Code to retrieve the contents of a shared collection
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getLightboxItems(id, queryParams)
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
 share_code | String| Code to retrieve the contents of a shared collection 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

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

<a name="getLightboxList"></a>
# ImagesApi.getLightboxList
> `CollectionDataList ImagesApi.getLightboxList(queryParams)`

**List image collections**

This endpoint lists your collections of images and their basic attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': ["\"share_code\""], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getLightboxList(queryParams)
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
 embed | [[String]](String.md)| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

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

<a name="getSimilarImages"></a>
# ImagesApi.getSimilarImages
> `ImageSearchResults ImagesApi.getSimilarImages(id, queryParams)`

**List similar images**

This endpoint returns images that are visually similar to an image that you specify.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"465011609\""; // String | Image ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page, defaults to 20
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getSimilarImages(id, queryParams)
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
 id (required) | String| Image ID 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ImageSearchResults](ImageSearchResults.md)

### Example response

{
  &quot;spellcheck_info&quot; : &quot;{}&quot;,
  &quot;per_page&quot; : 3,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
  } ],
  &quot;total_count&quot; : 2,
  &quot;page&quot; : 9,
  &quot;message&quot; : &quot;message&quot;,
  &quot;search_id&quot; : &quot;search_id&quot;
}

<a name="licenseImages"></a>
# ImagesApi.licenseImages
> `LicenseImageResultDataList ImagesApi.licenseImages(body, queryParams)`

**License images**

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api &#x3D; new sstk.ImagesApi();

const body &#x3D; {
  images: [
    {
      image_id: &quot;419235589&quot;,
      format: &quot;jpg&quot;
    },
    {
      image_id: &quot;1079756147&quot;,
      format: &quot;jpg&quot;,
    }
  ]
};

// Put your subscription ID in the SHUTTERSTOCK_SUBSCRIPTION_ID environment variable
const queryParams &#x3D; {
  subscription_id: process.env.SHUTTERSTOCK_SUBSCRIPTION_ID,
  format: &#39;jpg&#39;,
  size: &#39;huge&#39;
};

api.licenseImages(body, queryParams)
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
 body (required) | [LicenseImageRequest](LicenseImageRequest.md)| List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
 subscription_id | String| Subscription ID to use to license the image 
 format | String| Image format, defaults to jpg, defaults to jpg <br/><br/>Valid values: "eps", "jpg"
 size | String| Image size, defaults to huge <br/><br/>Valid values: "small", "medium", "huge", "vector"
 search_id | String| Search ID that was provided in the results of an image search 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create
Required scopes:
  - purchases.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[LicenseImageResultDataList](LicenseImageResultDataList.md)

### Example response

{
  &quot;per_page&quot; : 5,
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
    &quot;image_id&quot; : &quot;image_id&quot;
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
    &quot;image_id&quot; : &quot;image_id&quot;
  } ],
  &quot;total_count&quot; : 5,
  &quot;page&quot; : 1,
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

<a name="renameLightbox"></a>
# ImagesApi.renameLightbox
> `ImagesApi.renameLightbox(id, body)`

**Rename image collections**

This endpoint sets a new name for an image collection.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi &#x3D; new sstk.ImagesApi();

const collectionId &#x3D; &quot;126351027&quot;; // Collection ID

const body &#x3D; {
  &quot;name&quot;: &quot;My new collection name&quot;
};

imagesApi.renameLightbox(collectionId, body)
.then(function() {
  console.log(&quot;Success!&quot;);
})
.catch(function(error) {
  console.error(error);
});

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest.md)| The new name for the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="searchImages"></a>
# ImagesApi.searchImages
> `ImageSearchResults ImagesApi.searchImages(queryParams)`

**Search for images**

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the &#x60;query&#x60; parameter by prefixing the term with NOT.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api &#x3D; new sstk.ImagesApi();

const queryParams &#x3D; {
  query: &#39;New York&#39;,
  sort: &#39;popular&#39;,
  orientation: &#39;horizontal&#39;
};

api.searchImages(queryParams)
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
 added_date | Date| Show images added on the specified date, in the format YYYY-MM-DD 
 added_date_start | Date| Show images added on or after the specified date, in the format YYYY-MM-DD 
 added_date_end | Date| Show images added before the specified date, in the format YYYY-MM-DD 
 category | String| Show images with the specified Shutterstock-defined category; specify a category name or ID 
 color | String| Specify a hexadecimal color in the format &#39;#4F21EA&#39;; the API groups it into one of 15 color categories and returns images that primarily use that color category 
 contributor | [[String]](String.md)| Show images with the specified contributor names or IDs, allows multiple 
 height | Number| (Deprecated; use height_from and height_to instead) Show images with the specified height 
 height_from | Number| Show images with the specified height or larger, in pixels 
 height_to | Number| Show images with the specified height or smaller, in pixels 
 image_type | [[String]](String.md)| Show images of the specified type <br/><br/>Valid values: "photo", "illustration", "vector"
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh"
 license | [[String]](String.md)| Show only images with the specified license <br/><br/>Valid values: "commercial", "editorial", "enhanced", "sensitive", "NOT enhanced", "NOT sensitive"
 model | [[String]](String.md)| Show image results with the specified model IDs 
 orientation | String| Show image results with horizontal or vertical orientation <br/><br/>Valid values: "horizontal", "vertical"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 people_model_released | Boolean| Show images of people with a signed model release 
 people_age | String| Show images that feature people of the specified age category <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | String| Show images with people of the specified ethnicity <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other"
 people_gender | String| Show images with people of the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show images with the specified number of people 
 query | String| One or more search terms separated by spaces; you can use NOT to filter out images that match a term 
 safe | Boolean| Enable or disable safe search, defaults to true 
 sort | String| Sort by, defaults to popular <br/><br/>Valid values: "newest", "popular", "relevance", "random"
 spellcheck_query | Boolean| Spellcheck the search query and return results on suggested spellings, defaults to true 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 width | Number| (Deprecated; use width_from and width_to instead) Show images with the specified width 
 width_from | Number| Show images with the specified width or larger, in pixels 
 width_to | Number| Show images with the specified width or smaller, in pixels 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ImageSearchResults](ImageSearchResults.md)

### Example response

{
  &quot;spellcheck_info&quot; : &quot;{}&quot;,
  &quot;per_page&quot; : 3,
  &quot;data&quot; : [ {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
  }, {
    &quot;has_property_release&quot; : true,
    &quot;model_releases&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;models&quot; : [ {
      &quot;id&quot; : &quot;id&quot;
    }, {
      &quot;id&quot; : &quot;id&quot;
    } ],
    &quot;keywords&quot; : [ &quot;keywords&quot;, &quot;keywords&quot; ],
    &quot;added_date&quot; : &quot;2000-01-23&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;affiliate_url&quot; : &quot;http://example.com/aeiou&quot;,
    &quot;is_illustration&quot; : true,
    &quot;url&quot; : &quot;url&quot;,
    &quot;is_adult&quot; : true,
    &quot;releases&quot; : [ &quot;releases&quot;, &quot;releases&quot; ],
    &quot;assets&quot; : {
      &quot;preview&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;supersize_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1000&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;small_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;vector_eps&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;preview_1500&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;large_thumb&quot; : {
        &quot;width&quot; : 7,
        &quot;url&quot; : &quot;url&quot;,
        &quot;height&quot; : 2
      },
      &quot;huge_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;medium_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;small_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;supersize_tiff&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
      },
      &quot;huge_jpg&quot; : {
        &quot;is_licensable&quot; : true,
        &quot;format&quot; : &quot;format&quot;,
        &quot;width&quot; : 5,
        &quot;display_name&quot; : &quot;display_name&quot;,
        &quot;dpi&quot; : 6,
        &quot;file_size&quot; : 1,
        &quot;height&quot; : 5
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
    &quot;id&quot; : &quot;id&quot;,
    &quot;image_type&quot; : &quot;image_type&quot;
  } ],
  &quot;total_count&quot; : 2,
  &quot;page&quot; : 9,
  &quot;message&quot; : &quot;message&quot;,
  &quot;search_id&quot; : &quot;search_id&quot;
}

<a name="uploadEphemeralImage"></a>
# ImagesApi.uploadEphemeralImage
> `ImageCreateResponse ImagesApi.uploadEphemeralImage(body)`

**Upload images**

This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format.

### Example

```javascript
const sstk &#x3D; require(&#39;shutterstock-api&#39;);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api &#x3D; new sstk.ImagesApi();

const imageFile &#x3D; fs.readFileSync(&#39;./myImage.jpg&#39;);
const base64File &#x3D; Buffer.from(imageFile).toString(&#39;base64&#39;);

const body &#x3D; new sstk.ImageCreateRequest(base64File);

const queryParams &#x3D; {
  page: 1,
  per_page: 20,
  view: &#39;minimal&#39;
};

api.uploadEphemeralImage(body)
.then(function(data) {
  console.log(data.id);
  api.getSimilarImages(data.id, queryParams)
  .then(function(similarImageData) {
    console.log(similarImageData)
  })
})
.catch(function(error) {
  console.error(error);
});

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [ImageCreateRequest](ImageCreateRequest.md)| The image data in JPEG or PNG format 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[ImageCreateResponse](ImageCreateResponse.md)

### Example response

{
  &quot;id&quot; : &quot;id&quot;
}

