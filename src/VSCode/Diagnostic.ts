import { Diagnostic, Range, DiagnosticSeverity } from 'vscode';

exports.mkDiagnostic = (range: Range) => (message: string) => (severity: DiagnosticSeverity) =>
    new Diagnostic(range,message,severity);

exports.mkDiagnosticWithInfo = (range: Range) => (message: string) => (severity: DiagnosticSeverity) => (x : any) => {
    var diagnostic = new Diagnostic(range,message,severity);
    (<any>diagnostic).info = x;
    return diagnostic;
};