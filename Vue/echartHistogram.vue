<template>
	<div style="width: 100%; height: 100%; position: relative">
		<div :id="idname" style="width: 100%; height: 100%"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
	import { EleResize } from "@/utils/esresize.js";
	export default {
		props: {
			idname: {
				type: String,
				required: true,
			},
			datalist: {
				type: Object,
				default: function () {
					return {
						title: [],
						data: [],
					};
				},
			},
		},
		data() {
			return {};
		},
		watch: {
			datalist: {
				handler(val, oldVal) {
					this.chartColumn();
				},
				deep: true,
			},
		},
		methods: {
			// 只适用图表方法
			drawLine(dom, option) {
				if (document.getElementById(dom)) {
					let myChart = echarts.init(document.getElementById(dom));
					let resizeDiv = document.getElementById(dom);
					myChart.clear();
					myChart.setOption(option);
					let listener = function () {
						myChart.resize();
					};
					EleResize.on(resizeDiv, listener);
				}
			},
			chartColumn(type) {
				// 折线图
				let dom = this.idname;
				let option = {
					tooltip: {
						show: true,
						trigger: "axis",
						formatter: "{b} : {c}",
						axisPointer: {
							type: "cross",
							label: {
								backgroundColor: "#03A98E",
							},
						},
					},
					xAxis: {
						type: "category",
						data: this.datalist.title,
						splitLine: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								color: "#B6B6B6",
							},
						},
					},
					yAxis: {
						type: "value",
						splitLine: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								color: "#B6B6B6",
							},
						},
						axisLabel: {
							textStyle: {
								color: "#B6B6B6",
							},
							formatter: function (value, index) {
								if (value >= 10000 && value < 10000000) {
									value = value / 10000 + "万";
								} else if (value >= 10000000) {
									value = value / 10000000 + "千万";
								}
								return value;
							},
						},
					},
					grid: {
						top: 10,
						bottom: 20,
					},

					series: {
						// data: [120],
						data: this.datalist.data,
						type: "bar",
						barMaxWidth: 25,
						barMinWidth: 25,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0,
									1,
									0,
									0,
									[
										{
											offset: 0,
											color: "#041119FF", // 0% 处的颜色
										},
										{
											offset: 1,
											color: "#00C9FFFF", // 100% 处的颜色
										},
									],
									false
								),
							},
						},
					},
				};

				this.drawLine(dom, option);
			},
		},
		mounted() {
			this.chartColumn();
		},
	};
</script>

<style>
</style>
