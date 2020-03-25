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
  "data" : [ "data", "data" ],
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
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
 asset_id (required) | String| The asset ID or upload ID to find similar videos for 
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
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
  "spellcheck_info" : "{}",
  "per_page" : 3,
  "data" : [ {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id",
    "image_type" : "image_type"
  }, {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id",
    "image_type" : "image_type"
  } ],
  "total_count" : 2,
  "page" : 9,
  "message" : "message",
  "search_id" : "search_id"
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
 language | String| Language for the keywords and categories in the response <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh", "zh-Hant"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
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
  "per_page" : 9,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 3,
  "page" : 7,
  "message" : "message"
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
  "id" : "id"
}
```

<a name="uploadImage"></a>
# ComputerVisionApi.uploadImage
> `InlineResponse201 ComputerVisionApi.uploadImage(body)`

**Upload images**

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

### Example

```javascript
const sstk = require("shutterstock-api");

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
 body (required) | [ImageCreateRequest](ImageCreateRequest.md)| The image data as a base64 string 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[InlineResponse201](InlineResponse201.md)

### Example response

```
{
  "upload_id" : "upload_id"
}
```

