import type { Schema, Struct } from '@strapi/strapi';

export interface SomethingExcerpts extends Struct.ComponentSchema {
  collectionName: 'components_something_excerpts';
  info: {
    displayName: 'Excerpts';
    icon: 'book';
  };
  attributes: {
    body: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'something.excerpts': SomethingExcerpts;
    }
  }
}
