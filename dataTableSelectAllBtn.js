/**
 * Created by Kraft on 02.09.2016.
 */
var style = document.createElement('style');
style.innerHTML = `
	.dtRowSelectNone::before   {font-family: "Font Awesome 5 Free"; content: "\\f0c8"; font-weight: 400; font-size: 1.33em; line-height: .75em; vertical-align: -.0667em;}
	.dtRowSelectNotAll::before {font-family: "Font Awesome 5 Free"; content: "\\f146"; font-weight: 400; font-size: 1.33em; line-height: .75em; vertical-align: -.0667em;}
	.dtRowSelectAll::before    {font-family: "Font Awesome 5 Free"; content: "\\f14a"; font-weight: 400; font-size: 1.33em; line-height: .75em; vertical-align: -.0667em;}
`;
document.head.appendChild(style);

jQuery.fn.dataTable.ext.buttons.select_all = {
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
					that.text('<span class="dtRowSelectAll"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectNone', 'Deselect all'));
				}else if(count_selected > 0){
					that.text('<span class="dtRowSelectNotAll"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectAll', 'Select All'));
				}
				else{
					that.text('<span class="dtRowSelectNone"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectAll', 'Select All'));
				}
			}
		});
	}
};

jQuery.fn.dataTable.ext.buttons.select_all_current = {
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
					that.text('<span class="dtRowSelectAll"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectNone', 'Deselect all'));
				}else if(count_selected > 0){
					that.text('<span class="dtRowSelectNotAll"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectAll', 'Select All'));
				}
				else{
					that.text('<span class="dtRowSelectNone"></span>');
					that[0].node.setAttribute('title', that.i18n('buttons.selectAll', 'Select All'));
				}
			}
		});
	}
};
