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
            // Show processing message
            const processingMessage = await vscode.window.withProgress({
              location: vscode.ProgressLocation.Notification,
              title: "Converting schema to Postman raw data...",
              cancellable: false
            }, async (progress) => {
              const rawData = await convertSchemaToRawData(selectedText);

              // Show the converted data in a new editor
              const newDocument = await vscode.workspace.openTextDocument({
                content: JSON.stringify(rawData, null, 2),
                language: "json",
              });
              await vscode.window.showTextDocument(newDocument);

              return rawData;
            });

            // Show success message
            const successMessage = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
            successMessage.text = "Schema converted to Postman raw data successfully!";
            successMessage.show();

            // Hide success message after 4 seconds
            setTimeout(() => {
              successMessage.hide();
              successMessage.dispose();
            }, 4000);

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