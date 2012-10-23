goog.provide('game_of_life.game');
goog.require('cljs.core');
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
game_of_life.game.computeCharLoc = (function computeCharLoc(p__2826){
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
game_of_life.game.getLocSum = (function getLocSum(x,y,board){
return game_of_life.game.computeCharLoc.call(null,cljs.core.PersistentVector.fromArray([cljs.core.get_in.call(null,board,cljs.core.PersistentVector.fromArray([x,y], true)),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__2825_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.get_in.call(null,board,p1__2825_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(x - 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x - 1),y], true),cljs.core.PersistentVector.fromArray([(x - 1),(y + 1)], true),cljs.core.PersistentVector.fromArray([x,(y - 1)], true),cljs.core.PersistentVector.fromArray([x,(y + 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),y], true),cljs.core.PersistentVector.fromArray([(x + 1),(y + 1)], true)], true)))], true));
});
game_of_life.game.lifeStep = (function lifeStep(board){
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
return cljs.core.cons.call(null,game_of_life.game.getLocSum.call(null,x,y,board),iter__2839.call(null,cljs.core.rest.call(null,s__2840__$1)));
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
game_of_life.game.size = 30;
game_of_life.game.gameState = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__2470__auto__ = (function iter__2841(s__2842){
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
setInterval((function (){
cljs.core.swap_BANG_.call(null,game_of_life.game.gameState,game_of_life.game.lifeStep);
var listitems = game_of_life.game.by_tag.call(null,"\uFDD0'li");
var gameItems = cljs.core.deref.call(null,game_of_life.game.gameState);
var G__2847 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,listitems)));
while(true){
if(G__2847)
{var x = cljs.core.first.call(null,G__2847);
var li = cljs.core.nth.call(null,listitems,x);
var gi = cljs.core.nth.call(null,gameItems,x);
game_of_life.game.set_html_BANG_.call(null,li,gi);
{
var G__2848 = cljs.core.next.call(null,G__2847);
G__2847 = G__2848;
continue;
}
} else
{}
break;
}
return console.log([cljs.core.str(cljs.core.range.call(null,cljs.core.count.call(null,listitems)))].join(''));
}),500);
