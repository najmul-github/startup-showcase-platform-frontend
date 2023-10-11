<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Display Pitch Information -->
        <div class="pitch-info pt-4">
          <h3>{{ pitch.title }}</h3>
          <p>{{ pitch.description }}</p>
          <p>Type: {{ pitch.pitch_type }}</p>
          <p>Created Date: {{ pitch.created_date }}</p>
        </div>

        <!-- Video Demonstration -->
        <div v-if="pitch.video_url">
          <h4>Video Demonstration</h4>
          <video :src="pitch.video_url" controls></video>
        </div>
        
        <!-- Presentation -->
        <div v-if="pitch.presentation_url">
          <h4>Presentation</h4>
          <a :href="pitch.presentation_url" target="_blank">View Presentation</a>
        </div>
        
        <!-- Comments Section -->
        <h4>Comments</h4>
        <div class="comments">
          <div v-for="comment in comments" :key="comment.id" class="comment">
            <p><strong>{{ comment.user_name }}</strong></p>
            <p>{{ comment.comment_text }}</p>
          </div>
        </div>
        
        <!-- Add Comment Form -->
        <h4>Add a Comment</h4>
        <form @submit.prevent="addComment" class="pb-5">
          <textarea v-model="newComment" placeholder="Add your comment"></textarea>
          <br>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pitch: {
        title: 'Sample Pitch',
        description: 'Description of the pitch goes here.',
        pitch_type: 'Institutional',
        video_url: 'https://www.example.com/video.mp4',
        presentation_url: 'https://www.example.com/presentation.pdf',
        created_date: '2023-10-15',
      },
      comments: [
        {
          id: 1,
          user_name: 'John Doe',
          comment_text: 'Great pitch! I am interested.',
        },
        {
          id: 2,
          user_name: 'Jane Smith',
          comment_text: 'Can you provide more details about your team?',
        },
        // Add more comments here
      ],
      newComment: '',
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim() !== '') {
        this.comments.push({
          id: this.comments.length + 1,
          user_name: 'Your Name', // Replace with the user's name
          comment_text: this.newComment,
        });
        this.newComment = '';
      }
    },
  },
};
</script>

<style scoped>
/* Add CSS styles for your components here */
.pitch-info {
  margin-bottom: 20px;
}

video {
  max-width: 100%;
}

.comments {
  margin-top: 20px;
}

.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
