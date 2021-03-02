# shutterstock-api.AudioRenderTimelineSpanRegionEndType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beat** | **Number** | The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region | 
**event** | **String** | The type of event | 
**type** | **String** | The specific action to perform; if the event type is \"ending\" then this must be \"ringout\" and if event type is \"transition\" this must be \"cut\" | 


<a name="EventEnum"></a>
## Enum: EventEnum


* `ending` (value: `"ending"`)

* `transition` (value: `"transition"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ringout` (value: `"ringout"`)

* `cut` (value: `"cut"`)




