<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <div class="alert alert-success" role="alert" v-if="mustVerifyPhone">
        {{ $t('verify_phone_number') }}
      </div>
      <card v-if="mustVerifyPhone" :title="$t('register')" :subtitle="'الرجاء ادخل رمز التفعيل'">
        <!-- <div class="row justify-content-center">
          <div class="col-md-10">
          </div>
        </div> -->
        <form @submit.prevent="verify" @keydown="form.onKeydown($event)">
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('phone') }}</label>
              <input dir="ltr" style="text-align: end" v-model="form.phone" :class="{ 'is-invalid': form.errors.has('phone') }" class="form-control" type="text" name="phone" v-mask="'(##)###-####'" placeholder="(91)999-9999">
              <has-error :form="form" field="phone" />
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('verify_code') }}</label>
              <input v-model="form.verify_code" :class="{ 'is-invalid': form.errors.has('verify_code') }" class="form-control" type="text" name="verify_code">
              <has-error :form="form" field="verify_code" />
            </div>
          </div>
          <div class="form-group row justify-content-center mt-4">
            <div class="col-md-10 d-flex justify-content-between">
              <v-button :loading="form.busy" :type="'success'">
                تأكيد
              </v-button>
              <a class="btn btn-lg btn-light" @click.prevent="register">
                اعادة ارسال
              </a>
            </div>
          </div>
        </form>
      </card>
      <card v-else :title="$t('register')" :subtitle="'الرجاء ادخل البيانات المطلوبة'">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <!-- Name -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('name') }}</label>
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
              <has-error :form="form" field="name" />
            </div>
          </div>

          <!-- National id -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('national_id') }}</label>
              <input v-model="form.national_id" :class="{ 'is-invalid': form.errors.has('national_id') }" class="form-control" type="text" name="national_id">
              <has-error :form="form" field="national_id" />
            </div>
          </div>

          <!-- Passport no -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('passport_no') }}</label>
              <input v-model="form.passport_no" :class="{ 'is-invalid': form.errors.has('passport_no') }" class="form-control" type="text" name="passport_no">
              <has-error :form="form" field="passport_no" />
            </div>
          </div>

          <!-- Employer -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('employer') }}</label>
              <input v-model="form.employer" :class="{ 'is-invalid': form.errors.has('employer') }" class="form-control" type="text" name="employer">
              <has-error :form="form" field="employer" />
            </div>
          </div>

          <!-- Email -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('email') }}</label>
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>
          <!-- Phone -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('phone') }}</label>
              <input dir="ltr" style="text-align: end" v-model="form.phone" :class="{ 'is-invalid': form.errors.has('phone') }" class="form-control" type="text" name="phone" v-mask="'(##)###-####'" placeholder="(91)999-9999">
              <has-error :form="form" field="phone" />
            </div>
          </div>
          <!-- City Address -->
          <div class="form-group row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('branch') }}</label>
                <input v-model="form.branch" :class="{ 'is-invalid': form.errors.has('branch') }" class="form-control" type="text" name="branch">
                <has-error :form="form" field="branch" />
              </div>
            </div>
            <div class="col-md-5">
            <div class="form-group">
              <label>{{ $t('bank') }}</label>
              <input v-model="form.bank" :class="{ 'is-invalid': form.errors.has('bank') }" class="form-control" type="text" name="bank">
              <has-error :form="form" field="bank" />
            </div>
            </div>
          </div>
          <!-- City Address -->
          <div class="form-group row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('city') }}</label>
                <input v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }" class="form-control" type="text" name="city">
                <has-error :form="form" field="city" />
              </div>
            </div>
            <div class="col-md-5">
            <div class="form-group">
              <label>{{ $t('address') }}</label>
              <input v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }" class="form-control" type="text" name="address">
              <has-error :form="form" field="address" />
            </div>
            </div>
          </div>
          <!-- Password -->
          <div class="form-group row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('password') }}</label>
                <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                <has-error :form="form" field="password" />
              </div>
            </div>
            <div class="col-md-5">
            <div class="form-group">
              <label>{{ $t('confirm_password') }}</label>
              <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
              <has-error :form="form" field="password_confirmation" />
            </div>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-10 offset-md-1 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy">
                {{ $t('register') }}
              </v-button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import {Form, AlertErrors} from 'vform'
import Swal from 'sweetalert2'
import store from 'vuex'
import axios from 'axios'

export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      national_id: '',
      phone: '',
      city: '',
      address: '',
      passport_no: '',
      employer: '',
      email: '',
      bank: '',
      branch: '',
      password: '',
      password_confirmation: '',
      verify_code: ''
    }),
    mustVerifyPhone: false
  }),
  created() {
    axios.get('/api/guest').then(res => {
      const input = res.data;
      this.form = new Form(input);
    })
  },
  methods: {
    back() {
      this.mustVerifyPhone = false
    },
    resend() {
      this.mustVerifyPhone = false
    },
    async verify () {
      const { data } = await this.form.post('/api/register')
      if (data.verified == 0) {
        Swal.fire({
          type: 'error',
          title: 'خطأ في التفعيل!',
          text: 'ارجو التأكد من رمز التفعيل!'
        })
      }
      if (data.verified == 1 && data.registered == 1) {
        Swal.fire(
          'تم عملية التسجيل بنجاح!',
          'سيتم التواصل معك قريبا.',
          'success'
        )
        this.$router.push({ name: 'login' })
      }
    },
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/validate-registration')
      if (data.valid == 1 && data.verify == 1) {
        this.$store.dispatch('registration/saveGuest', this.form)
        this.mustVerifyPhone = true
      }
      // Must verify email fist.
      // if (data.status) {
      //   this.mustVerifyPhone = true
      // } else {
      //   // Log in the user.
      //   const { data: { token } } = await this.form.post('/api/login')

      //   // Save the token.
      //   this.$store.dispatch('auth/saveToken', { token })

      //   // Update the user.
      //   await this.$store.dispatch('auth/updateUser', { user: data })

      //   // Redirect home.
      //   this.$router.push({ name: 'home' })
      // }
    }
  }
}
</script>
