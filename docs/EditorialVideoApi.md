# shutterstock-api.EditorialVideoApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getEditorialVideo`](EditorialVideoApi.md#getEditorialVideo) | `GET /v2/editorial/videos/{id}` | Get editorial video content details
[`getEditorialVideoLicenseList`](EditorialVideoApi.md#getEditorialVideoLicenseList) | `GET /v2/editorial/videos/licenses` | List editorial video licenses
[`licenseEditorialVideo`](EditorialVideoApi.md#licenseEditorialVideo) | `POST /v2/editorial/videos/licenses` | License editorial video content
[`listEditorialVideoCategories`](EditorialVideoApi.md#listEditorialVideoCategories) | `GET /v2/editorial/videos/categories` | List editorial video categories
[`listEditorialVideos`](EditorialVideoApi.md#listEditorialVideos) | `GET /v2/editorial/videos` | List editorial videos details by ID list
[`searchEditorialVideos`](EditorialVideoApi.md#searchEditorialVideos) | `GET /v2/editorial/videos/search` | Search editorial video content


<a name="getEditorialVideo"></a>
# EditorialVideoApi.getEditorialVideo
> `InlineResponse20023 EditorialVideoApi.getEditorialVideo(id, country, queryParams)`

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

const queryParams = { 
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
};

api.getEditorialVideo(id, country, queryParams)
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
 search_id | String| The ID of the search that is related to this request 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20023](InlineResponse20023.md)

### Example response

```
"{id=10679854a, title=Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020, caption=, description=Info from Licensor: \"Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski's, and boats. He has brought joy to many people during the pandemic including those with cancer.\", byline=ViralHog/Shutterstock, keywords=[2020, adorable, birds, bizarre, canadian goose, cute, domesticated animals, entertainment, feel good, flew, flies, fly, flying, fun, goose, jet skis, nature, odd, pets, played, playing, plays, prior lake, sports, strange, sweet, usa, viralhog, virals, water sports, weird], date_taken=2020-11-13, categories=[], aspect=1, assets={preview_mp4={url=https://editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4}, preview_webm={url=https://editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm}, thumb_jpg={url=https://editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg}, original={height=1080, width=1080, fps=30, format=avc1, file_size=82233387, display_name=HD, is_licensable=true}}}"
```

<a name="getEditorialVideoLicenseList"></a>
# EditorialVideoApi.getEditorialVideoLicenseList
> `Object EditorialVideoApi.getEditorialVideoLicenseList(queryParams)`

**List editorial video licenses**

This endpoint lists existing editorial video licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();

const queryParams = { 
  'video_id': "12345678", // String | Show licenses for the specified editorial video ID
  'license': "premier_editorial_all_media", // String | Show editorial videos that are available with the specified license name
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort order
  'username': "aUniqueUsername", // String | Filter licenses by username of licensee
  'start_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created before the specified date
  'download_availability': "all", // String | Filter licenses by download availability
  'team_history': false // Boolean | Set to true to see license history for all members of your team.
};

api.getEditorialVideoLicenseList(queryParams)
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
 video_id | String| Show licenses for the specified editorial video ID 
 license | String| Show editorial videos that are available with the specified license name 
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

<a name="licenseEditorialVideo"></a>
# EditorialVideoApi.licenseEditorialVideo
> `Object EditorialVideoApi.licenseEditorialVideo(body)`

**License editorial video content**

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();

const body = new ShutterstockApiReference.Body18(); // Body18 | License editorial video content


api.licenseEditorialVideo(body)
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
 body (required) | [Body18](Body18.md)| License editorial video content 

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

<a name="listEditorialVideoCategories"></a>
# EditorialVideoApi.listEditorialVideoCategories
> `InlineResponse20022 EditorialVideoApi.listEditorialVideoCategories()`

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
api.listEditorialVideoCategories()
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

[InlineResponse20022](InlineResponse20022.md)

### Example response

```
"{data=[{name=Animal}, {name=Awards}, {name=Art}, {name=Film Stills}]}"
```

<a name="listEditorialVideos"></a>
# EditorialVideoApi.listEditorialVideos
> `InlineResponse20024 EditorialVideoApi.listEditorialVideos(id, country, queryParams)`

**List editorial videos details by ID list**

This endpoint lists the details of editorial videos by ID list.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();

const id = ["id_example"]; // [String] | ID of the editorial video to list details for

const country = "USA"; // String | Show only editorial video content that is available for distribution in a certain country

const queryParams = { 
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
};

api.listEditorialVideos(id, country, queryParams)
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
 id (required) | [String]| ID of the editorial video to list details for 
 country (required) | String| Show only editorial video content that is available for distribution in a certain country 
 search_id | String| The ID of the search that is related to this request 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20024](InlineResponse20024.md)

### Example response

```
"{data=[{id=10679854a, title=Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020, caption=, description=Info from Licensor: \"Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski's, and boats. He has brought joy to many people during the pandemic including those with cancer.\", byline=ViralHog/Shutterstock, keywords=[adorable, birds, goose], date_taken=2020-11-13, categories=[], aspect=1, assets={preview_mp4={url=https://editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4}, preview_webm={url=https://editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm}, thumb_jpg={url=https://editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg}, original={height=1080, width=1080, fps=30, format=avc1, file_size=82233387, display_name=HD, is_licensable=true}}}]}"
```

<a name="searchEditorialVideos"></a>
# EditorialVideoApi.searchEditorialVideos
> `InlineResponse20021 EditorialVideoApi.searchEditorialVideos(country, queryParams)`

**Search editorial video content**

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialVideoApi();

const country = "USA"; // String | Show only editorial video content that is available for distribution in a certain country

const queryParams = { 
  'query': "The Academy Awards", // String | One or more search terms separated by spaces
  'sort': "relevant", // String | Sort by
  'category': "Alone,Performing", // String | Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
  'supplier_code': ["supplier_code_example"], // [String] | Show only editorial video content from certain suppliers
  'date_start': new Date("2020-05-29"), // Date | Show only editorial video content generated on or after a specific date
  'date_end': new Date("2021-05-29"), // Date | Show only editorial video content generated on or before a specific date
  'resolution': "4k", // String | Show only editorial video content with specific resolution
  'fps': 24, // Number | Show only editorial video content generated with specific frames per second
  'per_page': 20, // Number | Number of results per page
  'cursor': "eyJ2IjoxLCJzIjoxfQ==" // String | The cursor of the page with which to start fetching results; this cursor is returned from previous requests
};

api.searchEditorialVideos(country, queryParams)
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
 category | String| Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list 
 supplier_code | [String]| Show only editorial video content from certain suppliers 
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

[InlineResponse20021](InlineResponse20021.md)

### Example response

```
"{data=[{id=10679854a, title=Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020, caption=, description=Info from Licensor: \"Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski's, and boats. He has brought joy to many people during the pandemic including those with cancer.\", byline=ViralHog/Shutterstock, keywords=[2020, adorable, birds, bizarre, canadian goose, cute, domesticated animals, entertainment, feel good, flew, flies, fly, flying, fun, goose, jet skis, nature, odd, pets, played, playing, plays, prior lake, sports, strange, sweet, usa, viralhog, virals, water sports, weird], date_taken=2020-11-13, categories=[], aspect=1, assets={preview_mp4={url=https://editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4}, preview_webm={url=https://editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm}, thumb_jpg={url=https://editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg}, original={height=1080, width=1080, fps=30, format=avc1, file_size=82233387, display_name=HD, is_licensable=true}}}], per_page=1, total_count=331, search_id=zhmz9zLmpQehdTPvg8cacQ, next=eyJ2IjoyLCJzIjoyMCwicCI6WzBdfQ==, prev=}"
```

