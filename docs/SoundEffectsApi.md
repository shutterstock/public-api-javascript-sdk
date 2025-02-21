# shutterstock-api.SoundEffectsApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`downloadSfx`](SoundEffectsApi.md#downloadSfx) | `POST /v2/sfx/licenses/{id}/downloads` | Download sound effects
[`getSfxDetails`](SoundEffectsApi.md#getSfxDetails) | `GET /v2/sfx/{id}` | Get details about sound effects
[`getSfxLicenseList`](SoundEffectsApi.md#getSfxLicenseList) | `GET /v2/sfx/licenses` | List sound effects licenses
[`getSfxListDetails`](SoundEffectsApi.md#getSfxListDetails) | `GET /v2/sfx` | List details about sound effects
[`licensesSFX`](SoundEffectsApi.md#licensesSFX) | `POST /v2/sfx/licenses` | License sound effects
[`searchSFX`](SoundEffectsApi.md#searchSFX) | `GET /v2/sfx/search` | Search for sound effects


<a name="downloadSfx"></a>
# SoundEffectsApi.downloadSfx
> `InlineResponse20013 SoundEffectsApi.downloadSfx(id)`

**Download sound effects**

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const id = "123"; // String | License ID


api.downloadSfx(id)
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

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.view


### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20013](InlineResponse20013.md)

### Example response

```
"{url=https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg}"
```

<a name="getSfxDetails"></a>
# SoundEffectsApi.getSfxDetails
> `InlineResponse20012 SoundEffectsApi.getSfxDetails(id, queryParams)`

**Get details about sound effects**

This endpoint shows information about a sound effect.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const id = 442583; // Number | Audio track ID

const queryParams = { 
  'language': "language_example", // String | Language for the keywords and categories in the response
  'view': "minimal", // String | Amount of detail to render in the response
  'library': "shutterstock", // String | Which library to fetch from
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
};

api.getSfxDetails(id, queryParams)
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
 id (required) | Number| Audio track ID 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 library | String| Which library to fetch from <br/><br/>Valid values: "shutterstock", "premier", "premiumbeat"
 search_id | String| The ID of the search that is related to this request 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20012](InlineResponse20012.md)

### Example response

```
"{id=123, media_type=sfx, contributor={id=1234}}"
```

<a name="getSfxLicenseList"></a>
# SoundEffectsApi.getSfxLicenseList
> `Object SoundEffectsApi.getSfxLicenseList(queryParams)`

**List sound effects licenses**

This endpoint lists existing licenses.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const queryParams = { 
  'sfx_id': "12345678", // String | Show licenses for the specified sound effects ID
  'license': "standard", // String | Show sound effects that are available with the specified license, such as `standard` or `enhanced`
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort order
  'username': "aUniqueUsername", // String | Filter licenses by username of licensee
  'start_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created on or after the specified date
  'end_date': new Date("2021-03-29T13:25:13.521Z"), // Date | Show licenses created before the specified date
  'license_id': "license_id_example", // String | Filter by the license ID
  'download_availability': "all", // String | Filter licenses by download availability
  'team_history': false // Boolean | Set to true to see license history for all members of your team.
};

api.getSfxLicenseList(queryParams)
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
 sfx_id | String| Show licenses for the specified sound effects ID 
 license | String| Show sound effects that are available with the specified license, such as `standard` or `enhanced` 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 username | String| Filter licenses by username of licensee 
 start_date | Date| Show licenses created on or after the specified date 
 end_date | Date| Show licenses created before the specified date 
 license_id | String| Filter by the license ID 
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

<a name="getSfxListDetails"></a>
# SoundEffectsApi.getSfxListDetails
> `Object SoundEffectsApi.getSfxListDetails(id, queryParams)`

**List details about sound effects**

This endpoint shows information about sound effects.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const id = ["[1110335168, 465011609]"]; // [String] | One or more sound effect IDs

const queryParams = { 
  'view': "minimal", // String | Amount of detail to render in the response
  'language': "language_example", // String | Language for the keywords and categories in the response
  'library': "shutterstock", // String | Which library to fetch from
  'search_id': "00000000-0000-0000-0000-000000000000" // String | The ID of the search that is related to this request
};

api.getSfxListDetails(id, queryParams)
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
 id (required) | [String]| One or more sound effect IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 library | String| Which library to fetch from <br/><br/>Valid values: "shutterstock", "premier", "premiumbeat"
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
    "id" : "123",
    "media_type" : "sfx",
    "contributor" : {
      "id" : "1234"
    }
  } ]
}
```

<a name="licensesSFX"></a>
# SoundEffectsApi.licensesSFX
> `Object SoundEffectsApi.licensesSFX(body)`

**License sound effects**

This endpoint licenses sounds effect assets.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const body = new ShutterstockApiReference.Body16(); // Body16 | 


api.licensesSFX(body)
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
 body (required) | [Body16](Body16.md)|  

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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
      "url" : "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp3"
    },
    "sfx_id" : "123456789"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455
}
```

<a name="searchSFX"></a>
# SoundEffectsApi.searchSFX
> `InlineResponse20011 SoundEffectsApi.searchSFX(queryParams)`

**Search for sound effects**

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.SoundEffectsApi();

const queryParams = { 
  'added_date': new Date("2022-09-23"), // Date | Show sound effects added on the specified date
  'added_date_start': new Date("2021-03-29"), // Date | Show sound effects added on or after the specified date
  'added_date_end': new Date("2021-03-29"), // Date | Show sound effects added before the specified date
  'duration': 180, // Number | Show sound effects with the specified duration in seconds
  'duration_from': 30, // Number | Show sound effects with the specified duration or longer in seconds
  'duration_to': 180, // Number | Show sound effects with the specified duration or shorter in seconds
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'query': "drum", // String | One or more search terms separated by spaces
  'safe': true, // Boolean | Enable or disable safe search
  'sort': "popular", // String | Sort by
  'view': "minimal", // String | Amount of detail to render in the response
  'language': "language_example" // String | Set query and result language (uses Accept-Language header if not set)
};

api.searchSFX(queryParams)
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
 added_date | Date| Show sound effects added on the specified date 
 added_date_start | Date| Show sound effects added on or after the specified date 
 added_date_end | Date| Show sound effects added before the specified date 
 duration | Number| Show sound effects with the specified duration in seconds 
 duration_from | Number| Show sound effects with the specified duration or longer in seconds 
 duration_to | Number| Show sound effects with the specified duration or shorter in seconds 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 query | String| One or more search terms separated by spaces 
 safe | Boolean| Enable or disable safe search, defaults to true 
 sort | String| Sort by, defaults to popular <br/><br/>Valid values: "popular", "newest", "relevance", "random", "oldest"
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20011](InlineResponse20011.md)

### Example response

```
"{data=[{id=123, description=User interface calculations, scanning, thinking, text displayed on screen. Screen gak or garble., assets={preview_mp3={url=https://cdn.shutterstock.com/shutterstock/sfx/21230/preview_ecom_ster/heavy-duty-interface-feedback.mp3}, waveform={url=https://cdn.shutterstock.com/shutterstock/sfx/21230/wvfm_img/heavy-duty-interface-feedback.png}}, contributor={id=321402911}, title=Heavy Duty Interface Feedback, media_type=sfx, updated_time=2022-08-04T15:11:15.711Z, added_date=2022-07-29}], total_count=14881, search_id=e6f84c4c-ffdd-499b-ad89-72c65a896ead}"
```

