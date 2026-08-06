# shutterstock-api.GenerativeApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getGenerativeImages`](GenerativeApi.md#getGenerativeImages) | `GET /v2/generative/images/{id}` | Get generated image results
[`getGenerativeImagesHistory`](GenerativeApi.md#getGenerativeImagesHistory) | `GET /v2/generative/images/history` | List image generation history
[`getGenerativeInputs`](GenerativeApi.md#getGenerativeInputs) | `GET /v2/generative/inputs` | List generative inputs
[`licenseGenerativeImages`](GenerativeApi.md#licenseGenerativeImages) | `POST /v2/generative/images/licenses` | License generated images
[`postGenerativeImages`](GenerativeApi.md#postGenerativeImages) | `POST /v2/generative/images` | Generate images from a text prompt
[`submitGenerativeImageForIpReview`](GenerativeApi.md#submitGenerativeImageForIpReview) | `POST /v2/generative/images/review/{id}` | Submit a generated image for IP review


<a name="getGenerativeImages"></a>
# GenerativeApi.getGenerativeImages
> `InlineResponse20027 GenerativeApi.getGenerativeImages(id)`

**Get generated image results**

Gets the status, metadata, and preview links for a previously requested image generation.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();

const id = "id_example"; // String | The UUID of the generation request.


api.getGenerativeImages(id)
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
 id (required) | String| The UUID of the generation request. 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20027](InlineResponse20027.md)

### Example response

```
"{id=0136648a-d739-4c00-8af9-92b1a31db567, status=COMPLETED, prompt=dog playing a fiddle, model=null, aspect_ratio=1:1, style=null, is_private=true, can_register_assets=true, assets=[{id=asset-generation-0136648a-d739-4c00-8af9-92b1a31db567-0, description=Expressionist artistic image of dog playing a fiddle, image_id=4302402011, ai_ip_review={status=pending, rejection_reasons=[]}, small={url=https://generated-assets-cdn.qa.shutterstock.com/asset-generation-0136648a-d739-4c00-8af9-92b1a31db567/asset-generation-0136648a-d739-4c00-8af9-92b1a31db567-0-small.jpg, height=512, width=512}, watermarked={url=https://generated-assets-cdn.qa.shutterstock.com/asset-generation-0136648a-d739-4c00-8af9-92b1a31db567/asset-generation-0136648a-d739-4c00-8af9-92b1a31db567-0-watermarked.jpg, height=1024, width=1024}, styles=[{id=expressionist, name=Expressionist}]}]}"
```

<a name="getGenerativeImagesHistory"></a>
# GenerativeApi.getGenerativeImagesHistory
> `InlineResponse20028 GenerativeApi.getGenerativeImagesHistory(queryParams)`

**List image generation history**

Returns image generation history for the authenticated user.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();

const queryParams = { 
  'page': 1, // Number | Page number of the results to return.
  'per_page': 20, // Number | Number of results to return per page.
  'sort_order': "desc", // String | Sort order for generation request time.
  'prompt': "prompt_example", // String | Search generation history by prompt text.
  'status': "status_example", // String | Filter generation history by generation status.
  'generation_type': "generation_type_example" // String | Filter generation history by image generation category.
};

api.getGenerativeImagesHistory(queryParams)
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
 page | Number| Page number of the results to return., defaults to 1 
 per_page | Number| Number of results to return per page., defaults to 20 
 sort_order | String| Sort order for generation request time., defaults to desc <br/><br/>Valid values: "asc", "desc"
 prompt | String| Search generation history by prompt text. 
 status | String| Filter generation history by generation status. <br/><br/>Valid values: "COMPLETED", "FAILED", "GENERATING", "PENDING"
 generation_type | String| Filter generation history by image generation category. <br/><br/>Valid values: "image-generation", "image-variation", "image-smart-edit"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InlineResponse20028](InlineResponse20028.md)

### Example response

```
"{data=[{id=437220fe-0a83-4fcf-899f-4ec7829bed90, status=COMPLETED, request_time=2026-05-05T10:30:47.747000+00:00, is_private=false, can_register_assets=true, error_code=null, generation_type=image-generation, prompt=dog playing a banjo, aspect_ratio=1:1, style=null, model=null, assets=[{id=asset-generation-437220fe-0a83-4fcf-899f-4ec7829bed90-0, description=Low poly 3D image of dog playing a banjo, image_id=4302402011, ai_ip_review={status=pending, rejection_reasons=[]}, small={url=https://generated-assets-cdn.qa.shutterstock.com/asset-generation-437220fe-0a83-4fcf-899f-4ec7829bed90/asset-generation-437220fe-0a83-4fcf-899f-4ec7829bed90-0-small.jpg, height=512, width=512}, watermarked={url=https://generated-assets-cdn.qa.shutterstock.com/asset-generation-437220fe-0a83-4fcf-899f-4ec7829bed90/asset-generation-437220fe-0a83-4fcf-899f-4ec7829bed90-0-small.jpg, height=512, width=512}}]}], page=3, per_page=2, total_count=5}"
```

<a name="getGenerativeInputs"></a>
# GenerativeApi.getGenerativeInputs
> `InlineResponse20025 GenerativeApi.getGenerativeInputs()`

**List generative inputs**

Lists supported values that can be used as request parameters for generative endpoints. The text_to_image values apply to POST /v2/generative/images.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();
api.getGenerativeInputs()
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

[InlineResponse20025](InlineResponse20025.md)

### Example response

```
"{text_to_image={models=[{id=GEMINI_PRO_v1, name=Gemini 3 Pro Image, description=Aka \"Nano Banana Pro\", Google's latest state of the art model.}], styles=[{id=indoor, name=Indoor, description=Inspired by images captured within a building or structure.}]}}"
```

<a name="licenseGenerativeImages"></a>
# GenerativeApi.licenseGenerativeImages
> `InlineResponse20026 GenerativeApi.licenseGenerativeImages(body, queryParams)`

**License generated images**

Registers generated image assets and licenses the registered images.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();

const body = new ShutterstockApiReference.Body20(); // Body20 | List of generated image assets to register and license.

const queryParams = { 
  'subscription_id': "subscription_id_example", // String | Subscription ID to use to license the image
  'size': "huge" // String | Image size
};

api.licenseGenerativeImages(body, queryParams)
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
 body (required) | [Body20](Body20.md)| List of generated image assets to register and license. 
 subscription_id | String| Subscription ID to use to license the image 
 size | String| Image size, defaults to huge <br/><br/>Valid values: "small", "medium", "huge", "custom"

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) Required scopes:
  - licenses.create
Required scopes:
  - purchases.view


### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse20026](InlineResponse20026.md)

### Example response

```
"{data=[{asset_id=asset-generation-e6706351-3624-4c4b-bc67-dbe8cd7ec66b-0, image_id=4302402011, download={url=https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_4302402011.jpg}, allotment_charge=1, license_id=e10278d7b73a59bdb1fd3710af40f01815}], message=Generated assets were licensed. Image metadata can now be retrieved with GET /images/4302402011.}"
```

<a name="postGenerativeImages"></a>
# GenerativeApi.postGenerativeImages
> `InlineResponse2011 GenerativeApi.postGenerativeImages(body)`

**Generate images from a text prompt**

Starts an image generation request and returns a tracking ID.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();

const body = new ShutterstockApiReference.Body19(); // Body19 | Payload to request image generation


api.postGenerativeImages(body)
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
 body (required) | [Body19](Body19.md)| Payload to request image generation 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse2011](InlineResponse2011.md)

### Example response

```
"{id=e5cf9549-67c2-4312-a3c3-d2ac6263e6b6}"
```

<a name="submitGenerativeImageForIpReview"></a>
# GenerativeApi.submitGenerativeImageForIpReview
> `{'String': Object} GenerativeApi.submitGenerativeImageForIpReview(id)`

**Submit a generated image for IP review**

Registers a generated image asset and submits the registered image for IP review.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.GenerativeApi();

const id = "id_example"; // String | Generated image asset ID to submit for IP review.


api.submitGenerativeImageForIpReview(id)
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
 id (required) | String| Generated image asset ID to submit for IP review. 

### Accepted authentication


- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

{'String': Object}

### Example response

```
{
  "asset_id" : "asset-generation-e6706351-3624-4c4b-bc67-dbe8cd7ec66b-0",
  "image_id" : "4302402011",
  "ip_review_submitted" : true,
  "message" : "Generated asset was submitted for IP review. Review may take up to 2 days. Check status with GET /images/4302402011?view=full."
}
```

