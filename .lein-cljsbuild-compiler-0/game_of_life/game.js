goog.provide('game_of_life.game');
goog.require('cljs.core');
game_of_life.game.computeCharLoc = (function computeCharLoc(p__2822){
var vec__2824 = p__2822;
var t = cljs.core.nth.call(null,vec__2824,0,null);
var num = cljs.core.nth.call(null,vec__2824,1,null);
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
return game_of_life.game.computeCharLoc.call(null,cljs.core.PersistentVector.fromArray([cljs.core.get_in.call(null,board,cljs.core.PersistentVector.fromArray([x,y], true)),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__2821_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.get_in.call(null,board,p1__2821_SHARP_)))
{return 1;
} else
{return 0;
}
}),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(x - 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x - 1),y], true),cljs.core.PersistentVector.fromArray([(x - 1),(y + 1)], true),cljs.core.PersistentVector.fromArray([x,(y - 1)], true),cljs.core.PersistentVector.fromArray([x,(y + 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),(y - 1)], true),cljs.core.PersistentVector.fromArray([(x + 1),y], true),cljs.core.PersistentVector.fromArray([(x + 1),(y + 1)], true)], true)))], true));
});
game_of_life.game.lifeStep = (function lifeStep(board){
var size = cljs.core.count.call(null,board);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__2470__auto__ = (function iter__2831(s__2832){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2832__$1 = s__2832;
while(true){
if(cljs.core.seq.call(null,s__2832__$1))
{var x = cljs.core.first.call(null,s__2832__$1);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__2470__auto__ = ((function (x){
return (function iter__2835(s__2836){
return (new cljs.core.LazySeq(null,false,((function (x){
return (function (){
var s__2836__$1 = s__2836;
while(true){
if(cljs.core.seq.call(null,s__2836__$1))
{var y = cljs.core.first.call(null,s__2836__$1);
return cljs.core.cons.call(null,game_of_life.game.getLocSum.call(null,x,y,board),iter__2835.call(null,cljs.core.rest.call(null,s__2836__$1)));
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
})()),iter__2831.call(null,cljs.core.rest.call(null,s__2832__$1)));
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
game_of_life.game.gameState = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray(["      "," ##   "," ##   ","   ## ","   ## ","      "], true));
setInterval((function (){
return alert((function (){cljs.core.swap_BANG_.call(null,game_of_life.game.gameState,game_of_life.game.lifeStep);
return cljs.core.deref.call(null,game_of_life.game.gameState);
})());
}),500);
