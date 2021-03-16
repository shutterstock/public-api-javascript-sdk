# shutterstock-api.AudioRenderTimelineSpanRegionKey

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tonic_note** | **String** | A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified | [optional] 
**tonic_accidental** | **String** | A text representation of the accidental; if this field is specified, the tonic_note field should also be specified | [optional] 
**tonic_quality** | **String** | The scale quality; if this field is not specified, the API selects the quality automatically | [optional] 


<a name="TonicNoteEnum"></a>
## Enum: TonicNoteEnum


* `c` (value: `"c"`)

* `d` (value: `"d"`)

* `e` (value: `"e"`)

* `f` (value: `"f"`)

* `g` (value: `"g"`)

* `a` (value: `"a"`)

* `b` (value: `"b"`)




<a name="TonicAccidentalEnum"></a>
## Enum: TonicAccidentalEnum


* `double_flat` (value: `"double flat"`)

* `flat` (value: `"flat"`)

* `natural` (value: `"natural"`)

* `sharp` (value: `"sharp"`)

* `double_sharp` (value: `"double sharp"`)




<a name="TonicQualityEnum"></a>
## Enum: TonicQualityEnum


* `major` (value: `"major"`)

* `natural_minor` (value: `"natural_minor"`)

* `harmonic_minor` (value: `"harmonic_minor"`)

* `melodic_minor` (value: `"melodic_minor"`)

* `ionian` (value: `"ionian"`)

* `dorian` (value: `"dorian"`)

* `phrygian` (value: `"phrygian"`)

* `lydian` (value: `"lydian"`)

* `mixolydian` (value: `"mixolydian"`)

* `aeolian` (value: `"aeolian"`)

* `locrian` (value: `"locrian"`)




