/* eslint-disable */
<template>
  <div class="main">
    <form @submit.prevent>
      <div class="form__title">Восстановление пароля</div>
      <div class="form__message">
        Мы вышлем инструкцию по восстановлению пароля на Ваш email.
      </div>
      <my-input v-model="email" placeholder="Email" />
      <my-button class="form__button" @click="login">Восстановить</my-button>
    </form>
  </div>
</template>

<script>
import { authApi } from "../api/authApi";
export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      authApi
        .login(this.email, this.password)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form {
  width: 512px;
}
.form__title {
  text-align: center;
  margin-top: 84px;
  margin-bottom: 60px;
  letter-spacing: 0.02em;
  font-family: "Circe";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
}
.form__message {
  text-align: center;
  margin-bottom: 60px;
}
</style>
