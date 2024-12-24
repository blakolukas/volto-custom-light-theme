import React, { useEffect } from 'react';

const BarraEstado = () => {
  useEffect(() => {
    if (!window.location.origin) {
      window.location.origin =
        window.location.protocol + '//' + window.location.host;
    }
  }, []);

  return (
    <div className="container-menu">
      <div className="barra-estado">
        <div className="barra-estado__container">
          <a
            className="barra-estado__logo"
            title="rs.gov"
            href="https://www.rs.gov.br/"
          >
            <svg
              version="1.1"
              id="rs-gov"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="77px"
              height="16px"
              viewBox="0 0 77 16"
              enableBackground="new 0 0 77 16"
              xmlSpace="preserve"
            >
              <title className="rsgov">RS.GOV</title>
              <desc>Governo do Estado do Rio Grande do Sul</desc>
              <path
                d="M5.64,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55H0V3.48H2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z"
                fill="#1A7235"
              />
              <path
                d="M10.78,13.28c-1.34,0-2.85-.44-4.12-1.45l1.17-1.8c1.04,.76,2.13,1.15,3.03,1.15,.79,0,1.15-.29,1.15-.71v-.04c0-.59-.93-.79-1.99-1.11-1.34-.4-2.87-1.02-2.87-2.89v-.04c0-1.96,1.57-3.05,3.52-3.05,1.22,0,2.54,.42,3.58,1.11l-1.04,1.88c-.95-.56-1.9-.9-2.6-.9s-1,.29-1,.67v.04c0,.54,.92,.79,1.96,1.15,1.34,.44,2.91,1.09,2.91,2.85v.04c0,2.13-1.6,3.1-3.67,3.1h0Z"
                fill="#1A7235"
              />
              <path d="M16.21,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
              <path
                d="M25.48,16c-1.56,0-3.03-.36-4.25-1l.93-2.04c.99,.56,1.97,.88,3.24,.88,1.87,0,2.75-.9,2.75-2.62v-.46c-.81,.97-1.68,1.56-3.14,1.56-2.24,0-4.28-1.64-4.28-4.49v-.04c0-2.87,2.06-4.49,4.28-4.49,1.48,0,2.36,.63,3.1,1.43v-1.24h2.73v7.45c0,3.63-1.8,5.08-5.37,5.08Zm2.67-8.21c0-1.31-1.02-2.22-2.35-2.22s-2.33,.92-2.33,2.22v.04c0,1.32,1,2.22,2.33,2.22s2.35-.92,2.35-2.22v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M37.91,13.32c-2.98,0-5.18-2.2-5.18-4.97v-.04c0-2.76,2.22-5,5.22-5s5.18,2.2,5.18,4.97v.04c0,2.76-2.22,5-5.22,5Zm2.53-5c0-1.42-1.02-2.66-2.53-2.66s-2.5,1.2-2.5,2.62v.04c0,1.42,1.02,2.66,2.53,2.66s2.5-1.2,2.5-2.62v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M49.88,13.17h-2.47l-3.79-9.69h2.89l2.15,6.44,2.17-6.44h2.84l-3.79,9.69Z"
                fill="#1A7235"
              />
              <path d="M53.52,13.09v-2.87h2.91v2.87h-2.91Z" fill="#1A7235" />
              <path
                d="M64.39,13.28c-1.45,0-2.35-.67-3-1.43v1.25h-2.73V0h2.73V4.86c.67-.9,1.57-1.56,3-1.56,2.24,0,4.38,1.76,4.38,4.97v.04c0,3.22-2.11,4.98-4.38,4.98h0Zm1.65-5.02c0-1.59-1.08-2.66-2.35-2.66s-2.33,1.06-2.33,2.66v.04c0,1.59,1.06,2.66,2.33,2.66s2.35-1.04,2.35-2.66v-.04Z"
                fill="#1A7235"
              />
              <path
                d="M76.34,6.15c-1.8,0-2.92,1.09-2.92,3.4v3.55h-2.73V3.48h2.73v1.94c.56-1.32,1.45-2.19,3.07-2.12v2.85h-.15Z"
                fill="#1A7235"
              />
            </svg>
          </a>
          <div className="barra-estado__nav">
            <div className="barra-estado__nav__form">
              <input type="checkbox" id="barra-estado__toggle" />
              <label
                htmlFor="barra-estado__toggle"
                className="barra-estado__toggle"
                data-open="•••"
                data-close="•••"
              ></label>
              <ul className="barra-estado__menu">
                <li>
                  <a
                    target="_self"
                    href="https://estado.rs.gov.br/agencia-de-noticias"
                  >
                    <span className="visually-hidden">Estado </span>Notícias
                  </a>
                </li>
                <li>
                  <a target="_self" href="https://www.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>Serviços
                  </a>
                </li>
                <li>
                  <a
                    target="_self"
                    href="https://www.centraldocidadao.rs.gov.br/"
                  >
                    <span className="visually-hidden">Estado </span>Central do
                    Cidadão
                  </a>
                </li>
                <li>
                  <a target="_self" href="http://www.transparencia.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>
                    Transparência
                  </a>
                </li>
                <li>
                  <a
                    className="barra-letters"
                    target="_self"
                    href="https://estado.rs.gov.br/institucional"
                  >
                    <span className="visually-hidden">Estado </span>Locais e
                    Órgãos
                  </a>
                </li>
                <li>
                  <a target="_self" href="https://www.diariooficial.rs.gov.br/">
                    <span className="visually-hidden">Estado </span>Diário
                    Oficial
                  </a>
                </li>
                <li>
                  <a target="_self" href="https://sosenchentes.rs.gov.br">
                    <span className="visually-hidden">Estado </span>&gt;&gt; SOS
                    RS &lt;&lt;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraEstado;
