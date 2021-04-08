import { __ } from '@wordpress/i18n';

const DefaultSettings = {
	// Custom attributes.
	slug         : '',
	function_name: 'your_prefix_register_post_type',
	text_domain  : 'your-textdomain',

	label         : '',
	labels: {
		name                    : '',
		singular_name           : '',
		add_new                 : __( 'Add New', 'mb-custom-post-type' ),
		add_new_item            : '',
		edit_item               : '',
		new_item                : '',
		view_item               : '',
		view_items              : '',
		search_items            : '',
		not_found               : '',
		not_found_in_trash      : '',
		parent_item_colon       : '',
		all_items               : '',
		archives                : '',
		attributes              : '',
		insert_into_item        : '',
		uploaded_to_this_item   : '',
		featured_image          : __( 'Featured image', 'mb-custom-post-type' ),
		set_featured_image      : __( 'Set featured image', 'mb-custom-post-type' ),
		remove_featured_image   : __( 'Remove featured image', 'mb-custom-post-type' ),
		use_featured_image      : __( 'Use as featured image', 'mb-custom-post-type' ),
		menu_name               : '',
		filter_items_list       : '',
		filter_by_date          : '',
		items_list_navigation   : '',
		items_list              : '',
		item_published          : '',
		item_published_privately: '',
		item_reverted_to_draft  : '',
		item_scheduled          : '',
		item_updated            : '',
	},
	description        : '',
	public             : true,
	hierarchical       : false,
	exclude_from_search: false,
	publicly_queryable : true,
	show_ui            : true,
	show_in_menu       : true,
	show_in_nav_menus  : true,
	show_in_admin_bar  : true,
	show_in_rest       : true,
	rest_base          : '',
	menu_position      : '',
	menu_icon          : 'dashicons-admin-generic',
	capability_type    : 'post',
	supports           : ['title', 'editor', 'thumbnail'],
	taxonomies         : [],
	has_archive        : true,
	archive_slug       : '', // Custom attribute.
	rewrite            : {
		slug      : '',
		with_front: false,
	},
	query_var       : true,
	can_export      : true,
	delete_with_user: true,
}

export default DefaultSettings;
