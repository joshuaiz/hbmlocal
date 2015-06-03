/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function (el, pseudo) {
        this.el = el;
        this.getPropertyValue = function (prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );


// Insert file uploader into Upload form
jQuery(function(){
	jQuery('.file-uploader').insertAfter('#gform_fields_1');
});

// Fix spacing for Upload form elements when errors are shown
jQuery(function(){
	if (jQuery('#field_1_8.gfield_error').length > 0) {
		jQuery('#field_1_9').addClass('rightfix');
}
});

// Hide Upload form header when form confirmation is shown
jQuery(function(){
	if (jQuery('#gform_confirmation_wrapper_1').length > 0) {
		jQuery('section.file-uploader, .uploader .article-header, .uploader p.intro, #secondary, .upload-trigger').hide();
		}
});

// Show/Hide Uploader on home page
jQuery('.upload-trigger').click(function() {
  jQuery('.uploader').slideToggle(function() {
    jQuery('.upload-trigger').text(
      jQuery(this).is(':visible') ? "- Hide Uploader" : "+ Show Uploader"
    );
  });
});

// Show Uploader by default for Clients and Admins
jQuery(function(){
	if (jQuery('body').is(".client, .administrator")) {
	 jQuery('.uploader').show(function() {
	 	jQuery('.upload-trigger').text(
	 		jQuery(this).is(':visible') ? "- Hide Uploader" : "+ Show Uploader"
	 	);
	 })
	 
	 }
});

// Show HBP widget for non-hbp members
jQuery(function(){
	if (jQuery('.highbiasplus').length == 0) {
			jQuery('#text-2').show();
		}
});


// Show/Hide HBP features
jQuery('.features-trigger').click(function() {
  jQuery('.hbp-features').slideToggle(function() {
    jQuery('.features-trigger').text(
      jQuery(this).is(':visible') ? "- Hide Features" : "+ See All Features..."
    );
  });
});


// Swap out gravatar image for hi-res
jQuery(document).ready(function() {
var oldSrc = 'http://1.gravatar.com/avatar/5c53609dff286449fe601b9c4cf8aaf8?s=57&d=http%3A%2F%2Fhighbiasmastering.com%2Fwp-content%2Fthemes%2Fhighbias%2Flibrary%2Fimages%2Fhbmavatar.png%3Fs%3D57&r=G';
var newSrc = 'http://hbmstatic.com/images/JOSHUA_sq_114_orange.png';
jQuery('td.avatar img[src="' + oldSrc + '"]').attr('src', newSrc);
});

jQuery(function(){
	jQuery("<span class='mobile-upload clearfix'><a href='/upload/'>Upload</a></span>").insertAfter(".top-cart");
});

// Ads color to plan levels on Client page sidebar
jQuery(function(){
jQuery("span.hbpmetaplan:contains('Silver')").css("color","#999");
jQuery("span.hbpmetaplan:contains('Gold')").css("color","#B28F00");
jQuery("span.hbpmetaplan:contains('Platinum')").css("color","#8AB8E6");
jQuery("span.hbpmetaplan:contains('Diamond')").css("color","#FFF");
});

/*
jQuery(document).ready(function(){
	jQuery('#testimonials .slide');
	setInterval(function(){
		jQuery('#testimonials .slide').filter(':visible').fadeOut(1000,function(){
			if(jQuery(this).next('.slide').size()){
				jQuery(this).next().fadeIn(1000);
			}
			else{
				jQuery('#testimonials .slide').eq(0).fadeIn(1000);
			}
		});
	},8000);	
});	
*/
// A jQuery based placeholder polyfill
/*
jQuery(document).ready(function($){
  function add() {
    if($(this).val() === ''){
      $(this).val($(this).attr('placeholder')).addClass('placeholder');
    }
  }

  function remove() {
    if($(this).val() === $(this).attr('placeholder')){
      $(this).val('').removeClass('placeholder');
    }
  }

  // Create a dummy element for feature detection
  if (!('placeholder' in $('<input>')[0])) {

    // Select the elements that have a placeholder attribute
    $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

    // Remove the placeholder text before the form is submitted
    $('form').submit(function(){
      $(this).find('input[placeholder], textarea[placeholder]').each(remove);
    });
  }
});
*/



/* jQuery File Uploader with NM customizations */

// NM: upload form validator
function validate_upload_form() {
	var err = '';

	// require URL or file selection
	var url = jQuery('#input_1_9').val();
	if ((jQuery.trim(jQuery('#input_1_9').val()).length <= 0 ||  // check empty url
		jQuery.trim(jQuery('#input_1_9').val()) == 'http://') &&  // check url has only "http://"
		jQuery('#fileupload').parent().css('display') != 'none') {  // check that add buton is hidden
		alert('You must add a file for upload or provide a URL');
		return false;
	}

	// Contact Name
	if (jQuery.trim(jQuery('#input_1_1').val()).length <= 0)
		err += 'Contact Name, ';
		
	// Email
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  	if (!emailRegex.test(jQuery.trim(jQuery('#input_1_2').val())))
		err += 'Email, ';

	// Project Label
	if (jQuery.trim(jQuery('#input_1_3').val()).length <= 0)
		err += 'Project Label, ';

	// Project Artist
	if (jQuery.trim(jQuery('#input_1_4').val()).length <= 0)
		err += 'Project Artist, ';

	// Project Title
	if (jQuery.trim(jQuery('#input_1_5').val()).length <= 0)
		err += 'Project Title, ';

	// Catalog Number
	if (jQuery.trim(jQuery('#input_1_6').val()).length <= 0)
		err += 'Catalog Number, ';

	// No. of Tracks
	if (jQuery.trim(jQuery('#input_1_8').val()).length <= 0)
		err += 'Number of Tracks, ';
	
	// error?
	if (err) {
		// remove ", " from end of error string
		err = err.substring(0, err.length - 2);
		err = 'The following fields must have a valid entry: ' + err;
		alert(err);
		return false;
	}

/*
	// Terms & Conditions
	if (!jQuery('#choice_1_13_1').is(':checked')) {
		alert('Please read and agree to the Terms and Conditions');
		return false;
	}
*/

	return true;
}

// jQuery File Upload script
jQuery(function ($) {
    'use strict';
    // NM: upload start time for progress/speed calculation
    var progressStart = 0;
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : '/uploader/server/php/',
        uploadButton = $('<button/>')
            .addClass('btn upload-button')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: false,
        maxNumberOfFiles: 1,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|aif?f|wav|zip|mp3)$/i,
        maxFileSize: 4294967296, // 4GB (in bytes)
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    .append($('<span/>').text(file.name));
            if (!index) {
                node
                    .append('<br>')
                    .append(uploadButton.clone(true).data(data));
            }
            node.appendTo(data.context);
        });
        // NM: unbind the default form submit event from the button
        jQuery('#upload_btn').unbind('click');
        // NM: make upload start on click now instead
        jQuery("#upload_btn").click(function () {
        	if (validate_upload_form())
	           	data.submit();
        });
        // NM: remove add button now that we have a file selected
        $('#fileupload').parent().css('display', 'none');
        // NM: add hidden url to form
        var url = 'http://highbiasmastering.com/uploader/server/php/files/' + encodeURIComponent(data.files[0].name);
   		$('#input_1_11').val(url);
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                .prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                .append('<br>')
                .append(file.error);
        }
        if (index + 1 === data.files.length) {
            data.context.find('button')
                .text('Upload')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        var progressDecimal = data.loaded / data.total * 100;
        $('#progress .bar').css(
            'width',
            progress + '%'
        );
        // NM: add progress readout if not already there
        if ($('#progressIndContainer').length == 0) {
	        $('<p id="progressIndContainer">Progress: <span id="progressIndPercent">0%</span> - <span id="progressIndRemain">??</span> remaining</p>').insertAfter('#progress');
	    }
	    // NM: update progress percentage
	    $('#progressIndPercent').html(progress + '%');
	    // NM: store start time if not yet set
	    if (!progressStart)
	    	progressStart = new Date().getTime();
	    // NM: calculate remaining time
	    var elapsed = new Date().getTime() - progressStart;
	    var remaining = (100-progressDecimal) / (progressDecimal/elapsed);
	    remaining /= 1000;  // convert ms to sec
	    if (!isFinite(remaining))  // show ??
	    	remaining = '??'
	    else if (remaining < 60)  // show seconds
	    	remaining = remaining.toFixed(1) + ' seconds';
	    else {
	    	remaining /= 60; // convert to minutes
	    	var min = Math.floor(remaining);
	    	var sec = Math.floor((remaining % 1) * 60);
	    	if (new String(sec).length < 2)  // pad a zero
	    		sec = "0" + sec;
	    	remaining = min + 'm' + sec + 's';
	    }
  	    $('#progressIndRemain').html(remaining);
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            var link = $('<a>')
                .attr('target', '_blank')
                .prop('href', file.url);
            $(data.context.children()[index])
                .wrap(link);
        });
        
        // NM: submit form when upload is complete
        jQuery('#gform_1').submit();
    }).on('fileuploadfail', function (e, data) {
        $.each(data.result.files, function (index, file) {
            var error = $('<span/>').text(file.error);
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
}); // end uploader script

// NM: bind our submit button to submit the form by default
jQuery("#upload_btn").click(function () {
	if (validate_upload_form())
		jQuery('#gform_1').submit();
});
      
// qTip script for "What's this?" in the submission form
jQuery(function(){
jQuery('.tooltip1').qtip({
    content: {
        text: 'Upgrade to <a href="http://highbiasmastering.com/hbp/">High Bias Plus</a> to get mastering for as low as $20/track! See all <a href="http://highbiasmastering.com/hbp/">High Bias Plus plans</a>',
        title: {
            text: 'High Bias Plus'
        }
    },
    style: {
        tip: {
            corner: true
        }
    },
     position: {
        my: 'bottom center',  // Position my top left...
        at: 'top center'
    },
        show: 'click mouseenter',
		hide: 'unfocus'
	
	});
});