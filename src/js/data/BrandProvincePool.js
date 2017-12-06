import g from './../../global';
var _hash = {};
export default class BrandProvincePool {
	constructor()
	{

	}

	update($dObj, $plat)
	{
		var platPool = _hash[$plat];
		if (!platPool)
		{
			_hash[$plat] = {};
			platPool = _hash[$plat]
		}

		if (!platPool[$dObj.id])
		{
			platPool[$dObj.id] = $dObj;
		}
	}

	getDataById($brandId, $plat)
	{
		var platPool = _hash[$plat];
		if (platPool)
		{
			if (platPool[$brandId])
			{
				return platPool[$brandId];
			}
			return
		}
		return
	}

	getAreaDataById($brandId, $plat)
	{
		var platPool = _hash[$plat];
		if (platPool)
		{
			if (platPool[$brandId])
			{
				var dataList = [];
				for (var index in platPool[$brandId].areaList)
				{
					var name = g.data.staticAreaPool.getDataById(index).name;

					var item = {
						id:index,
						name: name,
						value: platPool[$brandId].areaList[index]
					}
					dataList.push(item);
				}

				return dataList;
			}
			return
		}
		return

	}

	removeAll()
	{
		_hash = {}
	}
}

