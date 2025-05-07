// Type definitions for transit-immutable-js
// Project: https://github.com/glenjamin/transit-immutable-js
// Definitions by: [Your Name] <[your.email@example.com]>
// TypeScript Version: 4.x
module 'transit-immutable-js' {
  import type { RecordFactory } from 'immutable';

  export type RecordClass = RecordFactory<any>;
  export type MissingRecordHandler = (name: string, value: any) => any;
  export type ExtraHandler = {
    tag: string;
    class: Function;
    write: (value: any) => any;
    read: (rep: any) => any;
  };

  export interface TransitInstance {
    toJSON(data: any): string;
    fromJSON(json: string): any;
    withExtraHandlers(extra: ExtraHandler[]): TransitInstance;
    withFilter(predicate: (value: any, key: any) => boolean): TransitInstance;
    withRecords(recordClasses: RecordClass[], missingRecordHandler?: MissingRecordHandler): TransitInstance;
  }

  export interface Handlers {
    read: any;
    write: any;
    withExtraHandlers(extra: ExtraHandler[]): Handlers;
    withFilter(predicate: (value: any, key: any) => boolean): Handlers;
    withRecords(recordClasses: RecordClass[], missingRecordHandler?: MissingRecordHandler): Handlers;
  }

  /**
   * The default transit-immutable-js instance.
   */
  declare const transit: TransitInstance;

  export default transit;

  /**
   * The handlers object for advanced usage.
   */
  export const handlers: Handlers;
}
