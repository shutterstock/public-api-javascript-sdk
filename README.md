# Official JavaScript SDK client for the Shutterstock API

The Shutterstock public API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
This SDK provides classes for JavaScript and Node.js that you can use to access the API from your applications.
These classes call the API in the same way that direct REST calls do.
You can use this SDK to search for media, get information about media and about collections, and (if your subscription permits) license and download media.
This is the official SDK provided by Shutterstock for its API.

- API version: 1.0.17

## References

- For more information about the Shutterstock public API, see https://developers.shutterstock.com/documentation.
- For reference information about the endpoints that this SDK calls, see the [API reference](http://api-reference.shutterstock.com).
- To provide feedback or bug reports about the API and this SDK, see https://api-feedback.shutterstock.com.
- For the status of the API, see [API status](https://status.developers.shutterstock.com/).
- For the source code, see https://github.com/shutterstock/public-api-javascript-sdk.

## Subscriptions

To access the API and license media with the SDK, you need an API subscription or a free API account.

API subscriptions are separate from the subscriptions that are available on shutterstock.com.
You can use an API subscription to license and download media only with the API; API subscriptions don't work on shutterstock.com.
To buy an API subscription or set up a free account, see the [pricing page](https://www.shutterstock.com/api/pricing).
If you have a subscription from shutterstock.com and want to use it with the API, [contact us](https://developers.shutterstock.com/contact-us).

## Applications

The REST API uses an access token or secret key that is tied to your account and to an application.
This application represents the application, program, or computer commands that are accessing the API.
To use the API, you must create an application at [https://developers.shutterstock.com/applications](https://developers.shutterstock.com/applications) and note the consumer key and consumer secret.
You use this consumer key and consumer secret either to use the API directly with basic authentication or to request a token for OAuth authentication.

## Installation

### npm or yarn

To install the SDK as a module with npm or yarn, run one of the following commands:

```shell
npm install shutterstock-api --save
```

```shell
yarn add shutterstock-api
```

## Authentication

Authentication in the SDK works the same way as in the API:

All endpoints in the Shutterstock API require authentication.
The API accepts HTTP basic authentication for some endpoints and OAuth authentication for all endpoints.

In the reference information for each SDK method (see [Documentation for methods](#documentation-for-methods) or the [API reference](http://api-reference.shutterstock.com), each endpoint is labeled with the types of authentication it accepts and the OAuth scopes it requires, if any.
In general, HTTP basic authentication is sufficient for search queries and for getting information about pieces of media.
The API requires OAuth authentication for actions that require customers to log in to shutterstock.com, such as licensing and downloading media.

For more information about authenticating to the API, see [Authentication](https://api-reference.shutterstock.com/#authentication) in the API reference.

### Basic authentication

In HTTP basic authentication (also known as _basic authentication_), you pass your application's consumer key and secret key to the SDK along with the request.
To get the consumer key and secret key for your application, go to https://developers.shutterstock.com/user/me/apps and open the information for your application.
The following example uses the variables `applicationClientId` and `applicationClientSecret` for the application's consumer key and secret.

```javascript
const sstk = require('shutterstock-api');

sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const api = new sstk.ImagesApi();
```

### OAuth authentication

In this type of authentication, you use an application and an individual user's login credentials to obtain a token.
For instructions on how to get a token, see [OAuth authentication](https://developers.shutterstock.com/documentation/authentication#oauth-authentication) on the Shutterstock developer portal.

When you have the token, use it to configure the API client as in the following example, which assumes that your token is in the environment variable `SHUTTERSTOCK_API_TOKEN`:

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();
```

### OAuth scopes

Most endpoints require an access token with one or more scopes, or permissions.
You can see the scopes that each method requires in the reference information for each method.

The following list shows the available scopes.

- collections.edit: Grant the ability to create new collections, edit a collection, and modify the contents of a collection
- collections.view: Grant read-only access to a collection and its contents.
- earnings.view: Grant the ability to view a user's current earnings and payouts.
- licenses.create: Grant the ability to download and license media on behalf of the user.
- media.edit: Grant the ability to make changes to a user's existing approved media.
- media.submit: Grant the ability to submit a user's uploaded media for review and check their approval states.
- media.upload: Grant the ability to upload media to a user's account.
- user.address: Grants read-only access to a user's physical address.
- user.edit: Grants read and write access to all user account information.
- user.email: Grants read-only access to a user's email address.
- user.view: Grants read-only access to a user's basic account information (includes username, id, first and last name). If email is the same as username, it also implies user.email


- licenses.create: Grant the ability to download and license media on behalf of the user.
- purchases.view: Grant read-only access to a user's purchase history.
- licenses.view: Grant read-only access to a user's licenses.
- collections.edit: Grant the ability to create new collections, edit a collection, and modify the contents of a collection
- collections.view: Grant read-only access to a collection and its contents.
- user.view: Grants read-only access to a user's basic account information (includes username, id, first and last name). If email is the same as username, it also implies user.email


## Languages

You can provide search keywords in languages other than English by specifying the two-character language code in the `language` query parameter.
If you set this parameter or header, you can also pass category names in that language.
The response includes categories and keywords in that language.

For the list of languages that the API accepts, see the [Language](https://api-reference.shutterstock.com/#schema-language) schema.

## Licensing sandbox

To use the licensing sandbox API instead of the main API, use the `setSandbox` method.
For more information on the sandbox API, see [Licensing sandbox](https://api-reference.shutterstock.com/#licensing-and-downloading-licensing-sandbox) in the API reference.

```javascript
const sstk = require('shutterstock-api');

sstk.setSandbox(true);

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();
```

To go back to the main API, call the `setSandbox` method again and pass `false`.

```javascript
sstk.setSandbox(false);
```

## Examples

Follow the [installation](#installation) instructions and use the SDK in your JavaScript code as in these examples.

This example searches for images.
The search parameters go in the `queryParams` variable. The API returns responses as JavaScript objects.
The reference information for each method shows the class for the response.
In this example, the callback function extracts the image ID, description, and preview link of each search result into an object.

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = {
  query: 'New York',
  sort: 'popular',
  orientation: 'horizontal'
};

api.searchImages(queryParams)
  .then(({data}) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

The next example requests a license for an image.

For POST requests like this one, you create an object of the appropriate class to pass as the request body.
In this case, the `shutterstock-api.ImagesApi.licenseImages` method accepts a body parameter of the class `shutterstock-api.LicenseImageRequest`.
This parameter is an array of objects of the class `shutterstock-api.LicenseImage`, each of which has the ID of an image to license.
The reference information for each method shows the class for the body parameter.

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const imageId = '' // ID of image to license

const imageToLicense = new sstk.LicenseImage(imageId);

const body = new sstk.LicenseImageRequest([imageToLicense]);

const queryParams = {
  subscription_id: process.env.SUBSCRIPTION_ID,
  format: 'jpg',
  size: 'huge'
};

api.licenseImages(body, queryParams)
  .then(({data}) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Instead of using objects for the body, you can also pass a JavaScript object literal that has the data that the API expects in the body.
For information about the body format, see the [API reference](https://api-reference.shutterstock.com) for the related API endpoint.
For example, this licensing request passes information about the images to license in a JavaScript object literal:

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const body = {
  images: [
    {
      image_id: '419235589',
      price: 12.50,
      metadata: {
        customer_id: '12345'
      }
    }
  ]
};

const queryParams = {
  format: 'jpg',
  size: 'huge',
  subscription_id: process.env.SUBSCRIPTION_ID
};

imagesApi.licenseImages(body, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Errors

The SDK returns the same errors as the API.
For information about errors, see [Errors](https://api-reference.shutterstock.com/#overview-errors) in the API reference.

## Contributing

- This SDK is generated at [shutterstock/public-api-sdk-generator](https://github.com/shutterstock/public-api-sdk-generator), please make changes to SDK there.
- Changes to tests can be made directly here.

## Tests

To run the tests, you must authenticate with the Shutterstock API, get a token, and put the token in the `SHUTTERSTOCK_API_TOKEN` environment variable. See [Authentication](https://api-reference.shutterstock.com/#authentication).

```
$ SHUTTERSTOCK_API_TOKEN="Your API Key"
$ yarn run test
```

## Linting

```
$ yarn run lint
```

## Documentation for methods

All URIs are relative to *https://api.shutterstock.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*shutterstock-api.AudioApi* | [**addSoundboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#addSoundboxItems) | **POST** /v2/audio/collections/{id}/items | Add audio tracks to collections
*shutterstock-api.AudioApi* | [**createSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#createSoundbox) | **POST** /v2/audio/collections | Create audio collections
*shutterstock-api.AudioApi* | [**deleteSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#deleteSoundbox) | **DELETE** /v2/audio/collections/{id} | Delete audio collections
*shutterstock-api.AudioApi* | [**deleteSoundboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#deleteSoundboxItems) | **DELETE** /v2/audio/collections/{id}/items | Remove audio tracks from collections
*shutterstock-api.AudioApi* | [**downloadTracks**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#downloadTracks) | **POST** /v2/audio/licenses/{id}/downloads | Download audio tracks
*shutterstock-api.AudioApi* | [**getAudioLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getAudioLicenseList) | **GET** /v2/audio/licenses | List audio licenses
*shutterstock-api.AudioApi* | [**getGenres**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getGenres) | **GET** /v2/audio/genres | List audio genres
*shutterstock-api.AudioApi* | [**getInstruments**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getInstruments) | **GET** /v2/audio/instruments | List audio instruments
*shutterstock-api.AudioApi* | [**getMoods**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getMoods) | **GET** /v2/audio/moods | List audio moods
*shutterstock-api.AudioApi* | [**getSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getSoundbox) | **GET** /v2/audio/collections/{id} | Get the details of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getSoundboxItems) | **GET** /v2/audio/collections/{id}/items | Get the contents of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getSoundboxList) | **GET** /v2/audio/collections | List audio collections
*shutterstock-api.AudioApi* | [**getTrack**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrack) | **GET** /v2/audio/{id} | Get details about audio tracks
*shutterstock-api.AudioApi* | [**getTrackList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackList) | **GET** /v2/audio | List audio tracks
*shutterstock-api.AudioApi* | [**licenseTrack**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#licenseTrack) | **POST** /v2/audio/licenses | License audio tracks
*shutterstock-api.AudioApi* | [**renameSoundbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#renameSoundbox) | **POST** /v2/audio/collections/{id} | Rename audio collections
*shutterstock-api.AudioApi* | [**searchAudio**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#searchAudio) | **GET** /v2/audio/search | Search for tracks
*shutterstock-api.ComputerVisionApi* | [**getKeywords**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ComputerVisionApi.md#getKeywords) | **GET** /v2/cv/keywords | List suggested keywords
*shutterstock-api.ComputerVisionApi* | [**getSimilarImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ComputerVisionApi.md#getSimilarImages) | **GET** /v2/cv/similar/images | List similar images
*shutterstock-api.ComputerVisionApi* | [**getSimilarVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ComputerVisionApi.md#getSimilarVideos) | **GET** /v2/cv/similar/videos | List similar videos
*shutterstock-api.ComputerVisionApi* | [**uploadEphemeralImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ComputerVisionApi.md#uploadEphemeralImage) | **POST** /v2/images | Upload ephemeral images
*shutterstock-api.ComputerVisionApi* | [**uploadImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ComputerVisionApi.md#uploadImage) | **POST** /v2/cv/images | Upload images
*shutterstock-api.ContributorsApi* | [**getContributor**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ContributorsApi.md#getContributor) | **GET** /v2/contributors/{contributor_id} | Get details about a single contributor
*shutterstock-api.ContributorsApi* | [**getContributorCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ContributorsApi.md#getContributorCollectionItems) | **GET** /v2/contributors/{contributor_id}/collections/{id}/items | Get the items in contributors' collections
*shutterstock-api.ContributorsApi* | [**getContributorCollections**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ContributorsApi.md#getContributorCollections) | **GET** /v2/contributors/{contributor_id}/collections/{id} | Get details about contributors' collections
*shutterstock-api.ContributorsApi* | [**getContributorCollectionsList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ContributorsApi.md#getContributorCollectionsList) | **GET** /v2/contributors/{contributor_id}/collections | List contributors' collections
*shutterstock-api.ContributorsApi* | [**getContributorList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ContributorsApi.md#getContributorList) | **GET** /v2/contributors | Get details about multiple contributors
*shutterstock-api.EditorialApi* | [**getEditorialImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#getEditorialImage) | **GET** /v2/editorial/{id} | Get editorial content details
*shutterstock-api.EditorialApi* | [**getEditorialLivefeed**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#getEditorialLivefeed) | **GET** /v2/editorial/livefeeds/{id} | Get editorial livefeed
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#getEditorialLivefeedItems) | **GET** /v2/editorial/livefeeds/{id}/items | Get editorial livefeed items
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#getEditorialLivefeedList) | **GET** /v2/editorial/livefeeds | Get editorial livefeed list
*shutterstock-api.EditorialApi* | [**licenseEditorialImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#licenseEditorialImage) | **POST** /v2/editorial/licenses | License editorial content
*shutterstock-api.EditorialApi* | [**searchEditorial**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialApi.md#searchEditorial) | **GET** /v2/editorial/search | Search editorial content
*shutterstock-api.ImagesApi* | [**addLightboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#addLightboxItems) | **POST** /v2/images/collections/{id}/items | Add images to collections
*shutterstock-api.ImagesApi* | [**createLightbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#createLightbox) | **POST** /v2/images/collections | Create image collections
*shutterstock-api.ImagesApi* | [**deleteLightbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#deleteLightbox) | **DELETE** /v2/images/collections/{id} | Delete image collections
*shutterstock-api.ImagesApi* | [**deleteLightboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#deleteLightboxItems) | **DELETE** /v2/images/collections/{id}/items | Remove images from collections
*shutterstock-api.ImagesApi* | [**downloadImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#downloadImage) | **POST** /v2/images/licenses/{id}/downloads | Download images
*shutterstock-api.ImagesApi* | [**getFeaturedLightbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedLightbox) | **GET** /v2/images/collections/featured/{id} | Get the details of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedLightboxItems) | **GET** /v2/images/collections/featured/{id}/items | Get the contents of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedLightboxList) | **GET** /v2/images/collections/featured | List featured image collections
*shutterstock-api.ImagesApi* | [**getImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImage) | **GET** /v2/images/{id} | Get details about images
*shutterstock-api.ImagesApi* | [**getImageCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageCategories) | **GET** /v2/images/categories | List image categories
*shutterstock-api.ImagesApi* | [**getImageLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageLicenseList) | **GET** /v2/images/licenses | List image licenses
*shutterstock-api.ImagesApi* | [**getImageList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageList) | **GET** /v2/images | List images
*shutterstock-api.ImagesApi* | [**getImageRecommendations**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageRecommendations) | **GET** /v2/images/recommendations | List recommended images
*shutterstock-api.ImagesApi* | [**getLightbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getLightbox) | **GET** /v2/images/collections/{id} | Get the details of image collections
*shutterstock-api.ImagesApi* | [**getLightboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getLightboxItems) | **GET** /v2/images/collections/{id}/items | Get the contents of image collections
*shutterstock-api.ImagesApi* | [**getLightboxList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getLightboxList) | **GET** /v2/images/collections | List image collections
*shutterstock-api.ImagesApi* | [**getSimilarImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getSimilarImages) | **GET** /v2/images/{id}/similar | List similar images
*shutterstock-api.ImagesApi* | [**getUpdatedImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getUpdatedImages) | **GET** /v2/images/updated | List updated images
*shutterstock-api.ImagesApi* | [**licenseImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#licenseImages) | **POST** /v2/images/licenses | License images
*shutterstock-api.ImagesApi* | [**renameLightbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#renameLightbox) | **POST** /v2/images/collections/{id} | Rename image collections
*shutterstock-api.ImagesApi* | [**searchImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#searchImages) | **GET** /v2/images/search | Search for images
*shutterstock-api.TestApi* | [**echo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/TestApi.md#echo) | **GET** /v2/test | Echo text
*shutterstock-api.TestApi* | [**validate**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/TestApi.md#validate) | **GET** /v2/test/validate | Validate input
*shutterstock-api.UsersApi* | [**getAccessToken**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getAccessToken) | **GET** /v2/user/access_token | Get access token details
*shutterstock-api.UsersApi* | [**getUser**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getUser) | **GET** /v2/user | Get user details
*shutterstock-api.UsersApi* | [**getUserSubsciptionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getUserSubsciptionList) | **GET** /v2/user/subscriptions | List user subscriptions
*shutterstock-api.VideosApi* | [**addClipboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#addClipboxItems) | **POST** /v2/videos/collections/{id}/items | Add videos to collections
*shutterstock-api.VideosApi* | [**createClipbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#createClipbox) | **POST** /v2/videos/collections | Create video collections
*shutterstock-api.VideosApi* | [**deleteClipbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#deleteClipbox) | **DELETE** /v2/videos/collections/{id} | Delete video collections
*shutterstock-api.VideosApi* | [**deleteClipboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#deleteClipboxItems) | **DELETE** /v2/videos/collections/{id}/items | Remove videos from collections
*shutterstock-api.VideosApi* | [**downloadVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#downloadVideos) | **POST** /v2/videos/licenses/{id}/downloads | Download videos
*shutterstock-api.VideosApi* | [**getClipbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getClipbox) | **GET** /v2/videos/collections/{id} | Get the details of video collections
*shutterstock-api.VideosApi* | [**getClipboxItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getClipboxItems) | **GET** /v2/videos/collections/{id}/items | Get the contents of video collections
*shutterstock-api.VideosApi* | [**getClipboxList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getClipboxList) | **GET** /v2/videos/collections | List video collections
*shutterstock-api.VideosApi* | [**getSimilarVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getSimilarVideos) | **GET** /v2/videos/{id}/similar | List similar videos
*shutterstock-api.VideosApi* | [**getUpdatedVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getUpdatedVideos) | **GET** /v2/videos/updated | List updated videos
*shutterstock-api.VideosApi* | [**getVideo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideo) | **GET** /v2/videos/{id} | Get details about videos
*shutterstock-api.VideosApi* | [**getVideoCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoCategories) | **GET** /v2/videos/categories | List video categories
*shutterstock-api.VideosApi* | [**getVideoLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoLicenseList) | **GET** /v2/videos/licenses | List video licenses
*shutterstock-api.VideosApi* | [**getVideoList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoList) | **GET** /v2/videos | List videos
*shutterstock-api.VideosApi* | [**licenseVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#licenseVideos) | **POST** /v2/videos/licenses | License videos
*shutterstock-api.VideosApi* | [**renameClipbox**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#renameClipbox) | **POST** /v2/videos/collections/{id} | Rename video collections
*shutterstock-api.VideosApi* | [**searchVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#searchVideos) | **GET** /v2/videos/search | Search for videos

