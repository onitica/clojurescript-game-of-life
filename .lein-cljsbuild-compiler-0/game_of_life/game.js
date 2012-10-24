goog.provide('game_of_life.game');
goog.require('cljs.core');
goog.require('goog.dom');
game_of_life.game.length = (function length(nodes){
return nodes.length;
});
game_of_life.game.item = (function item(nodes,n){
return nodes.item(n);
});
game_of_life.game.as_seq = (function as_seq(nodes){
var iter__2470__auto__ = (function iter__2823(s__2824){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2824__$1 = s__2824;
while(true){
if(cljs.core.seq.call(null,s__2824__$1))
{var i = cljs.core.first.call(null,s__2824__$1);
return cljs.core.cons.call(null,game_of_life.game.item.call(null,nodes,i),iter__2823.call(null,cljs.core.rest.call(null,s__2824__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2470__auto__.call(null,cljs.core.range.call(null,game_of_life.game.length.call(null,nodes)));
});
game_of_life.game.by_id = (function by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
game_of_life.game.by_tag = (function by_tag(tag){
return game_of_life.game.as_seq.call(null,document.getElementsByTagName(cljs.core.name.call(null,tag)));
});
game_of_life.game.html = (function html(dom){
return dom.innerHTML;
});
game_of_life.game.set_html_BANG_ = (function set_html_BANG_(dom,content){
return dom.innerHTML = content;
});
game_of_life.game.compute_char_loc = (function compute_char_loc(p__2826){
var vec__2828 = p__2826;
var t = cljs.core.nth.call(null,vec__2828,0,null);
var num = cljs.core.nth.call(null,vec__2828,1,null);
if((function (){var and__3822__auto__ = cljs.core._EQ_.call(null,t,"#");
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,num,2);
} else
{return and__3822__auto__;
}
})())
{return "#";
} else
{if(cljs.core._EQ_.call(null,num,3))
{return "#";
} else
{if("\uFDD0'else")
{return " ";
} else
{return null;
}
}
}
});
game_of_life.game.get_loc_sum = (function get_loc_sum(x,y,board){
return game_of_life.game.compute_char_loc.call(null,cljs.core.PersistentVector.fromArray([cljs.core.get_in.call(null,board,cljs.core.PersistentVector.fromArray([x,y], true)),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__2825_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.get_in.call(null,board,p1__2825_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(x - 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x - 1),y], true),cljs.core.PersistentVector.fromArray([(x - 1),(y + 1)], true),cljs.core.PersistentVector.fromArray([x,(y - 1)], true),cljs.core.PersistentVector.fromArray([x,(y + 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),y], true),cljs.core.PersistentVector.fromArray([(x + 1),(y + 1)], true)], true)))], true));
});
game_of_life.game.life_step = (function life_step(board){
var size = cljs.core.count.call(null,board);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__2470__auto__ = (function iter__2835(s__2836){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2836__$1 = s__2836;
while(true){
if(cljs.core.seq.call(null,s__2836__$1))
{var x = cljs.core.first.call(null,s__2836__$1);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2470__auto__ = ((function (x){
return (function iter__2839(s__2840){
return (new cljs.core.LazySeq(null,false,((function (x){
return (function (){
var s__2840__$1 = s__2840;
while(true){
if(cljs.core.seq.call(null,s__2840__$1))
{var y = cljs.core.first.call(null,s__2840__$1);
return cljs.core.cons.call(null,game_of_life.game.get_loc_sum.call(null,x,y,board),iter__2839.call(null,cljs.core.rest.call(null,s__2840__$1)));
} else
{return null;
}
break;
}
});})(x))
,null));
});})(x))
;
return iter__2470__auto__.call(null,cljs.core.range.call(null,size));
})()),iter__2835.call(null,cljs.core.rest.call(null,s__2836__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2470__auto__.call(null,cljs.core.range.call(null,size));
})());
});
game_of_life.game.size = 50;
game_of_life.game.game_state = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__2470__auto__ = (function iter__2841(s__2842){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2842__$1 = s__2842;
while(true){
if(cljs.core.seq.call(null,s__2842__$1))
{var x = cljs.core.first.call(null,s__2842__$1);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2470__auto__ = ((function (x){
return (function iter__2845(s__2846){
return (new cljs.core.LazySeq(null,false,((function (x){
return (function (){
var s__2846__$1 = s__2846;
while(true){
if(cljs.core.seq.call(null,s__2846__$1))
{var y = cljs.core.first.call(null,s__2846__$1);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,cljs.core.rand_int.call(null,2)))?"#":" "),iter__2845.call(null,cljs.core.rest.call(null,s__2846__$1)));
} else
{return null;
}
break;
}
});})(x))
,null));
});})(x))
;
return iter__2470__auto__.call(null,cljs.core.range.call(null,game_of_life.game.size));
})()),iter__2841.call(null,cljs.core.rest.call(null,s__2842__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2470__auto__.call(null,cljs.core.range.call(null,game_of_life.game.size));
})()));
game_of_life.game.sizepx = 10;
game_of_life.game.iteration = cljs.core.atom.call(null,0);
game_of_life.game.canvas_surface = (function (){var s = game_of_life.game.by_id.call(null,"surface");
return cljs.core.PersistentVector.fromArray([s.getContext("2d"),s.width,s.height], true);
})();
game_of_life.game.fill_rect = (function fill_rect(p__2847,p__2848,p__2849){
var vec__2853 = p__2847;
var surface = cljs.core.nth.call(null,vec__2853,0,null);
var vec__2854 = p__2848;
var x = cljs.core.nth.call(null,vec__2854,0,null);
var y = cljs.core.nth.call(null,vec__2854,1,null);
var width = cljs.core.nth.call(null,vec__2854,2,null);
var height = cljs.core.nth.call(null,vec__2854,3,null);
var vec__2855 = p__2849;
var r = cljs.core.nth.call(null,vec__2855,0,null);
var g = cljs.core.nth.call(null,vec__2855,1,null);
var b = cljs.core.nth.call(null,vec__2855,2,null);
surface.fillStyle = [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('');
return surface.fillRect(x,y,width,height);
});
game_of_life.game.clear_surface = (function clear_surface(p__2856){
var vec__2858 = p__2856;
var context = cljs.core.nth.call(null,vec__2858,0,null);
var width = cljs.core.nth.call(null,vec__2858,1,null);
var height = cljs.core.nth.call(null,vec__2858,2,null);
return game_of_life.game.fill_rect.call(null,cljs.core.PersistentVector.fromArray([context,width,height], true),cljs.core.PersistentVector.fromArray([0,0,width,height], true),cljs.core.PersistentVector.fromArray([255,2,255], true));
});
setInterval((function (){
cljs.core.swap_BANG_.call(null,game_of_life.game.game_state,game_of_life.game.life_step);
var listitems = game_of_life.game.by_tag.call(null,"\uFDD0'li");
var game_items = cljs.core.deref.call(null,game_of_life.game.game_state);
game_of_life.game.clear_surface.call(null,game_of_life.game.canvas_surface);
var game_items__$1 = game_items;
var idx = 0;
while(true){
var temp__3974__auto__ = cljs.core.first.call(null,game_items__$1);
if(cljs.core.truth_(temp__3974__auto__))
{var row = temp__3974__auto__;
var G__2859 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row)));
while(true){
if(G__2859)
{var y = cljs.core.first.call(null,G__2859);
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,row,y),"#"))
{game_of_life.game.fill_rect.call(null,game_of_life.game.canvas_surface,cljs.core.PersistentVector.fromArray([(idx * game_of_life.game.sizepx),(y * game_of_life.game.sizepx),game_of_life.game.sizepx,game_of_life.game.sizepx], true),cljs.core.PersistentVector.fromArray([3,255,3], true));
} else
{}
{
var G__2860 = cljs.core.next.call(null,G__2859);
G__2859 = G__2860;
continue;
}
} else
{}
break;
}
{
var G__2861 = cljs.core.rest.call(null,game_items__$1);
var G__2862 = (idx + 1);
game_items__$1 = G__2861;
idx = G__2862;
continue;
}
} else
{}
break;
}
cljs.core.swap_BANG_.call(null,game_of_life.game.iteration,cljs.core.inc);
return console.log([cljs.core.str("Iteration: "),cljs.core.str(cljs.core.deref.call(null,game_of_life.game.iteration))].join(''));
}),333);
