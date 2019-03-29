# shutterstock-api.ContributorsApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getContributor`](ContributorsApi.md#getContributor) | `GET /v2/contributors/{contributor_id}` | Get details about a single contributor
[`getContributorCollectionItems`](ContributorsApi.md#getContributorCollectionItems) | `GET /v2/contributors/{contributor_id}/collections/{id}/items` | Get the items in contributors&#39; collections
[`getContributorCollections`](ContributorsApi.md#getContributorCollections) | `GET /v2/contributors/{contributor_id}/collections/{id}` | Get details about contributors&#39; collections
[`getContributorCollectionsList`](ContributorsApi.md#getContributorCollectionsList) | `GET /v2/contributors/{contributor_id}/collections` | List contributors&#39; collections
[`getContributorList`](ContributorsApi.md#getContributorList) | `GET /v2/contributors` | Get details about multiple contributors


<a name="getContributor"></a>
# ContributorsApi.getContributor
> `ContributorProfile ContributorsApi.getContributor(contributor_id)`

**Get details about a single contributor**

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "1653538"; // String | Contributor ID


api.getContributor(contributor_id)
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
 contributor_id (required) | String| Contributor ID 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ContributorProfile](ContributorProfile.md)

### Example response

{
  &quot;website&quot; : &quot;website&quot;,
  &quot;contributor_type&quot; : [ &quot;contributor_type&quot;, &quot;contributor_type&quot; ],
  &quot;subjects&quot; : [ &quot;subjects&quot;, &quot;subjects&quot; ],
  &quot;about&quot; : &quot;about&quot;,
  &quot;equipment&quot; : [ &quot;equipment&quot;, &quot;equipment&quot; ],
  &quot;location&quot; : &quot;location&quot;,
  &quot;styles&quot; : [ &quot;styles&quot;, &quot;styles&quot; ],
  &quot;id&quot; : &quot;id&quot;,
  &quot;display_name&quot; : &quot;display_name&quot;,
  &quot;portfolio_url&quot; : &quot;portfolio_url&quot;,
  &quot;social_media&quot; : {
    &quot;twitter&quot; : &quot;twitter&quot;,
    &quot;facebook&quot; : &quot;facebook&quot;,
    &quot;tumblr&quot; : &quot;tumblr&quot;,
    &quot;google_plus&quot; : &quot;google_plus&quot;,
    &quot;pinterest&quot; : &quot;pinterest&quot;,
    &quot;linkedin&quot; : &quot;linkedin&quot;
  }
}

<a name="getContributorCollectionItems"></a>
# ContributorsApi.getContributorCollectionItems
> `CollectionItemDataList ContributorsApi.getContributorCollectionItems(contributor_id, id, queryParams)`

**Get the items in contributors&#39; collections**

This endpoint lists the IDs of items in a contributor&#39;s collection and the date that each was added.

### Example

```javascript
const sstk = require('shutterstock-api');

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
 contributor_id (required) | String| Contributor ID 
 id (required) | String| Collection ID that belongs to the contributor 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort order <br/><br/>Valid values: "newest", "oldest"

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

<a name="getContributorCollections"></a>
# ContributorsApi.getContributorCollections
> `Collection ContributorsApi.getContributorCollections(contributor_id, id)`

**Get details about contributors&#39; collections**

This endpoint gets more detailed information about a contributor&#39;s collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /contributors/{contributor_id}/collections/{id}/items.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "800506"; // String | Contributor ID

const id = "1991678"; // String | Collection ID that belongs to the contributor


api.getContributorCollections(contributor_id, id)
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
 contributor_id (required) | String| Contributor ID 
 id (required) | String| Collection ID that belongs to the contributor 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getContributorCollectionsList"></a>
# ContributorsApi.getContributorCollectionsList
> `CollectionDataList ContributorsApi.getContributorCollectionsList(contributor_id, queryParams)`

**List contributors&#39; collections**

This endpoint lists collections based on contributor ID.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const contributor_id = "800506"; // String | Contributor ID

const queryParams = { 
  'sort': "sort_example" // String | Sort order
};

api.getContributorCollectionsList(contributor_id, queryParams)
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
 contributor_id (required) | String| Contributor ID 
 sort | String| Sort order <br/><br/>Valid values: "newest", "last_updated", "item_count"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

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

<a name="getContributorList"></a>
# ContributorsApi.getContributorList
> `ContributorProfileDataList ContributorsApi.getContributorList(id)`

**Get details about multiple contributors**

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ContributorsApi();

const id = ["[ 800506, 1653538 ]"]; // [String] | One or more contributor IDs


api.getContributorList(id)
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
 id (required) | [[String]](String.md)| One or more contributor IDs 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ContributorProfileDataList](ContributorProfileDataList.md)

### Example response

{
  &quot;per_page&quot; : 6,
  &quot;data&quot; : [ {
    &quot;website&quot; : &quot;website&quot;,
    &quot;contributor_type&quot; : [ &quot;contributor_type&quot;, &quot;contributor_type&quot; ],
    &quot;subjects&quot; : [ &quot;subjects&quot;, &quot;subjects&quot; ],
    &quot;about&quot; : &quot;about&quot;,
    &quot;equipment&quot; : [ &quot;equipment&quot;, &quot;equipment&quot; ],
    &quot;location&quot; : &quot;location&quot;,
    &quot;styles&quot; : [ &quot;styles&quot;, &quot;styles&quot; ],
    &quot;id&quot; : &quot;id&quot;,
    &quot;display_name&quot; : &quot;display_name&quot;,
    &quot;portfolio_url&quot; : &quot;portfolio_url&quot;,
    &quot;social_media&quot; : {
      &quot;twitter&quot; : &quot;twitter&quot;,
      &quot;facebook&quot; : &quot;facebook&quot;,
      &quot;tumblr&quot; : &quot;tumblr&quot;,
      &quot;google_plus&quot; : &quot;google_plus&quot;,
      &quot;pinterest&quot; : &quot;pinterest&quot;,
      &quot;linkedin&quot; : &quot;linkedin&quot;
    }
  }, {
    &quot;website&quot; : &quot;website&quot;,
    &quot;contributor_type&quot; : [ &quot;contributor_type&quot;, &quot;contributor_type&quot; ],
    &quot;subjects&quot; : [ &quot;subjects&quot;, &quot;subjects&quot; ],
    &quot;about&quot; : &quot;about&quot;,
    &quot;equipment&quot; : [ &quot;equipment&quot;, &quot;equipment&quot; ],
    &quot;location&quot; : &quot;location&quot;,
    &quot;styles&quot; : [ &quot;styles&quot;, &quot;styles&quot; ],
    &quot;id&quot; : &quot;id&quot;,
    &quot;display_name&quot; : &quot;display_name&quot;,
    &quot;portfolio_url&quot; : &quot;portfolio_url&quot;,
    &quot;social_media&quot; : {
      &quot;twitter&quot; : &quot;twitter&quot;,
      &quot;facebook&quot; : &quot;facebook&quot;,
      &quot;tumblr&quot; : &quot;tumblr&quot;,
      &quot;google_plus&quot; : &quot;google_plus&quot;,
      &quot;pinterest&quot; : &quot;pinterest&quot;,
      &quot;linkedin&quot; : &quot;linkedin&quot;
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

