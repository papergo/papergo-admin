var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Trade Model
 * =============
 */

var Trade = new keystone.List('Trade', {
	nocreate: true,
	noedit: true,
	lable:'交易数据',
});

Trade.add({
	trade_no: { label :'订单号', type: Types.Text,  index:true},
	open_id: { label :'OPEN_ID',type: Types.Text ,  index:true },
	pro_id: { label :'产品ID',type: Types.Text ,  index:true },
	dev_phone: { label :'设备物联卡号',type: Types.Text ,  index:true },
	amount:{ label :'交易金额',type: Types.Number },
	size:{ label :'交易尺寸',type: Types.Number },
	score:{ label :'赠送积分',type: Types.Number ,default:0},
	pay_channel_no: { label :'支付通道订单号',type: Types.Text  },
	pay_info: { label :'支付通道订单号',type: Types.Text  },
	pay_status:{ label :'支付状态',type: Types.Select, options: [
		{ value: '0', label: '初始' },{ value: '-1', label: '失败' },{ value: '1', label: '成功'},{ value: '2', label: '其他'}
	]},
	direct: { label :'通知指令',type: Types.Text  },
	direct_phone: { label :'指令接收号码',type: Types.Text  },
	send_status:{ label :'发送状态',type: Types.Select, options: [
		{ value: '0', label: '初始' },{ value: '-1', label: '失败' },{ value: '1', label: '成功'},{ value: '2', label: '其他'}
	]},
	send_info: { label :'指令通知信息',type: Types.Text  },
	send_time: { label :'指令发送时间',type: Date, default: Date.now },
	pay_time: { label :'支付时间',type: Date, default: Date.now },
	property:{ 
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

Trade.defaultSort = '-create_time';
Trade.defaultColumns = 'trade_no, open_id,dev_phone, amount ,pay_status,pay_time ,send_status,send_time';
Trade.register();
