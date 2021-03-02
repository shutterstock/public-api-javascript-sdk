# shutterstock-api.EditorialVideoApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`editorialVideosDetails`](EditorialVideoApi.md#editorialVideosDetails) | `GET /v2/editorial/videos/{id}` | Get editorial video content details
[`editorialVideosSearch`](EditorialVideoApi.md#editorialVideosSearch) | `GET /v2/editorial/videos/search` | Search editorial video content
[`getEditorialCategories`](EditorialVideoApi.md#getEditorialCategories) | `GET /v2/editorial/videos/categories` | List editorial video categories
[`licenseEditorialVideo`](EditorialVideoApi.md#licenseEditorialVideo) | `POST /v2/editorial/videos/licenses` | License editorial video content


<a name="editorialVideosDetails"></a>
# EditorialVideoApi.editorialVideosDetails
> `EditorialVideoContent EditorialVideoApi.editorialVideosDetails(id, country)`

**Get editorial video content details**

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();

const id = "9926131a"; // String | Editorial ID

const country = "USA"; // String | Returns only if the content is available for distribution in a certain country


api.editorialVideosDetails(id, country)
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

[EditorialVideoContent](EditorialVideoContent.md)

### Example response

```
{
  "assets" : {
    "original" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "preview_mp4" : {
      "url" : "url"
    },
    "preview_webm" : {
      "url" : "url"
    },
    "thumb_jpg" : {
      "url" : "url"
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

<a name="editorialVideosSearch"></a>
# EditorialVideoApi.editorialVideosSearch
> `EditorialVideoSearchResults EditorialVideoApi.editorialVideosSearch(country, queryParams)`

**Search editorial video content**

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialVideoApi();

const queryParams = {
  "query": "football",
  "country": "USA",
  "sort": "newest",
  "date_start": "2018-10-23"
};

const country = "USA";

editorialApi.editorialVideosSearch(country, queryParams)
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
 country (required) | String| Show only editorial video content that is available for distribution in a certain country 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by, defaults to relevant <br/><br/>Valid values: "relevant", "newest", "oldest"
 category | String| Show editorial video content within a certain editorial category; specify by category name 
 supplier_code | [[String]](String.md)| Show only editorial video content from certain suppliers 
 date_start | Date| Show only editorial video content generated on or after a specific date 
 date_end | Date| Show only editorial video content generated on or before a specific date 
 resolution | String| Show only editorial video content with specific resolution <br/><br/>Valid values: "4k", "high_definition", "standard_definition"
 fps | Number| Show only editorial video content generated with specific frames per second 
 per_page | Number| Number of results per page, defaults to 20 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[EditorialVideoSearchResults](EditorialVideoSearchResults.md)

### Example response

```
{
  "next" : "next",
  "per_page" : 1,
  "data" : [ {
    "assets" : {
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "preview_webm" : {
        "url" : "url"
      },
      "thumb_jpg" : {
        "url" : "url"
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
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "preview_webm" : {
        "url" : "url"
      },
      "thumb_jpg" : {
        "url" : "url"
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

<a name="getEditorialCategories"></a>
# EditorialVideoApi.getEditorialCategories
> `EditorialVideoCategoryResults EditorialVideoApi.getEditorialCategories()`

**List editorial video categories**

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();
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

[EditorialVideoCategoryResults](EditorialVideoCategoryResults.md)

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

<a name="licenseEditorialVideo"></a>
# EditorialVideoApi.licenseEditorialVideo
> `LicenseEditorialContentResults EditorialVideoApi.licenseEditorialVideo(body)`

**License editorial video content**

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const body = {
  "editorial": [
    {
      "editorial_id": "10687492a",
      "license": "premier_editorial_video_comp"
    }
  ],
  "country": "USA"
};

editorialApi.licenseEditorialVideo(body)
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
 body (required) | [LicenseEditorialVideoContentRequest](LicenseEditorialVideoContentRequest.md)| License editorial video content 

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

