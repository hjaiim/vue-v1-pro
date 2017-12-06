/**
 * Created by Administrator on 2017/6/8.
 */

import g from './../../global';
var _hash = {};
var _list = [];
export default class StaticNavPool {
	constructor()
	{

	}

	init($list)
	{
		for (var item of $list)
		{
			this.add(item);
		}
	}

	add($item)
	{
		var navData = createData($item);
		if (!_hash[navData.id])
		{
			_hash[navData.id] = navData;
			_list.push(navData);
		}
	}

	remove($navId)
	{
		var navData = _hash[$navId];
		if (_list.indexOf(navData) >= 0)
		{
			_list.splice(_list.indexOf(navData), 1)
		}
	}

	getDataById($navId)
	{
		return _hash[$navId]
	}

	get list()
	{
		return _list;
	}

	removeAll()
	{
		_hash = {};
		_list = [];
	}

}

function createData($obj)
{
	var d = {};
	d.id = $obj.id;
	d.name = $obj.name;
	d.path = $obj.path;
	d.highLightList = $obj.highLightList;
	return d;
}