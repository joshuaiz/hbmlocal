<?php
/*
Template Name: Client Page
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="eightcol first clearfix" role="main">

						<div class="update clearfix">
							<a href="javascript:void(0);" class="close">X</a>

							<h2>Client Page Update -- Please Read</h2>
								<p>Due to a change in file storage policies at our web host, we are moving all Client project files to Amazon S3 (Simple Scalable Storage). If your files have been migrated you will notice different URLs from s3.amazonaws.com for your project files download links.</p>

								<p>Each Client has been given their own private directory on S3 and their own unique access urls for their files. With these new urls, you should not have to re-authenticate to download your files once you have logged in to the site. We recommend keeping these access urls private and not using these links to share your files. While unlikely, sharing these links may expose your unique Amazon S3 access key and give someone unauthorized access to your private directory. To share your files, download them to your local machine and use another service like Dropbox or Wetransfer to send to someone else.</p>

								<p>Note that we store Client project files as a convenience — we cannot guarantee storage of Client files. You are responsible for keeping backups for all of your files at all times. That said, we plan on continuing to offer project storage with any High Bias Plus plan. Please see our updated <a href="/terms/" target="_blank">Terms &amp; Conditions</a>.</p>
						</div>
						
						<?php $thetitle = strtolower(get_the_title());
		$shorttitle = str_replace(' ', '', $thetitle);
		$username = ( $userdata->user_login );
		
		$user = get_user_by( 'login', $shorttitle );
		?>

		<?php if ( current_user_can( 'level_10' ) || is_user_logged_in() && $username==$shorttitle )  { ?>
		
							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<header class="article-header">

									<h1 class="page-title"><?php the_title(); ?></h1>
								

								</header> <!-- end article header -->

								<section class="entry-content clearfix" itemprop="articleBody">
								
															
									<?php the_content(); ?>
								</section> <!-- end article section -->

								<footer class="article-footer">
								<!-- only show High Bias Plus info if user has not signed up -->
							<?php //check if the user is logged in and has a user ID
									global $user_ID; 
									if ($user_ID) {
										if ($havemeta = get_user_meta($userID,'hbp',true)) //stores the value of logged in user's meta data for 'test'.
											{ 
											echo '<div class="hbpoption"><a href="http://highbiasmastering.com/hbp/"><img class="alignleft" src="http://highbiasmastering.com/wordpress/wp-content/uploads/2012/01/hb_plus_logo_orange_96.png" height="56" width="56" /></a><p>Upgrade to <a href="http://highbiasmastering.com/hbp/">High Bias Plus</a> for mastering as low as $20/track!<br>Flat-rate mastering credits for labels of all sizes and budgets.</p></div>'; 
    } 
    } else { //no user ID is available so the user is not logged in
		echo 'You are not logged in';
		} ?>

								</footer> <!-- end article footer -->

							</article> <!-- end article -->

							<?php endwhile; endif; ?>
							
							<?php } elseif ( is_user_logged_in()==false ) { ?>

									<section class="clientcontent">

			<h2>Sorry...</h2>

				<p>You must be <a class="loggedin" href="http://highbiasmastering.com/wp-login.php">logged in</a> to access this area.</p>

			</section>

		<?php } elseif ( is_user_logged_in() && $username!=$shorttitle ) { ?>

			<div class="unlock_client">
			<p>Sorry, you don't have access to this page.</p>
			<a class="btn" href="http://highbiasmastering.com/clients/<?php global $userdata;
      					get_currentuserinfo(); echo( $userdata->user_login );?>">Go to your Client Page</a></div>
		<?php } ?>


							

						</div> <!-- end #main -->
				<?php if ( current_user_can( 'level_10' ) || is_user_logged_in() && $username==$shorttitle )  { ?>		
					<div id="sidebar1" class="sidebar fourcol last clearfix" role="complementary">
						
						<!--dynamic-cached-content--><?php dynamic_sidebar('sidebar1'); ?><!-- dynamic_sidebar('sidebar1'); --><!--/dynamic-cached-content-->
						
					</div>
					<?php } ?>
					

				</div> <!-- end #inner-content -->

			</div> <!-- end #content -->

<?php get_footer(); ?>
<script>
jQuery(document).ready(function($){
$('.update').hide();
	//set a variable <visited=false> in localStorage on page load
    localStorage.setItem("visited", "false");

    var visit=localStorage.getItem("visited");
        if(visit==="false") {
        	$('.update').show();
        	localStorage.setItem("visited","true");
        }
        $('a.close').on('click', function(c){
        $(this).parent().fadeOut('slow');
       
    });
});
</script>