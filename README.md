# Official JavaScript SDK client for the Shutterstock API

The Shutterstock public API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
This SDK provides classes for JavaScript and Node.js that you can use to access the API from your applications.
These classes call the API in the same way that direct REST calls do.
You can use this SDK to search for media, get information about media and about collections, and (if your subscription permits) license and download media.
This is the official SDK provided by Shutterstock for its API.

- API version: 1.1.35

## References

- For more information about the Shutterstock public API, see https://www.shutterstock.com/developers/documentation.
- For reference information about the endpoints that this SDK calls, see the [API reference](http://api-reference.shutterstock.com).
- To provide feedback or bug reports about the API and this SDK, see https://api-feedback.shutterstock.com.
- For the status of the API, see [API status](https://status.developers.shutterstock.com/).
- For the source code, see https://github.com/shutterstock/public-api-javascript-sdk.

## Subscriptions

To access the API and license media with the SDK, you need an API subscription or a free API account.

API subscriptions are separate from the subscriptions that are available on shutterstock.com.
You can use an API subscription to license and download media only with the API; API subscriptions don't work on shutterstock.com.
To buy an API subscription or set up a free account, see the [pricing page](https://www.shutterstock.com/api/pricing).
If you have a subscription from shutterstock.com and want to use it with the API, [contact us](https://www.shutterstock.com/developers/contact-us).

## Applications

To access the REST API you need an _application_, which represents the application, program, or computer commands that are accessing the API.
To use the API, you need the application's consumer key and consumer secret, which are shown on the [https://www.shutterstock.com/account/developers/apps](https://www.shutterstock.com/account/developers/apps) page.

When you have the application's consumer key and consumer secret, you can use them to access the API directly or to request a token that you can use to access the API.
For more information on these methods of authentication, see [Authentication](#authentication).

To create an application:
1. Log in at [shutterstock.com](https://shutterstock.com/), go to your account page, and  and click **Developers**.
1. On the Developers page, click **Create new app**.
1. On the Create New App popup, fill in these fields:
   - **App name**: Specify any name that describes your application.
   - **Callback URL**: Specify a comma-separated list of the host names (not full URLs) where your application is running.
   If you’ve got an application running on a server, use the host name of the server.
   Otherwise, leave the default host name `localhost` for testing purposes.
   - **Referrer**: If you are using referrer authentication, specify a comma-separated list of valid referrer domains.
   Each item in the list must match one of the callback host names.
   The API accepts only requests that have an HTTP Referrer header from this list.
   Otherwise, leave this field blank.
   - **Included products**: This list shows the API products that the application has access to.
   To get access to other products, contact your Shutterstock representative, visit the [Pricing page](https://www.shutterstock.com/api/pricing) or [contact us](https://www.shutterstock.com/developers/contact-us).
   - **Company name**: The name of your company.
   - **Website**: Your company's web site.
   - **Intended use**: Select an option that describes how you will use the API.
   - **Description**: Describe in detail how the application will use the API.
   - **Terms of service**: Read an accept the Terms of Service.
1. Click **Save**.

The new application appears on the [My apps](https://www.shutterstock.com/account/developers/apps) page.
Each application has a consumer key and a consumer secret.
You use this consumer key and consumer secret either to use the API directly with basic authentication or to request a token for OAuth authentication; see [Authentication](#authentication).
Do not share your key and secret, because they can be used to access your account through the API.

## Products

Each application has access to one or more API products.
These products control the level of access that the application has to the API and the Shutterstock media library.
These products are separate from the subscriptions that control how many assets you can license and download.

If you create an application without buying an API subscription first, the application uses the free API product, which is labeled as the "Self Serve" product.
Applications that use this free API product can search and view media but not license or download media.
If you have a paid API subscription, your applications use an API product with additional access to license and download media, within the limitations of the subscription.
Other products include access to computer vision and editorial endpoints.

To tell which API products your application is using, open [your applications](https://www.shutterstock.com/account/developers/apps), expand your application, and go to its **Details** tab.

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
To get the consumer key and secret key for your application, go to https://www.shutterstock.com/account/developers/apps and open the information for your application.
The following example uses the variables `applicationClientId` and `applicationClientSecret` for the application's consumer key and secret.

```javascript
const sstk = require('shutterstock-api');

sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const api = new sstk.ImagesApi();
```

### OAuth authentication

In this type of authentication, you use an application and an individual user's login credentials to obtain a token.
For instructions on how to get a token, see [OAuth authentication](https://www.shutterstock.com/developers/documentation/authentication#oauth-authentication) on the Shutterstock developer portal.

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

- licenses.create: Grant the ability to download and license media on behalf of the user.
- purchases.view: Grant read-only access to a user's purchase history.
- licenses.view: Grant read-only access to a user's licenses.
- collections.edit: Grant the ability to create new collections, edit a collection, and modify the contents of a collection
- collections.view: Grant read-only access to a collection and its contents.


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

Handle errors in the `catch()` method following the SDK method.
Each error includes a `response` object that includes an HTTP `status` field and a `text` field that has the description of the error.

For example, this example requests an image ID that does not exist.
The API returns the HTTP status code 404:

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

imagesApi.getImage("123456789")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.response.status, error.response.text);
    // 404 '{"message":"Not Found"}'
  });
```

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
*shutterstock-api.AudioApi* | [**addTrackCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#addTrackCollectionItems) | **POST** /v2/audio/collections/{id}/items | Add audio tracks to collections
*shutterstock-api.AudioApi* | [**createTrackCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#createTrackCollection) | **POST** /v2/audio/collections | Create audio collections
*shutterstock-api.AudioApi* | [**deleteTrackCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#deleteTrackCollection) | **DELETE** /v2/audio/collections/{id} | Delete audio collections
*shutterstock-api.AudioApi* | [**deleteTrackCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#deleteTrackCollectionItems) | **DELETE** /v2/audio/collections/{id}/items | Remove audio tracks from collections
*shutterstock-api.AudioApi* | [**downloadTracks**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#downloadTracks) | **POST** /v2/audio/licenses/{id}/downloads | Download audio tracks
*shutterstock-api.AudioApi* | [**getTrack**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrack) | **GET** /v2/audio/{id} | Get details about audio tracks
*shutterstock-api.AudioApi* | [**getTrackCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackCollection) | **GET** /v2/audio/collections/{id} | Get the details of audio collections
*shutterstock-api.AudioApi* | [**getTrackCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackCollectionItems) | **GET** /v2/audio/collections/{id}/items | Get the contents of audio collections
*shutterstock-api.AudioApi* | [**getTrackCollectionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackCollectionList) | **GET** /v2/audio/collections | List audio collections
*shutterstock-api.AudioApi* | [**getTrackLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackLicenseList) | **GET** /v2/audio/licenses | List audio licenses
*shutterstock-api.AudioApi* | [**getTrackList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#getTrackList) | **GET** /v2/audio | List audio tracks
*shutterstock-api.AudioApi* | [**licenseTrack**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#licenseTrack) | **POST** /v2/audio/licenses | License audio tracks
*shutterstock-api.AudioApi* | [**listGenres**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#listGenres) | **GET** /v2/audio/genres | List audio genres
*shutterstock-api.AudioApi* | [**listInstruments**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#listInstruments) | **GET** /v2/audio/instruments | List audio instruments
*shutterstock-api.AudioApi* | [**listMoods**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#listMoods) | **GET** /v2/audio/moods | List audio moods
*shutterstock-api.AudioApi* | [**renameTrackCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#renameTrackCollection) | **POST** /v2/audio/collections/{id} | Rename audio collections
*shutterstock-api.AudioApi* | [**searchTracks**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/AudioApi.md#searchTracks) | **GET** /v2/audio/search | Search for tracks
*shutterstock-api.CatalogApi* | [**addToCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#addToCollection) | **POST** /v2/catalog/collections/{collection_id}/items | Add items to catalog collections
*shutterstock-api.CatalogApi* | [**createCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#createCollection) | **POST** /v2/catalog/collections | Create catalog collections
*shutterstock-api.CatalogApi* | [**deleteCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#deleteCollection) | **DELETE** /v2/catalog/collections/{collection_id} | Delete catalog collections
*shutterstock-api.CatalogApi* | [**deleteFromCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#deleteFromCollection) | **DELETE** /v2/catalog/collections/{collection_id}/items | Remove items from catalog collection
*shutterstock-api.CatalogApi* | [**getCollections**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#getCollections) | **GET** /v2/catalog/collections | List catalog collections
*shutterstock-api.CatalogApi* | [**searchCatalog**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#searchCatalog) | **GET** /v2/catalog/search | Search catalogs for assets
*shutterstock-api.CatalogApi* | [**updateCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/CatalogApi.md#updateCollection) | **PATCH** /v2/catalog/collections/{collection_id} | Update collection metadata
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
*shutterstock-api.EditorialImagesApi* | [**getEditorialCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialCategories) | **GET** /v2/editorial/categories | (Deprecated) List editorial categories
*shutterstock-api.EditorialImagesApi* | [**getEditorialImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImage) | **GET** /v2/editorial/images/{id} | Get editorial content details
*shutterstock-api.EditorialImagesApi* | [**getEditorialImageLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImageLicenseList) | **GET** /v2/editorial/images/licenses | List editorial image licenses
*shutterstock-api.EditorialImagesApi* | [**getEditorialImageLivefeed**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImageLivefeed) | **GET** /v2/editorial/images/livefeeds/{id} | Get editorial livefeed
*shutterstock-api.EditorialImagesApi* | [**getEditorialImageLivefeedItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImageLivefeedItems) | **GET** /v2/editorial/images/livefeeds/{id}/items | Get editorial livefeed items
*shutterstock-api.EditorialImagesApi* | [**getEditorialImageLivefeedList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImageLivefeedList) | **GET** /v2/editorial/images/livefeeds | Get editorial livefeed list
*shutterstock-api.EditorialImagesApi* | [**getEditorialImage_0**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialImage_0) | **GET** /v2/editorial/{id} | (Deprecated) Get editorial content details
*shutterstock-api.EditorialImagesApi* | [**getEditorialLivefeed**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialLivefeed) | **GET** /v2/editorial/livefeeds/{id} | (Deprecated) Get editorial livefeed
*shutterstock-api.EditorialImagesApi* | [**getEditorialLivefeedItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialLivefeedItems) | **GET** /v2/editorial/livefeeds/{id}/items | (Deprecated) Get editorial livefeed items
*shutterstock-api.EditorialImagesApi* | [**getEditorialLivefeedList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getEditorialLivefeedList) | **GET** /v2/editorial/livefeeds | (Deprecated) Get editorial livefeed list
*shutterstock-api.EditorialImagesApi* | [**getUpdatedEditorialImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getUpdatedEditorialImage) | **GET** /v2/editorial/updated | (Deprecated) List updated content
*shutterstock-api.EditorialImagesApi* | [**getUpdatedEditorialImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#getUpdatedEditorialImages) | **GET** /v2/editorial/images/updated | List updated content
*shutterstock-api.EditorialImagesApi* | [**licenseEditorialImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#licenseEditorialImage) | **POST** /v2/editorial/licenses | (Deprecated) License editorial content
*shutterstock-api.EditorialImagesApi* | [**licenseEditorialImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#licenseEditorialImages) | **POST** /v2/editorial/images/licenses | License editorial content
*shutterstock-api.EditorialImagesApi* | [**listEditorialImageCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#listEditorialImageCategories) | **GET** /v2/editorial/images/categories | List editorial categories
*shutterstock-api.EditorialImagesApi* | [**searchEditorial**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#searchEditorial) | **GET** /v2/editorial/search | (Deprecated) Search editorial content
*shutterstock-api.EditorialImagesApi* | [**searchEditorialImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialImagesApi.md#searchEditorialImages) | **GET** /v2/editorial/images/search | Search editorial images
*shutterstock-api.EditorialVideoApi* | [**getEditorialVideo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialVideoApi.md#getEditorialVideo) | **GET** /v2/editorial/videos/{id} | Get editorial video content details
*shutterstock-api.EditorialVideoApi* | [**getEditorialVideoLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialVideoApi.md#getEditorialVideoLicenseList) | **GET** /v2/editorial/videos/licenses | List editorial video licenses
*shutterstock-api.EditorialVideoApi* | [**licenseEditorialVideo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialVideoApi.md#licenseEditorialVideo) | **POST** /v2/editorial/videos/licenses | License editorial video content
*shutterstock-api.EditorialVideoApi* | [**listEditorialVideoCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialVideoApi.md#listEditorialVideoCategories) | **GET** /v2/editorial/videos/categories | List editorial video categories
*shutterstock-api.EditorialVideoApi* | [**searchEditorialVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/EditorialVideoApi.md#searchEditorialVideos) | **GET** /v2/editorial/videos/search | Search editorial video content
*shutterstock-api.ImagesApi* | [**addImageCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#addImageCollectionItems) | **POST** /v2/images/collections/{id}/items | Add images to collections
*shutterstock-api.ImagesApi* | [**bulkSearchImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#bulkSearchImages) | **POST** /v2/bulk_search/images | Run multiple image searches
*shutterstock-api.ImagesApi* | [**createImageCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#createImageCollection) | **POST** /v2/images/collections | Create image collections
*shutterstock-api.ImagesApi* | [**deleteImageCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#deleteImageCollection) | **DELETE** /v2/images/collections/{id} | Delete image collections
*shutterstock-api.ImagesApi* | [**deleteImageCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#deleteImageCollectionItems) | **DELETE** /v2/images/collections/{id}/items | Remove images from collections
*shutterstock-api.ImagesApi* | [**downloadImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#downloadImage) | **POST** /v2/images/licenses/{id}/downloads | Download images
*shutterstock-api.ImagesApi* | [**getFeaturedImageCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedImageCollection) | **GET** /v2/images/collections/featured/{id} | Get the details of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedImageCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedImageCollectionItems) | **GET** /v2/images/collections/featured/{id}/items | Get the contents of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedImageCollectionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getFeaturedImageCollectionList) | **GET** /v2/images/collections/featured | List featured image collections
*shutterstock-api.ImagesApi* | [**getImage**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImage) | **GET** /v2/images/{id} | Get details about images
*shutterstock-api.ImagesApi* | [**getImageCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageCollection) | **GET** /v2/images/collections/{id} | Get the details of image collections
*shutterstock-api.ImagesApi* | [**getImageCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageCollectionItems) | **GET** /v2/images/collections/{id}/items | Get the contents of image collections
*shutterstock-api.ImagesApi* | [**getImageCollectionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageCollectionList) | **GET** /v2/images/collections | List image collections
*shutterstock-api.ImagesApi* | [**getImageKeywordSuggestions**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageKeywordSuggestions) | **POST** /v2/images/search/suggestions | Get keywords from text
*shutterstock-api.ImagesApi* | [**getImageLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageLicenseList) | **GET** /v2/images/licenses | List image licenses
*shutterstock-api.ImagesApi* | [**getImageList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageList) | **GET** /v2/images | List images
*shutterstock-api.ImagesApi* | [**getImageRecommendations**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageRecommendations) | **GET** /v2/images/recommendations | List recommended images
*shutterstock-api.ImagesApi* | [**getImageSuggestions**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getImageSuggestions) | **GET** /v2/images/search/suggestions | Get suggestions for a search term
*shutterstock-api.ImagesApi* | [**getUpdatedImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#getUpdatedImages) | **GET** /v2/images/updated | List updated images
*shutterstock-api.ImagesApi* | [**licenseImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#licenseImages) | **POST** /v2/images/licenses | License images
*shutterstock-api.ImagesApi* | [**listImageCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#listImageCategories) | **GET** /v2/images/categories | List image categories
*shutterstock-api.ImagesApi* | [**listSimilarImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#listSimilarImages) | **GET** /v2/images/{id}/similar | List similar images
*shutterstock-api.ImagesApi* | [**renameImageCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#renameImageCollection) | **POST** /v2/images/collections/{id} | Rename image collections
*shutterstock-api.ImagesApi* | [**searchImages**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/ImagesApi.md#searchImages) | **GET** /v2/images/search | Search for images
*shutterstock-api.SoundEffectsApi* | [**downloadSfx**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#downloadSfx) | **POST** /v2/sfx/licenses/{id}/downloads | Download sound effects
*shutterstock-api.SoundEffectsApi* | [**getSfxDetails**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#getSfxDetails) | **GET** /v2/sfx/{id} | Get details about sound effects
*shutterstock-api.SoundEffectsApi* | [**getSfxLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#getSfxLicenseList) | **GET** /v2/sfx/licenses | List sound effects licenses
*shutterstock-api.SoundEffectsApi* | [**getSfxListDetails**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#getSfxListDetails) | **GET** /v2/sfx | List details about sound effects
*shutterstock-api.SoundEffectsApi* | [**licensesSFX**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#licensesSFX) | **POST** /v2/sfx/licenses | License sound effects
*shutterstock-api.SoundEffectsApi* | [**searchSFX**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/SoundEffectsApi.md#searchSFX) | **GET** /v2/sfx/search | Search for sound effects
*shutterstock-api.TestApi* | [**echo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/TestApi.md#echo) | **GET** /v2/test | Echo text
*shutterstock-api.TestApi* | [**validate**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/TestApi.md#validate) | **GET** /v2/test/validate | Validate input
*shutterstock-api.UsersApi* | [**getAccessToken**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getAccessToken) | **GET** /v2/user/access_token | Get access token details
*shutterstock-api.UsersApi* | [**getUser**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getUser) | **GET** /v2/user | Get user details
*shutterstock-api.UsersApi* | [**getUserSubscriptionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/UsersApi.md#getUserSubscriptionList) | **GET** /v2/user/subscriptions | List user subscriptions
*shutterstock-api.VideosApi* | [**addVideoCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#addVideoCollectionItems) | **POST** /v2/videos/collections/{id}/items | Add videos to collections
*shutterstock-api.VideosApi* | [**createVideoCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#createVideoCollection) | **POST** /v2/videos/collections | Create video collections
*shutterstock-api.VideosApi* | [**deleteVideoCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#deleteVideoCollection) | **DELETE** /v2/videos/collections/{id} | Delete video collections
*shutterstock-api.VideosApi* | [**deleteVideoCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#deleteVideoCollectionItems) | **DELETE** /v2/videos/collections/{id}/items | Remove videos from collections
*shutterstock-api.VideosApi* | [**downloadVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#downloadVideos) | **POST** /v2/videos/licenses/{id}/downloads | Download videos
*shutterstock-api.VideosApi* | [**findSimilarVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#findSimilarVideos) | **GET** /v2/videos/{id}/similar | List similar videos
*shutterstock-api.VideosApi* | [**getFeaturedVideoCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getFeaturedVideoCollection) | **GET** /v2/videos/collections/featured/{id} | Get the details of featured video collections
*shutterstock-api.VideosApi* | [**getFeaturedVideoCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getFeaturedVideoCollectionItems) | **GET** /v2/videos/collections/featured/{id}/items | Get the contents of featured video collections
*shutterstock-api.VideosApi* | [**getFeaturedVideoCollectionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getFeaturedVideoCollectionList) | **GET** /v2/videos/collections/featured | List featured video collections
*shutterstock-api.VideosApi* | [**getUpdatedVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getUpdatedVideos) | **GET** /v2/videos/updated | List updated videos
*shutterstock-api.VideosApi* | [**getVideo**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideo) | **GET** /v2/videos/{id} | Get details about videos
*shutterstock-api.VideosApi* | [**getVideoCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoCollection) | **GET** /v2/videos/collections/{id} | Get the details of video collections
*shutterstock-api.VideosApi* | [**getVideoCollectionItems**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoCollectionItems) | **GET** /v2/videos/collections/{id}/items | Get the contents of video collections
*shutterstock-api.VideosApi* | [**getVideoCollectionList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoCollectionList) | **GET** /v2/videos/collections | List video collections
*shutterstock-api.VideosApi* | [**getVideoLicenseList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoLicenseList) | **GET** /v2/videos/licenses | List video licenses
*shutterstock-api.VideosApi* | [**getVideoList**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoList) | **GET** /v2/videos | List videos
*shutterstock-api.VideosApi* | [**getVideoSuggestions**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#getVideoSuggestions) | **GET** /v2/videos/search/suggestions | Get suggestions for a search term
*shutterstock-api.VideosApi* | [**licenseVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#licenseVideos) | **POST** /v2/videos/licenses | License videos
*shutterstock-api.VideosApi* | [**listVideoCategories**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#listVideoCategories) | **GET** /v2/videos/categories | List video categories
*shutterstock-api.VideosApi* | [**renameVideoCollection**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#renameVideoCollection) | **POST** /v2/videos/collections/{id} | Rename video collections
*shutterstock-api.VideosApi* | [**searchVideos**](https://github.com/shutterstock/public-api-javascript-sdk/blob/master/docs/VideosApi.md#searchVideos) | **GET** /v2/videos/search | Search for videos

