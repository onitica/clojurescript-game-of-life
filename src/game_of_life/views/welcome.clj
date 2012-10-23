(ns game_of_life.views.welcome
  (:require [game_of_life.views.common :as common])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
  (common/game-layout
    [:h1 "Game of life will be hosted here!"]
	[:ul (for [x (range 1 11)]
	       [:li x])]))