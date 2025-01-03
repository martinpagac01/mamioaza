export default function Welcome() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            VITAJTE V MAMI-OÁZE
          </h2>

          <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Otváracie hodiny
                </h3>
                <div className="space-y-2">
                  <p className="font-medium">MC od septembra otvorené:</p>
                  <p className="text-lg">DOPOLUDNIA OD 9.00 DO 14.00</p>
                  <p>A POPOLUDNÍ LEN POČAS AKTIVÍT</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Kde nás nájdete
                </h3>
                <div className="space-y-2">
                  <p>Košice u Grófky Telelérov</p>
                  <p>(vchod z Mojmírovej ulice)</p>
                  <p>Hviezdoslavova 7</p>
                  <p>040 01 KOŠICE STARÉ MESTO</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-primary">
                Materské centrum pre rodičov a deti v Košiciach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
