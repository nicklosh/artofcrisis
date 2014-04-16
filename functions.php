<?php 

function iconic_one_crisis_scripts(){
	wp_enqueue_script('extra js', get_stylesheet_directory_uri() . '/js/extra.js');
}


add_action('wp_enqueue_scripts', 'iconic_one_crisis_scripts');

function iconic_one_crisis_widgets_init(){
	register_sidebar(array(
		'name' => 'CRISIS footer area', 
		'id' => 'crisis_footer_area',
		'before_widget' => '<div class="footer_menu">',
		'after_widget' => '</div>',
		'before_title' => '',
		'after_title' => ''
	));
}

add_action('widgets_init', 'iconic_one_crisis_widgets_init');

add_image_size('crisis-thumbnail', 180, 180, true);


?>