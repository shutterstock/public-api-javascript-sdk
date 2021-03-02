# shutterstock-api.AudioRendersFilesList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **String** | The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file | 
**bits_sample** | **Number** | The bit depth of the audio files in bits/sample | 
**content_type** | **String** | The content-type of the file | 
**download_url** | **String** | The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed | 
**frequency_hz** | **Number** | The Sample rate of the audio files in Hertz (Hz) | 
**kbits_second** | **Number** | The data rate of the audio files in kilobits/second | 
**size_bytes** | **Number** | Size of the file in bytes | 
**tracks** | **[String]** | An array of track names included in the file | 


