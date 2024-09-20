import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #2b2b2b;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  margin: 20px auto;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: 2px solid #4a90e2; /* blue border */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const MembersContainer = styled.div`
  background: #333;
  padding: 20px;
  color: white;
  border-radius: 4px;
  min-height: 100px;
`;

const Team = () => {
  return (
    <Container>
      <Title>EQUIPE - 02</Title>
      <Section>
        <ButtonColumn>
          <Button>Baixar Objetivo 01</Button>
          <Button>Baixar Objetivo 02</Button>
          <Button>Baixar Objetivo 03</Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button>Lançar Pontos Objetivo</Button>
          <Button>Lançar Pontos Boost</Button>
          <Button>Lançar Pontos Cards</Button>
        </ButtonColumn>
      </Section>
      <MembersContainer>
        <h2>Integrantes</h2>
        {/* Listagem dos integrantes pode ser adicionada aqui */}
      </MembersContainer>
      <Button>Voltar</Button>
    </Container>
  );
};

export default Team;