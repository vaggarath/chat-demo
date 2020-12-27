import React from 'react';

const Message = ({ pseudo, message, isUser}) => {
    return (
            <div className="message">
                {
                    isUser(pseudo) ? <p className="text-xl text-right">{message}</p> : <p className="text-xl text-left">{message}</p>
                }
                {
                    isUser(pseudo) ? <p className="italic text-purple-900 text-right"> ({pseudo})</p> : <p className="italic text-purple-900 text-left"> ({pseudo})</p>
                }
                
            </div>
    );
};

export default Message;