# shutterstock-api.CustomMusicApi

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`createAudioRenders`](CustomMusicApi.md#createAudioRenders) | `POST /v2/ai/audio/renders` | Create rendered audio
[`fetchRenders`](CustomMusicApi.md#fetchRenders) | `GET /v2/ai/audio/renders` | Get details about audio renders
[`listDescriptors`](CustomMusicApi.md#listDescriptors) | `GET /v2/ai/audio/descriptors` | List computer audio descriptors
[`listInstruments`](CustomMusicApi.md#listInstruments) | `GET /v2/ai/audio/instruments` | List computer audio instruments


<a name="createAudioRenders"></a>
# CustomMusicApi.createAudioRenders
> `AudioRendersListResults CustomMusicApi.createAudioRenders(body)`

**Create rendered audio**

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const customMusicApi = new sstk.CustomMusicApi();

const body = {
  "audio_renders": [
    {
      "preset": "MASTER_MP3",
      "filename": "My_audio_ai.mp3",
      "timeline": {
        "spans": [
          {
            "id": 111,
            "span_type": "metered",
            "time": 0,
            "tempo": 80,
            "regions": [
              {
                "id": 222,
                "descriptor": "documentary_underscore_heartfelt",
                "beat": 0,
                "end_type": {
                  "beat": 17,
                  "event": "ending",
                  "type": "ringout"
                },
                "region": "music"
              }
            ],
            "instrument_groups": [
              {
                "instrument_group": "full_aw_nylon_acoustic_lead_guitar",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "nice_scoring_viola_ensemble",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "warm_devonshire_upright_acoustic_piano",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "nice_scoring_first_violin_ensemble",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "nice_scoring_second_violin_ensemble",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "warm_kawai_grand_acoustic_piano_dreamy",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "sweet_kawai_grand_acoustic_piano",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              },
              {
                "instrument_group": "nice_scoring_cello_ensemble",
                "statuses": [
                  {
                    "beat": 0,
                    "status": "active"
                  }
                ]
              }
            ]
          },
          {
            "span_type": "unmetered",
            "time": 15
          }
        ]
      }
    }
  ]
};

customMusicApi.createAudioRenders(body)
  .then(async ({ data }) => {
    const { id } = data.audio_renders[0];
    console.log(id);
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
    "progress_percent" : 2,
    "timeline" : {
      "spans" : [ {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      }, {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      } ]
    },
    "files" : [ {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    }, {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    } ],
    "id" : "id",
    "preset" : "MASTER_MP3",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "status" : "WAITING_COMPOSE"
  }, {
    "progress_percent" : 2,
    "timeline" : {
      "spans" : [ {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      }, {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      } ]
    },
    "files" : [ {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    }, {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    } ],
    "id" : "id",
    "preset" : "MASTER_MP3",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "status" : "WAITING_COMPOSE"
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
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const customMusicApi = new sstk.CustomMusicApi();

const renders = [
  "L2w7h9VNFlkzpllSUunSYayenKjN",
  "BeHx3UNXzMBB4dGsC9aa6VxnpcWl"
];

customMusicApi.fetchRenders(renders)
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
    "progress_percent" : 2,
    "timeline" : {
      "spans" : [ {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      }, {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      } ]
    },
    "files" : [ {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    }, {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    } ],
    "id" : "id",
    "preset" : "MASTER_MP3",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "status" : "WAITING_COMPOSE"
  }, {
    "progress_percent" : 2,
    "timeline" : {
      "spans" : [ {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      }, {
        "tempo_changes" : [ {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        }, {
          "tempo" : 3.61607674925191080461672754609026014804840087890625,
          "time" : 9.301444243932575517419536481611430644989013671875
        } ],
        "regions" : [ {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        }, {
          "end_type" : {
            "beat" : 2.3021358869347654518833223846741020679473876953125,
            "event" : "ending",
            "type" : "ringout"
          },
          "beat" : 5,
          "id" : 5.962133916683182377482808078639209270477294921875,
          "descriptor" : "descriptor",
          "region" : "music",
          "key" : {
            "tonic_accidental" : "double flat",
            "tonic_note" : "c",
            "tonic_quality" : "major"
          }
        } ],
        "instrument_groups" : [ {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        }, {
          "instrument_group" : "instrument_group",
          "statuses" : [ {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          }, {
            "beat" : 7.061401241503109105224211816675961017608642578125,
            "status" : "active"
          } ]
        } ],
        "tempo" : 1,
        "id" : 0.80082819046101150206595775671303272247314453125,
        "span_type" : "metered",
        "time" : 6
      } ]
    },
    "files" : [ {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    }, {
      "kbits_second" : 1.231513536777255612975068288506008684635162353515625,
      "filename" : "filename",
      "size_bytes" : 1.024645700144157789424070870154537260532379150390625,
      "content_type" : "content_type",
      "download_url" : "download_url",
      "frequency_hz" : 7.3862819483858839220147274318151175975799560546875,
      "tracks" : [ "tracks", "tracks" ],
      "bits_sample" : 4.1456080298839363962315474054776132106781005859375
    } ],
    "id" : "id",
    "preset" : "MASTER_MP3",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "status" : "WAITING_COMPOSE"
  } ]
}
```

<a name="listDescriptors"></a>
# CustomMusicApi.listDescriptors
> `DescriptorsListResult CustomMusicApi.listDescriptors(queryParams)`

**List computer audio descriptors**

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const customMusicApi = new sstk.CustomMusicApi();

const queryParams = {
  "tag": "Cinematic"
};

customMusicApi.listDescriptors(queryParams)
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
 tempo_to | Number| Show descriptors with a tempo that is less than or equal to the specified number 
 tempo | Number| Show descriptors whose tempo range includes the specified tempo in beats per minute 
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
  "per_page" : 5,
  "data" : [ {
    "instruments" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "min_tempo" : 1.46581298050294517310021547018550336360931396484375,
    "name" : "name",
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "url"
    }, {
      "content_type" : "audio/mp3",
      "url" : "url"
    } ],
    "id" : "id",
    "bands" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "average_render_speed" : 0.80082819046101150206595775671303272247314453125,
    "max_tempo" : 6.02745618307040320615897144307382404804229736328125,
    "tags" : [ "tags", "tags" ]
  }, {
    "instruments" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "min_tempo" : 1.46581298050294517310021547018550336360931396484375,
    "name" : "name",
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "url"
    }, {
      "content_type" : "audio/mp3",
      "url" : "url"
    } ],
    "id" : "id",
    "bands" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "average_render_speed" : 0.80082819046101150206595775671303272247314453125,
    "max_tempo" : 6.02745618307040320615897144307382404804229736328125,
    "tags" : [ "tags", "tags" ]
  } ],
  "page" : 5
}
```

<a name="listInstruments"></a>
# CustomMusicApi.listInstruments
> `InstrumentsListResult CustomMusicApi.listInstruments(queryParams)`

**List computer audio instruments**

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

### Example

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const customMusicApi = new sstk.CustomMusicApi();

const queryParams = {
  "tag": "Percussion"
};

customMusicApi.listInstruments(queryParams)
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
  "per_page" : 6,
  "data" : [ {
    "name" : "name",
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "url"
    }, {
      "content_type" : "audio/mp3",
      "url" : "url"
    } ],
    "id" : "id",
    "tags" : [ "tags", "tags" ]
  }, {
    "name" : "name",
    "previews" : [ {
      "content_type" : "audio/mp3",
      "url" : "url"
    }, {
      "content_type" : "audio/mp3",
      "url" : "url"
    } ],
    "id" : "id",
    "tags" : [ "tags", "tags" ]
  } ],
  "page" : 0
}
```

