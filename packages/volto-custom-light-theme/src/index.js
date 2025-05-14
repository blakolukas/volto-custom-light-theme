import ApplyUrlStyles from '../../../../volto-custom-light-theme/packages/volto-custom-light-theme/src/customizations/global/ApplyUrlStyles';

const applyConfig = (config) => {
  
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '', // Aplica globalmente
      component: () => <ApplyUrlStyles />,
    },
  ];

  return config;
};

export default applyConfig;
