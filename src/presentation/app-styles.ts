import styled from 'styled-components';
import { small, medium, large } from '@/presentation/styles/breakpoints';

export const Body = styled.div`
  height: 62vh;
  background: ${({ theme }) => theme.body};
`;

export const BackgroundImageContainer = styled.div`
  overflow: hidden;
  height: 38vh;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 2.5rem;
  height: 70vh;
  width: 40vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${large}) {
    width: 60vw;
  }

  @media (max-width: ${medium}) {
    width: 90vw;
  }

  @media (max-width: ${small}) {
    height: 85vh;
  }

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: 1.5rem;
      color: ${({ theme }) => theme.title};
    }

    img {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
  }

  footer {
    display: none;
    height: 7rem;
    align-items: center;
    justify-content: center;
    padding: 0 2.5rem;
    background: ${({ theme }) => theme.mainBackground};
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    @media (max-width: ${small}) {
      display: flex;
    }
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background: ${({ theme }) => theme.mainBackground};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 0.6rem;
  overflow: hidden;
  position: relative;

  ul {
    overflow-y: overlay;

    &::-webkit-scrollbar {
      width: 14px;
      height: 18px;
    }

    &::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 7px;
      background-color: ${({ theme }) => theme.scrollbarThumb};
      box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
      display: none;
    }

    & > *:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }
`;

export const NoContent = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textDisabled};
`;
