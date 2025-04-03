export const scheme = {
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