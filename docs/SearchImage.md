# shutterstock-api.SearchImage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_date** | **Date** | Show images added on the specified date | [optional] 
**added_date_start** | **Date** | Show images added on or after the specified date | [optional] 
**aspect_ratio_min** | **Number** | Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image | [optional] 
**aspect_ratio_max** | **Number** | Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image | [optional] 
**aspect_ratio** | **Number** | Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image | [optional] 
**added_date_end** | **Date** | Show images added before the specified date | [optional] 
**authentic** | **Boolean** | Show only authentic images | [optional] 
**category** | **String** | Show images with the specified Shutterstock-defined category; specify a category name or ID | [optional] 
**color** | **String** | Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors | [optional] 
**contributor** | **[String]** | Show images with the specified contributor names or IDs, allows multiple | [optional] 
**contributor_country** | **Object** | Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search | [optional] 
**fields** | **String** | Fields to display in the response; see the documentation for the fields parameter in the overview section | [optional] 
**height** | **Number** | (Deprecated; use height_from and height_to instead) Show images with the specified height | [optional] 
**height_from** | **Number** | Show images with the specified height or larger, in pixels | [optional] 
**height_to** | **Number** | Show images with the specified height or smaller, in pixels | [optional] 
**image_type** | **[String]** | Show images of the specified type | [optional] 
**keyword_safe_search** | **Boolean** | Hide results with potentially unsafe keywords | [optional] [default to true]
**language** | **String** | Set query and result language (uses Accept-Language header if not set) | [optional] 
**license** | **[String]** | Show only images with the specified license | [optional] 
**model** | **[String]** | Show image results with the specified model IDs | [optional] 
**orientation** | **String** | Show image results with horizontal or vertical orientation | [optional] 
**page** | **Number** | Page number | [optional] 
**per_page** | **Number** | Number of results per page | [optional] 
**people_model_released** | **Boolean** | Show images of people with a signed model release | [optional] 
**people_age** | **String** | Show images that feature people of the specified age category | [optional] 
**people_ethnicity** | **[String]** | Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities | [optional] 
**people_gender** | **String** | Show images with people of the specified gender | [optional] 
**people_number** | **Number** | Show images with the specified number of people | [optional] 
**query** | **String** | One or more search terms separated by spaces; you can use NOT to filter out images that match a term | [optional] 
**region** | **Object** | Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country | [optional] 
**safe** | **Boolean** | Enable or disable safe search | [optional] [default to true]
**sort** | **String** | Sort by | [optional] [default to 'popular']
**spellcheck_query** | **Boolean** | Spellcheck the search query and return results on suggested spellings | [optional] [default to true]
**view** | **String** | Amount of detail to render in the response | [optional] [default to 'minimal']
**width** | **Number** | (Deprecated; use width_from and width_to instead) Show images with the specified width | [optional] 
**width_from** | **Number** | Show images with the specified width or larger, in pixels | [optional] 
**width_to** | **Number** | Show images with the specified width or smaller, in pixels | [optional] 


<a name="[ImageTypeEnum]"></a>
## Enum: [ImageTypeEnum]


* `photo` (value: `"photo"`)

* `illustration` (value: `"illustration"`)

* `vector` (value: `"vector"`)




<a name="LanguageEnum"></a>
## Enum: LanguageEnum


* `ar` (value: `"ar"`)

* `bg` (value: `"bg"`)

* `bn` (value: `"bn"`)

* `cs` (value: `"cs"`)

* `da` (value: `"da"`)

* `de` (value: `"de"`)

* `el` (value: `"el"`)

* `en` (value: `"en"`)

* `es` (value: `"es"`)

* `fi` (value: `"fi"`)

* `fr` (value: `"fr"`)

* `gu` (value: `"gu"`)

* `he` (value: `"he"`)

* `hi` (value: `"hi"`)

* `hr` (value: `"hr"`)

* `hu` (value: `"hu"`)

* `id` (value: `"id"`)

* `it` (value: `"it"`)

* `ja` (value: `"ja"`)

* `kn` (value: `"kn"`)

* `ko` (value: `"ko"`)

* `ml` (value: `"ml"`)

* `mr` (value: `"mr"`)

* `nb` (value: `"nb"`)

* `nl` (value: `"nl"`)

* `or` (value: `"or"`)

* `pl` (value: `"pl"`)

* `pt` (value: `"pt"`)

* `ro` (value: `"ro"`)

* `ru` (value: `"ru"`)

* `sk` (value: `"sk"`)

* `sl` (value: `"sl"`)

* `sv` (value: `"sv"`)

* `ta` (value: `"ta"`)

* `te` (value: `"te"`)

* `th` (value: `"th"`)

* `tr` (value: `"tr"`)

* `uk` (value: `"uk"`)

* `ur` (value: `"ur"`)

* `vi` (value: `"vi"`)

* `zh` (value: `"zh"`)

* `zh_hant` (value: `"zh-Hant"`)




<a name="[LicenseEnum]"></a>
## Enum: [LicenseEnum]


* `commercial` (value: `"commercial"`)

* `editorial` (value: `"editorial"`)

* `enhanced` (value: `"enhanced"`)




<a name="OrientationEnum"></a>
## Enum: OrientationEnum


* `horizontal` (value: `"horizontal"`)

* `vertical` (value: `"vertical"`)




<a name="PeopleAgeEnum"></a>
## Enum: PeopleAgeEnum


* `infants` (value: `"infants"`)

* `children` (value: `"children"`)

* `teenagers` (value: `"teenagers"`)

* `_20s` (value: `"20s"`)

* `_30s` (value: `"30s"`)

* `_40s` (value: `"40s"`)

* `_50s` (value: `"50s"`)

* `_60s` (value: `"60s"`)

* `older` (value: `"older"`)




<a name="[PeopleEthnicityEnum]"></a>
## Enum: [PeopleEthnicityEnum]


* `african` (value: `"african"`)

* `african_american` (value: `"african_american"`)

* `black` (value: `"black"`)

* `brazilian` (value: `"brazilian"`)

* `chinese` (value: `"chinese"`)

* `caucasian` (value: `"caucasian"`)

* `east_asian` (value: `"east_asian"`)

* `hispanic` (value: `"hispanic"`)

* `japanese` (value: `"japanese"`)

* `middle_eastern` (value: `"middle_eastern"`)

* `native_american` (value: `"native_american"`)

* `pacific_islander` (value: `"pacific_islander"`)

* `south_asian` (value: `"south_asian"`)

* `southeast_asian` (value: `"southeast_asian"`)

* `other` (value: `"other"`)

* `not_african` (value: `"NOT african"`)

* `not_african_american` (value: `"NOT african_american"`)

* `not_black` (value: `"NOT black"`)

* `not_brazilian` (value: `"NOT brazilian"`)

* `not_chinese` (value: `"NOT chinese"`)

* `not_caucasian` (value: `"NOT caucasian"`)

* `not_east_asian` (value: `"NOT east_asian"`)

* `not_hispanic` (value: `"NOT hispanic"`)

* `not_japanese` (value: `"NOT japanese"`)

* `not_middle_eastern` (value: `"NOT middle_eastern"`)

* `not_native_american` (value: `"NOT native_american"`)

* `not_pacific_islander` (value: `"NOT pacific_islander"`)

* `not_south_asian` (value: `"NOT south_asian"`)

* `not_southeast_asian` (value: `"NOT southeast_asian"`)

* `not_other` (value: `"NOT other"`)




<a name="PeopleGenderEnum"></a>
## Enum: PeopleGenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `both` (value: `"both"`)




<a name="SortEnum"></a>
## Enum: SortEnum


* `newest` (value: `"newest"`)

* `popular` (value: `"popular"`)

* `relevance` (value: `"relevance"`)

* `random` (value: `"random"`)




<a name="ViewEnum"></a>
## Enum: ViewEnum


* `minimal` (value: `"minimal"`)

* `full` (value: `"full"`)




