export default function Home() {
  return (
    <div>
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">ML Wood Figures</h1>
              <p className="fs-4">
                Figuras artesanales de <b>Mobile Legends</b> hechas en madera. ¡Colecciona a tus héroes favoritos!
              </p>
              <a className="btn btn-primary btn-lg" href="/figuras">Ver catálogo</a>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-success bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-tree"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Hechas en madera</h2>
                  <p className="mb-0">Cada figura es tallada y pintada a mano, usando madera de alta calidad.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-warning bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Edición limitada</h2>
                  <p className="mb-0">Figuras únicas inspiradas en los héroes más icónicos de Mobile Legends.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-gift"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">10% de descuento</h2>
                  <p className="mb-0">¡Regístrate y obtén un 10% de descuento en tu primera compra!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Para fans y coleccionistas</h2>
                  <p className="mb-0">El regalo perfecto para cualquier fan de Mobile Legends.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-info bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-truck"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Envíos a todo el país</h2>
                  <p className="mb-0">Recibe tus figuras en la puerta de tu casa, rápido y seguro.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-secondary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <h2 className="fs-4 fw-bold">Compra segura</h2>
                  <p className="mb-0">Sitio seguro y confiable, tu compra está protegida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}