# shutterstock-api.GenerativeImagesHistoryItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The generation request ID. | 
**status** | **String** | The status of the generation request. | 
**request_time** | **Date** | The time at which the generation request was received. | 
**is_private** | **Boolean** | Whether the generation is private. | 
**can_register_assets** | **Boolean** | Whether generated assets are eligible for registration. | [optional] 
**error_code** | **String** | Error code if the generation failed. | [optional] 
**generation_type** | **String** | Image generation category derived from the generation metadata type. | [optional] 
**prompt** | **String** | The text prompt used for the generation. | [optional] 
**aspect_ratio** | **String** | The generated image aspect ratio. | [optional] 
**style** | [**InlineResponse20027Style**](InlineResponse20027Style.md) |  | 
**model** | **String** | The image generation model identifier. | 
**assets** | [**[InlineResponse20028Assets]**](InlineResponse20028Assets.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `COMPLETED` (value: `"COMPLETED"`)

* `FAILED` (value: `"FAILED"`)

* `GENERATING` (value: `"GENERATING"`)

* `PENDING` (value: `"PENDING"`)

* `NOT_FOUND` (value: `"NOT_FOUND"`)




<a name="GenerationTypeEnum"></a>
## Enum: GenerationTypeEnum


* `generation` (value: `"image-generation"`)

* `variation` (value: `"image-variation"`)

* `smart_edit` (value: `"image-smart-edit"`)




