function Carrosel(props) {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://marketplace.canva.com/EAFWQdMI9gk/1/0/1600w/canva-banner-para-loja-online-com-headset-HW12R5yhIZs.jpg"
            className="d-block w-100"
            alt="..."
            style={{
              maxWidth: "1300px",
              maxHeight: "400px",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://marketplace.canva.com/EAFNihXEBFs/1/0/1600w/canva-banner-festival-de-eletrônicos-divertido-lilás-e-amarelo-FR0KfcrjPaQ.jpg"
            className="d-block w-100"
            alt="..."
            style={{
              maxWidth: "1600px",
              maxHeight: "400px",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.designi.com.br/images/preview/10679357.jpg"
            className="d-block w-100"
            alt="..."
            style={{
              maxWidth: "1600px",
              maxHeight: "400px",
              width: "auto",
              height: "auto",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrosel;
