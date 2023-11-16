import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 40px;
  padding: 100px 0;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-self: start;
  gap: 20px;
  align-items: center;
`;

export const ResizedImage = styled.img`
  width: 50px;
  height: 50px;
`;
