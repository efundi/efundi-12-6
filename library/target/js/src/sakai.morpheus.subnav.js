var closeAllDropdownMenus=function(){$PBJQ(".Mrphs-sitesNav__menuitem").removeClass("dropdown-is-visible");$PBJQ(".Mrphs-sitesNav__menuitem").find(".is-visible").removeClass("is-visible");$PBJQ(".Mrphs-sitesNav__menuitem").find(".is-clicked").removeClass("is-clicked");$PBJQ(".sitenav-dropdown-overlay").remove()};var buildDropdownMenu=function(b,a,g){var i='<ul class="Mrphs-sitesNav__submenu" role="menu">';var e=parseInt($PBJQ("#linkNav").attr("data-max-tools-int"));var d=$PBJQ("#linkNav").attr("data-max-tools-anchor");var c='<li class="Mrphs-sitesNav__submenuitem Mrphs-sitesNav__submenuitem__gotosite"><a tabindex="-1" role="menuitem" href="'+portal.portalPath+"/site/"+a+'" title="'+d+'"><span class="toolMenuIcon icon-sakai--see-all-tools"></span>'+d+"</a></li>";var f="/direct/site/"+a+"/pages.json";var h=window.location.pathname.split("/").pop();$PBJQ.ajax({url:f,dataType:"json",success:function(j){$PBJQ.each(j,function(n,o){if(!o.tools||o.tools.length<=0){return}var m="";if(h==o.tools[0].id){m=" is-current"}if(n<=e){var l;if(o.toolpopup){var k=' role="menuitem" href="{{tool_url}}?sakai.popup=yes" title="{{item_title}}" onclick="window.open(\'{{item_toolpopupurl}}\');"';l='<li class="Mrphs-sitesNav__submenuitem" ><a tabindex="-1" class="Mrphs-sitesNav__submenuitem-link"'+k+'>  <span class="Mrphs-sitesNav__submenuitem-icon"><span class="toolMenuIcon icon-sakai--{{icon}}"></span></span>  <span class="Mrphs-sitesNav__submenuitem-title">{{item_title}}</span></a></li>'}else{var k=' role="menuitem" href="{{tool_url}}" title="{{item_title}}"';l='<li class="Mrphs-sitesNav__submenuitem{{is_current}}"><a tabindex="-1" class="Mrphs-sitesNav__submenuitem-link"'+k+'>  <span class="Mrphs-sitesNav__submenuitem-icon"><span class="toolMenuIcon icon-sakai--{{icon}}"></span></span>  <span class="Mrphs-sitesNav__submenuitem-title">{{item_title}}</span></a></li>'}i+=(l.replace(/{{tool_url}}/g,o.tools[0].url).replace(/{{item_title}}/g,o.title).replace(/{{item_toolpopupurl}}/g,o.toolpopupurl).replace(/{{icon}}/g,o.tools[0].toolId.replace(/\./gi,"-")).replace(/{{is_current}}/g,m))}});if((j.length-1)>e){i+=c}i+="</ul>";i=$PBJQ(i);b.append(i);addArrowNavAndDisableTabNav(i);g(i)},error:function(l,j,k){}})};var setupSiteNav=function(){$PBJQ("ul.Mrphs-sitesNav__menu").each(function(){$PBJQ(this).keydown(function(a){if(a.keyCode==27){closeAllDropdownMenus()}})});$PBJQ(document).on("keydown",".Mrphs-sitesNav__menu > li.Mrphs-sitesNav__menuitem > a",function(a){if(a.keyCode==40){a.preventDefault();var b=$PBJQ(this).parent().find(".Mrphs-sitesNav__dropdown");if(b.data("clicked")){}else{b.data("clicked",true);b.trigger("click")}}else{if(a.keyCode==27){a.preventDefault();closeAllDropdownMenus()}}});$PBJQ("ul.Mrphs-sitesNav__menu li .Mrphs-sitesNav__dropdown").click(function(d){d.preventDefault();var g=$PBJQ(d.target);var a=g.parent(".Mrphs-sitesNav__menuitem");var f=a.hasClass("dropdown-is-visible");closeAllDropdownMenus();if(f){return}var c=$PBJQ(this);var b=function(h){c.addClass("is-clicked");a.addClass("dropdown-is-visible");h.addClass("is-visible");a.find("li a").first().focus();var e=$PBJQ('<div class="sitenav-dropdown-overlay" />');e.on("click",function(i){closeAllDropdownMenus()});$PBJQ("body").prepend(e);c.removeData("clicked")};if(!a.find("ul").length){buildDropdownMenu(a,g.attr("data-site-id"),b)}else{b(a.find("ul"))}}).hover(function(){$PBJQ(this).toggleClass("Mrphs-sitesNav__dropdown--hover")})};function addArrowNavAndDisableTabNav(a){a.find("li a").attr("tabindex","-1").keydown(function(f){var d=$PBJQ(f.target);if(f.keyCode==40){f.preventDefault();var b=d.closest("li").next();if(b.length===0||b.find("a").length==0){b=a.find("li").first()}a.find("li a").attr("tabindex","-1");b.find("a").focus().attr("tabindex","0")}else{if(f.keyCode==38){f.preventDefault();var c=d.closest("li").prev();if(c.length===0){c=a.find("a").closest("ul")}a.find("li a").attr("tabindex","-1");c.find("a").focus().attr("tabindex","0")}else{if(f.keyCode==9){closeAllDropdownMenus()}}}})};