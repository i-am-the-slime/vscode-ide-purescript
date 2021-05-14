import { window, TextEditor, Position, Range } from 'vscode';

exports.getActiveTextEditorImpl = <T>(nothing: T) => (just: (x: TextEditor) => T) => () =>
    window.activeTextEditor !== undefined ? just(window.activeTextEditor) : nothing;

exports.getCursorBufferPosition = (ed : TextEditor) => () : Position => 
    ed.selection.active;

exports.getSelectionRange = (ed : TextEditor) => () : Range => 
    ed.selection;

exports.setStatusBarMessage = (message : string) => () => window.setStatusBarMessage(message);