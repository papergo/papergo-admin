var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * =============
 */

var User = new keystone.List('User', {
	nocreate: true,
	noedit: true,
	lable:'用户',
});

User.add({
	open_id: { label :'OPEN_ID', type: Types.Text,  index:true},
	nick_name: { label :'昵称',type: Types.Text  },
	device: { label :'首次使用设备',type: Types.Text  },
	phone: { label :'手机号',type: Types.Text  },
	balance:{ label :'余额',type: Types.Number },
	score:{ label :'积分余额',type: Types.Number },
	create_time: { label :'创建时间',type: Date, default: Date.now },
	last_login_time: { label :'最后登录时间',type: Date, default: Date.now },
	property:{ //删除:false,正常:true
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

User.defaultSort = '-create_time';
User.defaultColumns = 'open_id, nick_name';
User.register();
