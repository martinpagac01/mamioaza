import { FC } from 'react'

const Guide: FC = () => {
  return (
    <section className="py-16 bg-white" id="guide">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Ako to u nás funguje?
          </h2>

          {/* First Steps */}
          <div className="bg-yellow-50 rounded-2xl p-8 mb-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Chceme začať chodiť do MC? Ako to tam funguje?
            </h3>
            <p className="text-lg mb-6">
              Je lepšie raz vidieť ako stokrát počuť. Odhodlajte sa a vykročte do MC. Pri dverách vľavo hore je zvonček, zazvoňte a otvoríme vám.
            </p>
            <p className="text-lg mb-6">
              Môžete prísť kedykoľvek počas otváracích hodín. Ideálne je prísť najskôr len do herne a nie hneď na aktivity. S novým prostredím a ľuďmi sa tak zoznámite bez zbytočného stresu.
            </p>
            <p className="text-lg">
              Máme skúsenosť, že čím menšie dieťa začne chodiť do MC, tým prirodzenejšie si naň zvykne a vníma ho ako súčasť svojho bežného dňa. Prostredie sa mu stane známym, cíti sa „ako doma", stretá ďalšie deti, má nové hračky, veľa zaujímavých podnetov.
            </p>
          </div>

          {/* Practical Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow border-2 border-yellow-100">
              <h4 className="text-xl font-bold text-primary mb-4">Praktické informácie</h4>
              <ul className="space-y-4">
                <li>• V centre sa všetci prezúvame. Máme tu aj nejaké „erárne" papuče.</li>
                <li>• Do MC si môžete priniesť svoje jedlo, v kuchynke je aj mikrovlnka.</li>
                <li>• Snažíme sa povzbudzovať deti k samostatnosti pri upratovaní hračiek.</li>
                <li>• Do MC chodíme všetci len zdraví, bez soplíkov, kýchania a kašľa.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border-2 border-yellow-100">
              <h4 className="text-xl font-bold text-primary mb-4">Prihlásenie na kurzy</h4>
              <p className="mb-4">
                Ak sa chcete prihlásiť na kurz, napíšte mail s údajmi:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Meno a priezvisko rodiča</li>
                <li>Meno a priezvisko dieťaťa</li>
                <li>Vek dieťaťa</li>
                <li>Telefónne číslo</li>
              </ul>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Čo môžeme v MC čakať?
            </h3>
            <div className="space-y-4">
              <p>• V MC sú vítaní rodičia, starí rodičia, spolu so svojimi deťmi/vnúčatami, ale aj budúci rodičia.</p>
              <p>• Deti, aj vy si nájdete nových kamarátov, možno aj priateľstvá na celý život.</p>
              <p>• Pre deti pripravujeme veľa zaujímavých a podnetných aktivít primeraných ich veku.</p>
              <p>• Deti sa zahrajú s inými hračkami a získavajú cenné sociálne zručnosti.</p>
              <p>• Rodičia sa môžu od seba navzájom inšpirovať a poradiť si.</p>
              <p>• Môžete si oddýchnuť, ale aj urobiť niečo pre svoje zdravie.</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-medium text-primary">
                Príďte sa presvedčiť osobne do nášho a vášho MC, či je to pravda.
              </p>
              <p className="text-lg mt-2 font-medium text-primary">
                Všetci ste vítaní a tešíme sa na vás.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
