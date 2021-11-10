<template>
	<div>
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="创建一个GitHub仓库"></el-step>
			<el-step title="生成GitHub的Token"></el-step>
			<el-step title="使用"></el-step>
		</el-steps>
		<div class="help-content">
			<div v-if="active==0">
				<h3>
					<el-link href="https://github.com/new" target="_blank" type="primary">创建一个仓库</el-link>
					作为图床
				</h3>
				<img src="@/assets/help_images/new-repos.png" style="zoom: 80%"/>
			</div>

			<div v-if="active==1">
				<h3>生成Token</h3>
				<p>
					1.打开链接
					<el-link href="https://github.com/settings/tokens" target="_blank" type="primary">https://github.com/settings/tokens</el-link>
					点击 Generate new token 按钮
				</p>
				<p>
					2.在打开的 <b>New personal access token</b> 中选中<b>"public_repo"</b>，如下所示
				</p>
				<img src="@/assets/help_images/generate-token.png"/>
				<br>
				<p>3.然后点击 Generate token 按钮，即可生成一个token，如下：</p>
				<br>
				<img src="@/assets/help_images/token.png"/>
				<p style="color: red"><b>4.生成的TOKEN只会显示一次。记得保存！！</b></p>
			</div>

			<div v-if="active==2">
				<h3>使用</h3>
				<p>配置Token</p>
				<img src="@/assets/help_images/setting-token.png"/>
				<p>查看图床</p>
				<img src="@/assets/help_images/search.png" style="zoom: 80%"/>
				<p>上传文件</p>
				<img src="@/assets/help_images/upload.png"/>
			</div>
			<div v-if="active==3">
				<h2>OK！恭喜你完成使用教程！</h2>
				<p>
					<el-link href="https://github.com/Naccl" target="_blank" type="primary">作者：Naccl</el-link>
				</p>
				<p>
					<el-link href="https://github.com/Naccl/PictureHosting" target="_blank" type="primary">仓库地址：https://github.com/Naccl/PictureHosting 欢迎 Star</el-link>
				</p>
			</div>
		</div>

		<div style="text-align: center; margin-top: 20px">
			<el-button type="primary" @click="next(2)" v-if="active!==0">上一步</el-button>
			<el-button type="primary" @click="next(1)" v-if="active!==3">下一步</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Help",
		data() {
			return {
				active: 0,
			}
		},
		methods: {
			next(type) {
				if (type === 1) {
					this.active++
					if (this.active === 3) {
						this.msgSuccess('恭喜你完成教程')
					}
				} else {
					this.active--
				}
			},
		},
	}
</script>

<style>
	.help-content {
		text-align: center;
	}

	h3 .el-link, p .el-link {
		font-size: inherit;
	}
</style>