(ns game_of_life.views.welcome
  (:require [game_of_life.views.common :as common])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
  (common/game-layout
    [:h1 "Game of life will be hosted here!"]
	[:canvas {:id "surface" :name "surface" :height 500 :width 500}]
	[:form {:id "options-form" :name "options-form" :enctype="multipart/form-data"}
	       [:input {:type "button" :id "pause-btn" :value "Pause/Resume"}]
	 	   [:input {:type "button" :id "clear-btn" :value "Clear"}]
	]
	[:div {:id "itr-div" :height 100 :width 100}]
  )
)