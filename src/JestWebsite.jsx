import React from 'react';
import { useDeck } from 'mdx-deck';

import jestWebsiteFallback from '!!file-loader!../media/jest-website.png';

const JestWebsite = () => {
  const { step, setState } = useDeck();
  return (
    <>
      {step ? (
        <img
          alt="Jest website screenshot"
          src={jestWebsiteFallback}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'scale-down',
          }}
        />
      ) : (
        <iframe
          title="Jest Website"
          src="https://jestjs.io/"
          style={{
            width: '95%',
            height: '95%',
            border: '1px solid rgb(194, 19, 37)',
          }}
        />
      )}
      <button
        onClick={() => setState({ step: step ? 0 : 1 })}
        style={{ color: 'gray' }}
      >
        Fallback
      </button>
    </>
  );
};

export default JestWebsite;
