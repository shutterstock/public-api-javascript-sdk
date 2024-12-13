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
    define(['../ApiClient', '../model/InlineResponse20022AssetsPreviewMp4', '../model/InlineResponse2007Assets4k'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20022AssetsPreviewMp4'), require('./InlineResponse2007Assets4k'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20022Assets = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20022AssetsPreviewMp4, root.ShutterstockApiReference.InlineResponse2007Assets4k);
  }
}(this, function(ApiClient, InlineResponse20022AssetsPreviewMp4, InlineResponse2007Assets4k) {
  'use strict';




  /**
   * The InlineResponse20022Assets model module.
   * @module model/InlineResponse20022Assets
   * @version 1.1.42
   */

  /**
   * Constructs a new <code>InlineResponse20022Assets</code>.
   * Asset information, including size and thumbnail URLs
   * @alias module:model/InlineResponse20022Assets
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse20022Assets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20022Assets} obj Optional instance to populate.
   * @return {module:model/InlineResponse20022Assets} The populated <code>InlineResponse20022Assets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('original')) {
        obj['original'] = InlineResponse2007Assets4k.constructFromObject(data['original']);
      }
      if (data.hasOwnProperty('preview_mp4')) {
        obj['preview_mp4'] = InlineResponse20022AssetsPreviewMp4.constructFromObject(data['preview_mp4']);
      }
      if (data.hasOwnProperty('preview_webm')) {
        obj['preview_webm'] = InlineResponse20022AssetsPreviewMp4.constructFromObject(data['preview_webm']);
      }
      if (data.hasOwnProperty('thumb_jpg')) {
        obj['thumb_jpg'] = InlineResponse20022AssetsPreviewMp4.constructFromObject(data['thumb_jpg']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2007Assets4k} original
   */
  exports.prototype['original'] = undefined;
  /**
   * @member {module:model/InlineResponse20022AssetsPreviewMp4} preview_mp4
   */
  exports.prototype['preview_mp4'] = undefined;
  /**
   * @member {module:model/InlineResponse20022AssetsPreviewMp4} preview_webm
   */
  exports.prototype['preview_webm'] = undefined;
  /**
   * @member {module:model/InlineResponse20022AssetsPreviewMp4} thumb_jpg
   */
  exports.prototype['thumb_jpg'] = undefined;



  return exports;
}));

