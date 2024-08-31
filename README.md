## Mongoose to Postman Converter

### Introduction

The "Mongoose to Postman Converter" Visual Studio Code extension streamlines your API development workflow by effortlessly converting your Mongoose schemas into ready-to-use Postman sample data. This extension harnesses the power of Google's Generative AI to generate realistic and meaningful test data, saving you valuable time and ensuring the accuracy of your API testing.

### Features

- **One-Click Conversion:** Seamlessly transform Mongoose schemas into Postman-compatible JSON with a single command.
- **AI-Powered:** Leverages Google's Generative AI to create intelligent and context-aware sample data, ensuring realistic and meaningful test results.
- **Time-Saving:** Eliminates the need for manual sample data creation, significantly reducing your testing time.
- **Customizable:** Allows for easy customization of the generated data to meet your specific testing requirements.

### Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).
3. Search for "Mongoose to Postman Converter".
4. Click the "Install" button.

   
### How to Use Guide:

Go through the tutorial to see how to convert your Mongoose schemas into ready-to-use Postman sample data.


https://github.com/user-attachments/assets/98e4da95-b7de-4d84-9a71-27d594e4d7d7


### Usage

1. Open a file containing your Mongoose schema.
2. Select the schema code.
3. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
4. Type "Convert to Postman Raw" and select the command.
5. The converted JSON will open in a new editor tab.

**Configuration**

To use this extension, you need to provide your Google Generative AI API key:

1. Open VS Code Settings (File > Preferences > Settings).
2. Search for "Mongoose to Postman".
3. Enter your API key in the "API Key for Google Generative AI" field.

Alternatively, you can set the `GEMINI_API_KEY` environment variable.

### Examples

**Input (Mongoose Schema):**

```javascript
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 100 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
```

**Output (Postman-ready JSON):**

```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "age": 30,
  "isActive": true,
  "createdAt": "2023-08-15T10:30:00Z"
}
```

### Contributing

We welcome contributions! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on submitting pull requests, reporting issues, or requesting features.
