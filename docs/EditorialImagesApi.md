# shutterstock-api.EditorialImagesApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getEditorialCategories`](EditorialImagesApi.md#getEditorialCategories) | `GET /v2/editorial/categories` | (Deprecated) List editorial categories
[`getEditorialImage`](EditorialImagesApi.md#getEditorialImage) | `GET /v2/editorial/images/{id}` | Get editorial content details
[`getEditorialImageLicenseList`](EditorialImagesApi.md#getEditorialImageLicenseList) | `GET /v2/editorial/images/licenses` | List editorial image licenses
[`getEditorialImageLivefeed`](EditorialImagesApi.md#getEditorialImageLivefeed) | `GET /v2/editorial/images/livefeeds/{id}` | Get editorial livefeed
[`getEditorialImageLivefeedItems`](EditorialImagesApi.md#getEditorialImageLivefeedItems) | `GET /v2/editorial/images/livefeeds/{id}/items` | Get editorial livefeed items
[`getEditorialImageLivefeedList`](EditorialImagesApi.md#getEditorialImageLivefeedList) | `GET /v2/editorial/images/livefeeds` | Get editorial livefeed list
[`getEditorialImage_0`](EditorialImagesApi.md#getEditorialImage_0) | `GET /v2/editorial/{id}` | (Deprecated) Get editorial content details
[`getEditorialLivefeed`](EditorialImagesApi.md#getEditorialLivefeed) | `GET /v2/editorial/livefeeds/{id}` | (Deprecated) Get editorial livefeed
[`getEditorialLivefeedItems`](EditorialImagesApi.md#getEditorialLivefeedItems) | `GET /v2/editorial/livefeeds/{id}/items` | (Deprecated) Get editorial livefeed items
[`getEditorialLivefeedList`](EditorialImagesApi.md#getEditorialLivefeedList) | `GET /v2/editorial/livefeeds` | (Deprecated) Get editorial livefeed list
[`getUpdatedEditorialImages`](EditorialImagesApi.md#getUpdatedEditorialImages) | `GET /v2/editorial/images/updated` | List updated content
[`getUpdatedImages`](EditorialImagesApi.md#getUpdatedImages) | `GET /v2/editorial/updated` | (Deprecated) List updated content
[`licenseEditorialImage`](EditorialImagesApi.md#licenseEditorialImage) | `POST /v2/editorial/licenses` | (Deprecated) License editorial content
[`licenseEditorialImages`](EditorialImagesApi.md#licenseEditorialImages) | `POST /v2/editorial/images/licenses` | License editorial content
[`listEditorialImageCategories`](EditorialImagesApi.md#listEditorialImageCategories) | `GET /v2/editorial/images/categories` | List editorial categories
[`searchEditorial`](EditorialImagesApi.md#searchEditorial) | `GET /v2/editorial/search` | (Deprecated) Search editorial content
[`searchEditorialImages`](EditorialImagesApi.md#searchEditorialImages) | `GET /v2/editorial/images/search` | Search editorial images


<a name="getEditorialCategories"></a>
# EditorialImagesApi.getEditorialCategories
> `EditorialCategoryResults EditorialImagesApi.getEditorialCategories()`

**(Deprecated) List editorial categories**

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();
api.getEditorialCategories()
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

[EditorialCategoryResults](EditorialCategoryResults.md)

### Example response

```
{
  "data" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ]
}
```

<a name="getEditorialImage"></a>
# EditorialImagesApi.getEditorialImage
> `EditorialContent EditorialImagesApi.getEditorialImage(id, country)`

**Get editorial content details**

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "9926131a"; // String | Editorial ID

const country = "USA"; // String | Returns only if the content is available for distribution in a certain country


api.getEditorialImage(id, country)
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
 id (required) | String| Editorial ID 
 country (required) | String| Returns only if the content is available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialContent](EditorialContent.md)

### Example response

```
{
  "assets" : {
    "thumb_220" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "original" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_450" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "thumb_170" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "medium_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "small_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_1500" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    }
  },
  "keywords" : [ "keywords", "keywords" ],
  "aspect" : 0.80082819046101150206595775671303272247314453125,
  "caption" : "caption",
  "description" : "description",
  "categories" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ],
  "id" : "id",
  "title" : "title",
  "byline" : "byline",
  "date_taken" : "2000-01-23"
}
```

<a name="getEditorialImageLicenseList"></a>
# EditorialImagesApi.getEditorialImageLicenseList
> `DownloadHistoryDataList EditorialImagesApi.getEditorialImageLicenseList(queryParams)`

**List editorial image licenses**

This endpoint lists existing editorial image licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const queryParams = { 
  'image_id': "12345678", // String | Show licenses for the specified editorial image ID
  'license': "premier_editorial_all_digital", // String | Show editorial images that are available with the specified license name
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort order
  'username': "aUniqueUsername", // String | Filter licenses by username of licensee
  'start_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2021-03-29T13:25:13.521Z") // Date | Show licenses created before the specified date
};

api.getEditorialImageLicenseList(queryParams)
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
 image_id | String| Show licenses for the specified editorial image ID 
 license | String| Show editorial images that are available with the specified license name 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"
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

<a name="getEditorialImageLivefeed"></a>
# EditorialImagesApi.getEditorialImageLivefeed
> `EditorialImageLivefeed EditorialImagesApi.getEditorialImageLivefeed(id, country)`

**Get editorial livefeed**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London"; // String | Editorial livefeed ID; must be an URI encoded string

const country = "USA"; // String | Returns only if the livefeed is available for distribution in a certain country


api.getEditorialImageLivefeed(id, country)
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
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed is available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialImageLivefeed](EditorialImageLivefeed.md)

### Example response

```
{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "cover_item" : {
    "width" : 6,
    "id" : "id",
    "url" : "url",
    "height" : 0
  },
  "total_item_count" : 0
}
```

<a name="getEditorialImageLivefeedItems"></a>
# EditorialImagesApi.getEditorialImageLivefeedItems
> `EditorialImageContentDataList EditorialImagesApi.getEditorialImageLivefeedItems(id, country)`

**Get editorial livefeed items**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London"; // String | Editorial livefeed ID; must be an URI encoded string

const country = "USA"; // String | Returns only if the livefeed items are available for distribution in a certain country


api.getEditorialImageLivefeedItems(id, country)
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
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed items are available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialImageContentDataList](EditorialImageContentDataList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
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

<a name="getEditorialImageLivefeedList"></a>
# EditorialImagesApi.getEditorialImageLivefeedList
> `EditorialImageLivefeedList EditorialImagesApi.getEditorialImageLivefeedList(country, queryParams)`

**Get editorial livefeed list**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const country = "USA"; // String | Returns only livefeeds that are available for distribution in a certain country

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20 // Number | Number of results per page
};

api.getEditorialImageLivefeedList(country, queryParams)
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
 country (required) | String| Returns only livefeeds that are available for distribution in a certain country 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialImageLivefeedList](EditorialImageLivefeedList.md)

### Example response

```
{
  "per_page" : 5,
  "data" : [ {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  }, {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  } ],
  "total_count" : 2,
  "page" : 5,
  "message" : "message"
}
```

<a name="getEditorialImage_0"></a>
# EditorialImagesApi.getEditorialImage_0
> `EditorialContent EditorialImagesApi.getEditorialImage_0(id, country)`

**(Deprecated) Get editorial content details**

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "9926131a"; // String | Editorial ID

const country = "USA"; // String | Returns only if the content is available for distribution in a certain country


api.getEditorialImage_0(id, country)
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
 id (required) | String| Editorial ID 
 country (required) | String| Returns only if the content is available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialContent](EditorialContent.md)

### Example response

```
{
  "assets" : {
    "thumb_220" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "original" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_450" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "thumb_170" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "medium_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "small_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_1500" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    }
  },
  "keywords" : [ "keywords", "keywords" ],
  "aspect" : 0.80082819046101150206595775671303272247314453125,
  "caption" : "caption",
  "description" : "description",
  "categories" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ],
  "id" : "id",
  "title" : "title",
  "byline" : "byline",
  "date_taken" : "2000-01-23"
}
```

<a name="getEditorialLivefeed"></a>
# EditorialImagesApi.getEditorialLivefeed
> `EditorialLivefeed EditorialImagesApi.getEditorialLivefeed(id, country)`

**(Deprecated) Get editorial livefeed**

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London"; // String | Editorial livefeed ID; must be an URI encoded string

const country = "USA"; // String | Returns only if the livefeed is available for distribution in a certain country


api.getEditorialLivefeed(id, country)
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
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed is available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialLivefeed](EditorialLivefeed.md)

### Example response

```
{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "cover_item" : {
    "width" : 6,
    "id" : "id",
    "url" : "url",
    "height" : 0
  },
  "total_item_count" : 1
}
```

<a name="getEditorialLivefeedItems"></a>
# EditorialImagesApi.getEditorialLivefeedItems
> `EditorialContentDataList EditorialImagesApi.getEditorialLivefeedItems(id, country)`

**(Deprecated) Get editorial livefeed items**

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const id = "2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London"; // String | Editorial livefeed ID; must be an URI encoded string

const country = "USA"; // String | Returns only if the livefeed items are available for distribution in a certain country


api.getEditorialLivefeedItems(id, country)
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
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed items are available for distribution in a certain country 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialContentDataList](EditorialContentDataList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
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

<a name="getEditorialLivefeedList"></a>
# EditorialImagesApi.getEditorialLivefeedList
> `EditorialLivefeedList EditorialImagesApi.getEditorialLivefeedList(country, queryParams)`

**(Deprecated) Get editorial livefeed list**

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const country = "USA"; // String | Returns only livefeeds that are available for distribution in a certain country

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20 // Number | Number of results per page
};

api.getEditorialLivefeedList(country, queryParams)
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
 country (required) | String| Returns only livefeeds that are available for distribution in a certain country 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialLivefeedList](EditorialLivefeedList.md)

### Example response

```
{
  "per_page" : 6,
  "data" : [ {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  }, {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message"
}
```

<a name="getUpdatedEditorialImages"></a>
# EditorialImagesApi.getUpdatedEditorialImages
> `EditorialUpdatedResults EditorialImagesApi.getUpdatedEditorialImages(type, date_updated_start, date_updated_end, country, queryParams)`

**List updated content**

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const type = "edit";
const dateUpdatedStart = "2020-02-02T13:00:00Z";
const dateUpdatedEnd = "2020-02-02T15:00:00Z";
const country = "USA";

editorialApi.getUpdatedImages(type, dateUpdatedStart, dateUpdatedEnd, country)
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
 type (required) | String| Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted <br/><br/>Valid values: "edit", "addition"
 date_updated_start (required) | Date| Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. 
 date_updated_end (required) | Date| Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. 
 country (required) | String| Show only editorial content that is available for distribution in a certain country 
 date_taken_start | String| Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets 
 date_taken_end | String| Show images that were taken before the specified date 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 
 sort | String| Sort by, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 supplier_code | [String]| Show only editorial content from certain suppliers 
 per_page | Number| Number of results per page, defaults to 500 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialUpdatedResults](EditorialUpdatedResults.md)

### Example response

```
{
  "next" : "next",
  "per_page" : 6,
  "data" : [ {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "keywords" : [ "keywords", "keywords" ],
    "caption" : "caption",
    "description" : "description",
    "title" : "title",
    "updates" : [ "updates", "updates" ],
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "commercial_status" : {
      "reason" : "reason",
      "status" : "status"
    },
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "rights" : {
      "countries" : "countries"
    },
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "byline" : "byline",
    "supplier_code" : "supplier_code",
    "date_taken" : "2000-01-23"
  }, {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "keywords" : [ "keywords", "keywords" ],
    "caption" : "caption",
    "description" : "description",
    "title" : "title",
    "updates" : [ "updates", "updates" ],
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "commercial_status" : {
      "reason" : "reason",
      "status" : "status"
    },
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "rights" : {
      "countries" : "countries"
    },
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "byline" : "byline",
    "supplier_code" : "supplier_code",
    "date_taken" : "2000-01-23"
  } ],
  "prev" : "prev",
  "message" : "message"
}
```

<a name="getUpdatedImages"></a>
# EditorialImagesApi.getUpdatedImages
> `EditorialUpdatedResults EditorialImagesApi.getUpdatedImages(type, date_updated_start, date_updated_end, country, queryParams)`

**(Deprecated) List updated content**

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const type = "edit";
const dateUpdatedStart = "2020-02-02T13:00:00Z";
const dateUpdatedEnd = "2020-02-02T15:00:00Z";
const country = "USA";

editorialApi.getUpdatedImages(type, dateUpdatedStart, dateUpdatedEnd, country)
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
 type (required) | String| Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted <br/><br/>Valid values: "edit", "addition"
 date_updated_start (required) | Date| Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. 
 date_updated_end (required) | Date| Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00. 
 country (required) | String| Show only editorial content that is available for distribution in a certain country 
 date_taken_start | String| Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets 
 date_taken_end | String| Show images that were taken before the specified date 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 
 sort | String| Sort by, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 supplier_code | [String]| Show only editorial content from certain suppliers 
 per_page | Number| Number of results per page, defaults to 500 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialUpdatedResults](EditorialUpdatedResults.md)

### Example response

```
{
  "next" : "next",
  "per_page" : 6,
  "data" : [ {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "keywords" : [ "keywords", "keywords" ],
    "caption" : "caption",
    "description" : "description",
    "title" : "title",
    "updates" : [ "updates", "updates" ],
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "commercial_status" : {
      "reason" : "reason",
      "status" : "status"
    },
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "rights" : {
      "countries" : "countries"
    },
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "byline" : "byline",
    "supplier_code" : "supplier_code",
    "date_taken" : "2000-01-23"
  }, {
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "keywords" : [ "keywords", "keywords" ],
    "caption" : "caption",
    "description" : "description",
    "title" : "title",
    "updates" : [ "updates", "updates" ],
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "commercial_status" : {
      "reason" : "reason",
      "status" : "status"
    },
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "rights" : {
      "countries" : "countries"
    },
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "byline" : "byline",
    "supplier_code" : "supplier_code",
    "date_taken" : "2000-01-23"
  } ],
  "prev" : "prev",
  "message" : "message"
}
```

<a name="licenseEditorialImage"></a>
# EditorialImagesApi.licenseEditorialImage
> `LicenseEditorialContentResults EditorialImagesApi.licenseEditorialImage(body)`

**(Deprecated) License editorial content**

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const body = {
  "editorial": [
    {
      "editorial_id": "8594090h",
      "license": "premier_editorial_comp"
    }
  ],
  "country": "USA"
};

editorialApi.licenseEditorialImage(body)
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
 body (required) | [LicenseEditorialContentRequest](LicenseEditorialContentRequest.md)| License editorial content 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[LicenseEditorialContentResults](LicenseEditorialContentResults.md)

### Example response

```
{
  "per_page" : 1,
  "data" : [ {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
  }, {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
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

<a name="licenseEditorialImages"></a>
# EditorialImagesApi.licenseEditorialImages
> `LicenseEditorialContentResults EditorialImagesApi.licenseEditorialImages(body)`

**License editorial content**

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const body = {
  "editorial": [
    {
      "editorial_id": "8594090h",
      "license": "premier_editorial_comp"
    }
  ],
  "country": "USA"
};

editorialApi.licenseEditorialImage(body)
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
 body (required) | [LicenseEditorialContentRequest](LicenseEditorialContentRequest.md)| License editorial content 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create
Required scopes:
  - purchases.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[LicenseEditorialContentResults](LicenseEditorialContentResults.md)

### Example response

```
{
  "per_page" : 1,
  "data" : [ {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
  }, {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
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

<a name="listEditorialImageCategories"></a>
# EditorialImagesApi.listEditorialImageCategories
> `EditorialImageCategoryResults EditorialImagesApi.listEditorialImageCategories()`

**List editorial categories**

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();
api.listEditorialImageCategories()
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

[EditorialImageCategoryResults](EditorialImageCategoryResults.md)

### Example response

```
{
  "data" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ]
}
```

<a name="searchEditorial"></a>
# EditorialImagesApi.searchEditorial
> `EditorialSearchResults EditorialImagesApi.searchEditorial(country, queryParams)`

**(Deprecated) Search editorial content**

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const queryParams = {
  "query": "football",
  "country": "USA",
  "sort": "newest",
  "date_start": "2018-10-23"
};

const country = "USA";

editorialApi.searchEditorial(country, queryParams)
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
 country (required) | String| Show only editorial content that is available for distribution in a certain country 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by, defaults to relevant <br/><br/>Valid values: "relevant", "newest", "oldest"
 category | String| Show editorial content within a certain editorial category; specify by category name 
 supplier_code | [String]| Show only editorial content from certain suppliers 
 date_start | Date| Show only editorial content generated on or after a specific date 
 date_end | Date| Show only editorial content generated on or before a specific date 
 per_page | Number| Number of results per page, defaults to 20 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialSearchResults](EditorialSearchResults.md)

### Example response

```
{
  "next" : "next",
  "per_page" : 1,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  } ],
  "total_count" : 5,
  "prev" : "prev",
  "page" : 6,
  "message" : "message",
  "search_id" : "search_id"
}
```

<a name="searchEditorialImages"></a>
# EditorialImagesApi.searchEditorialImages
> `EditorialSearchResults EditorialImagesApi.searchEditorialImages(country, queryParams)`

**Search editorial images**

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const queryParams = {
  "query": "football",
  "country": "USA",
  "sort": "newest",
  "date_start": "2018-10-23"
};

const country = "USA";

editorialApi.editorialImagesSearch(country, queryParams)
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
 country (required) | String| Show only editorial content that is available for distribution in a certain country 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by, defaults to relevant <br/><br/>Valid values: "relevant", "newest", "oldest"
 category | String| Show editorial content within a certain editorial category; specify by category name 
 supplier_code | [String]| Show only editorial content from certain suppliers 
 date_start | Date| Show only editorial content generated on or after a specific date 
 date_end | Date| Show only editorial content generated on or before a specific date 
 per_page | Number| Number of results per page, defaults to 20 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialSearchResults](EditorialSearchResults.md)

### Example response

```
{
  "next" : "next",
  "per_page" : 1,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  } ],
  "total_count" : 5,
  "prev" : "prev",
  "page" : 6,
  "message" : "message",
  "search_id" : "search_id"
}
```

