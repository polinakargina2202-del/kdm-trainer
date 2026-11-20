import { QUESTION_BANK as BASE_QUESTIONS, TOPIC_LABELS as BASE_TOPIC_LABELS, SECTION_LABELS } from './questions-base.js';
import { ADVANCED_QUESTIONS } from './advanced-questions.js';
import { KI_QUESTIONS } from './ki-questions.js';
import { COVERAGE_QUESTIONS_P12 } from './coverage-questions-p12.js';
import { COVERAGE_QUESTIONS_P13_WISO } from './coverage-questions-p13-wiso.js';

import { EXAM_TERM_QUESTIONS } from './exam-term-questions.js';
import { NEW_PERIOD_QUESTIONS } from './new-periods-questions.js';

export const QUESTION_BANK = [...BASE_QUESTIONS, ...ADVANCED_QUESTIONS, ...KI_QUESTIONS, ...COVERAGE_QUESTIONS_P12, ...COVERAGE_QUESTIONS_P13_WISO, ...EXAM_TERM_QUESTIONS, ...NEW_PERIOD_QUESTIONS];
export const TOPIC_LABELS = { ...BASE_TOPIC_LABELS, 'p12/ki-automatisierung': 'KI und Automatisierung',
  'p12/iot-rfid-sensorik': 'IoT, RFID und Sensorik',
  'p12/digitale-geschaeftsmodelle': 'Geschäftsmodelle, 4C und BMC',
  'p12/markt-kundenanalyse': 'Marktanalyse, Customer Journey, CLV',
  'p12/schnittstellen-integration': 'Schnittstellen, REST und Datenintegration',
  'p12/analyse-methoden-netzwerk': 'Analyseverfahren, UML und Netzwerktechnik',
  'p13/umsatzsteuer-buchfuehrung': 'Umsatzsteuer und Buchführung',
  'p13/kennzahlen-wirtschaftlichkeit': 'Kennzahlen und Wirtschaftlichkeit',
  'p13/crm-kundenanalyse': 'CRM, Kundensegmentierung und ABC',
  'p13/urheberrecht-drm': 'Urheberrecht und DRM',
  'wiso/weiterbildung-digital-zusammenarbeiten': 'Weiterbildung und digitales Arbeiten' };
export { SECTION_LABELS };
