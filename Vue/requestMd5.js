import services from "@/utils/request";
import { apiUrl, objKeySort, Md5 } from "@/utils/public";

let $request = (setting) => {
	if (setting.method == "get" || setting.method == "GET") {
		setting.params = disposeData(setting.params || setting.data);
		delete setting.data;
	} else if (setting.method == "post" || setting.method == "POST") {
		setting.data = disposeData(setting.data || setting.params);
		delete setting.params;
	}
	return services(Object.assign({}, setting));

	function disposeData(data) {
		let datas = Object.assign(
			{
				sign: Md5(
					objKeySort(Object.assign(apiUrl().name, data)) + apiUrl().appsecret
				),
			},
			apiUrl().name,
			data
		);
		return datas;
	}
};

export default $request;
