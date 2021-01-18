/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.31
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
    define(['../ApiClient', '../model/AuthorizeResponse', '../model/OauthAccessTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthorizeResponse'), require('../model/OauthAccessTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.OauthApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AuthorizeResponse, root.ShutterstockApiReference.OauthAccessTokenResponse);
  }
}(this, function(ApiClient, AuthorizeResponse, OauthAccessTokenResponse) {
  'use strict';

  /**
   * Oauth service.
   * @module api/OauthApi
   * @version 1.0.31
   */

  /**
   * Constructs a new OauthApi. 
   * @alias module:api/OauthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Authorize applications
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @param {String} client_id Client ID (Consumer Key) of your application
     * @param {String} redirect_uri The callback URI to send the request to after authorization; must use a host name that is registered with your application
     * @param {module:model/String} response_type Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
     * @param {String} state Unique value used by the calling app to verify the request
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.realm User type to be authorized (usually 'customer') (default to customer)
     * @param {String} opts.scope Space-separated list of scopes to be authorized (default to user.view)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.authorizeWithHttpInfo = function(client_id, redirect_uri, response_type, state, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'client_id' is set
      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling authorize");
      }

      // verify the required parameter 'redirect_uri' is set
      if (redirect_uri === undefined || redirect_uri === null) {
        throw new Error("Missing the required parameter 'redirect_uri' when calling authorize");
      }

      // verify the required parameter 'response_type' is set
      if (response_type === undefined || response_type === null) {
        throw new Error("Missing the required parameter 'response_type' when calling authorize");
      }

      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling authorize");
      }


      var pathParams = {
      };
      var queryParams = {
        'client_id': client_id,
        'realm': opts['realm'],
        'redirect_uri': redirect_uri,
        'response_type': response_type,
        'scope': opts['scope'],
        'state': state,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/oauth/authorize', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Authorize applications
     * This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
     * @param {String} client_id Client ID (Consumer Key) of your application
     * @param {String} redirect_uri The callback URI to send the request to after authorization; must use a host name that is registered with your application
     * @param {module:model/String} response_type Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
     * @param {String} state Unique value used by the calling app to verify the request
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.realm User type to be authorized (usually 'customer') (default to customer)
     * @param {String} opts.scope Space-separated list of scopes to be authorized (default to user.view)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.authorize = function(client_id, redirect_uri, response_type, state, opts) {
      return this.authorizeWithHttpInfo(client_id, redirect_uri, response_type, state, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get access tokens
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.client_id Client ID (Consumer Key) of your application
     * @param {String} opts.client_secret Client Secret (Consumer Secret) of your application
     * @param {String} opts.code Response code from the /oauth/authorize flow; required if grant_type=authorization_code
     * @param {module:model/String} opts.grant_type Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     * @param {module:model/String} opts.realm User type to be authorized (usually 'customer') (default to customer)
     * @param {module:model/String} opts.expires Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthAccessTokenResponse} and HTTP response
     */
    this.createAccessTokenWithHttpInfo = function(opts) {
      opts = opts || {};
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
        'client_id': opts['client_id'],
        'client_secret': opts['client_secret'],
        'code': opts['code'],
        'grant_type': opts['grant_type'],
        'realm': opts['realm'],
        'expires': opts['expires']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OauthAccessTokenResponse;

      return this.apiClient.callApi(
        '/v2/oauth/access_token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get access tokens
     * This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
     * @param {Object} opts Optional parameters
     * @param {String} opts.client_id Client ID (Consumer Key) of your application
     * @param {String} opts.client_secret Client Secret (Consumer Secret) of your application
     * @param {String} opts.code Response code from the /oauth/authorize flow; required if grant_type=authorization_code
     * @param {module:model/String} opts.grant_type Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     * @param {module:model/String} opts.realm User type to be authorized (usually 'customer') (default to customer)
     * @param {module:model/String} opts.expires Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthAccessTokenResponse}
     */
    this.createAccessToken = function(opts) {
      return this.createAccessTokenWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
