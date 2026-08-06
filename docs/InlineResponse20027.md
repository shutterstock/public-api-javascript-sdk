# shutterstock-api.InlineResponse20027

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The UUID of the generation request. | 
**status** | **String** | Current generation status. | 
**prompt** | **String** | Prompt entered by the user. | [optional] 
**model** | **String** | The image generation model identifier. | [optional] 
**aspect_ratio** | **String** | The generated image aspect ratio. | [optional] 
**style** | [**InlineResponse20027Style**](InlineResponse20027Style.md) |  | [optional] 
**is_private** | **Boolean** |  | [optional] 
**can_register_assets** | **Boolean** | Whether generated assets are eligible for registration. | [optional] 
**assets** | [**[InlineResponse20027Assets]**](InlineResponse20027Assets.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `GENERATING` (value: `"GENERATING"`)

* `COMPLETED` (value: `"COMPLETED"`)




