<script setup>
const handleSubmit = () => {
  alert('Form Submitted!');
};

</script>

<template>
  <div>
    <h1>{{$t('Contact')}}</h1>
    <h4>{{$t('ContactHeader')}}</h4>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">{{$t('NameLabel')}}</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">{{$t('EmailLabel')}}</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">{{$t('SubjectLabel')}}</label>
        <input type="text" id="subject" name="subject" required>
      </div>

      <div class="form-group">
        <label for="message">{{$t('MessageLabel')}}</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">{{$t('SubmitLabel')}}</button>
    </form>
  </div>
</template>



<style scoped>
.form-group {
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 100px;
  resize: vertical;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 125px;
}

button:hover {
  background-color: #0056b3;
}
</style>
