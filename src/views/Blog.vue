<script setup>

</script>

<template>
  <div class="main-container">
    <h1>Blogg</h1>
    <div class="posts">
        <p>Kommer snart..</p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  text-align: center;
}

.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 20px;
  font-style: italic;
}

.post {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  width: 60%;
}

.post h2 {
  color: #333;
}

.post p {
  color: #666;
}

.router-link {
  color: blue;
  text-decoration: none;
}

.date {
  font-size: 14px;
  font-style: italic;
}

</style>

