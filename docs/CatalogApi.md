# shutterstock-api.CatalogApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addToCollection`](CatalogApi.md#addToCollection) | `POST /v2/catalog/collections/{collection_id}/items` | Add items to catalog collections
[`createCollection`](CatalogApi.md#createCollection) | `POST /v2/catalog/collections` | Create catalog collections
[`deleteCollection`](CatalogApi.md#deleteCollection) | `DELETE /v2/catalog/collections/{collection_id}` | Delete catalog collections
[`deleteFromCollection`](CatalogApi.md#deleteFromCollection) | `DELETE /v2/catalog/collections/{collection_id}/items` | Remove items from catalog collection
[`getCollections`](CatalogApi.md#getCollections) | `GET /v2/catalog/collections` | List catalog collections
[`searchCatalog`](CatalogApi.md#searchCatalog) | `GET /v2/catalog/search` | Search catalogs for assets
[`updateCollection`](CatalogApi.md#updateCollection) | `PATCH /v2/catalog/collections/{collection_id}` | Update collection metadata


<a name="addToCollection"></a>
# CatalogApi.addToCollection
> `InlineResponse2012 CatalogApi.addToCollection(collection_id, body)`

**Add items to catalog collections**

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const collection_id = "126351028"; // String | The ID of the collection to add assets to

const body = new ShutterstockApiReference.Body22(); // Body22 | Collection item attributes to add to collection


api.addToCollection(collection_id, body)
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
 collection_id (required) | String| The ID of the collection to add assets to 
 body (required) | [Body22](Body22.md)| Collection item attributes to add to collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit
Required scopes:
  - collections.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2012](InlineResponse2012.md)

### Example response

```
"{id=126351028, name=My collection, cover_asset={id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00}, total_item_count=2, created_time=2021-05-20T16:15:22-04:00, updated_time=2021-06-10T13:26:09-04:00, visibility=public, role_assignments={collection_id=126351028, roles={owners=[{id=321, type=USER, email=userOne@org.com}], editors=[{id=987, type=USER, email=userTwo@org.com}], viewers=[]}}}"
```

<a name="createCollection"></a>
# CatalogApi.createCollection
> `InlineResponse2012 CatalogApi.createCollection(body)`

**Create catalog collections**

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const body = new ShutterstockApiReference.Body20(); // Body20 | Create a catalog collection and, optionally, add items.


api.createCollection(body)
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
 body (required) | [Body20](Body20.md)| Create a catalog collection and, optionally, add items. 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit
Required scopes:
  - collections.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2012](InlineResponse2012.md)

### Example response

```
"{id=126351028, name=My collection, cover_asset={id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00}, total_item_count=2, created_time=2021-05-20T16:15:22-04:00, updated_time=2021-06-10T13:26:09-04:00, visibility=public, role_assignments={collection_id=126351028, roles={owners=[{id=321, type=USER, email=userOne@org.com}], editors=[{id=987, type=USER, email=userTwo@org.com}], viewers=[]}}}"
```

<a name="deleteCollection"></a>
# CatalogApi.deleteCollection
> `CatalogApi.deleteCollection(collection_id)`

**Delete catalog collections**

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const collection_id = "126351028"; // String | The ID of the collection to delete


api.deleteCollection(collection_id)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 collection_id (required) | String| The ID of the collection to delete 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit


### HTTP request headers

No request headers required.



### Return type

No response body.


<a name="deleteFromCollection"></a>
# CatalogApi.deleteFromCollection
> `InlineResponse2012 CatalogApi.deleteFromCollection(collection_id, body)`

**Remove items from catalog collection**

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const collection_id = "126351028"; // String | The ID of the collection to remove assets from

const body = new ShutterstockApiReference.Body23(); // Body23 | Items to remove from the collection


api.deleteFromCollection(collection_id, body)
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
 collection_id (required) | String| The ID of the collection to remove assets from 
 body (required) | [Body23](Body23.md)| Items to remove from the collection 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit
Required scopes:
  - collections.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2012](InlineResponse2012.md)

### Example response

```
"{id=126351028, name=My collection, cover_asset={id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00}, total_item_count=2, created_time=2021-05-20T16:15:22-04:00, updated_time=2021-06-10T13:26:09-04:00, visibility=public, role_assignments={collection_id=126351028, roles={owners=[{id=321, type=USER, email=userOne@org.com}], editors=[{id=987, type=USER, email=userTwo@org.com}], viewers=[]}}}"
```

<a name="getCollections"></a>
# CatalogApi.getCollections
> `InlineResponse20027 CatalogApi.getCollections(queryParams)`

**List catalog collections**

This endpoint returns a list of catalog collections.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest", // String | Sort by
  'shared': false // Boolean | Set to true to omit collections that you own and return only collections  that are shared with you
};

api.getCollections(queryParams)
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
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort by, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 shared | Boolean| Set to true to omit collections that you own and return only collections  that are shared with you, defaults to false 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20027](InlineResponse20027.md)

### Example response

```
"{page=1, per_page=20, total_count=1, data=[{id=126351028, name=My collection, cover_asset={id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00}, total_item_count=2, created_time=2021-05-20T16:15:22-04:00, updated_time=2021-06-10T13:26:09-04:00, visibility=public, role_assignments={collection_id=126351028, roles={owners=[{id=321, type=USER, email=userOne@org.com}], editors=[{id=987, type=USER, email=userTwo@org.com}], viewers=[]}}}]}"
```

<a name="searchCatalog"></a>
# CatalogApi.searchCatalog
> `InlineResponse20026 CatalogApi.searchCatalog(queryParams)`

**Search catalogs for assets**

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const queryParams = { 
  'sort': "newest", // String | Sort by
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'query': "dogs on the beach", // String | One or more search terms separated by spaces
  'collection_id': ["collection_id_example"], // [String] | Filter by collection id
  'asset_type': ["asset_type_example"] // [String] | Filter by asset type
};

api.searchCatalog(queryParams)
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
 sort | String| Sort by, defaults to newest <br/><br/>Valid values: "newest", "oldest"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 query | String| One or more search terms separated by spaces 
 collection_id | [String]| Filter by collection id 
 asset_type | [String]| Filter by asset type <br/><br/>Valid values: "image", "video", "audio", "elements", "editorial-image", "editorial-video"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.view


### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20026](InlineResponse20026.md)

### Example response

```
"{page=1, per_page=1, total_count=82, data=[{id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00, collection_ids=[126351028]}]}"
```

<a name="updateCollection"></a>
# CatalogApi.updateCollection
> `InlineResponse2012 CatalogApi.updateCollection(collection_id, body)`

**Update collection metadata**

This endpoint updates the metadata of a catalog collection.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CatalogApi();

const collection_id = "126351028"; // String | ID of collection that needs to be modified

const body = new ShutterstockApiReference.Body21(); // Body21 | Collections Metadata to update


api.updateCollection(collection_id, body)
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
 collection_id (required) | String| ID of collection that needs to be modified 
 body (required) | [Body21](Body21.md)| Collections Metadata to update 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - collections.edit
Required scopes:
  - collections.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2012](InlineResponse2012.md)

### Example response

```
"{id=126351028, name=My collection, cover_asset={id=123, asset={id=1690105108, type=image, name=Young couple playing tennis at the court}, created_time=2021-06-10T13:26:09-04:00}, total_item_count=2, created_time=2021-05-20T16:15:22-04:00, updated_time=2021-06-10T13:26:09-04:00, visibility=public, role_assignments={collection_id=126351028, roles={owners=[{id=321, type=USER, email=userOne@org.com}], editors=[{id=987, type=USER, email=userTwo@org.com}], viewers=[]}}}"
```

