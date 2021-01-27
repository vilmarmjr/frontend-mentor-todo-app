import styled from 'styled-components';

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