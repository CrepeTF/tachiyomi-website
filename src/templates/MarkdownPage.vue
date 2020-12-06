<template>
	<Layout>
		<div class="flex flex-wrap items-start justify-start">
			<div class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky" style="top: 4rem">
				<OnThisPage />
			</div>

			<div class="order-1 w-full md:w-2/3">
				<VueRemarkContent id="Markdown" />

				<div v-if="this.$page.markdownPage.editOnGithub == true" class="mt-2 pt-4">
					<EditOnGithub />
				</div>

				<div
					v-if="this.$page.markdownPage.prev !== '' || this.$page.markdownPage.next !== ''"
					class="mt-6 pt-8 border-t border-ui-border"
				>
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    content
    sidebar
	editOnGithub
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";
import EditOnGithub from "@/components/EditOnGithub.vue";

export default {
	components: {
		OnThisPage,
		NextPrevLinks,
		EditOnGithub,
	},

	metaInfo() {
		const title = this.$page.markdownPage.title;
		const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

		return {
			title: title,
			meta: [
				{
					name: "description",
					content: description,
				},
				{
					key: "og:title",
					name: "og:title",
					content: title,
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: title,
				},
				{
					key: "og:description",
					name: "og:description",
					content: description,
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: description,
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "prism-themes/themes/prism-material-oceanic.css";

#Markdown {
	ul,
	ol {
		list-style: revert;
		padding: revert;
	}
}
</style>