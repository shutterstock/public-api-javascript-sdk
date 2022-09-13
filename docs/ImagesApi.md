# shutterstock-api.ImagesApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addImageCollectionItems`](ImagesApi.md#addImageCollectionItems) | `POST /v2/images/collections/{id}/items` | Add images to collections
[`bulkSearchImages`](ImagesApi.md#bulkSearchImages) | `POST /v2/bulk_search/images` | Run multiple image searches
[`createImageCollection`](ImagesApi.md#createImageCollection) | `POST /v2/images/collections` | Create image collections
[`deleteImageCollection`](ImagesApi.md#deleteImageCollection) | `DELETE /v2/images/collections/{id}` | Delete image collections
[`deleteImageCollectionItems`](ImagesApi.md#deleteImageCollectionItems) | `DELETE /v2/images/collections/{id}/items` | Remove images from collections
[`downloadImage`](ImagesApi.md#downloadImage) | `POST /v2/images/licenses/{id}/downloads` | Download images
[`getFeaturedImageCollection`](ImagesApi.md#getFeaturedImageCollection) | `GET /v2/images/collections/featured/{id}` | Get the details of featured image collections
[`getFeaturedImageCollectionItems`](ImagesApi.md#getFeaturedImageCollectionItems) | `GET /v2/images/collections/featured/{id}/items` | Get the contents of featured image collections
[`getFeaturedImageCollectionList`](ImagesApi.md#getFeaturedImageCollectionList) | `GET /v2/images/collections/featured` | List featured image collections
[`getImage`](ImagesApi.md#getImage) | `GET /v2/images/{id}` | Get details about images
[`getImageCollection`](ImagesApi.md#getImageCollection) | `GET /v2/images/collections/{id}` | Get the details of image collections
[`getImageCollectionItems`](ImagesApi.md#getImageCollectionItems) | `GET /v2/images/collections/{id}/items` | Get the contents of image collections
[`getImageCollectionList`](ImagesApi.md#getImageCollectionList) | `GET /v2/images/collections` | List image collections
[`getImageKeywordSuggestions`](ImagesApi.md#getImageKeywordSuggestions) | `POST /v2/images/search/suggestions` | Get keywords from text
[`getImageLicenseList`](ImagesApi.md#getImageLicenseList) | `GET /v2/images/licenses` | List image licenses
[`getImageList`](ImagesApi.md#getImageList) | `GET /v2/images` | List images
[`getImageRecommendations`](ImagesApi.md#getImageRecommendations) | `GET /v2/images/recommendations` | List recommended images
[`getImageSuggestions`](ImagesApi.md#getImageSuggestions) | `GET /v2/images/search/suggestions` | Get suggestions for a search term
[`getUpdatedImages`](ImagesApi.md#getUpdatedImages) | `GET /v2/images/updated` | List updated images
[`licenseImages`](ImagesApi.md#licenseImages) | `POST /v2/images/licenses` | License images
[`listImageCategories`](ImagesApi.md#listImageCategories) | `GET /v2/images/categories` | List image categories
[`listSimilarImages`](ImagesApi.md#listSimilarImages) | `GET /v2/images/{id}/similar` | List similar images
[`renameImageCollection`](ImagesApi.md#renameImageCollection) | `POST /v2/images/collections/{id}` | Rename image collections
[`searchImages`](ImagesApi.md#searchImages) | `GET /v2/images/search` | Search for images


<a name="addImageCollectionItems"></a>
# ImagesApi.addImageCollectionItems
> `ImagesApi.addImageCollectionItems(id, body)`

**Add images to collections**

This endpoint adds one or more images to a collection by image IDs.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "126351027"; // String | Collection ID

const body = new ShutterstockApiReference.CollectionItemRequest(); // CollectionItemRequest | Array of image IDs to add to the collection


api.addImageCollectionItems(id, body)
  .catch((error) => {
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


<a name="bulkSearchImages"></a>
# ImagesApi.bulkSearchImages
> `BulkImageSearchResults ImagesApi.bulkSearchImages(body, queryParams)`

**Run multiple image searches**

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const body = new ShutterstockApiReference.BulkImageSearchRequest(); // BulkImageSearchRequest | List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters

const queryParams = { 
  'added_date': new Date("2021-03-29"), // Date | Show images added on the specified date
  'added_date_start': new Date("2021-03-29"), // Date | Show images added on or after the specified date
  'aspect_ratio_min': 1.7778, // Number | Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'aspect_ratio_max': 1.7778, // Number | Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'aspect_ratio': 1.7778, // Number | Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'added_date_end': new Date("2021-03-29"), // Date | Show images added before the specified date
  'category': "category_example", // String | Show images with the specified Shutterstock-defined category; specify a category name or ID
  'color': "4F21EA", // String | Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
  'contributor': ["[123456]"], // [String] | Show images with the specified contributor names or IDs, allows multiple
  'contributor_country': "US", // Object | Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
  'fields': "fields_example", // String | Fields to display in the response; see the documentation for the fields parameter in the overview section
  'height': 56, // Number | (Deprecated; use height_from and height_to instead) Show images with the specified height
  'height_from': 1080, // Number | Show images with the specified height or larger, in pixels
  'height_to': 1080, // Number | Show images with the specified height or smaller, in pixels
  'image_type': ["photo"], // [String] | Show images of the specified type
  'keyword_safe_search': true, // Boolean | Hide results with potentially unsafe keywords
  'language': "fr", // String | Set query and result language (uses Accept-Language header if not set)
  'license': ["license_example"], // [String] | Show only images with the specified license
  'model': ["[12345, 67890]"], // [String] | Show image results with the specified model IDs
  'orientation': "vertical", // String | Show image results with horizontal or vertical orientation
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'people_model_released': true, // Boolean | Show images of people with a signed model release
  'people_age': "20s", // String | Show images that feature people of the specified age category
  'people_ethnicity': ["hispanic"], // [String] | Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
  'people_gender': "both", // String | Show images with people of the specified gender
  'people_number': 2, // Number | Show images with the specified number of people
  'region': "US", // Object | Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
  'safe': true, // Boolean | Enable or disable safe search
  'sort': "popular", // String | Sort by
  'spellcheck_query': true, // Boolean | Spellcheck the search query and return results on suggested spellings
  'view': "minimal", // String | Amount of detail to render in the response
  'width': 56, // Number | (Deprecated; use width_from and width_to instead) Show images with the specified width
  'width_from': 1920, // Number | Show images with the specified width or larger, in pixels
  'width_to': 1920 // Number | Show images with the specified width or smaller, in pixels
};

api.bulkSearchImages(body, queryParams)
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
 body (required) | [BulkImageSearchRequest](BulkImageSearchRequest.md)| List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters 
 added_date | Date| Show images added on the specified date 
 added_date_start | Date| Show images added on or after the specified date 
 aspect_ratio_min | Number| Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 aspect_ratio_max | Number| Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 aspect_ratio | Number| Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 added_date_end | Date| Show images added before the specified date 
 category | String| Show images with the specified Shutterstock-defined category; specify a category name or ID 
 color | String| Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors 
 contributor | [String]| Show images with the specified contributor names or IDs, allows multiple 
 contributor_country | [Object](.md)| Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search 
 fields | String| Fields to display in the response; see the documentation for the fields parameter in the overview section 
 height | Number| (Deprecated; use height_from and height_to instead) Show images with the specified height 
 height_from | Number| Show images with the specified height or larger, in pixels 
 height_to | Number| Show images with the specified height or smaller, in pixels 
 image_type | [String]| Show images of the specified type <br/><br/>Valid values: "photo", "illustration", "vector"
 keyword_safe_search | Boolean| Hide results with potentially unsafe keywords, defaults to true 
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 license | [String]| Show only images with the specified license <br/><br/>Valid values: "commercial", "editorial", "enhanced"
 model | [String]| Show image results with the specified model IDs 
 orientation | String| Show image results with horizontal or vertical orientation <br/><br/>Valid values: "horizontal", "vertical"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 people_model_released | Boolean| Show images of people with a signed model release 
 people_age | String| Show images that feature people of the specified age category <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | [String]| Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other", "NOT african", "NOT african_american", "NOT black", "NOT brazilian", "NOT chinese", "NOT caucasian", "NOT east_asian", "NOT hispanic", "NOT japanese", "NOT middle_eastern", "NOT native_american", "NOT pacific_islander", "NOT south_asian", "NOT southeast_asian", "NOT other"
 people_gender | String| Show images with people of the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show images with the specified number of people 
 region | [Object](.md)| Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country 
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


- Content-Type: application/json
- Accept: application/json

### Return type

[BulkImageSearchResults](BulkImageSearchResults.md)

### Example response

```
{
  "results" : [ {
    "data" : [ {
      "id" : "1572478477",
      "aspect" : 1.5,
      "assets" : {
        "preview" : {
          "height" : 300,
          "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width" : 450
        },
        "small_thumb" : {
          "height" : 67,
          "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width" : 100
        },
        "large_thumb" : {
          "height" : 100,
          "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width" : 150
        },
        "huge_thumb" : {
          "height" : 260,
          "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
          "width" : 390
        },
        "preview_1000" : {
          "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
          "width" : 1000,
          "height" : 667
        },
        "preview_1500" : {
          "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width" : 1500,
          "height" : 1000
        }
      },
      "contributor" : {
        "id" : "250738318"
      },
      "description" : "cropped image of woman gardening",
      "image_type" : "photo",
      "has_model_release" : true,
      "media_type" : "image"
    } ],
    "page" : 1,
    "per_page" : 5,
    "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10",
    "spellcheck_info" : { },
    "total_count" : 45
  }, {
    "data" : [ ],
    "page" : 1,
    "per_page" : 5,
    "search_id" : "749090bb-2967-4a20-b22e-c800dc845e11",
    "spellcheck_info" : { },
    "total_count" : 0
  } ]
}
```

<a name="createImageCollection"></a>
# ImagesApi.createImageCollection
> `CollectionCreateResponse ImagesApi.createImageCollection(body)`

**Create image collections**

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const body = new ShutterstockApiReference.CollectionCreateRequest(); // CollectionCreateRequest | The names of the new collections


api.createImageCollection(body)
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
 body (required) | [CollectionCreateRequest](CollectionCreateRequest.md)| The names of the new collections 

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

<a name="deleteImageCollection"></a>
# ImagesApi.deleteImageCollection
> `ImagesApi.deleteImageCollection(id)`

**Delete image collections**

This endpoint deletes an image collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "136351027"; // String | Collection ID


api.deleteImageCollection(id)
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


<a name="deleteImageCollectionItems"></a>
# ImagesApi.deleteImageCollectionItems
> `ImagesApi.deleteImageCollectionItems(id, queryParams)`

**Remove images from collections**

This endpoint removes one or more images from a collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "126351027"; // String | Collection ID

const queryParams = { 
  'item_id': ["item_id_example"] // [String] | One or more image IDs to remove from the collection
};

api.deleteImageCollectionItems(id, queryParams)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [String]| One or more image IDs to remove from the collection 

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

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "e123"; // String | License ID

const body = new ShutterstockApiReference.RedownloadImage(); // RedownloadImage | Information about the images to redownload


api.downloadImage(id, body)
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

```
{
  "url" : "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
}
```

<a name="getFeaturedImageCollection"></a>
# ImagesApi.getFeaturedImageCollection
> `FeaturedCollection ImagesApi.getFeaturedImageCollection(id, queryParams)`

**Get the details of featured image collections**

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "136351027"; // String | Collection ID

const queryParams = { 
  'embed': "embed_example", // String | Which sharing information to include in the response, such as a URL to the collection
  'asset_hint': "1x" // String | Cover image size
};

api.getFeaturedImageCollection(id, queryParams)
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
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 asset_hint | String| Cover image size, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[FeaturedCollection](FeaturedCollection.md)

### Example response

```
{
  "total_item_count" : 82,
  "items_updated_time" : "2021-07-08T12:33:37.000Z",
  "name" : "Exercise & Fitness",
  "id" : "19853",
  "created_time" : "2021-07-07T13:10:24.000Z",
  "updated_time" : "2021-07-07T13:10:24.000Z",
  "cover_item" : {
    "url" : "https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg"
  }
}
```

<a name="getFeaturedImageCollectionItems"></a>
# ImagesApi.getFeaturedImageCollectionItems
> `CollectionItemDataList ImagesApi.getFeaturedImageCollectionItems(id, queryParams)`

**Get the contents of featured image collections**

This endpoint lists the IDs of images in a featured collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "136351027"; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page
};

api.getFeaturedImageCollectionItems(id, queryParams)
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

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getFeaturedImageCollectionList"></a>
# ImagesApi.getFeaturedImageCollectionList
> `FeaturedCollectionDataList ImagesApi.getFeaturedImageCollectionList(queryParams)`

**List featured image collections**

This endpoint lists featured collections of specific types and a name and cover image for each collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': "share_url", // String | Which sharing information to include in the response, such as a URL to the collection
  'type': ["[photo]"], // [String] | The types of collections to return
  'asset_hint': "1x" // String | Cover image size
};

api.getFeaturedImageCollectionList(queryParams)
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
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 type | [String]| The types of collections to return <br/><br/>Valid values: "photo", "editorial", "vector"
 asset_hint | String| Cover image size, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[FeaturedCollectionDataList](FeaturedCollectionDataList.md)

### Example response

```
{
  "data" : [ {
    "total_item_count" : 82,
    "items_updated_time" : "2021-07-08T12:33:37.000Z",
    "name" : "Exercise & Fitness",
    "id" : "19853",
    "created_time" : "2021-07-07T13:10:24.000Z",
    "updated_time" : "2021-07-07T13:10:24.000Z",
    "cover_item" : {
      "url" : "https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg"
    }
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455
}
```

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

const id = "465011609"; // String | Image ID

const queryParams = { 
  'language': "es", // String | Language for the keywords and categories in the response
  'view': "full" // String | Amount of detail to render in the response
};

api.getImage(id, queryParams)
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
 id (required) | String| Image ID 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[Image](Image.md)

### Example response

```
{
  "id" : "1572478477",
  "aspect" : 1.5,
  "assets" : {
    "preview" : {
      "height" : 300,
      "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width" : 450
    },
    "small_thumb" : {
      "height" : 67,
      "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width" : 100
    },
    "large_thumb" : {
      "height" : 100,
      "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width" : 150
    },
    "huge_thumb" : {
      "height" : 260,
      "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
      "width" : 390
    },
    "preview_1000" : {
      "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
      "width" : 1000,
      "height" : 667
    },
    "preview_1500" : {
      "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width" : 1500,
      "height" : 1000
    }
  },
  "contributor" : {
    "id" : "250738318"
  },
  "description" : "cropped image of woman gardening",
  "image_type" : "photo",
  "has_model_release" : true,
  "media_type" : "image"
}
```

<a name="getImageCollection"></a>
# ImagesApi.getImageCollection
> `Collection ImagesApi.getImageCollection(id, queryParams)`

**Get the details of image collections**

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "126351027"; // String | Collection ID

const queryParams = { 
  'embed': ["embed_example"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'share_code': "share_code_example" // String | Code to retrieve a shared collection
};

api.getImageCollection(id, queryParams)
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

<a name="getImageCollectionItems"></a>
# ImagesApi.getImageCollectionItems
> `CollectionItemDataList ImagesApi.getImageCollectionItems(id, queryParams)`

**Get the contents of image collections**

This endpoint lists the IDs of images in a collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "126351027"; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'share_code': "share_code_example", // String | Code to retrieve the contents of a shared collection
  'sort': "oldest" // String | Sort order
};

api.getImageCollectionItems(id, queryParams)
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

<a name="getImageCollectionList"></a>
# ImagesApi.getImageCollectionList
> `CollectionDataList ImagesApi.getImageCollectionList(queryParams)`

**List image collections**

This endpoint lists your collections of images and their basic attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': ["share_code"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page
};

api.getImageCollectionList(queryParams)
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
 embed | [String]| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
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

<a name="getImageKeywordSuggestions"></a>
# ImagesApi.getImageKeywordSuggestions
> `SearchEntitiesResponse ImagesApi.getImageKeywordSuggestions(body)`

**Get keywords from text**

This endpoint returns up to 10 important keywords from a block of plain text.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const body = new ShutterstockApiReference.SearchEntitiesRequest(); // SearchEntitiesRequest | Plain text to extract keywords from


api.getImageKeywordSuggestions(body)
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
 body (required) | [SearchEntitiesRequest](SearchEntitiesRequest.md)| Plain text to extract keywords from 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[SearchEntitiesResponse](SearchEntitiesResponse.md)

### Example response

```
{
  "keywords" : [ "planting", "flowers", "springtime", "beautiful" ]
}
```

<a name="getImageLicenseList"></a>
# ImagesApi.getImageLicenseList
> `DownloadHistoryDataList ImagesApi.getImageLicenseList(queryParams)`

**List image licenses**

This endpoint lists existing licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'image_id': "12345678", // String | Show licenses for the specified image ID
  'license': "standard", // String | Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort order
  'username': "aUniqueUsername", // String | Filter licenses by username of licensee
  'start_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created before the specified date
  'download_availability': "all", // String | Filter licenses by download availability
  'team_history': false // Boolean | Set to true to see license history for all members of your team.
};

api.getImageLicenseList(queryParams)
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
 image_id | String| Show licenses for the specified image ID 
 license | String| Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"
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

<a name="getImageList"></a>
# ImagesApi.getImageList
> `ImageDataList ImagesApi.getImageList(id, queryParams)`

**List images**

This endpoint lists information about one or more images, including the available sizes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = ["[1110335168, 465011609]"]; // [String] | One or more image IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getImageList(id, queryParams)
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
 id (required) | [String]| One or more image IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ImageDataList](ImageDataList.md)

### Example response

```
{
  "data" : [ {
    "id" : "1572478477",
    "aspect" : 1.5,
    "assets" : {
      "preview" : {
        "height" : 300,
        "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 450
      },
      "small_thumb" : {
        "height" : 67,
        "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 100
      },
      "large_thumb" : {
        "height" : 100,
        "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 150
      },
      "huge_thumb" : {
        "height" : 260,
        "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
        "width" : 390
      },
      "preview_1000" : {
        "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
        "width" : 1000,
        "height" : 667
      },
      "preview_1500" : {
        "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 1500,
        "height" : 1000
      }
    },
    "contributor" : {
      "id" : "250738318"
    },
    "description" : "cropped image of woman gardening",
    "image_type" : "photo",
    "has_model_release" : true,
    "media_type" : "image"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455
}
```

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

const id = ["[465011609]"]; // [String] | Image IDs

const queryParams = { 
  'max_items': 20, // Number | Maximum number of results returned in the response
  'safe': true // Boolean | Restrict results to safe images
};

api.getImageRecommendations(id, queryParams)
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
 id (required) | [String]| Image IDs 
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

```
{
  "data" : [ {
    "id" : "123456789"
  }, {
    "id" : "99379946"
  }, {
    "id" : "133918412"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 12
}
```

<a name="getImageSuggestions"></a>
# ImagesApi.getImageSuggestions
> `Suggestions ImagesApi.getImageSuggestions(query, queryParams)`

**Get suggestions for a search term**

This endpoint provides autocomplete suggestions for partial search terms.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const query = "cats"; // String | Search term for which you want keyword suggestions

const queryParams = { 
  'limit': 10 // Number | Limit the number of suggestions
};

api.getImageSuggestions(query, queryParams)
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
 limit | Number| Limit the number of suggestions, defaults to 10 

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
  "data" : [ "cat scan", "cats and dogs", "cats playing", "catsuit", "cat silhouette", "catskills", "cats eyes", "cat sitting", "cat sleeping", "cats eye" ]
}
```

<a name="getUpdatedImages"></a>
# ImagesApi.getUpdatedImages
> `UpdatedMediaDataList ImagesApi.getUpdatedImages(queryParams)`

**List updated images**

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'type': ["addition"], // [String] | Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways
  'start_date': new Date("2021-03-29"), // Date | Show images updated on or after the specified date
  'end_date': new Date("2021-03-29"), // Date | Show images updated before the specified date
  'interval': "1 HOUR", // String | Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "newest" // String | Sort order
};

api.getUpdatedImages(queryParams)
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
 type | [String]| Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways <br/><br/>Valid values: "addition", "deletion", "edit"
 start_date | Date| Show images updated on or after the specified date 
 end_date | Date| Show images updated before the specified date 
 interval | String| Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request, defaults to 1 HOUR 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"

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

<a name="licenseImages"></a>
# ImagesApi.licenseImages
> `LicenseImageResultDataList ImagesApi.licenseImages(body, queryParams)`

**License images**

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const body = new ShutterstockApiReference.LicenseImageRequest(); // LicenseImageRequest | List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters

const queryParams = { 
  'subscription_id': "subscription_id_example", // String | Subscription ID to use to license the image
  'format': "format_example", // String | (Deprecated) Image format
  'size': "huge", // String | Image size
  'search_id': "search_id_example" // String | Search ID that was provided in the results of an image search
};

api.licenseImages(body, queryParams)
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
 body (required) | [LicenseImageRequest](LicenseImageRequest.md)| List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
 subscription_id | String| Subscription ID to use to license the image 
 format | String| (Deprecated) Image format <br/><br/>Valid values: "eps", "jpg"
 size | String| Image size, defaults to huge <br/><br/>Valid values: "small", "medium", "huge", "vector", "custom"
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

```
{
  "data" : [ {
    "image_id" : "59656357",
    "download" : {
      "url" : "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
    },
    "allotment_charge" : 1
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 23
}
```

<a name="listImageCategories"></a>
# ImagesApi.listImageCategories
> `CategoryDataList ImagesApi.listImageCategories(queryParams)`

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

const queryParams = { 
  'language': "es" // String | Language for the keywords and categories in the response
};

api.listImageCategories(queryParams)
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

[CategoryDataList](CategoryDataList.md)

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

<a name="listSimilarImages"></a>
# ImagesApi.listSimilarImages
> `ImageSearchResults ImagesApi.listSimilarImages(id, queryParams)`

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

const id = "465011609"; // String | Image ID

const queryParams = { 
  'language': "es", // String | Language for the keywords and categories in the response
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'view': "minimal" // String | Amount of detail to render in the response
};

api.listSimilarImages(id, queryParams)
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
 id (required) | String| Image ID 
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

[ImageSearchResults](ImageSearchResults.md)

### Example response

```
{
  "data" : [ {
    "id" : "1572478477",
    "aspect" : 1.5,
    "assets" : {
      "preview" : {
        "height" : 300,
        "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 450
      },
      "small_thumb" : {
        "height" : 67,
        "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 100
      },
      "large_thumb" : {
        "height" : 100,
        "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 150
      },
      "huge_thumb" : {
        "height" : 260,
        "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
        "width" : 390
      },
      "preview_1000" : {
        "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
        "width" : 1000,
        "height" : 667
      },
      "preview_1500" : {
        "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 1500,
        "height" : 1000
      }
    },
    "contributor" : {
      "id" : "250738318"
    },
    "description" : "cropped image of woman gardening",
    "image_type" : "photo",
    "has_model_release" : true,
    "media_type" : "image"
  } ],
  "page" : 1,
  "per_page" : 5,
  "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10",
  "spellcheck_info" : { },
  "total_count" : 45
}
```

<a name="renameImageCollection"></a>
# ImagesApi.renameImageCollection
> `ImagesApi.renameImageCollection(id, body)`

**Rename image collections**

This endpoint sets a new name for an image collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "126351027"; // String | Collection ID

const body = new ShutterstockApiReference.CollectionUpdateRequest(); // CollectionUpdateRequest | The new name for the collection


api.renameImageCollection(id, body)
  .catch((error) => {
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

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'added_date': new Date("2021-03-29"), // Date | Show images added on the specified date
  'added_date_start': new Date("2021-03-29"), // Date | Show images added on or after the specified date
  'aspect_ratio_min': 1.7778, // Number | Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'aspect_ratio_max': 1.7778, // Number | Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'aspect_ratio': 1.7778, // Number | Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
  'added_date_end': new Date("2021-03-29"), // Date | Show images added before the specified date
  'category': "category_example", // String | Show images with the specified Shutterstock-defined category; specify a category name or ID
  'color': "4F21EA", // String | Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
  'contributor': ["[123456]"], // [String] | Show images with the specified contributor names or IDs, allows multiple
  'contributor_country': "US", // Object | Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
  'fields': "fields_example", // String | Fields to display in the response; see the documentation for the fields parameter in the overview section
  'height': 56, // Number | (Deprecated; use height_from and height_to instead) Show images with the specified height
  'height_from': 1080, // Number | Show images with the specified height or larger, in pixels
  'height_to': 1080, // Number | Show images with the specified height or smaller, in pixels
  'image_type': ["photo"], // [String] | Show images of the specified type
  'keyword_safe_search': true, // Boolean | Hide results with potentially unsafe keywords
  'language': "fr", // String | Set query and result language (uses Accept-Language header if not set)
  'license': ["license_example"], // [String] | Show only images with the specified license
  'model': ["[12345, 67890]"], // [String] | Show image results with the specified model IDs
  'orientation': "vertical", // String | Show image results with horizontal or vertical orientation
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'people_model_released': true, // Boolean | Show images of people with a signed model release
  'people_age': "20s", // String | Show images that feature people of the specified age category
  'people_ethnicity': ["hispanic"], // [String] | Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
  'people_gender': "both", // String | Show images with people of the specified gender
  'people_number': 2, // Number | Show images with the specified number of people
  'query': "dogs on the beach", // String | One or more search terms separated by spaces; you can use NOT to filter out images that match a term
  'region': "US", // Object | Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
  'safe': true, // Boolean | Enable or disable safe search
  'sort': "popular", // String | Sort by
  'spellcheck_query': true, // Boolean | Spellcheck the search query and return results on suggested spellings
  'view': "minimal", // String | Amount of detail to render in the response
  'width': 56, // Number | (Deprecated; use width_from and width_to instead) Show images with the specified width
  'width_from': 1920, // Number | Show images with the specified width or larger, in pixels
  'width_to': 1920 // Number | Show images with the specified width or smaller, in pixels
};

api.searchImages(queryParams)
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
 added_date | Date| Show images added on the specified date 
 added_date_start | Date| Show images added on or after the specified date 
 aspect_ratio_min | Number| Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 aspect_ratio_max | Number| Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 aspect_ratio | Number| Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image 
 added_date_end | Date| Show images added before the specified date 
 category | String| Show images with the specified Shutterstock-defined category; specify a category name or ID 
 color | String| Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors 
 contributor | [String]| Show images with the specified contributor names or IDs, allows multiple 
 contributor_country | [Object](.md)| Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search 
 fields | String| Fields to display in the response; see the documentation for the fields parameter in the overview section 
 height | Number| (Deprecated; use height_from and height_to instead) Show images with the specified height 
 height_from | Number| Show images with the specified height or larger, in pixels 
 height_to | Number| Show images with the specified height or smaller, in pixels 
 image_type | [String]| Show images of the specified type <br/><br/>Valid values: "photo", "illustration", "vector"
 keyword_safe_search | Boolean| Hide results with potentially unsafe keywords, defaults to true 
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 license | [String]| Show only images with the specified license <br/><br/>Valid values: "commercial", "editorial", "enhanced"
 model | [String]| Show image results with the specified model IDs 
 orientation | String| Show image results with horizontal or vertical orientation <br/><br/>Valid values: "horizontal", "vertical"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 people_model_released | Boolean| Show images of people with a signed model release 
 people_age | String| Show images that feature people of the specified age category <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | [String]| Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other", "NOT african", "NOT african_american", "NOT black", "NOT brazilian", "NOT chinese", "NOT caucasian", "NOT east_asian", "NOT hispanic", "NOT japanese", "NOT middle_eastern", "NOT native_american", "NOT pacific_islander", "NOT south_asian", "NOT southeast_asian", "NOT other"
 people_gender | String| Show images with people of the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show images with the specified number of people 
 query | String| One or more search terms separated by spaces; you can use NOT to filter out images that match a term 
 region | [Object](.md)| Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country 
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

```
{
  "data" : [ {
    "id" : "1572478477",
    "aspect" : 1.5,
    "assets" : {
      "preview" : {
        "height" : 300,
        "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 450
      },
      "small_thumb" : {
        "height" : 67,
        "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 100
      },
      "large_thumb" : {
        "height" : 100,
        "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 150
      },
      "huge_thumb" : {
        "height" : 260,
        "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
        "width" : 390
      },
      "preview_1000" : {
        "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
        "width" : 1000,
        "height" : 667
      },
      "preview_1500" : {
        "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 1500,
        "height" : 1000
      }
    },
    "contributor" : {
      "id" : "250738318"
    },
    "description" : "cropped image of woman gardening",
    "image_type" : "photo",
    "has_model_release" : true,
    "media_type" : "image"
  } ],
  "page" : 1,
  "per_page" : 5,
  "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10",
  "spellcheck_info" : { },
  "total_count" : 45
}
```

