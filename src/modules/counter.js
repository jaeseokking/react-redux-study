import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의(액션 타입은 대문자로 정의)
//모듈이름/액션이름 프로젝트가 커질때 이름 중복안되도록 하기 위함
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수
export const increase = createAction(INCREASE); //쉽게 action 생성 함수를 선언
export const decrease = createAction(DECREASE);
//export를 하면 추후 이 함수를 다른 파일에서 부러와서 사용가능

const initialState = {
    number: 0
};

const counter = handleActions( //가독성을 위해서 사용
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
)

export default counter;