import { useDeck } from 'mdx-deck';

const OnlyStep = ({ children, step }) => {
  const { step: current } = useDeck();
  return step === current ? children : null;
};

export default OnlyStep;
