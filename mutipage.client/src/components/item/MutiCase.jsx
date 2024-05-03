import React from "react";


function MutiCase() {
    return (
        <>
        <div className="container-fluid bg-light py-5">
          <div className="container py-5">
            <div
              className="mx-auto text-center wow fadeIn"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                
              </div>
              <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="../../../public/image/project-1.jpg" alt="" />
                  <a className="case-overlay text-decoration-none" href="">
                    <small>Robotic Automation</small>
                    <h5 className="lh-base mb-3">
                      Lorem elitr magna stet eirmod labore amet labore clita
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="../../../public/image/project-2.jpg" alt="" />
                  <a className="case-overlay text-decoration-none" href="">
                    <small>Machine learning</small>
                    <h5 className="lh-base  mb-3">
                      Lorem elitr magna stet eirmod labore amet labore clita
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="../../../public/image/project-3.jpg" alt="" />
                  <a className="case-overlay text-decoration-none" href="">
                    <small>Predictive Analysis</small>
                    <h5 className="lh-base  mb-3">
                      Lorem elitr magna stet eirmod labore amet labore clita
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Case End */}
      </>
    );
}      

export default MutiCase;