import { QUESTION_BANK as BASE_QUESTIONS, TOPIC_LABELS as BASE_TOPIC_LABELS, SECTION_LABELS } from './questions-base.js';
import { ADVANCED_QUESTIONS } from './advanced-questions.js';
import { KI_QUESTIONS } from './ki-questions.js';

export const QUESTION_BANK = [...BASE_QUESTIONS, ...ADVANCED_QUESTIONS, ...KI_QUESTIONS];
export const TOPIC_LABELS = { ...BASE_TOPIC_LABELS, 'p12/ki-automatisierung': 'KI und Automatisierung' };
export { SECTION_LABELS };
