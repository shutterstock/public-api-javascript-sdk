/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.25
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ComputerVisionImageCreateResponse', '../model/ImageCreateRequest', '../model/ImageCreateResponse', '../model/ImageSearchResults', '../model/KeywordDataList', '../model/VideoSearchResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ComputerVisionImageCreateResponse'), require('../model/ImageCreateRequest'), require('../model/ImageCreateResponse'), require('../model/ImageSearchResults'), require('../model/KeywordDataList'), require('../model/VideoSearchResults'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ComputerVisionApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ComputerVisionImageCreateResponse, root.ShutterstockApiReference.ImageCreateRequest, root.ShutterstockApiReference.ImageCreateResponse, root.ShutterstockApiReference.ImageSearchResults, root.ShutterstockApiReference.KeywordDataList, root.ShutterstockApiReference.VideoSearchResults);
  }
}(this, function(ApiClient, ComputerVisionImageCreateResponse, ImageCreateRequest, ImageCreateResponse, ImageSearchResults, KeywordDataList, VideoSearchResults) {
  'use strict';

  /**
   * ComputerVision service.
   * @module api/ComputerVisionApi
   * @version 1.1.25
   */

  /**
   * Constructs a new ComputerVisionApi. 
   * @alias module:api/ComputerVisionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.1.25',
      });
    };




    /**
     * List suggested keywords
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @param {Object} asset_id The asset ID or upload ID to suggest keywords for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeywordDataList} and HTTP response
     */
    this.getKeywordsWithHttpInfo = function(asset_id) {
      var postBody = null;

      // verify the required parameter 'asset_id' is set
      if (asset_id === undefined || asset_id === null) {
        throw new Error("Missing the required parameter 'asset_id' when calling getKeywords");
      }


      var pathParams = {
      };
      var queryParams = {
        'asset_id': asset_id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = KeywordDataList;

      return this.apiClient.callApi(
        '/v2/cv/keywords', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List suggested keywords
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     * @param {Object} asset_id The asset ID or upload ID to suggest keywords for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeywordDataList}
     */
    this.getKeywords = function(asset_id) {
      return this.getKeywordsWithHttpInfo(asset_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List similar images
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @param {String} asset_id The asset ID or upload ID to find similar images for
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.license Show only images with the specified license (default to ["commercial"])
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageSearchResults} and HTTP response
     */
    this.getSimilarImagesWithHttpInfo = function(asset_id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'asset_id' is set
      if (asset_id === undefined || asset_id === null) {
        throw new Error("Missing the required parameter 'asset_id' when calling getSimilarImages");
      }


      var pathParams = {
      };
      var queryParams = {
        'asset_id': asset_id,
        'safe': opts['safe'],
        'language': opts['language'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'view': opts['view'],
      };
      var collectionQueryParams = {
        'license': {
          value: opts['license'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ImageSearchResults;

      return this.apiClient.callApi(
        '/v2/cv/similar/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List similar images
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     * @param {String} asset_id The asset ID or upload ID to find similar images for
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.license Show only images with the specified license (default to ["commercial"])
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageSearchResults}
     */
    this.getSimilarImages = function(asset_id, opts) {
      return this.getSimilarImagesWithHttpInfo(asset_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List similar videos
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @param {String} asset_id The asset ID or upload ID to find similar videos for
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.license Show only videos with the specified license (default to ["commercial"])
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoSearchResults} and HTTP response
     */
    this.getSimilarVideosWithHttpInfo = function(asset_id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'asset_id' is set
      if (asset_id === undefined || asset_id === null) {
        throw new Error("Missing the required parameter 'asset_id' when calling getSimilarVideos");
      }


      var pathParams = {
      };
      var queryParams = {
        'asset_id': asset_id,
        'safe': opts['safe'],
        'language': opts['language'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'view': opts['view'],
      };
      var collectionQueryParams = {
        'license': {
          value: opts['license'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VideoSearchResults;

      return this.apiClient.callApi(
        '/v2/cv/similar/videos', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List similar videos
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     * @param {String} asset_id The asset ID or upload ID to find similar videos for
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.license Show only videos with the specified license (default to ["commercial"])
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoSearchResults}
     */
    this.getSimilarVideos = function(asset_id, opts) {
      return this.getSimilarVideosWithHttpInfo(asset_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload ephemeral images
     * Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.
     * @param {module:model/ImageCreateRequest} body The image data in JPEG or PNG format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImageCreateResponse} and HTTP response
     */
    this.uploadEphemeralImageWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadEphemeralImage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ImageCreateResponse;

      return this.apiClient.callApi(
        '/v2/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload ephemeral images
     * Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.
     * @param {module:model/ImageCreateRequest} body The image data in JPEG or PNG format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImageCreateResponse}
     */
    this.uploadEphemeralImage = function(body) {
      return this.uploadEphemeralImageWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload images
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @param {module:model/ImageCreateRequest} body A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComputerVisionImageCreateResponse} and HTTP response
     */
    this.uploadImageWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadImage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ComputerVisionImageCreateResponse;

      return this.apiClient.callApi(
        '/v2/cv/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload images
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     * @param {module:model/ImageCreateRequest} body A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComputerVisionImageCreateResponse}
     */
    this.uploadImage = function(body) {
      return this.uploadImageWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
