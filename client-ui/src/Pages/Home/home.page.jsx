import {memo} from "react";
import {useActiveUser} from "../../Hooks/useActiveUser";
import HomeDescriptionComponent from "../../Components/Home/Description/home-description.component";
import AddSnapComponent from "../../Components/Snap/Add/add-snap.component";
import SnapCounterComponent from "../../Components/Snap/Counter/snap-counter.component";
import SnapListComponent from "../../Components/Snap/List/snap-list.component";
import {useQuery} from "react-apollo";
import {GET_SNAPS} from "../../Queries/Snap/snap.query";
import LoadingComponent from "../../Components/Loading/loading.component";
import ErrorComponent from "../../Components/Error/error.component";

const HomePage = () => {
    const activeUser = useActiveUser();
    const {loading, error, data} = useQuery(GET_SNAPS);
    if (loading) return <LoadingComponent />
    if (error) return <ErrorComponent message={error.message} />
    const {snaps} = data;

    return (
        <>
            <HomeDescriptionComponent>
                simple snap app with <span>react</span>.
            </HomeDescriptionComponent>

            {activeUser && (
                <AddSnapComponent />
            )}
            <SnapListComponent snaps={snaps} />
            <SnapCounterComponent count={snaps.length} />
        </>
    )
}

export default memo(HomePage);
