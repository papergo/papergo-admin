var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Place Model
 * =============
 */

var Place = new keystone.List('Place', {
	nocreate: false,
	noedit: false,
	lable:'场所',
});

Place.add({
	code: { label :'代码', type: Types.Text,  index:true},
	name: { label :'名称',type: Types.Text  },
	city: { 
		code:{ label :'城市代码',type: Types.Text  },
		name :{ label :'城市名称',type: Types.Text }
	},
	contact: {
		name:{ label :'联系人',type: Types.Text },
		phone :{ label :'联系电话',type: Types.Text }
	},
	create_time: { label :'创建时间',type: Date, default: Date.now },
	lon:{ label :'经度',type: Types.Number },
	lat:{ label :'纬度',type: Types.Number },
	property:{ //删除:false,正常:true
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

Place.defaultSort = '-create_time';
Place.defaultColumns = 'code, name, city, contact';
Place.register();
