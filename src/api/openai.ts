// const OPENAI_API_KEY = import.meta.env.VITE_OPEN_AI_KEY;
// const MODEL_ID = 'text-davinci-003';

// export default async function openaiQuery(prompt: string): Promise<string> {
//   const response = await fetch(
//     // `https://api.openai.com/v1/engines/davinci-codex/completions`,
//     `https://api.openai.com/v1/engines/${MODEL_ID}/completions`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${OPENAI_API_KEY}`
//       },
//       body: JSON.stringify({
//         prompt: prompt,
//         max_tokens: 60,
//         n: 1,
//         stop: '\n'
//       })
//     }
//   );
//   console.log(OPENAI_API_KEY)
//   const data = await response.json();
//   const text = data.choices[0].text.trim();
//   console.log('FULL DATA', data)
//   return text;
// }

import { Configuration, OpenAIApi } from "openai";
import type { Place } from "../types";

const openaiKey = import.meta.env.VITE_OPEN_AI_KEY

const configuration = new Configuration({
    apiKey: openaiKey,
});

const openai = new OpenAIApi(configuration);

export default async function openaiQuery(interest: string) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: buildQuery(interest),
        temperature: 0.7,
        max_tokens: 1018,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    let places:Place[] = response['data']['choices'][0].text.split('*').map(place => {
        const p = place.split('=')
        return {title: p[0], desc: p[1]}
    })

    console.log('RESPONSE', places)

    return places
}

const buildQuery = (interest: string) => {
    return `
        I'm going to ask you about places I should travel to based on my travel interest. 
        Follow these intructions about how should deliver your ansers; the instructions will 
        follow the word instruction and a colon and my travel interest will folow the word 
        interest with a colon.
        Instruction:
        - Give me 5 different places
        - only give a list of places, towns, cities, and areas.
        - format your text like this: equal sign follow by the 
        name of the place, an equal sign follow by a short description 
        of the place, an equal sign follow by a long description about 
        5 sentences of why you think this place is good for me based 
        on my interest, then end with an asterisk sign
        - each place should have its own asterisk bullet point
        - If whatever I give you in the interest part does not 
        result in you finding me a place, just return me a text 
        that says "error". Make sure to text back "error" if 
        you cannot list me a place
        Interest:
        ${interest}
    `
  }