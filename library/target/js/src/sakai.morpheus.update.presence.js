function updatePresence(){$PBJQ.ajax({url:sakaiPresenceFragment,cache:false,success:function(g){var f=g.indexOf("<ul");if(f<1){$PBJQ("#presenceCount").html(" ");$PBJQ("#presenceCount").removeClass("present").addClass("empty");location.reload();return}g=g.substr(f);var e=g;var b="<li";var a=0;for(var d=0;d<e.length;d++){if(b==e.substr(d,b.length)){a++}}if(a>1){$PBJQ("#presenceCount").html(a+"");$PBJQ("#presenceCount").removeClass("empty").addClass("present")}else{if(a==1){$PBJQ("#presenceCount").html(a+"");$PBJQ("#presenceCount").removeClass("present").addClass("empty")}else{$PBJQ("#presenceCount").html(" ");$PBJQ("#presenceCount").removeClass("present").addClass("empty")}}$PBJQ("#presenceIframe").html(g);var c=$PBJQ(".nav-selected .icon-sakai-chat").attr("href");$PBJQ("#presenceIframe .presenceList li.inChat span").wrap('<a href="'+c+'"></a>');sakaiLastPresenceTimeOut=setTimeout("updatePresence()",30000)},error:function(b,a){sakaiLastPresenceTimeOut=setTimeout("updatePresence()",60000)}})};