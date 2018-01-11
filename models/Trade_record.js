var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Trade_record Model
 * =============
 */

var Trade_record = new keystone.List('Trade_record', {
	nocreate: true,
	noedit: true,
	lable:'交易数据',
});

Trade_record.add({
	trade_no: { label :'订单号', type: Types.Text,  index:true},
	open_id: { label :'OPEN_ID',type: Types.Text ,  index:true },
	type:{ label :'类型',type: Types.Select, options: [
		{ value: '0', label: '充值' },{ value: '1', label: '消费'}
	]},
	amount:{ label :'交易金额',type: Types.Number },
	balance:{ label :'可用余额',type: Types.Number },
	remark: { label :'备注',type: Types.Text  },
	time: { label :'时间',type: Date, default: Date.now },
	property:{
		type:Types.Boolean ,
		hidden:true,
		default:true
	},
});

Trade_record.defaultSort = '-create_time';
Trade_record.defaultColumns = 'trade_no, open_id,type,amount';
Trade_record.register();
