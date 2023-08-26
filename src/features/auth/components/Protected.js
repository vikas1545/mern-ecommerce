import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function Protected({children}) {
    const user = useSelector(selectLoggedInUser)

    if(!user) {

        return <Navigate to='/login' replace={true} />
    }
    return children;
}

export default Protected;