# shutterstock-api.UsersApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getAccessToken`](UsersApi.md#getAccessToken) | `GET /v2/user/access_token` | Get access token details
[`getUser`](UsersApi.md#getUser) | `GET /v2/user` | Get user details
[`getUserSubscriptionList`](UsersApi.md#getUserSubscriptionList) | `GET /v2/user/subscriptions` | List user subscriptions


<a name="getAccessToken"></a>
# UsersApi.getAccessToken
> `InlineResponse20029 UsersApi.getAccessToken()`

**Get access token details**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getAccessToken()
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


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20029](InlineResponse20029.md)

### Example response

```
"{client_id=c456b-26230-fa8ed-d19ab-05ce2-bf0aa, customer_id=123456789, realm=customer, user_id=123456789, username=jdoe, expires_in=3600, scopes=[collections.edit, collections.view, licenses.create, licenses.view, purchases.view, user.view]}"
```

<a name="getUser"></a>
# UsersApi.getUser
> `InlineResponse20028 UsersApi.getUser()`

**Get user details**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUser()
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


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20028](InlineResponse20028.md)

### Example response

```
"{id=101782699, username=jdoe, full_name=John Doe, first_name=John, last_name=Doe, language=es, contributor_id=212}"
```

<a name="getUserSubscriptionList"></a>
# UsersApi.getUserSubscriptionList
> `Object UsersApi.getUserSubscriptionList()`

**List user subscriptions**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUserSubscriptionList()
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


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - purchases.view


### HTTP request headers



- Accept: application/json

### Return type

Object

### Example response

```
{
  "data" : [ {
    "allotment" : {
      "downloads_left" : 5,
      "downloads_limit" : 10,
      "end_time" : "2020-05-29T12:10:22-05:00",
      "start_time" : "2020-05-29T12:10:22-05:00"
    },
    "description" : "Annual Subscription",
    "expiration_time" : "2020-05-29T12:10:22-05:00",
    "formats" : [ {
      "media_type" : "image",
      "description" : "Small",
      "format" : "jpg",
      "min_resolution" : 500,
      "size" : "small"
    }, {
      "media_type" : "image",
      "description" : "Med",
      "format" : "jpg",
      "min_resolution" : 1000,
      "size" : "medium"
    }, {
      "media_type" : "image",
      "description" : "Vector",
      "format" : "eps",
      "size" : "vector"
    } ],
    "id" : "s8906043",
    "license" : "standard",
    "asset_type" : "images",
    "metadata" : { }
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123455
}
```

