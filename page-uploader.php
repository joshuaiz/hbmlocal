<?php
/*
Template Name: Uploader Page
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="twelvecol first clearfix" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article class="uploader">

								<header class="article-header">

								<h2>Uploader</h2>
								<p class="intro">Please see our <a href="/submissiontips/">submission tips</a> before uploading. To upload your project, fill out the required form fields and then select your project file from your computer or drag and drop your zip onto this page.</p>

								</header> <!-- end article header -->
								
								<section class="upload-form">
								<?php echo do_shortcode('[gravityform id=1 title=false description=false]') ; ?>
								</section>
								
								<section class="file-uploader">
								<p class="intro2">Use the 'Add File...' button to select your project file from your computer or you can drag and drop your file to this window. Please only upload one project at a time.<br>Allowed file types: zip (preferred), aiff, aif, wav. Click 'Submit' to begin the file upload and submit the form. Max upload size = 2GB.</p>
		<span class="btn btn-success fileinput-button">
        <i class="icon-plus icon-white"></i>
        <span>Add file...</span>
        <!-- The file input field used as target for the file upload widget -->
        <input id="fileupload" type="file" name="files[]">
    </span>
    
    <!-- The global progress bar -->
    <div id="progress" class="progress progress-success progress-striped">
        <div class="bar"></div>
    </div>
    <!-- The container for the uploaded files -->
    <div id="files" class="files"></div>
    
    <input id="upload_btn" type='button' class='button gform_button' value='Submit Form &amp; Begin Upload' tabindex='12' />
    
								</section>

								


							</article> <!-- end article -->

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry clearfix">
											<header class="article-header">
												<h1><?php _e("Oops, Post Not Found!", "bonestheme"); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e("Uh Oh. Something is missing. Try double checking things.", "bonestheme"); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e("This is the error message in the page-custom.php template.", "bonestheme"); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</div> <!-- end #main -->
						

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
