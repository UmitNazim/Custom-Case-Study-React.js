import { MoleculeCard } from 'components';
import { colors } from './_shared/';

export default {
  title: 'MoleculeCard',
  component: MoleculeCard,
  args: { ...MoleculeCard.defaultProps },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
  },
};

const Template = (args) => <MoleculeCard {...args} />;
export const Card = Template.bind({});
Card.args = {
  children: 'This is a card',
  title: null,
  color: 'gunmetal',
  shadow: false,
  hover: false,
  flat: false,
  noPadding: false,
};
