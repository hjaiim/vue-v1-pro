import g from "./../../global";
import loginManager from "./../../js/manager/LoginManager";
var _params = null;
export default function (to, next)
{
	loginManager.checkLogin(to, next, () =>
	{
		next();
		searchMessageList(to.query).then(() =>
		{
			next();
		})
	})

}

export function searchMessageList($params)
{
	if (_params)
	{
		_params.update($params)
	}
	else
	{
		_params = createData($params);
	}
	var promise = new Promise((resolved, rejected) =>
	{
		g.net.call("message/queryMessageListByPage", _params).then(($data) =>
		{
			g.data.messagePool.removeAll();
			g.data.messagePool.update($data);
			resolved();
		}, (err) =>
		{
			rejected();
		})
	});
	return promise;

}

function createData($dObj)
{
	var d = {};
	d.readStatus = 0;
	d.page = 1;
	d.pageSize = 10;
	d.update = updateData.bind(d);
	d.update($dObj);
	return d;
}

function updateData($dObj)
{
	if (!$dObj)
	{
		return;
	}
	$dObj.hasOwnProperty("readStatus") && (this.readStatus = $dObj.readStatus);
	$dObj.hasOwnProperty("page") && (this.page = $dObj.page);
	$dObj.hasOwnProperty("pageSize") && (this.pageSize = $dObj.pageSize);
}

