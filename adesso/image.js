import React from 'react';

const wrapperStylesDefault = {
  display: 'flex',
  justifyContent: 'center',
};

const imageDefaults = {
  width: 'auto',
  height: 'auto',
  align: 'center',
};

export const Image = props => {
  const { alt, src, width, height, align } = { ...imageDefaults, ...props };
  const wrapperStyles = { ...wrapperStylesDefault };
  if (align === 'left') {
    wrapperStyles.justifyContent = 'flex-start';
  } else if (align === 'right') {
    wrapperStyles.justifyContent = 'flex-end';
  } else {
    wrapperStyles.justifyContent = align;
  }

  const imageStyles = { ...imageDefaults, width, height };

  return (
    <div style={wrapperStyles}>
      <img alt={alt} src={src} style={imageStyles} />
    </div>
  );
};
