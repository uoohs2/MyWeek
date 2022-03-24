import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();

  const [score, setScore] = React.useState(0);

  return (
    <Container>
      <h3>
        <DayText>{params.today}</DayText> 평점 남기기
      </h3>
      <ItemStyle>
        {Array.from({ length: 5 }, (item, index) => {
          //Home처럼 스프레드 문법을 사용하지 않고 from을 사용해줬다.
          return (
            <CircleBtn
              key={index}
              onClick={() => {
                setScore(index + 1);
              }}
              score={score}
              index={index}
            ></CircleBtn>
          );
        })}
      </ItemStyle>
      <WriteBtn
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </WriteBtn>
    </Container>
  );
};

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 60px 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const DayText = styled.span`
  padding: 8px;
  border-radius: 5px;
  color: white;
  background-color: slateblue;
`;

const ItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
  height: 5vh;
`;

const CircleBtn = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.score < props.index + 1 ? "#ddd" : "slateblue"};
  &:hover {
    cursor: pointer;
  }
`;

const WriteBtn = styled.button`
  min-width: 150px;
  min-height: 5vh;
  background-color: #fff;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  &:hover {
    cursor: pointer;
  }
`;

export default Detail;
