import userdata from '../user_dashboard.json';
import UserDashboard from "../components/UserDashboard";


const Index = () => {
    return (
        <div className="container">
            {userdata && <UserDashboard user={userdata.user}></UserDashboard>}
        </div>
    )
}

export default Index;