import pricingIcon from "../assets/pricing.png";

const items = [
  { title: "Standard Cab", pax: "1-3 PASSENGERS", price: "$1/km" },
  { title: "Minibus", pax: "1-8 PASSENGERS", price: "$2/km" },
  { title: "Executive", pax: "1-2 PASSENGERS", price: "$5/km" },
];

export default function Services() {
  return (
    <section id="pricing" className="ta-section ta-section-white">
      <div className="container ta-container">
        <div className="row g-4">
          {items.map((it) => (
            <div className="col-md-4" key={it.title}>
              <div className="ta-service-card">
                <div className="ta-service-icon">
                  <img
                    src={pricingIcon}
                    alt="Pricing Icon"
                    className="ta-pricing-icon"
                  />
                </div>

                <h3 className="ta-service-title">{it.title}</h3>
                <div className="ta-service-pax">{it.pax}</div>

                <div className="ta-service-divider" />

                <div className="ta-service-sub">RIDES COST</div>
                <div className="ta-service-price">{it.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
