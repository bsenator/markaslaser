import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Trade() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row className="g-5">
            <Col xl={12} md={12} sm={12} col={12} className="plr_sm--20">
              <div className="title">
                <h2 className="h3">Fiyat Teklifi</h2>
              </div>
              <Form name="ft" action="" method="POST" id="ft" className="contact-panel__form contact-form-contact">
                <Form.Label htmlFor="AdSoyad" className="sr-only">
                
                </Form.Label>
                <Form.Control name="data[AdSoyad]" value="" type="text" className="form-control" placeholder="Ad Soyad" required="required" />

                <Form.Label htmlFor="Email" className="sr-only">
                  
                </Form.Label>
                <Form.Control name="data[Email]" value="" type="email" className="form-control" placeholder="Email Adresiniz" required="required" />

                <Form.Label htmlFor="TelefonNumarasi" className="sr-only">
                  
                </Form.Label>
                <Form.Control name="data[TelefonNumarasi]" value="" type="text" className="form-control" placeholder="Telefon" required="required" />

                <Form.Label htmlFor="AlmakIstenilenHizmetiYaziniz" className="sr-only">
                   
                </Form.Label>
                <Form.Control as="textarea" name="data[AlmakIstenilenHizmetiYaziniz]" placeholder="Almak istenilen hizmeti yazınız" required="required" rows="6" />


                <div id="g-recaptcha-ft" className="g-recaptcha" data-theme="light"></div>

                <input type="hidden" name="__form-name__" value="ft" /> <br/> <br/>

                <button className="rts-btn btn-primary" type="submit">
                  MESAJI GÖNDER
                </button>

                <input type="hidden" name="__unique_form_id__" value="3rnwufifihvzoe6l8ym9" />
                <input type="hidden" name="form-nonce" value="722c1c844464e14c4d975e05acea814f" />
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Trade;
