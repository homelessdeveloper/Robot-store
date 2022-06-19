import { ComponentStory, ComponentMeta } from '@storybook/react';
const Fonts = () => (
  <div>
    <h2 className="font-open-sans font-extrabold text-1xl">
      H2 - Open Sans Extrabold, 22px
    </h2>
    <h2 className="font-open-sans font-bold text-2lg">
      H2 - Open Sans bold, 22px
    </h2>
    <h2 className="font-yanone font-bold text-4.5xl">H1- Yanone, 42px</h2>
  </div>
);

export default {
  component: Fonts,
  title: 'Fonts',
} as ComponentMeta<typeof Fonts>;

const Template: ComponentStory<typeof Fonts> = () => <Fonts />;

export const Primary = Template.bind({});
