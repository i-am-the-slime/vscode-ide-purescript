import * as vscode from 'vscode';
import { TextDocument, Position, Range } from 'vscode';

exports.openTextDocument =  (fileName: string) => (cb: ((doc: vscode.TextDocument) => () => {})) => () => 
    vscode.workspace.openTextDocument(fileName).then(doc => cb(doc)());

exports.getPath = (doc : TextDocument) => () => doc.fileName;

exports.getText = (doc : TextDocument) => () => doc.getText();

exports.getTextInRange = (doc : TextDocument) => (range : Range) => () => doc.getText(range);

exports.lineAtPosition = (doc : TextDocument) => (pos : Position) => () => doc.lineAt(pos).text;