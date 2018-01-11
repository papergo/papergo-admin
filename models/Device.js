var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Device Model
 * =============
 */

var Device = new keystone.List('Device', {
	nocreate: false,
	noedit: false,
	lable:'设备',
});

Device.add({
	code: { label :'代码',type: Types.Text,  index:true},
	phone: { label :'物联卡号',type: Types.Text  },
	version: { label :'版本',type: Types.Text  },
	place: { label :'场所',type: Types.Relationship, ref: 'Place'},
	create_time: { label :'创建时间',type: Date, default: Date.now },
	main_time: { label :'维护时间',type: Date, default: Date.now },
	property:{ //删除:false,正常:true
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

Device.defaultSort = '-create_time';
Device.defaultColumns = 'code, phone, place, create_time , main_time';
Device.register();
