/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The storage account management attributes.
 *
 */
class StorageAccountAttributes {
  /**
   * Create a StorageAccountAttributes.
   * @member {boolean} [enabled] the enabled state of the object.
   * @member {date} [created] Creation time in UTC.
   * @member {date} [updated] Last updated time in UTC.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageAccountAttributes
   *
   * @returns {object} metadata of StorageAccountAttributes
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccountAttributes',
      type: {
        name: 'Composite',
        className: 'StorageAccountAttributes',
        modelProperties: {
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'UnixTime'
            }
          },
          updated: {
            required: false,
            readOnly: true,
            serializedName: 'updated',
            type: {
              name: 'UnixTime'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageAccountAttributes;