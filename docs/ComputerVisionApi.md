# shutterstock-api.ComputerVisionApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getKeywords`](ComputerVisionApi.md#getKeywords) | `GET /v2/cv/keywords` | List suggested keywords
[`getSimilarImages`](ComputerVisionApi.md#getSimilarImages) | `GET /v2/cv/similar/images` | List similar images
[`getSimilarVideos`](ComputerVisionApi.md#getSimilarVideos) | `GET /v2/cv/similar/videos` | List similar videos
[`uploadEphemeralImage`](ComputerVisionApi.md#uploadEphemeralImage) | `POST /v2/images` | Upload ephemeral images
[`uploadImage`](ComputerVisionApi.md#uploadImage) | `POST /v2/cv/images` | Upload images


<a name="getKeywords"></a>
# ComputerVisionApi.getKeywords
> `KeywordDataList ComputerVisionApi.getKeywords(asset_id)`

**List suggested keywords**

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

### Example

```javascript
const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getKeywords(data.upload_id);
  })
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
 asset_id (required) | [Object](.md)| The asset ID or upload ID to suggest keywords for 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[KeywordDataList](KeywordDataList.md)

### Example response

```
{
  "data" : [ "nature", "wildlife", "animal", "cute", "bamboo", "panda", "china", "wild", "endangered", "black", "bear" ]
}
```

<a name="getSimilarImages"></a>
# ComputerVisionApi.getSimilarImages
> `ImageSearchResults ComputerVisionApi.getSimilarImages(asset_id, queryParams)`

**List similar images**

This endpoint returns images that are visually similar to an image that you specify or upload.

### Example

```javascript
const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getSimilarImages(data.upload_id);
  })
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
 asset_id (required) | String| The asset ID or upload ID to find similar images for 
 license | [String]| Show only images with the specified license, defaults to ["commercial"] <br/><br/>Valid values: "commercial", "editorial"
 safe | Boolean| Enable or disable safe search, defaults to true 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[ImageSearchResults](ImageSearchResults.md)

### Example response

```
{
  "data" : [ {
    "id" : "1572478477",
    "aspect" : 1.5,
    "assets" : {
      "preview" : {
        "height" : 300,
        "url" : "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 450
      },
      "small_thumb" : {
        "height" : 67,
        "url" : "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 100
      },
      "large_thumb" : {
        "height" : 100,
        "url" : "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 150
      },
      "huge_thumb" : {
        "height" : 260,
        "url" : "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
        "width" : 390
      },
      "preview_1000" : {
        "url" : "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
        "width" : 1000,
        "height" : 667
      },
      "preview_1500" : {
        "url" : "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
        "width" : 1500,
        "height" : 1000
      }
    },
    "contributor" : {
      "id" : "250738318"
    },
    "description" : "cropped image of woman gardening",
    "image_type" : "photo",
    "has_model_release" : true,
    "media_type" : "image"
  } ],
  "page" : 1,
  "per_page" : 5,
  "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10",
  "spellcheck_info" : { },
  "total_count" : 45
}
```

<a name="getSimilarVideos"></a>
# ComputerVisionApi.getSimilarVideos
> `VideoSearchResults ComputerVisionApi.getSimilarVideos(asset_id, queryParams)`

**List similar videos**

This endpoint returns videos that are visually similar to an image that you specify or upload.

### Example

```javascript
const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getSimilarVideos(data.upload_id);
  })
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
 asset_id (required) | String| The asset ID or upload ID to find similar videos for 
 license | [String]| Show only videos with the specified license, defaults to ["commercial"] <br/><br/>Valid values: "commercial", "editorial"
 safe | Boolean| Enable or disable safe search, defaults to true 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "gu", "he", "hi", "hr", "hu", "id", "it", "ja", "kn", "ko", "ml", "mr", "nb", "nl", "or", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[VideoSearchResults](VideoSearchResults.md)

### Example response

```
{
  "data" : [ {
    "id" : "1033184651",
    "aspect" : 1.778,
    "aspect_ratio" : "16:9",
    "assets" : {
      "thumb_webm" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
      },
      "thumb_mp4" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
      },
      "preview_webm" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
      },
      "preview_mp4" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
      },
      "thumb_jpg" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
      },
      "preview_jpg" : {
        "url" : "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
      }
    },
    "contributor" : {
      "id" : "4411978"
    },
    "description" : "Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness",
    "duration" : 14.081,
    "has_model_release" : true,
    "media_type" : "video"
  } ],
  "page" : 1,
  "per_page" : 5,
  "total_count" : 123,
  "search_id" : "749090bb-2967-4a20-b22e-c800dc845e10"
}
```

<a name="uploadEphemeralImage"></a>
# ComputerVisionApi.uploadEphemeralImage
> `ImageCreateResponse ComputerVisionApi.uploadEphemeralImage(body)`

**Upload ephemeral images**

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

### Example

```javascript
const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

const queryParams = {
  "page": 1,
  "per_page": 20,
  "view": "minimal"
};

imagesApi.uploadEphemeralImage(body)
  .then((data) => {
    console.log(data.id);
    return imagesApi.getSimilarImages(data.id, queryParams);
  })
  .then((similarImageData) => {
    console.log(similarImageData);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [ImageCreateRequest](ImageCreateRequest.md)| The image data in JPEG or PNG format 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[ImageCreateResponse](ImageCreateResponse.md)

### Example response

```
{
  "id" : "Udb14e1c3540bdbf82b4b3fe12d3a44f2"
}
```

<a name="uploadImage"></a>
# ComputerVisionApi.uploadImage
> `ComputerVisionImageCreateResponse ComputerVisionApi.uploadImage(body)`

**Upload images**

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

### Example

```javascript
const sstk = require("shutterstock-api");
const fs = require("fs");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
  });

```


### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [ImageCreateRequest](ImageCreateRequest.md)| A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[ComputerVisionImageCreateResponse](ComputerVisionImageCreateResponse.md)

### Example response

```
{
  "upload_id" : "Udb14e1c3540bdbf82b4b3fe12d3a44f2"
}
```

