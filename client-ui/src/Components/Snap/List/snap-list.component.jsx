import {memo} from "react";
import SnapListItemComponent from "./Item/snap-list-item.component";

const SnapListComponent = ({snaps}) => {
    return (
        <ul className="snaps">
            {snaps && snaps.map((snapItem, index) => (
                <SnapListItemComponent key={index} snapItem={snapItem} />
            ))}
        </ul>
    )
}

export default memo(SnapListComponent);
