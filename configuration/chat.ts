import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, your guide to navigating life at KFBS. I was created by ${OWNER_NAME} to help international students like you feel at home! What’s on your mind?.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Hmm, I don’t have an answer for that right now. Let’s circle back later, or maybe try rephrasing?.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whoa, we’re deep in this convo! It's too long. Let's summarize or start fresh if needed.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
