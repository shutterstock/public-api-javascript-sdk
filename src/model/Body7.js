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
    define(['../ApiClient', '../model/V2videoslicensesVideos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2videoslicensesVideos'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Body7 = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.V2videoslicensesVideos);
  }
}(this, function(ApiClient, V2videoslicensesVideos) {
  'use strict';




  /**
   * The Body7 model module.
   * @module model/Body7
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>Body7</code>.
   * List of videos to license
   * @alias module:model/Body7
   * @class
   * @param videos {Array.<module:model/V2videoslicensesVideos>} Videos to license
   */
  var exports = function(videos) {
    var _this = this;

    _this['videos'] = videos;
  };

  /**
   * Constructs a <code>Body7</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body7} obj Optional instance to populate.
   * @return {module:model/Body7} The populated <code>Body7</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('videos')) {
        obj['videos'] = ApiClient.convertToType(data['videos'], [V2videoslicensesVideos]);
      }
    }
    return obj;
  }

  /**
   * Videos to license
   * @member {Array.<module:model/V2videoslicensesVideos>} videos
   */
  exports.prototype['videos'] = undefined;



  return exports;
}));

