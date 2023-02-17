import "./admin.css";
import AdminProducts from './../components/adminProducts';
import AdminCouponCodes from './../components/adminCouponCodes';

function Admin(){
    return(
        <div className="admin">
            <h1>Admin page</h1>

            <div className="parent">
                <AdminProducts></AdminProducts>
                <AdminCouponCodes></AdminCouponCodes>
            </div>
        </div>
    );
}

export default Admin;