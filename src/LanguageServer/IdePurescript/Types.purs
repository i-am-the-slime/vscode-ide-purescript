module LanguageServer.IdePurescript.Types where

import Prelude
import Control.Monad.Aff.AVar (AVAR)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE)
import Control.Monad.Eff.Exception (EXCEPTION)
import Control.Monad.Eff.Random (RANDOM)
import Control.Monad.Eff.Ref (REF)
import Data.Maybe (Maybe)
import Data.Newtype (class Newtype)
import IdePurescript.Modules (State)
import LanguageServer.Types (CONN, Connection)
import Node.Buffer (BUFFER)
import Node.ChildProcess (CHILD_PROCESS)
import Node.FS (FS)
import Node.Process (PROCESS)
import PscIde (NET)

type MainEff eff =
    ( process :: PROCESS
    , conn :: CONN
    , ref :: REF
    , avar :: AVAR
    , buffer :: BUFFER
    , console :: CONSOLE
    , cp :: CHILD_PROCESS
    , exception :: EXCEPTION
    , fs :: FS
    , net :: NET
    , random :: RANDOM | eff)

newtype ServerState eff = ServerState
  { port :: Maybe Int
  , deactivate :: Eff eff Unit
  , root :: Maybe String
  , conn :: Maybe Connection
  , modules :: State
  }

derive instance newtypeServerState :: Newtype (ServerState eff) _
