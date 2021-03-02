# shutterstock-api.AudioRenderResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The alphanumeric ID of the simple render | 
**timeline** | [**AudioRenderTimeline**](AudioRenderTimeline.md) |  | 
**status** | **String** | A coarse progress indicator | 
**preset** | **String** | The file format preset | [optional] 
**progress_percent** | **Number** | The current progress of the render as a percentage | [optional] 
**files** | [**[AudioRendersFilesList]**](AudioRendersFilesList.md) | The files associated with the render | [optional] 
**created_date** | **Date** | The time the render was submitted to the API | [optional] 
**updated_date** | **Date** | The time that the audio output was uploaded | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `WAITING_COMPOSE` (value: `"WAITING_COMPOSE"`)

* `RUNNING_COMPOSE` (value: `"RUNNING_COMPOSE"`)

* `WAITING_RENDER` (value: `"WAITING_RENDER"`)

* `RUNNING_RENDER` (value: `"RUNNING_RENDER"`)

* `CREATED` (value: `"CREATED"`)

* `FAILED_CREATE` (value: `"FAILED_CREATE"`)




<a name="PresetEnum"></a>
## Enum: PresetEnum


* `master_mp3` (value: `"MASTER_MP3"`)

* `MASTER_WAV` (value: `"MASTER_WAV"`)

* `STEMS_WAV` (value: `"STEMS_WAV"`)




