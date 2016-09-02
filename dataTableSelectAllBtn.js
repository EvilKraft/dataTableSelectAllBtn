/**
 * Created by Kraft on 02.09.2016.
 */
jQuery.fn.dataTable.ext.buttons.select_all = {
	text: function ( dt ) {
		return dt.i18n( 'buttons.selectAll', 'Select All');
	},
	action: function ( e, dt, node, config ) {
		var count_all      = dt.rows().data().length;
		var count_selected = dt.rows({selected: true}).data().length;

		if(count_selected < count_all){
			dt.rows().select();
		}else{
			dt.rows().deselect();
		}
	},
	init: function ( dt , node, config ) {
		var that = this;

		// .DT namespace listeners are removed by DataTables automatically on table destroy
		dt.on( 'draw.dt.DT select.dt.DT deselect.dt.DT', function () {
			if ( that.select.items() === 'row' ) {
				var count_all      = that.rows().count();
				var count_selected = that.rows({selected: true}).count();

				if(count_selected == count_all){
					that.text(that.i18n('buttons.selectNone', 'Deselect all'));
				}else{
					that.text(that.i18n('buttons.selectAll', 'Select All'));
				}
			}
		});
	}
};

jQuery.fn.dataTable.ext.buttons.select_all_current = {
	text: function ( dt ) {
		return dt.i18n( 'buttons.selectAll', 'Select All');
	},
	action: function ( e, dt, node, config ) {
		var count_all      = dt.rows({page:'current'}).data().length;
		var count_selected = dt.rows({page:'current', selected: true}).data().length;

		if(count_selected < count_all){
			dt.rows({page:'current'}).select();
		}else{
			dt.rows({page:'current'}).deselect();
		}
	},
	init: function ( dt , node, config ) {
		var that = this;

		// .DT namespace listeners are removed by DataTables automatically on table destroy
		dt.on( 'draw.dt.DT select.dt.DT deselect.dt.DT', function () {
			if ( that.select.items() === 'row' ) {
				var count_all      = that.rows({page:'current'}).count();
				var count_selected = that.rows({page:'current', selected: true}).count();

				if(count_selected == count_all){
					that.text(that.i18n('buttons.selectNone', 'Deselect all'));
				}else{
					that.text(that.i18n('buttons.selectAll', 'Select All'));
				}
			}
		});
	}
};