(ns game_of_life.game
	[:require [goog.dom :as dom]])

;Utility functions
(defn length [nodes] (. nodes -length))
(defn item [nodes n] (.item nodes n))
(defn as-seq [nodes]
  (for [i (range (length nodes))] (item nodes i)))
(defn by-id [id]
  (.getElementById js/document (name id)))
(defn by-tag [tag]
  (as-seq
    (.getElementsByTagName js/document (name tag))))
(defn html [dom] (. dom -innerHTML))
(defn set-html! [dom content]
  (set! (. dom -innerHTML) content))

;Game functions
(defn compute-char-loc [[t num]]
	(cond (and (= t \#) (= num 2)) \#
		  (= num 3) \#
		  :else \space
	)
)

(defn get-loc-sum [x y board]
		(compute-char-loc [(get-in board [x y])
		(apply + (map #(if (= \# (get-in board %)) 1 0)
		   [
			[(- x 1) (- y 1)]
			[(- x 1) y]
			[(- x 1) (+ y 1)]
			[x (- y 1)]
			[x (+ y 1)]
			[(+ x 1) (- y 1)]
			[(+ x 1) y]
			[(+ x 1) (+ y 1)]
		   ])
		)])
)

(defn life-step [board]
	(let [size (count board)]
		(into [] (for [x (range size)] (apply str (for [y (range size)] (get-loc-sum x y board)))))
	)
)

(def size 50)

(def game-state (atom (into [] (for [x (range size)] 
					(apply str (for [y (range size)]
						 	(if (= 0 (rand-int 2)) \# \space)
						 )
					)
				)))
)

;UI and timer functions
(def sizepx 10)
(def iteration (atom 0))

(def canvas-surface
  (let [s (by-id "surface")]
    [(.getContext s "2d")
     (. s -width)
     (. s -height)]))

(defn fill-rect [[surface] [x y width height] [r g b]]
  (set! (. surface -fillStyle) (str "rgb(" r "," g "," b ")"))
  (.fillRect surface x y width height))

(defn clear-surface [[context width height]]
	(fill-rect [context width height] [0 0 width height] [255 2 255])
)

(js/setInterval #(do (swap! game-state life-step) 
	(let [listitems (by-tag :li) game-items @game-state]
		(clear-surface canvas-surface)
		(loop [game-items game-items idx 0]
			(when-let [row (first game-items)]
				(doseq [y (range (count row))]
					(when (= (nth row y) \#)
						(fill-rect canvas-surface [(* idx sizepx) (* y sizepx) sizepx sizepx] [3 255 3])
					)
				)
				(recur (rest game-items) (inc idx))
			)
		)
		(swap! iteration inc)
		(.log js/console (str "Iteration: " @iteration))
	)) 333)