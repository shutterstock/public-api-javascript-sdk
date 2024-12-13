# shutterstock-api.Video

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_date** | **Date** | Date this video was added to the Shutterstock library | [optional] 
**affiliate_url** | **String** | Affiliate referral link; appears only for registered affiliate partners | [optional] 
**aspect** | **Number** | Aspect ratio of this video in decimal format, such as 0.6667 | [optional] 
**aspect_ratio** | **String** | Aspect ratio of the video as a ratio, such as 16:9 | [optional] 
**assets** | [**InlineResponse2007Assets**](InlineResponse2007Assets.md) |  | [optional] 
**categories** | [**[InlineResponse200Categories]**](InlineResponse200Categories.md) | List of categories | [optional] 
**contributor** | [**InlineResponse200Contributor**](InlineResponse200Contributor.md) |  | 
**description** | **String** | Description of this video | [optional] 
**duration** | **Number** | Duration of this video, in seconds | [optional] 
**has_model_release** | **Boolean** | Whether or not this video has been released for use by the model appearing in it | [optional] 
**has_property_release** | **Boolean** | Whether or not this video has received a release to show the landmark or property appearing in it | [optional] 
**id** | **String** | ID of the video | 
**is_adult** | **Boolean** | Whether or not this video contains adult content | [optional] 
**is_editorial** | **Boolean** | Whether or not this video is editorial content | [optional] 
**is_select** | **Boolean** | Whether or not this video is part of the select collection | [optional] 
**keywords** | **[String]** | Keywords associated with the content of this video | [optional] 
**media_type** | **String** | Media type of this video, should always be \"video\" | 
**models** | [**[InlineResponse200Models]**](InlineResponse200Models.md) | List of models in this video | [optional] 
**releases** | [**[InlineResponse200ModelReleases]**](InlineResponse200ModelReleases.md) | List of all releases of this video | [optional] 
**url** | **String** | Link to video information page; included only for certain accounts | [optional] 


