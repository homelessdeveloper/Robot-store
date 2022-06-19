import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { HiChartBar } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BiFilterAlt } from 'react-icons/bi';
import { RiEyeCloseLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { HiOutlineArrowLeft } from 'react-icons/hi';
const Icons = () => (
  <div className="grid grid-cols-10 gap-4">
    <div>
      <AiOutlineUser className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BiHeart className="text-gray-300 text-2xl" />
    </div>
    <div>
      <HiChartBar className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BsCart2 className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BsTelephone className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BsSearch className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BsTrash className="text-gray-300 text-2xl" />
    </div>
    <div>
      <RiErrorWarningLine className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BiFilterAlt className="text-gray-300 text-2xl" />
    </div>
    <div>
      <RiEyeCloseLine className="text-gray-300 text-2xl" />
    </div>
    <div>
      <AiOutlineEye className="text-gray-300 text-2xl" />
    </div>
    <div>
      <AiOutlineCheck className="text-gray-300 text-2xl" />
    </div>
    <div>
      <BsThreeDots className="text-gray-300 text-2xl" />
    </div>
    <div>
      <HiOutlineArrowLeft className="text-gray-300 text-2xl" />
    </div>
  </div>
);

export default {
  component: Icons,
  title: 'Icons',
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const Primary = Template.bind({});
