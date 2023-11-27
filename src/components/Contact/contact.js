


import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const ContactMap = () => {
  // Harita bileşeni için gerekli state veya diğer tanımlamalar buraya gelebilir.

  return (
    <div>
      {/* Harita bileşeni buraya gelecek */}
      <p>******* Map Area *******</p>
    </div>
  );
};

const Contact = () => {

  return (
    <div>
      <Container className="resume-section">
        <div className="rts-contact-area-m pt--50 ptb_sm--100 rts-section-gap">
          <Container>
            <Row className="g-24">
              {/* single contact area */}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="single-contact-one-inner">
                  <div className="content">
                    <div className="info">
                      <span>Bizi Arayın</span>
                      <a href="tel:+90262 233 44 44">
                        <h5>0262 233 44 44</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              {/* single contact area end */}
              {/* single contact area */}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="single-contact-one-inner">
                  <div className="content">
                    <div className="info">
                      <span>Mail Atın</span>
                      <a href="mailto:info@toprakendustri.com.tr">
                        <h5>info@markaslazer.com.tr</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              {/* single contact area end */}
              {/* single contact area */}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="single-contact-one-inner">
                  <div className="content">
                    <div className="info">
                      <span>Ziyaret Edin</span>
                      <a href="#">
                        <h5>Maraş</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              {/* single contact area end */}
            </Row>
          </Container>
        </div>

        <form
          name="iletisim"
          action=""
          method="POST"
          id="iletisim"
          className="contact-panel__form contact-form-contact"
        >
          <label htmlFor="Ad Soyad" className="sr-only"></label>
          <input
            name="data[Ad Soyad]"
            type="text"
            className="form-control form-control"
            placeholder="Ad Soyad"
            required="required"
          />

          <label htmlFor="E-Mail Adresi" className="sr-only"></label>
          <input
            name="data[E-Mail Adresi]"
            type="email"
            className="form-control form-control"
            placeholder="Email Adresiniz"
            required="required"
          />

          <label htmlFor="Telefon Numarası" className="sr-only"></label>
          <input
            name="data[Telefon Numarası]"
            type="text"
            className="form-control form-control"
            placeholder="Telefon"
            required="required"
          />

          <label htmlFor="Mesaj" className="sr-only"></label>
          <textarea
            className="form-control"
            name="data[Mesaj]"
            placeholder="Mesajınızı Yazın"
            required="required"
            rows="6"
          ></textarea>

          <label htmlFor="Doğrulama" className="sr-only"></label>
          <script
            type="application/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var captchaOnloadCallback_iletisim = function captchaOnloadCallback_iletisim() {
                  grecaptcha.render('g-recaptcha-iletisim', {
                    'sitekey': '6LfOwmgmAAAAAHzRYhMhOB5W_UBxh7IneZ_mFi_Y',
                    'callback': captchaValidatedCallback_iletisim,
                    'expired-callback': captchaExpiredCallback_iletisim
                  });
                };
  
                var captchaValidatedCallback_iletisim = function captchaValidatedCallback_iletisim() {};
                var captchaExpiredCallback_iletisim = function captchaExpiredCallback_iletisim() {
                  grecaptcha.reset();
                };
              `,
            }}
          ></script>
          <script
            src="https://www.google.com/recaptcha/api.js?onload=captchaOnloadCallback_iletisim&amp;render=explicit&amp;hl=tr&amp;theme=light "
            async=""
            defer=""
          ></script>
          <div
            className="g-recaptcha"
            id="g-recaptcha-iletisim"
            data-theme="light"
            dangerouslySetInnerHTML={{
              __html: `
                <div style="width: 304px; height: 78px;">
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      width="304"
                      height="78"
                      role="presentation"
                      name="a-nk0i3rgzqoc3"
                      frameBorder="0"
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfOwmgmAAAAAHzRYhMhOB5W_UBxh7IneZ_mFi_Y&amp;co=aHR0cHM6Ly90b3ByYWtsYXplci5jb206NDQz&amp;hl=tr&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;theme=light&amp;size=normal&amp;cb=zdn75a9507"
                    ></iframe>
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                  ></textarea>
                </div>
              `,
            }}
          ></div>

          <input type="hidden" name="__form-name__" value="iletisim" />

          <button className="rts-btn btn-primary" type="submit">
            MESAJI GÖNDER
          </button>

          <input type="hidden" name="__unique_form_id__" value="bwn0urgqviyqzr8uj6ak" />
          <input type="hidden" name="form-nonce" value="722c1c844464e14c4d975e05acea814f" />
        </form>

        {/* Harita bileşeni ekleniyor */}
        <ContactMap />
      </Container>
    </div>
  );
};

export default Contact;
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";

// const Contact = () => {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         <div className="rts-contact-area-m pt--50 ptb_sm--100 rts-section-gap">
//           <Container>
//             <Row className="g-24">
//               {/* single contact area */}
//               <Col xl={4} lg={4} md={6} sm={6} xs={12}>
//                 <div className="single-contact-one-inner">
//                   <div className="content">
//                     <div className="info">
//                       <span>Bizi Arayın</span>
//                       <a href="tel:+90262 233 44 44">
//                         <h5>0262 233 44 44</h5>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               {/* single contact area end */}
//               {/* single contact area */}
//               <Col xl={4} lg={4} md={6} sm={6} xs={12}>
//                 <div className="single-contact-one-inner">
//                   <div className="content">
//                     <div className="info">
//                       <span>Mail Atın</span>
//                       <a href="mailto:info@toprakendustri.com.tr">
//                         <h5>info@markaslazer.com.tr</h5>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               {/* single contact area end */}
//               {/* single contact area */}
//               <Col xl={4} lg={4} md={6} sm={6} xs={12}>
//                 <div className="single-contact-one-inner">
//                   <div className="content">
//                     <div className="info">
//                       <span>Ziyaret Edin</span>
//                       <a href="#">
//                         <h5>Maraş</h5>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               {/* single contact area end */}
//             </Row>
//           </Container>
//         </div>

//         <form
//           name="iletisim"
//           action=""
//           method="POST"
//           id="iletisim"
//           className="contact-panel__form contact-form-contact"
//         >
//           <label htmlFor="Ad Soyad" className="sr-only">
            
//           </label>
//           <input
//             name="data[Ad Soyad]"
//             value=""
//             type="text"
//             className="form-control form-control"
//             placeholder="Ad Soyad"
//             required="required"
//           />

//           <label htmlFor="E-Mail Adresi" className="sr-only">
            
//           </label>
//           <input
//             name="data[E-Mail Adresi]"
//             value=""
//             type="email"
//             className="form-control form-control"
//             placeholder="Email Adresiniz"
//             required="required"
//           />

//           <label htmlFor="Telefon Numarası" className="sr-only">
            
//           </label>
//           <input
//             name="data[Telefon Numarası]"
//             value=""
//             type="text"
//             className="form-control form-control"
//             placeholder="Telefon"
//             required="required"
//           />

//           <label htmlFor="Mesaj" className="sr-only">
            
//           </label>
//           <textarea
//             className="form-control"
//             name="data[Mesaj]"
//             placeholder="Mesajınızı Yazın"
//             required="required"
//             rows="6"
//           ></textarea>

//           <label htmlFor="Doğrulama" className="sr-only">
            
//           </label>
//           <script
//             type="application/javascript"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 var captchaOnloadCallback_iletisim = function captchaOnloadCallback_iletisim() {
//                   grecaptcha.render('g-recaptcha-iletisim', {
//                     'sitekey': '6LfOwmgmAAAAAHzRYhMhOB5W_UBxh7IneZ_mFi_Y',
//                     'callback': captchaValidatedCallback_iletisim,
//                     'expired-callback': captchaExpiredCallback_iletisim
//                   });
//                 };
  
//                 var captchaValidatedCallback_iletisim = function captchaValidatedCallback_iletisim() {};
//                 var captchaExpiredCallback_iletisim = function captchaExpiredCallback_iletisim() {
//                   grecaptcha.reset();
//                 };
//               `,
//             }}
//           ></script>
//           <script
//             src="https://www.google.com/recaptcha/api.js?onload=captchaOnloadCallback_iletisim&amp;render=explicit&amp;hl=tr&amp;theme=light "
//             async=""
//             defer=""
//           ></script>
//           <div
//             className="g-recaptcha"
//             id="g-recaptcha-iletisim"
//             data-theme="light"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 <div style="width: 304px; height: 78px;">
//                   <div>
//                     <iframe
//                       title="reCAPTCHA"
//                       width="304"
//                       height="78"
//                       role="presentation"
//                       name="a-nk0i3rgzqoc3"
//                       frameBorder="0"
//                       scrolling="no"
//                       sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
//                       src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfOwmgmAAAAAHzRYhMhOB5W_UBxh7IneZ_mFi_Y&amp;co=aHR0cHM6Ly90b3ByYWtsYXplci5jb206NDQz&amp;hl=tr&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;theme=light&amp;size=normal&amp;cb=zdn75a9507"
//                     ></iframe>
//                   </div>
//                   <textarea
//                     id="g-recaptcha-response"
//                     name="g-recaptcha-response"
//                     className="g-recaptcha-response"
//                     style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
//                   ></textarea>
//                 </div>
//               `,
//             }}
//           ></div>

//           <input type="hidden" name="__form-name__" value="iletisim" />

//           <button className="rts-btn btn-primary" type="submit">
//             MESAJI GÖNDER
//           </button>

//           <input type="hidden" name="__unique_form_id__" value="bwn0urgqviyqzr8uj6ak" />
//           <input type="hidden" name="form-nonce" value="722c1c844464e14c4d975e05acea814f" />
//         </form>
//       </Container>
//     </div>
//   );
// };

// export default Contact;