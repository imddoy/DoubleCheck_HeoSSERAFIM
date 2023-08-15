import styled from "styled-components";

const Container = styled.div`
  height: 9.544px;
  width: 342px;
  background-color: #e0e0de;
  border-radius: 2.5px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.bgcolor};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in;
`;

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  return (
    <Container>
      <Filler bgcolor={bgcolor} completed={completed} />
    </Container>
  );
};

export default ProgressBar;
