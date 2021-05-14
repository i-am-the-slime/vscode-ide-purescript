module Test.Main where

import Prelude

import Data.Maybe (Maybe(..))
import Effect (Effect)
import Effect.Aff (launchAff_)
import IdePurescript.Tokens (identifierAtPoint)
import Test.Spec (describe, it)
import Test.Spec.Assertions (shouldEqual)
import Test.Spec.Reporter (consoleReporter)
import Test.Spec.Runner (runSpec)

main :: Effect Unit
main = launchAff_ $ runSpec [consoleReporter] do
  describe "identifier at point" do
    it "identifies $" do
      let str = """$"""
      let result = identifierAtPoint str 0
      (result <#> _.word) `shouldEqual` Just "$"
    it "identifies a function" do
      let str = """  launchAff_ do """
      let result = identifierAtPoint str 5
      (result <#> _.word) `shouldEqual` Just "launchAff_"
    it """identifies <>""" do
      let str = """ 4 <> 3 """
      let result = identifierAtPoint str 3
      (result <#> _.word) `shouldEqual` Just """<>"""
      (result <#> _.range) `shouldEqual` Just { left: 3, right: 5 }
    it """identifies /\""" do
      let str = """ 4 /\ 3 """
      let result = identifierAtPoint str 3
      (result <#> _.word) `shouldEqual` Just """/\"""
      (result <#> _.range) `shouldEqual` Just { left: 3, right: 5 }