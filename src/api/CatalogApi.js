/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.21
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
    define(['../ApiClient', '../model/CatalogCollection', '../model/CatalogCollectionDataList', '../model/CatalogCollectionItemDataList', '../model/CreateCatalogCollection', '../model/CreateCatalogCollectionItems', '../model/RemoveCatalogCollectionItems', '../model/UpdateCatalogCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogCollection'), require('../model/CatalogCollectionDataList'), require('../model/CatalogCollectionItemDataList'), require('../model/CreateCatalogCollection'), require('../model/CreateCatalogCollectionItems'), require('../model/RemoveCatalogCollectionItems'), require('../model/UpdateCatalogCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollection, root.ShutterstockApiReference.CatalogCollectionDataList, root.ShutterstockApiReference.CatalogCollectionItemDataList, root.ShutterstockApiReference.CreateCatalogCollection, root.ShutterstockApiReference.CreateCatalogCollectionItems, root.ShutterstockApiReference.RemoveCatalogCollectionItems, root.ShutterstockApiReference.UpdateCatalogCollection);
  }
}(this, function(ApiClient, CatalogCollection, CatalogCollectionDataList, CatalogCollectionItemDataList, CreateCatalogCollection, CreateCatalogCollectionItems, RemoveCatalogCollectionItems, UpdateCatalogCollection) {
  'use strict';

  /**
   * Catalog service.
   * @module api/CatalogApi
   * @version 1.1.21
   */

  /**
   * Constructs a new CatalogApi. 
   * @alias module:api/CatalogApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.1.21',
      });
    };




    /**
     * Add items to catalog collections
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @param {String} collection_id The ID of the collection to add assets to
     * @param {module:model/CreateCatalogCollectionItems} body Collection item attributes to add to collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollection} and HTTP response
     */
    this.addToCollectionWithHttpInfo = function(collection_id, body) {
      var postBody = body;

      // verify the required parameter 'collection_id' is set
      if (collection_id === undefined || collection_id === null) {
        throw new Error("Missing the required parameter 'collection_id' when calling addToCollection");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addToCollection");
      }


      var pathParams = {
        'collection_id': collection_id
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
      var returnType = CatalogCollection;

      return this.apiClient.callApi(
        '/v2/catalog/collections/{collection_id}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add items to catalog collections
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     * @param {String} collection_id The ID of the collection to add assets to
     * @param {module:model/CreateCatalogCollectionItems} body Collection item attributes to add to collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollection}
     */
    this.addToCollection = function(collection_id, body) {
      return this.addToCollectionWithHttpInfo(collection_id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create catalog collections
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @param {module:model/CreateCatalogCollection} body Create a catalog collection and, optionally, add items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollection} and HTTP response
     */
    this.createCollectionWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCollection");
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
      var returnType = CatalogCollection;

      return this.apiClient.callApi(
        '/v2/catalog/collections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create catalog collections
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     * @param {module:model/CreateCatalogCollection} body Create a catalog collection and, optionally, add items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollection}
     */
    this.createCollection = function(body) {
      return this.createCollectionWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete catalog collections
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @param {String} collection_id The ID of the collection to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCollectionWithHttpInfo = function(collection_id) {
      var postBody = null;

      // verify the required parameter 'collection_id' is set
      if (collection_id === undefined || collection_id === null) {
        throw new Error("Missing the required parameter 'collection_id' when calling deleteCollection");
      }


      var pathParams = {
        'collection_id': collection_id
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/catalog/collections/{collection_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete catalog collections
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     * @param {String} collection_id The ID of the collection to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCollection = function(collection_id) {
      return this.deleteCollectionWithHttpInfo(collection_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove items from catalog collection
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @param {String} collection_id The ID of the collection to remove assets from
     * @param {module:model/RemoveCatalogCollectionItems} body Items to remove from the collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollection} and HTTP response
     */
    this.deleteFromCollectionWithHttpInfo = function(collection_id, body) {
      var postBody = body;

      // verify the required parameter 'collection_id' is set
      if (collection_id === undefined || collection_id === null) {
        throw new Error("Missing the required parameter 'collection_id' when calling deleteFromCollection");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteFromCollection");
      }


      var pathParams = {
        'collection_id': collection_id
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
      var returnType = CatalogCollection;

      return this.apiClient.callApi(
        '/v2/catalog/collections/{collection_id}/items', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove items from catalog collection
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     * @param {String} collection_id The ID of the collection to remove assets from
     * @param {module:model/RemoveCatalogCollectionItems} body Items to remove from the collection
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollection}
     */
    this.deleteFromCollection = function(collection_id, body) {
      return this.deleteFromCollectionWithHttpInfo(collection_id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List catalog collections
     * This endpoint returns a list of catalog collections.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort by (default to newest)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollectionDataList} and HTTP response
     */
    this.getCollectionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CatalogCollectionDataList;

      return this.apiClient.callApi(
        '/v2/catalog/collections', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List catalog collections
     * This endpoint returns a list of catalog collections.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort by (default to newest)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollectionDataList}
     */
    this.getCollections = function(opts) {
      return this.getCollectionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search catalogs for assets
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sort by (default to newest)
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {Array.<String>} opts.collection_id Filter by collection id
     * @param {Array.<module:model/String>} opts.asset_type Filter by asset type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollectionItemDataList} and HTTP response
     */
    this.searchCatalogWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': opts['sort'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
        'collection_id': {
          value: opts['collection_id'],
          collectionFormat: 'multi'
        },
        'asset_type': {
          value: opts['asset_type'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CatalogCollectionItemDataList;

      return this.apiClient.callApi(
        '/v2/catalog/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search catalogs for assets
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Sort by (default to newest)
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {Array.<String>} opts.collection_id Filter by collection id
     * @param {Array.<module:model/String>} opts.asset_type Filter by asset type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollectionItemDataList}
     */
    this.searchCatalog = function(opts) {
      return this.searchCatalogWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update collection metadata
     * This endpoint updates the metadata of a catalog collection.
     * @param {String} collection_id ID of collection that needs to be modified
     * @param {module:model/UpdateCatalogCollection} body Collections Metadata to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogCollection} and HTTP response
     */
    this.updateCollectionWithHttpInfo = function(collection_id, body) {
      var postBody = body;

      // verify the required parameter 'collection_id' is set
      if (collection_id === undefined || collection_id === null) {
        throw new Error("Missing the required parameter 'collection_id' when calling updateCollection");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCollection");
      }


      var pathParams = {
        'collection_id': collection_id
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
      var returnType = CatalogCollection;

      return this.apiClient.callApi(
        '/v2/catalog/collections/{collection_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update collection metadata
     * This endpoint updates the metadata of a catalog collection.
     * @param {String} collection_id ID of collection that needs to be modified
     * @param {module:model/UpdateCatalogCollection} body Collections Metadata to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogCollection}
     */
    this.updateCollection = function(collection_id, body) {
      return this.updateCollectionWithHttpInfo(collection_id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
