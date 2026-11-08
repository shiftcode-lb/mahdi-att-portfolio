export const asset = (p) => `${import.meta.env.BASE_URL}assets/${p}`

export const ROLES = ['Senior Barista', 'Coffee Specialist', 'Latte Art Lover', 'Espresso Calibrator']

const BH = 'Barista Hustle (BH Learn)'
const CS = 'The Coffee Sensorium'
const CK = 'Coffee Knowledge Hub'

export const CERTS = [
  { f: 'barista', t: 'Barista One', i: BH, d: 'June 2022', s: 'barista-one', n: 'Certificate of Excellence', x: 'Earned after completing the program’s core barista training: espresso fundamentals, milk texturing, grinder setup, and the everyday workflow behind the bar.' },
  { f: 'barista', t: 'Espresso Masterclass for Barista Competition', i: CK, d: 'April 2022', s: 'espresso-masterclass', n: 'Online course', x: 'Competition-level espresso techniques, with a focus on precision, consistency, and presenting a shot with confidence.' },
  { f: 'science', t: 'Chemistry of Roasting', i: CS, d: 'March 2022', s: 'chemistry-roasting', n: '4 hours', x: 'What actually happens inside the bean during roasting, including the chemical reactions that build sweetness, acidity, and aroma.' },
  { f: 'science', t: 'Introduction to Roasting with Matthew Orchard', i: CK, d: 'April 2022', s: 'intro-roasting', n: 'Online course', x: 'A practical introduction to roasting, including roast profiles and how different decisions show up in the final cup.' },
  { f: 'science', t: 'Coffee Extraction Kinetics', i: CS, d: 'March 2022', s: 'extraction-kinetics', n: '4 hours', x: 'How grind size, time, temperature, and water flow affect extraction, and how to use that to dial in a better brew.' },
  { f: 'science', t: 'Aspects of Coffee Freshness', i: CS, d: 'April 2022', s: 'freshness', n: '2 hours', x: 'How coffee changes after roasting, from degassing to staling, and how storage and packaging help keep it fresh.' },
  { f: 'science', t: 'Acidity and Bitterness', i: CS, d: 'April 2022', s: 'acidity-bitterness', n: '2 hours', x: 'Telling pleasant acidity apart from harsh bitterness, and the brewing and roasting factors behind each.' },
  { f: 'science', t: 'Traceability in Coffee: Building Relationships through Data', i: CK, d: 'April 2022', s: 'traceability', n: 'Online course', x: 'How tracking coffee from farm to cup builds transparency and trust between producers, roasters, and customers.' },
  { f: 'sensory', t: 'Aromas in Coffee: Perception and Description', i: CS, d: 'March 2022', s: 'aromas', n: '4 hours', x: 'Training the nose to recognize common coffee aromas and describe them clearly and consistently.' },
  { f: 'sensory', t: 'Coffee Taster’s Flavour Wheel: Design and Use', i: CS, d: 'April 2022', s: 'flavour-wheel', n: '2 hours', x: 'How the flavour wheel was built and how to use it in practice to pin down and communicate what you taste.' },
  { f: 'sensory', t: 'Multi Sensory Perception', i: CS, d: 'March 2022', s: 'multisensory', n: '4 hours', x: 'How taste, smell, texture, and even sight work together to shape the experience of a cup of coffee.' },
  { f: 'sensory', t: 'Mouthfeel in Beverages', i: CS, d: 'April 2022', s: 'mouthfeel', n: '2 hours', x: 'Body, texture, and weight in the cup, and how they can be adjusted to improve a drink’s overall feel.' },
]

export const FILTERS = [
  ['all', 'All'],
  ['barista', 'Barista skills'],
  ['science', 'Coffee science'],
  ['sensory', 'Sensory'],
]

export const GALLERY = [
  ['latte-heart-cup-sm', 'Heart latte art in a paper cup', 'The classic heart'],
  ['latte-rosetta-blue-sm', 'Rosetta latte art in a blue cup', 'Rosetta'],
  ['latte-fern-red-sm', 'Fern latte art', 'Fern'],
  ['latte-wave-red-sm', 'Wave latte art', 'The wave'],
  ['latte-tulip-granite-sm', 'Tulip latte art', 'Tulip'],
  ['latte-swan-blue-sm', 'Swan latte art', 'The swan'],
  ['latte-swirl-red-sm', 'Swirl latte art', 'Swirl'],
  ['latte-wing-red-sm', 'Wing latte art', 'Wings'],
]
