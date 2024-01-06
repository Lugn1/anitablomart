<script setup>

</script>

<template>
  <div class="main-container">
    <h1>BLOGG</h1>
    <div class="posts">
      <div class="post">
        <h2>Inlägg Titel 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
        <p class="date">2024-01-06</p>
      </div>

      <div class="post">
        <h2>Inlägg Titel 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="date">2024-01-05</p>
      </div>

      <div class="post">
        <h2>Inlägg Titel 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="date">2024-01-04</p>
      </div>


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

