import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

const siteKnowledge = `
Main company: Hi-Tech Automation & Engineering Ltd.

Company dropdown pages:
1. Hi-Tech Automation & Engineering - /companies/hi-tech-automation
2. Hi-Tech Corporation - /companies/hi-tech-corporation
3. Hi-Tech Valley - /companies/hi-tech-valley

Main website pages:
Home - /
About - /#about
Products - /#products
Services - /#services
Projects - /#projects
Owners - /#owners
Contact - /#contact
Blog - /blog

Products:
Lighting Arrester 16-36kV, Load Break Switch, Vacuum Load Break Switch,
Cast Resin Transformer, Oil Immersed Transformers, HT Switchgear VCB,
Electrical Panel, Switchgear Solution, Transformer.

Services:
Substation Design & Installation, HV/MV/LV Switchgear Solution,
Industrial Automation, Building Automation & Control,
Testing & Commissioning.

Property company:
Hi-Tech Valley provides flats, apartment sales, booking, floor plan,
gallery, location, amenities, and property contact support.
`;

function cleanJson(text = "") {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

export async function POST(req) {
  try {
    const { query } = await req.json();

    if (!query || query.trim().length < 2) {
      return Response.json({ results: [] });
    }

    const prompt = `
You are AI Global Search for Hi-Tech Automation & Engineering Ltd website.

User search: "${query}"

Website knowledge:
${siteKnowledge}

Return ONLY valid JSON array.
Maximum 6 items.

Format:
[
  {
    "name": "Result title",
    "type": "Company | Product | Service | Property | Blog | Page | AI Suggestion",
    "href": "valid website url",
    "description": "short helpful description"
  }
]
`;

    let text = "";

    if (process.env.AI_PROVIDER === "openai") {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const response = await openai.responses.create({
        model: "gpt-5.5",
        input: prompt,
      });

      text = response.output_text;
    } else {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      text = response.text;
    }

    const results = JSON.parse(cleanJson(text));

    return Response.json({ results });
  } catch (error) {
    return Response.json({
      results: [
        {
          name: "Contact Hi-Tech Team",
          type: "AI Suggestion",
          href: "/#contact",
          description: "AI search could not load right now. Contact our team directly.",
        },
      ],
    });
  }
}