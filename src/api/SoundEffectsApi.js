/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.40
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
    define(['../ApiClient', '../model/DownloadHistoryDataList', '../model/LicenseSFXRequest', '../model/LicenseSFXResultDataList', '../model/SFX', '../model/SFXDataList', '../model/SFXSearchResults', '../model/SfxUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DownloadHistoryDataList'), require('../model/LicenseSFXRequest'), require('../model/LicenseSFXResultDataList'), require('../model/SFX'), require('../model/SFXDataList'), require('../model/SFXSearchResults'), require('../model/SfxUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.SoundEffectsApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.DownloadHistoryDataList, root.ShutterstockApiReference.LicenseSFXRequest, root.ShutterstockApiReference.LicenseSFXResultDataList, root.ShutterstockApiReference.SFX, root.ShutterstockApiReference.SFXDataList, root.ShutterstockApiReference.SFXSearchResults, root.ShutterstockApiReference.SfxUrl);
  }
}(this, function(ApiClient, DownloadHistoryDataList, LicenseSFXRequest, LicenseSFXResultDataList, SFX, SFXDataList, SFXSearchResults, SfxUrl) {
  'use strict';

  /**
   * SoundEffects service.
   * @module api/SoundEffectsApi
   * @version 1.1.40
   */

  /**
   * Constructs a new SoundEffectsApi. 
   * @alias module:api/SoundEffectsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.1.40',
      });
    };




    /**
     * Download sound effects
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @param {String} id License ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SfxUrl} and HTTP response
     */
    this.downloadSfxWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadSfx");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SfxUrl;

      return this.apiClient.callApi(
        '/v2/sfx/licenses/{id}/downloads', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Download sound effects
     * This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.
     * @param {String} id License ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SfxUrl}
     */
    this.downloadSfx = function(id) {
      return this.downloadSfxWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about sound effects
     * This endpoint shows information about a sound effect.
     * @param {Number} id Audio track ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.library Which library to fetch from
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SFX} and HTTP response
     */
    this.getSfxDetailsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSfxDetails");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'language': opts['language'],
        'view': opts['view'],
        'library': opts['library'],
        'search_id': opts['search_id'],
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
      var returnType = SFX;

      return this.apiClient.callApi(
        '/v2/sfx/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about sound effects
     * This endpoint shows information about a sound effect.
     * @param {Number} id Audio track ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.library Which library to fetch from
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SFX}
     */
    this.getSfxDetails = function(id, opts) {
      return this.getSfxDetailsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List sound effects licenses
     * This endpoint lists existing licenses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sfx_id Show licenses for the specified sound effects ID
     * @param {String} opts.license Show sound effects that are available with the specified license, such as `standard` or `enhanced`
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order (default to newest)
     * @param {String} opts.username Filter licenses by username of licensee
     * @param {Date} opts.start_date Show licenses created on or after the specified date
     * @param {Date} opts.end_date Show licenses created before the specified date
     * @param {String} opts.license_id Filter by the license ID
     * @param {module:model/String} opts.download_availability Filter licenses by download availability (default to all)
     * @param {Boolean} opts.team_history Set to true to see license history for all members of your team. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DownloadHistoryDataList} and HTTP response
     */
    this.getSfxLicenseListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sfx_id': opts['sfx_id'],
        'license': opts['license'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'sort': opts['sort'],
        'username': opts['username'],
        'start_date': opts['start_date'],
        'end_date': opts['end_date'],
        'license_id': opts['license_id'],
        'download_availability': opts['download_availability'],
        'team_history': opts['team_history'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DownloadHistoryDataList;

      return this.apiClient.callApi(
        '/v2/sfx/licenses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List sound effects licenses
     * This endpoint lists existing licenses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sfx_id Show licenses for the specified sound effects ID
     * @param {String} opts.license Show sound effects that are available with the specified license, such as `standard` or `enhanced`
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order (default to newest)
     * @param {String} opts.username Filter licenses by username of licensee
     * @param {Date} opts.start_date Show licenses created on or after the specified date
     * @param {Date} opts.end_date Show licenses created before the specified date
     * @param {String} opts.license_id Filter by the license ID
     * @param {module:model/String} opts.download_availability Filter licenses by download availability (default to all)
     * @param {Boolean} opts.team_history Set to true to see license history for all members of your team. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DownloadHistoryDataList}
     */
    this.getSfxLicenseList = function(opts) {
      return this.getSfxLicenseListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List details about sound effects
     * This endpoint shows information about sound effects.
     * @param {Array.<String>} id One or more sound effect IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {module:model/String} opts.library Which library to fetch from
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SFXDataList} and HTTP response
     */
    this.getSfxListDetailsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSfxListDetails");
      }


      var pathParams = {
      };
      var queryParams = {
        'view': opts['view'],
        'language': opts['language'],
        'library': opts['library'],
        'search_id': opts['search_id'],
      };
      var collectionQueryParams = {
        'id': {
          value: id,
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
      var returnType = SFXDataList;

      return this.apiClient.callApi(
        '/v2/sfx', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List details about sound effects
     * This endpoint shows information about sound effects.
     * @param {Array.<String>} id One or more sound effect IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.language Language for the keywords and categories in the response
     * @param {module:model/String} opts.library Which library to fetch from
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SFXDataList}
     */
    this.getSfxListDetails = function(id, opts) {
      return this.getSfxListDetailsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * License sound effects
     * This endpoint licenses sounds effect assets.
     * @param {module:model/LicenseSFXRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseSFXResultDataList} and HTTP response
     */
    this.licensesSFXWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling licensesSFX");
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
      var returnType = LicenseSFXResultDataList;

      return this.apiClient.callApi(
        '/v2/sfx/licenses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * License sound effects
     * This endpoint licenses sounds effect assets.
     * @param {module:model/LicenseSFXRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseSFXResultDataList}
     */
    this.licensesSFX = function(body) {
      return this.licensesSFXWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for sound effects
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.added_date Show sound effects added on the specified date
     * @param {Date} opts.added_date_start Show sound effects added on or after the specified date
     * @param {Date} opts.added_date_end Show sound effects added before the specified date
     * @param {Number} opts.duration Show sound effects with the specified duration in seconds
     * @param {Number} opts.duration_from Show sound effects with the specified duration or longer in seconds
     * @param {Number} opts.duration_to Show sound effects with the specified duration or shorter in seconds
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.sort Sort by (default to popular)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.language Set query and result language (uses Accept-Language header if not set)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SFXSearchResults} and HTTP response
     */
    this.searchSFXWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'added_date': opts['added_date'],
        'added_date_start': opts['added_date_start'],
        'added_date_end': opts['added_date_end'],
        'duration': opts['duration'],
        'duration_from': opts['duration_from'],
        'duration_to': opts['duration_to'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'query': opts['query'],
        'safe': opts['safe'],
        'sort': opts['sort'],
        'view': opts['view'],
        'language': opts['language'],
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
      var returnType = SFXSearchResults;

      return this.apiClient.callApi(
        '/v2/sfx/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for sound effects
     * This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.added_date Show sound effects added on the specified date
     * @param {Date} opts.added_date_start Show sound effects added on or after the specified date
     * @param {Date} opts.added_date_end Show sound effects added before the specified date
     * @param {Number} opts.duration Show sound effects with the specified duration in seconds
     * @param {Number} opts.duration_from Show sound effects with the specified duration or longer in seconds
     * @param {Number} opts.duration_to Show sound effects with the specified duration or shorter in seconds
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {Boolean} opts.safe Enable or disable safe search (default to true)
     * @param {module:model/String} opts.sort Sort by (default to popular)
     * @param {module:model/String} opts.view Amount of detail to render in the response (default to minimal)
     * @param {module:model/String} opts.language Set query and result language (uses Accept-Language header if not set)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SFXSearchResults}
     */
    this.searchSFX = function(opts) {
      return this.searchSFXWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
