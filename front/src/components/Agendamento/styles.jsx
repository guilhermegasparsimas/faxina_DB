import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const Modal = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dcdfe6;

  background-color: #f5f7fb;
  color: #333;

  font-size: 15px;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #6c8fc7;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(108, 143, 199, 0.2);
  }

    option {
        cursor: pointer
    }

  &::placeholder {
    color: #999;
  }
`;

export const Select = styled.select`
 padding: 12px;
  border-radius: 8px;
  border: 1px solid #dcdfe6;

  background-color: #f5f7fb;
  color: #333;

  font-size: 15px;

  outline: none;

  transition: 0.2s;

  cursor: pointer;

  &:focus {
    border-color: #6c8fc7;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(108, 143, 199, 0.2);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SaveButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;

  background-color: #f39c12;
  color: white;

  cursor: pointer;
  font-weight: bold;
`;

export const CancelButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;

  background-color: #e74c3c;
  color: white;

  cursor: pointer;
  font-weight: bold;
`;


export const Page = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f7fb;
  font-family: 'Segoe UI';
`;

export const Sidebar = styled.aside`
  width: 260px;
  background: linear-gradient(180deg, #4a6fa5, #6c8fc7);
  padding: 25px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.15);
  color: #fff;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: rgba(255,255,255,0.25);
  }
`;