import type { Schema, Struct } from '@strapi/strapi';

export interface SomethingExcerpts extends Struct.ComponentSchema {
  collectionName: 'components_something_excerpts';
  info: {
    displayName: 'SEO Content';
    icon: 'book';
  };
  attributes: {
    Excerpt: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    publish_date: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'something.excerpts': SomethingExcerpts;
    }
  }
}
