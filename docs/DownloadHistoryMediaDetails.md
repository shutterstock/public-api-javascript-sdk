# shutterstock-api.DownloadHistoryMediaDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_ip_review** | [**DownloadHistoryAudioAiIpReview**](DownloadHistoryAudioAiIpReview.md) |  | [optional] 
**format** | [**DownloadHistoryAudioFormat**](DownloadHistoryAudioFormat.md) |  | [optional] 
**generated_by_user** | **Number** | ID of the user who generated the AI image. Returned only for generated image license history when available. | [optional] 
**generation_asset_id** | **String** | Generated asset ID associated with the licensed image. Returned only for generated image license history when available. | [optional] 
**generation_id** | **String** | Generation request UUID associated with the licensed image. Returned only for generated image license history when available. | [optional] 
**id** | **String** | ID of the download history media details | 
**is_ai_generated** | **Boolean** | Whether the licensed image is AI generated. Returned for image license history. | [optional] 


