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
    "name" : "Animal"
  }, {
    "name" : "Awards"
  }, {
    "name" : "Art"
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
  "id" : "10687730b",
  "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
  "caption" : "",
  "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
  "byline" : "Jon Super/AP/Shutterstock",
  "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
  "date_taken" : "2021-05-11",
  "categories" : [ {
    "name" : "Sport"
  } ],
  "aspect" : 1.621,
  "assets" : {
    "thumb_170" : {
      "height" : 105,
      "width" : 170,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
    },
    "thumb_220" : {
      "height" : 136,
      "width" : 220,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
    },
    "watermark_450" : {
      "height" : 278,
      "width" : 450,
      "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
    },
    "watermark_1500" : {
      "height" : 926,
      "width" : 1500,
      "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
    },
    "small_jpg" : {
      "display_name" : "Small",
      "width" : 500,
      "height" : 309,
      "is_licensable" : true
    },
    "medium_jpg" : {
      "display_name" : "Med",
      "width" : 1000,
      "height" : 617,
      "is_licensable" : true
    },
    "original" : {
      "display_name" : "Original",
      "height" : 3693,
      "width" : 5985,
      "is_licensable" : true
    }
  }
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
  'end_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created before the specified date
  'download_availability': "all", // String | Filter licenses by download availability
  'team_history': false // Boolean | Set to true to see license history for all members of your team.
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
  "id" : "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
  "name" : "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
  "total_item_count" : 38,
  "created_time" : "2018-07-17T12:42:03+00:00",
  "cover_item" : {
    "height" : 117,
    "width" : 170,
    "url" : "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
    "id" : "9763363q"
  }
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
  "data" : [ {
    "id" : "10687730b",
    "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
    "caption" : "",
    "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
    "byline" : "Jon Super/AP/Shutterstock",
    "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
    "date_taken" : "2021-05-11",
    "categories" : [ {
      "name" : "Sport"
    } ],
    "aspect" : 1.621,
    "assets" : {
      "thumb_170" : {
        "height" : 105,
        "width" : 170,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
      },
      "thumb_220" : {
        "height" : 136,
        "width" : 220,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
      },
      "watermark_450" : {
        "height" : 278,
        "width" : 450,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
      },
      "watermark_1500" : {
        "height" : 926,
        "width" : 1500,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
      },
      "small_jpg" : {
        "display_name" : "Small",
        "width" : 500,
        "height" : 309,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "width" : 1000,
        "height" : 617,
        "is_licensable" : true
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3693,
        "width" : 5985,
        "is_licensable" : true
      }
    }
  } ],
  "page" : 1,
  "per_page" : 1,
  "total_count" : 23
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
  "page" : 1,
  "per_page" : 1,
  "total_count" : 5300,
  "data" : [ {
    "id" : "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
    "name" : "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
    "total_item_count" : 38,
    "created_time" : "2018-07-17T12:42:03+00:00",
    "cover_item" : {
      "height" : 117,
      "width" : 170,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
      "id" : "9763363q"
    }
  } ]
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
  "id" : "10687730b",
  "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
  "caption" : "",
  "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
  "byline" : "Jon Super/AP/Shutterstock",
  "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
  "date_taken" : "2021-05-11",
  "categories" : [ {
    "name" : "Sport"
  } ],
  "aspect" : 1.621,
  "assets" : {
    "thumb_170" : {
      "height" : 105,
      "width" : 170,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
    },
    "thumb_220" : {
      "height" : 136,
      "width" : 220,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
    },
    "watermark_450" : {
      "height" : 278,
      "width" : 450,
      "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
    },
    "watermark_1500" : {
      "height" : 926,
      "width" : 1500,
      "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
    },
    "small_jpg" : {
      "display_name" : "Small",
      "width" : 500,
      "height" : 309,
      "is_licensable" : true
    },
    "medium_jpg" : {
      "display_name" : "Med",
      "width" : 1000,
      "height" : 617,
      "is_licensable" : true
    },
    "original" : {
      "display_name" : "Original",
      "height" : 3693,
      "width" : 5985,
      "is_licensable" : true
    }
  }
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
  "id" : "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
  "name" : "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
  "total_item_count" : 38,
  "created_time" : "2018-07-17T12:42:03+00:00",
  "cover_item" : {
    "height" : 117,
    "width" : 170,
    "url" : "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
    "id" : "9763363q"
  }
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
  "data" : [ {
    "id" : "10687730b",
    "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
    "caption" : "",
    "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
    "byline" : "Jon Super/AP/Shutterstock",
    "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
    "date_taken" : "2021-05-11",
    "categories" : [ {
      "name" : "Sport"
    } ],
    "aspect" : 1.621,
    "assets" : {
      "thumb_170" : {
        "height" : 105,
        "width" : 170,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
      },
      "thumb_220" : {
        "height" : 136,
        "width" : 220,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
      },
      "watermark_450" : {
        "height" : 278,
        "width" : 450,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
      },
      "watermark_1500" : {
        "height" : 926,
        "width" : 1500,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
      },
      "small_jpg" : {
        "display_name" : "Small",
        "width" : 500,
        "height" : 309,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "width" : 1000,
        "height" : 617,
        "is_licensable" : true
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3693,
        "width" : 5985,
        "is_licensable" : true
      }
    }
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 16
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
  "data" : [ {
    "id" : "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
    "name" : "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
    "total_item_count" : 38,
    "created_time" : "2018-07-17T12:42:03+00:00",
    "cover_item" : {
      "height" : 117,
      "width" : 170,
      "url" : "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
      "id" : "9763363q"
    }
  } ],
  "page" : 1,
  "per_page" : 1,
  "total_count" : 56
}
```

<a name="getUpdatedEditorialImages"></a>
# EditorialImagesApi.getUpdatedEditorialImages
> `EditorialUpdatedResults EditorialImagesApi.getUpdatedEditorialImages(type, date_updated_start, date_updated_end, country, queryParams)`

**List updated content**

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const type = "edit"; // String | Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted

const date_updated_start = new Date("2021-03-29T13:25:13.521Z"); // Date | Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

const date_updated_end = new Date("2021-03-29T13:25:13.521Z"); // Date | Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

const country = "USA"; // String | Show only editorial content that is available for distribution in a certain country

const queryParams = { 
  'date_taken_start': new Date("2020-02-04"), // Date | Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
  'date_taken_end': new Date("2020-02-05"), // Date | Show images that were taken before the specified date
  'cursor': "eyJ2IjoxLCJzIjoyfQ==", // String | The cursor of the page with which to start fetching results; this cursor is returned from previous requests
  'sort': "newest", // String | Sort by
  'supplier_code': ["ABC"], // [String] | Show only editorial content from certain suppliers
  'per_page': 500 // Number | Number of results per page
};

api.getUpdatedEditorialImages(type, date_updated_start, date_updated_end, country, queryParams)
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
 date_taken_start | Date| Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets 
 date_taken_end | Date| Show images that were taken before the specified date 
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
  "per_page" : 1,
  "next" : "eyJ2IjoxLCJzIjoxfQ==",
  "prev" : "",
  "data" : [ {
    "id" : "9804979n",
    "title" : "Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018",
    "caption" : "",
    "description" : "Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.",
    "byline" : "ALEX HOFFORD/EPA-EFE/Shutterstock",
    "supplier_code" : "EPA",
    "keywords" : [ ],
    "date_taken" : "2018-08-24",
    "categories" : [ ],
    "aspect" : 1.481,
    "assets" : {
      "thumb_170" : {
        "height" : 115,
        "width" : 170,
        "url" : "https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg"
      },
      "thumb_220" : {
        "height" : 149,
        "width" : 220,
        "url" : "https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg"
      },
      "watermark_450" : {
        "height" : 304,
        "width" : 450,
        "url" : "https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg"
      },
      "watermark_1500" : {
        "height" : 1500,
        "width" : 1040,
        "url" : "https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg"
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3263,
        "width" : 4831,
        "is_licensable" : true
      },
      "small_jpg" : {
        "display_name" : "Small",
        "height" : 337,
        "width" : 500,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "height" : 675,
        "width" : 1000,
        "is_licensable" : true
      }
    },
    "updated_time" : "2019-07-15T20:04:44-04:00",
    "updates" : [ "addition" ],
    "commercial_status" : {
      "status" : "available"
    },
    "rights" : {
      "countries" : "CAN,+DEU,+GBR,+USA,-*"
    }
  } ]
}
```

<a name="getUpdatedImages"></a>
# EditorialImagesApi.getUpdatedImages
> `EditorialUpdatedResults EditorialImagesApi.getUpdatedImages(type, date_updated_start, date_updated_end, country, queryParams)`

**(Deprecated) List updated content**

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const type = "edit"; // String | Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted

const date_updated_start = new Date("2021-03-29T13:25:13.521Z"); // Date | Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

const date_updated_end = new Date("2021-03-29T13:25:13.521Z"); // Date | Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

const country = "USA"; // String | Show only editorial content that is available for distribution in a certain country

const queryParams = { 
  'date_taken_start': new Date("2020-02-04"), // Date | Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets
  'date_taken_end': new Date("2020-02-05"), // Date | Show images that were taken before the specified date
  'cursor': "eyJ2IjoxLCJzIjoyfQ==", // String | The cursor of the page with which to start fetching results; this cursor is returned from previous requests
  'sort': "newest", // String | Sort by
  'supplier_code': ["ABC"], // [String] | Show only editorial content from certain suppliers
  'per_page': 500 // Number | Number of results per page
};

api.getUpdatedImages(type, date_updated_start, date_updated_end, country, queryParams)
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
 date_taken_start | Date| Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets 
 date_taken_end | Date| Show images that were taken before the specified date 
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
  "per_page" : 1,
  "next" : "eyJ2IjoxLCJzIjoxfQ==",
  "prev" : "",
  "data" : [ {
    "id" : "9804979n",
    "title" : "Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018",
    "caption" : "",
    "description" : "Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.",
    "byline" : "ALEX HOFFORD/EPA-EFE/Shutterstock",
    "supplier_code" : "EPA",
    "keywords" : [ ],
    "date_taken" : "2018-08-24",
    "categories" : [ ],
    "aspect" : 1.481,
    "assets" : {
      "thumb_170" : {
        "height" : 115,
        "width" : 170,
        "url" : "https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg"
      },
      "thumb_220" : {
        "height" : 149,
        "width" : 220,
        "url" : "https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg"
      },
      "watermark_450" : {
        "height" : 304,
        "width" : 450,
        "url" : "https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg"
      },
      "watermark_1500" : {
        "height" : 1500,
        "width" : 1040,
        "url" : "https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg"
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3263,
        "width" : 4831,
        "is_licensable" : true
      },
      "small_jpg" : {
        "display_name" : "Small",
        "height" : 337,
        "width" : 500,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "height" : 675,
        "width" : 1000,
        "is_licensable" : true
      }
    },
    "updated_time" : "2019-07-15T20:04:44-04:00",
    "updates" : [ "addition" ],
    "commercial_status" : {
      "status" : "available"
    },
    "rights" : {
      "countries" : "CAN,+DEU,+GBR,+USA,-*"
    }
  } ]
}
```

<a name="licenseEditorialImage"></a>
# EditorialImagesApi.licenseEditorialImage
> `LicenseEditorialContentResults EditorialImagesApi.licenseEditorialImage(body)`

**(Deprecated) License editorial content**

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const body = new ShutterstockApiReference.LicenseEditorialContentRequest(); // LicenseEditorialContentRequest | License editorial content


api.licenseEditorialImage(body)
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
  "data" : [ {
    "allotment_charge" : 1,
    "editorial_id" : "69656358",
    "download" : {
      "url" : "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323"
    }
  } ],
  "page" : 1,
  "per_page" : 1,
  "total_count" : 12
}
```

<a name="licenseEditorialImages"></a>
# EditorialImagesApi.licenseEditorialImages
> `LicenseEditorialContentResults EditorialImagesApi.licenseEditorialImages(body)`

**License editorial content**

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const body = new ShutterstockApiReference.LicenseEditorialContentRequest(); // LicenseEditorialContentRequest | License editorial content


api.licenseEditorialImages(body)
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
  "data" : [ {
    "allotment_charge" : 1,
    "editorial_id" : "69656358",
    "download" : {
      "url" : "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323"
    }
  } ],
  "page" : 1,
  "per_page" : 1,
  "total_count" : 12
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
    "name" : "Animal"
  }, {
    "name" : "Awards"
  }, {
    "name" : "Art"
  }, {
    "name" : "Film Stills"
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
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const country = "USA"; // String | Show only editorial content that is available for distribution in a certain country

const queryParams = { 
  'query': "query_example", // String | One or more search terms separated by spaces
  'sort': "relevant", // String | Sort by
  'category': "category_example", // String | Show editorial content within a certain editorial category; specify by category name
  'supplier_code': ["supplier_code_example"], // [String] | Show only editorial content from certain suppliers
  'date_start': new Date("2013-10-20"), // Date | Show only editorial content generated on or after a specific date
  'date_end': new Date("2013-10-20"), // Date | Show only editorial content generated on or before a specific date
  'per_page': 20, // Number | Number of results per page
  'cursor': "cursor_example" // String | The cursor of the page with which to start fetching results; this cursor is returned from previous requests
};

api.searchEditorial(country, queryParams)
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
  "per_page" : 1,
  "total_count" : 46845,
  "search_id" : "BaMzOAkpHIvfnuWVRFs1ag",
  "next" : "eyJ2IjoyLCJzIjoxLCJwIjpbMF19",
  "prev" : "",
  "data" : [ {
    "id" : "10687730b",
    "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
    "caption" : "",
    "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
    "byline" : "Jon Super/AP/Shutterstock",
    "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
    "date_taken" : "2021-05-11",
    "categories" : [ {
      "name" : "Sport"
    } ],
    "aspect" : 1.621,
    "assets" : {
      "thumb_170" : {
        "height" : 105,
        "width" : 170,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
      },
      "thumb_220" : {
        "height" : 136,
        "width" : 220,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
      },
      "watermark_450" : {
        "height" : 278,
        "width" : 450,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
      },
      "watermark_1500" : {
        "height" : 926,
        "width" : 1500,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
      },
      "small_jpg" : {
        "display_name" : "Small",
        "width" : 500,
        "height" : 309,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "width" : 1000,
        "height" : 617,
        "is_licensable" : true
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3693,
        "width" : 5985,
        "is_licensable" : true
      }
    }
  } ]
}
```

<a name="searchEditorialImages"></a>
# EditorialImagesApi.searchEditorialImages
> `EditorialSearchResults EditorialImagesApi.searchEditorialImages(country, queryParams)`

**Search editorial images**

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialImagesApi();

const country = "USA"; // String | Show only editorial content that is available for distribution in a certain country

const queryParams = { 
  'query': "The Academy Awards", // String | One or more search terms separated by spaces
  'sort': "relevant", // String | Sort by
  'category': "Alone,Performing", // String | Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
  'supplier_code': ["supplier_code_example"], // [String] | Show only editorial content from certain suppliers
  'date_start': new Date("2020-05-29"), // Date | Show only editorial content generated on or after a specific date
  'date_end': new Date("2021-05-29"), // Date | Show only editorial content generated on or before a specific date
  'per_page': 20, // Number | Number of results per page
  'cursor': "eyJ2IjoxLCJzIjoxfQ==" // String | The cursor of the page with which to start fetching results; this cursor is returned from previous requests
};

api.searchEditorialImages(country, queryParams)
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
 category | String| Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list 
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
  "per_page" : 1,
  "total_count" : 46845,
  "search_id" : "BaMzOAkpHIvfnuWVRFs1ag",
  "next" : "eyJ2IjoyLCJzIjoxLCJwIjpbMF19",
  "prev" : "",
  "data" : [ {
    "id" : "10687730b",
    "title" : "Soccer Premier League, Manchester, United Kingdom - 11 May 2021",
    "caption" : "",
    "description" : "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
    "byline" : "Jon Super/AP/Shutterstock",
    "keywords" : [ "england", "europe", "leicester city fc", "manchester", "manchester united fc", "men's soccer", "men's sports", "premier league", "professional soccer", "soccer", "sports", "united kingdom", "western europe", "wsoc" ],
    "date_taken" : "2021-05-11",
    "categories" : [ {
      "name" : "Sport"
    } ],
    "aspect" : 1.621,
    "assets" : {
      "thumb_170" : {
        "height" : 105,
        "width" : 170,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg"
      },
      "thumb_220" : {
        "height" : 136,
        "width" : 220,
        "url" : "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg"
      },
      "watermark_450" : {
        "height" : 278,
        "width" : 450,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg"
      },
      "watermark_1500" : {
        "height" : 926,
        "width" : 1500,
        "url" : "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg"
      },
      "small_jpg" : {
        "display_name" : "Small",
        "width" : 500,
        "height" : 309,
        "is_licensable" : true
      },
      "medium_jpg" : {
        "display_name" : "Med",
        "width" : 1000,
        "height" : 617,
        "is_licensable" : true
      },
      "original" : {
        "display_name" : "Original",
        "height" : 3693,
        "width" : 5985,
        "is_licensable" : true
      }
    }
  } ]
}
```

