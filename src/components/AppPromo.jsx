import appStoreBg from "../assets/app-1.png";
import playStoreBg from "../assets/app-2.png";
import appView from "../assets/app-view.png";

export default function AppPromo() {
  return (
    <section id="app" className="ta-app">
      <div className="container ta-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="ta-app-title">Get the app</h2>
            <p className="ta-app-text">
              You can now download our app on Android and iOS. Never be stranded
              with Avada Taxi, book your cab from wherever you are.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-3">
              <a
                className="ta-store ta-store-app"
                style={{ backgroundImage: `url(${appStoreBg})` }}
                href="#"
                aria-label="App Store"
              ></a>

              <a
                className="ta-store ta-store-play"
                style={{ backgroundImage: `url(${playStoreBg})` }}
                href="#"
                aria-label="Google Play"
              ></a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ta-phone-mock">
              <div className="ta-phone-mock">
                <img src={appView} alt="Taxi App Preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
