import InputGroupComponent from "../../InputGroup/input-group.component";
import {memo, useState} from "react";
import {useActiveUser} from "../../../Hooks/useActiveUser";
import {useMutation} from "react-apollo";
import {ADD_SNAP_MUTATION} from "../../../Mutations/Mutation/snap.mutation";
import {GET_SNAPS} from "../../../Queries/Snap/snap.query";

const AddSnapComponent = (props) => {
    const [snap, setSnap] = useState('');
    const activeUser = useActiveUser();
    const [createSnap] = useMutation(ADD_SNAP_MUTATION, {
        variables: {
            text: snap,
            userId: activeUser.id
        },
        refetchQueries: [{
            query: GET_SNAPS
        }]
    });

    const handleSubmit = async e => {
        e.preventDefault();
        if (snap.length === 0) return;
        await createSnap();
        setSnap('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroupComponent type="submit" hidden={true} />
            <InputGroupComponent
                className="add-snap__input"
                value={snap}
                type="text"
                placeholder="add a snap"
                onChange={(e) => setSnap(e.target.value)}
            />
        </form>
    )
}

export default memo(AddSnapComponent);
