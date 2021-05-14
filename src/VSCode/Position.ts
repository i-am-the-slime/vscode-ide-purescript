// module VSCode.Position

import { Position } from 'vscode';

exports.getLine = (p: Position) => p.line;
exports.getCharacter = (p: Position) => p.character;
exports.mkPosition = (x: number) => (y: number) => new Position(x, y);