import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-pink-700 text-white`};

  ${({ primary }) => (primary ? tw`bg-pink-700` : tw`text-pink-700`)};

  ${({ block }) => block && tw`w-full`};
`);
