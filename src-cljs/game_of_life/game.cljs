(ns game_of_life.game)

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

(def gameState (atom ["      " 
        " ##   "
        " ##   "
        "   ## "
        "   ## "
        "      "]))

(js/setInterval #(js/alert (do (swap! gameState lifeStep) @gameState)) 500)