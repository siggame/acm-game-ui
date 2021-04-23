<template>
  <div id="blog-page">
    <div class="blog-header">
      <h1>ACM Game Blog</h1>

      <p>This is our blog! We write about all things AI, programming, and more!</p>

      <p>
        Interested in writing for us? Have an idea for an article?
        <br>
        Send an email to <strong>siggame@umsystem.edu</strong> for information on how to contribute.
      </p>
    </div>

    <div class="blog-panel">
      <div class="blog-controls bg-blue-200">
        <BlogFilter @select="filter.type = $event" />
        <BlogSearch @input="filter.text = $event" />
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
import BlogSearch from '@/components/BlogSearch.vue';
import BlogFilter from '@/components/BlogFilter.vue';
import BlogPreview from '@/components/BlogPreview.vue';

interface Blog {
  title: string;
  type: string;
  publishDate: string;
  author: string;
}

export default Vue.extend({
  name: 'Home',
  components: {
    BlogSearch,
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
      ] as Array<Blog>,
      filter: {
        text: '',
        type: 'all',
      },
    };
  },
  computed: {
    filteredBlogs(): Array<Blog> {
      return this.blogs.filter((blog) => {
        if (
          !(blog.title.toLowerCase().includes(this.filter.text)
            || blog.author.toLowerCase().includes(this.filter.text))
        ) {
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
  padding: 10px;
}

.blog-controls {
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 2px;
}

.blog-panel hr {
  margin: 0 0 10px 0;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
