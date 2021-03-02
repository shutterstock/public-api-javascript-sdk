# shutterstock-api.CreateAudioRender

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preset** | **String** | File format, such as MP3 file, combined WAV file, or individual track WAV files | 
**filename** | **String** | A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file | 
**timeline** | [**AudioRenderTimeline**](AudioRenderTimeline.md) | The timeline data with which to generate the render | 


<a name="PresetEnum"></a>
## Enum: PresetEnum


* `master_mp3` (value: `"MASTER_MP3"`)

* `MASTER_WAV` (value: `"MASTER_WAV"`)

* `STEMS_WAV` (value: `"STEMS_WAV"`)




