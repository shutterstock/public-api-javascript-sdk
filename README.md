# JavaScript SDK client for the Shutterstock API

The Shutterstock public API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
This SDK provides classes for JavaScript and Node.js that you can use to access the API from your applications.
These classes call the API in the same way that direct REST calls do.
You can use this SDK to search for media, get information about media and about collections, and (with full API access) license and download media.

- API version: 1.0.0

## References

- For more information about the Shutterstock public API, see https://developers.shutterstock.com/documentation.
- For reference information about the endpoints that this SDK calls, see the [API reference](http://api-reference.shutterstock.com).
- To provide feedback or bug reports about the API and this SDK, see https://api-feedback.shutterstock.com.
- For the status of the API, see [API status](https://status.developers.shutterstock.com/).
- For the source code, see https://github.com/shutterstock/public-api-javascript-sdk.

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

## Applications

The REST API uses an access token or secret key that is tied to your account and to an application.
This application represents the application, program, or computer commands that are accessing the API.
To use the API, you must create an application at [https://developers.shutterstock.com/applications](https://developers.shutterstock.com/applications) and note the client ID and client secret.
You use this client ID and client secret either to use the API directly with basic authentication or to request a token for OAuth authentication.

## Accounts and limitations

By default, applications ("free API accounts") have limited access to the API:
- They have access only to a limited media library, not the complete Shutterstock library.
Therefore, all requests have access only to this limited library, including all search and details requests.
- Media results, such as search results, are limited to the first 100 results, regardless of how many are shown on a page.
- When searching, requests can provide no more than two search fields per search request, in addition to the `query`, `page`, `per_page`, and `view` fields.
- Responses are limited to minimal results, not full results.
- They can't use the `GET /v2/images/{id}/similar` (List similar images), `POST /v2/images` (upload images for reverse image search), and `GET /v2/images` (list images) endpoints.
- They are limited in the number of requests per hour.
- They do not have access to editorial media.
- They can't license media.

Applications with a full API account have full access to the API, without these limitations.
To tell which type of account you are using, open [your applications](https://developers.shutterstock.com/user/me/apps), expand your application, and go to its **Products** tab.
The **API Product** field shows `Free` for limited API applications or the name of another API product that provides access.
If you have the free API product and need full access to the API, [Contact us](https://developers.shutterstock.com/contact-us).

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

In HTTP basic authentication (also known as _basic authentication_), you pass your application's client ID and secret key to the SDK along with the request.
To get the client ID and secret key for your application, go to https://developers.shutterstock.com/user/me/apps and open the information for your application.
The following example uses the variables `applicationClientId` and `applicationClientSecret` for the application's client ID and secret.

```javascript
const sstk = require('shutterstock-api');

sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const api = new sstk.ImagesApi();
```

### OAuth authentication

In this type of authentication, you use an application and an individual user's login credentials to obtain a token.
For instructions on how to get a token, see [OAuth authentication](https://developers.shutterstock.com/documentation/authentication#oauth-authentication) on the Shutterstock developer portal.

When you have the token, use it to configure the API client as in the following example, using the token as the value of the `myAccessToken` variable:

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
- earnings.view: Grant the ability to view a user&#39;s current earnings and payouts.
- licenses.create: Grant the ability to download and license media on behalf of the user.
- licenses.view: Grant read-only access to a user&#39;s licenses.
- media.edit: Grant the ability to make changes to a user&#39;s existing approved media.
- media.submit: Grant the ability to submit a user&#39;s uploaded media for review and check their approval states.
- media.upload: Grant the ability to upload media to a user&#39;s account.
- organization.address: Grants read-only access to an organization&#39;s physical address.
- organization.view: Grants read-only access to an organization&#39;s basic information.
- purchases.view: Grant read-only access to a user&#39;s purchase history.
- reseller.purchase: Grant the ability for a reseller to purchase products for a user.
- reseller.view: Grant the ability for a reseller to view the products they can sell.
- user.address: Grants read-only access to a user&#39;s physical address.
- user.edit: Grants read and write access to all user account information.
- user.email: Grants read-only access to a user&#39;s email address.
- user.view: Grants read-only access to a user&#39;s basic account information (includes username, id, first and last name). If email is the same as username, it also implies user.email


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
.then(function({data}) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});
```

The next example requests a license for an image.

For POST requests like this one, you must create an object of the appropriate class to pass as the request body.
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
  subscriptionId: process.env.SHUTTERSTOCK_SUBSCRIPTION_ID,
  format: 'jpg',
  size: 'huge'
};

api.licenseImages(body, queryParams)
.then(function({data}) {
  console.log(data);
})
.catch(function(error) {
  console.error(error);
});

```

## Documentation for methods

All URIs are relative to *https://api.shutterstock.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*shutterstock-api.AudioApi* | [**addSoundboxItems**](docs/AudioApi.md#addSoundboxItems) | **POST** /v2/audio/collections/{id}/items | Add audio tracks to collections
*shutterstock-api.AudioApi* | [**createSoundbox**](docs/AudioApi.md#createSoundbox) | **POST** /v2/audio/collections | Create audio collections
*shutterstock-api.AudioApi* | [**deleteSoundbox**](docs/AudioApi.md#deleteSoundbox) | **DELETE** /v2/audio/collections/{id} | Delete audio collections
*shutterstock-api.AudioApi* | [**deleteSoundboxItems**](docs/AudioApi.md#deleteSoundboxItems) | **DELETE** /v2/audio/collections/{id}/items | Remove audio tracks from collections
*shutterstock-api.AudioApi* | [**downloadTracks**](docs/AudioApi.md#downloadTracks) | **POST** /v2/audio/licenses/{id}/downloads | Download audio tracks
*shutterstock-api.AudioApi* | [**getAudioLicenseList**](docs/AudioApi.md#getAudioLicenseList) | **GET** /v2/audio/licenses | List audio licenses
*shutterstock-api.AudioApi* | [**getSoundbox**](docs/AudioApi.md#getSoundbox) | **GET** /v2/audio/collections/{id} | Get the details of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxItems**](docs/AudioApi.md#getSoundboxItems) | **GET** /v2/audio/collections/{id}/items | Get the contents of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxList**](docs/AudioApi.md#getSoundboxList) | **GET** /v2/audio/collections | List audio collections
*shutterstock-api.AudioApi* | [**getTrack**](docs/AudioApi.md#getTrack) | **GET** /v2/audio/{id} | Get details about audio tracks
*shutterstock-api.AudioApi* | [**getTrackList**](docs/AudioApi.md#getTrackList) | **GET** /v2/audio | List audio tracks
*shutterstock-api.AudioApi* | [**licenseTrack**](docs/AudioApi.md#licenseTrack) | **POST** /v2/audio/licenses | License audio tracks
*shutterstock-api.AudioApi* | [**renameSoundbox**](docs/AudioApi.md#renameSoundbox) | **POST** /v2/audio/collections/{id} | Rename audio collections
*shutterstock-api.AudioApi* | [**searchAudio**](docs/AudioApi.md#searchAudio) | **GET** /v2/audio/search | Search for tracks
*shutterstock-api.ContributorsApi* | [**getContributor**](docs/ContributorsApi.md#getContributor) | **GET** /v2/contributors/{contributor_id} | Get details about a single contributor
*shutterstock-api.ContributorsApi* | [**getContributorCollectionItems**](docs/ContributorsApi.md#getContributorCollectionItems) | **GET** /v2/contributors/{contributor_id}/collections/{id}/items | Get the items in contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorCollections**](docs/ContributorsApi.md#getContributorCollections) | **GET** /v2/contributors/{contributor_id}/collections/{id} | Get details about contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorCollectionsList**](docs/ContributorsApi.md#getContributorCollectionsList) | **GET** /v2/contributors/{contributor_id}/collections | List contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorList**](docs/ContributorsApi.md#getContributorList) | **GET** /v2/contributors | Get details about multiple contributors
*shutterstock-api.EditorialApi* | [**getEditorialImage**](docs/EditorialApi.md#getEditorialImage) | **GET** /v2/editorial/{id} | Get editorial content details
*shutterstock-api.EditorialApi* | [**getEditorialLivefeed**](docs/EditorialApi.md#getEditorialLivefeed) | **GET** /v2/editorial/livefeeds/{id} | Get editorial livefeed
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedItems**](docs/EditorialApi.md#getEditorialLivefeedItems) | **GET** /v2/editorial/livefeeds/{id}/items | Get editorial livefeed items
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedList**](docs/EditorialApi.md#getEditorialLivefeedList) | **GET** /v2/editorial/livefeeds | Get editorial livefeed list
*shutterstock-api.EditorialApi* | [**licenseEditorialImage**](docs/EditorialApi.md#licenseEditorialImage) | **POST** /v2/editorial/licenses | License editorial content
*shutterstock-api.EditorialApi* | [**searchEditorial**](docs/EditorialApi.md#searchEditorial) | **GET** /v2/editorial/search | Search editorial content
*shutterstock-api.ImagesApi* | [**addLightboxItems**](docs/ImagesApi.md#addLightboxItems) | **POST** /v2/images/collections/{id}/items | Add images to collections
*shutterstock-api.ImagesApi* | [**createLightbox**](docs/ImagesApi.md#createLightbox) | **POST** /v2/images/collections | Create image collections
*shutterstock-api.ImagesApi* | [**deleteLightbox**](docs/ImagesApi.md#deleteLightbox) | **DELETE** /v2/images/collections/{id} | Delete image collections
*shutterstock-api.ImagesApi* | [**deleteLightboxItems**](docs/ImagesApi.md#deleteLightboxItems) | **DELETE** /v2/images/collections/{id}/items | Remove images from collections
*shutterstock-api.ImagesApi* | [**downloadImage**](docs/ImagesApi.md#downloadImage) | **POST** /v2/images/licenses/{id}/downloads | Download images
*shutterstock-api.ImagesApi* | [**getFeaturedLightbox**](docs/ImagesApi.md#getFeaturedLightbox) | **GET** /v2/images/collections/featured/{id} | Get the details of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxItems**](docs/ImagesApi.md#getFeaturedLightboxItems) | **GET** /v2/images/collections/featured/{id}/items | Get the contents of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxList**](docs/ImagesApi.md#getFeaturedLightboxList) | **GET** /v2/images/collections/featured | List featured image collections
*shutterstock-api.ImagesApi* | [**getImage**](docs/ImagesApi.md#getImage) | **GET** /v2/images/{id} | Get details about images
*shutterstock-api.ImagesApi* | [**getImageCategories**](docs/ImagesApi.md#getImageCategories) | **GET** /v2/images/categories | List image categories
*shutterstock-api.ImagesApi* | [**getImageLicenseList**](docs/ImagesApi.md#getImageLicenseList) | **GET** /v2/images/licenses | List image licenses
*shutterstock-api.ImagesApi* | [**getImageList**](docs/ImagesApi.md#getImageList) | **GET** /v2/images | List images
*shutterstock-api.ImagesApi* | [**getImageRecommendations**](docs/ImagesApi.md#getImageRecommendations) | **GET** /v2/images/recommendations | List recommended images
*shutterstock-api.ImagesApi* | [**getLightbox**](docs/ImagesApi.md#getLightbox) | **GET** /v2/images/collections/{id} | Get the details of image collections
*shutterstock-api.ImagesApi* | [**getLightboxItems**](docs/ImagesApi.md#getLightboxItems) | **GET** /v2/images/collections/{id}/items | Get the contents of image collections
*shutterstock-api.ImagesApi* | [**getLightboxList**](docs/ImagesApi.md#getLightboxList) | **GET** /v2/images/collections | List image collections
*shutterstock-api.ImagesApi* | [**getSimilarImages**](docs/ImagesApi.md#getSimilarImages) | **GET** /v2/images/{id}/similar | List similar images
*shutterstock-api.ImagesApi* | [**licenseImages**](docs/ImagesApi.md#licenseImages) | **POST** /v2/images/licenses | License images
*shutterstock-api.ImagesApi* | [**renameLightbox**](docs/ImagesApi.md#renameLightbox) | **POST** /v2/images/collections/{id} | Rename image collections
*shutterstock-api.ImagesApi* | [**searchImages**](docs/ImagesApi.md#searchImages) | **GET** /v2/images/search | Search for images
*shutterstock-api.ImagesApi* | [**uploadEphemeralImage**](docs/ImagesApi.md#uploadEphemeralImage) | **POST** /v2/images | Upload images
*shutterstock-api.TestApi* | [**echo**](docs/TestApi.md#echo) | **GET** /v2/test | Echo text
*shutterstock-api.TestApi* | [**validate**](docs/TestApi.md#validate) | **GET** /v2/test/validate | Validate input
*shutterstock-api.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /v2/user | Register user
*shutterstock-api.UsersApi* | [**getAccessToken**](docs/UsersApi.md#getAccessToken) | **GET** /v2/user/access_token | Get access token details
*shutterstock-api.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /v2/user | Get user details
*shutterstock-api.UsersApi* | [**getUserSubsciptionList**](docs/UsersApi.md#getUserSubsciptionList) | **GET** /v2/user/subscriptions | List user subscriptions
*shutterstock-api.VideosApi* | [**addClipboxItems**](docs/VideosApi.md#addClipboxItems) | **POST** /v2/videos/collections/{id}/items | Add videos to collections
*shutterstock-api.VideosApi* | [**createClipbox**](docs/VideosApi.md#createClipbox) | **POST** /v2/videos/collections | Create video collections
*shutterstock-api.VideosApi* | [**deleteClipbox**](docs/VideosApi.md#deleteClipbox) | **DELETE** /v2/videos/collections/{id} | Delete video collections
*shutterstock-api.VideosApi* | [**deleteClipboxItems**](docs/VideosApi.md#deleteClipboxItems) | **DELETE** /v2/videos/collections/{id}/items | Remove videos from collections
*shutterstock-api.VideosApi* | [**downloadVideos**](docs/VideosApi.md#downloadVideos) | **POST** /v2/videos/licenses/{id}/downloads | Download videos
*shutterstock-api.VideosApi* | [**getClipbox**](docs/VideosApi.md#getClipbox) | **GET** /v2/videos/collections/{id} | Get the details of video collections
*shutterstock-api.VideosApi* | [**getClipboxItems**](docs/VideosApi.md#getClipboxItems) | **GET** /v2/videos/collections/{id}/items | Get the contents of video collections
*shutterstock-api.VideosApi* | [**getClipboxList**](docs/VideosApi.md#getClipboxList) | **GET** /v2/videos/collections | List video collections
*shutterstock-api.VideosApi* | [**getSimilarVideos**](docs/VideosApi.md#getSimilarVideos) | **GET** /v2/videos/{id}/similar | List similar videos
*shutterstock-api.VideosApi* | [**getVideo**](docs/VideosApi.md#getVideo) | **GET** /v2/videos/{id} | Get details about videos
*shutterstock-api.VideosApi* | [**getVideoCategories**](docs/VideosApi.md#getVideoCategories) | **GET** /v2/videos/categories | List video categories
*shutterstock-api.VideosApi* | [**getVideoLicenseList**](docs/VideosApi.md#getVideoLicenseList) | **GET** /v2/videos/licenses | List video licenses
*shutterstock-api.VideosApi* | [**getVideoList**](docs/VideosApi.md#getVideoList) | **GET** /v2/videos | List videos
*shutterstock-api.VideosApi* | [**licenseVideos**](docs/VideosApi.md#licenseVideos) | **POST** /v2/videos/licenses | License videos
*shutterstock-api.VideosApi* | [**renameClipbox**](docs/VideosApi.md#renameClipbox) | **POST** /v2/videos/collections/{id} | Rename video collections
*shutterstock-api.VideosApi* | [**searchVideos**](docs/VideosApi.md#searchVideos) | **GET** /v2/videos/search | Search for videos

