/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.34
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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ImageInsights = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageInsights model module.
   * @module model/ImageInsights
   * @version 1.1.34
   */

  /**
   * Constructs a new <code>ImageInsights</code>.
   * AI-powered insights about how the asset will perform for the objective and audience
   * @alias module:model/ImageInsights
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ImageInsights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageInsights} obj Optional instance to populate.
   * @return {module:model/ImageInsights} The populated <code>ImageInsights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} labels
   */
  exports.prototype['labels'] = undefined;



  return exports;
}));


