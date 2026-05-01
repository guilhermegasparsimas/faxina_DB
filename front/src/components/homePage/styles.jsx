import styled from 'styled-components';

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #efefef;
`

export const Main = styled.main`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  height: 100%;

  
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  color: #666;
  flex: 1;
  width: 100%;
  padding: 10px;
`
export const Gallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  }
`
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`
export const CardBody = styled.div`
  padding: 16px;
`