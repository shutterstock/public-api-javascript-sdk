# shutterstock-api.Body19

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **String** | The text prompt to generate images from. Must contain at least one non-whitespace character and be at most 1800 characters. | 
**aspect_ratio** | **String** | The aspect ratio of the generated images. | [optional] 
**style_id** | **String** | The style identifier to apply to the generated images. Use an id from text_to_image.styles returned by GET /v2/generative/inputs. | [optional] 
**model** | **String** | The image generation model identifier. Use an id from text_to_image.models returned by GET /v2/generative/inputs. If omitted, the backend selects the default model. | [optional] 


<a name="AspectRatioEnum"></a>
## Enum: AspectRatioEnum


* `_11` (value: `"1:1"`)

* `_916` (value: `"9:16"`)

* `_169` (value: `"16:9"`)

* `_43` (value: `"4:3"`)

* `_34` (value: `"3:4"`)




