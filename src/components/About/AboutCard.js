import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
       
          Vizyonumuz
          <hr />

          <span className="purple">MarkasLazer, </span> müşterilerinin istediği şartlar ve beklentileri doğrultusunda ürün ve hizmette sürekliliği sağlayarak, hızlı ve güvenilir hizmetini; eksiksiz ve dünya standartları çerçevesinde yerine getirmeyi kendisine amaç edinmiştir. Firmamız bu amacı doğrultusunda; müşteri memnuniyetine önem vererek, teknolojiyi takip etmek adına personeline en uygun çalışma ortamı ve eğitimi sağlayarak, sisteminde sürekli iyileşme ve gelişme felsefesini benimseyerek ulaşacağının bilinci ve kararlılığı içindedir.

          <br/>          <br/><br/>
          <span className="purple">Misyonumuz </span> 
          <hr />

          Müşterilerimizin tüm ürün ve hizmet beklentilerini dünya standartlarında karşılamak
          <br />           <br />
          <ul>
            <li className="about-activity">
              <ImPointRight />   Kalite 
            </li>
            <li className="about-activity">
              <ImPointRight />   Güven  
            </li>
            <li className="about-activity">
              <ImPointRight />       Hizmet
            </li>
          </ul>
          
          Amaçlarımızı çevreye ve doğaya zarar vermeden, ilişkide olduğumuz kurum ve kişilerle uyum içerisinde gerçekleştirmek
          <br /> <br />
          Dünya, ülke ve bölge ekonomisine katkıda bulunmak
          <br /> <br /> 
          Uygun fiyata müşterilerimize özel uygun hizmetleri sunmak
          <br /><br />
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Vatanını en çok seven görevini en iyi yapandır."{" "}
          </p>
          <footer className="blockquote-footer"> M. K. Atatürk</footer>


        <br /> <p style={{ textAlign: "justify" }}>
        Kalite Güvencemiz 
          <hr />

          <span className="purple">MarkasLazer, </span> Sadece Kahramanmaraş'ın  değil, bölgenin lider firması olma hedefi ile hareket eden kuruluşumuzun kalite politikasını oluşturan ana ilkeler şunlardır; <br/><br/>
          Müşteri odaklı kalite ve estetiğin öncüsü olarak beklentilere cevap verecek üretimlerimizi müşterilerimize sunmak.
          <br/><br/> 
          Sürekli iyileştirme felsefesiyle kalitesini artırmak.
          <br/><br/>
          Kaliteye duyarlı organizasyon yaparak, üretimlerimizde kalitenin esas alındığı ölçme ve değerlendirme mekanizmalarını etkin kılmak.
          <br/><br/>
          Kalite ve eğitimi toplumsal bir sorumluluk olarak algılamak ve bu konuda firma içi ve firma dışı faaliyetler , yurt içi ve yurt dışı fuarlara katılarak eğitim ve bilgi düzeyini yükseltmek.
      </p>

      </blockquote>
      
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
