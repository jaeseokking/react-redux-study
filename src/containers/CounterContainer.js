import React, { useCallback } from 'react'
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

function CounterContainer() {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    //useDispatch를 사용할 때는 useCallback과 함께 사용하여 컴포넌트 성능을 최적화함
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
};

//dispatch를 하나하나 설정할 대 (bindActionCreators 미사용)
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     //임시 함수
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
// });


export default CounterContainer;
