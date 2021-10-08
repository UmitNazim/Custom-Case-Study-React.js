import { MoleculeInput } from 'components';

export default {
  title: 'MoleculeInput',
  component: MoleculeInput,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
};

const Template = (args) => <MoleculeInput {...args} />;
export const Input = Template.bind({});
Input.args = {
  placeholder: 'Enter Name',
  label: 'Name',
  disabled: false,
  type: 'text',
};
