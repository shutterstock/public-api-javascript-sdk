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
    define(['../ApiClient', '../model/CatalogCollectionRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogCollectionRole'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CatalogCollectionRoleAssignmentsRoles = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.CatalogCollectionRole);
  }
}(this, function(ApiClient, CatalogCollectionRole) {
  'use strict';




  /**
   * The CatalogCollectionRoleAssignmentsRoles model module.
   * @module model/CatalogCollectionRoleAssignmentsRoles
   * @version 1.1.34
   */

  /**
   * Constructs a new <code>CatalogCollectionRoleAssignmentsRoles</code>.
   * @alias module:model/CatalogCollectionRoleAssignmentsRoles
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CatalogCollectionRoleAssignmentsRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCollectionRoleAssignmentsRoles} obj Optional instance to populate.
   * @return {module:model/CatalogCollectionRoleAssignmentsRoles} The populated <code>CatalogCollectionRoleAssignmentsRoles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owners')) {
        obj['owners'] = ApiClient.convertToType(data['owners'], [CatalogCollectionRole]);
      }
      if (data.hasOwnProperty('editors')) {
        obj['editors'] = ApiClient.convertToType(data['editors'], [CatalogCollectionRole]);
      }
      if (data.hasOwnProperty('viewers')) {
        obj['viewers'] = ApiClient.convertToType(data['viewers'], [CatalogCollectionRole]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CatalogCollectionRole>} owners
   */
  exports.prototype['owners'] = undefined;
  /**
   * @member {Array.<module:model/CatalogCollectionRole>} editors
   */
  exports.prototype['editors'] = undefined;
  /**
   * @member {Array.<module:model/CatalogCollectionRole>} viewers
   */
  exports.prototype['viewers'] = undefined;



  return exports;
}));


