# shutterstock-api.InlineResponse200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_date** | **Date** | Date that the image was added by the contributor | [optional] 
**affiliate_url** | **String** | Affiliate referral link; appears only for registered affiliate partners | [optional] 
**aspect** | **Number** | Aspect ratio of the image in decimal format, such as 0.6667 | [optional] 
**assets** | [**InlineResponse200Assets**](InlineResponse200Assets.md) |  | [optional] 
**categories** | [**[InlineResponse200Categories]**](InlineResponse200Categories.md) | Categories that this image is a part of | [optional] 
**contributor** | [**InlineResponse200Contributor**](InlineResponse200Contributor.md) |  | 
**description** | **String** | Detailed description of the image | [optional] 
**has_model_release** | **Boolean** | Indicates whether there are model releases for the image | [optional] 
**has_property_release** | **Boolean** | Indicates whether there are property releases for the image | [optional] 
**id** | **String** | Image ID | 
**image_type** | **String** | Type of image | [optional] 
**is_adult** | **Boolean** | Whether or not this image contains adult content | [optional] 
**is_editorial** | **Boolean** | Whether or not this image is editorial content | [optional] 
**is_illustration** | **Boolean** | Whether or not this image is an illustration | [optional] 
**keywords** | **[String]** | Keywords associated with the content of this image | [optional] 
**media_type** | **String** | Media type of this image, should always be \"image\" | 
**model_releases** | [**[InlineResponse200ModelReleases]**](InlineResponse200ModelReleases.md) | List of model releases | [optional] 
**models** | [**[InlineResponse200Models]**](InlineResponse200Models.md) | List of models | [optional] 
**releases** | **[String]** | List of all releases of this image | [optional] 
**url** | **String** | Link to image information page; included only for certain accounts | [optional] 


