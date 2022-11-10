<template>
  <div>Активация аккаунта, требуется настроить сервер для правильной переадресации с данными почты и токеном
    <div><router-link class="form__links" to="/">Войти</router-link></div>
    <div><router-link class="form__links" to="/register">Зарегистрироваться</router-link></div>
  </div>
</template>

<script>
import { authApi } from "@/api/authApi";
export default {
  mounted() {
    authApi.activateAccount(
      "elnazka.khalitova@gmail.com",
      "0ttns-uUEIeMa5vCN5VtZqP2wRj_xcPV"
    );
  },
};
</script>
<style>
.form__links {
  color: #00833e;
  text-transform: uppercase;
  text-decoration: underline;
}
</style>
