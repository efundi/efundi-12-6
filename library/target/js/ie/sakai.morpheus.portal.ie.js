var $ul_topnav=$PBJQ("ul#topnav");var aria_label_val=$ul_topnav.attr("aria-label");$PBJQ("h1#sitetabs").attr("role","navigation").attr("aria-label",aria_label_val);$PBJQ("div#linkNav").removeAttr("role").removeAttr("aria-labelledby");$ul_topnav.removeAttr("aria-label");