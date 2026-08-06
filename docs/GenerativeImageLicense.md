# shutterstock-api.GenerativeImageLicense

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **String** | Generated image asset ID returned in the generative image result asset list. | 
**ai_use_acknowledgement** | **Boolean** | This must be set to true to license this asset. It confirms: I acknowledge that AI-generated content is not reviewed by Shutterstock's content compliance team for intellectual property compliance unless otherwise stated, and should not be used publicly if it contains the likeness of a brand, public personality, or other protected content. | 
**metadata** | **Object** | Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder | [optional] 
**price** | **Number** | For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34 | [optional] 
**size** | **String** | Image size to download | [optional] [default to 'huge']
**custom_dimensions** | [**V2generativeimageslicensesCustomDimensions**](V2generativeimageslicensesCustomDimensions.md) |  | [optional] 
**subscription_id** | **String** | ID of the subscription to use for the download. | [optional] 


<a name="SizeEnum"></a>
## Enum: SizeEnum


* `small` (value: `"small"`)

* `medium` (value: `"medium"`)

* `huge` (value: `"huge"`)

* `custom` (value: `"custom"`)




