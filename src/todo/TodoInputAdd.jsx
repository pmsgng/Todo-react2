import React from 'react';

const TodoInput = ({value,onChange,onKeyPress,id}) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                id={id}
                onChange={onChange}
                placeholder='Введите задание'
                onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default TodoInput;