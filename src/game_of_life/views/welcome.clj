(ns game_of_life.views.welcome
  (:require [game_of_life.views.common :as common])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
  (common/game-layout
    [:h1 "Conway's Game of Life"]
	[:canvas {:id "surface" :name "surface" :height 400 :width 400}]
	[:form {:id "options-form" :name "options-form" :enctype="multipart/form-data"}
	       [:input {:type "button" :class "button" :id "pause-btn" :value "Pause/Resume"}]
	 	   [:input {:type "button" :class "button" :id "clear-btn" :value "Clear"}]
		   [:input {:type "button" :class "button" :id "heatmap-btn" :value "Toggle Heatmap"}]
	]
	[:div {:id "itr-div" :height 100 :width 100}]
  )
)