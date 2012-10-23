goog.provide('example.util');
goog.require('cljs.core');
example.util.length = (function length(nodes){
return nodes.length;
});
example.util.item = (function item(nodes,n){
return nodes.item(n);
});
example.util.as_seq = (function as_seq(nodes){
var iter__2470__auto__ = (function iter__2847(s__2848){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2848__$1 = s__2848;
while(true){
if(cljs.core.seq.call(null,s__2848__$1))
{var i = cljs.core.first.call(null,s__2848__$1);
return cljs.core.cons.call(null,example.util.item.call(null,nodes,i),iter__2847.call(null,cljs.core.rest.call(null,s__2848__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2470__auto__.call(null,cljs.core.range.call(null,example.util.length.call(null,nodes)));
});
example.util.by_id = (function by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
example.util.by_tag = (function by_tag(tag){
return example.util.as_seq.call(null,document.getElementsByTagName(cljs.core.name.call(null,tag)));
});
example.util.html = (function html(dom){
return dom.innerHTML;
});
example.util.set_html_BANG_ = (function set_html_BANG_(dom,content){
return dom.innerHTML = content;
});
