(ns game_of_life.game)

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
(defn set-onclick! [dom func]
  (set! (. dom -onclick) func))

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

(defn clear-board [board]
	(into []
		(for [x board] 
		  (apply str (for [y x] \space)
			)
		)
	)
)

(defn set-board-piece [board x y]
	(let [row (nth board x)
		  current (get-in board [x y])
		  toput (if (= current \space) \# \space)]
		(assoc-in board [x] (apply str (assoc (into [] row) y toput)))
	)
)

;UI and timer functions
(def sizepx 10)
(def iteration (atom 0))
(def paused (atom false))

;canvas functions
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

;Main draw function
(defn draw-game []
(do 
(let [game-items @game-state]
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
))
)

;update iteration counter
(defn update-itr []
    (do
	(let [itr-div (by-id "itr-div")]
		(swap! iteration inc)
		(set-html! itr-div (str "Iteration: " @iteration))
	)
	)
)

;main loop
(js/setInterval #(when (false? @paused)
    (swap! game-state life-step)  
	(draw-game)
	(update-itr))
333)

;onclick listeners
(set-onclick! (by-id "pause-btn") #(swap! paused not))

(set-onclick! (by-id "clear-btn") #(do (swap! game-state clear-board)
									   (swap! iteration (fn [itr] -1))
									   (draw-game)
									   (update-itr)))

;canvas click listener									
(.addEventListener (by-id "surface") "click" 
		(fn [e] (let [x (.-pageX e) 
					  y (.-pageY e) 
					  canvas-surface (by-id "surface")
					  offsetTop (.-offsetTop canvas-surface)
					  offsetLeft (.-offsetLeft canvas-surface)
					  xval (int (/ (- x offsetLeft) 10))
					  yval (int (/ (- y offsetTop) 10))]
					(do 
					(swap! game-state set-board-piece xval yval)
					(draw-game)
					)
				)
		) 
		false)




