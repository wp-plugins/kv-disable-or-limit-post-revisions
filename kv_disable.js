// KV Js  file

	jQuery(document).ready(function(){ 		
			isize = jQuery('#kv_dis_able_revision option:selected').val();
			if(isize == 'no') { 
				jQuery('.kv_limit_revision').attr('disabled','disabled');
			} else {
				jQuery('.kv_limit_revision').removeAttr('disabled');
			}
		
	
	});