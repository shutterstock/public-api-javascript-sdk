# shutterstock-api.TestApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`echo`](TestApi.md#echo) | `GET /v2/test` | Echo text
[`validate`](TestApi.md#validate) | `GET /v2/test/validate` | Validate input


<a name="echo"></a>
# TestApi.echo
> `TestEcho TestApi.echo(queryParams)`

**Echo text**

### Example

```javascript
const sstk = require('shutterstock-api');

const api = new sstk.TestApi();

const queryParams = { 
  'text': "ok" // String | Text to echo
};

api.echo(queryParams)
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
 text | String| Text to echo, defaults to ok 

### Accepted authentication

No authentication required.

### HTTP request headers



- Accept: application/json

### Return type

[TestEcho](TestEcho.md)

### Example response

{
  &quot;text&quot; : &quot;text&quot;
}

<a name="validate"></a>
# TestApi.validate
> `TestValidate TestApi.validate(id, queryParams)`

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
 id (required) | Number| Integer ID 
 tag | [[String]](String.md)| List of tags 
 user_agent | String| User agent 

### Accepted authentication

No authentication required.

### HTTP request headers



- Accept: application/json

### Return type

[TestValidate](TestValidate.md)

### Example response

{
  &quot;query&quot; : {
    &quot;id&quot; : 0,
    &quot;tag&quot; : [ &quot;tag&quot;, &quot;tag&quot; ]
  },
  &quot;header&quot; : {
    &quot;user-agent&quot; : &quot;user-agent&quot;
  }
}

