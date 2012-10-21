(defproject game_of_life "0.1.0-SNAPSHOT"
            :description "Implementation of conway's game of life"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-beta3"]]
		    :plugins [[lein-cljsbuild "0.2.9"]]
   			:dev-dependencies [[lein-cljsbuild "0.2.9"]] ; cljsbuild plugin
			:cljsbuild
			{:builds
			 [{:builds nil,
			   :source-path "src-cljs",
			   :compiler
			   {:pretty-print true,
			    :output-to "resources/public/js/cljs.js",
			    :optimizations :simple}}]}
            :main game_of_life.server)

