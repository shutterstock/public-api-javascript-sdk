/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.2.0
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
    define(['../ApiClient', '../model/InlineResponse20027', '../model/InlineResponse2005'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20027'), require('../model/InlineResponse2005'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ContributorsApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20027, root.ShutterstockApiReference.InlineResponse2005);
  }
}(this, function(ApiClient, InlineResponse20027, InlineResponse2005) {
  'use strict';

  /**
   * Contributors service.
   * @module api/ContributorsApi
   * @version 1.2.0
   */

  /**
   * Constructs a new ContributorsApi. 
   * @alias module:api/ContributorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.2.0',
      });
    };




    /**
     * Get details about a single contributor
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @param {String} contributor_id Contributor ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20027} and HTTP response
     */
    this.getContributorWithHttpInfo = function(contributor_id) {
      var postBody = null;

      // verify the required parameter 'contributor_id' is set
      if (contributor_id === undefined || contributor_id === null) {
        throw new Error("Missing the required parameter 'contributor_id' when calling getContributor");
      }


      var pathParams = {
        'contributor_id': contributor_id
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
      var returnType = InlineResponse20027;

      return this.apiClient.callApi(
        '/v2/contributors/{contributor_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about a single contributor
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @param {String} contributor_id Contributor ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20027}
     */
    this.getContributor = function(contributor_id) {
      return this.getContributorWithHttpInfo(contributor_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the items in contributors' collections
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @param {String} contributor_id Contributor ID
     * @param {String} id Collection ID that belongs to the contributor
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getContributorCollectionItemsWithHttpInfo = function(contributor_id, id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contributor_id' is set
      if (contributor_id === undefined || contributor_id === null) {
        throw new Error("Missing the required parameter 'contributor_id' when calling getContributorCollectionItems");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContributorCollectionItems");
      }


      var pathParams = {
        'contributor_id': contributor_id,
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page'],
        'sort': opts['sort'],
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/contributors/{contributor_id}/collections/{id}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the items in contributors' collections
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     * @param {String} contributor_id Contributor ID
     * @param {String} id Collection ID that belongs to the contributor
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getContributorCollectionItems = function(contributor_id, id, opts) {
      return this.getContributorCollectionItemsWithHttpInfo(contributor_id, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about contributors' collections
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @param {String} contributor_id Contributor ID
     * @param {String} id Collection ID that belongs to the contributor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    this.getContributorCollectionsWithHttpInfo = function(contributor_id, id) {
      var postBody = null;

      // verify the required parameter 'contributor_id' is set
      if (contributor_id === undefined || contributor_id === null) {
        throw new Error("Missing the required parameter 'contributor_id' when calling getContributorCollections");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContributorCollections");
      }


      var pathParams = {
        'contributor_id': contributor_id,
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

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/v2/contributors/{contributor_id}/collections/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about contributors' collections
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @param {String} contributor_id Contributor ID
     * @param {String} id Collection ID that belongs to the contributor
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    this.getContributorCollections = function(contributor_id, id) {
      return this.getContributorCollectionsWithHttpInfo(contributor_id, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List contributors' collections
     * This endpoint lists collections based on contributor ID.
     * @param {String} contributor_id Contributor ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sort order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getContributorCollectionsListWithHttpInfo = function(contributor_id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contributor_id' is set
      if (contributor_id === undefined || contributor_id === null) {
        throw new Error("Missing the required parameter 'contributor_id' when calling getContributorCollectionsList");
      }


      var pathParams = {
        'contributor_id': contributor_id
      };
      var queryParams = {
        'sort': opts['sort'],
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/contributors/{contributor_id}/collections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List contributors' collections
     * This endpoint lists collections based on contributor ID.
     * @param {String} contributor_id Contributor ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sort order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getContributorCollectionsList = function(contributor_id, opts) {
      return this.getContributorCollectionsListWithHttpInfo(contributor_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about multiple contributors
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @param {Array.<String>} id One or more contributor IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getContributorListWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContributorList");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/contributors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about multiple contributors
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @param {Array.<String>} id One or more contributor IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getContributorList = function(id) {
      return this.getContributorListWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
