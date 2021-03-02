# shutterstock-api.AudioRenderTimelineSpan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | An identifier which must be unique within the parent span | [optional] 
**span_type** | **String** | Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span | 
**time** | **Number** | The absolute time, in seconds, at which the span starts | 
**tempo** | **Number** | The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo | [optional] 
**regions** | [**[AudioRenderTimelineSpanRegion]**](AudioRenderTimelineSpanRegion.md) | An array of region objects within the span | [optional] 
**instrument_groups** | [**[AudioRenderTimelineSpanInstrumentGroup]**](AudioRenderTimelineSpanInstrumentGroup.md) | An array of instrument_group objects that are used in this span | [optional] 
**tempo_change** | [**[AudioRenderTimelineSpanTempoChanges]**](AudioRenderTimelineSpanTempoChanges.md) | An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change | [optional] 


<a name="SpanTypeEnum"></a>
## Enum: SpanTypeEnum


* `metered` (value: `"metered"`)

* `unmetered` (value: `"unmetered"`)




