import { Ollama } from "@langchain/ollama";
import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from 'dotenv';

async function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const personName = args[0] || "Albert Einstein";

  // Load environment variables
  dotenv.config();
  // Set Ollama API URL (default is localhost:11434)
  const OLLAMA_API_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434';
  const DEFAULT_MODEL = process.env.OLLAMA_MODEL || 'qwen2.5-coder:14b';

const scheme = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Historische Berühmte Persönlichkeit",
  "type": "object",
  "required": ["name", "alter", "geburtsdatum", "geburtsort", "adjektive"],
  "properties": {
    "name": {
      "type": "string",
      "description": "Der vollständige Name der Person"
    },
    "alter": {
      "type": "integer",
      "description": "Das Alter der Person (zum Zeitpunkt des Todes)"
    },
    "geburtsdatum": {
      "type": "string",
      "format": "date",
      "description": "Geburtsdatum der Person"
    },
    "geburtsort": {
      "type": "string",
      "description": "Geburtsort der Person"
    },
    "sterbedatum": {
      "type": "string",
      "format": "date",
      "description": "Sterbedatum der Person (falls verstorben)",
      "nullable": true
    },
    "sterbeort": {
      "type": "string",
      "format": "date",
      "description": "Sterbeort der Person (falls verstroben)",
      "nullable": true
    },
    "stationen": {
      "type": "array",
      "description": "Besondere Stationen im Leben der Person",
      "items": {
        "type": "object",
        "required": ["start", "ende", "titel", "beschreibung"],
        "properties": {
          "start": {
            "type": "string",
            "format": "date",
            "description": "Startdatum der Station"
          },
          "ende": {
            "type": "string",
            "format": "date",
            "description": "Enddatum der Station"
          },
          "titel": {
            "type": "string",
            "description": "Name oder Titel der Station"
          },
          "beschreibung": {
            "type": "string",
            "description": "Zusammenfassung der Station"
          }
        }
      }
    },
    "adjektive": {
      "type": "array",
      "description": "Vier Adjektive, die die Person beschreiben",
      "minItems": 4,
      "maxItems": 4,
      "items": {
        "type": "string"
      }
    }
  }
}

  // Initialize the Ollama chat model
  const model = new Ollama({
    baseUrl: OLLAMA_API_URL,
    model: DEFAULT_MODEL,
    temperature: 0.25, // Lower temperature for more deterministic outputs
  });


  // Create a prompt template for generating a JSON response
  const promptTemplate = PromptTemplate.fromTemplate(`
    Du bist ein hilfreicher Assistent für Geschichte und hilfst dabei 
    historische Daten von berühmten Persönlichkeiten zusammen zu tragen.

    Die Person um die es geht ist: {person}

    Befülle mit hilfe des folgenden Schemas ein JSON Objekt.
    {scheme}

    Return the information in valid JSON format with fields from scheme.
    Only return valid JSON without explanations.
  `);


  // Combine the template and model
  const chain = promptTemplate.pipe(model);

  try {
    console.log(`Generiere Informationen über: ${personName}`);
    
    // Execute the chain with input data
    const result = await chain.invoke({
      scheme: scheme,
      person: personName,
    });

    // Output the JSON result
    console.log("JSON Response from Ollama:", result);
    
  } catch (error) {
    console.error("Error:", error);
    console.error("Make sure Ollama is running with the specified model installed");
  }
}

main().catch(console.error);