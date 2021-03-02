# shutterstock-api.AudioRenderTimelineSpanRegion

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | An identifier which must be unique within the parent span | 
**region** | **String** | The type of region | 
**descriptor** | **String** | The descriptor ID needed to compose the music | 
**beat** | **Number** | The beat, relative to the span, at which the region object's music begins | 
**end_type** | [**AudioRenderTimelineSpanRegionEndType**](AudioRenderTimelineSpanRegionEndType.md) |  | [optional] 
**key** | [**AudioRenderTimelineSpanRegionKey**](AudioRenderTimelineSpanRegionKey.md) |  | [optional] 


<a name="RegionEnum"></a>
## Enum: RegionEnum


* `music` (value: `"music"`)

* `silence` (value: `"silence"`)




