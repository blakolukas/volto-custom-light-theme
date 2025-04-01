import AdvancedListingBlockTemplate from './AdvancedListingBlockTemplate';
import { advancedSchema } from './advancedSchema';

const applyConfig = (config) => {
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'advanced',
      title: 'Advanced',
      template: AdvancedListingBlockTemplate,
      schemaEnhancer: advancedSchema,
      schemaEnhancer: ({ schema, FormData, intl }) => {
        schema.properties.href.selectedItemAttrs.push('Subject');
        return schema;
      },
    },
  ];

  return config;
};

export default applyConfig;
