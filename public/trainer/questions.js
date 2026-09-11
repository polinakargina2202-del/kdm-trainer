import { QUESTION_BANK as BASE_QUESTIONS, TOPIC_LABELS, SECTION_LABELS } from './questions-base.js';
import { ADVANCED_QUESTIONS } from './advanced-questions.js';

export const QUESTION_BANK = [...BASE_QUESTIONS, ...ADVANCED_QUESTIONS];
export { TOPIC_LABELS, SECTION_LABELS };
