import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import config from '@plone/volto/registry';
import { getNavigation } from '@plone/volto/actions';
import { toBackendLang } from '@plone/volto/helpers';

import './SiteMapFooter.css';

function getSitemapPath(pathname = '', lang) {
  const prefix = pathname.replace(/\/sitemap$/gm, '').replace(/^\//, '');
  const path = prefix || lang || '';
  return path;
}

function SitemapFooter({ items, lang, getNavigation, intl }) {
  const location = useLocation();

  useEffect(() => {
    const { settings } = config;
    const language = settings.isMultilingual ? toBackendLang(lang) : null;
    const path = getSitemapPath(location.pathname, language);
    getNavigation(path, 4);
  }, [location.pathname, lang, getNavigation]);

  const renderItems = (items) => (
    <ul className="rodape__mapa-site">
      {items.map((item) => (
        <React.Fragment key={item.title}>
          {item.items.length > 0 && (
            <li className="rodape__mapa-site__item">
              <Link to={item.url} className="rodape-titulo">
                {item.title}
              </Link>
              <ul>
                {item.items.map((innerItem) => (
                  <li key={innerItem.title}>
                    <Link to={innerItem.url}>{innerItem.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );

  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;

  return (
    <Container className="view-wrapper">
      {items && renderItems(items)}
    </Container>
  );
}

SitemapFooter.propTypes = {
  getNavigation: PropTypes.func.isRequired,
  items: PropTypes.array,
  lang: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

SitemapFooter.defaultProps = {
  items: [],
};

export default injectIntl(
  connect(
    (state) => ({
      items: state.navigation.items,
      lang: state.intl.locale,
    }),
    { getNavigation },
  )(SitemapFooter),
);
