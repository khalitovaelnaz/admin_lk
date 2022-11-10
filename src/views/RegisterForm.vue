<template>
  <div class="main">
    <form @submit.prevent>
      <div class="form__title">Регистрация</div>
      <my-input v-model="email" placeholder="Email" />
      <my-input v-model="password" placeholder="Пароль" />
      <my-input v-model="password_confirm" placeholder="Повторение пароля" />
      <my-input v-model="country_id" placeholder="Id страны" />
      <my-input v-model="firstname" placeholder="Имя" />
      <my-input v-model="lastname" placeholder="Фамилия" />
      <my-input v-model="midname" placeholder="Отчество" />
      <my-input v-model="phone" placeholder="Номер телефона" />
      <my-input v-model="language_id" placeholder="Id языка" />
      <form>
        <input type="checkbox" />
        <label
          >Я принимаю условия
          <a href="#" class="checkbox__links"
            >пользовательского соглашения и политики конфиденциальности</a
          ></label
        >
      </form>
      <my-button @click="register">Зарегистрироваться</my-button>
      <router-link to="/activate-account">Активировать</router-link>
    </form>
    <router-link class="form__links" to="/">войти</router-link>
  </div>
</template>

<script>
import { authApi } from "../api/authApi";
export default {
  data() {
    return {
      email: "",
      password: "",
      password_confirm: "",
      country_id: "",
      firstname: "",
      lastname: "",
      midname: "",
      phone: "",
      language_id: "",
      errors: {},
    };
  },
  methods: {
    register() {
      authApi
        .register(
          this.email,
          this.password,
          this.password_confirm,
          this.country_id,
          this.firstname,
          this.lastname,
          this.midname,
          this.phone,
          this.language_id
        )
        .then((response) => {
          if (response.data.type === "error") {
            this.errors = response.data.errors;
            console.log(this.errors);
          } else {
            alert("Регистрация прошла");
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
  text-transform: uppercase;
  text-decoration: underline;
  margin-top: 48px;
}
.checkbox__links {
  color: #00833e;
  text-decoration: underline;
}
</style>
