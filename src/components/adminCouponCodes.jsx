import "./adminCouponCodes.css"
import { useState } from 'react';

function AdminCouponCodes() {

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    function inputChange(e) {
        let input = e.target.value;
        let attr = e.target.name;

        let copy = {...coupon};
        copy[attr] = input;
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon)
        setAllCoupons(copy);

        
    }

    return (
        <div className="ad-coupon-codes">
            <h2>Coupon codes</h2>

            <div className="forms">
                <div>
                    <label className="form-label">Code</label>
                    <input name="code" onChange={inputChange} className="form-control" type="text" />
                </div>

                <div>
                    <label className="form-label">Discount</label>
                    <input name="discount" onChange={inputChange} className="form-control" type="number" />
                </div>

                <div>
                    <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
                </div>
            </div>

            <ul>
                {allCoupons.map(prod => <li key={prod.title}>{prod.title}</li>)}
            </ul>


        </div>
    );
}

export default AdminCouponCodes;