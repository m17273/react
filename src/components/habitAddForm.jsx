import React, {memo} from 'react';
//memo는 purecomponent와 비슷한 역할을 함(변경사항이 없으면 렌더링되지 않음)

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef();
            //input의 입력값을 받아옴
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }
    console.log('렌더링중') //콘솔창 출력되지 않음
    return (
    <>                  
        <form className='add_form' onSubmit={onSubmit}>
                                
        <input
            ref={inputRef} //읽어오고자 하는 것을 ref로 연결
            className='add_input' 
            type='text' 
            placeholder='Habit'
        />
        <button className='add_button'>Add</button>
        </form>                  
    </>                        
);   
})
export default HabitAddForm;
