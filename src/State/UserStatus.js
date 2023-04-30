import { useState, useEffect } from "react";

const UserStatus = (props) => {
    const[isOnline, setIsOnline] = useState();
    handleStatusChang = (status) => {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChang);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChang);
        };
    });

    if(isOnline === null) {
        return '대기 중...';
    }
    return isOnline ? '온라인' : '오프라인' ; 
}

export default UserStatus;