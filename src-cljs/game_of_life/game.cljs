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

;Other functions
(defn computeCharLoc [[t num]]
	(cond (and (= t \#) (= num 2)) \#
		  (= num 3) \#
		  :else \space
	)
)

(defn getLocSum [x y board]
		(computeCharLoc [(get-in board [x y])
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

(defn lifeStep [board]
	(let [size (count board)]
		(into [] (for [x (range size)] (apply str (for [y (range size)] (getLocSum x y board)))))
	)
)

(def size 30)

(def gameState (atom (into [] (for [x (range size)] 
					(apply str (for [y (range size)]
						 	(if (= 0 (rand-int 2)) \# \space)
						 )
					)
				)))
)

(js/setInterval #(do (swap! gameState lifeStep) 
	(let [listitems (by-tag :li) gameItems @gameState]
		(doseq [x (range (count listitems))]
			(let [li (nth listitems x) gi (nth gameItems x)]
				(set-html! li gi)
			)
		)
		(.log js/console (str (range (count listitems))))
	)) 500)