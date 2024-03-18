import React from 'react';

const Button = ({ text, onClick, className }) => {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            style={{ backgroundColor: '#1FDF64' }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;