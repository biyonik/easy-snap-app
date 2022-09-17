import {memo} from "react";

const SnapCounterComponent = ({count}) => {
    return (
        <div className="counter">{count} snap(s)</div>
    )
}

export default memo(SnapCounterComponent);
