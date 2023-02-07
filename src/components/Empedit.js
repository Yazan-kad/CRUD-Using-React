import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Empedit() {
  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, active };
    fetch("http://localhost:4000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card text-start">
              <div className="card-title">
                <h2 className="m-2">Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="col-lg-12">
                  <div className="form-control">
                    <label>ID</label>
                    <input value={id} disabled className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-control">
                    <label>Name</label>
                    <input
                      required
                      onMouseDown={(e) => valchange(true)}
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                    {name.length == 0 && validation && (
                      <span className="text-danger">Enter The Name</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-control">
                    <label>Email</label>
                    <input
                      required
                      onMouseDown={(e) => valchange(true)}
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                    {email.length == 0 && validation && (
                      <span className="text-danger">Enter Your Email</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-control">
                    <label>Phone</label>
                    <input
                      required
                      onMouseDown={(e) => valchange(true)}
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    ></input>
                    {phone.length < 10 && validation && (
                      <span className="text-danger">
                        Phone Number Must be 10 Numbers
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      checked={active}
                      onChange={(e) => activechange(e.target.checked)}
                      type="checkbox"
                      className="form-check-input"
                    ></input>
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Empedit;
