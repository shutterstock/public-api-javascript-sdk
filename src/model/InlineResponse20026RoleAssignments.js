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
    define(['../ApiClient', '../model/InlineResponse20026RoleAssignmentsRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20026RoleAssignmentsRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.InlineResponse20026RoleAssignments = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InlineResponse20026RoleAssignmentsRoles);
  }
}(this, function(ApiClient, InlineResponse20026RoleAssignmentsRoles) {
  'use strict';




  /**
   * The InlineResponse20026RoleAssignments model module.
   * @module model/InlineResponse20026RoleAssignments
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse20026RoleAssignments</code>.
   * List of role assignments for a catalog collection
   * @alias module:model/InlineResponse20026RoleAssignments
   * @class
   * @param collection_id {String} 
   * @param roles {module:model/InlineResponse20026RoleAssignmentsRoles} 
   */
  var exports = function(collection_id, roles) {
    var _this = this;

    _this['collection_id'] = collection_id;
    _this['roles'] = roles;
  };

  /**
   * Constructs a <code>InlineResponse20026RoleAssignments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20026RoleAssignments} obj Optional instance to populate.
   * @return {module:model/InlineResponse20026RoleAssignments} The populated <code>InlineResponse20026RoleAssignments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('collection_id')) {
        obj['collection_id'] = ApiClient.convertToType(data['collection_id'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = InlineResponse20026RoleAssignmentsRoles.constructFromObject(data['roles']);
      }
    }
    return obj;
  }

  /**
   * @member {String} collection_id
   */
  exports.prototype['collection_id'] = undefined;
  /**
   * @member {module:model/InlineResponse20026RoleAssignmentsRoles} roles
   */
  exports.prototype['roles'] = undefined;



  return exports;
}));


