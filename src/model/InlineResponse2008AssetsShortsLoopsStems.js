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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse2008AssetsShortsLoopsStems = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2008AssetsShortsLoopsStems model module.
   * @module model/InlineResponse2008AssetsShortsLoopsStems
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse2008AssetsShortsLoopsStems</code>.
   * Links for Shorts, Loops and Stems previews
   * @alias module:model/InlineResponse2008AssetsShortsLoopsStems
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2008AssetsShortsLoopsStems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008AssetsShortsLoopsStems} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008AssetsShortsLoopsStems} The populated <code>InlineResponse2008AssetsShortsLoopsStems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shorts')) {
        obj['shorts'] = ApiClient.convertToType(data['shorts'], Object);
      }
      if (data.hasOwnProperty('loops')) {
        obj['loops'] = ApiClient.convertToType(data['loops'], Object);
      }
      if (data.hasOwnProperty('stems')) {
        obj['stems'] = ApiClient.convertToType(data['stems'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} shorts
   */
  exports.prototype['shorts'] = undefined;
  /**
   * @member {Object} loops
   */
  exports.prototype['loops'] = undefined;
  /**
   * @member {Object} stems
   */
  exports.prototype['stems'] = undefined;



  return exports;
}));


