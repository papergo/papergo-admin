var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var Product = new keystone.List('Product', {
	nocreate: false,
	noedit: false,
	lable:'产品',
});

Product.add({
	code: { label :'代码', type: Types.Text,  index:true},
	name: { label :'名称',type: Types.Text  },
	price:{ label :'价格',type: Types.Number },
	size:{ label :'尺寸',type: Types.Number },
	score:{ label :'赠送积分',type: Types.Number },
	direct: { label :'指令',type: Types.Text  },
	type:{ label :'类型',type: Types.Select, options: [
		{ value: '2', label: '纸巾' },{ value: '1', label: '现金', }
	]},
	send:{ 
		label :'是否发送指令',
		type:Types.Boolean ,
		default:true
	},
	online:{
		label :'是否上线',
		type:Types.Boolean ,
		default:false
	},
	create_time: { label :'创建时间',type: Date, default: Date.now },
	property:{ //删除:false,正常:true
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

Product.defaultSort = '-create_time';
Product.defaultColumns = 'code, name, type';
Product.register();
