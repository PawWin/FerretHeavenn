import React from "react";

function LoginForm(props) {
    return (
        <section className="py-3 py-md-5 py-xl-8" style={{ paddingTop: "10px", minHeight: "80vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-5">
                            <h2 className="display-5 fw-bold text-center">Zaloguj Się</h2>
                            <p className="text-center m-0">Nie masz jeszcze konta? <a href="#!">Zarejestruj się</a></p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        <div className="row gy-5 justify-content-center">
                            <div className="col-12 col-lg-5">
                                <form action="#!">
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" id="email" placeholder="name@example.com" required/>
                                                    <label for="email" className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" id="password" value="" placeholder="Password" required/>
                                                    <label for="password" className="form-label">Hasło</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row justify-content-between">
                                                <div className="col-6">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me"/>
                                                            <label className="form-check-label text-secondary" for="remember_me">
                                                                Zapamietaj mnie
                                                            </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-end">
                                                        <a href="#!" className="link-secondary text-decoration-none">Zapomniałeś hasła?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Zaloguj Się</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
                                <div className="bg-dark h-100 d-none d-lg-block login_div"></div>
                                <div className="bg-dark w-100 d-lg-none login_div" ></div>
                                <div>or</div>
                                <div className="bg-dark h-100 d-none d-lg-block login_div" ></div>
                                <div className="bg-dark w-100 d-lg-none login_div" ></div>
                            </div>
                            <div className="col-12 col-lg-5 d-flex align-items-center">
                                <div className="d-flex gap-3 flex-column w-100 ">
                                    <a href="#!" className="btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google text-danger" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                        <span className="ms-2 fs-6 flex-grow-1">Continue with Google</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginForm;