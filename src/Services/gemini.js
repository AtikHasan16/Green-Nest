const apiKeyFromLocal = localStorage.getItem("apiKey");
let API_KEY = JSON.parse(apiKeyFromLocal);
console.log(API_KEY);
// const api = import.meta.env.VITE_GEMINI_API_KEY;
// console.log(api);
const fileToGenerativePart = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(",")[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const identifyPlant = async (file) => {
  if (!API_KEY) {
    throw new Error("Gemini API Key is missing");
  }

  try {
    const imagePart = await fileToGenerativePart(file);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: 'Identify this plant. Provide the name, scientific name, description, and care instructions. Return the response in JSON format with the following structure: { "name": "Plant Name", "scientific_name": "Scientific Name", "description": "Brief description...", "care_instructions": "Care details..." } Do not include markdown formatting like ```json',
            },
            imagePart,
          ],
        },
      ],
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to identify plant");
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;

    // Parse JSON from text (in case model adds extra text, though we asked it not to)
    try {
      // Find the first { and last }
      const firstBrace = text.indexOf("{");
      const lastBrace = text.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1) {
        const jsonStr = text.substring(firstBrace, lastBrace + 1);
        return JSON.parse(jsonStr);
      }
      return { name: "Unknown", description: text }; // Fallback
    } catch (e) {
      console.warn("Failed to parse JSON response:", text, e);
      return { name: "Unknown", description: text };
    }
  } catch (error) {
    console.error("Error identifying plant:", error);
    throw error;
  }
};
