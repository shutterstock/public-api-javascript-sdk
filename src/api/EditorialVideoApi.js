/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.30
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
    define(['../ApiClient', '../model/EditorialVideoCategoryResults', '../model/EditorialVideoContent', '../model/EditorialVideoSearchResults', '../model/LicenseEditorialContentResults', '../model/LicenseEditorialVideoContentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EditorialVideoCategoryResults'), require('../model/EditorialVideoContent'), require('../model/EditorialVideoSearchResults'), require('../model/LicenseEditorialContentResults'), require('../model/LicenseEditorialVideoContentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialVideoApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialVideoCategoryResults, root.ShutterstockApiReference.EditorialVideoContent, root.ShutterstockApiReference.EditorialVideoSearchResults, root.ShutterstockApiReference.LicenseEditorialContentResults, root.ShutterstockApiReference.LicenseEditorialVideoContentRequest);
  }
}(this, function(ApiClient, EditorialVideoCategoryResults, EditorialVideoContent, EditorialVideoSearchResults, LicenseEditorialContentResults, LicenseEditorialVideoContentRequest) {
  'use strict';

  /**
   * EditorialVideo service.
   * @module api/EditorialVideoApi
   * @version 1.0.30
   */

  /**
   * Constructs a new EditorialVideoApi. 
   * @alias module:api/EditorialVideoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get editorial video content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoContent} and HTTP response
     */
    this.editorialVideosDetailsWithHttpInfo = function(id, country) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editorialVideosDetails");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling editorialVideosDetails");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'country': country,
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
      var returnType = EditorialVideoContent;

      return this.apiClient.callApi(
        '/v2/editorial/videos/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial video content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoContent}
     */
    this.editorialVideosDetails = function(id, country) {
      return this.editorialVideosDetailsWithHttpInfo(id, country)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search editorial video content
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial video content that is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial video content within a certain editorial category; specify by category name
     * @param {Array.<String>} opts.supplier_code Show only editorial video content from certain suppliers
     * @param {Date} opts.date_start Show only editorial video content generated on or after a specific date
     * @param {Date} opts.date_end Show only editorial video content generated on or before a specific date
     * @param {module:model/String} opts.resolution Show only editorial video content with specific resolution
     * @param {Number} opts.fps Show only editorial video content generated with specific frames per second
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoSearchResults} and HTTP response
     */
    this.editorialVideosSearchWithHttpInfo = function(country, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling editorialVideosSearch");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': opts['query'],
        'sort': opts['sort'],
        'category': opts['category'],
        'country': country,
        'date_start': opts['date_start'],
        'date_end': opts['date_end'],
        'resolution': opts['resolution'],
        'fps': opts['fps'],
        'per_page': opts['per_page'],
        'cursor': opts['cursor'],
      };
      var collectionQueryParams = {
        'supplier_code': {
          value: opts['supplier_code'],
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
      var returnType = EditorialVideoSearchResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search editorial video content
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial video content that is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial video content within a certain editorial category; specify by category name
     * @param {Array.<String>} opts.supplier_code Show only editorial video content from certain suppliers
     * @param {Date} opts.date_start Show only editorial video content generated on or after a specific date
     * @param {Date} opts.date_end Show only editorial video content generated on or before a specific date
     * @param {module:model/String} opts.resolution Show only editorial video content with specific resolution
     * @param {Number} opts.fps Show only editorial video content generated with specific frames per second
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoSearchResults}
     */
    this.editorialVideosSearch = function(country, opts) {
      return this.editorialVideosSearchWithHttpInfo(country, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List editorial video categories
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoCategoryResults} and HTTP response
     */
    this.getEditorialCategoriesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialVideoCategoryResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/categories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List editorial video categories
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoCategoryResults}
     */
    this.getEditorialCategories = function() {
      return this.getEditorialCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * License editorial video content
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license.
     * @param {module:model/LicenseEditorialVideoContentRequest} body License editorial video content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseEditorialContentResults} and HTTP response
     */
    this.licenseEditorialVideoWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling licenseEditorialVideo");
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

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LicenseEditorialContentResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/licenses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * License editorial video content
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license.
     * @param {module:model/LicenseEditorialVideoContentRequest} body License editorial video content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseEditorialContentResults}
     */
    this.licenseEditorialVideo = function(body) {
      return this.licenseEditorialVideoWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
