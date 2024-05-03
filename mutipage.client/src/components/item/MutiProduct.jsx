import React from 'react';
import "./style/product.css"

function MutiProduct() {
    return (
        <>
        {/* Service Start */}
        <div className="container-fluid bg-light mt-5 py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                  Our Services
                </div>
                <h1 className="mb-4">Sản Phẩm Của Chúng tôi</h1>
                <p className="mb-4">
                Các sản phẩm, dịch vụ của KCL đều được xây dựng trên nền tảng kết hợp công nghệ hiện đại của thế giới cùng với khả năng sáng tạo của các kỹ sư Việt nam. Lợi ích K.Clinic mang đến khách hàng đang sử dụng phần mềm: Quy trình làm việc tối ưu, minh bạch, nhanh chóng. Dữ liệu khách hàng đồng bộ, tập trung trong một phần mềm. Theo dõi sát sao bệnh án của khách hàng để chữa trị tốt nhất. 
                Phân công, giám sát hiệu quả công việc dễ dàng. Rút ngắn thời gian giải quyết công việc. Không còn tình trạng bỏ lỡ khách hàng
                </p>
                <a className="btn btn-primary rounded-pill px-4" href="">
                  Tìm Hiểu Thêm
                </a>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="row g-4">
                      <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <i>
                              <img src="" alt="" />
                            </i>
                          </div>
                          <h5 className="mb-3">K.SOLUTION</h5>
                          <p>
                          - Phần mềm Quản lý Dự án Y tế
                          - Bệnh án điện tử
                          - Phần mềm Quản lý Phòng khám
                          - Tư vấn giải pháp CNTT trong Y tế
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <i className="fa fa-power-off fa-2x" />
                          </div>
                          <h5 className="mb-3">K.TECHNICAL</h5>
                          <p>
                          - Phân phối Thiết bị Công nghệ
                          - Hạ tầng CNTT
                          - Giải pháp bảo mật
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-md-4">
                    <div className="row g-4">
                      <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <i>
                              <img src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/435096132_122113165796267763_5838034740634323068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UMTy_NMeIxIQ7kNvgEWoAxu&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCGn42Ewc08zGOJJSKJEvMi9IObVfHwUaimaeghUmTUnQ&oe=6638FDD0" alt="" />
                             </i>
                          </div>
                          <h5 className="mb-3"> K.HEALTHTECH</h5>
                          <p>
                          - Mô hình tư vấn & CSSK chủ động
                          - Phân phối sản phẩm Dược - TPCN
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
      </>
    );
}

export default MutiProduct;