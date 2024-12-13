# shutterstock-api.LicenseVideo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_cookie** | [**V2videoslicensesAuthCookie**](V2videoslicensesAuthCookie.md) |  | [optional] 
**editorial_acknowledgement** | **Boolean** | Whether or not this item is editorial content | [optional] 
**metadata** | **Object** | Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder | [optional] 
**price** | **Number** | Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners | [optional] 
**search_id** | **String** | ID of the search that led to this licensing event | [optional] 
**show_modal** | **Boolean** | (Deprecated) | [optional] 
**size** | **String** | Size of the video being licensed | [optional] 
**subscription_id** | **String** | ID of the subscription used for this license | [optional] 
**video_id** | **String** | ID of the video being licensed | 


<a name="SizeEnum"></a>
## Enum: SizeEnum


* `web` (value: `"web"`)

* `sd` (value: `"sd"`)

* `hd` (value: `"hd"`)

* `_4k` (value: `"4k"`)




