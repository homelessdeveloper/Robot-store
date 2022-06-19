import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './Chip';

export default {
  component: Chip,
  title: 'components/Chip',
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
};
