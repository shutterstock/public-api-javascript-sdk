# shutterstock-api.ContributorsApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getContributor`](ContributorsApi.md#getContributor) | `GET /v2/contributors/{contributor_id}` | Get details about a single contributor
[`getContributorCollectionItems`](ContributorsApi.md#getContributorCollectionItems) | `GET /v2/contributors/{contributor_id}/collections/{id}/items` | Get the items in contributors' collections
[`getContributorCollections`](ContributorsApi.md#getContributorCollections) | `GET /v2/contributors/{contributor_id}/collections/{id}` | Get details about contributors' collections
[`getContributorCollectionsList`](ContributorsApi.md#getContributorCollectionsList) | `GET /v2/contributors/{contributor_id}/collections` | List contributors' collections
[`getContributorList`](ContributorsApi.md#getContributorList) | `GET /v2/contributors` | Get details about multiple contributors


<a name="getContributor"></a>
# ContributorsApi.getContributor
> `ContributorProfile ContributorsApi.getContributor(contributor_id)`

**Get details about a single contributor**

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "1653538"; // String | Contributor ID


api.getContributor(contributor_id)
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
 contributor_id (required) | String| Contributor ID 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ContributorProfile](ContributorProfile.md)

### Example response

```
{
  "about" : "John Doe's photographs",
  "contributor_type" : [ "photographer" ],
  "display_name" : "John Doe",
  "equipment" : [ "Nikon", "Fuji" ],
  "id" : "12345678",
  "location" : "US",
  "portfolio_url" : "https://www.shutterstock.com/g/jdoe",
  "social_media" : {
    "facebook" : "http://example.com/jdoe",
    "google_plus" : "http://example.com/jdoe",
    "linkedin" : "http://example.com/jdoe",
    "pinterest" : "http://example.com/jdoe",
    "tumblr" : "http://example.com/jdoe",
    "twitter" : "http://example.com/jdoe"
  },
  "styles" : [ "landscape", "nature", "footage_travel" ],
  "subjects" : [ "animals", "landmarks", "nature", "objects", "recreation" ],
  "website" : "http://example.com/profiles/jdoe"
}
```

<a name="getContributorCollectionItems"></a>
# ContributorsApi.getContributorCollectionItems
> `CollectionItemDataList ContributorsApi.getContributorCollectionItems(contributor_id, id, queryParams)`

**Get the items in contributors' collections**

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "800506"; // String | Contributor ID

const id = "1991678"; // String | Collection ID that belongs to the contributor

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "sort_example" // String | Sort order
};

api.getContributorCollectionItems(contributor_id, id, queryParams)
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
 contributor_id (required) | String| Contributor ID 
 id (required) | String| Collection ID that belongs to the contributor 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order <br/><br/>Valid values: "newest", "oldest"

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

<a name="getContributorCollections"></a>
# ContributorsApi.getContributorCollections
> `Collection ContributorsApi.getContributorCollections(contributor_id, id)`

**Get details about contributors' collections**

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "800506"; // String | Contributor ID

const id = "1991678"; // String | Collection ID that belongs to the contributor


api.getContributorCollections(contributor_id, id)
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
 contributor_id (required) | String| Contributor ID 
 id (required) | String| Collection ID that belongs to the contributor 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getContributorCollectionsList"></a>
# ContributorsApi.getContributorCollectionsList
> `CollectionDataList ContributorsApi.getContributorCollectionsList(contributor_id, queryParams)`

**List contributors' collections**

This endpoint lists collections based on contributor ID.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "800506"; // String | Contributor ID

const queryParams = { 
  'sort': "sort_example" // String | Sort order
};

api.getContributorCollectionsList(contributor_id, queryParams)
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
 contributor_id (required) | String| Contributor ID 
 sort | String| Sort order <br/><br/>Valid values: "newest", "last_updated", "item_count"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getContributorList"></a>
# ContributorsApi.getContributorList
> `ContributorProfileDataList ContributorsApi.getContributorList(id)`

**Get details about multiple contributors**

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const id = ["[800506, 1653538]"]; // [String] | One or more contributor IDs


api.getContributorList(id)
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
 id (required) | [String]| One or more contributor IDs 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ContributorProfileDataList](ContributorProfileDataList.md)

### Example response

```
{
  "data" : [ {
    "about" : "John Doe's photographs",
    "contributor_type" : [ "photographer" ],
    "display_name" : "John Doe",
    "equipment" : [ "Nikon", "Fuji" ],
    "id" : "12345678",
    "location" : "US",
    "portfolio_url" : "https://www.shutterstock.com/g/jdoe",
    "social_media" : {
      "facebook" : "http://example.com/jdoe",
      "google_plus" : "http://example.com/jdoe",
      "linkedin" : "http://example.com/jdoe",
      "pinterest" : "http://example.com/jdoe",
      "tumblr" : "http://example.com/jdoe",
      "twitter" : "http://example.com/jdoe"
    },
    "styles" : [ "landscape", "nature", "footage_travel" ],
    "subjects" : [ "animals", "landmarks", "nature", "objects", "recreation" ],
    "website" : "http://example.com/profiles/jdoe"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 15
}
```

