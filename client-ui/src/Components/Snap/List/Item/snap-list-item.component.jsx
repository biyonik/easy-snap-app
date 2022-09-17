import {memo} from "react";
import TimeAgo from "react-timeago";

const SnapListItemComponent = ({snapItem}) => {
    const {text, createdAt, user: {username}} = snapItem;
    return (
        <li>
            <div className="title"><span className="username">@{username}</span> {text}</div>
            <div className="date">
                <span><TimeAgo date={createdAt} /></span>
            </div>
        </li>
    )
};

export default memo(SnapListItemComponent);
