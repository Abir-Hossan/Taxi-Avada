import bottomImg from "../assets/bottom.png";

export default function BottomBanner() {
  return (
    <section className="ta-bottom">
      <div className="ta-bottom-overlay" />
      <div className="container ta-container position-relative">
        <div className="row align-items-center g-4">
          <div className="col-md-4">
            <div className="ta-bottom-save">
              <div className="ta-save-small">Book online now &amp;</div>
              <div className="ta-save-big">SAVE</div>
              <div className="ta-save-mid">10%</div>
              <div className="ta-save-small mb-3">On Your Ride</div>
              <a className="btn ta-btn ta-btn-book w-100" href="#book">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row g-3">
              {[
                {
                  title: "Standard Cab",
                  pax: "1-3 PASSENGERS",
                  price: "$1/km",
                },
                { title: "Minibus", pax: "1-8 PASSENGERS", price: "$2/km" },
                { title: "Executive", pax: "1-2 PASSENGERS", price: "$5/km" },
              ].map((s) => (
                <div className="col-md-4" key={s.title}>
                  <div className="ta-bottom-service">
                    <div className="ta-bottom-icons">
                      <img src={bottomImg} alt="Taxi Avada Icon" />
                    </div>

                    <div className="ta-bottom-title">{s.title}</div>
                    <div className="ta-bottom-pax">{s.pax}</div>
                    <div className="ta-bottom-sub">RIDES COST</div>
                    <div className="ta-bottom-price">{s.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
