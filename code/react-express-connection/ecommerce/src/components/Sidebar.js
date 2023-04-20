
import React from "react";

const Sidebar = () => {
    return (
        <>
            <h2>Our Products and Promotions</h2>
            <h5>Categories</h5>
            <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Mobile
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Fashion
                </label>
            </div>
            <h5 className="mt-4">Price Range</h5>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    All
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    500-1000
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    5000-10000
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    50000-100000
                </label>
            </div>
        </>
    );
}

export default Sidebar;