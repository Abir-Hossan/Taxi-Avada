import { useState } from "react";

export default function HeroBooking() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    passengers: "",
    name: "",
    email: "",
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    alert("Quote requested (demo). Hook this to your backend next.");
  };

  return (
    <section id="home" className="ta-hero">
      <div className="ta-hero-overlay" />
      <div className="container ta-container position-relative">
        <div className="ta-hero-title text-center">
          <h1>
            <span className="ta-accent">Premium Transport</span>
          </h1>
          <p>for your Business &amp; Personal Needs</p>
        </div>

        <div id="book" className="ta-booking-wrap">
          <div className="ta-save-panel">
            <div className="ta-save-small">Book online now &amp;</div>
            <div className="ta-save-big">SAVE</div>
            <div className="ta-save-mid">10%</div>
            <div className="ta-save-small">On Your Ride</div>
          </div>

          <div className="ta-form-panel">
            <form onSubmit={submit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="ta-label">Pick Up Location</label>
                  <input
                    className="form-control ta-input"
                    value={form.pickup}
                    onChange={(e) => update("pickup", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="ta-label">Drop Off Location</label>
                  <input
                    className="form-control ta-input"
                    value={form.dropoff}
                    onChange={(e) => update("dropoff", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="ta-label">Date Required</label>
                  <input
                    type="text"
                    className="form-control ta-input"
                    placeholder=""
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="ta-label">Number of Passengers</label>
                  <input
                    type="text"
                    className="form-control ta-input"
                    value={form.passengers}
                    onChange={(e) => update("passengers", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="ta-label">Your Name</label>
                  <input
                    className="form-control ta-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="ta-label">Your Email Address</label>
                  <input
                    className="form-control ta-input"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>

                <div className="col-12 ta-form-bottom">
                  <small className="ta-note">
                    Payment for bookings is taken in advance as per our terms
                    and conditions
                  </small>
                  <button className="btn ta-btn ta-btn-quote" type="submit">
                    Get A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
