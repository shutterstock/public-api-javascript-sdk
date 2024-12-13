# shutterstock-api.TestApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`echo`](TestApi.md#echo) | `GET /v2/test` | Echo text
[`validate`](TestApi.md#validate) | `GET /v2/test/validate` | Validate input


<a name="echo"></a>
# TestApi.echo
> `InlineResponse20031 TestApi.echo(queryParams)`

**Echo text**

### Example

```javascript
const sstk = require('shutterstock-api');

const api = new sstk.TestApi();

const queryParams = { 
  'text': "ok" // String | Text to echo
};

api.echo(queryParams)
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
 text | String| Text to echo, defaults to ok 

### Accepted authentication

No authentication required.

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20031](InlineResponse20031.md)

### Example response

```
"{text=Test string}"
```

<a name="validate"></a>
# TestApi.validate
> `InlineResponse20032 TestApi.validate(id, queryParams)`

**Validate input**

### Example

```javascript
const sstk = require('shutterstock-api');

const api = new sstk.TestApi();

const id = 123; // Number | Integer ID

const queryParams = { 
  'tag': ["tag_example"], // [String] | List of tags
  'user_agent': "user_agent_example" // String | User agent
};

api.validate(id, queryParams)
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
 id (required) | Number| Integer ID 
 tag | [String]| List of tags 
 user_agent | String| User agent 

### Accepted authentication

No authentication required.

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20032](InlineResponse20032.md)

### Example response

```
"{header={user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36}, query={id=123456, tag=[Test string]}}"
```

