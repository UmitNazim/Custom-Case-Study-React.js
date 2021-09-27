import { AtomInput } from 'components';

export default {
  title: 'AtomInput',
  component: AtomInput,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
};

const Template = (args) => <AtomInput {...args} />;
export const Input = Template.bind({});
Input.args = {
  placeholder: 'Enter Name',
  label: 'Name',
  disabled: false,
  type: 'text',
};
