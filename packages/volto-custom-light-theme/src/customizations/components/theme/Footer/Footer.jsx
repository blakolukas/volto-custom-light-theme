import React from 'react';
import { injectIntl } from 'react-intl';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import SiteMapFooter from '../../../../components/SiteMapFooter/SiteMapFooter';
import RedesSociais from '../../../../components/RedesSociais/RedesSociais';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer" color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">
          <SeloGoverno />
        </div>
        <SiteMapFooter location={{ pathname: '/' }} />
        <RedesSociais />
      </div>
      <div className="footer-logo">
        <p>
          Todo o conteúdo deste site está publicado sob a licença Creative
          Commons Atribuição-SemDerivações 3.0 Não Adaptada
        </p>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
