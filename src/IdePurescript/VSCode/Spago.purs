module IdePurescript.VSCode.Spago where

import Prelude

import Data.Foldable (for_)
import Data.Nullable as Nullable
import Effect (Effect)
import Foreign (unsafeFromForeign, unsafeToForeign)
import IdePurescript.VSCode.Types (launchAffAndRaise)
import LanguageServer.IdePurescript.Commands (addSpagoDependencyCmd, buildCmd, cmdName, listPackageSetPackagesCmd)
import VSCode.Input (showQuickPick)
import VSCode.LanguageClient (LanguageClient, sendCommand)

installSpagoDependency :: LanguageClient -> Effect Unit
installSpagoDependency client = launchAffAndRaise do
    packagesForeign <- sendCommand client (cmdName listPackageSetPackagesCmd) (Nullable.null)
    let packages = unsafeFromForeign packagesForeign 
    maybePackage <- showQuickPick packages
    for_ maybePackage \package -> do 
      success <- sendCommand client (cmdName addSpagoDependencyCmd) (Nullable.notNull [unsafeToForeign package ])
      if (unsafeFromForeign success) 
        then void (sendCommand client (cmdName buildCmd) (Nullable.null)) 
        else mempty
    pure unit
