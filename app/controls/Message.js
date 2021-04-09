const Msg = ( { label, name, value, update, description = '', required = false } ) => (
	<div className="mb-cpt-field mb-cpt-field-msg">
		<label className="mb-cpt-label" htmlFor={ name }>
			
		</label>
		<div className="mb-cpt-input">
			<span>ERROR: the slug must not be one of WordPress <a rel="nofollow" href="https://codex.wordpress.org/Reserved_Terms" target="_blank">Reserved Term*</a></span>
		</div>
	</div>
);

export default Msg;