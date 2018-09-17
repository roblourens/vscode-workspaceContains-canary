import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('workspaceContains-canary was activated');
}

export function deactivate() {
}