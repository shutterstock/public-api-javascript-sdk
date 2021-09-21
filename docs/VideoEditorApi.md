# shutterstock-api.VideoEditorApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`authVideoEditor`](VideoEditorApi.md#authVideoEditor) | `POST /v2/editor/auth` | Get video editor access tokens
[`registerEditorInstance`](VideoEditorApi.md#registerEditorInstance) | `POST /v2/editor/customers` | Register instances of the video editor
[`updateEditorInstance`](VideoEditorApi.md#updateEditorInstance) | `PATCH /v2/editor/customers` | Update instances of the video editor


<a name="authVideoEditor"></a>
# VideoEditorApi.authVideoEditor
> `VideoEditorTokenResponse VideoEditorApi.authVideoEditor(queryParams)`

**Get video editor access tokens**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideoEditorApi();

const queryParams = { 
  'body': new ShutterstockApiReference.VideoEditorTokenRequest() // VideoEditorTokenRequest | 
};

api.authVideoEditor(queryParams)
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
 body | [VideoEditorTokenRequest](VideoEditorTokenRequest.md)|  

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[VideoEditorTokenResponse](VideoEditorTokenResponse.md)

### Example response

```
{
  "token" : {
    "value" : "123456789.ABCDEFHIJ.A1B2C3D4",
    "expirationDate" : 1624559827
  }
}
```

<a name="registerEditorInstance"></a>
# VideoEditorApi.registerEditorInstance
> `VideoEditorApi.registerEditorInstance(queryParams)`

**Register instances of the video editor**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideoEditorApi();

const queryParams = { 
  'body': new ShutterstockApiReference.RegisterVideoEditorRequest() // RegisterVideoEditorRequest | 
};

api.registerEditorInstance(queryParams)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body | [RegisterVideoEditorRequest](RegisterVideoEditorRequest.md)|  

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


<a name="updateEditorInstance"></a>
# VideoEditorApi.updateEditorInstance
> `VideoEditorApi.updateEditorInstance(queryParams)`

**Update instances of the video editor**

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideoEditorApi();

const queryParams = { 
  'body': new ShutterstockApiReference.UpdateVideoEditorRequest() // UpdateVideoEditorRequest | 
};

api.updateEditorInstance(queryParams)
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body | [UpdateVideoEditorRequest](UpdateVideoEditorRequest.md)|  

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json


### Return type

No response body.


