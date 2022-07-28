# shutterstock-api.CustomMusicApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`createAudioRenders`](CustomMusicApi.md#createAudioRenders) | `POST /v2/ai/audio/renders` | Create rendered audio
[`fetchRenders`](CustomMusicApi.md#fetchRenders) | `GET /v2/ai/audio/renders` | Get details about audio renders
[`listCustomDescriptors`](CustomMusicApi.md#listCustomDescriptors) | `GET /v2/ai/audio/descriptors` | List computer audio descriptors
[`listCustomInstruments`](CustomMusicApi.md#listCustomInstruments) | `GET /v2/ai/audio/instruments` | List computer audio instruments


<a name="createAudioRenders"></a>
# CustomMusicApi.createAudioRenders
> `AudioRendersListResults CustomMusicApi.createAudioRenders(body)`

**Create rendered audio**

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();

const body = new ShutterstockApiReference.CreateAudioRendersRequest(); // CreateAudioRendersRequest | Parameters for the audio, including the timeline and information about the output file


api.createAudioRenders(body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CreateAudioRendersRequest](CreateAudioRendersRequest.md)| Parameters for the audio, including the timeline and information about the output file 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers


- Content-Type: application/json
- Accept: application/json

### Return type

[AudioRendersListResults](AudioRendersListResults.md)

### Example response

```
{
  "audio_renders" : [ {
    "id" : "2yZp13IhLqnjfh2KquDTOHUHzTiP",
    "status" : "WAITING_COMPOSE",
    "preset" : "MASTER_MP3",
    "progress_percent" : 20,
    "files" : [ ],
    "created_date" : "2021-07-13T16:19:30-04:00",
    "updated_date" : "2021-07-13T16:19:30-04:00",
    "timeline" : { }
  }, {
    "id" : "QwAgKqXQAzr622KuXYZ25C9WRH3a",
    "status" : "CREATED",
    "preset" : "MASTER_MP3",
    "progress_percent" : 100,
    "files" : [ {
      "bits_sample" : 16,
      "content_type" : "audio/mp3",
      "download_url" : "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3",
      "frequency_hz" : 44100,
      "kbits_second" : 192,
      "size_bytes" : 481556,
      "tracks" : [ "master" ],
      "filename" : "My_audio_ai.mp3"
    }, {
      "bits_sample" : 0,
      "content_type" : "application/vnd.amper.waveform+json",
      "download_url" : "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/1.json",
      "frequency_hz" : 42,
      "kbits_second" : 0,
      "size_bytes" : 4420,
      "tracks" : [ "master" ],
      "filename" : "render.json"
    } ],
    "created_date" : "2021-07-12T16:39:59-04:00",
    "updated_date" : "2021-07-12T16:46:26-04:00",
    "timeline" : { }
  } ]
}
```

<a name="fetchRenders"></a>
# CustomMusicApi.fetchRenders
> `AudioRendersListResults CustomMusicApi.fetchRenders(id)`

**Get details about audio renders**

This endpoint shows the status of one or more audio renders, including download links for completed audio.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();

const id = ["[L2w7h9VNFlkzpllSUunSYayenKjN, BeHx3UNXzMBB4dGsC9aa6VxnpcWl]"]; // [String] | One or more render IDs


api.fetchRenders(id)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [String]| One or more render IDs 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[AudioRendersListResults](AudioRendersListResults.md)

### Example response

```
{
  "audio_renders" : [ {
    "id" : "2yZp13IhLqnjfh2KquDTOHUHzTiP",
    "status" : "WAITING_COMPOSE",
    "preset" : "MASTER_MP3",
    "progress_percent" : 20,
    "files" : [ ],
    "created_date" : "2021-07-13T16:19:30-04:00",
    "updated_date" : "2021-07-13T16:19:30-04:00",
    "timeline" : { }
  }, {
    "id" : "QwAgKqXQAzr622KuXYZ25C9WRH3a",
    "status" : "CREATED",
    "preset" : "MASTER_MP3",
    "progress_percent" : 100,
    "files" : [ {
      "bits_sample" : 16,
      "content_type" : "audio/mp3",
      "download_url" : "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3",
      "frequency_hz" : 44100,
      "kbits_second" : 192,
      "size_bytes" : 481556,
      "tracks" : [ "master" ],
      "filename" : "My_audio_ai.mp3"
    }, {
      "bits_sample" : 0,
      "content_type" : "application/vnd.amper.waveform+json",
      "download_url" : "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/1.json",
      "frequency_hz" : 42,
      "kbits_second" : 0,
      "size_bytes" : 4420,
      "tracks" : [ "master" ],
      "filename" : "render.json"
    } ],
    "created_date" : "2021-07-12T16:39:59-04:00",
    "updated_date" : "2021-07-12T16:46:26-04:00",
    "timeline" : { }
  } ]
}
```

<a name="listCustomDescriptors"></a>
# CustomMusicApi.listCustomDescriptors
> `DescriptorsListResult CustomMusicApi.listCustomDescriptors(queryParams)`

**List computer audio descriptors**

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();

const queryParams = { 
  'render_speed_over': 5, // Number | Show descriptors with an average render speed that is greater than or equal to the specified value
  'band_id': "Corporate Folk Bonfire Band 1", // String | Show descriptors that contain the specified band (case-sentsitive)
  'band_name': "Documentary Underscore Heartfelt Band 1", // String | Show descriptors with the specified band name (case-sensitive)
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'id': ["documentary_underscore_heartfelt"], // [String] | Show descriptors with the specified IDs (case-sensitive)
  'instrument_name': "Precision Bass - Full", // String | Show descriptors with the specified instrument name (case-sensitive)
  'instrument_id': "direct_fluorescent_synth_lead", // String | Show descriptors with the specified instrument ID (case-sensitive)
  'tempo': 90, // Number | Show descriptors whose tempo range includes the specified tempo in beats per minute
  'tempo_to': 120, // Number | Show descriptors with a tempo that is less than or equal to the specified number
  'tempo_from': 60, // Number | Show descriptors that have a tempo range that includes the specified tempo in beats per minute
  'name': "Corporate Pop Inspirational High Energy", // String | Show descriptors with the specified name (case-sensitive)
  'tag': "Cinematic" // String | Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
};

api.listCustomDescriptors(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 render_speed_over | Number| Show descriptors with an average render speed that is greater than or equal to the specified value 
 band_id | String| Show descriptors that contain the specified band (case-sentsitive) 
 band_name | String| Show descriptors with the specified band name (case-sensitive) 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 id | [String]| Show descriptors with the specified IDs (case-sensitive) 
 instrument_name | String| Show descriptors with the specified instrument name (case-sensitive) 
 instrument_id | String| Show descriptors with the specified instrument ID (case-sensitive) 
 tempo | Number| Show descriptors whose tempo range includes the specified tempo in beats per minute 
 tempo_to | Number| Show descriptors with a tempo that is less than or equal to the specified number 
 tempo_from | Number| Show descriptors that have a tempo range that includes the specified tempo in beats per minute 
 name | String| Show descriptors with the specified name (case-sensitive) 
 tag | String| Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive) 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[DescriptorsListResult](DescriptorsListResult.md)

### Example response

```
{
  "data" : [ {
    "id" : "cinematic_minimal_tense",
    "average_render_speed" : 8.242664029014177,
    "bands" : [ {
      "id" : "cinematic_minimal_tense_band_1",
      "name" : "Cinematic Minimal Tense Band 1"
    }, {
      "id" : "cinematic_minimal_tense_band_2",
      "name" : "Cinematic Minimal Tense Band 2"
    } ],
    "instruments" : [ {
      "id" : "blue_synth_pad",
      "name" : "Warm Pad - Lush"
    }, {
      "id" : "direct_round_1_synth_bass",
      "name" : "Direct Round 1 Synth Bass"
    }, {
      "id" : "direct_crystal_breath_mid_pad",
      "name" : "Direct Crystal Breath Mid Pad"
    } ],
    "max_tempo" : 76,
    "min_tempo" : 58,
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3"
    }, {
      "content_type" : "audio/mp3",
      "url" : "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3"
    } ],
    "name" : "Cinematic Minimal Tense",
    "tags" : [ "Tense", "Cinematic", "Negative", "Simple Meter", "4/4", "Natural Minor", "Dorian", "Minimal", "Adagio", "Single Region", "Main", "Entertainment", "Politics", "Keys", "Mid Pads", "Fast", "Slow", "Slow", "Voice", "Medium Bright", "Non Noisy", "Medium Thick", "Angelic", "Direct", "Percussion", "Perc FX", "Misc", "Acoustic Pianos", "Grand", "Nice", "Roomy", "Pop", "Upright", "Clean", "Classic", "Keyboards", "Digital Keyboard", "Strings", "Synth Basses", "Fast", "Dark", "Thick", "Sub", "Synth Mallets", "Dull", "Mid Synth Beds", "Slow", "None", "Medium Noisy", "Harsh", "Fast", "Airy", "Long Textures", "Ambience", "Synth Texture", "Ethereal", "Set Kicks", "Processed", "Hubcap Mallet", "Wide", "Tickie", "Airy", "Chamber", "Thin", "Organ", "Cello Ensemble", "Sweet", "Big", "Di", "Raw", "Bright", "Tight", "Chorus", "Buzzy", "Huge", "Warm", "Jazz", "Brass", "String", "Hollow", "Woodwind", "Breathy", "Crystal", "Rhodes", "Synth Piano", "Noisy", "Woody", "Metallic", "Reverse Piano", "Full", "Foley", "Piano", "Clean", "Delayed", "Reverb", "Low Passed", "Large", "Medium", "Small" ]
  } ],
  "page" : 1,
  "per_page" : 1
}
```

<a name="listCustomInstruments"></a>
# CustomMusicApi.listCustomInstruments
> `InstrumentsListResult CustomMusicApi.listCustomInstruments(queryParams)`

**List computer audio instruments**

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

### Example

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.CustomMusicApi();

const queryParams = { 
  'id': ["wood_blocks"], // [String] | Show instruments with the specified ID
  'per_page': 20, // Number | Number of results per page
  'page': 1, // Number | Page number
  'name': "Precision Bass - Full", // String | Show instruments with the specified name (case-sensitive)
  'tag': "Percussion" // String | Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)
};

api.listCustomInstruments(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters


Name | Type | Description
------------- | ------------- | -------------
 id | [String]| Show instruments with the specified ID 
 per_page | Number| Number of results per page, defaults to 20 
 page | Number| Page number, defaults to 1 
 name | String| Show instruments with the specified name (case-sensitive) 
 tag | String| Show instruments with the specified tag, such as Percussion or Strings (case-sensitive) 

### Accepted authentication

- [Basic](../README.md#Basic_authentication)
- [OAuth](../README.md#OAuth_authentication) (No scope required.)

### HTTP request headers



- Accept: application/json

### Return type

[InstrumentsListResult](InstrumentsListResult.md)

### Example response

```
{
  "data" : [ {
    "id" : "bright_roomy_kit",
    "name" : "Bright Roomy Kit",
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3"
    } ],
    "tags" : [ "Percussion", "Aux Percs", "Set Cymbals", "Crash", "Open", "Ride", "Set Hi-Hat", "Set Kicks", "Stick Snare", "Quad Toms", "Roto Toms" ]
  } ],
  "page" : 1,
  "per_page" : 5
}
```

