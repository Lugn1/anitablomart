<script setup>
import {reactive, ref} from 'vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const WEB3FORMS_ACCESS_KEY = "1d90dbfc-214e-4a7f-860f-f603ed390fc4";

const state = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const popupMessage = ref('');
const showPopup = ref(false);

async function submitEvent() {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      }),
    });
    const result = await response.json();

    if (result.success) {
      popupMessage.value = t('SendSuccess');
      state.name = '';
      state.email = '';
      state.subject = '';
      state.message = '';
    } else {
      popupMessage.value = t('SendError1');
    }
  } catch (error) {
    popupMessage.value = t('SendError2');
  }
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3000);
}
</script>

<template>
  <section>
    <h1>{{ $t('Contact') }}</h1>
    <h4>{{ $t('ContactHeader') }}</h4>
    <form @submit.prevent="submitEvent">
      <div class="form-group">
        <label for="name">{{ $t('NameLabel') }}</label>
        <input type="text" id="name" v-model="state.name" required>
      </div>

      <div class="form-group">
        <label for="email">{{ $t('EmailLabel') }}</label>
        <input type="email" id="email" v-model="state.email" required>
      </div>

      <div class="form-group">
        <label for="subject">{{ $t('SubjectLabel') }}</label>
        <input type="text" id="subject" v-model="state.subject" required>
      </div>

      <div class="form-group">
        <label for="message">{{ $t('MessageLabel') }}</label>
        <textarea id="message" v-model="state.message" required></textarea>
      </div>

      <button type="submit">{{ $t('SubmitLabel') }}</button>
    </form>
    <div v-if="showPopup" class="popup">
      {{ popupMessage }}
    </div>
  </section>
</template>


<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(30, 140, 60, 70%);
  color: white;
  border: 1px solid #ddd;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 50%;
  text-align: center;
  font-size: 1.2rem;
  z-index: 1000;
}

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
