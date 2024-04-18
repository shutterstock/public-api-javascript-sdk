/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.40
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
    define(['../ApiClient', '../model/Category', '../model/Contributor', '../model/Model', '../model/ModelRelease', '../model/VideoAssets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./Contributor'), require('./Model'), require('./ModelRelease'), require('./VideoAssets'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Video = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.Category, root.ShutterstockApiReference.Contributor, root.ShutterstockApiReference.Model, root.ShutterstockApiReference.ModelRelease, root.ShutterstockApiReference.VideoAssets);
  }
}(this, function(ApiClient, Category, Contributor, Model, ModelRelease, VideoAssets) {
  'use strict';




  /**
   * The Video model module.
   * @module model/Video
   * @version 1.1.40
   */

  /**
   * Constructs a new <code>Video</code>.
   * Information about a video
   * @alias module:model/Video
   * @class
   * @param contributor {module:model/Contributor} 
   * @param id {String} ID of the video
   * @param media_type {String} Media type of this video, should always be \"video\"
   */
  var exports = function(contributor, id, media_type) {
    var _this = this;







    _this['contributor'] = contributor;




    _this['id'] = id;



    _this['media_type'] = media_type;



  };

  /**
   * Constructs a <code>Video</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Video} obj Optional instance to populate.
   * @return {module:model/Video} The populated <code>Video</code> instance.
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
      if (data.hasOwnProperty('aspect')) {
        obj['aspect'] = ApiClient.convertToType(data['aspect'], 'Number');
      }
      if (data.hasOwnProperty('aspect_ratio')) {
        obj['aspect_ratio'] = ApiClient.convertToType(data['aspect_ratio'], 'String');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = VideoAssets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
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
      if (data.hasOwnProperty('has_model_release')) {
        obj['has_model_release'] = ApiClient.convertToType(data['has_model_release'], 'Boolean');
      }
      if (data.hasOwnProperty('has_property_release')) {
        obj['has_property_release'] = ApiClient.convertToType(data['has_property_release'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_adult')) {
        obj['is_adult'] = ApiClient.convertToType(data['is_adult'], 'Boolean');
      }
      if (data.hasOwnProperty('is_editorial')) {
        obj['is_editorial'] = ApiClient.convertToType(data['is_editorial'], 'Boolean');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
      if (data.hasOwnProperty('models')) {
        obj['models'] = ApiClient.convertToType(data['models'], [Model]);
      }
      if (data.hasOwnProperty('releases')) {
        obj['releases'] = ApiClient.convertToType(data['releases'], [ModelRelease]);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date this video was added to the Shutterstock library
   * @member {Date} added_date
   */
  exports.prototype['added_date'] = undefined;
  /**
   * Affiliate referral link; appears only for registered affiliate partners
   * @member {String} affiliate_url
   */
  exports.prototype['affiliate_url'] = undefined;
  /**
   * Aspect ratio of this video in decimal format, such as 0.6667
   * @member {Number} aspect
   */
  exports.prototype['aspect'] = undefined;
  /**
   * Aspect ratio of the video as a ratio, such as 16:9
   * @member {String} aspect_ratio
   */
  exports.prototype['aspect_ratio'] = undefined;
  /**
   * @member {module:model/VideoAssets} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * List of categories
   * @member {Array.<module:model/Category>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {module:model/Contributor} contributor
   */
  exports.prototype['contributor'] = undefined;
  /**
   * Description of this video
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Duration of this video, in seconds
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Whether or not this video has been released for use by the model appearing in it
   * @member {Boolean} has_model_release
   */
  exports.prototype['has_model_release'] = undefined;
  /**
   * Whether or not this video has received a release to show the landmark or property appearing in it
   * @member {Boolean} has_property_release
   */
  exports.prototype['has_property_release'] = undefined;
  /**
   * ID of the video
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Whether or not this video contains adult content
   * @member {Boolean} is_adult
   */
  exports.prototype['is_adult'] = undefined;
  /**
   * Whether or not this video is editorial content
   * @member {Boolean} is_editorial
   */
  exports.prototype['is_editorial'] = undefined;
  /**
   * Keywords associated with the content of this video
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * Media type of this video, should always be \"video\"
   * @member {String} media_type
   */
  exports.prototype['media_type'] = undefined;
  /**
   * List of models in this video
   * @member {Array.<module:model/Model>} models
   */
  exports.prototype['models'] = undefined;
  /**
   * List of all releases of this video
   * @member {Array.<module:model/ModelRelease>} releases
   */
  exports.prototype['releases'] = undefined;
  /**
   * Link to video information page; included only for certain accounts
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


