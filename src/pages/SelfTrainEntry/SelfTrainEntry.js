import React, { useState } from 'react';

import styled from 'styled-components';

import TextBox from '../../components/TextBox';
import SelectCard from './SelectCard';
import Button from '../../components/Button';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;
const WrapContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapCardSection = styled.div`
  display: flex;
  padding: 80px;
`;

// TODO: 이부분 API 처리를 통해 redux에서 상태 들고 와야 함
const NAME = '홍길동';

const SELECT_NOTHING = 0;
const GUIDE_BUTTON = 1;
const ADD_QUESTION_BUTTON = 2;

export default function SelfTrainEntry() {
  const [clicked, setClicked] = useState(SELECT_NOTHING);

  const handleToggle = (select) => {
    if (select === clicked) return setClicked(SELECT_NOTHING);
    return setClicked(select);
  };

  return (
    <Wrapper>
      <WrapContent>
        <TextBox
          topText={`${NAME}님 화상 면접을 혼자 연습해보세요`}
          bottomText="원하는 기능을 선택하여 화상 면접을 대비해 보세요."
        />
        <WrapCardSection>
          <SelectCard
            kind={GUIDE_BUTTON}
            clicked={clicked === GUIDE_BUTTON}
            func={() => handleToggle(GUIDE_BUTTON)}
          />
          <SelectCard
            kind={ADD_QUESTION_BUTTON}
            clicked={clicked === ADD_QUESTION_BUTTON}
            func={() => handleToggle(ADD_QUESTION_BUTTON)}
          />
        </WrapCardSection>
        <Button theme="blue" text="다음" />
      </WrapContent>
    </Wrapper>
  );
}
