import { ComponentStory, ComponentMeta } from '@storybook/react';
const Colors = () => (
  <div className="grid grid-cols-8 gap-4">
    <div className="bg-orange-100 h-8"></div>
    <div className="bg-orange-200 h-8"></div>
    <div className="bg-orange-300 h-8"></div>
    <div className="bg-green-100 h-8"></div>
    <div className="bg-green-200 h-8"></div>
    <div className="bg-green-300 h-8"></div>
    <div className="bg-gray-100 h-8"></div>
    <div className="bg-gray-200 h-8"></div>
    <div className="bg-gray-300 h-8"></div>
    <div className="bg-gray-400 h-8"></div>
    <div className="bg-red h-8"></div>
  </div>
);

export default {
  component: Colors,
  title: 'Colors',
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const Primary = Template.bind({});
