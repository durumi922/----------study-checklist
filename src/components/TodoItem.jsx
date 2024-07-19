import React, { useState } from "react";
import '../App.css';

function TodoItem({ item, onDelete, onUpdateEmoji }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState(item.emoji || '📋');
    const [completed, setCompleted] = useState(item.completed || false); // 완료 상태 추가

    const handleDelete = () => {
        onDelete();
    };

    const handleEmojiChange = (emoji) => {
        setSelectedEmoji(emoji);
        onUpdateEmoji(emoji);
        setDropdownOpen(false);
    };

    const handleCheckboxChange = () => {
        setCompleted(!completed); // 체크박스 클릭 시 완료 상태 토글
    };

    return (
        <div className={`todo-item ${completed ? 'completed' : ''}`}>
            <input type="checkbox" name="check" checked={completed} onChange={handleCheckboxChange} />
            <span role="img" aria-label="todo" className="todo-emoji">{selectedEmoji}</span>
            <div className="todo-content"> 
                <div className="todo-text">
                    {item.todo}
                </div>
                <div className="todo-date">
                    <strong>날짜:</strong> {item.date.toISOString().split('T')[0]}
                </div>
            </div>

            <button className="delete-button" onClick={handleDelete}>삭제</button>
            <div className="emoji-dropdown">
                <button className="emoji-button" onClick={() => setDropdownOpen(!isDropdownOpen)}>😊</button>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <button onClick={() => handleEmojiChange('📋')}>📋</button>
                        <button onClick={() => handleEmojiChange('📝')}>📝</button>
                        <button onClick={() => handleEmojiChange('✅')}>✅</button>
                        <button onClick={() => handleEmojiChange('📅')}>📅</button>
                        <button onClick={() => handleEmojiChange('🌟')}>🌟</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TodoItem;
