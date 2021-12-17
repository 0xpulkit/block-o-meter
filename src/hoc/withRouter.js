import {useParams, useNavigate, useLocation} from "react-router-dom"

export function withRouter(Child) {
    return (props) => {
        const params = useParams();
        const location = useLocation();
        const navigate = useLocation();

        return <Child {...props} params={params} location={location} navigate={navigate} />
    }
}