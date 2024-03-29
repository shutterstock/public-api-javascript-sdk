# shutterstock-api.LicenseImage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_cookie** | [**Cookie**](Cookie.md) | Cookie object | [optional] 
**editorial_acknowledgement** | **Boolean** | Set to true to acknowledge the editorial agreement | [optional] 
**format** | **String** | (Deprecated) Image format to download | [optional] [default to 'jpg']
**image_id** | **String** | Image ID | 
**metadata** | [**LicenseRequestMetadata**](LicenseRequestMetadata.md) |  | [optional] 
**price** | **Number** | For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 | [optional] 
**search_id** | **String** | ID of the search that led to this licensing transaction | [optional] 
**show_modal** | **Boolean** | (Deprecated) | [optional] 
**size** | **String** | Image size to download | [optional] 
**custom_dimensions** | [**CustomSizeDimensions**](CustomSizeDimensions.md) |  | [optional] 
**subscription_id** | **String** | ID of the subscription to use for the download. | [optional] 
**verification_code** | **String** | (Deprecated) | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `jpg` (value: `"jpg"`)




<a name="SizeEnum"></a>
## Enum: SizeEnum


* `small` (value: `"small"`)

* `medium` (value: `"medium"`)

* `huge` (value: `"huge"`)

* `custom` (value: `"custom"`)




