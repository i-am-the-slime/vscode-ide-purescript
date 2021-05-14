// module VSCode.Location

import { Position, Location, Uri } from 'vscode';

exports.mkLocation = (file : string) => (pos: Position) => new Location(Uri.file(file), pos); 
