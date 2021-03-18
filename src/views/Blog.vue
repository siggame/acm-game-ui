<template>
  <div id="blog-page">
    <div class="blog-header">
      <h1>ACM Game Blog</h1>

      <p>This is our blog! We write about all things AI, programming, and more!</p>
    </div>

    <div class="blog-panel">
      <div class="blog-controls">
        <BlogFilter @select="filter.type = $event" />
        <SearchBar @input="filter.text = $event" />
      </div>
      <hr>

      <div class="blog-list">
        <BlogPreview
          v-for="(blog, index) of filteredBlogs"
          :key="index"
          :title="blog.title"
          :author="blog.author"
          :photo="blog.photo"
          :publish-date="blog.publishDate"
          :type="blog.type"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import BlogFilter from '@/components/BlogFilter.vue';
import BlogPreview from '@/components/BlogPreview.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    SearchBar,
    BlogFilter,
    BlogPreview,
  },
  data() {
    return {
      blogs: [
        {
          title: 'Happening Now: MegaMinerAI', type: 'announcement', publishDate: '3/18/2021', author: 'ACM Game',
        },
        {
          title: 'How to make an awesome AI', type: 'tutorial', publishDate: '3/1/2022', author: 'ACM Game',
        },
        {
          title: 'Easy Vue tutorial', type: 'tutorial', publishDate: '12/22/2025', author: 'ACM Game',
        },
        {
          title: 'Epic gaming time', type: 'experience', publishDate: '11/6/2002', author: 'ACM Game',
        },
      ],
      filter: {
        text: '',
        type: 'all',
      },
    };
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filteredBlogs(): Array<any> {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return this.blogs.filter((blog: any) => {
        if (!(blog.title.includes(this.filter.text) || blog.author.includes(this.filter.text))) {
          return false;
        }

        if (this.filter.type !== 'all' && blog.type !== this.filter.type) {
          return false;
        }

        return true;
      });
    },
  },
});
</script>

<style scoped>
#blog-page {
  width: 80%;
  margin: auto;

}

.blog-header {
}

.blog-controls {
  display: flex;
  justify-content: space-between;
}

.blog-panel hr {
  border: 2px solid blue;
  border-radius: 5px;
  margin: 0 0 10px 0;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
