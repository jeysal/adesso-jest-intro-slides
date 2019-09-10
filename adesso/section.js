import React from 'react';
import { getBackground } from './bg-utils';
import './section.css';
import logoStandard from '!!file-loader!./assets/logo.png';
import logoWhite from '!!file-loader!./assets/logo-white.png';
import titlePageSideBig from '!!file-loader!./assets/title-page-side-big.png';

export const Section = props => {
  //TODO: check for mdx components or plain text
  const children = (Array.isArray(props.children)
    ? props.children
    : [props.children]
  ).filter(Boolean);
  const logo = props.header === 'white' ? logoWhite : logoStandard;
  const backgroundStyle = getBackground(props);
  return (
    <div className="section-wrapper" style={backgroundStyle}>
      <header>
        <img className="logo" alt="adesso logo" src={logo} />
        {children
          .filter(e => e.props.mdxType === 'h1')
          .map((h1, i) => (
            <h1 key={i}>{h1.props.children}</h1>
          ))}
        {children
          .filter(e => e.props.mdxType === 'h2')
          .map((h2, i) => (
            <h2 key={i}>{h2.props.children}</h2>
          ))}
      </header>
      <img className="highlight-side" alt="" src={titlePageSideBig} />
      {children.filter(
        e => e.props.mdxType !== 'h1' && e.props.mdxType !== 'h2',
      )}
    </div>
  );
};
