<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <div class="alert alert-info" role="alert" v-if="sent">
        {{ $t('verify_phone_number') }}
      </div>
      <card v-if="mustVerifyPhone" :title="'2. التفعيل'" :subtitle="'الرجاء ادخال رمز التفعيل'" :loading="form.busy">
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
              <div>
                <a class="btn btn-lg btn-outline-light" @click.prevent="back">
                  عودة
                </a>
                <a class="btn btn-lg btn-light" @click.prevent="resend">
                  اعادة ارسال
                </a>
              </div>
              <v-button :loading="form.busy" :type="'success'">
                تأكيد
              </v-button>
            </div>
          </div>
        </form>
      </card>
      <card v-else :title="'1. التسجيل'" :subtitle="'الرجاء ادخال البيانات المطلوبة'" :loading="form.busy">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
          <!-- Name Date of birth-->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('name') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" autofocus>
                <has-error :form="form" field="name" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('date_of_birth') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.date_of_birth" :class="{ 'is-invalid': form.errors.has('date_of_birth') }" class="form-control" type="date" name="date_of_birth">
                <has-error :form="form" field="date_of_birth" />
              </div>
            </div>
          </div>
          <!-- Phone -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label class="mb-0">{{ $t('phone') }}</label>
              <span class="text-danger text-small">*</span>
              <br>
              <div class="mb-1" >
              <span style="font-size: 0.87rem">
                رقم الهاتف المحمول المسجل سيتم ربطه بحسابك و بطاقة يوني.
              </span>
              </div>
              <input dir="ltr" style="text-align: end" v-model="form.phone" :class="{ 'is-invalid': form.errors.has('phone') }" class="form-control" type="text" name="phone" v-mask="'(##)###-####'" placeholder="(91)000-0000">
              <has-error :form="form" field="phone" />
            </div>
          </div>
          <!-- City Address -->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('city') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }" class="form-control" type="text" name="city">
                <has-error :form="form" field="city" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('address') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }" class="form-control" type="text" name="address">
                <has-error :form="form" field="address" />
              </div>
            </div>
          </div>
          <div class="p-3"></div>
          <!-- National ID file-->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('national_id') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.national_id" :class="{ 'is-invalid': form.errors.has('national_id') }" class="form-control" type="text" name="national_id">
                <has-error :form="form" field="national_id" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('national_id_file') }}</label>
                <span class="text-danger text-small">*</span>
                <input @change="handleFile" :class="{ 'is-invalid': form.errors.has('national_id_file') }" class="form-control" type="file" name="national_id_file" ref="file">
                <has-error :form="form" field="national_id_file" />
              </div>
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
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('employee_no') }}</label>
              <input v-model="form.employee_no" :class="{ 'is-invalid': form.errors.has('employee_no') }" class="form-control" type="text" name="employee_no">
              <has-error :form="form" field="employee_no" />
            </div>
          </div>
          <!-- Employer employee -->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('employer') }}</label>
                <span class="text-danger text-small">*</span>
                <select class="form-control" @change="selectEmployer" :class="{ 'is-invalid': form.errors.has('employer') }">
                  <option disabled selected>اختر جهة عمل</option>
                  <option v-for="employer in employers" v-bind:value="employer.id">
                    {{ employer.name }}
                  </option>
                  <option value="">اخرى</option>
                </select>
                <has-error :form="form" field="employer" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('other_employer') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.other_employer" :class="{ 'is-invalid': form.errors.has('other_employer') }" class="form-control" type="text" name="other_employer" :disabled="other_employer_disabled" ref="other_employer">
                <has-error :form="form" field="other_employer" />
              </div>
            </div>
          </div>
          <!-- Branch Bank -->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('bank') }}</label>
                <input v-model="form.bank" :class="{ 'is-invalid': form.errors.has('bank') }" class="form-control" type="text" name="bank">
                <has-error :form="form" field="bank" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('branch') }}</label>
                <input v-model="form.branch" :class="{ 'is-invalid': form.errors.has('branch') }" class="form-control" type="text" name="branch">
                <has-error :form="form" field="branch" />
              </div>
            </div>
          </div>
          <div class="p-3"></div>
          <!-- Email -->
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <label>{{ $t('email') }}</label>
              <span class="text-danger text-small">*</span>
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>
          <!-- Password -->
          <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('password') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                <has-error :form="form" field="password" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label>{{ $t('confirm_password') }}</label>
                <span class="text-danger text-small">*</span>
                <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
                <has-error :form="form" field="password_confirmation" />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-10 offset-md-1 d-flex justify-content-between align-items-center pt-3">
              <div>
                <input type="checkbox" v-model="toggleRegister">
                &nbsp;&nbsp;
                <span class="custom-control-label">
                  <span>أوافق على
                    <a data-target="#terms-of-service" data-toggle="modal" class="text-primary" href="#terms-of-service"><u>شروط الخدمة</u></a> و
                    <a data-target="#privacy-policy" data-toggle="modal" class="text-primary" href="#privacy-policy"><u>سياسة الخصوصية</u></a> الخاصة بخدمة يوني و شركة ميزا.
                  </span>
                </span>
                <span class="text-danger">*</span>
              </div>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div class="col-md-10">
              <!-- Submit Button -->
              <button class="btn btn-shadow btn-lg btn-primary btn-multiple-state mt-4" :class="{'show-spinner': form.busy, 'disabled': !toggleRegister}" style="width: 100%; height: 50px">
                <span class="spinner d-inline-block">
                  <span class="bounce1"></span>
                  <span class="bounce2"></span>
                  <span class="bounce3"></span>
                </span>
                <span class="label">
                    {{ $t('register') }}
                </span>
              </button>
            </div>
          </div>
        </form>
      </card>
      <TermsOfService></TermsOfService>
      <PrivacyPolicy></PrivacyPolicy>
    </div>
  </div>
</template>
<script>
import { Form, AlertErrors } from 'vform'
import Swal from 'sweetalert2'
import store from 'vuex'
import axios from 'axios'
import { objectToFormData } from 'object-to-formdata'
import TermsOfService from '~/components/TermsOfService'
import PrivacyPolicy from '~/components/PrivacyPolicy'

export default {
  middleware: 'guest',
  components : {
    TermsOfService,
    PrivacyPolicy
  },
  metaInfo() {
    return { title: this.$t('register') }
  },

  data: () => ({
    sent: false,
    other_employer_disabled: true,
    toggleRegister: false,
    employers: window.employers,
    form: new Form({
      name: '',
      national_id: '',
      national_id_file: null,
      phone: '',
      city: '',
      address: '',
      passport_no: '',
      employee_no: '',
      employer: '',
      other_employer: '',
      email: '',
      bank: '',
      branch: '',
      password: '',
      password_confirmation: '',
      verify_code: '',
      date_of_birth: ''
    }),
    mustVerifyPhone: false
  }),
  created() {
    this.form.busy = true
    axios.get('/api/guest').then(res => {
      const input = res.data;
      this.form = new Form(input);
      if (this.form.name == null) {
        this.mustVerifyPhone = false;
      } else {
        this.mustVerifyPhone = true;
      }
      this.form.busy = false
    })
  },
  methods: {
    selectEmployer(e) {
      this.form.employer = e.target.value;
      this.other_employer_disabled = e.target.value == '' ? false : true;
      this.form.other_employer = ''
    },
    handleFile(e) {
      this.form.national_id_file = this.$refs.file.files[0]
    },
    back() {
      this.sent = false
      this.form.verify_code = ''
      this.mustVerifyPhone = false
    },
    async resend() {
      this.sent = false
      this.form.verify_code = ''
      const { data } = await this.form.post('/api/resend')
      if (data.valid == 1 && data.verify == 1) {
        setTimeout(function() {
          this.sent = true
        }, 1000)
      }
      if (data.valid == 0 && data.verify == 0) {
        this.errorAlert({ title: 'خطأ في عملية التسجيل!', message: 'ارجو اعادة المحاولة' })
        this.back()
      }
      this.sent = data.sent
    },
    verify() {
      this.form.submit('post', '/api/register', {
          transformRequest: [function(data, headers) {
            return objectToFormData(data)
          }]
        })
        .then(res => {
          const data = res.data
          if (data.verified == 0) {
            this.errorAlert({ title: 'خطأ في التفعيل!', text: 'ارجو التأكد من رمز التفعيل.' })
          }
          if (data.verified == 1 && data.registered == 1) {
            Swal.fire({
              type: 'success',
              title: 'تم عملية التسجيل بنجاح!',
              text: 'سيتم التواصل معك قريبا.',
              timer: 4000,
              onClose: function() {
                location.reload();
              }
            })
          }
        })
        .catch(error => {
          const data = error.response.data;
          if (data.valid == 0) {
            this.back()
          }
        })
    },
    async register() {
      // Register the user.
      const { data } = await this.form.submit('post', '/api/validate-registration', {
        transformRequest: [function(data, headers) {
          return objectToFormData(data)
        }]
      })
      if (data.valid == 1 && data.verify == 1) {
        this.mustVerifyPhone = true
      }
      this.sent = data.sent
    }
  }
}
</script>

<style>
  label {
    font-weight: 600;
  }
</style>
