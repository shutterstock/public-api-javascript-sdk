/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.39
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
    define(['../ApiClient', '../model/Cookie', '../model/LicenseRequestMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cookie'), require('./LicenseRequestMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseVideo = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Cookie, root.ShutterstockApiReference.LicenseRequestMetadata);
  }
}(this, function(ApiClient, Cookie, LicenseRequestMetadata) {
  'use strict';




  /**
   * The LicenseVideo model module.
   * @module model/LicenseVideo
   * @version 1.1.39
   */

  /**
   * Constructs a new <code>LicenseVideo</code>.
   * Data required to license a video
   * @alias module:model/LicenseVideo
   * @class
   * @param video_id {String} ID of the video being licensed
   */
  var exports = function(video_id) {
    var _this = this;









    _this['video_id'] = video_id;
  };

  /**
   * Constructs a <code>LicenseVideo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseVideo} obj Optional instance to populate.
   * @return {module:model/LicenseVideo} The populated <code>LicenseVideo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth_cookie')) {
        obj['auth_cookie'] = Cookie.constructFromObject(data['auth_cookie']);
      }
      if (data.hasOwnProperty('editorial_acknowledgement')) {
        obj['editorial_acknowledgement'] = ApiClient.convertToType(data['editorial_acknowledgement'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = LicenseRequestMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('show_modal')) {
        obj['show_modal'] = ApiClient.convertToType(data['show_modal'], 'Boolean');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'String');
      }
      if (data.hasOwnProperty('subscription_id')) {
        obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
      }
      if (data.hasOwnProperty('video_id')) {
        obj['video_id'] = ApiClient.convertToType(data['video_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Cookie} auth_cookie
   */
  exports.prototype['auth_cookie'] = undefined;
  /**
   * Whether or not this item is editorial content
   * @member {Boolean} editorial_acknowledgement
   */
  exports.prototype['editorial_acknowledgement'] = undefined;
  /**
   * @member {module:model/LicenseRequestMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * ID of the search that led to this licensing event
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * (Deprecated)
   * @member {Boolean} show_modal
   */
  exports.prototype['show_modal'] = undefined;
  /**
   * Size of the video being licensed
   * @member {module:model/LicenseVideo.SizeEnum} size
   */
  exports.prototype['size'] = undefined;
  /**
   * ID of the subscription used for this license
   * @member {String} subscription_id
   */
  exports.prototype['subscription_id'] = undefined;
  /**
   * ID of the video being licensed
   * @member {String} video_id
   */
  exports.prototype['video_id'] = undefined;


  /**
   * Allowed values for the <code>size</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SizeEnum = {
    /**
     * value: "web"
     * @const
     */
    "web": "web",
    /**
     * value: "sd"
     * @const
     */
    "sd": "sd",
    /**
     * value: "hd"
     * @const
     */
    "hd": "hd",
    /**
     * value: "4k"
     * @const
     */
    "_4k": "4k"  };


  return exports;
}));


