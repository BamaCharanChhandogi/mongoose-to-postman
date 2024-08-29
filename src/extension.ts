import * as vscode from "vscode";
import { convertSchemaToRawData } from "./schemaConverter";

export function activate(context: vscode.ExtensionContext) {
  console.log("Mongoose to Postman extension is now active!");

  let disposable = vscode.commands.registerCommand(
    "mongoose-to-postman.convertToPostmanRaw",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        const selectedText = document.getText(selection);

        if (selectedText) {
          try {
            const rawData = await convertSchemaToRawData(selectedText);

            // Show the converted data in a new editor
            const newDocument = await vscode.workspace.openTextDocument({
              content: JSON.stringify(rawData, null, 2),
              language: "json",
            });
            vscode.window.showTextDocument(newDocument);

            vscode.window.showInformationMessage(
              "Schema converted to Postman raw data successfully!"
            );
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(
              "Error converting schema: " + errorMessage
            );
          }
        } else {
          vscode.window.showWarningMessage(
            "Please select a Mongoose schema to convert."
          );
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
