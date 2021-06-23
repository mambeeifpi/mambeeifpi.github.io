import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Div = styled.div`
  h1{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0 0.2rem 0;
  }

  h2{
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0.5rem 0 0.2rem 0;
  }

  h3{
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0.5rem 0 0.2rem 0;
  }
  hr{
    margin: 0.5rem 0;
  }
`;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;
