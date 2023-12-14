import { Page } from '@playwright/test';
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');

export class AiBase {
  readonly page: Page;
  readonly genAI: any;

  constructor(page: Page) {
    this.page = page;
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  async getPrompted(prompt: string) {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(`Connected: ${text}`);
  }
  async getImageanalyzed(prompt: string) {
    // Converts local file information to a GoogleGenerativeAI.Part object.
    function fileToGenerativePart(path, mimeType) {
      return {
        inlineData: {
          data: Buffer.from(fs.readFileSync(path)).toString('base64'),
          mimeType,
        },
      };
    }
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

    const imageParts = [fileToGenerativePart(`${__dirname}/test.jpeg`, 'image/jpeg')];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
}
