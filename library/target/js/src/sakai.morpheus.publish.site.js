function publishSite(b){var a="/direct/site/"+b+"/edit";var c=$PBJQ.ajax({type:"POST",data:"published=true",url:a,success:function(){location.reload()}}).responseText};