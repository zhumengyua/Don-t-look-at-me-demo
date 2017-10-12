if (typeof(zbj) == 'undefined') {
	zbj = {};
}


(function(){
	zbj.data = {};
	
	$.extend(zbj.data,{
		data:{},
		investOrder : function(){
			var datasAll = [
				{"price":"￥ 200.00","title":"家装软件","name":"m_5889_oe549r","no":"10"},
				{"price":"￥ 6300.00","title":"VR广告", "name":"m_2166cz2gz6","no":"4 "},
				{"price":"￥ 30000.00","title":"我需要3D电影","name":"Mviemdi155","no":"3"},
				{"price":"￥ 2000.00","title":"3D全景视频","name":"xieng-458","no":"5"},
				{"price":"￥ 3000.00","title":" 药店3D效果图设计","name":"m_8951_wchzlr","no":"7"},
				{"price":"￥ 7000.00","title":" 红木家具场景全景图渲染","name":"m_2166cz2gz6","no":"20"},
				{"price":"￥ 30000.00","title":"时装VR广告","name":"t_7206wgrz7v","no":"17"},
				{"price":"￥ 5000.00","title":" 3D全景视频","name":"t_6700qzhbj4","no":"4"},
				{"price":"￥ 4000.00","title":" VR宣传片","name":"超哥2105","no":"10"},
				{"price":"￥ 3000.00","title":" 3D设计","name":"m_8951_wchzlr","no":"7"},
				{"price":"￥ 1000.00","title":"品牌VR", "name":"t_7206wgrz7v","no":"17"},
				{"price":"￥ 2000.00","title":"VR展示设计","name":"m_3987ddq9ia","no":"5"},
				{"price":"￥ 10000.00","title":" 地产公司","name":"m_3126_d3suvt","no":"9"},
				{"price":"￥ 20000.00","title":" 校园VR展示","name":"x13701105648","no":"20"},
				{"price":"￥ 8000.00","title":" 需要定制VR效果图","name":"m_20796yjacz","no":"9"},
				{"price":"￥ 4000.00","title":" 3D全景视频","name":"m_2166cz2gz6","no":"20"},
				{"price":"￥ 10000.00","title":" vr模拟驾驶开发","name":"m_5889_oe549r","no":"3"},
				{"price":"￥ 2000.00","title":" 我需要景区全景","name":"asdsdfg309","no":"3"},
				{"price":"￥ 8000.00","title":" VR看房","name":"t_6700qzhbj4","no":"4"},
				{"price":"￥ 5000.00","title":" VR宣传片","name":"t_8785sc1qx3","no":"1"},
				{"price":"￥ 12000.00","title":" 我需要VR园林","name":"m_3126_d3suvt","no":"9"},
				{"price":"￥32000.00","title":" VR开发-类似切水果的游戏软件","name":"m_2900_5o3ygl","no":"14"},
				{"price":"￥ 20000.00","title":"一个产业园的3D全景图","name":"t_7707qm4sa8","no":"4"},
				{"price":"￥ 4500.00","title":"VR产品效果图","name":"x13701105648","no":"20"},
				{"price":"￥ 23000.00","title":"VR创意视频","name":"open_ybfnfo76","no":"11"},
				{"price":"￥ 9000.00","title":" 消防VR宣传","name":"m_0958_69rsyj","no":"7"},
				{"price":"￥ 9200.00","title":"VR技术演示","name":"m_3525_FVsshS","no":"19"},
				{"price":"￥ 6000.00","title":"渲染3D现场实景图","name":"open_83k5_kuex","no":"9"},
				{"price":"￥ 6000.00","title":"720°图片 视频展示 VR呈现 H5","name":"t_6700qzhbj4","no":"4"},
				{"price":"￥ 9000.00","title":" 鸟瞰大场景、园区VR","name":"x13701105648","no":"20"},
				{"price":"￥ 10000.00","title":"3d家装软件","name":"open_ybfnfo76","no":"11"},
				{"price":"￥ 6000.00","title":" 制作效果图","name":"m_4704_pg4wi8","no":"7"},
				{"price":"￥ 3000.00","title":"企业生产线建模","name":"t_7707qm4sa8","no":"4"},
				{"price":"￥ 8000.00","title":" 做VR样板间效果图","name":"m_2900_5o3ygl","no":"14"},
				{"price":"￥ 7800.00","title":"舞美搭建3D效果图","name":"m_2166cz2gz6","no":"20"},
				{"price":"【可议价】","title":" VR游戏项目外包","name":"m_5889_oe549r","no":"3" },
				{"price":"￥ 9000.00","title":"视频VR、VR跟拍","name":"m_8222_805odu","no":"10"},
				{"price":"￥ 10000.00","title":" 开发VR游戏","name":"asdsdfg309","no":"3"},
				{"price":"￥ 25000.00","title":"活动现场VR直播","name":"t_7707qm4sa8","no":"4"},
				{"price":"【可议价】","title":"  我需要VR宣传片","name":"忙里偷闲666","no":"11"},
				{"price":"￥ 1000.00","title":" VR制作","name":"m_4704_pg4wi8","no":"7"},
				{"price":"￥ 200.00","title":" 按照要求设计模型","name":"asdsdfg309","no":"3"},
				{"price":"￥ 140.00","title":"沙发效果图","name":"m_7865oah0lo","no":"14"},
				{"price":"￥ 5000.00","title":"  制作酒吧3D效果图","name":"m_8273v85yhx","no":"9"},
				{"price":"￥ 10600.00","title":" 医教园.蓝基因医考企业宣传片制作","name":"m_3987ddq9ia","no":"5"},
				{"price":"【可议价】","title":"我需要VR实操培训微课开发","name":"m_1120_jr6k30","no":"2"},
				{"price":"￥ 8000.00","title":" 会议室等各类效果图","name":"m_8867_hhv85c","no":"25"},
				{"price":"￥ 10000.00","title":" 虚拟展览馆开发","name":"m_20796yjacz","no":"9"},
				{"price":"￥5000.00","title":" 展馆VR展示","name":"m_5889_oe549r","no":"3"},
				{"price":"￥5000.00","title":" VR样板间制作","name":"m_3126_d3suvt","no":"9"},
				{"price":"【可议价】","title":"vr制作","name":"m_8222_805odu","no":"10"},
				{"price":"￥ 1000.00","title":"  VR宣传片","name":"t_7206wgrz7v","no":"17"},
				{"price":"￥ 4600.00","title":"【被套】展示效果图","name":"open_ybfnfo76","no":"11"},
				{"price":"￥ 7800.00","title":"需要做一批软体家具3D效果图","name":"m_0958_69rsyj","no":"7"},
			];
				return datasAll;
			}
			
	});
})();
