function quickLinksNavEscHandler(a){if(a.keyCode===27){toggleQuickLinksNav(a)}}function toggleQuickLinksNav(b){b.preventDefault();if(!$PBJQ(".Mrphs-userNav__subnav").hasClass("is-hidden")){toggleUserNav(b)}$PBJQ(".Mrphs-quickLinksNav__subnav").toggleClass("is-hidden");if(!$PBJQ(".Mrphs-quickLinksNav__subnav").hasClass("is-hidden")){var a=$PBJQ('<div class="quicklinks-dropdown-overlay" />');a.on("click",function(c){toggleQuickLinksNav(c)});$PBJQ("body").prepend(a);$PBJQ("body").css("overflow-y","hidden");$PBJQ(document).on("keyup",quickLinksNavEscHandler);$PBJQ(".tab-box").css("max-height",window.innerHeight-$PBJQ("#selectQuickLink").offset().top-14)}else{$PBJQ(".quicklinks-dropdown-overlay").remove();$PBJQ("body").css("overflow-y","visible");$PBJQ(document).off("keyup",quickLinksNavEscHandler)}}$PBJQ("#quickLinks-close").on("click",toggleQuickLinksNav);$PBJQ(".js-toggle-quick-links-nav").on("click",toggleQuickLinksNav);