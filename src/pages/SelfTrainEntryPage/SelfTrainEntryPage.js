import React, { useEffect, useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { get } from '@utils/snippet';
import { handleReset } from '@store/Time/time';
import TextBox from '@components/TextBox';
import Button from '@components/Button';
import SelectCard from './SelectCard';

const Wrapper = styled.div`
  margin-left: 150px;
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
  @media only screen and (max-height: 1080px) {
    padding: 0px;
  }
  @media only screen and (min-height: 1600px) {
    @media only screen and (max-width: 1080px) {
      flex-direction: column;
      padding: 0px;
    }
  }
  display: flex;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 80px;
`;

const SELECT_NOTHING = 0;
const GUIDE_BUTTON = 1;
const ADD_QUESTION_BUTTON = 2;

export default function SelfTrainEntryPage({ history }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(SELECT_NOTHING);
  const { name } = useSelector(get('auth'));

  useEffect(() => {
    dispatch(handleReset({ keepTrain: false }));
  }, []);

  const handleToggle = (select) => {
    if (select === clicked) return setClicked(SELECT_NOTHING);
    return setClicked(select);
  };

  const isGuide = clicked === GUIDE_BUTTON;

  return (
    <Wrapper>
      <WrapContent>
        <TextBox
          topText={`${name}님 화상 면접을 연습하세요`}
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
        <Button
          func={
            // TODO: 기본 질문목록 endpoint 재호님이 추가하면 바꿔야 함
            isGuide
              ? () => history.push('/self/setting/3')
              : () => history.push('/questionlist')
          }
          theme={clicked ? 'blue' : 'gray'}
          text="다음"
        />
      </WrapContent>
    </Wrapper>
  );
}

SelfTrainEntryPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
