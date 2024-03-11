import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { resetCart } from "../store/cartSlice";

function Payment() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        cardNumber: "",
        expire: "",
        cvv: "",
      },
      onSubmit: (values) => {
        console.log("formik.values", formik.values);
        dispatch(resetCart());
        alert("Payment Successful");
        navigate("/");
      },
      validate: (values) => {
        let errors = {};
  
        if (!values.cardNumber) {
          errors.cardNumber = "*required";
        }else if((!/^\d+$/i.test(values.cardNumber))  ){
          errors.cardNumber = "*Invalid Card Number";
        }else if((!/^\d{16}$/i.test(values.cardNumber))  ){
          errors.cardNumber = "*Invalid Card Number";
        }
  
        if (!values.expire) {
          errors.expire = "*required";
        }else if(!/^((0[1-9])|(1[0-2]))\/\d{4}$/i.test(values.expire)){
          errors.expire = "*Invalid Date";
        }
  
        if (!values.cvv) {
          errors.cvv = "*required";
        } else if(!/^\d{4}$/i.test(values.cvv)){
          errors.cvv = "*Invalid cvv";
        }
  
        return errors;
      },
    });
  
    return (
      <section style={{ backgroundColor: "#f9c9aa" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-forms/img1.webp"
                  className="card-img-top"
                  alt="Black Chair"
                /> */}
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between mb-0">
                    <p className="text-muted mb-0">Payment Summary</p>
                    {/* <p className="mb-0">$760</p> */}
                  </div>
                </div>
                <div
                  className="rounded-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <div className="card-body">
                    <p className="mb-4">Your payment details</p>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-outline mb-3">
                        {formik.errors.cardNumber && formik.touched.cardNumber  ? (
                          <div>{formik.errors.cardNumber}</div>
                        ) : null}
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          autoComplete="off"
                          className="form-control"
                          placeholder="1234 5678 1234 5678"
                          onChange={formik.handleChange}
                          value={formik.values.cardNumber}
                          onBlur={formik.handleBlur}
                        />
                        <label className="form-label" htmlFor="cardNumber">
                          Card Number
                        </label>
                      </div>
                      <div className="row mb-3">
                        <div className="col-6">
                          <div className="form-outline">
                            {formik.errors.expire && formik.touched.expire ? (
                              <div>{formik.errors.expire}</div>
                            ) : null}
                            <input
                              type="password"
                              id="expire"
                              name="expire"
                              className="form-control"
                              placeholder="MM/YYYY"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              value={formik.values.expire}
                              onBlur={formik.handleBlur}
                            />
                            <label className="form-label" htmlFor="expire">
                              Expire
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-outline">
                            {formik.errors.cvv && formik.touched.cvv ? (
                              <div>{formik.errors.cvv}</div>
                            ) : null}
                            <input
                              type="password"
                              id="cvv"
                              name="cvv"
                              className="form-control"
                              placeholder="Cvv"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              value={formik.values.cvv}
                              onBlur={formik.handleBlur}
                            />
                            <label className="form-label" htmlFor="cvv">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-info btn-block">
                        Order now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Payment;