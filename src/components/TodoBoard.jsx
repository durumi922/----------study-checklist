import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
    const handleUpdateEmoji = (index, newEmoji) => {
        const updatedList = [...props.todoList];
        updatedList[index].emoji = newEmoji;
        props.onUpdate(updatedList);
    };

    return (
        <div className="todo-board">
            <h1 style={{ color: '#974D99' }}>My Todo List</h1> 
            {/* 원하는 색상으로 변경 */}
            {props.todoList.length === 0 ? (
                <p>No items in the list</p>
            ) : (
                props.todoList.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        onDelete={() => props.onDelete(index)}
                        onUpdateEmoji={(newEmoji) => handleUpdateEmoji(index, newEmoji)}
                    />
                ))
            )}
        </div>
    );
}

export default TodoBoard;
