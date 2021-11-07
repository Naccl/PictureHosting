<template>
	<div>
		<el-row>
			<el-col>
				<el-select v-model="activeRepos" placeholder="请选择仓库" :filterable="true" @change="selectRepos">
					<el-option v-for="item in reposList" :key="item.id" :label="item.name" :value="item.name"></el-option>
				</el-select>
				<el-cascader v-model="activePath" placeholder="请选择目录" :props="pathProps" @change="selectPath"></el-cascader>
			</el-col>
		</el-row>
		<el-button type="primary" size="medium" icon="el-icon-check" @click="log">log</el-button>
	</div>
</template>

<script>
	import {getUserRepos, getReposContents} from "@/api/user";
let id = 0;
	export default {
		name: "Manage",
		data() {
			return {
				reposList: [],
				pathArr: [{value: '/', label: '/'}],
				activeRepos: '',
				activePath: '',
				pathProps: {
					lazy: true,
					checkStrictly: true,
					lazyLoad(node, resolve) {
						const {level} = node;
						setTimeout(() => {
							const nodes = Array.from({length: level + 1}).map(item => ({
								value: ++id,
								label: `选项${id}`,
								leaf: level >= 2
							}));
							// 通过调用resolve将子节点数据返回，通知组件数据加载完成
							resolve(nodes);
						}, 1000);
					}
				}
			}
		},
		created() {
			const token = localStorage.getItem("githubToken")
			const userInfo = localStorage.getItem('githubUserInfo')
			if (token && userInfo) {
				this.userInfo = JSON.parse(userInfo)
				this.getRepos()
			} else {
				this.msgError('请先配置Token')
				this.$router.push('/pictureHosting/setting')
			}
		},
		methods: {
			//获取用户仓库
			getRepos() {
				getUserRepos(this.userInfo.login).then(res => {
					this.reposList = res
				})
			},
			//遍历目录树 貌似目录级数太多 组件加载不出来？
			// selectRepos(fatherPathArr, fatherPath) {
			// 	getReposContents(this.userInfo.login, this.activeRepos, fatherPath).then(res => {
			// 		res.forEach(item => {
			// 			if (item.type === 'dir') {
			// 				fatherPathArr.push({value: item.name, label: item.name})
			// 			}
			// 		})
			// 		fatherPathArr.forEach(item => {
			// 			item['children'] = []
			// 			this.selectRepos(item.children, `${fatherPath}/${item.value}`)
			// 		})
			// 	})
			// },
			//换成懒加载
			selectRepos() {
				getReposContents(this.userInfo.login, this.activeRepos, '').then(res => {
					res.forEach(item => {
						if (item.type === 'dir') {
							this.pathArr.push({value: item.name, label: item.name})
						}
					})
				})
			},
			log() {
				console.log(this.pathArr)
			},
			selectPath() {
				console.log(this.activePath)
			}
		},
	}
</script>

<style scoped>
	.el-select + .el-cascader {
		margin-left: 10px;
	}
</style>