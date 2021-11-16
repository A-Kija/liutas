function Message({msg}) {


    return (
        <div className="domino__msg" style={{
            opacity: msg.show ? 1 : 0
        }}>
            <span>{msg.text}</span>
        </div>
    )
}

export default Message;