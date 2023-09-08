import React from "react";

const Dashboard = () => {
    return
    <>
        <div className="container-fluid">
            <h2 className="text-center my-3 text-muted">
                Admin Dashboard
            </h2>
            <div className="row d-flex">
                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-primary fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Total Orders
                                            </span>
                                        </div>
                                        <div className="text-secondary fw-bold mb-0 text-center">
                                            <span>Delivered: 0</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fab fa-first-order-alt fs-1 text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2 bg-warning">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-light fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Total Users
                                            </span>
                                        </div>
                                        <div className="text-secondary fw-bold mb-0 text-center">
                                            <span>Deactivated: 0</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fas fa-users fs-1 text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2 bg-success">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-light fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Total Products
                                            </span>
                                        </div>
                                        <div className="text-warning fw-bold mb-0 text-center">
                                            <span>Out of Stock: 0</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fas fa-globe fs-1 text-light"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2 bg-danger">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-light fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Total Sales
                                            </span>
                                        </div>
                                        <div className="text-white fw-bold mb-0 text-center">
                                            <span>Booking: 0</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fas fa-globe fs-1 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2 bg-primary">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-light fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Admins
                                            </span>
                                        </div>
                                        <div className="text-white fw-bold mb-0 text-center">
                                            <span>Super Admin: 1</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fas fa-users fs-1 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 col-xl-4 mb-4">
                    <Link to="#" className="text-decoration-none">
                        <div className="card shadow border-0 py-2 bg-dark">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2">
                                        <div className="text-uppercase text-light fw-bold text-xs mb-1 text-center">
                                            <span>
                                                Categories
                                            </span>
                                        </div>
                                        <div className="text-white fw-bold mb-0 text-center">
                                            <span>Sub-Categories: 0</span>
                                        </div>
                                        <div className="col-auto text-center">
                                            <i className="fas fa-globe fs-1 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>




        {/* <!-- Bootstrap Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </>
}

export default Dashboard;