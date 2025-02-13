/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="52"
                height="52"
              />
            )}
          </a>
          <div>
            <h5>Документация</h5>
            <a href={this.docUrl('doc_tutorial_ssbasics', this.props.language)}>
              Основы
            </a>
            <a href={this.docUrl('doc_sscore_global', this.props.language)}>
              Модули
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://t.me/sovascript"
              target="_blank"
              rel="noreferrer noopener">
              SovaScript в Telegram
            </a>
            <a
              href="https://t.me/sovalite"
              target="_blank"
              rel="noreferrer noopener">
              Sova Lite в Telegram
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://docusaurus.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="docusaurusLink">
          Made with Docusaurus by Facebook
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
