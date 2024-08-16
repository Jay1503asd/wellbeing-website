export interface Question {
    question: string;
    reversal: boolean;
    type: string[];
    response?: number;
}

export const anger: Question[] = [
    { question: "When I am angry I use subtle insults to hurt others", reversal: false, type: ["Passive Aggresive"] },
    { question: "When I am angry, I will refuse to follow through on tasks to annoy or hurt someone else", reversal: false, type: ["Passive Aggresive"] },
    { question: "When I am angry, I will indirectly express it and only show others a false happy exterior", reversal: false, type: ["Passive Aggresive"] },
    { question: "When I am angry, I explode with rage no matter who is around me or where I am", reversal: false, type: ["Explosive"] },
    { question: "When I am angry, I am prone to get into fights and cause property damage", reversal: false, type: ["Explosive"] },
    { question: "When I am angry, I tend to respond in an extreme manner beyond what caused my anger", reversal: false, type: ["Explosive"] },
    { question: "I tend to hold grudges against those who I feel wronged me", reversal: false, type: ["Hardened"] },
    { question: "When I am angry, it sits inside of me and grows", reversal: false, type: ["Hardened"] },
    { question: "When I am angry, I tend to hold onto anger and disappointment at being treated unfairly", reversal: false, type: ["Hardened"] },
    { question: "I tend to hold onto thoughts of revenge", reversal: false, type: ["Vengeful"] },
    { question: "I spend a lot of time thinking about how to get back at those who have hurt me", reversal: false, type: ["Vengeful"] },
    { question: "I’d like to inflict hurt or harm on someone for an injury or wrong done to me", reversal: false, type: ["Vengeful"] },
    { question: "I tend to hold onto my anger for 2 months or more", reversal: false, type: ["Chronic"] },
    { question: "I am angry all the time", reversal: false, type: ["Chronic"] },
    { question: "I tend to wake up angry, and I’m angry all day", reversal: false, type: ["Chronic"] },
    { question: "When a situation makes me angry, I’m still able to focus and work to resolve the situation", reversal: false, type: ["Incidental"] },
    { question: "When I am in a situation that angers me, my anger motivates me into action to resolve it", reversal: false, type: ["Incidental"] },
    { question: "If I get a product or service that is broken or bad, my anger will encourage me to address it and get it resolved", reversal: false, type: ["Incidental"] },
    { question: "I’m likely to get angry when someone else is being hurt or manipulated in a situation", reversal: false, type: ["Empathic"] },
    { question: "I tend to get angry when I feel that someone else should be angry about how they are being treated", reversal: false, type: ["Empathic"] },
    { question: "I get angry when I think that others are being mistreated", reversal: false, type: ["Empathic"] },
    { question: "When I am angry, I do not get into fights or cause property damage", reversal: true, type: [] },
    { question: "When I am angry, I remain calm no matter who is around me or where I am", reversal: true, type: [] },
    { question: "I tend to forgive those who I feel wronged me", reversal: true, type: [] },
    { question: "When I am angry, I still follow through on tasks regardless of my feelings", reversal: true, type: [] }
];