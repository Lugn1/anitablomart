<script setup>
import { reactive, ref} from 'vue';


const emailAccessKey = "185ff84d-4f6c-4e2b-822b-fffb390988b4";

const popupMessage = ref('');
const showPopup = ref(false);

const state = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

async function submitEvent() {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: emailAccessKey ,
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      }),
    });
    const result = await response.json();

    if (result.success) {
      popupMessage.value = 'Meddelandet har skickats framgångsrikt!';

      state.name = '';
      state.email = '';
      state.subject = '';
      state.message = '';
    } else {
      popupMessage.value = 'Det gick inte att skicka meddelandet. Försök igen senare.';
    }
  } catch (error) {
    popupMessage.value = 'Ett fel inträffade. Kontrollera din internetanslutning.';
  }
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3000);
}
</script>

<template>
  <div>
    <h1>Kontakt</h1>
    <h4>Fyll i formuläret och skicka så svarar jag så fort jag kan</h4>
    <form @submit.prevent="submitEvent">
      <div class="form-group">
        <label for="name">Namn:</label>
        <input type="text" id="name" v-model="state.name" required>
      </div>

      <div class="form-group">
        <label for="email">E-post:</label>
        <input type="email" id="email" v-model="state.email" required>
      </div>

      <div class="form-group">
        <label for="subject">Ämne:</label>
        <input type="text" id="subject" v-model="state.subject" required>
      </div>

      <div class="form-group">
        <label for="message">Meddelande:</label>
        <textarea id="message" v-model="state.message" required></textarea>
      </div>

      <button type="submit">Skicka</button>
    </form>
    <div v-if="showPopup" class="popup">
      {{ popupMessage }}
    </div>
  </div>
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
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
