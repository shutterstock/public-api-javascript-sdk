# ShutterstockApiReference.UsersApi

All URIs are relative to `https://api.shutterstock.com`

Method | HTTP request | Description
------------- | ------------- | -------------
[`createUser`](UsersApi.md#createUser) | `POST /v2/user` | Register user
[`getAccessToken`](UsersApi.md#getAccessToken) | `GET /v2/user/access_token` | Get access token details
[`getUser`](UsersApi.md#getUser) | `GET /v2/user` | Get user details
[`getUserSubsciptionList`](UsersApi.md#getUserSubsciptionList) | `GET /v2/user/subscriptions` | List user subscriptions


<a name="createUser"></a>
# UsersApi.createUser
> `UserPostResponse UsersApi.createUser(body)`

**Register user**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();

const body = new ShutterstockApiReference.UserPostRequest(); // UserPostRequest | User details


api.createUser(body)
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
 body (required) | [UserPostRequest](UserPostRequest.md)| User details 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[UserPostResponse](UserPostResponse.md)

### Example response

{
  &quot;id&quot; : &quot;id&quot;
}

<a name="getAccessToken"></a>
# UsersApi.getAccessToken
> `AccessTokenDetails UsersApi.getAccessToken()`

**Get access token details**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getAccessToken()
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

[AccessTokenDetails](AccessTokenDetails.md)

### Example response

{
  &quot;user_id&quot; : &quot;user_id&quot;,
  &quot;organization_id&quot; : &quot;organization_id&quot;,
  &quot;realm&quot; : &quot;customer&quot;,
  &quot;scopes&quot; : [ &quot;scopes&quot;, &quot;scopes&quot; ],
  &quot;customer_id&quot; : &quot;customer_id&quot;,
  &quot;expires_in&quot; : 0,
  &quot;client_id&quot; : &quot;client_id&quot;,
  &quot;contributor_id&quot; : &quot;contributor_id&quot;,
  &quot;username&quot; : &quot;username&quot;
}

<a name="getUser"></a>
# UsersApi.getUser
> `UserDetails UsersApi.getUser()`

**Get user details**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUser()
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not accept any parameters.

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - user.view


### HTTP request headers



- Accept: application/json

### Return type

[UserDetails](UserDetails.md)

### Example response

{
  &quot;only_enhanced_license&quot; : true,
  &quot;is_premier_parent&quot; : true,
  &quot;is_premier&quot; : true,
  &quot;last_name&quot; : &quot;last_name&quot;,
  &quot;premier_permissions&quot; : [ &quot;premier_permissions&quot;, &quot;premier_permissions&quot; ],
  &quot;language&quot; : &quot;language&quot;,
  &quot;only_sensitive_use&quot; : true,
  &quot;full_name&quot; : &quot;full_name&quot;,
  &quot;organization_id&quot; : &quot;organization_id&quot;,
  &quot;id&quot; : &quot;id&quot;,
  &quot;customer_id&quot; : &quot;customer_id&quot;,
  &quot;first_name&quot; : &quot;first_name&quot;,
  &quot;email&quot; : &quot;email&quot;,
  &quot;contributor_id&quot; : &quot;contributor_id&quot;,
  &quot;username&quot; : &quot;username&quot;
}

<a name="getUserSubsciptionList"></a>
# UsersApi.getUserSubsciptionList
> `SubscriptionDataList UsersApi.getUserSubsciptionList()`

**List user subscriptions**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUserSubsciptionList()
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
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

[SubscriptionDataList](SubscriptionDataList.md)

### Example response

{
  &quot;per_page&quot; : 5,
  &quot;data&quot; : [ {
    &quot;license&quot; : &quot;license&quot;,
    &quot;metadata&quot; : { },
    &quot;formats&quot; : [ {
      &quot;size&quot; : &quot;size&quot;,
      &quot;media_type&quot; : &quot;image&quot;,
      &quot;format&quot; : &quot;format&quot;,
      &quot;min_resolution&quot; : 1,
      &quot;description&quot; : &quot;description&quot;
    }, {
      &quot;size&quot; : &quot;size&quot;,
      &quot;media_type&quot; : &quot;image&quot;,
      &quot;format&quot; : &quot;format&quot;,
      &quot;min_resolution&quot; : 1,
      &quot;description&quot; : &quot;description&quot;
    } ],
    &quot;expiration_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;allotment&quot; : {
      &quot;start_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;downloads_left&quot; : 0,
      &quot;downloads_limit&quot; : 6,
      &quot;end_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;
    },
    &quot;description&quot; : &quot;description&quot;,
    &quot;id&quot; : &quot;id&quot;,
    &quot;price_per_download&quot; : {
      &quot;local_amount&quot; : 6.02745618307040320615897144307382404804229736328125,
      &quot;local_currency&quot; : &quot;local_currency&quot;
    }
  }, {
    &quot;license&quot; : &quot;license&quot;,
    &quot;metadata&quot; : { },
    &quot;formats&quot; : [ {
      &quot;size&quot; : &quot;size&quot;,
      &quot;media_type&quot; : &quot;image&quot;,
      &quot;format&quot; : &quot;format&quot;,
      &quot;min_resolution&quot; : 1,
      &quot;description&quot; : &quot;description&quot;
    }, {
      &quot;size&quot; : &quot;size&quot;,
      &quot;media_type&quot; : &quot;image&quot;,
      &quot;format&quot; : &quot;format&quot;,
      &quot;min_resolution&quot; : 1,
      &quot;description&quot; : &quot;description&quot;
    } ],
    &quot;expiration_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;allotment&quot; : {
      &quot;start_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;downloads_left&quot; : 0,
      &quot;downloads_limit&quot; : 6,
      &quot;end_time&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;
    },
    &quot;description&quot; : &quot;description&quot;,
    &quot;id&quot; : &quot;id&quot;,
    &quot;price_per_download&quot; : {
      &quot;local_amount&quot; : 6.02745618307040320615897144307382404804229736328125,
      &quot;local_currency&quot; : &quot;local_currency&quot;
    }
  } ],
  &quot;total_count&quot; : 2,
  &quot;page&quot; : 5,
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

