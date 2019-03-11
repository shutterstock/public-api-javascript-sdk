/**
 * shutterstock
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Shutterstock) {
      root.Shutterstock = {};
    }
    root.Shutterstock.ContributorProfileSocialMedia = factory(root.Shutterstock.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContributorProfileSocialMedia model module.
   * @module model/ContributorProfileSocialMedia
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContributorProfileSocialMedia</code>.
   * Contributor profile on social media
   * @alias module:model/ContributorProfileSocialMedia
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ContributorProfileSocialMedia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContributorProfileSocialMedia} obj Optional instance to populate.
   * @return {module:model/ContributorProfileSocialMedia} The populated <code>ContributorProfileSocialMedia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
      }
      if (data.hasOwnProperty('google_plus')) {
        obj['google_plus'] = ApiClient.convertToType(data['google_plus'], 'String');
      }
      if (data.hasOwnProperty('linkedin')) {
        obj['linkedin'] = ApiClient.convertToType(data['linkedin'], 'String');
      }
      if (data.hasOwnProperty('pinterest')) {
        obj['pinterest'] = ApiClient.convertToType(data['pinterest'], 'String');
      }
      if (data.hasOwnProperty('tumblr')) {
        obj['tumblr'] = ApiClient.convertToType(data['tumblr'], 'String');
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
    }
    return obj;
  }

  /**
   * Facebook link for contributor
   * @member {String} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * Google+ link for contributor
   * @member {String} google_plus
   */
  exports.prototype['google_plus'] = undefined;
  /**
   * LinkedIn link for contributor
   * @member {String} linkedin
   */
  exports.prototype['linkedin'] = undefined;
  /**
   * Pinterest page for contributor
   * @member {String} pinterest
   */
  exports.prototype['pinterest'] = undefined;
  /**
   * Tumblr link for contributor
   * @member {String} tumblr
   */
  exports.prototype['tumblr'] = undefined;
  /**
   * Twitter link for contributor
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;



  return exports;
}));


