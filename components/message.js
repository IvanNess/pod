
const Message = ({ id,
    isNew,
    creatorId,
    creatorUsername,
    message,
    dialogId,
    date,
    isSending = false,
    isError = false,
    repeat
}) => {



    return (
        <div className="center">
            {message} {isSending? 'sending...' : null}
        </div>
    )
}

export default Message
