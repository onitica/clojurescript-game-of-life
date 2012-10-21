(ns game_of_life.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]))

(defpartial game-layout [& content]
  (html5
    [:head
      [:title "Interactive Game of Life"]]
    [:body
      [:div#wrapper
        content]]
		(include-js "/js/cljs.js")))