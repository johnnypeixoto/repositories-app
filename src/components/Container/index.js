import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 6px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
