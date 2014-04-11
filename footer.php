<?php
/**
 * Footer section template.
 * @package WordPress
 * @subpackage Iconic_One
 * @since Iconic One 1.0
 */
?>
	</div><!-- #main .wrapper -->

		<div class="site-wordpress">
				<?php if(dynamic_sidebar('crisis_footer_area')) : else : endif; ?>
				<p>All content © <?php echo date("Y"); ?> ARTOFCRISIS.COM.AU • Site developed by <a href="http://nicklong.id.au">NICK LONG</a></p>
				</div><!-- .site-info -->
				<div class="clear"></div>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>