<template>
    <div class="login animated slideInUp faster" @keydown.enter="handleSubmit">
        <el-row type="flex" justify="center" class="px-3">
            <el-col :md="12" :xs="24" :sm="12" class="max-w-sm">
                <el-card>
                    <div class="login-logo">
                        <i class="el-icon-eleme"></i>
                    </div>
                    <el-form :model="form" :rules="rules" ref="form">
                        <el-form-item prop="username">
                            <el-input v-model="form.username" clearable placeholder="请输入帐户名 / jeecg" size="large">
                                <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="form.password" show-password clearable
                                      placeholder="密码 / 123456" size="large">
                                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                            </el-input>
                        </el-form-item>
                        <idenfiry-code :form="form" ref="identifyCode"></idenfiry-code>
                        <el-form-item>
                            <el-button type="primary" size="large" class="w-full" @click="handleSubmit"
                                       :loading="loading" :disabled="loading">登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import IdenfiryCode from './component/IdentifyCode'
    import {http, constant, apiList, sweetAlert} from "@/utils";
    import {aesEncrypt} from '@/utils/encryption/aesEncrypt'

    export default {
        name: "login",
        components: {
            IdenfiryCode
        },
        data() {
            let checkCode = (rule, value, callback) => {
                //let {checkCode:{code}} =  this.$refs.identifyCode
                if (!value) {
                    callback(new Error('验证码不能为空'));
                }
                /*else if (value.toUpperCase() !== code.toUpperCase()) {
                    callback(new Error('请输入正确的验证码'));
                } */
                else {
                    callback()
                }
            }
            return {
                form: {
                    username: 'jeecg',
                    password: '123456',
                    captcha: '',
                    checkKey: Date.now()
                },
                loading: false,
                rules: {
                    username: [
                        {required: true, message: '账号不能为空', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'change'}
                    ],
                    captcha: [
                        {validator: checkCode, trigger: 'change'},
                    ],
                }
            }

        },
        methods: {
            ...mapActions({
                handleLogin: 'HANDLE_LOGIN'
            }),
            async handleParams(params) {

                //encryption(values.password,res.result.key,res.result.iv)
            },
            handleSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.login()
                    }
                })
            },
            async login() {
                this.loading = true
                /*let {password} = this.form
                let {success: pass, result: {iv, key}} = await http.get(apiList.login_encrypted)
                if (pass) {
                    let {checkCode:{code,key}} =  this.$refs.identifyCode
                    let params = {
                        ...this.form,
                        //password: aesEncrypt(password, key, iv)
                    }
                    let {success, message, result} = await http.post(apiList.login, params)
                    if (success) {
                        this.handleLogin(result)
                        this.$router.push({name: "dashboard"})
                    } else {
                        sweetAlert.error(message)
                    }
                }*/
                let params = {
                    ...this.form
                }
                let {success, message, result} = await http.post(apiList.login, params)
                if (success) {
                    this.handleLogin(result)
                    this.$router.push({name: "dashboard"})
                } else {
                    this.loading = false
                    sweetAlert.error(message)
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .login {
        &-logo {
            font-size: 4rem;
        }

        /deep/ .el-input {
            &:hover{
                &::before{
                    width: 100%;
                }
            }
            &::before{
                display: block;
                position: absolute;
                content: "";
                -webkit-transition: width .3s ease-in-out;
                -moz-transition: width .3s ease-in-out;
                -ms-transition: width .3s ease-in-out;
                -o-transition: width .3s ease-in-out;
                transition: width .3s ease-in-out;
                bottom: -1px;
                width: 0;
                height: 1px;
                background-color: #174879;
            }
            &__prefix {
                left : 3px;
            }
            &__inner {
                border: none;
                border-bottom: 1px solid #DCDFE6;
                border-radius: 0;
            }
            i {
                font-size: 16px;
            }
        }
    }
</style>
