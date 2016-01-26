<template lang="jade">
	.container
		.row
			.col-xs-12
				.jumbotron
					h2 {{title}}
</template>

<script>
	export default {
		data(){
			return {
				title:"Main Route"
			}
		}
	}
</script>