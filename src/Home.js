import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  const week_day = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <Container>
      <Title>내 일주일은 ٩( ᐛ )و ?</Title>
      <ListStyle>
        {week_day.map((day, i) => {
          //평점이 랜덤으로 나오도록 랜덤함수 적용
          const score = Math.floor(Math.random() * 8) + 1;
          return (
            <ItemStyle key={i}>
              <DayStyle>{day}</DayStyle>
              {Array.from({ length: 5 }).map((item, j) => {
                return (
                  <ScoreStyle
                    key={j}
                    style={{
                      backgroundColor: score > j ? "slateblue" : "#ddd",
                    }}
                  ></ScoreStyle>
                );
              })}
              <MoveBtn
                onClick={() => {
                  history.push("/detail/" + day + "요일");
                }}
              >
                ➜
              </MoveBtn>
            </ItemStyle>
          );
        })}
      </ListStyle>
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
const Title = styled.h2`
  color: slateblue;
  text-align: center;
`;
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  width: 90%;
  height: 5vh;
  background-color: aliceblue;
`;

const DayStyle = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: auto;
`;

const ScoreStyle = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: 0 3px;
`;

const MoveBtn = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: auto;
  background-color: orange;
  font-size: 1.2em;
  line-height: 30px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

export default Home;
