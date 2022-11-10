<template>
  <div class="main">
    <form @submit.prevent>
      <div class="form__title">Авторизация</div>
      <my-input v-model="email" placeholder="Email" />
      <my-input v-model="password" placeholder="Пароль" />
      <my-button @click="login">Войти</my-button>
    </form>
    <router-link class="form__links" to="recovery">Забыли пароль?</router-link>
    <router-link class="form__links" to="/register">ЗАРЕГИСТРИРОВАТЬСЯ</router-link>
  </div>
</template>

<script>
import { authApi } from "../api/authApi";
export default {
  data() {
    return { email: "", password: "", errors: {} };
  },
  methods: {
    login() {
      authApi
        .login(this.email, this.password)
        .then((response) => {
          if (response.data.type === "error") {
            this.errors = response.data.errors;
            console.log(this.errors);
          } else {
            console.log(response.data);
          }
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
.form__links {
  color: #00833e;
  text-decoration: underline;
  margin-top: 48px;
}
</style>
