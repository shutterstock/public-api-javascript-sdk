/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.22
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
    define(['../ApiClient', '../model/EditorialAssets', '../model/EditorialCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialAssets'), require('./EditorialCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialContent = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialAssets, root.ShutterstockApiReference.EditorialCategory);
  }
}(this, function(ApiClient, EditorialAssets, EditorialCategory) {
  'use strict';




  /**
   * The EditorialContent model module.
   * @module model/EditorialContent
   * @version 1.1.22
   */

  /**
   * Constructs a new <code>EditorialContent</code>.
   * Metadata about editorial content
   * @alias module:model/EditorialContent
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;








    _this['id'] = id;



  };

  /**
   * Constructs a <code>EditorialContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialContent} obj Optional instance to populate.
   * @return {module:model/EditorialContent} The populated <code>EditorialContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aspect')) {
        obj['aspect'] = ApiClient.convertToType(data['aspect'], 'Number');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = EditorialAssets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('byline')) {
        obj['byline'] = ApiClient.convertToType(data['byline'], 'String');
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [EditorialCategory]);
      }
      if (data.hasOwnProperty('date_taken')) {
        obj['date_taken'] = ApiClient.convertToType(data['date_taken'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('special_instructions')) {
        obj['special_instructions'] = ApiClient.convertToType(data['special_instructions'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} aspect
   */
  exports.prototype['aspect'] = undefined;
  /**
   * @member {module:model/EditorialAssets} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * @member {String} byline
   */
  exports.prototype['byline'] = undefined;
  /**
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * List of categories
   * @member {Array.<module:model/EditorialCategory>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {Date} date_taken
   */
  exports.prototype['date_taken'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * @member {String} special_instructions
   */
  exports.prototype['special_instructions'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


