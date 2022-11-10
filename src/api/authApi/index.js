import { loginApiInstance, parametrsApi } from "@/api";
export const authApi = {
  login(email, password) {
    const URL = `/user/login?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = { email, password };
    return loginApiInstance.post(URL, data);
  },
  register(
    email,
    password,
    password_confirm,
    country_id,
    firstname,
    lastname,
    midname,
    phone,
    language_id
  ) {
    const URL = `/user/register?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = {
      email,
      password,
      password_confirm,
      country_id,
      firstname,
      lastname,
      midname,
      phone,
      language_id,
    };
    return loginApiInstance.post(URL, data);
  },
  activateAccount(email, token) {
    const URL = `/user/activate-account?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = { email, token };
    return loginApiInstance.post(URL, data);
  },
  logOut() {
    const URL = `/user/logout?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    return loginApiInstance.post(URL);
  },
  recovery(email) {
    const URL = `/user/recovery?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = { email };
    return loginApiInstance.post(URL, data);
  },
  resetPswd(password, password_confirm) {
    const URL = `/user/reset-password?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = { password, password_confirm };
    return loginApiInstance.post(URL, data);
  },
  infoUse(
    id,
    service_id,
    firstname,
    lastname,
    midname,
    email,
    phone,
    country_id,
    language_id,
    zip_code,
    city,
    street,
    house,
    flat,
    last_ip,
    last_ua,
    last_seen,
    external_id,
    status
  ) {
    const URL = `/user/info?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = {
      id,
      service_id,
      firstname,
      lastname,
      midname,
      email,
      phone,
      country_id,
      language_id,
      zip_code,
      city,
      street,
      house,
      flat,
      last_ip,
      last_ua,
      last_seen,
      external_id,
      status,
    };
    return loginApiInstance.post(URL, data);
  },
  updateUse(
    firstname,
    lastname,
    midname,
    email,
    phone,
    country_id,
    language_id,
    zip_code,
    city,
    street,
    house,
    flat
  ) {
    const URL = `/user/update?pid=${parametrsApi.pid}&hash=${parametrsApi.hash}&sid=${parametrsApi.sid}`;
    const data = {
      firstname,
      lastname,
      midname,
      email,
      phone,
      country_id,
      language_id,
      zip_code,
      city,
      street,
      house,
      flat,
    };
    return loginApiInstance.post(URL, data);
  },
};
