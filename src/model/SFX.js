/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.31
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
    define(['../ApiClient', '../model/Contributor', '../model/SFXAssets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contributor'), require('./SFXAssets'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.SFX = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Contributor, root.ShutterstockApiReference.SFXAssets);
  }
}(this, function(ApiClient, Contributor, SFXAssets) {
  'use strict';




  /**
   * The SFX model module.
   * @module model/SFX
   * @version 1.1.31
   */

  /**
   * Constructs a new <code>SFX</code>.
   * SFX metadata
   * @alias module:model/SFX
   * @class
   * @param contributor {module:model/Contributor} 
   * @param id {String} Shutterstock ID of this sound effect
   * @param media_type {String} Media type of this track; should always be \"sfx\"
   */
  var exports = function(contributor, id, media_type) {
    var _this = this;





    _this['contributor'] = contributor;


    _this['id'] = id;

    _this['media_type'] = media_type;




  };

  /**
   * Constructs a <code>SFX</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SFX} obj Optional instance to populate.
   * @return {module:model/SFX} The populated <code>SFX</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('added_date')) {
        obj['added_date'] = ApiClient.convertToType(data['added_date'], 'Date');
      }
      if (data.hasOwnProperty('affiliate_url')) {
        obj['affiliate_url'] = ApiClient.convertToType(data['affiliate_url'], 'String');
      }
      if (data.hasOwnProperty('artist')) {
        obj['artist'] = ApiClient.convertToType(data['artist'], 'String');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = SFXAssets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('contributor')) {
        obj['contributor'] = Contributor.constructFromObject(data['contributor']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('releases')) {
        obj['releases'] = ApiClient.convertToType(data['releases'], ['String']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date this sound effect was added to the Shutterstock library
   * @member {Date} added_date
   */
  exports.prototype['added_date'] = undefined;
  /**
   * Affiliate referral link; appears only for registered affiliate partners
   * @member {String} affiliate_url
   */
  exports.prototype['affiliate_url'] = undefined;
  /**
   * Artist of the sound effect
   * @member {String} artist
   */
  exports.prototype['artist'] = undefined;
  /**
   * @member {module:model/SFXAssets} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * @member {module:model/Contributor} contributor
   */
  exports.prototype['contributor'] = undefined;
  /**
   * Description of this sound effect
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Duration of this sound effect in seconds
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Shutterstock ID of this sound effect
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * List of all keywords for this sound effect
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * Media type of this track; should always be \"sfx\"
   * @member {String} media_type
   */
  exports.prototype['media_type'] = undefined;
  /**
   * List of all releases of this sound effect
   * @member {Array.<String>} releases
   */
  exports.prototype['releases'] = undefined;
  /**
   * Title of this sound effect
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Time this sound effect was last updated
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;
  /**
   * 
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


