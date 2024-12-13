/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.42
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
    define(['../ApiClient', '../model/InlineResponse20029', '../model/InlineResponse20030'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20029'), require('../model/InlineResponse20030'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.UsersApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20029, root.ShutterstockApiReference.InlineResponse20030);
  }
}(this, function(ApiClient, InlineResponse20029, InlineResponse20030) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 1.1.42
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.1.42',
      });
    };




    /**
     * Get access token details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20030} and HTTP response
     */
    this.getAccessTokenWithHttpInfo = function() {
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

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/v2/user/access_token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get access token details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20030}
     */
    this.getAccessToken = function() {
      return this.getAccessTokenWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20029} and HTTP response
     */
    this.getUserWithHttpInfo = function() {
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

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/v2/user', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get user details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20029}
     */
    this.getUser = function() {
      return this.getUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List user subscriptions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getUserSubscriptionListWithHttpInfo = function() {
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

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v2/user/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List user subscriptions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getUserSubscriptionList = function() {
      return this.getUserSubscriptionListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
