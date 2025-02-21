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
    define(['../ApiClient', '../model/InlineResponse20014Assets', '../model/InlineResponse20014Categories', '../model/InlineResponse20016CommercialStatus', '../model/InlineResponse20016Rights'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20014Assets'), require('./InlineResponse20014Categories'), require('./InlineResponse20016CommercialStatus'), require('./InlineResponse20016Rights'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20016Data = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20014Assets, root.ShutterstockApiReference.InlineResponse20014Categories, root.ShutterstockApiReference.InlineResponse20016CommercialStatus, root.ShutterstockApiReference.InlineResponse20016Rights);
  }
}(this, function(ApiClient, InlineResponse20014Assets, InlineResponse20014Categories, InlineResponse20016CommercialStatus, InlineResponse20016Rights) {
  'use strict';




  /**
   * The InlineResponse20016Data model module.
   * @module model/InlineResponse20016Data
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse20016Data</code>.
   * Metadata about updated editorial content
   * @alias module:model/InlineResponse20016Data
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;









    _this['id'] = id;








  };

  /**
   * Constructs a <code>InlineResponse20016Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20016Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20016Data} The populated <code>InlineResponse20016Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commercial_status')) {
        obj['commercial_status'] = InlineResponse20016CommercialStatus.constructFromObject(data['commercial_status']);
      }
      if (data.hasOwnProperty('aspect')) {
        obj['aspect'] = ApiClient.convertToType(data['aspect'], 'Number');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = InlineResponse20014Assets.constructFromObject(data['assets']);
      }
      if (data.hasOwnProperty('byline')) {
        obj['byline'] = ApiClient.convertToType(data['byline'], 'String');
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [InlineResponse20014Categories]);
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
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('rights')) {
        obj['rights'] = InlineResponse20016Rights.constructFromObject(data['rights']);
      }
      if (data.hasOwnProperty('updates')) {
        obj['updates'] = ApiClient.convertToType(data['updates'], ['String']);
      }
      if (data.hasOwnProperty('supplier_code')) {
        obj['supplier_code'] = ApiClient.convertToType(data['supplier_code'], 'String');
      }
      if (data.hasOwnProperty('special_instructions')) {
        obj['special_instructions'] = ApiClient.convertToType(data['special_instructions'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse20016CommercialStatus} commercial_status
   */
  exports.prototype['commercial_status'] = undefined;
  /**
   * @member {Number} aspect
   */
  exports.prototype['aspect'] = undefined;
  /**
   * @member {module:model/InlineResponse20014Assets} assets
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
   * @member {Array.<module:model/InlineResponse20014Categories>} categories
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
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;
  /**
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * @member {module:model/InlineResponse20016Rights} rights
   */
  exports.prototype['rights'] = undefined;
  /**
   * @member {Array.<String>} updates
   */
  exports.prototype['updates'] = undefined;
  /**
   * @member {String} supplier_code
   */
  exports.prototype['supplier_code'] = undefined;
  /**
   * @member {String} special_instructions
   */
  exports.prototype['special_instructions'] = undefined;



  return exports;
}));


