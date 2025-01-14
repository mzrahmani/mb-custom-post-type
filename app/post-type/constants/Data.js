import { __ } from '@wordpress/i18n';

export const BasicDatas = [
	{ type: 'text', name: 'labels.name', label: __( 'Plural name', 'mb-custom-post-type' ), required: true, tooltip: __( 'General name for the post type, usually plural', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.singular_name', label: __( 'Singular name', 'mb-custom-post-type' ), required: true, tooltip: __( 'Name for one object of this post type', 'mb-custom-post-type' ) },
	{ type: 'slug', name: 'slug', label: __( 'Slug', 'mb-custom-post-type' ), required: true, updateFrom: 'labels.singular_name', tooltip: __( 'Post type key. Must not exceed 20 characters and may only contain lowercase alphanumeric characters, dashes, and underscores', 'mb-custom-post-type' ) },
];

export const CodeDatas = [
	{ type: 'text', name: 'function_name', label: __( 'Function name', 'mb-custom-post-type' ), tooltip: __( 'Your function name that registers the post type', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'text_domain', label: __( 'Text domain', 'mb-custom-post-type' ), tooltip: __( 'Required for multilingual website. Used in the exported code only.', 'mb-custom-post-type' ) },
];

export const LabelDatas = [
	// Name
	// Singular name
	{ type: 'text', name: 'labels.add_new', label: __( 'Add new', 'mb-custom-post-type' ), default: __( 'Add New', 'mb-custom-post-type' ), tooltip: __( 'Label for adding a new singular item', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.add_new_item', label: __( 'Add new item', 'mb-custom-post-type' ), default: __( 'Add new %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for adding a new singular item', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.edit_item', label: __( 'Edit item', 'mb-custom-post-type' ), default: __( 'Edit %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for editing a singular item', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.new_item', label: __( 'New item', 'mb-custom-post-type' ), default: __( 'New %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for the new item page title', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.view_item', label: __( 'View item', 'mb-custom-post-type' ), default: __( 'View %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for viewing a singular item', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.view_items', label: __( 'View items', 'mb-custom-post-type' ), default: __( 'View %name%', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for viewing post type archives', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.search_items', label: __( 'Search items', 'mb-custom-post-type' ), default: __( 'Search %name%', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for searching items', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.not_found', label: __( 'Not found', 'mb-custom-post-type' ), default: __( 'No %name% found', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label used when no items are found', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.not_found_in_trash', label: __( 'Not found in trash', 'mb-custom-post-type' ), default: __( 'No %name% found in Trash', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label used when no items are in the Trash', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.parent_item_colon', label: __( 'Parent items', 'mb-custom-post-type' ), default: __( 'Parent %singular_name%:', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used to prefix parents of hierarchical items. Not used on non-hierarchical post types', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.all_items', label: __( 'All items', 'mb-custom-post-type' ), default: __( 'All %name%', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label to signify all items in a submenu link', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.archives', label: __( 'Nav menus archives', 'mb-custom-post-type' ), default: __( '%singular_name% Archives', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for archives in nav menus', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.attributes', label: __( 'Attributes meta box', 'mb-custom-post-type' ), default: __( '%singular_name% Attributes', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for the attributes meta box', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.insert_into_item', label: __( 'Media frame button', 'mb-custom-post-type' ), default: __( 'Insert into %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for the media frame button', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.uploaded_to_this_item', label: __( 'Media frame filter', 'mb-custom-post-type' ), default: __( 'Uploaded to this %singular_name%', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label for the media frame filter', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.featured_image', label: __( 'Featured image meta box', 'mb-custom-post-type' ), default: __( 'Featured image', 'mb-custom-post-type' ), tooltip: __( 'Label for the featured image meta box title', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.set_featured_image', label: __( 'Setting the featured image', 'mb-custom-post-type' ), default: __( 'Set featured image', 'mb-custom-post-type' ), tooltip: __( 'Label for setting the featured image', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.remove_featured_image', label: __( 'Removing the featured image', 'mb-custom-post-type' ), default: __( 'Remove featured image', 'mb-custom-post-type' ), tooltip: __( 'Label for removing the featured image', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.use_featured_image', label: __( 'Used as featured image', 'mb-custom-post-type' ), default: __( 'Use as featured image', 'mb-custom-post-type' ), tooltip: __( 'Label in the media frame for using a featured image', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.menu_name', label: __( 'Menu name', 'mb-custom-post-type' ), default: __( '%name%', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for the menu name', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.filter_items_list', label: __( 'Table filter hidden heading', 'mb-custom-post-type' ), default: __( 'Filter %name% list', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for the table views hidden heading', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.filter_by_date', label: __( 'Table date filter hidden heading', 'mb-custom-post-type' ), default: __( 'Filter by date', 'mb-custom-post-type' ), tooltip: __( 'Label for the date filter in list tables', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.items_list_navigation', label: __( 'Table pagination hidden heading', 'mb-custom-post-type' ), default: __( '%name% list navigation', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for the table pagination hidden heading', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.items_list', label: __( 'Table hidden heading', 'mb-custom-post-type' ), default: __( '%name% list', 'mb-custom-post-type' ), updateFrom: 'labels.name', tooltip: __( 'Label for the table hidden heading', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.item_published', label: __( 'Item published', 'mb-custom-post-type' ), default: __( '%singular_name% published', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used when an item is published', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.item_published_privately', label: __( 'Item published privately', 'mb-custom-post-type' ), default: __( '%singular_name% published privately', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used when an item is published with private visibility', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.item_reverted_to_draft', label: __( 'Item switched to draft', 'mb-custom-post-type' ), default: __( '%singular_name% reverted to draft', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used when an item is switched to a draft', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.item_scheduled', label: __( 'Item scheduled', 'mb-custom-post-type' ), default: __( '%singular_name% scheduled', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used when an item is scheduled for publishing', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'labels.item_updated', label: __( 'Item updated', 'mb-custom-post-type' ), default: __( '%singular_name% updated', 'mb-custom-post-type' ), updateFrom: 'labels.singular_name', tooltip: __( 'Label used when an item is updated', 'mb-custom-post-type' ) },
];

export const SupportDatas = {
	title: __( 'Title', 'mb-custom-post-type' ),
	editor: __( 'Editor', 'mb-custom-post-type' ),
	excerpt: __( 'Excerpt', 'mb-custom-post-type' ),
	author: __( 'Author', 'mb-custom-post-type' ),
	thumbnail: __( 'Thumbnail', 'mb-custom-post-type' ),
	trackbacks: __( 'Trackbacks', 'mb-custom-post-type' ),
	"custom-fields": __( 'Custom fields', 'mb-custom-post-type' ),
	comments: __( 'Comments', 'mb-custom-post-type' ),
	revisions: __( 'Revisions', 'mb-custom-post-type' ),
	"page-attributes": __( 'Page attributes', 'mb-custom-post-type' ),
	"post-formats": __( 'Post formats', 'mb-custom-post-type' ),
};

const CapabilityDatas = [
	{ value: 'post', label: __( 'Post', 'mb-custom-post-type' ) },
	{ value: 'page', label: __( 'Page', 'mb-custom-post-type' ) },
	{ value: 'custom', label: __( 'Custom', 'mb-custom-post-type' ) }
];

export const AdvancedDatas = [
	{ type: 'textarea', name: 'description', label: __( 'Description', 'mb-custom-post-type' ), placeholder: __( 'A short descriptive summary of what the post type is', 'mb-custom-post-type' ), tooltip: __( 'A short descriptive summary of what the post type is', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'public', label: __( 'Public', 'mb-custom-post-type' ), description: __( 'Controls how the type is visible to authors and readers.', 'mb-custom-post-type' ), tooltip: __( 'Whether a post type is intended for use publicly either via the admin interface or by front-end users', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'hierarchical', label: __( 'Hierarchical', 'mb-custom-post-type' ), description: __( 'Whether the post type is hierarchical.', 'mb-custom-post-type' ), tooltip: __( 'Whether the post type is hierarchical (e.g. page)', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'exclude_from_search', label: __( 'Exclude from search', 'mb-custom-post-type' ), description: __( 'Whether to exclude posts with this post type from frontend search results.', 'mb-custom-post-type' ), tooltip: __( 'Whether to exclude posts with this post type from front end search results', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'publicly_queryable', label: __( 'Publicly queryable', 'mb-custom-post-type' ), description: __( 'Whether queries can be performed on the frontend.', 'mb-custom-post-type' ), tooltip: __( 'Whether queries can be performed on the front end for the post type as part of parse_request()', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'show_ui', label: __( 'Show UI', 'mb-custom-post-type' ), description: __( 'Whether to generate a default UI for managing this post type in the admin.', 'mb-custom-post-type' ), tooltip: __( 'Whether to generate and allow a UI for managing this post type in the admin', 'mb-custom-post-type' ) },
	{ type: 'select', name: 'show_in_menu', label: __( 'Show in menu', 'mb-custom-post-type' ), description: __( 'Where to show the post type in the admin menu. Show UI must be enabled.', 'mb-custom-post-type' ), options: MBCPT.show_in_menu_options, tooltip: __( 'Where to show the post type in the admin menu', 'mb-custom-post-type' ) },
	{ type: 'select', name: 'menu_position', label: __( 'Menu position after', 'mb-custom-post-type' ), options: MBCPT.menu_position_options, dependency: 'show_in_menu:true', tooltip: __( 'The position in the menu order the post type should appear', 'mb-custom-post-type' ) },
	{ type: 'icon', name: 'menu_icon', label: __( 'Menu icon', 'mb-custom-post-type' ), dependency: 'show_in_menu:true', tooltip: __( 'The icon to be used for the admin menu (Dashicons)', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'show_in_nav_menus', label: __( 'Show in nav menus', 'mb-custom-post-type' ), description: __( 'Whether post type is available for selection in navigation menus.', 'mb-custom-post-type' ), tooltip: __( 'Makes this post type available for selection in navigation menus', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'show_in_admin_bar', label: __( 'Show in admin bar', 'mb-custom-post-type' ), description: __( 'Whether to make this post type available in the WordPress admin bar.', 'mb-custom-post-type' ), tooltip: __( 'Makes this post type available via the admin bar', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'show_in_rest', label: __( 'Show in REST', 'mb-custom-post-type' ), description: __( 'Whether to expose this post type in the REST API. Must be true to enable the Gutenberg editor.', 'mb-custom-post-type' ), tooltip: __( 'Whether to include the post type in the REST API. Set this to true for the post type to be available in the block editor', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'rest_base', label: __( 'REST API base slug', 'mb-custom-post-type' ), description: __( 'Leave empty to use the post type slug.', 'mb-custom-post-type' ), placeholder: __( 'Slug to use in REST API URL', 'mb-custom-post-type' ), tooltip: __( 'Custom base URL of REST API route', 'mb-custom-post-type' ) },
	{ type: 'select', name: 'capability_type', label: __( 'Capability type', 'mb-custom-post-type' ), description: __( 'If select custom capability, make sure to add capabilities to admin or other roles to add or edit posts of this type (using a plugin like Members or User Role Editor).', 'mb-custom-post-type' ), options: CapabilityDatas, default: 'post', tooltip: __( 'The string to use to build the read, edit, and delete capabilities', 'mb-custom-post-type' ) },
	// map_meta_cap
	// supports
	// taxonomies
	{ type: 'checkbox', name: 'has_archive', label: __( 'Has archive', 'mb-custom-post-type' ), description: __( 'Enables post type archives.', 'mb-custom-post-type' ), tooltip: __( 'Whether there should be post type archives. Will generate the proper rewrite rules if the rewrite settings is enabled', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'archive_slug', label: __( 'Custom archive slug', 'mb-custom-post-type' ), description: __( 'Default is the post type slug.', 'mb-custom-post-type' ), tooltip: __( 'The custom archive slug', 'mb-custom-post-type' ) },
	{ type: 'text', name: 'rewrite.slug', label: __( 'Custom rewrite slug', 'mb-custom-post-type' ), description: __( 'Leave empty to use the post type slug.', 'mb-custom-post-type' ), tooltip: __( 'Customize the permastruct slug', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'rewrite.with_front', label: __( 'Prepended permalink structure', 'mb-custom-post-type' ), description: __( 'Example: if your permalink structure is /blog/, then your links will be: false -> /news/, true -> /blog/news/.', 'mb-custom-post-type' ), tooltip: __( 'Whether the permastruct should be prepended', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'query_var', label: __( 'Query var', 'mb-custom-post-type' ), description: __( 'Enables request the post via URL: example.com/?post_type=slug', 'mb-custom-post-type' ), tooltip: __( 'Sets the custom query var key for this post type', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'can_export', label: __( 'Can export', 'mb-custom-post-type' ), description: __( 'Can this post type be exported', 'mb-custom-post-type' ), tooltip: __( 'Whether to allow this post type to be exported', 'mb-custom-post-type' ) },
	{ type: 'checkbox', name: 'delete_with_user', label: __( 'Delete with user', 'mb-custom-post-type' ), description: __( 'Whether to move posts to Trash when deleting a user', 'mb-custom-post-type' ), tooltip: __( 'Whether to delete posts of this type when deleting a user', 'mb-custom-post-type' ) },
];
